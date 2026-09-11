/**
 * إعداد الاتصال بقاعدة البيانات
 * يدعم: PostgreSQL (عبر DATABASE_URL أو متغيرات منفردة) | MySQL | SQLite
 */

const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

// ── الأولوية 1: DATABASE_URL (Railway/Heroku/Supabase يرسلها تلقائياً) ──────
if (process.env.DATABASE_URL) {
  const isSSL = process.env.DB_SSL !== 'false';
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: process.env.DB_LOGGING === 'true' ? console.log : false,
    pool: {
      max:     parseInt(process.env.DB_POOL_MAX     || '10',    10),
      min:     parseInt(process.env.DB_POOL_MIN     || '0',     10),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE || '30000', 10),
      idle:    parseInt(process.env.DB_POOL_IDLE    || '10000', 10),
    },
    dialectOptions: isSSL ? {
      ssl: { require: true, rejectUnauthorized: false },
    } : {},
  });
  console.log('🔗 قاعدة البيانات: PostgreSQL (DATABASE_URL)');

// ── الأولوية 2: متغيرات DB_* المنفردة ───────────────────────────────────────
} else {
  const dialect = (process.env.DB_DIALECT || 'sqlite').toLowerCase();

  if (dialect === 'postgres') {
    const missing = ['DB_NAME', 'DB_USER', 'DB_PASSWORD', 'DB_HOST']
      .filter(k => !process.env[k]);
    if (missing.length > 0) {
      console.error(`❌ متغيرات مفقودة: ${missing.join(', ')}`);
      console.error('   أضف DATABASE_URL أو هذه المتغيرات في Railway Variables');
      process.exit(1);
    }

    const isSSL = process.env.DB_SSL === 'true';
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host:    process.env.DB_HOST,
        port:    parseInt(process.env.DB_PORT || '5432', 10),
        dialect: 'postgres',
        logging: process.env.DB_LOGGING === 'true' ? console.log : false,
        pool: {
          max:     parseInt(process.env.DB_POOL_MAX     || '10',    10),
          min:     parseInt(process.env.DB_POOL_MIN     || '0',     10),
          acquire: parseInt(process.env.DB_POOL_ACQUIRE || '30000', 10),
          idle:    parseInt(process.env.DB_POOL_IDLE    || '10000', 10),
        },
        dialectOptions: isSSL ? {
          ssl: { require: true, rejectUnauthorized: false },
        } : {},
      }
    );

  } else if (dialect === 'mysql') {
    const missing = ['DB_NAME', 'DB_USER', 'DB_PASSWORD', 'DB_HOST']
      .filter(k => !process.env[k]);
    if (missing.length > 0) {
      console.error(`❌ متغيرات مفقودة: ${missing.join(', ')}`);
      process.exit(1);
    }

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
          max:     parseInt(process.env.DB_POOL_MAX     || '10',    10),
          min:     parseInt(process.env.DB_POOL_MIN     || '0',     10),
          acquire: parseInt(process.env.DB_POOL_ACQUIRE || '30000', 10),
          idle:    parseInt(process.env.DB_POOL_IDLE    || '10000', 10),
        },
        dialectOptions: { charset: 'utf8mb4', connectTimeout: 20000 },
      }
    );

  } else {
    // SQLite — تطوير محلي فقط
    if (process.env.NODE_ENV === 'production') {
      console.warn('⚠️  SQLite غير مناسبة للإنتاج! استخدم PostgreSQL.');
    }
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: process.env.DB_STORAGE || './data/spareparts.sqlite',
      logging: false,
      pool: { max: 1, min: 1, acquire: 30000, idle: 24 * 60 * 60 * 1000 },
    });
    sequelize.query('PRAGMA journal_mode = WAL;').catch(() => {});
    sequelize.query('PRAGMA busy_timeout = 5000;').catch(() => {});
  }
}

module.exports = sequelize;
