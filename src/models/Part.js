const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Part = sequelize.define('Part', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true, // Unique Part ID الحقيقي المشفّر داخل QR (بند 2)
  },
  partNumber: { type: DataTypes.STRING, allowNull: false, unique: true }, // مثل SP-000125
  partName: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  category: { type: DataTypes.STRING, allowNull: true },
  brand: { type: DataTypes.STRING, allowNull: true },
  model: { type: DataTypes.STRING, allowNull: true },
  location: { type: DataTypes.STRING, allowNull: true }, // Location / Store
  minimumStockLevel: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  currentQuantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  unit: { type: DataTypes.STRING, allowNull: true, defaultValue: 'pcs' },
  supplier: { type: DataTypes.STRING, allowNull: true },
  notes: { type: DataTypes.TEXT, allowNull: true },
  qrCodeData: { type: DataTypes.STRING, allowNull: true }, // النص المشفّر داخل QR (Part ID الفريد)
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true }, // للتعطيل بدل الحذف الفعلي (بند 17 - Admin can disable)
}, {
  tableName: 'parts',
  timestamps: true,
  indexes: [
    { fields: ['partNumber'] },
    { fields: ['partName'] },
    { fields: ['category'] },
    { fields: ['brand'] },
    { fields: ['location'] },
  ],
});

module.exports = Part;
