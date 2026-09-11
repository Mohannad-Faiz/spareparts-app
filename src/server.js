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
const assetsRoutes  = require('./routes/assets.routes');

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

// ── Trust Proxy (مطلوب على Railway/أي reverse proxy) ──────────────────────
// بدونه، express-rate-limit يرمي ValidationError على كل طلب login
app.set('trust proxy', 1);

// ── Static files ─────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, '../public')));

// ── API Routes ────────────────────────────────────────────────────────────────
app.use('/api/auth',    authRoutes);
app.use('/api/parts',   partsRoutes);
app.use('/api/orders',  ordersRoutes);
app.use('/api/devices', devicesRoutes);
app.use('/api/assets',  assetsRoutes);

// ── Public Asset API (بدون تسجيل دخول) ──────────────────────────────────────
app.get('/api/public/asset/:id', async (req, res) => {
  try {
    const { Asset } = require('./models');
    const asset = await Asset.findOne({
      where: { id: req.params.id, isActive: true },
      attributes: [
        'id', 'assetNumber', 'assetName', 'category', 'brand', 'model',
        'serialNumber', 'plateNumber', 'description', 'location', 'assignedTo',
        'purchaseDate', 'purchaseValue', 'currency', 'supplier', 'status', 'notes',
      ],
    });
    if (!asset) return res.status(404).json({ error: 'الأصل غير موجود' });
    res.json(asset);
  } catch (err) {
    res.status(500).json({ error: 'خطأ في الخادم' });
  }
});

