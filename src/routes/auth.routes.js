const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { User } = require('../models');
const { authenticate, authorize } = require('../middleware/auth');
const { logAction } = require('../utils/audit');
require('dotenv').config();

// حماية من هجمات Brute Force: حد أقصى 10 محاولات دخول فاشلة كل 15 دقيقة لكل IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'محاولات دخول كثيرة جداً، الرجاء المحاولة مرة أخرى بعد 15 دقيقة' },
  skipSuccessfulRequests: true,
});

// ================================
// POST /api/auth/login
// ================================
router.post('/login', loginLimiter, [
  body('username').notEmpty(),
  body('password').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user || !user.isActive) {
    return res.status(401).json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) {
    return res.status(401).json({ error: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role, fullName: user.fullName },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
  );

  await logAction({ userId: user.id, userName: user.fullName, action: 'LOGIN', entityType: 'User', entityId: user.id });

  res.json({
    token,
    user: { id: user.id, username: user.username, fullName: user.fullName, role: user.role },
  });
});

// ================================
// POST /api/auth/users  (Admin only) - إنشاء مستخدم جديد مع الصلاحيات
// ================================
router.post('/users', authenticate, authorize('admin'), [
  body('fullName').notEmpty(),
  body('username').notEmpty(),
  body('password').isLength({ min: 6 }),
  body('role').isIn(['admin', 'storekeeper', 'viewer']),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { fullName, username, email, password, role, permissions } = req.body;

  const existing = await User.findOne({ where: { username } });
  if (existing) return res.status(409).json({ error: 'اسم المستخدم مستخدم بالفعل' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ fullName, username, email, passwordHash, role, permissions: permissions || null });

  await logAction({ userId: req.user.id, userName: req.user.fullName, action: 'USER_CREATED', entityType: 'User', entityId: user.id, details: { role, permissions } });

  res.status(201).json({ id: user.id, username: user.username, fullName: user.fullName, role: user.role, permissions: user.permissions });
});

// ================================
// GET /api/auth/users  (Admin only) - قائمة المستخدمين والصلاحيات
// ================================
router.get('/users', authenticate, authorize('admin'), async (req, res) => {
  const users = await User.findAll({
    attributes: ['id', 'fullName', 'username', 'email', 'role', 'isActive', 'permissions', 'createdAt'],
    order: [['createdAt', 'ASC']],
  });
  const formatted = users.map(u => {
    const val = u.toJSON();
    if (typeof val.permissions === 'string') {
      try { val.permissions = JSON.parse(val.permissions); } catch (e) { val.permissions = []; }
    }
    return val;
  });
  res.json(formatted);
});

// ================================
// PATCH /api/auth/users/:id  (Admin only) - تعديل دور/صلاحيات/بيانات/كلمة مرور مستخدم
// ================================
router.patch('/users/:id', authenticate, authorize('admin'), async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'المستخدم غير موجود' });

  const { role, isActive, fullName, email, password, permissions } = req.body;
  if (role) user.role = role;
  if (typeof isActive === 'boolean') user.isActive = isActive;
  if (fullName) user.fullName = fullName;
  if (email !== undefined) user.email = email;
  if (permissions !== undefined) {
    user.permissions = Array.isArray(permissions) ? permissions : (typeof permissions === 'string' ? JSON.parse(permissions) : permissions);
  }
  if (password && password.trim().length >= 6) {
    user.passwordHash = await bcrypt.hash(password.trim(), 10);
  }

  await user.save();

  await logAction({ userId: req.user.id, userName: req.user.fullName, action: 'USER_UPDATED', entityType: 'User', entityId: user.id, details: { role: user.role, isActive: user.isActive, permissions: user.permissions } });

  const responseUser = user.toJSON();
  if (typeof responseUser.permissions === 'string') {
    try { responseUser.permissions = JSON.parse(responseUser.permissions); } catch (e) {}
  }
  delete responseUser.passwordHash;

  res.json(responseUser);
});

