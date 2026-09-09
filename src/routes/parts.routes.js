const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { body, validationResult } = require('express-validator');
const { Part, Transaction, User, sequelize } = require('../models');
const { authenticate, authorize } = require('../middleware/auth');
const { buildPartQRPayload, generateQRImage, generatePartNumber } = require('../utils/qr');
const { logAction } = require('../utils/audit');
const { withWriteLock } = require('../utils/dbLock');

// ================================
// POST /api/parts  - إضافة قطعة غيار جديدة
// ================================
router.post('/', authenticate, authorize('admin', 'storekeeper'), [
  body('partName').notEmpty().withMessage('اسم القطعة مطلوب'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const {
    partNumber, partName, description, category, brand, model,
    location, minimumStockLevel, currentQuantity, unit, supplier, notes,
  } = req.body;

  const initialQty = Number(currentQuantity) || 0;

  // إذا زوّد المستخدم رقم قطعة يدوي، تحقق منه مباشرة (لا داعي لإعادة المحاولة هنا)
  if (partNumber) {
    const existing = await Part.findOne({ where: { partNumber } });
    if (existing) return res.status(409).json({ error: 'رقم القطعة موجود مسبقاً' });
  }

  // محاولة الإنشاء مع إعادة المحاولة عند تعارض Unique الحقيقي من قاعدة البيانات
  // (يحمي من Race Condition لو طلبين وصلوا في نفس اللحظة تقريباً واعتمدا على نفس العدّاد)
  let part;
  try {
    part = await withWriteLock(async () => {
      const MAX_ATTEMPTS = 5;
      let createdPart;
      for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        const finalPartNumber = partNumber || await generatePartNumber(Part);
        try {
          createdPart = await Part.create({
            partNumber: finalPartNumber,
            partName,
            description,
            category,
            brand,
            model,
            location,
            minimumStockLevel: Number(minimumStockLevel) || 0,
            currentQuantity: initialQty,
            unit: unit || 'pcs',
            supplier,
            notes,
          });
          break;
        } catch (err) {
          const isUniqueConflict = err.name === 'SequelizeUniqueConstraintError';
          if (partNumber || !isUniqueConflict || attempt === MAX_ATTEMPTS) {
            throw err;
          }
        }
      }

      // إنشاء QR فريد مرتبط بمعرف القطعة الحقيقي
      createdPart.qrCodeData = buildPartQRPayload(createdPart);
      await createdPart.save();

      // إذا كانت هناك كمية افتتاحية، نسجل حركة ADD أولية
      if (initialQty > 0) {
        await Transaction.create({
          partId: createdPart.id,
          type: 'ADD',
          quantity: initialQty,
          balanceAfter: initialQty,
          userId: req.user.id,
          notes: 'Initial opening stock upon creation / رصيد افتتاحي',
        });
      }

      await logAction({
        userId: req.user.id,
        userName: req.user.fullName,
        action: 'PART_CREATED',
        entityType: 'Part',
        entityId: createdPart.id,
        details: { partNumber: createdPart.partNumber, initialQty }
      });

      return createdPart;
    });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'رقم القطعة موجود مسبقاً' });
    }
    throw err;
  }

  res.status(201).json(part);
});

// ================================
// GET /api/parts/transactions/all - سجل كل الحركات في النظام
// ================================
router.get('/transactions/all', authenticate, async (req, res) => {
  const transactions = await Transaction.findAll({
    include: [
      { model: Part, as: 'part', attributes: ['id', 'partNumber', 'partName', 'unit', 'location'] },
      { model: User, as: 'user', attributes: ['id', 'fullName', 'username'] }
    ],
    order: [['createdAt', 'DESC']],
    limit: 100,
  });
  res.json(transactions);
});

// ================================
// GET /api/parts  - قائمة القطع + بحث وفلاتر
// ================================
router.get('/', authenticate, async (req, res) => {
  const { q, category, brand, location, lowStockOnly } = req.query;

  const where = { isActive: true };
  if (q) {
    where[Op.or] = [
      { partNumber: { [Op.like]: `%${q}%` } },
      { partName: { [Op.like]: `%${q}%` } },
      { category: { [Op.like]: `%${q}%` } },
      { brand: { [Op.like]: `%${q}%` } },
      { model: { [Op.like]: `%${q}%` } },
      { location: { [Op.like]: `%${q}%` } },
    ];
  }
  if (category) where.category = category;
  if (brand) where.brand = brand;
  if (location) where.location = location;

  let parts = await Part.findAll({ where, order: [['createdAt', 'DESC']] });

  if (lowStockOnly === 'true') {
    parts = parts.filter(p => p.currentQuantity <= p.minimumStockLevel);
  }

  res.json(parts);
});

