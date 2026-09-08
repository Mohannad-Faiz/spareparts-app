const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { Asset, sequelize } = require('../models');
const { authenticate, authorize } = require('../middleware/auth');
const { logAction } = require('../utils/audit');
const QRCode = require('qrcode');

// ── توليد رقم أصل تلقائي مثل: AST-000001 ─────────────────────────────────
async function generateAssetNumber() {
  const count = await Asset.count();
  return `AST-${String(count + 1).padStart(6, '0')}`;
}

// ── توليد QR URL للأصل ────────────────────────────────────────────────────
function buildAssetQRUrl(asset) {
  const base = process.env.APP_URL || 'https://spareparts-app-production-543f.up.railway.app';
  return `${base}/asset/${asset.id}`;
}

async function generateQRImage(url) {
  return QRCode.toDataURL(url, { errorCorrectionLevel: 'M', margin: 2, width: 400 });
}

// ================================
// GET /api/assets — قائمة الأصول
// ================================
router.get('/', authenticate, async (req, res) => {
  const { category, status, search } = req.query;
  const where = { isActive: true };
  const { Op } = require('sequelize');

  if (category) where.category = category;
  if (status) where.status = status;
  if (search) {
    where[Op.or] = [
      { assetName:    { [Op.like]: `%${search}%` } },
      { assetNumber:  { [Op.like]: `%${search}%` } },
      { brand:        { [Op.like]: `%${search}%` } },
      { model:        { [Op.like]: `%${search}%` } },
      { assignedTo:   { [Op.like]: `%${search}%` } },
      { location:     { [Op.like]: `%${search}%` } },
      { plateNumber:  { [Op.like]: `%${search}%` } },
      { serialNumber: { [Op.like]: `%${search}%` } },
    ];
  }

  const assets = await Asset.findAll({ where, order: [['createdAt', 'DESC']] });
  res.json(assets);
});

// ================================
// GET /api/assets/stats
// ================================
router.get('/stats', authenticate, async (req, res) => {
  const total    = await Asset.count({ where: { isActive: true } });
  const active   = await Asset.count({ where: { isActive: true, status: 'active' } });
  const damaged  = await Asset.count({ where: { isActive: true, status: 'damaged' } });
  const lost     = await Asset.count({ where: { isActive: true, status: 'lost' } });
  const byCategory = await Asset.findAll({
    where: { isActive: true },
    attributes: ['category', [sequelize.fn('COUNT', sequelize.col('id')), 'count']],
    group: ['category'],
    raw: true,
  });
  res.json({ total, active, damaged, lost, byCategory });
});

// ================================
// GET /api/assets/:id
// ================================
router.get('/:id', authenticate, async (req, res) => {
  const asset = await Asset.findOne({ where: { id: req.params.id, isActive: true } });
  if (!asset) return res.status(404).json({ error: 'الأصل غير موجود' });
  res.json(asset);
});

// ================================
// GET /api/assets/:id/qrcode
// ================================
router.get('/:id/qrcode', authenticate, async (req, res) => {
  const asset = await Asset.findByPk(req.params.id);
  if (!asset) return res.status(404).json({ error: 'الأصل غير موجود' });
  const url = buildAssetQRUrl(asset);
  const qrImage = await generateQRImage(url);
  res.json({ assetNumber: asset.assetNumber, payload: url, qrImage });
});

// ================================
// POST /api/assets — إضافة أصل جديد
// ================================
router.post('/', authenticate, authorize('admin', 'storekeeper'), [
  body('assetName').notEmpty().withMessage('اسم الأصل مطلوب'),
  body('category').notEmpty().withMessage('الفئة مطلوبة'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const {
    assetNumber, assetName, category, brand, model,
    serialNumber, plateNumber, description, location, assignedTo,
    purchaseDate, purchaseValue, currency, supplier, status, notes,
  } = req.body;

  let asset;
  try {
    const finalNumber = assetNumber || await generateAssetNumber();

    if (assetNumber) {
      const existing = await Asset.findOne({ where: { assetNumber } });
      if (existing) return res.status(409).json({ error: 'رقم الأصل موجود مسبقاً' });
    }

    asset = await Asset.create({
      assetNumber: finalNumber,
      assetName,
      category,
      brand: brand || null,
      model: model || null,
      serialNumber: serialNumber || null,
      plateNumber: plateNumber || null,
      description: description || null,
      location: location || null,
      assignedTo: assignedTo || null,
      purchaseDate: purchaseDate || null,
      purchaseValue: purchaseValue || null,
      currency: currency || 'AED',
      supplier: supplier || null,
      status: status || 'active',
      notes: notes || null,
      createdById: req.user.id,
      createdByName: req.user.fullName || req.user.username,
    });

    // توليد QR بعد الإنشاء
    asset.qrCodeData = buildAssetQRUrl(asset);
    await asset.save();

    await logAction({
      userId: req.user.id,
      userName: req.user.fullName,
      action: 'ASSET_CREATED',
      entityType: 'Asset',
      entityId: asset.id,
      details: { assetNumber: asset.assetNumber, assetName, category },
    });

    res.status(201).json(asset);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'رقم الأصل موجود مسبقاً' });
    }
    throw err;
  }
});

// ================================
// PUT /api/assets/:id — تعديل أصل
// ================================
router.put('/:id', authenticate, authorize('admin', 'storekeeper'), async (req, res) => {
  const asset = await Asset.findOne({ where: { id: req.params.id, isActive: true } });
  if (!asset) return res.status(404).json({ error: 'الأصل غير موجود' });

  const allowed = [
    'assetName', 'category', 'brand', 'model', 'serialNumber', 'plateNumber',
    'description', 'location', 'assignedTo', 'purchaseDate',
    'purchaseValue', 'currency', 'supplier', 'status', 'notes',
  ];

  allowed.forEach(f => { if (req.body[f] !== undefined) asset[f] = req.body[f]; });
  await asset.save();

  await logAction({
    userId: req.user.id,
    userName: req.user.fullName,
    action: 'ASSET_UPDATED',
    entityType: 'Asset',
    entityId: asset.id,
    details: { assetNumber: asset.assetNumber },
  });

  res.json(asset);
});

// ================================
// DELETE /api/assets/:id — حذف (Soft Delete)
// ================================
router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  const asset = await Asset.findOne({ where: { id: req.params.id, isActive: true } });
  if (!asset) return res.status(404).json({ error: 'الأصل غير موجود' });

  asset.isActive = false;
  await asset.save();

  await logAction({
    userId: req.user.id,
    userName: req.user.fullName,
    action: 'ASSET_DELETED',
    entityType: 'Asset',
    entityId: asset.id,
    details: { assetNumber: asset.assetNumber },
  });

  res.json({ success: true, message: 'تم حذف الأصل' });
});

module.exports = router;