// ================================
// DELETE /api/auth/users/:id  (Admin only) - حذف مستخدم
// ================================
router.delete('/users/:id', authenticate, authorize('admin'), async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'المستخدم غير موجود' });

  if (user.id === req.user.id) {
    return res.status(400).json({ error: 'لا يمكنك حذف حسابك الحالي أثناء تسجيل الدخول به!' });
  }

  const username = user.username;
  await user.destroy();

  await logAction({ userId: req.user.id, userName: req.user.fullName, action: 'USER_DELETED', entityType: 'User', entityId: req.params.id, details: { username } });

  res.json({ success: true, message: `تم حذف المستخدم [${username}] بنجاح` });
});

// ================================
// GET /api/auth/permissions-matrix (Admin only) - مصفوفة الصلاحيات المتاحة
// ================================
router.get('/permissions-matrix', authenticate, authorize('admin'), (req, res) => {
  const permissions = [
    { key: 'parts:read', labelAr: 'عرض والبحث في قطع الغيار', group: 'المخزون والقطع' },
    { key: 'parts:create', labelAr: 'إضافة أصناف وقطع جديدة', group: 'المخزون والقطع' },
    { key: 'parts:edit', labelAr: 'تعديل بيانات القطع وحد الأمان', group: 'المخزون والقطع' },
    { key: 'parts:delete', labelAr: 'حذف قطع الغيار من النظام', group: 'المخزون والقطع' },
    { key: 'stock:in', labelAr: 'توريد وإضافة مخزون (+)', group: 'حركات المستودع' },
    { key: 'stock:out', labelAr: 'صرف رصيد وسحب قطع (-)', group: 'حركات المستودع' },
    { key: 'scanner:use', labelAr: 'استخدام أجهزة السكنر للباركود', group: 'الماسحات اللاسلكية' },
    { key: 'scanner:manage', labelAr: 'ربط وإعداد وتعيين الماسحات', group: 'الماسحات اللاسلكية' },
    { key: 'orders:read', labelAr: 'عرض ومتابعة أوامر الشراء', group: 'المشتريات والتوريد' },
    { key: 'orders:create', labelAr: 'إنشاء وتعديل أوامر الشراء', group: 'المشتريات والتوريد' },
    { key: 'orders:approve', labelAr: 'اعتماد واستلام وتوريد الطلبات', group: 'المشتريات والتوريد' },
    { key: 'users:manage', labelAr: 'إدارة المستخدمين وتعديل الصلاحيات', group: 'إدارة النظام' },
    { key: 'audit:read', labelAr: 'عرض سجلات الرقابة والتدقيق (Audit)', group: 'إدارة النظام' },
    { key: 'export:reports', labelAr: 'تصدير التقارير وجداول Excel', group: 'التقارير والإحصاء' },
  ];
  res.json(permissions);
});

// ================================
// GET /api/auth/audit-logs (Admin only)
// ================================
router.get('/audit-logs', authenticate, authorize('admin'), async (req, res) => {
  const { AuditLog } = require('../models');
  const logs = await AuditLog.findAll({
    order: [['createdAt', 'DESC']],
    limit: 100,
  });
  res.json(logs);
});

// ================================
// GET /api/auth/backups  (Admin only) - قائمة النسخ الاحتياطية
// ================================
router.get('/backups', authenticate, authorize('admin'), (req, res) => {
  const { listBackups } = require('../utils/backup');
  res.json(listBackups());
});

// ================================
// POST /api/auth/backups/run  (Admin only) - تشغيل نسخة احتياطية يدوية
// ================================
router.post('/backups/run', authenticate, authorize('admin'), async (req, res) => {
  const { runBackup, listBackups } = require('../utils/backup');
  await runBackup();
  const backups = listBackups();
  res.json({
    success: true,
    message: 'تم إنشاء النسخة الاحتياطية بنجاح',
    latest: backups[0] || null,
    total: backups.length,
  });
});

// ================================
// GET /api/auth/me
// ================================
router.get('/me', authenticate, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
