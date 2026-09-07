const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Roles: admin | storekeeper | viewer  (بند 17 في المتطلبات)
const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullName: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: true, unique: true, validate: { isEmail: true } },
  passwordHash: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM('admin', 'storekeeper', 'viewer'),
    allowNull: false,
    defaultValue: 'viewer',
  },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
  permissions: { type: DataTypes.JSON, allowNull: true },
}, {
  tableName: 'users',
  timestamps: true,
});

module.exports = User;
