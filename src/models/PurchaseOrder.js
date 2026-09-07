const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PurchaseOrder = sequelize.define('PurchaseOrder', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  poNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  supplierName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supplierContact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('DRAFT', 'PENDING', 'ORDERED', 'RECEIVED', 'CANCELLED'),
    defaultValue: 'PENDING',
  },
  priority: {
    type: DataTypes.ENUM('NORMAL', 'HIGH', 'URGENT'),
    defaultValue: 'NORMAL',
  },
  expectedDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Main Store / مستودع التخزين المركزي',
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  items: {
    type: DataTypes.JSON, // JSON array of items: [{ partId, partNumber, partName, brand, model, unit, currentQuantity, requestedQuantity, unitPrice, specs }]
    allowNull: false,
    defaultValue: [],
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  createdByName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'purchase_orders',
  timestamps: true,
});

module.exports = PurchaseOrder;