// ================================
// GET /api/parts/:id  - تفاصيل قطعة واحدة
// ================================
router.get('/:id', authenticate, async (req, res) => {
  const part = await Part.findByPk(req.params.id);
  if (!part) return res.status(404).json({ error: 'القطعة غير موجودة' });
  res.json(part);
});

// ================================
// GET /api/parts/:id/qrcode  - إرجاع صورة QR
// ================================
router.get('/:id/qrcode', authenticate, async (req, res) => {
  const part = await Part.findByPk(req.params.id);
  if (!part) return res.status(404).json({ error: 'القطعة غير موجودة' });

  const payload = part.qrCodeData || buildPartQRPayload(part);
  const qrImage = await generateQRImage(payload);
  res.json({ partNumber: part.partNumber, qrImage, payload });
});

// ================================
// POST /api/parts/scan  - فحص وتحديد القطعة من مسح الـ QR الذكي
// ================================
router.post('/scan', authenticate, async (req, res) => {
  const { raw } = req.body;
  if (!raw) return res.status(400).json({ error: 'لا توجد بيانات ممسوحة' });

  let part = null;
  const rawString = String(raw).trim();

  // 1. محاولة قراءة كـ JSON
  try {
    const payload = JSON.parse(rawString);
    if (payload.id) {
      part = await Part.findByPk(payload.id);
    } else if (payload.pn) {
      part = await Part.findOne({ where: { partNumber: payload.pn } });
    }
  } catch (e) {
    // ليس JSON، البحث المباشر بالنص
  }

  // 2. إذا لم يُعثر عليها، البحث بـ UUID أو Part Number المباشر
  if (!part) {
    part = await Part.findOne({
      where: {
        [Op.or]: [
          { id: rawString },
          { partNumber: rawString },
          { qrCodeData: rawString },
        ]
      }
    });
  }

  if (!part || !part.isActive) {
    return res.status(404).json({ error: 'لم يتم العثور على قطعة مطابقة لرمز الـ QR الممسوح' });
  }

  res.json(part);
});

