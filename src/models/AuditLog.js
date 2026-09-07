const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// يسجل كل عملية حساسة (إنشاء/تعديل/تعطيل قطعة، تسجيل دخول، تغيير صلاحيات...)
// منفصل عن Transaction لأنه يغطي كل أحداث النظام وليس حركات المخزون فقط.
const AuditLog = sequelize.define('AuditLog', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: { type: DataTypes.UUID, allowNull: true },
  userName: { type: DataTypes.STRING, allowNull: true },
  action: { type: DataTypes.STRING, allowNull: false }, // e.g. "PART_CREATED", "PART_DISABLED", "LOGIN"
  entityType: { type: DataTypes.STRING, allowNull: true }, // "Part" | "User" | "Transaction"
  entityId: { type: DataTypes.STRING, allowNull: true },
  details: { type: DataTypes.TEXT, allowNull: true }, // JSON.stringify للتفاصيل
}, {
  tableName: 'audit_logs',
  timestamps: true,
  updatedAt: false,
});

module.exports = AuditLog;
