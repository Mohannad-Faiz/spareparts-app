/**
 * نسخ احتياطي تلقائي لقاعدة البيانات
 * ─────────────────────────────────────────────────────────────────────────────
 * يعمل يومياً في الوقت المحدد (افتراضياً 2:00 صباحاً).
 * يحتفظ بآخر N نسخة (افتراضياً 30) ويحذف الأقدم تلقائياً.
 *
 * PostgreSQL: يستخدم pg_dump (يجب أن يكون مثبتاً على السيرفر)
 * SQLite: ينسخ الملف مباشرة
 */

const cron  = require('node-cron');
const fs    = require('fs');
const path  = require('path');
const { execSync, spawnSync } = require('child_process');

const dialect     = (process.env.DB_DIALECT || 'sqlite').toLowerCase();
const BACKUP_DIR  = path.resolve(process.env.BACKUP_DIR  || './data/backups');
const BACKUP_KEEP = parseInt(process.env.BACKUP_KEEP_DAYS || '30', 10);
const BACKUP_TIME = process.env.BACKUP_CRON || '0 2 * * *'; // 2:00 AM يومياً

// إنشاء مجلد النسخ الاحتياطية إن لم يكن موجوداً
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

/** توليد اسم ملف النسخة: backup-2026-09-07T02-00-00.sql */
function backupFilename(ext) {
  const ts = new Date().toISOString().replace(/:/g, '-').replace(/\.\d{3}Z$/, '');
  return path.join(BACKUP_DIR, `backup-${ts}.${ext}`);
}

/** حذف النسخ القديمة وإبقاء آخر N نسخة */
function pruneOldBackups(ext) {
  try {
    const files = fs.readdirSync(BACKUP_DIR)
      .filter(f => f.startsWith('backup-') && f.endsWith(`.${ext}`))
      .map(f => ({ name: f, time: fs.statSync(path.join(BACKUP_DIR, f)).mtimeMs }))
      .sort((a, b) => b.time - a.time);

    files.slice(BACKUP_KEEP).forEach(f => {
      fs.unlinkSync(path.join(BACKUP_DIR, f.name));
      console.log(`🗑️  حُذفت نسخة قديمة: ${f.name}`);
    });
  } catch (e) {
    console.error('⚠️  خطأ في حذف النسخ القديمة:', e.message);
  }
}

/** تنفيذ النسخة الاحتياطية لـ PostgreSQL */
async function backupPostgres() {
  const file = backupFilename('sql');
  const env  = {
    ...process.env,
    PGPASSWORD: process.env.DB_PASSWORD,
  };
  const args = [
    '-h', process.env.DB_HOST,
    '-p', process.env.DB_PORT || '5432',
    '-U', process.env.DB_USER,
    '-d', process.env.DB_NAME,
    '-f', file,
    '--no-owner',
    '--no-acl',
    '--if-exists',
    '--clean',
  ];

  const result = spawnSync('pg_dump', args, { env, encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(`pg_dump فشل: ${result.stderr || result.error?.message}`);
  }

  const sizeKB = Math.round(fs.statSync(file).size / 1024);
  console.log(`✅ [Backup-PG]  تمت النسخة: ${path.basename(file)} (${sizeKB} KB)`);
  pruneOldBackups('sql');
  return file;
}

/** تنفيذ النسخة الاحتياطية لـ SQLite */
async function backupSQLite() {
  const src  = path.resolve(process.env.DB_STORAGE || './data/spareparts.sqlite');
  const file = backupFilename('sqlite');
  fs.copyFileSync(src, file);
  const sizeKB = Math.round(fs.statSync(file).size / 1024);
  console.log(`✅ [Backup-SQLite] تمت النسخة: ${path.basename(file)} (${sizeKB} KB)`);
  pruneOldBackups('sqlite');
  return file;
}

/** نقطة الدخول الرئيسية للنسخ الاحتياطي */
async function runBackup() {
  console.log(`\n🔄 [Backup] بدء النسخ الاحتياطي — ${new Date().toLocaleString('ar-SA')}...`);
  try {
    if (dialect === 'postgres') {
      await backupPostgres();
    } else if (dialect === 'sqlite') {
      await backupSQLite();
    } else {
      console.log(`ℹ️  [Backup] النسخ الاحتياطي غير مدعوم لـ ${dialect} حالياً.`);
    }
  } catch (err) {
    console.error(`❌ [Backup] فشل النسخ الاحتياطي: ${err.message}`);
  }
}

/** قائمة النسخ الاحتياطية المتاحة */
function listBackups() {
  const ext   = dialect === 'postgres' ? 'sql' : 'sqlite';
  try {
    return fs.readdirSync(BACKUP_DIR)
      .filter(f => f.startsWith('backup-') && f.endsWith(`.${ext}`))
      .map(f => {
        const stat = fs.statSync(path.join(BACKUP_DIR, f));
        return {
          file: f,
          path: path.join(BACKUP_DIR, f),
          sizeKB: Math.round(stat.size / 1024),
          createdAt: stat.mtime,
        };
      })
      .sort((a, b) => b.createdAt - a.createdAt);
  } catch (e) {
    return [];
  }
}

// ── جدول التشغيل التلقائي ────────────────────────────────────────────────────
if (cron.validate(BACKUP_TIME)) {
  cron.schedule(BACKUP_TIME, runBackup, { timezone: process.env.TZ || 'Asia/Riyadh' });
  console.log(`📅 [Backup] جُدولت النسخ الاحتياطية: "${BACKUP_TIME}" (${process.env.TZ || 'Asia/Riyadh'})`);
} else {
  console.error(`❌ [Backup] صيغة BACKUP_CRON غير صحيحة: "${BACKUP_TIME}"`);
}

module.exports = { runBackup, listBackups };
