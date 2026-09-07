require('dotenv').config();
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const { sequelize } = require('./models');
const authRoutes    = require('./routes/auth.routes');
const partsRoutes   = require('./routes/parts.routes');
const ordersRoutes  = require('./routes/orders.routes');
const devicesRoutes = require('./routes/devices.routes');

// تشغيل النسخ الاحتياطي التلقائي
require('./utils/backup');

const app = express();

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy:    false,
  crossOriginEmbedderPolicy: false,
}));

// السماح بالوصول من كل عناوين IP على الشبكة المحلية
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

// ── Static files ─────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, '../public')));

// ── API Routes ────────────────────────────────────────────────────────────────
app.use('/api/auth',    authRoutes);
app.use('/api/parts',   partsRoutes);
app.use('/api/orders',  ordersRoutes);
app.use('/api/devices', devicesRoutes);

app.get('/api/health', async (req, res) => {
  const dialect = process.env.DB_DIALECT || 'sqlite';
  let dbOk = false;
  try { await sequelize.authenticate(); dbOk = true; } catch (e) { /* ignore */ }
  res.json({
    status: dbOk ? 'ok' : 'degraded',
    db: dialect,
    dbConnected: dbOk,
    time: new Date().toISOString(),
    version: '2.0.0',
  });
});

// ── Catch-all → SPA ──────────────────────────────────────────────────────────
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'المسار غير موجود' });
});

// ── Global Error Handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.message || err);
  const code = err.statusCode || err.status || 500;
  res.status(code).json({
    error: code >= 500 ? 'حدث خطأ في الخادم' : err.message,
    ...(process.env.NODE_ENV !== 'production' && { details: err.message }),
  });
});

// ── Safety net ───────────────────────────────────────────────────────────────
process.on('unhandledRejection', (reason) => {
  console.error('⚠️  Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('⚠️  Uncaught Exception:', err);
});

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = parseInt(process.env.PORT || '4000', 10);
const HOST = process.env.HOST || '0.0.0.0'; // الاستماع على كل الـ interfaces للشبكة المحلية

async function start() {
  try {
    // الاتصال بقاعدة البيانات مع retry
    let connected = false;
    for (let attempt = 1; attempt <= 10; attempt++) {
      try {
        await sequelize.authenticate();
        connected = true;
        break;
      } catch (err) {
        if (attempt === 10) throw err;
        console.log(`⏳ انتظار قاعدة البيانات... محاولة ${attempt}/10`);
        await new Promise(r => setTimeout(r, 3000));
      }
    }

    console.log(`✅ تم الاتصال بقاعدة البيانات (${process.env.DB_DIALECT || 'sqlite'})`);

    // مزامنة الجداول (إنشاء إن لم تكن موجودة)
    await sequelize.sync();
    console.log('✅ تمت مزامنة الجداول');

    app.listen(PORT, HOST, () => {
      const os = require('os');
      const nets = os.networkInterfaces();
      const ips = [];
      for (const iface of Object.values(nets)) {
        for (const net of iface) {
          if (net.family === 'IPv4' && !net.internal) ips.push(net.address);
        }
      }
      console.log(`\n🚀 الخادم يعمل!`);
      console.log(`   محلي:      http://localhost:${PORT}`);
      ips.forEach(ip => console.log(`   شبكة:      http://${ip}:${PORT}`));
      console.log(`\n   افتح المتصفح وادخل أحد العناوين أعلاه.\n`);
    });

  } catch (err) {
    console.error('\n❌ فشل تشغيل الخادم:', err.message);
    console.error('   تأكد من تشغيل PostgreSQL وصحة إعدادات .env\n');
    process.exit(1);
  }
}

start();
module.exports = app;
