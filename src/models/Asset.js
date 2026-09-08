const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Asset = sequelize.define('Asset', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  // ── معلومات الأصل الأساسية ────────────────────────────────────────────────
  assetNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    comment: 'رقم الأصل التسلسلي — يُولَّد تلقائياً أو يُدخَل يدوياً',
  },
  assetName: {
    type: DataTypes.STRING(200),
    allowNull: false,
    comment: 'اسم الأصل (مثال: لابتوب HP، سيارة تويوتا هايلكس)',
  },
  category: {
    type: DataTypes.ENUM(
      'vehicle',       // مركبات (سيارات، تريلات، شاحنات)
      'electronics',   // أجهزة إلكترونية (لابتوبات، طابعات، شاشات)
      'furniture',     // أثاث (مكاتب، كراسي)
      'tools',         // أدوات ومعدات (ورشة، قياس)
      'other'          // أخرى
    ),
    allowNull: false,
    defaultValue: 'other',
  },
  brand: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: 'الماركة أو الشركة المصنعة',
  },
  model: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: 'الموديل أو النوع',
  },
  serialNumber: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: 'الرقم التسلسلي من الشركة المصنعة',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  // ── الموقع والمسؤولية ────────────────────────────────────────────────────
  location: {
    type: DataTypes.STRING(200),
    allowNull: true,
    comment: 'الموقع الحالي للأصل (مستودع، مكتب، ورشة)',
  },
  assignedTo: {
    type: DataTypes.STRING(200),
    allowNull: true,
    comment: 'اسم الموظف أو القسم المسؤول عن الأصل',
  },

  // ── المعلومات المالية ─────────────────────────────────────────────────────
  purchaseDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'تاريخ الشراء',
  },
  purchaseValue: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: true,
    comment: 'قيمة الشراء',
  },
  currency: {
    type: DataTypes.STRING(10),
    allowNull: true,
    defaultValue: 'AED',
  },
  supplier: {
    type: DataTypes.STRING(200),
    allowNull: true,
    comment: 'المورد أو الجهة الموردة',
  },

  // ── الحالة ───────────────────────────────────────────────────────────────
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'damaged', 'lost', 'disposed'),
    defaultValue: 'active',
    comment: 'نشط / غير نشط / تالف / مفقود / مستغنى عنه',
  },

  // ── QR ───────────────────────────────────────────────────────────────────
  qrCodeData: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'رابط URL المدمج في QR Code للأصل',
  },

  // ── ملاحظات ──────────────────────────────────────────────────────────────
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  // ── تتبع ─────────────────────────────────────────────────────────────────
  createdById: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  createdByName: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'assets',
  timestamps: true,
  indexes: [
    { unique: true, fields: ['assetNumber'] },
    { fields: ['category'] },
    { fields: ['status'] },
    { fields: ['assignedTo'] },
  ],
});

module.exports = Asset;
