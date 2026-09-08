const sequelize = require('../config/database');
const User = require('./User');
const Part = require('./Part');
const PartUnit = require('./PartUnit');
const Transaction = require('./Transaction');
const AuditLog = require('./AuditLog');
const PurchaseOrder = require('./PurchaseOrder');
const ScannerDevice = require('./ScannerDevice');
const Asset = require('./Asset');

// ================================
// العلاقات (Associations)
// ================================
Part.hasMany(Transaction, { foreignKey: 'partId', as: 'transactions' });
Transaction.belongsTo(Part, { foreignKey: 'partId', as: 'part' });

Part.hasMany(PartUnit, { foreignKey: 'partId', as: 'units' });
PartUnit.belongsTo(Part, { foreignKey: 'partId', as: 'part' });

User.hasMany(Transaction, { foreignKey: 'userId', as: 'transactions' });
Transaction.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(AuditLog, { foreignKey: 'userId', as: 'auditLogs' });
AuditLog.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(PurchaseOrder, { foreignKey: 'userId', as: 'orders' });
PurchaseOrder.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
  sequelize,
  User,
  Part,
  PartUnit,
  Transaction,
  AuditLog,
  PurchaseOrder,
  ScannerDevice,
  Asset,
};
