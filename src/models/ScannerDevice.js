const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ScannerDevice = sequelize.define('ScannerDevice', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deviceType: {
    type: DataTypes.ENUM('HID_KEYBOARD', 'WEB_SERIAL', 'CAMERA_FIXED', 'SMARTPHONE_WIFI'),
    defaultValue: 'HID_KEYBOARD',
  },
  connectionPort: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'USB-WEDGE',
  },
  warehouseLocation: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Main Store / المستودع الرئيسي',
  },
  defaultAction: {
    type: DataTypes.ENUM('LOOKUP', 'FAST_ADD', 'FAST_ISSUE', 'AUDIT_COUNT'),
    defaultValue: 'LOOKUP',
  },
  soundFeedback: {
    type: DataTypes.ENUM('BEEP_CHIME', 'BEEP_HIGH', 'BEEP_DIGITAL', 'MUTE'),
    defaultValue: 'BEEP_CHIME',
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'PAUSED', 'TESTING'),
    defaultValue: 'ACTIVE',
  },
  totalScansCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  lastScanAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'scanner_devices',
  timestamps: true,
});

module.exports = ScannerDevice;
