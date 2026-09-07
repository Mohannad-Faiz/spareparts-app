const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { body, validationResult } = require('express-validator');
const { PurchaseOrder, Part, Transaction, User, sequelize } = require('../models');
const { authenticate, authorize } = require('../middleware/auth');
const { logAction } = require('../utils/audit');
const { withWriteLock } = require('../utils/dbLock');

// Helper: Generate PO Number (e.g. PO-2026-0012)
async function generatePONumber() {
  const count = await PurchaseOrder.count();
  const year = new Date().getFullYear();
  const seq = (count + 1).toString().padStart(4, '0');
  return `PO-${year}-${seq}`;
}

// ================================
// GET /api/orders/low-stock-summary - ملخص القطع المنخفضة المقترحة للطلب
// ================================
router.get('/low-stock-summary', authenticate, async (req, res) => {
  const parts = await Part.findAll({
    where: { isActive: true },
    order: [['currentQuantity', 'ASC']],
  });

  const lowStockParts = parts.filter(p => p.currentQuantity <= p.minimumStockLevel);
  const formatted = lowStockParts.map(p => {
    // الكمية المقترحة لإعادة الطلب = (حد الأمان * 2) - الكمية الحالية (بحد أدنى 5 أو ضعف حد الأمان)
    const suggestedQty = Math.max((p.minimumStockLevel * 2) - p.currentQuantity, p.minimumStockLevel || 5);
    return {
      id: p.id,
      partNumber: p.partNumber,
      partName: p.partName,
      category: p.category,
      brand: p.brand,
      model: p.model,
      location: p.location,
      unit: p.unit || 'pcs',
      supplier: p.supplier,
      currentQuantity: p.currentQuantity,
      minimumStockLevel: p.minimumStockLevel,
      suggestedQuantity: suggestedQty,
    };
  });

  res.json({
    count: formatted.length,
    items: formatted,
  });
});

// ================================
// GET /api/orders - قائمة كل أوامر الشراء
// ================================
router.get('/', authenticate, async (req, res) => {
  const { status, q } = req.query;
  const where = {};

  if (status) where.status = status;
  if (q) {
    where[Op.or] = [
      { poNumber: { [Op.like]: `%${q}%` } },
      { supplierName: { [Op.like]: `%${q}%` } },
    ];
  }

  const orders = await PurchaseOrder.findAll({
    where,
    order: [['createdAt', 'DESC']],
    include: [{ model: User, as: 'user', attributes: ['id', 'fullName', 'username'] }],
  });

  res.json(orders);
});

// ================================
// GET /api/orders/:id - تفاصيل أمر شراء واحد
// ================================
router.get('/:id', authenticate, async (req, res) => {
  const order = await PurchaseOrder.findByPk(req.params.id, {
    include: [{ model: User, as: 'user', attributes: ['id', 'fullName', 'username'] }],
  });
  if (!order) return res.status(404).json({ error: 'أمر الشراء غير موجود' });
  res.json(order);
});

// ================================
// POST /api/orders - إنشاء أمر شراء جديد (+ New Purchase Order)
// ================================
router.post('/', authenticate, authorize('admin', 'storekeeper'), [
  body('supplierName').notEmpty().withMessage('اسم المورد مطلوب'),
  body('items').isArray({ min: 1 }).withMessage('يجب إضافة قطعة واحدة على الأقل في أمر الشراء'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const {
    poNumber,
    supplierName,
    supplierContact,
    priority,
    expectedDate,
    department,
    notes,
    items,
  } = req.body;

  // حساب الإجمالي
  const totalAmount = (items || []).reduce((sum, item) => {
    const qty = Number(item.requestedQuantity) || 0;
    const price = Number(item.unitPrice) || 0;
    return sum + (qty * price);
  }, 0);

  if (poNumber) {
    const existing = await PurchaseOrder.findOne({ where: { poNumber } });
    if (existing) return res.status(409).json({ error: 'رقم أمر الشراء موجود مسبقاً' });
  }

  // محاولة الإنشاء مع إعادة المحاولة عند تعارض Unique الحقيقي (Race Condition protection)
  let order;
  try {
    order = await withWriteLock(async () => {
      const MAX_ATTEMPTS = 5;
      let createdOrder;
      for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        const finalPONumber = poNumber || await generatePONumber();
        try {
          createdOrder = await PurchaseOrder.create({
            poNumber: finalPONumber,
            supplierName,
            supplierContact: supplierContact || null,
            priority: priority || 'NORMAL',
            expectedDate: expectedDate || null,
            department: department || 'Main Store / مستودع التخزين المركزي',
            notes: notes || null,
            items: items || [],
            totalAmount,
            userId: req.user.id,
            createdByName: req.user.fullName || req.user.username,
            status: 'PENDING',
          });
          break;
        } catch (err) {
          const isUniqueConflict = err.name === 'SequelizeUniqueConstraintError';
          if (poNumber || !isUniqueConflict || attempt === MAX_ATTEMPTS) {
            throw err;
          }
        }
      }

      await logAction({
        userId: req.user.id,
        userName: req.user.fullName,
        action: 'PURCHASE_ORDER_CREATED',
        entityType: 'PurchaseOrder',
        entityId: createdOrder.id,
        details: { poNumber: createdOrder.poNumber, supplier: createdOrder.supplierName, itemsCount: items.length, totalAmount }
      });

      return createdOrder;
    });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'رقم أمر الشراء موجود مسبقاً' });
    }
    throw err;
  }

  res.status(201).json(order);
});

