const { AuditLog } = require('../models');

async function logAction({ userId, userName, action, entityType, entityId, details, transaction }) {
  try {
    await AuditLog.create({
      userId: userId || null,
      userName: userName || 'system',
      action,
      entityType: entityType || null,
      entityId: entityId ? String(entityId) : null,
      details: details ? JSON.stringify(details) : null,
    }, transaction ? { transaction } : undefined);
  } catch (err) {
    // لا نوقف العملية الأساسية إذا فشل تسجيل الـ Audit، لكن نطبع الخطأ
    console.error('Audit log failed:', err.message);
  }
}

module.exports = { logAction };
