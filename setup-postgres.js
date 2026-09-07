/**
 * سكريبت إنشاء قاعدة البيانات PostgreSQL
 * ─────────────────────────────────────────────────────────────────────────────
 * يُنفَّذ مرة واحدة فقط على السيرفر قبل أول تشغيل.
 * يتصل بـ postgres (قاعدة البيانات الافتراضية) لإنشاء المستخدم والقاعدة.
 *
 * الاستخدام:
 *   node setup-postgres.js
 *
 * المتطلبات: PostgreSQL مثبّت وPG_ADMIN_PASSWORD معرَّف في البيئة أو يدوياً أدناه.
 */

require('dotenv').config();
const { Client } = require('pg');

const ADMIN_USER = process.env.PG_ADMIN_USER || 'postgres';
const ADMIN_PASS = process.env.PG_ADMIN_PASSWORD || '';
const DB_HOST    = process.env.DB_HOST || 'localhost';
const DB_PORT    = process.env.DB_PORT || '5432';
const DB_NAME    = process.env.DB_NAME || 'spareparts_db';
const DB_USER    = process.env.DB_USER || 'spareparts_user';
const DB_PASS    = process.env.DB_PASSWORD || '';

if (!DB_PASS) {
  console.error('❌ DB_PASSWORD غير محدد في .env');
  process.exit(1);
}

async function setup() {
  const adminClient = new Client({
    host:     DB_HOST,
    port:     DB_PORT,
    user:     ADMIN_USER,
    password: ADMIN_PASS,
    database: 'postgres',
  });

  try {
    await adminClient.connect();
    console.log('✅ تم الاتصال بـ PostgreSQL كـ Admin');

    // إنشاء المستخدم إن لم يكن موجوداً
    const userExists = await adminClient.query(
      `SELECT 1 FROM pg_roles WHERE rolname = $1`, [DB_USER]
    );
    if (userExists.rowCount === 0) {
      await adminClient.query(
        `CREATE USER "${DB_USER}" WITH PASSWORD '${DB_PASS}'`
      );
      console.log(`✅ تم إنشاء المستخدم: ${DB_USER}`);
    } else {
      // تحديث كلمة المرور إن تغيرت
      await adminClient.query(`ALTER USER "${DB_USER}" WITH PASSWORD '${DB_PASS}'`);
      console.log(`ℹ️  المستخدم موجود: ${DB_USER} (تم تحديث كلمة المرور)`);
    }

    // إنشاء قاعدة البيانات إن لم تكن موجودة
    const dbExists = await adminClient.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`, [DB_NAME]
    );
    if (dbExists.rowCount === 0) {
      await adminClient.query(
        `CREATE DATABASE "${DB_NAME}"
         WITH OWNER = "${DB_USER}"
         ENCODING = 'UTF8'
         LC_COLLATE = 'en_US.UTF-8'
         LC_CTYPE = 'en_US.UTF-8'`
      );
      console.log(`✅ تم إنشاء قاعدة البيانات: ${DB_NAME}`);
    } else {
      console.log(`ℹ️  قاعدة البيانات موجودة: ${DB_NAME}`);
    }

    // منح الصلاحيات الكاملة
    await adminClient.query(`GRANT ALL PRIVILEGES ON DATABASE "${DB_NAME}" TO "${DB_USER}"`);
    console.log(`✅ تم منح الصلاحيات لـ ${DB_USER} على ${DB_NAME}`);

    await adminClient.end();

    // الاتصال بقاعدة البيانات الجديدة لمنح صلاحيات schema
    const dbClient = new Client({
      host: DB_HOST, port: DB_PORT,
      user: ADMIN_USER, password: ADMIN_PASS,
      database: DB_NAME,
    });
    await dbClient.connect();
    await dbClient.query(`GRANT ALL ON SCHEMA public TO "${DB_USER}"`);
    await dbClient.query(`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO "${DB_USER}"`);
    await dbClient.end();

    console.log('\n🎉 تم إعداد قاعدة البيانات بنجاح!');
    console.log('   الخطوة التالية: شغّل الـ seed لإنشاء المستخدم الأول:');
    console.log('   node src/utils/seed.js\n');

  } catch (err) {
    console.error('\n❌ فشل إعداد قاعدة البيانات:', err.message);
    console.error('   تأكد من:');
    console.error('   1. تشغيل PostgreSQL على هذا الجهاز');
    console.error('   2. صحة PG_ADMIN_USER و PG_ADMIN_PASSWORD');
    console.error('   3. إمكانية الاتصال بـ', `${DB_HOST}:${DB_PORT}\n`);
    process.exit(1);
  }
}

setup();
