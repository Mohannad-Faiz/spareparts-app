const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'غير مصرح - الرجاء تسجيل الدخول' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, username, role }
    next();
  } catch (err) {
    return res.status(401).json({ error: 'الجلسة منتهية أو غير صالحة' });
  }
}

// بند 17: صلاحيات حسب الدور
// Admin: كل شيء | Storekeeper: Scan/Add/Issue/View | Viewer: View فقط
function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'لا تملك صلاحية للقيام بهذه العملية' });
    }
    next();
  };
}

module.exports = { authenticate, authorize };
