/**
 * إعداد الاتصال بقاعدة البيانات
 * ─────────────────────────────────────────────────────────────────────────────
 * البيئات المدعومة:
 *   - postgres  (مُوصى به للإنتاج وبيئة الشركة متعددة المستخدمين)
 *   - mysql     (بديل شائع - يعمل بنفس إعدادات البيئة)
 *   - sqlite    (للتطوير المحلي فقط - عدة مستخدمين غير مدعومين)
 *
 * لتغيير قاعدة البيانات: عدّل ملف .env فقط، لا تعديل في هذا الملف.
 */

const { Sequelize } = require('sequelize');
require('dotenv').config();

const dialect = (process.env.DB_DIALECT || 'sqlite').toLowerCase();

// ── التحقق من المتغيرات المطلوبة لقواعد البيانات الشبكية ──────────────────
if (dialect === 'postgres' || dialect === 'mysql') {
  const required = ['DB_NAME', 'DB_USER', 'DB_PASSWORD', 'DB_HOST'];
  const missing = required.filter(k => !process.env[k]);
  if (missing.length > 0) {
    console.error(`\n❌ متغيرات بيئة مفقودة لـ ${dialect}: ${missing.join(', ')}`);
    console.error('   راجع ملف .env وتأكد من ملء جميع إعدادات قاعدة البيانات.\n');
    process.exit(1);
  }
}

let sequelize;

// ── PostgreSQL ────────────────────────────────────────────────────────────────
if (dialect === 'postgres') {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host:    process.env.DB_HOST,
      port:    parseInt(process.env.DB_PORT || '5432', 10),
      dialect: 'postgres',
      logging: process.env.DB_LOGGING === 'true' ? console.log : false,

      // Connection Pool — إدارة اتصالات متعددة متزامنة بكفاءة
      pool: {
        max:     parseInt(process.env.DB_POOL_MAX     || '20',    10), // أقصى اتصال متزامن
        min:     parseInt(process.env.DB_POOL_MIN     || '2',     10), // اتصالات دائمة (warm)
        acquire: parseInt(process.env.DB_POOL_ACQUIRE || '30000', 10), // انتظار اتصال (ms)
        idle:    parseInt(process.env.DB_POOL_IDLE    || '10000', 10), // إغلاق خامل (ms)
      },

      // SSL — مطلوب في بعض بيئات الإنتاج والسحابة
      dialectOptions: process.env.DB_SSL === 'true' ? {
        ssl: { require: true, rejectUnauthorized: false },
      } : {},

      // إعادة الاتصال التلقائي عند انقطاع الشبكة
      retry: {
        max: 5,
        match: [
          /SequelizeConnectionError/,
          /SequelizeConnectionRefusedError/,
          /ECONNREFUSED/,
          /ETIMEDOUT/,
        ],
      },
    }
  );

// ── MySQL / MariaDB ───────────────────────────────────────────────────────────
} else if (dialect === 'mysql') {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host:    process.env.DB_HOST,
      port:    parseInt(process.env.DB_PORT || '3306', 10),
      dialect: 'mysql',
      logging: process.env.DB_LOGGING === 'true' ? console.log : false,
      pool: {
        max:     parseInt(process.env.DB_POOL_MAX     || '20',    10),
        min:     parseInt(process.env.DB_POOL_MIN     || '2',     10),
        acquire: parseInt(process.env.DB_POOL_ACQUIRE || '30000', 10),
        idle:    parseInt(process.env.DB_POOL_IDLE    || '10000', 10),
      },
      dialectOptions: {
        // charset مطلوب للدعم الكامل للعربية
        charset: 'utf8mb4',
        connectTimeout: 20000,
      },
      retry: {
        max: 5,
        match: [/SequelizeConnectionError/, /ECONNREFUSED/, /ETIMEDOUT/],
      },
    }
  );

// ── SQLite (تطوير محلي فقط) ───────────────────────────────────────────────────
} else {
  if (process.env.NODE_ENV === 'production') {
    console.warn('\n⚠️  تحذير: SQLite غير مناسبة للإنتاج أو بيئات متعددة المستخدمين!');
    console.warn('   استخدم DB_DIALECT=postgres أو DB_DIALECT=mysql في بيئة الإنتاج.\n');
  }

  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || './data/spareparts.sqlite',
    logging: false,
    pool: { max: 1, min: 1, acquire: 30000, idle: 24 * 60 * 60 * 1000 },
    retry: { max: 5, match: [/SQLITE_BUSY/, /database is locked/i] },
  });

  sequelize.query('PRAGMA journal_mode = WAL;').catch(() => {});
  sequelize.query('PRAGMA busy_timeout = 5000;').catch(() => {});
}

module.exports = sequelize;
