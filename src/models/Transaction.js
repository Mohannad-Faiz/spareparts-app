const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// سجل حركة كامل غير قابل للحذف (بند 7 و 18 - Audit)
const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  partId: { type: DataTypes.UUID, allowNull: false },
  type: {
    type: DataTypes.ENUM('ADD', 'ISSUE', 'ADJUSTMENT'),
    allowNull: false,
  },
  quantity: { type: DataTypes.INTEGER, allowNull: false }, // موجب دائماً، النوع يحدد الاتجاه
  balanceAfter: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.UUID, allowNull: false },

  // حقول ADD (بند 4)
  supplier: { type: DataTypes.STRING, allowNull: true },
  poNumber: { type: DataTypes.STRING, allowNull: true },
  invoiceNumber: { type: DataTypes.STRING, allowNull: true },

  // حقول ISSUE (بند 8)
  vehicleNumber: { type: DataTypes.STRING, allowNull: true },
  equipmentNumber: { type: DataTypes.STRING, allowNull: true },
  employeeDriver: { type: DataTypes.STRING, allowNull: true },
  department: { type: DataTypes.STRING, allowNull: true },
  project: { type: DataTypes.STRING, allowNull: true },
  workOrder: { type: DataTypes.STRING, allowNull: true },
  reasonForIssue: { type: DataTypes.STRING, allowNull: true },

  reference: { type: DataTypes.STRING, allowNull: true },
  notes: { type: DataTypes.TEXT, allowNull: true },
}, {
  tableName: 'transactions',
  timestamps: true,
  updatedAt: false, // لا يمكن تعديل الحركة بعد إنشائها (immutable record)
});

module.exports = Transaction;
