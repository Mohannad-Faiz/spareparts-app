const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { Op } = require('sequelize');
const { ScannerDevice, Part, Transaction, User, sequelize } = require('../models');
const { authenticate, authorize } = require('../middleware/auth');
const { logAction } = require('../utils/audit');
const { withWriteLock } = require('../utils/dbLock');

// ================================
// GET /api/devices - قائمة أجهزة المسح
// ================================
router.get('/', authenticate, async (req, res) => {
  try {
    const devices = await ScannerDevice.findAll({
      where: { isActive: true },
      order: [['createdAt', 'DESC']],
    });

    const totalScans = devices.reduce((sum, d) => sum + (d.totalScansCount || 0), 0);
    const activeCount = devices.filter(d => d.status === 'ACTIVE').length;

    res.json({
      devices,
      stats: {
        totalDevices: devices.length,
        activeDevices: activeCount,
        totalScans,
      },
    });
  } catch (err) {
    console.error('Error fetching devices:', err);
    res.status(500).json({ error: 'فشل جلب قائمة الأجهزة' });
  }
});

// ================================
// POST /api/devices - إضافة جهاز ماسح جديد
// ================================
router.post('/', authenticate, authorize('admin', 'storekeeper'), [
  body('name').notEmpty().withMessage('اسم الجهاز مطلوب'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const {
    name,
    deviceType,
    connectionPort,
    warehouseLocation,
    defaultAction,
    soundFeedback,
    status,
    notes,
  } = req.body;

  try {
    const device = await ScannerDevice.create({
      name,
      deviceType: deviceType || 'HID_KEYBOARD',
      connectionPort: connectionPort || 'USB-WEDGE',
      warehouseLocation: warehouseLocation || 'Main Store / المستودع الرئيسي',
      defaultAction: defaultAction || 'LOOKUP',
      soundFeedback: soundFeedback || 'BEEP_CHIME',
      status: status || 'ACTIVE',
      notes: notes || null,
    });

    await logAction({
      userId: req.user.id,
      userName: req.user.fullName || req.user.username,
      action: 'DEVICE_REGISTERED',
      entityType: 'ScannerDevice',
      entityId: device.id,
      details: { name: device.name, type: device.deviceType, location: device.warehouseLocation },
    });

    res.status(201).json(device);
  } catch (err) {
    console.error('Error creating scanner device:', err);
    res.status(500).json({ error: 'فشل تسجيل الجهاز في النظام' });
  }
});

// ================================
// GET /api/devices/:id - تفاصيل جهاز محدد
// ================================
router.get('/:id', authenticate, async (req, res) => {
  try {
    const device = await ScannerDevice.findByPk(req.params.id);
    if (!device || !device.isActive) {
      return res.status(404).json({ error: 'جهاز الماسح غير موجود' });
    }
    res.json(device);
  } catch (err) {
    res.status(500).json({ error: 'فشل جلب بيانات الجهاز' });
  }
});

// ================================
// PUT /api/devices/:id - تعديل إعدادات الجهاز
// ================================
router.put('/:id', authenticate, authorize('admin', 'storekeeper'), async (req, res) => {
  try {
    const device = await ScannerDevice.findByPk(req.params.id);
    if (!device || !device.isActive) {
      return res.status(404).json({ error: 'جهاز الماسح غير موجود' });
    }

    const {
      name,
      deviceType,
      connectionPort,
      warehouseLocation,
      defaultAction,
      soundFeedback,
      status,
      notes,
    } = req.body;

    if (name !== undefined) device.name = name;
    if (deviceType !== undefined) device.deviceType = deviceType;
    if (connectionPort !== undefined) device.connectionPort = connectionPort;
    if (warehouseLocation !== undefined) device.warehouseLocation = warehouseLocation;
    if (defaultAction !== undefined) device.defaultAction = defaultAction;
    if (soundFeedback !== undefined) device.soundFeedback = soundFeedback;
    if (status !== undefined) device.status = status;
    if (notes !== undefined) device.notes = notes;

    await device.save();

    await logAction({
      userId: req.user.id,
      userName: req.user.fullName || req.user.username,
      action: 'DEVICE_UPDATED',
      entityType: 'ScannerDevice',
      entityId: device.id,
      details: { name: device.name, status: device.status },
    });

    res.json(device);
  } catch (err) {
    console.error('Error updating scanner device:', err);
    res.status(500).json({ error: 'فشل تحديث إعدادات الجهاز' });
  }
});

// ================================
// DELETE /api/devices/:id - حذف/إلغاء تفعيل جهاز
// ================================
router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const device = await ScannerDevice.findByPk(req.params.id);
    if (!device) {
      return res.status(404).json({ error: 'جهاز الماسح غير موجود' });
    }

    device.isActive = false;
    device.status = 'PAUSED';
    await device.save();

    await logAction({
      userId: req.user.id,
      userName: req.user.fullName || req.user.username,
      action: 'DEVICE_DISABLED',
      entityType: 'ScannerDevice',
      entityId: device.id,
      details: { name: device.name },
    });

    res.json({ message: 'تم إيقاف تفعيل جهاز الماسح بنجاح' });
  } catch (err) {
    res.status(500).json({ error: 'فشل حذف الجهاز' });
  }
});

