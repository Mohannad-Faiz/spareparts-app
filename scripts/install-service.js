/**
 * تثبيت البرنامج كخدمة Windows تعمل تلقائياً عند تشغيل السيرفر
 * ─────────────────────────────────────────────────────────────────────────────
 * الاستخدام (من Command Prompt بصلاحيات Administrator):
 *   node scripts/install-service.js install
 *   node scripts/install-service.js uninstall
 *   node scripts/install-service.js status
 */

const { execSync } = require('child_process');
const path = require('path');
const fs   = require('fs');

const SERVICE_NAME  = 'SparepartsServer';
const SERVICE_DESC  = 'Access Lion Warehouses - Spare Parts Management System';
const APP_DIR       = path.resolve(__dirname, '..');
const NODE_EXE      = process.execPath;
const MAIN_SCRIPT   = path.join(APP_DIR, 'src', 'server.js');

const action = process.argv[2] || 'install';

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
  } catch (e) {
    return e.stdout || e.stderr || '';
  }
}

if (action === 'install') {
  console.log('📦 تثبيت الخدمة على Windows...');

  // استخدام sc.exe لإنشاء الخدمة
  const binPath = `"${NODE_EXE}" "${MAIN_SCRIPT}"`;

  run(`sc stop ${SERVICE_NAME} 2>NUL`);
  run(`sc delete ${SERVICE_NAME} 2>NUL`);

  const createCmd = `sc create ${SERVICE_NAME} binPath= "${binPath}" start= auto DisplayName= "${SERVICE_DESC}"`;
  const out = run(createCmd);

  if (out.includes('[SC] CreateService SUCCESS')) {
    run(`sc description ${SERVICE_NAME} "${SERVICE_DESC}"`);
    run(`sc start ${SERVICE_NAME}`);
    console.log(`\n✅ الخدمة "${SERVICE_NAME}" مثبّتة وتعمل!`);
    console.log(`   تبدأ تلقائياً مع تشغيل Windows.`);
    console.log(`   للتحكم: services.msc → ${SERVICE_NAME}\n`);
  } else {
    console.log('\n⚠️  استخدم NSSM بدلاً من sc.exe للتثبيت الأفضل.');
    console.log('   راجع تعليمات التثبيت في ملف SETUP_GUIDE.md\n');
  }

} else if (action === 'uninstall') {
  run(`sc stop ${SERVICE_NAME}`);
  run(`sc delete ${SERVICE_NAME}`);
  console.log(`✅ تمت إزالة الخدمة "${SERVICE_NAME}"`);

} else if (action === 'status') {
  const out = run(`sc query ${SERVICE_NAME}`);
  console.log(out || 'الخدمة غير مثبّتة');

} else {
  console.log('الاستخدام: node scripts/install-service.js [install|uninstall|status]');
}