// ── صفحة الأصل العامة ────────────────────────────────────────────────────────
app.get('/asset/:id', (req, res) => {
  const categoryNames = {
    vehicle: '🚗 مركبة',
    electronics: '💻 أجهزة إلكترونية',
    furniture: '🪑 أثاث',
    tools: '🔧 أدوات ومعدات',
    other: '📦 أخرى',
  };
  const statusNames = {
    active: { label: 'نشط ✅', color: '#34d399' },
    inactive: { label: 'غير نشط', color: '#94a3b8' },
    damaged: { label: 'تالف ⚠️', color: '#f87171' },
    lost: { label: 'مفقود 🔴', color: '#ef4444' },
    disposed: { label: 'مستغنى عنه', color: '#64748b' },
  };

  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تفاصيل الأصل — Access Lion Warehouses</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #e2e8f0; min-height: 100vh; padding: 20px; }
    .container { max-width: 480px; margin: 0 auto; }
    .header { text-align: center; padding: 24px 0 20px; border-bottom: 1px solid #1e293b; margin-bottom: 24px; }
    .logo-text { font-size: 1.3rem; font-weight: 900; color: #60a5fa; }
    .logo-sub { font-size: 0.8rem; color: #64748b; margin-top: 2px; }
    .card { background: #1e293b; border-radius: 16px; padding: 20px; margin-bottom: 14px; border: 1px solid #334155; }
    .asset-number { display: inline-block; background: #7c3aed; color: #ddd6fe; padding: 4px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; font-family: monospace; margin-bottom: 10px; }
    .asset-name { font-size: 1.5rem; font-weight: 900; color: #f1f5f9; margin-bottom: 6px; }
    .asset-cat { font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px; }
    .status-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }
    .info-list { list-style: none; }
    .info-list li { display: flex; justify-content: space-between; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid #0f172a; font-size: 0.88rem; gap: 10px; }
    .info-list li:last-child { border-bottom: none; }
    .info-label { color: #64748b; flex-shrink: 0; }
    .info-value { color: #e2e8f0; font-weight: 600; text-align: left; }
    .section-title { font-size: 0.85rem; font-weight: 700; color: #60a5fa; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
    .loading { text-align: center; padding: 60px 0; color: #64748b; }
    .spinner { width: 40px; height: 40px; border: 3px solid #1e293b; border-top-color: #7c3aed; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 16px; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .footer { text-align: center; padding: 20px 0; color: #334155; font-size: 0.75rem; }
    .damage-alert { background: #7f1d1d; border: 1px solid #ef4444; border-radius: 12px; padding: 12px 16px; margin-bottom: 14px; text-align: center; color: #fca5a5; font-weight: 700; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-text">🦁 Access Lion Warehouses</div>
      <div class="logo-sub">نظام إدارة أصول الشركة</div>
    </div>
    <div id="content">
      <div class="loading"><div class="spinner"></div><div>جاري تحميل بيانات الأصل...</div></div>
    </div>
    <div class="footer">تم المسح بواسطة QR Code — Access Lion Warehouses © 2026</div>
  </div>
  <script>
    const catNames = ${JSON.stringify(categoryNames)};
    const statNames = ${JSON.stringify(statusNames)};
    fetch('/api/public/asset/${req.params.id}')
      .then(r => r.json())
      .then(a => {
        if (a.error) {
          document.getElementById('content').innerHTML = '<div class="card" style="text-align:center;color:#f87171;">⚠️ الأصل غير موجود</div>';
          return;
        }
        const st = statNames[a.status] || { label: a.status, color: '#94a3b8' };
        const alertHtml = (a.status === 'damaged' || a.status === 'lost')
          ? \`<div class="damage-alert">\${st.label} — يرجى التواصل مع المسؤول</div>\` : '';

        const rows = [
          a.brand      ? ['🏷️ الماركة', a.brand + (a.model ? ' / ' + a.model : '')] : null,
          a.plateNumber ? ['🚗 رقم اللوحة', a.plateNumber] : null,
          a.serialNumber ? ['🔢 الرقم التسلسلي', a.serialNumber] : null,
          a.location   ? ['📍 الموقع', a.location] : null,
          a.assignedTo ? ['👤 المسؤول', a.assignedTo] : null,
          a.supplier   ? ['🏭 المورد', a.supplier] : null,
          a.purchaseDate ? ['📅 تاريخ الشراء', a.purchaseDate] : null,
          a.purchaseValue ? ['💰 القيمة', parseFloat(a.purchaseValue).toLocaleString('ar') + ' ' + (a.currency || 'AED')] : null,
          a.notes      ? ['📝 ملاحظات', a.notes] : null,
        ].filter(Boolean);

        document.getElementById('content').innerHTML = \`
          \${alertHtml}
          <div class="card">
            <div class="asset-number">\${a.assetNumber}</div>
            <div class="asset-name">\${a.assetName}</div>
            <div class="asset-cat">\${catNames[a.category] || a.category}</div>
            <span class="status-badge" style="background:\${st.color}22;color:\${st.color};border:1px solid \${st.color}44">\${st.label}</span>
          </div>
          <div class="card">
            <div class="section-title">تفاصيل الأصل</div>
            <ul class="info-list">
              \${rows.map(([l,v]) => \`<li><span class="info-label">\${l}</span><span class="info-value">\${v}</span></li>\`).join('')}
            </ul>
          </div>
        \`;
      })
      .catch(() => {
        document.getElementById('content').innerHTML = '<div class="card" style="text-align:center;color:#f87171;">⚠️ خطأ في الاتصال</div>';
      });
  </script>
</body>
</html>`);
});

// ── Public QR API (بدون تسجيل دخول) ─────────────────────────────────────────
app.get('/api/public/part/:id', async (req, res) => {
  try {
    const { Part, Transaction } = require('./models');
    const part = await Part.findOne({
      where: { id: req.params.id, isActive: true },
      attributes: [
        'id', 'partNumber', 'partName', 'description', 'category',
        'brand', 'model', 'location', 'minimumStockLevel',
        'currentQuantity', 'unit', 'supplier',
      ],
    });
    if (!part) return res.status(404).json({ error: 'القطعة غير موجودة' });

    // إجمالي المضاف والمصروف
    const { Op } = require('sequelize');
    const added = await Transaction.sum('quantity', {
      where: { partId: part.id, type: 'ADD' }
    }) || 0;
    const issued = await Transaction.sum('quantity', {
      where: { partId: part.id, type: 'ISSUE' }
    }) || 0;

    res.json({
      ...part.toJSON(),
      totalAdded: added,
      totalIssued: issued,
      needsReorder: part.currentQuantity <= part.minimumStockLevel,
    });
  } catch (err) {
    res.status(500).json({ error: 'خطأ في الخادم' });
  }
});

// ── صفحة QR العامة ────────────────────────────────────────────────────────────
app.get('/part/:id', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تفاصيل القطعة — Access Lion Warehouses</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Cairo', sans-serif; background: #0f172a; color: #e2e8f0; min-height: 100vh; padding: 20px; }
    .container { max-width: 480px; margin: 0 auto; }
    .header { text-align: center; padding: 24px 0 20px; border-bottom: 1px solid #1e293b; margin-bottom: 24px; }
    .logo-text { font-size: 1.3rem; font-weight: 900; color: #60a5fa; letter-spacing: 1px; }
    .logo-sub { font-size: 0.8rem; color: #64748b; margin-top: 2px; }
    .card { background: #1e293b; border-radius: 16px; padding: 24px; margin-bottom: 16px; border: 1px solid #334155; }
    .part-number { display: inline-block; background: #1d4ed8; color: #bfdbfe; padding: 4px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; font-family: monospace; margin-bottom: 10px; }
    .part-name { font-size: 1.5rem; font-weight: 900; color: #f1f5f9; margin-bottom: 6px; }
    .part-cat { font-size: 0.9rem; color: #94a3b8; }
    .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .stat-box { background: #0f172a; border-radius: 12px; padding: 16px; text-align: center; border: 1px solid #1e293b; }
    .stat-num { font-size: 2rem; font-weight: 900; line-height: 1; margin-bottom: 4px; }
    .stat-label { font-size: 0.78rem; color: #64748b; }
    .stat-box.available .stat-num { color: #34d399; }
    .stat-box.issued .stat-num { color: #f87171; }
    .stat-box.added .stat-num { color: #60a5fa; }
    .stat-box.reorder .stat-num { color: #fbbf24; }
    .alert { background: #7f1d1d; border: 1px solid #ef4444; border-radius: 12px; padding: 14px 18px; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
    .alert-icon { font-size: 1.5rem; }
    .alert-text { font-size: 0.9rem; font-weight: 700; color: #fca5a5; }
    .info-list { list-style: none; }
    .info-list li { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #0f172a; font-size: 0.9rem; }
    .info-list li:last-child { border-bottom: none; }
    .info-label { color: #64748b; }
    .info-value { color: #e2e8f0; font-weight: 600; }
    .progress-bar { background: #0f172a; border-radius: 8px; height: 10px; overflow: hidden; margin-top: 12px; }
    .progress-fill { height: 100%; border-radius: 8px; transition: width 0.5s; }
    .progress-label { display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-top: 4px; }
    .loading { text-align: center; padding: 60px 0; color: #64748b; }
    .spinner { width: 40px; height: 40px; border: 3px solid #1e293b; border-top-color: #3b82f6; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 16px; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .footer { text-align: center; padding: 20px 0; color: #334155; font-size: 0.75rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-text">🦁 Access Lion Warehouses</div>
      <div class="logo-sub">مستودعات أكسس ليون — نظام إدارة قطع الغيار</div>
    </div>

    <div id="content">
      <div class="loading">
        <div class="spinner"></div>
        <div>جاري تحميل بيانات القطعة...</div>
      </div>
    </div>

    <div class="footer">تم المسح بواسطة QR Code — Access Lion Warehouses © 2026</div>
  </div>

  <script>
    const partId = '${req.params.id}';
    fetch('/api/public/part/' + partId)
      .then(r => r.json())
      .then(p => {
        if (p.error) {
          document.getElementById('content').innerHTML = '<div class="card" style="text-align:center;color:#f87171;">⚠️ القطعة غير موجودة أو غير نشطة</div>';
          return;
        }

        const pct = Math.min(100, Math.round((p.currentQuantity / Math.max(p.totalAdded || p.minimumStockLevel * 3, 1)) * 100));
        const barColor = p.needsReorder ? '#ef4444' : p.currentQuantity <= p.minimumStockLevel * 2 ? '#fbbf24' : '#34d399';
        const alertHtml = p.needsReorder ? \`
          <div class="alert">
            <div class="alert-icon">🚨</div>
            <div class="alert-text">تنبيه! الكمية وصلت لحد الطلب — يجب إعادة الطلب فوراً<br>
            <small style="font-weight:400">المتبقي: \${p.currentQuantity} \${p.unit || 'pcs'} | حد الطلب: \${p.minimumStockLevel} \${p.unit || 'pcs'}</small></div>
          </div>\` : '';

        document.getElementById('content').innerHTML = \`
          \${alertHtml}
          <div class="card">
            <div class="part-number">\${p.partNumber}</div>
            <div class="part-name">\${p.partName}</div>
            <div class="part-cat">\${p.category || ''}\${p.brand ? ' · ' + p.brand : ''}\${p.model ? ' · ' + p.model : ''}</div>
          </div>

          <div class="stats-grid" style="margin-bottom:16px">
            <div class="stat-box available">
              <div class="stat-num">\${p.currentQuantity}</div>
              <div class="stat-label">المتوفر حالياً</div>
            </div>
            <div class="stat-box reorder">
              <div class="stat-num">\${p.minimumStockLevel}</div>
              <div class="stat-label">حد إعادة الطلب</div>
            </div>
            <div class="stat-box added">
              <div class="stat-num">\${p.totalAdded}</div>
              <div class="stat-label">إجمالي الوارد</div>
            </div>
            <div class="stat-box issued">
              <div class="stat-num">\${p.totalIssued}</div>
              <div class="stat-label">إجمالي المصروف</div>
            </div>
          </div>

          <div class="card">
            <div class="progress-bar"><div class="progress-fill" style="width:\${pct}%;background:\${barColor}"></div></div>
            <div class="progress-label"><span>0</span><span>المخزون: \${pct}%</span><span>\${p.totalAdded || p.currentQuantity}</span></div>
          </div>

          <div class="card">
            <ul class="info-list">
              \${p.location ? \`<li><span class="info-label">📍 الموقع في المخزن</span><span class="info-value">\${p.location}</span></li>\` : ''}
              \${p.supplier ? \`<li><span class="info-label">🏭 المورد</span><span class="info-value">\${p.supplier}</span></li>\` : ''}
              \${p.unit ? \`<li><span class="info-label">📦 وحدة القياس</span><span class="info-value">\${p.unit}</span></li>\` : ''}
              \${p.description ? \`<li><span class="info-label">📝 ملاحظات</span><span class="info-value">\${p.description}</span></li>\` : ''}
            </ul>
          </div>
        \`;
      })
      .catch(() => {
        document.getElementById('content').innerHTML = '<div class="card" style="text-align:center;color:#f87171;">⚠️ خطأ في الاتصال بالخادم</div>';
      });
  </script>
</body>
</html>`);
});

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

    // ── Migration: إضافة أعمدة جديدة إن لم تكن موجودة (آمن للتشغيل مرات متعددة) ──
    const dialect = (process.env.DB_DIALECT || 'sqlite').toLowerCase();
    const isPostgres = !!process.env.DATABASE_URL || dialect === 'postgres';
    if (isPostgres) {
      try {
        await sequelize.query(`ALTER TABLE IF EXISTS assets ADD COLUMN IF NOT EXISTS "plateNumber" VARCHAR(50);`);
        console.log('✅ Migration: plateNumber column ready');
      } catch (e) {
        // العمود موجود أو الجدول لم يُنشأ بعد — لا مشكلة
      }
    }

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