// ================================
// PATCH /api/orders/:id/status - تحديث حالة أمر الشراء (مثل الاستلام أو الإلغاء)
// ================================
router.patch('/:id/status', authenticate, authorize('admin', 'storekeeper'), async (req, res) => {
  const order = await PurchaseOrder.findByPk(req.params.id);
  if (!order) return res.status(404).json({ error: 'أمر الشراء غير موجود' });

  const { status, autoReceiveStock } = req.body;
  const VALID_STATUSES = ['DRAFT', 'PENDING', 'ORDERED', 'RECEIVED', 'CANCELLED'];
  if (!status) return res.status(400).json({ error: 'الحالة الجديدة مطلوبة' });
  if (!VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: `حالة غير صالحة. القيم المسموحة: ${VALID_STATUSES.join(', ')}` });
  }

  const oldStatus = order.status;
  order.status = status;
  await order.save();

  // إذا كانت الحالة استلام وتم تفعيل التوريد التلقائي
  if (status === 'RECEIVED' && oldStatus !== 'RECEIVED' && autoReceiveStock && Array.isArray(order.items)) {
    await withWriteLock(() => sequelize.transaction(async (t) => {
      for (const item of order.items) {
        if (item.partId) {
          const part = await Part.findByPk(item.partId, { transaction: t, lock: t.LOCK.UPDATE });
          if (part && part.isActive) {
            const qtyToAdd = Number(item.requestedQuantity) || 0;
            if (qtyToAdd > 0) {
              const newBal = part.currentQuantity + qtyToAdd;
              part.currentQuantity = newBal;
              await part.save({ transaction: t });

              await Transaction.create({
                partId: part.id,
                type: 'ADD',
                quantity: qtyToAdd,
                balanceAfter: newBal,
                userId: req.user.id,
                supplier: order.supplierName,
                poNumber: order.poNumber,
                notes: `Fulfillment of Purchase Order [${order.poNumber}] / استلام أمر شراء`,
              }, { transaction: t });
            }
          }
        }
      }
    }));
  }

  await logAction({
    userId: req.user.id,
    userName: req.user.fullName,
    action: 'PURCHASE_ORDER_STATUS_CHANGED',
    entityType: 'PurchaseOrder',
    entityId: order.id,
    details: { poNumber: order.poNumber, from: oldStatus, to: status }
  });

  res.json({ message: 'تم تحديث حالة أمر الشراء بنجاح', order });
});

// ================================
// DELETE /api/orders/:id - حذف أمر شراء (Admin only)
// ================================
router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  const order = await PurchaseOrder.findByPk(req.params.id);
  if (!order) return res.status(404).json({ error: 'أمر الشراء غير موجود' });

  await order.destroy();
  await logAction({
    userId: req.user.id,
    userName: req.user.fullName,
    action: 'PURCHASE_ORDER_DELETED',
    entityType: 'PurchaseOrder',
    entityId: req.params.id,
    details: { poNumber: order.poNumber }
  });

  res.json({ message: 'تم حذف أمر الشراء بنجاح' });
});

module.exports = router;