// ================================
// POST /api/parts/:id/add-stock  - إضافة مخزون واستلام (+ Add Stock)
// ================================
router.post('/:id/add-stock', authenticate, authorize('admin', 'storekeeper'), [
  body('quantity').isInt({ min: 1 }).withMessage('الكمية يجب أن تكون عدداً صحيحاً أكبر من 0'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const qty = Number(req.body.quantity);

  let part, transaction;
  try {
    // نستخدم Sequelize transaction() + row lock (t.LOCK.UPDATE) بدل UPDATE خام بـ SQL:
    // هذا يعمل بشكل صحيح ومضمون عبر postgres/mysql/sqlite الثلاثة (بنفس الطريقة
    // المستخدمة فعلاً في orders.routes.js و devices.routes.js في هذا المشروع)، بعكس
    // الكود القديم الذي كان يقارن isActive = 1 (رقم صحيح) مباشرة في SQL خام —
    // وهي مقارنة تفشل بخطأ SQL كامل على PostgreSQL (عمود من نوع boolean حقيقي)،
    // أي أن إضافة المخزون كانت ستتعطل بالكامل بمجرد تشغيل النظام على PostgreSQL.
    const result = await withWriteLock(() => sequelize.transaction(async (t) => {
      const fresh = await Part.findByPk(req.params.id, { transaction: t, lock: t.LOCK.UPDATE });
      if (!fresh || !fresh.isActive) {
        const err = new Error('القطعة غير موجودة');
        err.statusCode = 404;
        throw err;
      }

      const newBalance = fresh.currentQuantity + qty;
      fresh.currentQuantity = newBalance;
      await fresh.save({ transaction: t });

      const tx = await Transaction.create({
        partId: fresh.id,
        type: 'ADD',
        quantity: qty,
        balanceAfter: newBalance,
        userId: req.user.id,
        supplier: req.body.supplier || fresh.supplier || null,
        poNumber: req.body.poNumber || null,
        invoiceNumber: req.body.invoiceNumber || null,
        notes: req.body.notes || null,
      }, { transaction: t });

      await logAction({
        userId: req.user.id,
        userName: req.user.fullName,
        action: 'STOCK_ADDED',
        entityType: 'Part',
        entityId: fresh.id,
        details: { partNumber: fresh.partNumber, added: qty, newBalance },
        transaction: t,
      });

      return { part: fresh, transaction: tx };
    }));
    part = result.part;
    transaction = result.transaction;
  } catch (err) {
    if (err.statusCode === 404) return res.status(404).json({ error: err.message });
    throw err;
  }

  res.json({
    message: 'تمت إضافة الكمية إلى المخزون بنجاح',
    part,
    transaction,
  });
});

// ================================
// POST /api/parts/:id/issue-stock  - صرف مخزون (- Issue Stock)
// ================================
router.post('/:id/issue-stock', authenticate, authorize('admin', 'storekeeper'), [
  body('quantity').isInt({ min: 1 }).withMessage('الكمية يجب أن تكون عدداً صحيحاً أكبر من 0'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const qty = Number(req.body.quantity);

  let part, transaction;
  try {
    // نفس الملاحظة الموجودة في add-stock أعلاه: نستخدم transaction() + row lock
    // حقيقي (t.LOCK.UPDATE) بدل UPDATE خام بشرط isActive = 1 (كان يفشل تماماً على
    // PostgreSQL) مع "تحقق مزدوج" غير فعّال أصلاً (كان يفحص fresh.currentQuantity < 0
    // وهي حالة تستحيل أصلاً بسبب شرط الـ WHERE في نفس الاستعلام، فلم يكن يكتشف
    // التعارض المتزامن الحقيقي إطلاقاً). القفل هنا (t.LOCK.UPDATE) يمنع أي طلب آخر
    // من قراءة/تعديل نفس الصف حتى تنتهي هذه المعاملة بالكامل — فيستحيل صرف رصيد
    // سالب أو تسجيل حركة صرف لا تُطابق الرصيد الفعلي حتى مع طلبين متزامنين تماماً.
    const result = await withWriteLock(() => sequelize.transaction(async (t) => {
      const fresh = await Part.findByPk(req.params.id, { transaction: t, lock: t.LOCK.UPDATE });
      if (!fresh || !fresh.isActive) {
        const err = new Error('القطعة غير موجودة'); err.statusCode = 404; throw err;
      }
      if (fresh.currentQuantity < qty) {
        const err = new Error(`الرصيد المتوفر غير كافٍ! المتوفر حالياً: ${fresh.currentQuantity} ${fresh.unit || 'pcs'}`);
        err.statusCode = 400; throw err;
      }

      const newBalance = fresh.currentQuantity - qty;
      fresh.currentQuantity = newBalance;
      await fresh.save({ transaction: t });

      const tx = await Transaction.create({
        partId: fresh.id,
        type: 'ISSUE',
        quantity: qty,
        balanceAfter: newBalance,
        userId: req.user.id,
        vehicleNumber: req.body.vehicleNumber || null,
        equipmentNumber: req.body.equipmentNumber || null,
        employeeDriver: req.body.employeeDriver || null,
        department: req.body.department || null,
        project: req.body.project || null,
        workOrder: req.body.workOrder || null,
        reasonForIssue: req.body.reasonForIssue || null,
        notes: req.body.notes || null,
      }, { transaction: t });

      await logAction({
        userId: req.user.id,
        userName: req.user.fullName,
        action: 'STOCK_ISSUED',
        entityType: 'Part',
        entityId: fresh.id,
        details: { partNumber: fresh.partNumber, issued: qty, newBalance },
        transaction: t,
      });

      return { part: fresh, transaction: tx };
    }));
    part = result.part;
    transaction = result.transaction;
  } catch (err) {
    if (err.statusCode === 404 || err.statusCode === 400) {
      return res.status(err.statusCode).json({ error: err.message });
    }
    throw err;
  }

  res.json({
    message: 'تم صرف الكمية وتحديث المخزون بنجاح',
    part,
    transaction,
  });
});

// ================================
// GET /api/parts/:id/transactions  - سجل حركات قطعة محددة (View History)
// ================================
router.get('/:id/transactions', authenticate, async (req, res) => {
  const transactions = await Transaction.findAll({
    where: { partId: req.params.id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'fullName', 'username'] }
    ],
    order: [['createdAt', 'DESC']],
  });
  res.json(transactions);
});

// ================================
// PUT /api/parts/:id  - تعديل قطعة
// ================================
router.put('/:id', authenticate, authorize('admin', 'storekeeper'), async (req, res) => {
  const part = await Part.findByPk(req.params.id);
  if (!part) return res.status(404).json({ error: 'القطعة غير موجودة' });

  const fields = ['partName', 'description', 'category', 'brand', 'model', 'location', 'minimumStockLevel', 'unit', 'supplier', 'notes'];
  fields.forEach(f => {
    if (req.body[f] !== undefined) part[f] = req.body[f];
  });

  await part.save();
  await logAction({ userId: req.user.id, userName: req.user.fullName, action: 'PART_UPDATED', entityType: 'Part', entityId: part.id, details: req.body });

  res.json(part);
});

// ================================
// DELETE /api/parts/:id  - تعطيل (Soft Delete)
// ================================
router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  const part = await Part.findByPk(req.params.id);
  if (!part) return res.status(404).json({ error: 'القطعة غير موجودة' });

  part.isActive = false;
  await part.save();
  await logAction({ userId: req.user.id, userName: req.user.fullName, action: 'PART_DISABLED', entityType: 'Part', entityId: part.id });

  res.json({ message: 'تم تعطيل القطعة بنجاح' });
});

module.exports = router;
