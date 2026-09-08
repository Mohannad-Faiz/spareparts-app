const QRCode = require('qrcode');

// الـ QR يحتوي على رابط URL مباشر يفتح صفحة تفاصيل القطعة بدون تسجيل دخول
// عند مسح الـ QR من أي هاتف، يفتح المتصفح مباشرة على صفحة القطعة
function buildPartQRPayload(part) {
  const base = process.env.APP_URL || 'https://spareparts-app-production-543f.up.railway.app';
  return `${base}/part/${part.id}`;
}

// بند 11: QR فردي لكل قطعة فعلية (Serialized Unit)
function buildUnitQRPayload(unit, part) {
  const base = process.env.APP_URL || 'https://spareparts-app-production-543f.up.railway.app';
  return `${base}/part/${part.id}?unit=${unit.id}`;
}

// توليد صورة QR كـ Data URL (base64 PNG) - جاهزة للعرض والطباعة مباشرة في الواجهة
async function generateQRImage(payload) {
  return QRCode.toDataURL(payload, {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 400,
  });
}

// توليد Part Number تلقائي متسلسل مثل SP-000125
async function generatePartNumber(Part) {
  const count = await Part.count();
  const next = (count + 1).toString().padStart(6, '0');
  return `SP-${next}`;
}

module.exports = { buildPartQRPayload, buildUnitQRPayload, generateQRImage, generatePartNumber };
