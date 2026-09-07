const QRCode = require('qrcode');

// بند 2: QR يحتوي على Unique Part ID وليس الاسم فقط، لمنع أي تعارض بين القطع.
// الصيغة المشفّرة داخل QR (JSON) بحيث يتعرف عليها Scanner أي جهاز بسهولة:
// { t: "PART", id: "<uuid>", pn: "SP-000125" }
function buildPartQRPayload(part) {
  return JSON.stringify({ t: 'PART', id: part.id, pn: part.partNumber });
}

// بند 11: QR فردي لكل قطعة فعلية (Serialized Unit)
function buildUnitQRPayload(unit, part) {
  return JSON.stringify({ t: 'UNIT', id: unit.id, sc: unit.serialCode, pid: part.id, pn: part.partNumber });
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
