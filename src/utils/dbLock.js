/**
 * طابور تنفيذ (Mutex) للكتابة الآمنة
 * ─────────────────────────────────────────────────────────────────────────────
 * مع PostgreSQL / MySQL: هذا الملف يمرر الاستدعاء مباشرة دون قفل،
 * لأن قواعد البيانات الشبكية تدعم Row-Level Locking الحقيقي.
 *
 * مع SQLite: يُفعَّل القفل تلقائياً لأن SQLite لا تدعم الكتابة المتزامنة.
 *
 * الكود في باقي الملفات لا يحتاج أي تغيير عند التبديل بين قواعد البيانات.
 */

const dialect = (process.env.DB_DIALECT || 'sqlite').toLowerCase();
const needsMutex = dialect === 'sqlite';

let queue = Promise.resolve();

/**
 * ينفّذ الدالة المعطاة:
 *   - PostgreSQL/MySQL: مباشرة (الـ DB تتكفل بمنع التعارض)
 *   - SQLite: بعد انتظار دورها في الطابور (تسلسل صارم)
 */
function withWriteLock(fn) {
  if (!needsMutex) return fn();

  const runNow = queue.then(() => fn());
  queue = runNow.then(() => undefined, () => undefined);
  return runNow;
}

module.exports = { withWriteLock };
