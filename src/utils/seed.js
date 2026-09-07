require('dotenv').config();
const bcrypt = require('bcryptjs');
const { sequelize, User, Part, ScannerDevice } = require('../models');
const { buildPartQRPayload } = require('./qr');

async function seed() {
  await sequelize.sync();

  // إنشاء مستخدم Admin أولي إذا لم يكن موجوداً
  const existingAdmin = await User.findOne({ where: { username: 'admin' } });
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('Admin@12345', 10);
    await User.create({
      fullName: 'System Admin',
      username: 'admin',
      email: 'admin@company.com',
      passwordHash,
      role: 'admin',
    });
    console.log('✅ تم إنشاء مستخدم Admin:');
    console.log('   Username: admin');
    console.log('   Password: Admin@12345');
    console.log('   ⚠️  الرجاء تغيير كلمة المرور فوراً بعد أول تسجيل دخول');
  } else {
    console.log('ℹ️  مستخدم Admin موجود مسبقاً');
  }

  // مثال بيانات تجريبية (اختياري - يمكن حذفه)
  const existingPart = await Part.findOne({ where: { partNumber: 'SP-000125' } });
  if (!existingPart) {
    const part = await Part.create({
      partNumber: 'SP-000125',
      partName: 'Oil Filter',
      description: 'Standard oil filter for diesel engines',
      category: 'Filters',
      brand: 'Bosch',
      model: 'OF-2200',
      location: 'Main Store',
      minimumStockLevel: 10,
      currentQuantity: 25,
      unit: 'pcs',
      supplier: 'Al Futtaim Auto Parts',
    });
    part.qrCodeData = buildPartQRPayload(part);
    await part.save();
    console.log('✅ تم إنشاء قطعة تجريبية: SP-000125 - Oil Filter');
  }

  // إنشاء أجهزة ماسح أولية في النظام
  const existingDevice = await ScannerDevice.findOne({ where: { name: 'Honeywell Xenon 1900' } });
  if (!existingDevice) {
    await ScannerDevice.bulkCreate([
      {
        name: 'Honeywell Xenon 1900 (Dock A)',
        deviceType: 'HID_KEYBOARD',
        connectionPort: 'USB-HID-PORT-1',
        warehouseLocation: 'Receiving Dock A / رصيف الاستلام A',
        defaultAction: 'LOOKUP',
        soundFeedback: 'BEEP_CHIME',
        status: 'ACTIVE',
        totalScansCount: 42,
        notes: 'Wireless 2D QR Barcode Scanner for inbound stock receiving',
      },
      {
        name: 'Zebra DS2208 (Dispatch Table)',
        deviceType: 'HID_KEYBOARD',
        connectionPort: 'USB-HID-PORT-2',
        warehouseLocation: 'Main Dispatch Table / طاولة الصرف المركزية',
        defaultAction: 'LOOKUP',
        soundFeedback: 'BEEP_HIGH',
        status: 'ACTIVE',
        totalScansCount: 18,
        notes: 'Handheld QR gun for maintenance workshops and dispatch',
      },
      {
        name: 'Industrial High-Speed Cam 01',
        deviceType: 'CAMERA_FIXED',
        connectionPort: 'CAM-UVC-01',
        warehouseLocation: 'Inspection Station 1 / محطة الفحص 1',
        defaultAction: 'LOOKUP',
        soundFeedback: 'BEEP_DIGITAL',
        status: 'ACTIVE',
        totalScansCount: 9,
        notes: 'Overhead optical camera scanner for auto-verification',
      }
    ]);
    console.log('✅ تم إنشاء أجهزة ماسح تجريبية افتراضية في النظام');
  }

  process.exit(0);
}

seed().catch(err => {
  console.error('❌ فشل التهيئة:', err);
  process.exit(1);
});