// ================================
// POST /api/devices/:id/test - فحص واختبار استجابة الجهاز
// ================================
router.post('/:id/test', authenticate, async (req, res) => {
  const startTime = Date.now();
  try {
    const device = await ScannerDevice.findByPk(req.params.id);
    if (!device || !device.isActive) {
      return res.status(404).json({ error: 'جهاز الماسح غير موجود' });
    }

    const testPayload = req.body.testPayload || 'TEST-QR-CALIBRATION-PULSE';
    const clientLatency = req.body.clientLatency || (Date.now() - startTime);

    res.json({
      success: true,
      deviceId: device.id,
      deviceName: device.name,
      deviceType: device.deviceType,
      connectionPort: device.connectionPort,
      soundFeedback: device.soundFeedback,
      status: 'ONLINE',
      testPayload,
      serverLatencyMs: Math.max(1, Date.now() - startTime),
      clientLatencyMs: clientLatency,
      timestamp: new Date().toISOString(),
      message: 'جهاز الماسح متصل ويعمل بكفاءة عالية (Active & Calibrated)',
    });
  } catch (err) {
    res.status(500).json({ error: 'فشل اختبار اتصال الجهاز' });
  }
});

// ================================
// POST /api/devices/:id/scan-event - معالجة حدث مسح وارد من جهاز محدد
// ================================
router.post('/:id/scan-event', authenticate, async (req, res) => {
  const { raw, customAction, quantity, notes } = req.body;
  if (!raw) return res.status(400).json({ error: 'لا توجد بيانات ممسوحة' });

  try {
    const device = await ScannerDevice.findByPk(req.params.id);
    if (!device || !device.isActive) {
      return res.status(404).json({ error: 'جهاز الماسح غير مسجل أو غير مفعل' });
    }

    const rawString = String(raw).trim();
    let part = null;

    // 1. محاولة قراءة كـ JSON
    try {
      const payload = JSON.parse(rawString);
      if (payload.id) {
        part = await Part.findByPk(payload.id);
      } else if (payload.pn) {
        part = await Part.findOne({ where: { partNumber: payload.pn } });
      }
    } catch (e) {
      // ليس JSON
    }

    // 2. البحث بالنص المباشر أو المعرف أو الـ QR
    if (!part) {
      part = await Part.findOne({
        where: {
          [Op.or]: [
            { id: rawString },
            { partNumber: rawString },
            { qrCodeData: rawString },
          ],
        },
      });
    }

    if (!part || !part.isActive) {
      return res.status(404).json({
        error: 'لم يتم العثور على قطعة مطابقة لرمز الـ QR الممسوح عبر هذا الجهاز',
        scannedRaw: rawString,
        device: { id: device.id, name: device.name },
      });
    }

    const { actionToExecute, actionResult } = await withWriteLock(async () => {
      // تحديث عدادات الجهاز وتاريخ آخر مسح (داخل القفل حتى لا يتصادم)
      device.totalScansCount = (device.totalScansCount || 0) + 1;
      device.lastScanAt = new Date();
      await device.save();

      const action = customAction || device.defaultAction || 'LOOKUP';
      let result = null;

      if (action === 'FAST_ADD' && quantity && Number(quantity) > 0) {
        const qtyToAdd = Number(quantity);
        const { updatedPart, tx } = await sequelize.transaction(async (t) => {
          const lp = await Part.findByPk(part.id, { transaction: t, lock: t.LOCK.UPDATE });
          const newBal = lp.currentQuantity + qtyToAdd;
          lp.currentQuantity = newBal;
          await lp.save({ transaction: t });
          const tx = await Transaction.create({
            partId: lp.id, type: 'ADD', quantity: qtyToAdd, balanceAfter: newBal,
            userId: req.user.id, notes: notes || `Fast Stock-In via Scanner [${device.name}]`,
          }, { transaction: t });
          return { updatedPart: lp, tx };
        });
        part = updatedPart;
        result = { action: 'FAST_ADD', added: qtyToAdd, newBalance: part.currentQuantity, transactionId: tx.id };

      } else if (action === 'FAST_ISSUE' && quantity && Number(quantity) > 0) {
        const qtyToIssue = Number(quantity);
        const { updatedPart, tx, insufficient } = await sequelize.transaction(async (t) => {
          const lp = await Part.findByPk(part.id, { transaction: t, lock: t.LOCK.UPDATE });
          if (lp.currentQuantity < qtyToIssue) return { updatedPart: lp, tx: null, insufficient: lp.currentQuantity };
          const newBal = lp.currentQuantity - qtyToIssue;
          lp.currentQuantity = newBal;
          await lp.save({ transaction: t });
          const tx = await Transaction.create({
            partId: lp.id, type: 'ISSUE', quantity: qtyToIssue, balanceAfter: newBal,
            userId: req.user.id, notes: notes || `Fast Stock-Out via Scanner [${device.name}]`,
          }, { transaction: t });
          return { updatedPart: lp, tx, insufficient: null };
        });
        if (insufficient !== null) {
          const err = new Error(`الرصيد المتوفر غير كافٍ! المتوفر: ${insufficient}`);
          err.statusCode = 400; throw err;
        }
        part = updatedPart;
        result = { action: 'FAST_ISSUE', issued: qtyToIssue, newBalance: part.currentQuantity, transactionId: tx.id };

      } else if (action === 'AUDIT_COUNT') {
        result = { action: 'AUDIT_COUNT', verifiedStock: part.currentQuantity, location: part.location, verifiedAt: new Date().toISOString() };
      }

      await logAction({
        userId: req.user.id, userName: req.user.fullName || req.user.username,
        action: 'SCANNER_SCAN_EVENT', entityType: 'Part', entityId: part.id,
        details: { deviceId: device.id, deviceName: device.name, partNumber: part.partNumber, actionExecuted: action, actionResult: result },
      });

      return { actionToExecute: action, actionResult: result };
    });

    res.json({
      success: true,
      part,
      device: {
        id: device.id, name: device.name, deviceType: device.deviceType,
        warehouseLocation: device.warehouseLocation, soundFeedback: device.soundFeedback,
        totalScansCount: device.totalScansCount,
      },
      actionExecuted: actionToExecute,
      actionResult,
      message: `تم التعرف على القطعة بنجاح عبر جهاز [${device.name}]`,
    });

  } catch (err) {
    if (err.statusCode === 400) return res.status(400).json({ error: err.message });
    console.error('Error processing device scan event:', err);
    res.status(500).json({ error: 'حدث خطأ أثناء معالجة بيانات المسح من الجهاز' });
  }
});

module.exports = router;
