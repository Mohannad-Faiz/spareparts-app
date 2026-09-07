const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// خيار متقدم (بند 11): تتبع كل قطعة فعلية بمفردها
// مثال: SP-000125-0001, SP-000125-0002 ...
// يُفعَّل من Settings (ENABLE_SERIALIZED_UNITS) ولا يؤثر على القطع التي تُدار بالكمية الإجمالية فقط.
const PartUnit = sequelize.define('PartUnit', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  partId: { type: DataTypes.UUID, allowNull: false },
  serialCode: { type: DataTypes.STRING, allowNull: false, unique: true }, // SP-000125-0001
  status: {
    type: DataTypes.ENUM('in_stock', 'issued', 'scrapped'),
    defaultValue: 'in_stock',
  },
  qrCodeData: { type: DataTypes.STRING, allowNull: true },
}, {
  tableName: 'part_units',
  timestamps: true,
});

module.exports = PartUnit;
