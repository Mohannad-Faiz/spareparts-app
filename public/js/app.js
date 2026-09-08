/**
 * Access Lion Warehouses - Client Application Engine
 * Bilingual (Arabic / English)
 * Functional QR Code Stock Management & Complete Purchase Orders / Reorder Studio
 */

// =========================================================
// 1. i18n Translations Dictionary
// =========================================================
const i18n = {
  ar: {
    lang_btn: 'English',
    company_name: 'Access Lion Warehouses',
    company_name_ar: 'مستودعات أكسس ليون',
    brand_warehouses: 'Warehouses',
    page_title: 'Access Lion Warehouses | مستودعات أكسس ليون',
    login_title: 'Access Lion Warehouses',
    login_subtitle: 'مستودعات أكسس ليون - نظام إدارة مخزون قطع الغيار والـ QR Code',
    splash_skip_hint: 'انقر للتخطي السريع • Click to skip',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    login_button: 'تسجيل الدخول',
    demo_creds_label: 'بيانات التجربة السريعة:',

    // Sidebar
    nav_inventory: 'المخزون والقطع',
    nav_add_part: 'إضافة قطعة جديدة',
    nav_scanner: 'ماسح وفحص QR',
    nav_orders: 'طلبات الشراء والأوردر',
    nav_print_labels: 'طباعة الملصقات',
    nav_audit: 'سجل العمليات',
    nav_users: 'المستخدمين والصلاحيات',
    logout_title: 'تسجيل الخروج',

    // Top bar
    search_placeholder: 'بحث سريع برقم القطعة، الاسم، الموديل، الموقع...',
    btn_quick_scan: 'مسح QR سريع',
    btn_quick_add: 'إضافة قطعة',

    // Stats
    stat_total_parts: 'إجمالي أنواع القطع',
    stat_total_stock: 'إجمالي الكميات المتوفرة',
    stat_low_stock: 'تنبيهات نقص المخزون',
    stat_categories: 'التصنيفات والمواقع',
    categories_suffix: 'تصنيفات',

    // Inventory Tab
    inventory_title: 'دليل ومخزون قطع الغيار',
    inventory_subtitle: 'استعراض، تصفية، طباعة رموز QR، وإدارة القطع في المخزن',
    filter_all_categories: 'جميع التصنيفات',
    filter_all_brands: 'جميع الماركات',
    filter_low_stock_btn: 'قطع منخفضة المخزون فقط',
    th_qr: 'رمز QR',
    th_part_num: 'رقم القطعة (Part #)',
    th_part_name: 'اسم القطعة',
    th_category_brand: 'التصنيف / الماركة',
    th_location: 'الموقع في المخزن',
    th_qty: 'الكمية المتوفرة',
    th_min_stock: 'حد الإنذار',
    th_actions: 'الإجراءات',
    empty_parts_title: 'لا توجد قطع مطابقة للبحث',
    empty_parts_desc: 'جرب تغيير معايير البحث أو أضف قطعة غيار جديدة للمخزون.',
    empty_parts_btn: 'إضافة قطعة الآن',
    action_print_qr: 'طباعة QR',
    action_edit: 'تعديل',
    action_delete: 'تعطيل',
    not_specified: 'غير محدد',

    // Add Part Tab
    add_part_title: 'إضافة قطعة غيار جديدة',
    add_part_subtitle: 'توليد رقم القطعة تلقائياً وإنشاء رمز QR فريد مرتبط بها في قاعدة البيانات',
    form_part_num: 'رقم القطعة (Part Number)',
    form_part_num_hint: '(اتركه فارغاً للتوليد التلقائي مثل SP-000126)',
    btn_generate: 'توليد',
    form_part_name: 'اسم القطعة',
    form_category: 'التصنيف',
    form_brand: 'الماركة / الشركة المصنعة',
    form_model: 'الموديل / المركبة المتوافقة',
    form_location: 'موقع التخزين في المستودع',
    form_quantity: 'الكمية الافتتاحية',
    form_min_stock: 'حد الأمان / إعادة الطلب',
    form_unit: 'وحدة القياس',
    form_supplier: 'المورد',
    form_desc: 'الوصف والمواصفات الفنية',
    form_notes: 'ملاحظات داخلية',
    btn_save_part: 'حفظ وإنشاء رمز QR',
    btn_reset_form: 'تفريغ الحقول',

    // Units
    unit_pcs: 'قطعة (pcs)',
    unit_set: 'طقم (set)',
    unit_box: 'صندوق (box)',
    unit_liter: 'لتر (liter)',
    unit_meter: 'متر (meter)',
    unit_kg: 'كيلوغرام (kg)',
    unit_pair: 'زوج (pair)',

    // QR Scanner Tab
    scanner_title: 'مسح رمز QR عبر الكاميرا',
    scanner_subtitle: 'وجّه كاميرا الهاتف أو الحاسوب نحو ملصق QR للتعرف الفوري على القطعة',
    btn_start_camera: 'تشغيل الكاميرا',
    btn_stop_camera: 'إيقاف الكاميرا',
    scanner_divider: 'أو محاكاة مسح QR / إدخال يدوي',
    manual_scan_label: 'نص أو شفرة QR الممسوحة (Scan Payload):',
    btn_lookup: 'فحص',
    quick_test_hint: 'جرّب مسح إحدى هذه القطع بنقرة واحدة:',
    no_parts_to_test: 'لا توجد قطع لتجربة المسح السريع',
    scan_result_title: 'نتيجة الفحص والمطابقة',
    scan_result_subtitle: 'بيانات القطعة الفورية من المخزون',
    scan_waiting_title: 'بانتظار مسح رمز QR...',
    scan_waiting_desc: 'قم بتوجيه الكاميرا نحو أي قطعة أو اضغط على أحد أزرار التجربة السريعة.',
    scan_in_stock: '✅ متوفر',
    scan_low_stock_warning: '⚠️ نقص مخزون',
    scan_matched_location: 'الموقع في المستودع',
    scan_matched_cat_brand: 'التصنيف والماركة',
    scan_matched_model: 'الموديل المتوافق',
    scan_matched_min_stock: 'حد الأمان وإعادة الطلب',
    scan_matched_supplier_desc: 'المورد والمواصفات',
    
    // Actions on scanned part
    action_add_stock_btn: '+ إضافة مخزون',
    action_issue_stock_btn: '- صرف / سحب',
    action_view_history_btn: 'سجل الحركات',
    action_edit_part_btn: 'تعديل القطعة',
    action_print_label_btn: 'طباعة الملصق',

    // Stock Modals
    modal_add_stock_title: '+ إضافة وتوريد مخزون',
    form_qty_to_add: 'الكمية المراد إضافتها',
    form_po_number: 'رقم أمر الشراء (PO #)',
    form_invoice_number: 'رقم الفاتورة (Invoice #)',
    btn_confirm_add_stock: 'تأكيد إضافة الرصيد',
    
    modal_issue_stock_title: '- صرف وسحب من المخزون',
    form_qty_to_issue: 'الكمية المراد صرفها',
    form_issued_to: 'المستلم (الفني / السائق / الموظف)',
    form_vehicle_equip: 'رقم المعدة / المركبة (Vehicle / Equipment #)',
    form_dept_project: 'القسم / المشروع',
    form_work_order: 'رقم أمر الشغل (Work Order #)',
    form_reason_issue: 'سبب الصرف',
    btn_confirm_issue_stock: 'تأكيد صرف الكمية',

    modal_history_title: 'سجل حركات وتاريخ القطعة',
    th_trans_type: 'نوع الحركة',
    th_trans_qty: 'الكمية',
    th_trans_balance: 'الرصيد بعدها',
    th_trans_user: 'المستخدم',
    th_trans_ref: 'المرجع / المستلم',

    // Scanner Devices & Hardware Management (أجهزة الماسح)
    nav_devices: 'أجهزة الـ Scanner',
    stat_total_devices: 'إجمالي أجهزة الماسح',
    stat_active_devices: 'الأجهزة النشطة والمتصلة',
    stat_total_device_scans: 'إجمالي عمليات المسح',
    stat_speed_mode: 'محرك الالتقاط الفوري',
    stat_speed_value: '< 40ms Active',
    devices_title: 'إدارة أجهزة ماسح الـ QR والباركود (Hardware Scanners)',
    devices_subtitle: 'ربط، معايرة، وإدارة أجهزة المسح اللاسلكية (USB/Bluetooth HID)، منافذ السيريال، والكاميرات المخصصة',
    btn_add_device: '+ إضافة جهاز ماسح جديد',
    empty_devices_title: 'لا توجد أجهزة ماسح مضافة بعد',
    empty_devices_desc: 'أضف جهاز ماسح QR يدوي (USB/Wireless) أو كاميرا مخصصة لتمكين المسح السريع والمعالجة التلقائية.',
    calibration_title: 'محطة الفحص والاختبار المباشرة (Live Scanner Calibration & Test Pad)',
    calibration_subtitle: 'فحص استجابة الماسح، قياس زمن المعالجة (Latency ms)، وتجربة التنبيهات الصوتية الحية',
    test_station_live: 'المحطة جاهزة للاستقبال',
    select_device_to_test: 'اختر الجهاز المراد اختباره:',
    scan_input_pad_label: 'حقل استقبال المسح المباشر (وجّه الجهاز واضغط الزناد):',
    btn_simulate_pulse: 'محاكاة إشارة',
    hw_scanner_title: 'ماسح الـ QR اللاسلكي / السلكي (Hardware Scanner)',
    hw_scanner_desc: 'النظام يلتقط إشارات المسدس اللاسلكي أو ماسح الـ USB تلقائياً وبسرعة فائقة دون الحاجة للوقوف داخل أي حقل إدخال.',
    active_device_select_label: 'الجهاز النشط حالياً:',
    btn_manage_devices: 'إدارة الأجهزة',
    modal_add_device_title: 'إضافة جهاز ماسح QR / باركود جديد',
    modal_edit_device_title: 'تعديل بيانات جهاز الماسح',
    modal_test_device_title: 'فحص واختبار جهاز الماسح',
    form_device_name: 'اسم الجهاز والتعريف',
    form_device_type: 'نوع بروتوكول الجهاز',
    form_connection_port: 'المنفذ أو المعرف (Port / Identifier)',
    form_device_location: 'موقع الجهاز في المستودع',
    form_default_action: 'الإجراء التلقائي فور المسح',
    form_sound_feedback: 'نغمة التنبيه الصوتي (Sound Feedback)',
    form_device_status: 'الحالة التشغيلية',
    btn_save_device: 'حفظ وربط الجهاز بالنظام',
    action_calibrate: 'معايرة واختبار',
    action_set_active: 'تعيين كنشط',
    action_is_active: 'الجهاز النشط حالياً',
    test_latency_label: 'سرعة الاستجابة المقاسة:',
    test_scan_prompt: 'قم بمسح أي رمز QR أو باركود عبر هذا الجهاز الآن:',
    btn_send_test_pulse: 'إرسال نبضة فحص',
    btn_test_audio_chime: 'اختبار الصوت',
    btn_done: 'تم وإنهاء الفحص',
    device_created_success: 'تم تسجيل جهاز الماسح وربطه بالنظام بنجاح!',
    device_updated_success: 'تم تحديث إعدادات جهاز الماسح بنجاح',
    device_deleted_success: 'تم إيقاف تفعيل جهاز الماسح',
    device_test_success: 'جهاز الماسح متصل ويعمل بكفاءة عالية',
    device_active_switched: 'تم تبديل جهاز الماسح النشط إلى:',
    btn_pair_serial: 'ربط منفذ Serial / COM',
    theme_light: 'الوضع الفاتح',
    theme_dark: 'الوضع الداكن',
    theme_toggle: 'تبديل المظهر (داكن / فاتح)',
    theme_switched_dark: 'تم تفعيل الوضع الداكن (Dark Mode) 🌙',
    theme_switched_light: 'تم تفعيل الوضع الفاتح (Light Mode) ☀️',

    // Purchase Orders Tab & Modals
    low_stock_orders_title: 'تنبيهات قطع الغيار التي قاربت على النفاد (Low Stock Alerts)',
    low_stock_orders_subtitle: 'قطع غيار وصلت إلى حد الأمان أو أقل - يمكنك إنشاء أمر شراء وتوريد فوري لها مع المواصفات',
    btn_order_all_low_stock: 'إضافة كل القطع المنخفضة لأمر شراء جديد',
    th_suggested_qty: 'الكمية المقترحة للطلب',
    orders_history_title: 'سجل أوامر الشراء الصادرة (Purchase Orders History)',
    orders_history_subtitle: 'متابعة حالات أوامر التوريد، الاستلام المخزني، وطباعة الأوردر الرسمي مع المواصفات الفنية',
    btn_create_new_order: '+ إنشاء أمر شراء جديد',
    th_po_num: 'رقم أمر الشراء (PO #)',
    th_items_count: 'عدد الأصناف',
    th_total_amount: 'القيمة التقديرية',
    th_order_priority: 'الأولوية',
    th_order_status: 'حالة الأوردر',
    th_expected_date: 'تاريخ التوريد المتوقع',
    th_created_by: 'المسؤول',
    modal_new_order_title: 'إنشاء أمر شراء وتوريد جديد',
    form_supplier_contact: 'بيانات التواصل / هاتف المورد',
    form_expected_delivery: 'تاريخ التوريد المتوقع',
    form_target_department: 'المستودع المستلم',
    form_order_terms_notes: 'الشروط والملاحظات الخاصة بالأوردر والمواصفات',
    order_items_list_title: 'قائمة القطع والمواصفات المطلوبة في هذا الأوردر',
    select_part_to_add: 'اختر قطعة من المخزون',
    form_qty_to_order: 'الكمية المطلوبة',
    form_est_unit_price: 'السعر التقديري',
    form_item_specs: 'المواصفات الفنية للقطعة',
    btn_add_to_po: '+ إضافة للأوردر',
    th_current_stock: 'الرصيد الحالي',
    th_qty_to_order: 'الكمية المطلوبة',
    th_est_price: 'السعر التقديري',
    th_total: 'الإجمالي',
    order_total_est: 'الإجمالي التقديري للأوردر:',
    btn_save_and_generate_po: 'حفظ وتوليد أمر الشراء',
    btn_print_order_doc: 'طباعة أمر الشراء الرسمي',
    btn_receive_stock_to_inventory: '📦 استلام وتوريد للمخزون تلقائياً',
    btn_mark_ordered: 'تم إرسال الطلب للمورد',
    order_created_success: 'تم إنشاء أمر الشراء بنجاح وتوليد وثيقة الطلب!',
    order_status_updated_success: 'تم تحديث حالة أمر الشراء بنجاح',
    order_received_success: 'تم تأكيد الاستلام وزيادة كميات المخزون لجميع القطع المطلوبة بنجاح!',
    order_deleted_success: 'تم حذف أمر الشراء بنجاح',
    status_pending: 'قيد الاعتماد',
    status_ordered: 'تم إرسال الطلب للمورد',
    status_received: 'تم الاستلام والتوريد للمخزن',
    status_cancelled: 'ملغي',
    priority_normal: 'عادي (Normal)',
    priority_high: 'عالي (High)',
    priority_urgent: 'طارئ جداً (Urgent)',
    no_low_stock_parts: 'ممتاز! لا توجد قطع منخفضة المخزون حالياً',
    no_orders_recorded: 'لا توجد أوامر شراء مسجلة بعد. اضغط على "+ إنشاء أمر شراء جديد"',
    order_item_already_added: 'هذه القطعة مضافة بالفعل في قائمة الأوردر الحالي',

    // Print Labels Tab
    print_studio_title: 'ستوديو طباعة ملصقات QR',
    print_studio_subtitle: 'إنشاء بطاقات وملصقات جاهزة للطباعة الفورية بمقاسات الطابعات الحرارية و A4',
    btn_print_all: 'طباعة جميع الملصقات',
    loading_labels: 'جاري تحميل بطاقات QR لجميع القطع...',
    no_labels: 'لا توجد قطع لعرض الملصقات',
    stock_balance_label: 'الرصيد',

    // Audit Log Tab
    audit_title: 'سجل الرقابة والعمليات (Audit Log)',
    audit_subtitle: 'تتبع كل عملية تتم في النظام (تسجيل الدخول، إنشاء قطع، تعديل، إلغاء تفعيل)',
    btn_refresh_audit: 'تحديث السجل',
    th_audit_time: 'التوقيت',
    th_audit_user: 'المستخدم',
    th_audit_action: 'نوع الإجراء',
    th_audit_entity: 'الكيان',
    th_audit_id: 'معرف الكيان',
    th_audit_details: 'التفاصيل الإضافية',
    no_audit_logs: 'لا توجد سجلات بعد',

    // Users Tab
    users_title: 'إدارة المستخدمين والصلاحيات',
    users_subtitle: 'إضافة مستخدمين جدد وتحديد الأدوار (Admin, Storekeeper, Viewer)',
    btn_new_user: 'مستخدم جديد',
    th_user_name: 'الاسم الكامل',
    th_user_username: 'اسم المستخدم',
    th_user_email: 'البريد الإلكتروني',
    th_user_role: 'الدور والصلاحية',
    th_user_status: 'الحالة',
    th_user_created: 'تاريخ الإنشاء',
    status_active: 'فعال',
    status_inactive: 'معطل',

    // Modals
    modal_qr_title: 'ملصق رمز QR للقطعة',
    btn_print_label_now: 'طباعة الملصق الآن',
    btn_download_qr: 'تحميل صورة QR',
    modal_edit_part_title: 'تعديل بيانات قطعة الغيار',
    btn_save_changes: 'حفظ التعديلات',
    btn_cancel: 'إلغاء',
    modal_add_user_title: 'إضافة مستخدم جديد للنظام',
    form_user_fullname: 'الاسم الكامل',
    form_user_username: 'اسم المستخدم (Login Username)',
    form_user_password: 'كلمة المرور',
    form_user_role: 'الدور والصلاحية',
    btn_create_user: 'إنشاء المستخدم',

    // Toasts & Dialogs
    welcome_back: 'مرحباً بك مجدداً،',
    session_expired: 'انتهت الجلسة، يرجى تسجيل الدخول مرة أخرى.',
    part_created_success: 'تمت إضافة القطعة بنجاح وتوليد رمز QR!',
    part_updated_success: 'تم تحديث بيانات القطعة بنجاح',
    part_disabled_success: 'تم تعطيل القطعة بنجاح',
    user_created_success: 'تم إنشاء المستخدم بنجاح',
    scan_success: 'تم التعرف على القطعة بنجاح!',
    scan_failed: 'فشل التعرف على الـ QR: رمز غير صالح أو غير موجود',
    manual_scan_empty: 'يرجى إدخال نص الـ QR أو الضغط على أحد أزرار التجربة',
    camera_error: 'تعذر تشغيل الكاميرا',
    confirm_disable: 'هل أنت متأكد من رغبتك في تعطيل هذه القطعة؟ (لن تحذف الحركات السابقة)',
    stock_added_success: 'تمت إضافة الكمية إلى المخزون بنجاح وتسجيل الحركة!',
    stock_issued_success: 'تم صرف الكمية وتحديث المخزون بنجاح!',
    no_history_records: 'لا توجد حركات مسجلة لهذه القطعة حتى الآن'
  },

  en: {
    lang_btn: 'عربي',
    company_name: 'Access Lion Warehouses',
    company_name_ar: 'Access Lion Warehouses',
    brand_warehouses: 'Warehouses',
    page_title: 'Access Lion Warehouses | Spare Parts Management',
    login_title: 'Access Lion Warehouses',
    login_subtitle: 'Spare Parts Inventory Management System with QR Code',
    splash_skip_hint: 'Click to skip • انقر للتخطي',
    username: 'Username',
    password: 'Password',
    login_button: 'Sign In',
    demo_creds_label: 'Demo credentials:',

    // Sidebar
    nav_inventory: 'Inventory & Parts',
    nav_add_part: 'Add New Part',
    nav_scanner: 'QR Scanner & Lookup',
    nav_orders: 'Purchase Orders',
    nav_print_labels: 'Print QR Labels',
    nav_audit: 'Audit Log',
    nav_users: 'Users & Roles',
    nav_devices: 'Scanner Devices',
    nav_assets: 'Company Assets',
    logout_title: 'Sign Out',

    // Top bar
    search_placeholder: 'Search by part number, name, model, location...',
    btn_quick_scan: 'Quick QR Scan',
    btn_quick_add: 'Add Part',

    // Stats
    stat_total_parts: 'Total Part Types',
    stat_total_stock: 'Total Available Quantity',
    stat_low_stock: 'Low Stock Alerts',
    stat_categories: 'Categories & Locations',
    categories_suffix: 'categories',

    // Inventory Tab
    inventory_title: 'Spare Parts Inventory',
    inventory_subtitle: 'Browse, filter, print QR codes, and manage parts in the warehouse',
    filter_all_categories: 'All Categories',
    filter_all_brands: 'All Brands',
    filter_low_stock_btn: 'Low Stock Only',
    th_qr: 'QR',
    th_part_num: 'Part Number',
    th_part_name: 'Part Name',
    th_category_brand: 'Category / Brand',
    th_location: 'Warehouse Location',
    th_qty: 'Available Qty',
    th_min_stock: 'Reorder Level',
    th_actions: 'Actions',
    th_actions2: 'Actions',
    empty_parts_title: 'No matching parts found',
    empty_parts_desc: 'Try changing search criteria or add a new spare part.',
    empty_parts_btn: 'Add Part Now',
    action_print_qr: 'Print QR',
    action_edit: 'Edit',
    action_delete: 'Deactivate',
    not_specified: 'Not specified',

    // Add Part Tab
    add_part_title: 'Add New Spare Part',
    add_part_subtitle: 'Auto-generate part number and create a unique QR code linked to the database',
    form_part_num: 'Part Number',
    form_part_num_hint: '(Leave empty for auto-generation e.g. SP-000126)',
    btn_generate: 'Generate',
    form_part_name: 'Part Name',
    form_category: 'Category',
    form_brand: 'Brand / Manufacturer',
    form_model: 'Model / Compatible Vehicle',
    form_location: 'Warehouse Storage Location',
    form_quantity: 'Opening Quantity',
    form_min_stock: 'Safety Stock / Reorder Level',
    form_unit: 'Unit of Measure',
    form_supplier: 'Supplier',
    form_desc: 'Description & Technical Specifications',
    form_notes: 'Internal Notes',
    btn_save_part: 'Save & Generate QR Code',
    btn_reset_form: 'Clear Form',

    // Units
    unit_pcs: 'Piece (pcs)',
    unit_set: 'Set',
    unit_box: 'Box',
    unit_liter: 'Liter',
    unit_meter: 'Meter',
    unit_kg: 'Kilogram (kg)',
    unit_pair: 'Pair',

    // QR Scanner Tab
    scanner_title: 'QR Code Scanner via Camera',
    scanner_subtitle: 'Point your phone or computer camera at a QR label for instant part recognition',
    btn_start_camera: 'Start Camera',
    btn_stop_camera: 'Stop Camera',
    scanner_divider: 'Or simulate scan / manual entry',
    manual_scan_label: 'Scanned QR text or code (Scan Payload):',
    btn_lookup: 'Lookup',
    quick_test_hint: 'Quick test — click to scan:',
    no_parts_to_test: 'No parts available for quick scan test',
    scan_result_title: 'Scan Result & Match',
    scan_result_subtitle: 'Instant part data from inventory',
    scan_waiting_title: 'Waiting for QR scan...',
    scan_waiting_desc: 'Point the camera at any part or click a quick test button.',
    scan_in_stock: '✅ In Stock',
    scan_low_stock_warning: '⚠️ Low Stock',
    scan_matched_location: 'Warehouse Location',
    scan_matched_cat_brand: 'Category & Brand',
    scan_matched_model: 'Compatible Model',
    scan_matched_min_stock: 'Safety Stock Level',
    scan_matched_supplier_desc: 'Supplier & Specs',
    scan_matched_balance: 'Available Balance',

    // Actions on scanned part
    action_add_stock_btn: '+ Add Stock',
    action_issue_stock_btn: '- Issue / Withdraw',
    action_view_history_btn: 'Transaction History',
    action_edit_part_btn: 'Edit Part',
    action_print_label_btn: 'Print Label',

    // Stock Modals
    modal_add_stock_title: '+ Add Stock / Receive',
    form_qty_to_add: 'Quantity to Add',
    form_po_number: 'Purchase Order # (PO #)',
    form_invoice_number: 'Invoice Number',
    btn_confirm_add_stock: 'Confirm Add Stock',

    modal_issue_stock_title: '- Issue / Withdraw from Stock',
    form_qty_to_issue: 'Quantity to Issue',
    form_issued_to: 'Issued To (Technician / Driver / Employee)',
    form_vehicle_equip: 'Vehicle / Equipment Number',
    form_dept_project: 'Department / Project',
    form_work_order: 'Work Order Number',
    form_reason_issue: 'Reason for Issue',
    btn_confirm_issue_stock: 'Confirm Issue',

    modal_history_title: 'Part Transaction History',
    th_trans_type: 'Type',
    th_trans_qty: 'Quantity',
    th_trans_balance: 'Balance After',
    th_trans_user: 'User',
    th_trans_ref: 'Reference / Recipient',
    th_trans_date: 'Date & Time',
    th_trans_notes: 'Notes',
    no_history: 'No transactions recorded for this part yet',
    no_history_records: 'No transactions recorded for this part yet',

    // Scanner Devices
    stat_total_devices: 'Total Scanner Devices',
    stat_active_devices: 'Active & Connected',
    stat_total_device_scans: 'Total Scan Operations',
    stat_speed_mode: 'Instant Capture Engine',
    stat_speed_value: '< 40ms Active',
    devices_title: 'QR & Barcode Scanner Device Management',
    devices_subtitle: 'Connect, calibrate, and manage wireless scanners (USB/Bluetooth HID), serial ports, and dedicated cameras',
    btn_add_device: '+ Add New Scanner Device',
    empty_devices_title: 'No scanner devices added yet',
    empty_devices_desc: 'Add a QR scanner (USB/Wireless) or dedicated camera to enable fast scanning.',
    calibration_title: 'Live Scanner Calibration & Test Pad',
    calibration_subtitle: 'Test scanner response, measure latency (ms), and test live audio feedback',
    test_station_live: 'Station Ready for Input',
    select_device_to_test: 'Select device to test:',
    scan_input_pad_label: 'Live Scan Input Field (aim device and pull trigger):',
    btn_simulate_pulse: 'Simulate Signal',
    hw_scanner_title: 'Wireless / USB Hardware Scanner',
    hw_scanner_desc: 'The system automatically captures wireless gun or USB scanner signals at high speed without needing to focus on any input field.',
    active_device_select_label: 'Currently Active Device:',
    btn_manage_devices: 'Manage Devices',
    modal_add_device_title: 'Add New QR / Barcode Scanner Device',
    modal_edit_device_title: 'Edit Scanner Device',
    modal_test_device_title: 'Test & Calibrate Scanner',
    form_device_name: 'Device Name & Identifier',
    form_device_type: 'Device Protocol Type',
    form_connection_port: 'Port / Identifier',
    form_device_location: 'Device Location in Warehouse',
    form_default_action: 'Default Action on Scan',
    form_sound_feedback: 'Audio Feedback Tone',
    form_device_status: 'Operational Status',
    btn_save_device: 'Save & Pair Device',
    action_calibrate: 'Calibrate & Test',
    action_set_active: 'Set as Active',
    action_is_active: 'Currently Active',
    test_latency_label: 'Measured Response Latency:',
    test_scan_prompt: 'Scan any QR Code or Barcode with this device now:',
    btn_send_test_pulse: 'Send Test Pulse',
    btn_test_audio_chime: 'Test Audio',
    btn_done: 'Done',
    device_created_success: 'Scanner device registered successfully!',
    device_updated_success: 'Scanner device updated successfully',
    device_deleted_success: 'Scanner device deactivated',
    device_test_success: 'Scanner responding normally',
    device_active_switched: 'Active scanner switched to:',
    btn_pair_serial: 'Pair Serial / COM',
    theme_light: 'Light Mode',
    theme_dark: 'Dark Mode',
    theme_toggle: 'Toggle Theme',
    theme_switched_dark: 'Dark Mode activated 🌙',
    theme_switched_light: 'Light Mode activated ☀️',

    // Purchase Orders
    low_stock_orders_title: 'Low Stock Alerts & Reorder Suggestions',
    low_stock_orders_subtitle: 'Parts at or below safety stock — generate instant purchase orders',
    btn_order_all_low_stock: 'Add All Low Stock to New PO',
    th_suggested_qty: 'Suggested Qty',
    orders_history_title: 'Purchase Orders History',
    orders_history_subtitle: 'Track order statuses, receipts, and print official Purchase Orders',
    btn_create_new_order: '+ Create New Purchase Order',
    th_po_num: 'PO Number',
    th_items_count: 'Items',
    th_total_amount: 'Est. Amount',
    th_order_priority: 'Priority',
    th_order_status: 'Status',
    th_expected_date: 'Expected Delivery',
    th_created_by: 'Created By',
    modal_new_order_title: 'Create New Purchase Order',
    form_supplier_contact: 'Supplier Contact / Phone',
    form_expected_delivery: 'Expected Delivery Date',
    form_target_department: 'Receiving Warehouse',
    form_order_terms_notes: 'PO Terms & Notes',
    order_items_list_title: 'Order Items & Specifications',
    select_part_to_add: 'Select Part from Inventory',
    form_qty_to_order: 'Requested Quantity',
    form_est_unit_price: 'Est. Unit Price',
    form_item_specs: 'Item Specifications',
    btn_add_to_po: '+ Add to Order',
    th_current_stock: 'Current Stock',
    th_qty_to_order: 'Requested Qty',
    th_est_price: 'Unit Price',
    th_total: 'Total',
    order_total_est: 'Estimated Order Total:',
    btn_save_and_generate_po: 'Save & Generate PO',
    btn_print_order_doc: 'Print Official PO',
    btn_receive_stock_to_inventory: '📦 Receive into Inventory',
    btn_mark_ordered: 'Mark as Sent to Supplier',
    order_created_success: 'Purchase Order created successfully!',
    order_status_updated_success: 'Order status updated',
    order_received_success: 'Order received and stock updated!',
    order_deleted_success: 'Purchase Order deleted',
    status_pending: 'Pending',
    status_ordered: 'Ordered',
    status_received: 'Received',
    status_cancelled: 'Cancelled',
    priority_normal: 'Normal',
    priority_high: 'High',
    priority_urgent: 'Urgent',
    no_low_stock_parts: 'No parts are currently low on stock',
    no_orders_recorded: 'No purchase orders yet',
    order_item_already_added: 'Part already added to current order',

    // Print Labels
    print_studio_title: 'QR Labels Print Studio',
    print_studio_subtitle: 'Generate printable QR labels for thermal printers or A4 sheets',
    btn_print_all: 'Print All Labels',
    loading_labels: 'Loading QR cards...',
    no_labels: 'No parts available to print',
    stock_balance_label: 'Stock',

    // Bulk QR Print
    bulk_qr_title: 'Print Multiple QR Copies for One Part',
    bulk_qr_subtitle: 'Select part, set quantity, print all copies on one page',
    bulk_qr_select_part: 'Select Part',
    bulk_qr_count_label: 'Number of Copies',
    bulk_qr_preview_btn: 'Preview & Print',
    bulk_qr_modal_title: 'Preview & Print QR Labels',
    bulk_qr_print_btn: 'Print Now',
    bulk_qr_loading: 'Generating QR images...',

    // Assets Tab
    nav_assets: 'Company Assets',
    assets_title: 'Company Assets Management',
    assets_subtitle: 'Track and manage company assets — vehicles, electronics, furniture, tools',
    btn_add_asset: 'Add Asset',
    asset_filter_all_cats: 'All Categories',
    asset_filter_all_statuses: 'All Statuses',
    asset_cat_vehicle: '🚗 Vehicle',
    asset_cat_electronics: '💻 Electronics',
    asset_cat_furniture: '🪑 Furniture',
    asset_cat_tools: '🔧 Tools & Equipment',
    asset_cat_other: '📦 Other',
    asset_status_active: '✅ Active',
    asset_status_inactive: 'Inactive',
    asset_status_damaged: '⚠️ Damaged',
    asset_status_lost: '🔴 Lost',
    asset_status_disposed: 'Disposed',
    asset_col_number: 'Asset Number',
    asset_col_name: 'Asset Name',
    asset_col_category: 'Category',
    asset_col_location: 'Location / Assigned To',
    asset_col_date: 'Purchase Date',
    asset_col_value: 'Value',
    asset_col_status: 'Status',
    asset_col_actions: 'Actions',
    modal_add_asset_title: 'Add New Asset',
    modal_edit_asset_title: 'Edit Asset',
    form_asset_name: 'Asset Name',
    form_asset_number: 'Asset Number (leave empty for auto-generation)',
    form_asset_brand: 'Brand / Manufacturer',
    form_asset_model: 'Model / Type',
    form_asset_serial: 'Serial Number (S/N)',
    form_asset_location: 'Location',
    form_asset_assigned: 'Assigned To',
    form_asset_date: 'Purchase Date',
    form_asset_value: 'Value',
    form_asset_currency: 'Currency',
    form_asset_supplier: 'Supplier',
    form_asset_status: 'Status',
    form_asset_notes: 'Notes',
    asset_saved_success: 'Asset saved successfully',
    asset_deleted_success: 'Asset deleted',
    asset_qr_title: 'Asset QR Code',
    stat_total_assets: 'Total Assets',
    stat_active_assets: 'Active',
    stat_damaged_assets: 'Damaged',
    stat_lost_assets: 'Lost',
    no_assets_found: 'No assets found — click "Add Asset" to start',

    // Audit Log
    audit_title: 'Audit Log & Activity Trail',
    audit_subtitle: 'Tracks all system actions (logins, part creation, edits, deletions)',
    btn_refresh_audit: 'Refresh',
    th_audit_time: 'Timestamp',
    th_audit_user: 'User',
    th_audit_action: 'Action',
    th_audit_entity: 'Entity',
    th_audit_id: 'Entity ID',
    th_audit_details: 'Details',
    no_audit_logs: 'No audit records yet',

    // Users
    users_title: 'Users & Permissions',
    users_subtitle: 'Manage user accounts and roles (Admin, Storekeeper, Viewer)',
    btn_new_user: 'New User',
    th_user_name: 'Full Name',
    th_user_username: 'Username',
    th_user_email: 'Email',
    th_user_role: 'Role',
    th_user_status: 'Status',
    th_user_created: 'Created',
    status_active: 'Active',
    status_inactive: 'Inactive',

    // Modals
    modal_qr_title: 'Part QR Code Label',
    btn_print_label_now: 'Print Label',
    btn_download_qr: 'Download QR',
    modal_edit_part_title: 'Edit Spare Part',
    btn_save_changes: 'Save Changes',
    btn_cancel: 'Cancel',
    modal_add_user_title: 'Add New User',
    form_user_fullname: 'Full Name',
    form_user_username: 'Username',
    form_user_password: 'Password',
    form_user_role: 'Role',
    btn_create_user: 'Create User',

    // General
    btn_search: 'Search',
    btn_refresh: 'Refresh',
    btn_close: 'Close',
    btn_save: 'Save',
    no_data: 'No data available',
    loading: 'Loading...',

    // Toasts
    welcome_back: 'Welcome back,',
    session_expired: 'Session expired. Please sign in again.',
    part_created_success: 'Part added and QR Code generated!',
    part_updated_success: 'Part updated successfully.',
    part_disabled_success: 'Part deactivated.',
    user_created_success: 'User created successfully.',
    scan_success: 'Part recognized successfully!',
    scan_failed: 'Failed to recognize QR: invalid format or not found',
    manual_scan_empty: 'Please enter QR text or click a quick test button',
    camera_error: 'Unable to start camera',
    confirm_disable: 'Are you sure you want to deactivate this part?',
    stock_added_success: 'Stock added and transaction recorded!',
    stock_issued_success: 'Stock issued and inventory updated!',
  }
};


// =========================================================
// 2. Global App State
// =========================================================
const state = {
  lang: localStorage.getItem('spareparts_lang') || 'ar',
  theme: localStorage.getItem('spareparts_theme') || 'dark',
  token: localStorage.getItem('spareparts_token') || null,
  user: JSON.parse(localStorage.getItem('spareparts_user') || 'null'),
  parts: [],
  filteredParts: [],
  orders: [],
  lowStockItems: [],
  draftOrderItems: [],
  devices: [],
  activeDeviceId: localStorage.getItem('spareparts_active_device_id') || null,
  activeDevice: null,
  deviceStats: { totalDevices: 0, activeDevices: 0, totalScans: 0 },
  categories: new Set(),
  brands: new Set(),
  activeTab: 'inventory',
  html5QrCode: null,
  scannerRunning: false,
  lowStockOnly: false,
  lastScannedPart: null,
  currentViewingOrder: null,
};

const API_BASE = '/api';

// تنظيف أي نص قبل إدراجه داخل innerHTML لمنع Stored XSS
// (مهم جداً لأن التوكن JWT مخزّن في localStorage ويمكن سرقته عبر حقن سكريبت في أي حقل نصي)
function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// تنظيف نص لاستخدامه بأمان داخل onclick="fn('...')" (يمنع كسر الـ JS string أو الـ HTML attribute)
function escJsAttr(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function t(key) {
  const currentLang = state.lang || 'ar';
  return i18n[currentLang]?.[key] || i18n['ar']?.[key] || key;
}

// =========================================================
// 3. Apply Language to DOM
// =========================================================
function setLanguage(newLang) {
  state.lang = newLang;
  localStorage.setItem('spareparts_lang', newLang);

  const isRtl = newLang === 'ar';
  document.documentElement.lang = newLang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.title = t('page_title');

  // Update language toggle button texts
  const nextLangText = newLang === 'ar' ? 'English' : 'العربية';
  document.querySelectorAll('.lang-switcher-btn .lang-label').forEach(el => {
    el.textContent = nextLangText;
  });

  const loginBtnIcon = document.getElementById('loginBtnIcon');
  if (loginBtnIcon) {
    loginBtnIcon.className = isRtl ? 'fa-solid fa-arrow-left' : 'fa-solid fa-arrow-right';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && i18n[newLang]?.[key]) {
      el.textContent = i18n[newLang][key];
    }
  });

  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.placeholder = t('search_placeholder');
  }

  // Update Theme Button labels & icons
  const themeLabels = document.querySelectorAll('#themeLabel');
  themeLabels.forEach(label => {
    label.textContent = state.theme === 'light' ? t('theme_dark') : t('theme_light');
  });

  updateStatsAndFilters();
  renderPartsTable();
  if (state.activeTab === 'orders') {
    loadOrders();
    loadLowStockSummary();
  }
  if (state.activeTab === 'devices') {
    loadDevices();
  }
  if (state.activeTab === 'print-labels') {
    renderPrintableLabels();
    populateBulkQrPartSelect();
  }
  if (state.activeTab === 'scanner') {
    populateQuickDemoScans();
    populateDeviceDropdowns();
  }
  if (state.activeTab === 'audit' && state.user?.role === 'admin') loadAuditLogs();
  if (state.activeTab === 'users' && state.user?.role === 'admin') loadUsers();
  if (state.lastScannedPart) renderScannedPartCard(state.lastScannedPart);
  if (state.currentViewingOrder) renderOfficialPoDocument(state.currentViewingOrder);
}

// API Request Helper
async function apiRequest(endpoint, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(state.token ? { Authorization: `Bearer ${state.token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    logout();
    throw new Error(t('session_expired'));
  }

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || (data.errors ? data.errors.map(e => e.msg).join(', ') : 'Request failed'));
  }

  return data;
}

// Toast Notification
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-xmark' : 'fa-triangle-exclamation';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Audio Feedback Synthesizer (Web Audio API)
// =========================================================
// 3.5. Theme Management (Dark / Light Mode)
// =========================================================
function setTheme(newTheme) {
  state.theme = newTheme;
  localStorage.setItem('spareparts_theme', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  document.body.setAttribute('data-theme', newTheme);
  document.body.className = newTheme === 'light' ? 'theme-light' : 'theme-dark';

  const themeIcons = document.querySelectorAll('#themeIcon, .login-theme-icon');
  const themeLabels = document.querySelectorAll('#themeLabel');

  themeIcons.forEach(icon => {
    if (newTheme === 'light') {
      icon.className = 'fa-solid fa-moon';
      icon.style.color = '#6366F1';
    } else {
      icon.className = 'fa-solid fa-sun';
      icon.style.color = '#F59E0B';
    }
  });

  themeLabels.forEach(label => {
    label.textContent = newTheme === 'light' ? t('theme_dark') : t('theme_light');
  });
}

function toggleTheme() {
  const nextTheme = state.theme === 'light' ? 'dark' : 'light';
  setTheme(nextTheme);
  showToast(nextTheme === 'light' ? t('theme_switched_light') : t('theme_switched_dark'), 'info');
}
window.toggleTheme = toggleTheme;
window.setTheme = setTheme;

// Audio Feedback Synthesizer (Web Audio API)
function playAudioTone(toneType = 'BEEP_CHIME') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    if (toneType === 'MUTE') return;

    if (toneType === 'BEEP_HIGH') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1650, now);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (toneType === 'BEEP_DIGITAL') {
      [1200, 1600].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.06;
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.05);
      });
    } else if (toneType === 'ERROR' || toneType === 'BEEP_ERROR') {
      [320, 220].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.1;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.12);
      });
    } else {
      // Default: BEEP_CHIME
      [880, 1320].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.07;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.2, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.14);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.14);
      });
    }
  } catch (e) {
    console.log('Audio tone error:', e);
  }
}

function playBeep() {
  const profile = state.activeDevice?.soundFeedback || 'BEEP_CHIME';
  playAudioTone(profile);
}

// =========================================================
// 4. Splash Screen (4-Second Professional Intro Animation)
// =========================================================
function initSplashScreen() {
  const splash = document.getElementById('splashScreen');
  if (!splash) return;

  let dismissed = false;
  const dismissSplash = () => {
    if (dismissed) return;
    dismissed = true;
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 800);
  };

  const splashTimer = setTimeout(dismissSplash, 4000);

  splash.addEventListener('click', () => {
    clearTimeout(splashTimer);
    dismissSplash();
  });

  window.addEventListener('keydown', function keyHandler() {
    clearTimeout(splashTimer);
    dismissSplash();
    window.removeEventListener('keydown', keyHandler);
  }, { once: true });
}

// =========================================================
// 5. Init App & Event Listeners
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  setTheme(state.theme);
  initSplashScreen();
  setupEventListeners();
  setLanguage(state.lang);

  if (state.token && state.user) {
    showApp();
  } else {
    showLogin();
  }
});

function setupEventListeners() {
  // Language Switchers
  const toggleLang = () => {
    const nextLang = state.lang === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  };
  const loginLangBtn = document.getElementById('loginLangToggleBtn');
  if (loginLangBtn) loginLangBtn.addEventListener('click', toggleLang);

  const navLangBtn = document.getElementById('navbarLangToggleBtn');
  if (navLangBtn) navLangBtn.addEventListener('click', toggleLang);

  // Login & Logout
  const loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.addEventListener('submit', handleLogin);

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  const togglePwBtn = document.getElementById('togglePasswordBtn');
  if (togglePwBtn) {
    togglePwBtn.addEventListener('click', () => {
      const pw = document.getElementById('passwordInput');
      pw.type = pw.type === 'password' ? 'text' : 'password';
    });
  }

  // Navigation Tabs
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Top Nav Quick Buttons
  const quickScanBtn = document.getElementById('quickScanNavBtn');
  if (quickScanBtn) quickScanBtn.addEventListener('click', () => switchTab('scanner'));

  const quickAddBtn = document.getElementById('quickAddNavBtn');
  if (quickAddBtn) quickAddBtn.addEventListener('click', () => switchTab('add-part'));

  // Mobile Sidebar Toggle
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });
  }

  // Global Search
  const searchInput = document.getElementById('globalSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  let searchDebounce;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      if (clearSearchBtn) {
        if (e.target.value) clearSearchBtn.classList.remove('hidden');
        else clearSearchBtn.classList.add('hidden');
      }
      searchDebounce = setTimeout(() => {
        filterParts();
      }, 250);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      filterParts();
    });
  }

  // Filter dropdowns
  const filterCat = document.getElementById('filterCategory');
  if (filterCat) filterCat.addEventListener('change', filterParts);

  const filterBr = document.getElementById('filterBrand');
  if (filterBr) filterBr.addEventListener('change', filterParts);

  const lowStockBtn = document.getElementById('toggleLowStockFilterBtn');
  if (lowStockBtn) {
    lowStockBtn.addEventListener('click', (e) => {
      state.lowStockOnly = !state.lowStockOnly;
      e.currentTarget.classList.toggle('active', state.lowStockOnly);
      filterParts();
    });
  }

  const refreshPartsBtn = document.getElementById('refreshPartsBtn');
  if (refreshPartsBtn) refreshPartsBtn.addEventListener('click', loadParts);

  // Add Part Form
  const addPartForm = document.getElementById('addPartForm');
  if (addPartForm) addPartForm.addEventListener('submit', handleAddPart);

  const btnGenPartNum = document.getElementById('btnGenPartNum');
  if (btnGenPartNum) btnGenPartNum.addEventListener('click', generateSuggestedPartNumber);

  // Edit Part Form
  const editPartForm = document.getElementById('editPartForm');
  if (editPartForm) editPartForm.addEventListener('submit', handleEditPart);

  const closeEditModalBtn = document.getElementById('closeEditModalBtn');
  if (closeEditModalBtn) {
    closeEditModalBtn.addEventListener('click', () => {
      document.getElementById('editPartModal').classList.add('hidden');
    });
  }

  // Stock Modals
  const addStockForm = document.getElementById('addStockForm');
  if (addStockForm) addStockForm.addEventListener('submit', handleAddStockSubmit);

  const issueStockForm = document.getElementById('issueStockForm');
  if (issueStockForm) issueStockForm.addEventListener('submit', handleIssueStockSubmit);

  // QR Modal
  const closeQrModalBtn = document.getElementById('closeQrModalBtn');
  if (closeQrModalBtn) {
    closeQrModalBtn.addEventListener('click', () => {
      document.getElementById('qrModal').classList.add('hidden');
    });
  }

  const printSingleLabelBtn = document.getElementById('printSingleLabelBtn');
  if (printSingleLabelBtn) {
    printSingleLabelBtn.addEventListener('click', () => {
      window.print();
    });
  }

  const downloadQrBtn = document.getElementById('downloadQrBtn');
  if (downloadQrBtn) downloadQrBtn.addEventListener('click', downloadCurrentModalQr);

  // Scanner
  const startScannerBtn = document.getElementById('startScannerBtn');
  if (startScannerBtn) startScannerBtn.addEventListener('click', startQrCamera);

  const stopScannerBtn = document.getElementById('stopScannerBtn');
  if (stopScannerBtn) stopScannerBtn.addEventListener('click', stopQrCamera);

  const btnTestScan = document.getElementById('btnTestScan');
  if (btnTestScan) btnTestScan.addEventListener('click', handleManualScan);

  const manualScanInput = document.getElementById('manualScanPayloadInput');
  if (manualScanInput) {
    manualScanInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleManualScan();
    });
  }

  // Print All Labels
  const triggerPrintAllBtn = document.getElementById('triggerPrintAllBtn');
  if (triggerPrintAllBtn) {
    triggerPrintAllBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Audit Logs
  const refreshAuditBtn = document.getElementById('refreshAuditBtn');
  if (refreshAuditBtn) refreshAuditBtn.addEventListener('click', loadAuditLogs);

  // Users Management
  const openAddUserBtn = document.getElementById('openAddUserModalBtn');
  if (openAddUserBtn) {
    openAddUserBtn.addEventListener('click', () => {
      document.getElementById('addUserModal').classList.remove('hidden');
    });
  }

  const addUserForm = document.getElementById('addUserForm');
  if (addUserForm) addUserForm.addEventListener('submit', handleAddUser);

  const editUserForm = document.getElementById('editUserForm');
  if (editUserForm) editUserForm.addEventListener('submit', handleEditUserSubmit);

  const openRolesGuideBtn = document.getElementById('openRolesMatrixGuideBtn');
  if (openRolesGuideBtn) {
    openRolesGuideBtn.addEventListener('click', () => {
      document.getElementById('rolesMatrixModal').classList.remove('hidden');
    });
  }

  const userSearchInput = document.getElementById('userSearchInput');
  if (userSearchInput) userSearchInput.addEventListener('input', renderUsersTable);

  const userRoleFilter = document.getElementById('userRoleFilter');
  if (userRoleFilter) userRoleFilter.addEventListener('change', renderUsersTable);

  const userStatusFilter = document.getElementById('userStatusFilter');
  if (userStatusFilter) userStatusFilter.addEventListener('change', renderUsersTable);

  // Preset Buttons in Edit User Modal
  const btnPresetAdmin = document.getElementById('btnPresetAdmin');
  if (btnPresetAdmin) btnPresetAdmin.addEventListener('click', () => applyRolePresetToCheckboxes('admin'));
  const btnPresetStorekeeper = document.getElementById('btnPresetStorekeeper');
  if (btnPresetStorekeeper) btnPresetStorekeeper.addEventListener('click', () => applyRolePresetToCheckboxes('storekeeper'));
  const btnPresetViewer = document.getElementById('btnPresetViewer');
  if (btnPresetViewer) btnPresetViewer.addEventListener('click', () => applyRolePresetToCheckboxes('viewer'));
  const btnSelectAllPerms = document.getElementById('btnSelectAllPerms');
  if (btnSelectAllPerms) btnSelectAllPerms.addEventListener('click', () => setAllPermissionCheckboxes(true));
  const btnClearAllPerms = document.getElementById('btnClearAllPerms');
  if (btnClearAllPerms) btnClearAllPerms.addEventListener('click', () => setAllPermissionCheckboxes(false));

  const editRoleSelect = document.getElementById('editRole');
  if (editRoleSelect) {
    editRoleSelect.addEventListener('change', (e) => {
      applyRolePresetToCheckboxes(e.target.value);
    });
  }

  // Purchase Orders & Reorder Event Listeners
  const openNewOrderBtn = document.getElementById('openNewOrderModalBtn');
  if (openNewOrderBtn) openNewOrderBtn.addEventListener('click', () => openCreateOrderModal());

  const autoOrderAllBtn = document.getElementById('autoOrderAllLowStockBtn');
  if (autoOrderAllBtn) autoOrderAllBtn.addEventListener('click', handleAutoOrderAllLowStock);

  const btnAppendItem = document.getElementById('btnAppendOrderItem');
  if (btnAppendItem) btnAppendItem.addEventListener('click', handleAppendDraftOrderItem);

  const newOrderForm = document.getElementById('newOrderForm');
  if (newOrderForm) newOrderForm.addEventListener('submit', handleCreateOrderSubmit);

  const refreshOrdersBtn = document.getElementById('refreshOrdersBtn');
  if (refreshOrdersBtn) refreshOrdersBtn.addEventListener('click', () => {
    loadOrders();
    loadLowStockSummary();
  });

  const btnPrintPoDoc = document.getElementById('btnPrintPoDocument');
  if (btnPrintPoDoc) {
    btnPrintPoDoc.addEventListener('click', () => {
      window.print();
    });
  }

  // Device Management Event Listeners
  const openAddDeviceBtn = document.getElementById('openAddDeviceModalBtn');
  if (openAddDeviceBtn) {
    openAddDeviceBtn.addEventListener('click', () => {
      document.getElementById('addDeviceForm').reset();
      document.getElementById('addDeviceModal').classList.remove('hidden');
    });
  }

  const emptyAddDeviceBtn = document.getElementById('emptyAddDeviceBtn');
  if (emptyAddDeviceBtn) {
    emptyAddDeviceBtn.addEventListener('click', () => {
      document.getElementById('addDeviceForm').reset();
      document.getElementById('addDeviceModal').classList.remove('hidden');
    });
  }

  const addDeviceForm = document.getElementById('addDeviceForm');
  if (addDeviceForm) addDeviceForm.addEventListener('submit', handleAddDevice);

  const editDeviceForm = document.getElementById('editDeviceForm');
  if (editDeviceForm) editDeviceForm.addEventListener('submit', handleEditDevice);

  const refreshDevicesBtn = document.getElementById('refreshDevicesBtn');
  if (refreshDevicesBtn) refreshDevicesBtn.addEventListener('click', loadDevices);

  const activeDeviceSelect = document.getElementById('activeScannerDeviceSelect');
  if (activeDeviceSelect) {
    activeDeviceSelect.addEventListener('change', (e) => {
      setActiveScannerDevice(e.target.value);
    });
  }

  const testStationDevSelect = document.getElementById('testStationDeviceSelect');
  if (testStationDevSelect) {
    testStationDevSelect.addEventListener('change', (e) => {
      setActiveScannerDevice(e.target.value);
    });
  }

  // Calibration test station input
  const testStationInput = document.getElementById('testStationInput');
  if (testStationInput) {
    testStationInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const val = testStationInput.value.trim();
        if (val) {
          testStationInput.value = '';
          handleHardwareScanCaptured(val);
        }
      }
    });
  }

  const btnTriggerTestScan = document.getElementById('btnTriggerTestScan');
  if (btnTriggerTestScan) {
    btnTriggerTestScan.addEventListener('click', () => {
      const part = state.parts[0];
      const payload = part ? (part.qrCodeData || part.partNumber) : 'TEST-SIMULATED-PULSE';
      handleHardwareScanCaptured(payload);
    });
  }

  // Sound Test Buttons
  const btnTestChime = document.getElementById('btnTestSoundChime');
  if (btnTestChime) btnTestChime.addEventListener('click', () => playAudioTone('BEEP_CHIME'));

  const btnTestHigh = document.getElementById('btnTestSoundHigh');
  if (btnTestHigh) btnTestHigh.addEventListener('click', () => playAudioTone('BEEP_HIGH'));

  const btnTestErr = document.getElementById('btnTestSoundError');
  if (btnTestErr) btnTestErr.addEventListener('click', () => playAudioTone('ERROR'));

  // Test Modal Buttons
  const btnModalPulse = document.getElementById('btnModalTriggerTestPulse');
  if (btnModalPulse) {
    btnModalPulse.addEventListener('click', () => {
      const devId = document.getElementById('testingModalDeviceId').value;
      const part = state.parts[0];
      const payload = part ? (part.qrCodeData || part.partNumber) : 'CALIBRATION-PULSE-TEST';
      runDeviceCalibrationTest(devId, payload);
    });
  }

  const btnModalPlayAudio = document.getElementById('btnModalPlayTestAudio');
  if (btnModalPlayAudio) {
    btnModalPlayAudio.addEventListener('click', () => {
      const activeDev = state.activeDevice;
      playAudioTone(activeDev?.soundFeedback || 'BEEP_CHIME');
    });
  }

  const modalTestScanInput = document.getElementById('modalTestScanInput');
  if (modalTestScanInput) {
    modalTestScanInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const val = modalTestScanInput.value.trim();
        if (val) {
          modalTestScanInput.value = '';
          const devId = document.getElementById('testingModalDeviceId').value;
          runDeviceCalibrationTest(devId, val);
        }
      }
    });
  }

  // Theme Switcher Buttons
  const navbarThemeBtn = document.getElementById('navbarThemeToggleBtn');
  if (navbarThemeBtn) {
    navbarThemeBtn.addEventListener('click', toggleTheme);
  }

  const loginThemeBtn = document.getElementById('loginThemeToggleBtn');
  if (loginThemeBtn) {
    loginThemeBtn.addEventListener('click', toggleTheme);
  }

  // Web Serial Scanner Button
  const btnPairSerial = document.getElementById('btnPairWebSerial');
  if (btnPairSerial) {
    btnPairSerial.addEventListener('click', initWebSerialScanner);
  }

  // Initialize Global Keystroke Hardware Scanner Listener
  initHardwareScannerListener();
}

// =========================================================
// 6. Authentication
// =========================================================
async function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('usernameInput').value.trim();
  const password = document.getElementById('passwordInput').value;
  const errorBox = document.getElementById('loginError');
  const errorText = document.getElementById('loginErrorText');

  errorBox.classList.add('hidden');

  try {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    state.token = data.token;
    state.user = data.user;
    localStorage.setItem('spareparts_token', data.token);
    localStorage.setItem('spareparts_user', JSON.stringify(data.user));

    showApp();
    showToast(`${t('welcome_back')} ${data.user.fullName || data.user.username}!`);
  } catch (err) {
    errorText.textContent = err.message;
    errorBox.classList.remove('hidden');
  }
}

function logout() {
  state.token = null;
  state.user = null;
  localStorage.removeItem('spareparts_token');
  localStorage.removeItem('spareparts_user');
  if (state.html5QrCode && state.scannerRunning) {
    stopQrCamera();
  }
  showLogin();
}

function showLogin() {
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('appContainer').classList.add('hidden');
}

function showApp() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('appContainer').classList.remove('hidden');

  document.getElementById('userFullName').textContent = state.user.fullName || state.user.username;
  document.getElementById('userRoleBadge').textContent = state.user.role;
  document.getElementById('userAvatar').textContent = (state.user.fullName || state.user.username)[0].toUpperCase();

  if (state.user.role !== 'admin') {
    const tabUsers = document.getElementById('tabUsersBtn');
    const tabAudit = document.getElementById('tabAuditBtn');
    if (tabUsers) tabUsers.classList.add('hidden');
    if (tabAudit) tabAudit.classList.add('hidden');
  } else {
    const tabUsers = document.getElementById('tabUsersBtn');
    const tabAudit = document.getElementById('tabAuditBtn');
    if (tabUsers) tabUsers.classList.remove('hidden');
    if (tabAudit) tabAudit.classList.remove('hidden');
  }

  loadParts();
  loadLowStockSummary();
  loadDevices();
}

// =========================================================
// 7. Tab Navigation
// =========================================================
function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) targetPane.classList.add('active');

  const targetNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (targetNav) targetNav.classList.add('active');

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.remove('open');

  if (tabId === 'orders') {
    loadOrders();
    loadLowStockSummary();
  } else if (tabId === 'devices') {
    loadDevices();
  } else if (tabId === 'audit' && state.user?.role === 'admin') {
    loadAuditLogs();
  } else if (tabId === 'users' && state.user?.role === 'admin') {
    loadUsers();
  } else if (tabId === 'print-labels') {
    renderPrintableLabels();
    populateBulkQrPartSelect();
  } else if (tabId === 'assets') {
    loadAssets();
  } else if (tabId === 'scanner') {
    populateQuickDemoScans();
    populateDeviceDropdowns();
  }
}
window.switchTab = switchTab;

// =========================================================
// 8. Parts Inventory & Table
// =========================================================
async function loadParts() {
  try {
    const parts = await apiRequest('/parts');
    state.parts = parts;
    updateStatsAndFilters();
    filterParts();
    loadLowStockSummary();
    populateBulkQrPartSelect(); // تحديث قائمة اختيار الصنف في خانة طباعة QR
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function updateStatsAndFilters() {
  const totalParts = state.parts.length;
  const totalStock = state.parts.reduce((sum, p) => sum + (p.currentQuantity || 0), 0);
  const lowStockCount = state.parts.filter(p => p.currentQuantity <= p.minimumStockLevel).length;

  state.categories.clear();
  state.brands.clear();

  state.parts.forEach(p => {
    if (p.category) state.categories.add(p.category);
    if (p.brand) state.brands.add(p.brand);
  });

  const statParts = document.getElementById('statTotalParts');
  if (statParts) statParts.textContent = totalParts;

  const statStock = document.getElementById('statTotalStock');
  if (statStock) statStock.textContent = totalStock;

  const statLow = document.getElementById('statLowStock');
  if (statLow) statLow.textContent = lowStockCount;

  const statCats = document.getElementById('statCategoriesCount');
  if (statCats) statCats.textContent = `${state.categories.size} ${t('categories_suffix')}`;

  const navCount = document.getElementById('navPartsCount');
  if (navCount) navCount.textContent = totalParts;

  // Sidebar Low Stock Badge
  const navLowBadge = document.getElementById('navLowStockCount');
  if (navLowBadge) {
    if (lowStockCount > 0) {
      navLowBadge.style.display = 'inline-block';
      navLowBadge.textContent = lowStockCount;
    } else {
      navLowBadge.style.display = 'none';
    }
  }

  // Filter Dropdowns
  const catSelect = document.getElementById('filterCategory');
  const brandSelect = document.getElementById('filterBrand');

  if (catSelect) {
    const currCat = catSelect.value;
    catSelect.innerHTML = `<option value="">${t('filter_all_categories')}</option>`;
    state.categories.forEach(c => {
      catSelect.innerHTML += `<option value="${esc(c)}" ${c === currCat ? 'selected' : ''}>${esc(c)}</option>`;
    });
  }

  if (brandSelect) {
    const currBrand = brandSelect.value;
    brandSelect.innerHTML = `<option value="">${t('filter_all_brands')}</option>`;
    state.brands.forEach(b => {
      brandSelect.innerHTML += `<option value="${esc(b)}" ${b === currBrand ? 'selected' : ''}>${esc(b)}</option>`;
    });
  }
}

function filterParts() {
  const query = (document.getElementById('globalSearchInput')?.value || '').toLowerCase().trim();
  const selectedCat = document.getElementById('filterCategory')?.value || '';
  const selectedBrand = document.getElementById('filterBrand')?.value || '';

  state.filteredParts = state.parts.filter(part => {
    const matchQuery = !query ||
      part.partNumber.toLowerCase().includes(query) ||
      part.partName.toLowerCase().includes(query) ||
      (part.category && part.category.toLowerCase().includes(query)) ||
      (part.brand && part.brand.toLowerCase().includes(query)) ||
      (part.model && part.model.toLowerCase().includes(query)) ||
      (part.location && part.location.toLowerCase().includes(query));

    const matchCat = !selectedCat || part.category === selectedCat;
    const matchBrand = !selectedBrand || part.brand === selectedBrand;
    const matchLowStock = !state.lowStockOnly || part.currentQuantity <= part.minimumStockLevel;

    return matchQuery && matchCat && matchBrand && matchLowStock;
  });

  renderPartsTable();
}

function renderPartsTable() {
  const tbody = document.getElementById('partsTableBody');
  const emptyState = document.getElementById('partsEmptyState');
  if (!tbody) return;

  if (state.filteredParts.length === 0) {
    tbody.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  tbody.innerHTML = state.filteredParts.map(part => {
    const isLowStock = part.currentQuantity <= part.minimumStockLevel;
    const stockClass = isLowStock ? 'stock-warning' : 'stock-normal';
    const stockIcon = isLowStock ? '<i class="fa-solid fa-triangle-exclamation"></i>' : '<i class="fa-solid fa-check"></i>';

    return `
      <tr>
        <td class="qr-thumb-cell">
          <div class="qr-mini-badge" onclick="showQrModal('${part.id}')" title="${t('action_print_qr')}">
            <i class="fa-solid fa-qrcode" style="color: #0284c7; font-size: 22px;"></i>
          </div>
        </td>
        <td><span class="part-number-tag">${esc(part.partNumber)}</span></td>
        <td>
          <strong>${esc(part.partName)}</strong>
          ${part.description ? `<div style="font-size:0.75rem; color:var(--text-muted);">${esc(part.description.substring(0, 45))}...</div>` : ''}
        </td>
        <td>
          <div>${esc(part.category) || '-'}</div>
          <small style="color:var(--text-muted);">${esc(part.brand) || ''} ${esc(part.model) || ''}</small>
        </td>
        <td><i class="fa-solid fa-location-dot" style="color:var(--primary); font-size:0.8rem;"></i> ${esc(part.location) || t('not_specified')}</td>
        <td>
          <span class="stock-badge ${stockClass}">
            ${stockIcon} ${part.currentQuantity} ${part.unit || 'pcs'}
          </span>
        </td>
        <td>${part.minimumStockLevel} ${part.unit || 'pcs'}</td>
        <td>
          <div class="table-actions">
            <button class="btn btn-secondary btn-sm" onclick="openAddStockModal('${part.id}')" title="${t('modal_add_stock_title')}">
              <i class="fa-solid fa-circle-plus" style="color: var(--success);"></i>
            </button>
            <button class="btn btn-secondary btn-sm" onclick="openIssueStockModal('${part.id}')" title="${t('modal_issue_stock_title')}">
              <i class="fa-solid fa-circle-minus" style="color: var(--danger);"></i>
            </button>
            <button class="btn btn-secondary btn-sm" onclick="openPartHistoryModal('${part.id}')" title="${t('modal_history_title')}">
              <i class="fa-solid fa-clock-rotate-left"></i>
            </button>
            <button class="btn btn-secondary btn-sm" onclick="showQrModal('${part.id}')" title="${t('action_print_qr')}">
              <i class="fa-solid fa-print"></i>
            </button>
            ${state.user?.role === 'admin' ? `
              <button class="btn btn-secondary btn-sm" onclick="openEditPartModal('${part.id}')" title="${t('action_edit')}">
                <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn btn-danger btn-sm" onclick="handleDeletePart('${part.id}', '${escJsAttr(part.partName)}')" title="${t('action_delete')}">
                <i class="fa-solid fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function generateSuggestedPartNumber() {
  const randNum = Math.floor(100000 + Math.random() * 900000);
  document.getElementById('partNumberInput').value = `SP-${randNum}`;
}

async function handleAddPart(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('savePartBtn');
  if (submitBtn) submitBtn.disabled = true;

  const payload = {
    partNumber: document.getElementById('partNumberInput').value.trim() || undefined,
    partName: document.getElementById('partNameInput').value.trim(),
    category: document.getElementById('categoryInput').value.trim() || undefined,
    brand: document.getElementById('brandInput').value.trim() || undefined,
    model: document.getElementById('modelInput').value.trim() || undefined,
    location: document.getElementById('locationInput').value.trim() || undefined,
    currentQuantity: Number(document.getElementById('currentQuantityInput').value) || 0,
    minimumStockLevel: Number(document.getElementById('minimumStockInput').value) || 0,
    unit: document.getElementById('unitInput').value,
    supplier: document.getElementById('supplierInput').value.trim() || undefined,
    description: document.getElementById('descriptionInput').value.trim() || undefined,
    notes: document.getElementById('notesInput').value.trim() || undefined,
  };

  try {
    const createdPart = await apiRequest('/parts', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    showToast(`${t('part_created_success')} [${createdPart.partNumber}]`);
    document.getElementById('addPartForm').reset();
    await loadParts();
    switchTab('inventory');
    showQrModal(createdPart.id);
  } catch (err) {
    showToast(err.message, 'error');
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

// =========================================================
// 9. QR Scanner (Camera, Serial & Instant Lookup)
// =========================================================
async function populateCameraSources() {
  const select = document.getElementById('cameraSourceSelect');
  if (!select || !window.Html5Qrcode) return;

  try {
    const devices = await Html5Qrcode.getCameras();
    if (devices && devices.length > 0) {
      const currentVal = select.value;
      select.innerHTML = `<option value="">-- ${state.lang === 'ar' ? 'الكاميرا التلقائية (Auto)' : 'Default Auto Camera'} --</option>` +
        devices.map((d, i) => `<option value="${d.id}" ${d.id === currentVal ? 'selected' : ''}>${d.label || `Camera ${i + 1}`}</option>`).join('');
    }
  } catch (err) {
    console.log('Unable to query camera list:', err);
  }
}

async function startQrCamera() {
  if (!window.Html5Qrcode) {
    showToast(t('camera_error'), 'error');
    return;
  }

  const selectedCamId = document.getElementById('cameraSourceSelect')?.value;
  const cameraConfig = selectedCamId ? selectedCamId : { facingMode: 'environment' };

  if (state.html5QrCode && state.scannerRunning) {
    await stopQrCamera();
  }

  state.html5QrCode = new Html5Qrcode('qrReader');
  state.html5QrCode.start(
    cameraConfig,
    { fps: 15, qrbox: { width: 260, height: 260 } },
    (decodedText) => {
      playBeep();
      processScannedData(decodedText);
    },
    (errorMessage) => {}
  ).then(() => {
    state.scannerRunning = true;
    document.getElementById('startScannerBtn').classList.add('hidden');
    document.getElementById('stopScannerBtn').classList.remove('hidden');
  }).catch(err => {
    showToast(`${t('camera_error')}: ${err}`, 'error');
  });
}

function stopQrCamera() {
  if (state.html5QrCode && state.scannerRunning) {
    return state.html5QrCode.stop().then(() => {
      state.scannerRunning = false;
      document.getElementById('startScannerBtn').classList.remove('hidden');
      document.getElementById('stopScannerBtn').classList.add('hidden');
    });
  }
  return Promise.resolve();
}

// Web Serial Direct USB/COM Hardware Pairing
async function initWebSerialScanner() {
  if (!('serial' in navigator)) {
    showToast(state.lang === 'ar' ? 'المتصفح الحالي لا يدعم Web Serial API مباشرة (يمكنك استخدام وضع الـ USB HID Keyboard القياسي)' : 'Web Serial not supported in this browser (Use standard USB HID Keyboard mode instead)', 'warning');
    return;
  }

  try {
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    showToast(state.lang === 'ar' ? '🔌 تم الاتصال بمنفذ الـ Serial بنجاح! جاهز لقراءة البيانات.' : '🔌 Serial port connected! Ready to receive scan data.', 'success');
    appendTerminalLog('calibrationTerminalBody', '> [SERIAL] Web Serial port opened at 9600 baud.', 'success');

    const textDecoder = new TextDecoderStream();
    port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

    let serialBuffer = '';
    (async () => {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          serialBuffer += value;
          if (serialBuffer.includes('\n') || serialBuffer.includes('\r')) {
            const cleanLine = serialBuffer.replace(/[\r\n]+/g, '').trim();
            serialBuffer = '';
            if (cleanLine) {
              handleHardwareScanCaptured(cleanLine);
            }
          }
        }
      }
    })().catch(err => {
      console.error('Serial stream reading error:', err);
    });
  } catch (err) {
    if (err.name !== 'NotFoundError') {
      showToast(`${err.message}`, 'error');
    }
  }
}

function handleManualScan() {
  const raw = document.getElementById('manualScanPayloadInput').value.trim();
  if (!raw) {
    showToast(t('manual_scan_empty'), 'warning');
    return;
  }
  playBeep();
  processScannedData(raw);
}

function populateQuickDemoScans() {
  const container = document.getElementById('quickDemoScanButtons');
  if (!container) return;

  if (state.parts.length === 0) {
    container.innerHTML = `<span style="color:var(--text-muted); font-size:0.8rem;">${t('no_parts_to_test')}</span>`;
    return;
  }

  container.innerHTML = `<span style="font-size:0.8rem; color:var(--text-secondary); width:100%; display:block; margin-bottom:4px;">${t('quick_test_hint')}</span>` +
    state.parts.slice(0, 4).map(p => `
      <button class="quick-demo-btn" onclick="testScanPart('${p.id}')">
        <i class="fa-solid fa-barcode"></i> ${esc(p.partNumber)} (${esc(p.partName)})
      </button>
    `).join('');
}

function testScanPart(partId) {
  const part = state.parts.find(p => p.id === partId);
  if (!part) return;
  const payload = part.qrCodeData || JSON.stringify({ t: 'PART', id: part.id, pn: part.partNumber });
  document.getElementById('manualScanPayloadInput').value = payload;
  playBeep();
  processScannedData(payload);
}
window.testScanPart = testScanPart;

async function processScannedData(rawText) {
  try {
    const part = await apiRequest('/parts/scan', {
      method: 'POST',
      body: JSON.stringify({ raw: rawText }),
    });

    state.lastScannedPart = part;
    renderScannedPartCard(part);
    showToast(`${t('scan_success')} [${part.partNumber}]`);
  } catch (err) {
    showToast(`${t('scan_failed')}: ${err.message}`, 'error');
  }
}

function renderScannedPartCard(part) {
  const placeholder = document.getElementById('scanResultPlaceholder');
  const details = document.getElementById('scanResultDetails');
  if (!placeholder || !details) return;

  placeholder.classList.add('hidden');
  details.classList.remove('hidden');

  const isLow = part.currentQuantity <= part.minimumStockLevel;
  const badgeClass = isLow ? 'stock-warning' : 'stock-normal';
  const statusText = isLow ? t('scan_low_stock_warning') : t('scan_in_stock');

  details.innerHTML = `
    <div class="scan-result-header">
      <div>
        <span class="part-number-tag" style="font-size: 1.15rem;">${esc(part.partNumber)}</span>
        <h3 style="font-size: 1.35rem; margin-top: 6px; font-weight: 700;">${esc(part.partName)}</h3>
      </div>
      <span class="stock-badge ${badgeClass}" id="scanStockLiveBadge" style="font-size: 1.05rem; padding: 8px 16px;">
        ${statusText}: <strong style="margin: 0 4px;">${part.currentQuantity}</strong> ${part.unit || 'pcs'}
      </span>
    </div>

    <div class="scan-info-grid">
      <div class="scan-info-item">
        <span class="info-label">${t('scan_matched_location')}</span>
        <span class="info-val"><i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${part.location || t('not_specified')}</span>
      </div>
      <div class="scan-info-item">
        <span class="info-label">${t('scan_matched_cat_brand')}</span>
        <span class="info-val">${esc(part.category) || '-'} / ${esc(part.brand) || '-'}</span>
      </div>
      <div class="scan-info-item">
        <span class="info-label">${t('scan_matched_model')}</span>
        <span class="info-val">${esc(part.model) || '-'}</span>
      </div>
      <div class="scan-info-item">
        <span class="info-label">${t('scan_matched_min_stock')}</span>
        <span class="info-val">${part.minimumStockLevel} ${esc(part.unit) || 'pcs'}</span>
      </div>
      <div class="scan-info-item" style="grid-column: 1 / -1;">
        <span class="info-label">${t('scan_matched_supplier_desc')}</span>
        <span class="info-val">${esc(part.supplier) || '-'} ${part.description ? `(${esc(part.description)})` : ''}</span>
      </div>
    </div>

    <div class="scanned-action-bar" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border-color);">
      <button class="btn btn-success" onclick="openAddStockModal('${part.id}')">
        <i class="fa-solid fa-circle-plus"></i> <span>${t('action_add_stock_btn')}</span>
      </button>
      <button class="btn btn-danger" onclick="openIssueStockModal('${part.id}')">
        <i class="fa-solid fa-circle-minus"></i> <span>${t('action_issue_stock_btn')}</span>
      </button>
      <button class="btn btn-secondary" onclick="openPartHistoryModal('${part.id}')">
        <i class="fa-solid fa-clock-rotate-left"></i> <span>${t('action_view_history_btn')}</span>
      </button>
      <button class="btn btn-secondary" onclick="showQrModal('${part.id}')">
        <i class="fa-solid fa-print"></i> <span>${t('action_print_label_btn')}</span>
      </button>
      ${state.user?.role === 'admin' ? `
        <button class="btn btn-secondary" onclick="openEditPartModal('${part.id}')">
          <i class="fa-solid fa-pen"></i> <span>${t('action_edit_part_btn')}</span>
        </button>
      ` : ''}
    </div>
  `;
}

// =========================================================
// 10. Real-time Stock Transactions (+ Add / - Issue)
// =========================================================
function openAddStockModal(partId) {
  const part = state.parts.find(p => p.id === partId) || state.lastScannedPart;
  if (!part) return;

  document.getElementById('addStockPartId').value = part.id;
  document.getElementById('addStockPartNum').textContent = part.partNumber;
  document.getElementById('addStockPartName').textContent = part.partName;
  document.getElementById('addStockCurrentBal').textContent = `${t('stock_balance_label')}: ${part.currentQuantity} ${part.unit || 'pcs'}`;
  document.getElementById('addStockQty').value = '5';
  document.getElementById('addStockSupplier').value = part.supplier || '';
  document.getElementById('addStockPo').value = '';
  document.getElementById('addStockInvoice').value = '';
  document.getElementById('addStockNotes').value = '';

  document.getElementById('addStockModal').classList.remove('hidden');
}
window.openAddStockModal = openAddStockModal;

async function handleAddStockSubmit(e) {
  e.preventDefault();
  const partId = document.getElementById('addStockPartId').value;
  const qty = Number(document.getElementById('addStockQty').value);
  const supplier = document.getElementById('addStockSupplier').value.trim();
  const poNumber = document.getElementById('addStockPo').value.trim();
  const invoiceNumber = document.getElementById('addStockInvoice').value.trim();
  const notes = document.getElementById('addStockNotes').value.trim();

  try {
    const result = await apiRequest(`/parts/${partId}/add-stock`, {
      method: 'POST',
      body: JSON.stringify({ quantity: qty, supplier, poNumber, invoiceNumber, notes }),
    });

    showToast(t('stock_added_success'));
    document.getElementById('addStockModal').classList.add('hidden');

    await loadParts();

    if (state.lastScannedPart && state.lastScannedPart.id === partId) {
      state.lastScannedPart = result.part;
      renderScannedPartCard(result.part);
    }
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function openIssueStockModal(partId) {
  const part = state.parts.find(p => p.id === partId) || state.lastScannedPart;
  if (!part) return;

  document.getElementById('issueStockPartId').value = part.id;
  document.getElementById('issueStockPartNum').textContent = part.partNumber;
  document.getElementById('issueStockPartName').textContent = part.partName;
  document.getElementById('issueStockCurrentBal').textContent = `${t('stock_balance_label')}: ${part.currentQuantity} ${part.unit || 'pcs'}`;
  document.getElementById('issueStockQty').value = '1';
  document.getElementById('issueStockQty').max = part.currentQuantity;
  document.getElementById('issueStockEmployee').value = '';
  document.getElementById('issueStockVehicle').value = '';
  document.getElementById('issueStockDept').value = '';
  document.getElementById('issueStockWorkOrder').value = '';
  document.getElementById('issueStockReason').value = '';
  document.getElementById('issueStockNotes').value = '';

  document.getElementById('issueStockModal').classList.remove('hidden');
}
window.openIssueStockModal = openIssueStockModal;

async function handleIssueStockSubmit(e) {
  e.preventDefault();
  const partId = document.getElementById('issueStockPartId').value;
  const qty = Number(document.getElementById('issueStockQty').value);
  const employeeDriver = document.getElementById('issueStockEmployee').value.trim();
  const vehicleNumber = document.getElementById('issueStockVehicle').value.trim();
  const department = document.getElementById('issueStockDept').value.trim();
  const workOrder = document.getElementById('issueStockWorkOrder').value.trim();
  const reasonForIssue = document.getElementById('issueStockReason').value.trim();
  const notes = document.getElementById('issueStockNotes').value.trim();

  try {
    const result = await apiRequest(`/parts/${partId}/issue-stock`, {
      method: 'POST',
      body: JSON.stringify({
        quantity: qty,
        employeeDriver,
        vehicleNumber,
        department,
        workOrder,
        reasonForIssue,
        notes,
      }),
    });

    showToast(t('stock_issued_success'));
    document.getElementById('issueStockModal').classList.add('hidden');

    await loadParts();

    if (state.lastScannedPart && state.lastScannedPart.id === partId) {
      state.lastScannedPart = result.part;
      renderScannedPartCard(result.part);
    }
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// =========================================================
// 11. Transaction History Modal (View History)
// =========================================================
async function openPartHistoryModal(partId) {
  const part = state.parts.find(p => p.id === partId) || state.lastScannedPart;
  if (!part) return;

  document.getElementById('historyPartSubtitle').textContent = `${part.partNumber} - ${part.partName}`; // textContent آمن أصلاً
  const tbody = document.getElementById('partHistoryTableBody');
  tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">Loading transactions...</td></tr>`;
  document.getElementById('partHistoryModal').classList.remove('hidden');

  try {
    const transactions = await apiRequest(`/parts/${partId}/transactions`);
    if (!transactions || transactions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted); padding: 20px;">${t('no_history_records')}</td></tr>`;
      return;
    }

    const locale = state.lang === 'ar' ? 'ar-SA' : 'en-US';
    tbody.innerHTML = transactions.map(tx => {
      const date = new Date(tx.createdAt).toLocaleString(locale);
      const isAdd = tx.type === 'ADD';
      const badgeClass = isAdd ? 'badge-success' : 'badge-danger';
      const typeLabel = isAdd ? '+ ADD (توريد)' : '- ISSUE (صرف)';
      const qtySign = isAdd ? `+${tx.quantity}` : `-${tx.quantity}`;
      const ref = tx.employeeDriver || tx.vehicleNumber || tx.poNumber || tx.workOrder || '-';

      return `
        <tr>
          <td><small style="color:var(--text-muted); font-family:var(--font-mono);">${date}</small></td>
          <td><span class="badge ${badgeClass}">${typeLabel}</span></td>
          <td><strong>${qtySign} ${part.unit || 'pcs'}</strong></td>
          <td><span class="stock-badge stock-normal" style="font-size:0.8rem;">${tx.balanceAfter} ${part.unit || 'pcs'}</span></td>
          <td><strong>${esc(tx.user?.fullName || tx.user?.username || 'System')}</strong></td>
          <td><span style="color:var(--primary);">${esc(ref)}</span></td>
          <td><small style="color:var(--text-secondary);">${esc(tx.notes || tx.reasonForIssue) || '-'}</small></td>
        </tr>
      `;
    }).join('');
  } catch (err) {
    showToast(err.message, 'error');
  }
}
window.openPartHistoryModal = openPartHistoryModal;

// =========================================================
// 12. Purchase Orders & Reorder Studio (صفحة طلبات الشراء)
// =========================================================
async function loadLowStockSummary() {
  try {
    const data = await apiRequest('/orders/low-stock-summary');
    state.lowStockItems = data.items || [];

    const navLowBadge = document.getElementById('navLowStockCount');
    if (navLowBadge) {
      if (state.lowStockItems.length > 0) {
        navLowBadge.style.display = 'inline-block';
        navLowBadge.textContent = state.lowStockItems.length;
      } else {
        navLowBadge.style.display = 'none';
      }
    }

    renderLowStockOrdersTable();
  } catch (err) {
    console.error('Error loading low stock summary:', err);
  }
}

function renderLowStockOrdersTable() {
  const tbody = document.getElementById('lowStockOrdersTableBody');
  if (!tbody) return;

  if (state.lowStockItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 24px; color: var(--success); font-weight: 600;">
          <i class="fa-solid fa-circle-check" style="font-size: 1.4rem; vertical-align: middle; margin-left: 8px;"></i>
          ${t('no_low_stock_parts')}
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = state.lowStockItems.map(item => {
    return `
      <tr>
        <td><span class="part-number-tag">${esc(item.partNumber)}</span></td>
        <td>
          <strong>${esc(item.partName)}</strong>
          ${item.supplier ? `<div style="font-size:0.75rem; color:var(--text-muted);">${esc(item.supplier)}</div>` : ''}
        </td>
        <td>${esc(item.category) || '-'} <small style="color:var(--text-muted);">${esc(item.brand) || ''} ${esc(item.model) || ''}</small></td>
        <td><i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${esc(item.location) || t('not_specified')}</td>
        <td><span class="stock-badge stock-warning">${item.currentQuantity} ${esc(item.unit)}</span></td>
        <td>${item.minimumStockLevel} ${esc(item.unit)}</td>
        <td><strong style="color: var(--primary); font-size: 1.05rem;">+${item.suggestedQuantity} ${esc(item.unit)}</strong></td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="quickOrderSingleItem('${item.id}', '${escJsAttr(item.partNumber)}', '${escJsAttr(item.partName)}', ${item.suggestedQuantity}, '${escJsAttr(item.supplier || '')}')">
            <i class="fa-solid fa-cart-plus"></i> <span>${t('btn_add_to_po')}</span>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

async function loadOrders() {
  try {
    const orders = await apiRequest('/orders');
    state.orders = orders;
    renderOrdersTable();
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function renderOrdersTable() {
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;

  if (state.orders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 24px; color: var(--text-muted);">
          ${t('no_orders_recorded')}
        </td>
      </tr>
    `;
    return;
  }

  const locale = state.lang === 'ar' ? 'ar-SA' : 'en-US';

  tbody.innerHTML = state.orders.map(order => {
    const itemsCount = Array.isArray(order.items) ? order.items.length : 0;
    const dateStr = order.expectedDate ? order.expectedDate : '-';
    
    // Status Badges
    let statusBadge = 'badge-accent';
    let statusLabel = order.status;
    if (order.status === 'PENDING') {
      statusBadge = 'badge-accent';
      statusLabel = t('status_pending');
    } else if (order.status === 'ORDERED') {
      statusBadge = 'badge-primary';
      statusLabel = t('status_ordered');
    } else if (order.status === 'RECEIVED') {
      statusBadge = 'badge-success';
      statusLabel = t('status_received');
    } else if (order.status === 'CANCELLED') {
      statusBadge = 'badge-danger';
      statusLabel = t('status_cancelled');
    }

    // Priority Badges
    const priorityBadge = order.priority === 'URGENT' ? 'stock-warning' : order.priority === 'HIGH' ? 'badge-primary' : 'badge-secondary';
    const priorityLabel = order.priority === 'URGENT' ? t('priority_urgent') : order.priority === 'HIGH' ? t('priority_high') : t('priority_normal');

    return `
      <tr>
        <td><strong style="color: var(--primary); font-family: var(--font-mono); font-size: 1rem;">${esc(order.poNumber)}</strong></td>
        <td>
          <strong>${esc(order.supplierName)}</strong>
          ${order.supplierContact ? `<div style="font-size:0.75rem; color:var(--text-muted);">${esc(order.supplierContact)}</div>` : ''}
        </td>
        <td><span class="badge badge-primary">${itemsCount} أصناف</span></td>
        <td><strong>${(order.totalAmount || 0).toFixed(2)}</strong></td>
        <td><span class="badge ${priorityBadge}">${priorityLabel}</span></td>
        <td><span class="badge ${statusBadge}">${statusLabel}</span></td>
        <td><small style="font-family: var(--font-mono);">${esc(dateStr)}</small></td>
        <td>${esc(order.createdByName || order.user?.fullName) || 'Admin'}</td>
        <td>
          <div class="table-actions">
            <button class="btn btn-primary btn-sm" onclick="showOfficialPoModal('${order.id}')" title="${t('btn_print_order_doc')}">
              <i class="fa-solid fa-print"></i> <span style="font-size: 0.75rem;">${t('action_print_label_btn')}</span>
            </button>
            ${order.status !== 'RECEIVED' ? `
              <button class="btn btn-success btn-sm" onclick="receivePurchaseOrder('${order.id}')" title="${t('btn_receive_stock_to_inventory')}">
                <i class="fa-solid fa-boxes-packing"></i>
              </button>
            ` : ''}
            ${state.user?.role === 'admin' ? `
              <button class="btn btn-danger btn-sm" onclick="handleDeleteOrder('${order.id}', '${escJsAttr(order.poNumber)}')" title="حذف">
                <i class="fa-solid fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Create Order Modal Lifecycle
function openCreateOrderModal(initialItems = [], defaultSupplier = '') {
  const randSeq = Math.floor(1000 + Math.random() * 9000);
  const year = new Date().getFullYear();
  document.getElementById('orderPoNumber').value = `PO-${year}-${randSeq}`;
  document.getElementById('orderSupplierName').value = defaultSupplier || '';
  document.getElementById('orderSupplierContact').value = '';
  document.getElementById('orderPriority').value = 'NORMAL';
  document.getElementById('orderExpectedDate').value = '';
  document.getElementById('orderNotes').value = '';

  // Populate Part Select Dropdown
  const select = document.getElementById('orderItemPartSelect');
  select.innerHTML = `<option value="">-- ${t('select_part_to_add')} --</option>` +
    state.parts.map(p => `<option value="${p.id}">${esc(p.partNumber)} - ${esc(p.partName)} (${esc(p.brand) || ''} ${esc(p.model) || ''}) [Stock: ${p.currentQuantity} ${esc(p.unit)}]</option>`).join('');

  state.draftOrderItems = [...initialItems];
  renderDraftOrderItemsTable();

  document.getElementById('newOrderModal').classList.remove('hidden');
}
window.openCreateOrderModal = openCreateOrderModal;

function quickOrderSingleItem(partId, partNumber, partName, suggestedQty, supplier) {
  const part = state.parts.find(p => p.id === partId);
  const item = {
    partId,
    partNumber,
    partName,
    brand: part?.brand || '',
    model: part?.model || '',
    location: part?.location || '',
    unit: part?.unit || 'pcs',
    currentQuantity: part?.currentQuantity || 0,
    requestedQuantity: suggestedQty || 10,
    unitPrice: 0,
    specs: part?.description || 'Standard OEM Specs',
  };

  openCreateOrderModal([item], supplier || part?.supplier || '');
}
window.quickOrderSingleItem = quickOrderSingleItem;

function handleAutoOrderAllLowStock() {
  if (state.lowStockItems.length === 0) {
    showToast(t('no_low_stock_parts'), 'info');
    return;
  }

  const items = state.lowStockItems.map(p => ({
    partId: p.id,
    partNumber: p.partNumber,
    partName: p.partName,
    brand: p.brand || '',
    model: p.model || '',
    location: p.location || '',
    unit: p.unit || 'pcs',
    currentQuantity: p.currentQuantity,
    requestedQuantity: p.suggestedQuantity,
    unitPrice: 0,
    specs: `Filter/Part Replacement - OEM`,
  }));

  const mostFrequentSupplier = state.lowStockItems.find(p => p.supplier)?.supplier || '';
  openCreateOrderModal(items, mostFrequentSupplier);
}

function handleAppendDraftOrderItem() {
  const select = document.getElementById('orderItemPartSelect');
  const partId = select.value;
  if (!partId) return;

  if (state.draftOrderItems.some(item => item.partId === partId)) {
    showToast(t('order_item_already_added'), 'warning');
    return;
  }

  const part = state.parts.find(p => p.id === partId);
  if (!part) return;

  const requestedQty = Number(document.getElementById('orderItemQty').value) || 1;
  const unitPrice = Number(document.getElementById('orderItemPrice').value) || 0;
  const specs = document.getElementById('orderItemSpecs').value.trim() || part.description || '-';

  state.draftOrderItems.push({
    partId: part.id,
    partNumber: part.partNumber,
    partName: part.partName,
    brand: part.brand || '',
    model: part.model || '',
    location: part.location || '',
    unit: part.unit || 'pcs',
    currentQuantity: part.currentQuantity,
    requestedQuantity: requestedQty,
    unitPrice,
    specs,
  });

  select.value = '';
  document.getElementById('orderItemQty').value = '10';
  document.getElementById('orderItemPrice').value = '';
  document.getElementById('orderItemSpecs').value = '';

  renderDraftOrderItemsTable();
}

function removeDraftOrderItem(index) {
  state.draftOrderItems.splice(index, 1);
  renderDraftOrderItemsTable();
}
window.removeDraftOrderItem = removeDraftOrderItem;

function renderDraftOrderItemsTable() {
  const tbody = document.getElementById('newOrderItemsTableBody');
  const countBadge = document.getElementById('orderItemsSummaryCount');
  const totalDisplay = document.getElementById('newOrderTotalDisplay');
  if (!tbody) return;

  countBadge.textContent = `${state.draftOrderItems.length} قطع`;

  if (state.draftOrderItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted); padding: 15px;">لا توجد قطع مضافة للأوردر حتى الآن</td></tr>`;
    totalDisplay.textContent = '0.00';
    return;
  }

  let totalSum = 0;

  tbody.innerHTML = state.draftOrderItems.map((item, idx) => {
    const itemTotal = (item.requestedQuantity * item.unitPrice) || 0;
    totalSum += itemTotal;

    return `
      <tr>
        <td><span class="part-number-tag">${esc(item.partNumber)}</span></td>
        <td>
          <strong>${esc(item.partName)}</strong>
          <div style="font-size:0.75rem; color:var(--primary);">${esc(item.specs) || ''}</div>
          <small style="color:var(--text-muted);">${esc(item.brand) || ''} ${esc(item.model) || ''}</small>
        </td>
        <td><span class="stock-badge stock-normal" style="font-size:0.75rem;">${item.currentQuantity} ${item.unit}</span></td>
        <td><strong>${item.requestedQuantity} ${item.unit}</strong></td>
        <td>${item.unitPrice ? item.unitPrice.toFixed(2) : '-'}</td>
        <td><strong>${itemTotal ? itemTotal.toFixed(2) : '-'}</strong></td>
        <td>
          <button type="button" class="btn btn-danger btn-sm" onclick="removeDraftOrderItem(${idx})" title="حذف"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `;
  }).join('');

  totalDisplay.textContent = totalSum.toFixed(2);
}

async function handleCreateOrderSubmit(e) {
  e.preventDefault();
  if (state.draftOrderItems.length === 0) {
    showToast('يرجى إضافة قطعة واحدة على الأقل في أمر الشراء', 'warning');
    return;
  }

  const payload = {
    poNumber: document.getElementById('orderPoNumber').value.trim(),
    supplierName: document.getElementById('orderSupplierName').value.trim(),
    supplierContact: document.getElementById('orderSupplierContact').value.trim() || undefined,
    priority: document.getElementById('orderPriority').value,
    expectedDate: document.getElementById('orderExpectedDate').value || undefined,
    department: document.getElementById('orderDepartment').value.trim(),
    notes: document.getElementById('orderNotes').value.trim() || undefined,
    items: state.draftOrderItems,
  };

  try {
    const createdOrder = await apiRequest('/orders', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    showToast(`${t('order_created_success')} [${createdOrder.poNumber}]`);
    document.getElementById('newOrderModal').classList.add('hidden');
    await loadOrders();
    showOfficialPoModal(createdOrder.id);
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// Official Printable Purchase Order Preview & Print
async function showOfficialPoModal(orderId) {
  try {
    const order = await apiRequest(`/orders/${orderId}`);
    state.currentViewingOrder = order;
    renderOfficialPoDocument(order);
    document.getElementById('viewPoModal').classList.remove('hidden');
  } catch (err) {
    showToast(err.message, 'error');
  }
}
window.showOfficialPoModal = showOfficialPoModal;

function renderOfficialPoDocument(order) {
  const container = document.getElementById('printablePoDocument');
  const actionContainer = document.getElementById('poReceiveActionContainer');
  if (!container) return;

  const locale = state.lang === 'ar' ? 'ar-SA' : 'en-US';
  const issueDate = new Date(order.createdAt).toLocaleDateString(locale);
  const targetDate = order.expectedDate || 'ASAP / في أقرب وقت';

  let itemsRows = '';
  let subtotal = 0;

  if (Array.isArray(order.items)) {
    itemsRows = order.items.map((item, i) => {
      const lineTotal = (item.requestedQuantity * item.unitPrice) || 0;
      subtotal += lineTotal;
      return `
        <tr>
          <td style="text-align:center; font-weight:700;">${i + 1}</td>
          <td><strong style="font-family: var(--font-mono); color: #0284c7;">${esc(item.partNumber)}</strong></td>
          <td>
            <strong>${esc(item.partName)}</strong>
            <div style="font-size: 0.8rem; color: #475569; margin-top: 2px;">
              <strong>المواصفات:</strong> ${esc(item.specs) || 'Standard OEM Specs'}
            </div>
          </td>
          <td>${esc(item.brand) || '-'} / ${esc(item.model) || '-'}</td>
          <td>${esc(item.location) || 'Main Warehouse'}</td>
          <td style="text-align:center; font-weight:800; font-size: 1rem;">${item.requestedQuantity} ${esc(item.unit) || 'pcs'}</td>
          <td style="text-align:end;">${item.unitPrice ? item.unitPrice.toFixed(2) : '-'}</td>
          <td style="text-align:end; font-weight:700;">${lineTotal ? lineTotal.toFixed(2) : '-'}</td>
        </tr>
      `;
    }).join('');
  }

  container.innerHTML = `
    <!-- Top Header Banner -->
    <div class="po-header-banner">
      <div class="po-brand-info">
        <img src="/assets/logo.png" class="po-brand-logo" alt="Access Lion Logo">
        <div>
          <h1 class="po-company-name">Access Lion Warehouses</h1>
          <p class="po-company-sub">مستودعات أكسس ليون لإدارة وتخزين قطع الغيار والمعدات</p>
          <p style="font-size: 0.75rem; color: #64748b; margin: 0;">Dubai Industrial City, UAE | Contact: +971 4 000 0000 | info@accesslion.com</p>
        </div>
      </div>
      <div class="po-doc-title-block">
        <h2>PURCHASE ORDER</h2>
        <p>أمر شراء وتوريد قطع غيار</p>
      </div>
    </div>

    <!-- Metadata Grid -->
    <div class="po-meta-grid">
      <div class="po-meta-card">
        <h4><i class="fa-solid fa-file-contract"></i> بيانات أمر الشراء (Order Details)</h4>
        <p><strong>رقم الأوردر (PO #):</strong> <span style="color: #0284c7; font-weight:800; font-family:var(--font-mono);">${esc(order.poNumber)}</span></p>
        <p><strong>تاريخ الإصدار (Date):</strong> ${issueDate}</p>
        <p><strong>تاريخ التوريد المتوقع:</strong> ${esc(targetDate)}</p>
        <p><strong>الأولوية (Priority):</strong> ${esc(order.priority)}</p>
        <p><strong>الحالة (Status):</strong> <span style="font-weight:700; color:#0f172a;">${esc(order.status)}</span></p>
        <p><strong>المستودع المستلم:</strong> ${esc(order.department) || 'Main Warehouse'}</p>
      </div>

      <div class="po-meta-card">
        <h4><i class="fa-solid fa-truck-field"></i> بيانات المورد (Supplier Info)</h4>
        <p><strong>اسم المورد:</strong> <strong style="font-size: 1.05rem;">${esc(order.supplierName)}</strong></p>
        <p><strong>بيانات الاتصال / هاتف:</strong> ${esc(order.supplierContact) || 'Not specified'}</p>
        <p><strong>المسؤول عن الطلب:</strong> ${esc(order.createdByName) || 'Warehouse Inventory Manager'}</p>
      </div>
    </div>

    <!-- Specifications Table -->
    <table class="po-table">
      <thead>
        <tr>
          <th style="width: 40px; text-align:center;">#</th>
          <th>رقم القطعة (Part #)</th>
          <th>اسم القطعة والمواصفات الفنية (Specifications)</th>
          <th>الماركة والموديل</th>
          <th>موقع التخزين</th>
          <th style="text-align:center;">الكمية المطلوبة</th>
          <th style="text-align:end;">السعر التقديري</th>
          <th style="text-align:end;">الإجمالي</th>
        </tr>
      </thead>
      <tbody>
        ${itemsRows}
      </tbody>
    </table>

    <!-- Total Sum -->
    <div class="po-total-box">
      <div class="po-total-inner">
        الإجمالي الكلي التقديري: ${(order.totalAmount || subtotal).toFixed(2)}
      </div>
    </div>

    <!-- Notes & Terms -->
    <div class="po-notes-box">
      <strong>شروط التوريد والملاحظات الفنية:</strong><br>
      ${order.notes || '1. يجب أن تكون جميع القطع أصلية ومطابقة للمواصفات الفنية المذكورة. 2. التسليم في المستودع المعتمد مع الفاتورة الأصلية وبوليصة الاستلام.'}
    </div>

    <!-- Signatures Block -->
    <div class="po-signatures-grid">
      <div class="po-signature-box">
        <div class="po-sign-line"></div>
        <span class="po-sign-role">أعده (Storekeeper / أمين المستودع)</span>
        <div class="po-sign-sub">${order.createdByName || 'System User'}</div>
      </div>
      <div class="po-signature-box">
        <div class="po-sign-line"></div>
        <span class="po-sign-role">اعتماد مدير المستودعات (Warehouse Director)</span>
        <div class="po-sign-sub">Access Lion Warehouses</div>
      </div>
      <div class="po-signature-box">
        <div class="po-sign-line"></div>
        <span class="po-sign-role">استلام وتأكيد المورد (Supplier Stamp & Sign)</span>
        <div class="po-sign-sub">${order.supplierName}</div>
      </div>
    </div>
  `;

  // Setup Receive button in modal footer
  if (actionContainer) {
    if (order.status !== 'RECEIVED') {
      actionContainer.innerHTML = `
        <button class="btn btn-success" onclick="receivePurchaseOrder('${order.id}')">
          <i class="fa-solid fa-boxes-packing"></i> <span>${t('btn_receive_stock_to_inventory')}</span>
        </button>
      `;
    } else {
      actionContainer.innerHTML = `
        <span class="badge badge-success" style="font-size: 0.95rem; padding: 8px 16px;">
          <i class="fa-solid fa-circle-check"></i> ${t('status_received')}
        </span>
      `;
    }
  }
}

async function receivePurchaseOrder(orderId) {
  if (!confirm('هل أنت متأكد من استلام أمر الشراء هذا؟\nسيتم إضافة الكميات المذكورة مباشرة إلى رصيد كل قطعة غيار في المخزن وتسجيل حركات ADD رسمية.')) return;

  try {
    const res = await apiRequest(`/orders/${orderId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'RECEIVED', autoReceiveStock: true }),
    });

    showToast(t('order_received_success'));
    await loadParts();
    await loadOrders();
    await loadLowStockSummary();
    if (state.currentViewingOrder && state.currentViewingOrder.id === orderId) {
      showOfficialPoModal(orderId);
    }
  } catch (err) {
    showToast(err.message, 'error');
  }
}
window.receivePurchaseOrder = receivePurchaseOrder;

async function handleDeleteOrder(orderId, poNum) {
  if (!confirm(`هل أنت متأكد من حذف أمر الشراء [${poNum}]؟`)) return;

  try {
    await apiRequest(`/orders/${orderId}`, { method: 'DELETE' });
    showToast(t('order_deleted_success'));
    await loadOrders();
    await loadLowStockSummary();
  } catch (err) {
    showToast(err.message, 'error');
  }
}
window.handleDeleteOrder = handleDeleteOrder;

// =========================================================
// 13. QR Modal & Printable Labels
// =========================================================
let currentQrDataUrl = null;

async function showQrModal(partId) {
  const part = state.parts.find(p => p.id === partId) || state.lastScannedPart;
  if (!part) return;

  try {
    const qrData = await apiRequest(`/parts/${partId}/qrcode`);
    currentQrDataUrl = qrData.qrImage;

    document.getElementById('modalPartNumber').textContent = part.partNumber;
    document.getElementById('modalPartName').textContent = part.partName;
    document.getElementById('modalPartLoc').textContent = part.location || t('not_specified');
    document.getElementById('modalPartBrand').textContent = `${part.brand || ''} ${part.model || ''}`;
    document.getElementById('modalPartUnit').textContent = `${t('stock_balance_label')}: ${part.currentQuantity} ${part.unit || 'pcs'}`;
    document.getElementById('modalQrImage').src = qrData.qrImage;

    document.getElementById('qrModal').classList.remove('hidden');
  } catch (err) {
    showToast(err.message, 'error');
  }
}
window.showQrModal = showQrModal;

function downloadCurrentModalQr() {
  if (!currentQrDataUrl) return;
  const link = document.createElement('a');
  link.href = currentQrDataUrl;
  link.download = `QR-${document.getElementById('modalPartNumber').textContent}.png`;
  link.click();
}

// =========================================================
// BULK QR PRINT — طباعة عدد محدد من QR لصنف واحد
// =========================================================

/** يملأ قائمة اختيار الصنف في لوحة الطباعة بالكمية */
function populateBulkQrPartSelect() {
  const sel = document.getElementById('bulkQrPartSelect');
  if (!sel) return;
  const prev = sel.value;
  sel.innerHTML = '<option value="">-- اختر قطعة غيار --</option>' +
    state.parts.map(p =>
      `<option value="${p.id}">${esc(p.partNumber)} — ${esc(p.partName)}</option>`
    ).join('');
  if (prev) sel.value = prev;
}

/** يفتح الـ modal بعد التحقق من الإدخال وتوليد صور QR */
async function openBulkQrModal() {
  const partId = document.getElementById('bulkQrPartSelect')?.value;
  const count  = parseInt(document.getElementById('bulkQrCount')?.value, 10) || 1;

  if (!partId) { showToast('الرجاء اختيار صنف أولاً', 'warning'); return; }
  if (count < 1 || count > 200) { showToast('العدد يجب أن يكون بين 1 و 200', 'warning'); return; }

  const part = state.parts.find(p => p.id === partId);
  if (!part) { showToast('الصنف غير موجود', 'error'); return; }

  // إظهار الـ modal مع حالة التحميل
  document.getElementById('bulkQrModal').classList.remove('hidden');
  document.getElementById('bulkQrInfoPartName').textContent = part.partName;
  document.getElementById('bulkQrInfoPartNum').textContent  = part.partNumber;
  document.getElementById('bulkQrInfoCount').textContent    = `${count} نسخة`;

  const loading = document.getElementById('bulkQrLoading');
  const grid    = document.getElementById('bulkQrGrid');
  loading.style.display = 'block';
  grid.style.display    = 'none';
  grid.innerHTML = '';

  // توليد صورة QR (طلب واحد فقط — نفس الصورة تتكرر N مرة)
  let qrImg = '';
  try {
    const qrData = await apiRequest(`/parts/${part.id}/qrcode`);
    qrImg = qrData.qrImage;
  } catch (e) {
    showToast('فشل في توليد QR، تحقق من الاتصال', 'error');
    document.getElementById('bulkQrModal').classList.add('hidden');
    return;
  }

  // بناء بطاقة QR واحدة كـ template ثم تكرارها N مرة
  const cardHtml = `
    <div class="bulk-qr-card" style="
      background:var(--card-bg);
      border:1px solid var(--border-color);
      border-radius:10px;
      padding:10px 8px;
      text-align:center;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:5px;
      break-inside:avoid;
    ">
      <img src="${qrImg}" alt="QR" style="width:120px; height:120px; border-radius:6px;">
      <div style="font-size:0.7rem; font-family:var(--font-mono); color:var(--primary); font-weight:700;">
        ${esc(part.partNumber)}
      </div>
      <div style="font-size:0.68rem; color:var(--text-secondary); font-weight:600; line-height:1.2;">
        ${esc(part.partName)}
      </div>
      ${part.location ? `<div style="font-size:0.65rem; color:var(--text-muted);">
        <i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${esc(part.location)}
      </div>` : ''}
    </div>`;

  grid.innerHTML = Array(count).fill(cardHtml).join('');
  loading.style.display = 'none';
  grid.style.display    = 'grid';
}

/** إغلاق الـ modal */
function closeBulkQrModal() {
  document.getElementById('bulkQrModal')?.classList.add('hidden');
}
window.closeBulkQrModal = closeBulkQrModal;
window.openBulkQrModal  = openBulkQrModal;

/** طباعة الـ grid المولّد كصفحة مستقلة */
function doBulkQrPrint() {
  const grid = document.getElementById('bulkQrGrid');
  const partName = document.getElementById('bulkQrInfoPartName')?.textContent || '';
  const partNum  = document.getElementById('bulkQrInfoPartNum')?.textContent  || '';
  const count    = document.getElementById('bulkQrInfoCount')?.textContent    || '';

  // استخراج بيانات القطعة من الـ state
  const partId = document.getElementById('bulkQrPartSelect')?.value;
  const part = state.parts.find(p => p.id === partId) || {};

  const win = window.open('', '_blank', 'width=1000,height=800');
  if (!win) { showToast('الرجاء السماح بالنوافذ المنبثقة لهذا الموقع', 'warning'); return; }

  // استخراج صور الـ QR من الـ grid
  const qrImgs = grid.querySelectorAll('img');
  const qrSrc = qrImgs.length > 0 ? qrImgs[0].src : '';
  const total = parseInt(count) || qrImgs.length;

  // بناء الملصقات
  let cardsHtml = '';
  for (let i = 0; i < total; i++) {
    cardsHtml += `
      <div class="label-card">
        <div class="label-header">
          <span class="company">Access Lion Warehouses</span>
        </div>
        <div class="label-body">
          <div class="label-qr">
            <img src="${qrSrc}" alt="QR">
          </div>
          <div class="label-info">
            <div class="label-pn">${esc(partNum)}</div>
            <div class="label-name">${esc(partName)}</div>
            ${part.category ? `<div class="label-detail">📁 ${esc(part.category)}</div>` : ''}
            ${part.brand ? `<div class="label-detail">🏷️ ${esc(part.brand)}</div>` : ''}
            ${part.location ? `<div class="label-detail">📍 ${esc(part.location)}</div>` : ''}
            ${part.supplier ? `<div class="label-detail">🏭 ${esc(part.supplier)}</div>` : ''}
          </div>
        </div>
        <div class="label-footer">
          <span>الكمية: ${part.currentQuantity || 0} ${esc(part.unit || 'pcs')}</span>
          <span>حد الطلب: ${part.minimumStockLevel || 0}</span>
        </div>
      </div>`;
  }

  win.document.write(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>طباعة ملصقات QR — ${esc(partNum)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Cairo', 'Segoe UI', Arial, sans-serif;
      background: #fff;
      color: #1e293b;
      padding: 10px;
    }
    .print-header {
      text-align: center;
      padding: 8px;
      margin-bottom: 10px;
      border-bottom: 2px solid #1e3a8a;
    }
    .print-header h1 { font-size: 14pt; color: #1e3a8a; font-weight: 900; }
    .print-header p { font-size: 8pt; color: #64748b; margin-top: 2px; }
    .labels-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
    .label-card {
      border: 1.5px solid #1e3a8a;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
      break-inside: avoid;
      page-break-inside: avoid;
      height: 100%;
    }
    .label-header {
      background: #1e3a8a;
      padding: 3px 8px;
      text-align: center;
    }
    .company {
      color: #fff;
      font-size: 7pt;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .label-body {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
    }
    .label-qr img {
      width: 90px;
      height: 90px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
      flex-shrink: 0;
    }
    .label-info { flex: 1; min-width: 0; }
    .label-pn {
      font-size: 8pt;
      font-family: monospace;
      color: #1d4ed8;
      font-weight: 900;
      background: #eff6ff;
      padding: 2px 6px;
      border-radius: 3px;
      display: inline-block;
      margin-bottom: 4px;
    }
    .label-name {
      font-size: 9pt;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.3;
      margin-bottom: 4px;
    }
    .label-detail {
      font-size: 7pt;
      color: #475569;
      line-height: 1.5;
    }
    .label-footer {
      background: #f1f5f9;
      border-top: 1px solid #e2e8f0;
      padding: 4px 8px;
      display: flex;
      justify-content: space-between;
      font-size: 7pt;
      color: #475569;
      font-weight: 600;
    }
    @media print {
      body { background: #fff; padding: 5px; }
      .print-header { margin-bottom: 8px; }
      .labels-grid { gap: 6px; }
      /* 12 ستيكر في الصفحة = 3 أعمدة × 4 صفوف */
      .label-card { break-inside: avoid; page-break-inside: avoid; }
    }
    @page {
      margin: 0.8cm;
      size: A4 portrait;
    }
  </style>
</head>
<body>
  <div class="print-header">
    <h1>🦁 Access Lion Warehouses — ملصقات QR</h1>
    <p>${esc(partName)} &nbsp;·&nbsp; رقم القطعة: ${esc(partNum)} &nbsp;·&nbsp; عدد الملصقات: ${total}</p>
  </div>
  <div class="labels-grid">${cardsHtml}</div>
  <script>
    document.fonts.ready.then(function() {
      setTimeout(function() { window.print(); }, 600);
    });
  <\/script>
</body>
</html>`);
  win.document.close();
}
window.doBulkQrPrint = doBulkQrPrint;

async function renderPrintableLabels() {
  const container = document.getElementById('printableLabelsContainer');
  if (!container) return;

  if (state.parts.length === 0) {
    container.innerHTML = `<div class="empty-state"><h3>${t('no_labels')}</h3></div>`;
    return;
  }

  container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); margin-bottom: 10px;">${t('loading_labels')}</div>`;

  const cardsHtml = await Promise.all(state.parts.map(async (part) => {
    let qrImg = '';
    try {
      const qrData = await apiRequest(`/parts/${part.id}/qrcode`);
      qrImg = qrData.qrImage;
    } catch (e) {
      qrImg = '';
    }

    return `
      <div class="label-ticket">
        <div class="label-header">
          <div class="label-brand-group">
            <img src="/assets/logo.png" class="label-brand-logo" alt="Logo">
            <span class="label-brand-name">Access Lion Warehouses</span>
          </div>
          <span class="label-pn">${esc(part.partNumber)}</span>
        </div>
        <div class="label-content">
          <div class="label-qr-box">
            <img src="${qrImg}" alt="QR">
          </div>
          <div class="label-details">
            <h4>${esc(part.partName)}</h4>
            <p><i class="fa-solid fa-location-dot"></i> ${esc(part.location) || t('not_specified')}</p>
            <p><i class="fa-solid fa-tag"></i> ${esc(part.brand) || ''} ${esc(part.model) || ''}</p>
            <div class="label-unit-badge">${t('stock_balance_label')}: ${part.currentQuantity} ${part.unit || 'pcs'}</div>
          </div>
        </div>
      </div>
    `;
  }));

  container.innerHTML = cardsHtml.join('');
}

// =========================================================
// 14. Edit & Disable Parts
// =========================================================
function openEditPartModal(partId) {
  const part = state.parts.find(p => p.id === partId) || state.lastScannedPart;
  if (!part) return;

  document.getElementById('editPartId').value = part.id;
  document.getElementById('editPartName').value = part.partName;
  document.getElementById('editCategory').value = part.category || '';
  document.getElementById('editBrand').value = part.brand || '';
  document.getElementById('editModel').value = part.model || '';
  document.getElementById('editLocation').value = part.location || '';
  document.getElementById('editMinStock').value = part.minimumStockLevel;
  document.getElementById('editSupplier').value = part.supplier || '';
  document.getElementById('editDescription').value = part.description || '';

  document.getElementById('editPartModal').classList.remove('hidden');
}
window.openEditPartModal = openEditPartModal;

async function handleEditPart(e) {
  e.preventDefault();
  const id = document.getElementById('editPartId').value;
  const payload = {
    partName: document.getElementById('editPartName').value.trim(),
    category: document.getElementById('editCategory').value.trim(),
    brand: document.getElementById('editBrand').value.trim(),
    model: document.getElementById('editModel').value.trim(),
    location: document.getElementById('editLocation').value.trim(),
    minimumStockLevel: Number(document.getElementById('editMinStock').value) || 0,
    supplier: document.getElementById('editSupplier').value.trim(),
    description: document.getElementById('editDescription').value.trim(),
  };

  try {
    const updated = await apiRequest(`/parts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });

    showToast(t('part_updated_success'));
    document.getElementById('editPartModal').classList.add('hidden');
    await loadParts();

    if (state.lastScannedPart && state.lastScannedPart.id === id) {
      state.lastScannedPart = updated;
      renderScannedPartCard(updated);
    }
  } catch (err) {
    showToast(err.message, 'error');
  }
}

async function handleDeletePart(partId, partName) {
  if (!confirm(`${t('confirm_disable')}\n\n[${partName}]`)) return;

  try {
    await apiRequest(`/parts/${partId}`, { method: 'DELETE' });
    showToast(t('part_disabled_success'));
    await loadParts();
  } catch (err) {
    showToast(err.message, 'error');
  }
}
window.handleDeletePart = handleDeletePart;

// =========================================================
// 15. Audit Logs & User Management
// =========================================================
async function loadAuditLogs() {
  try {
    const logs = await apiRequest('/auth/audit-logs');
    const tbody = document.getElementById('auditTableBody');
    if (!tbody) return;

    if (!logs || logs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">${t('no_audit_logs')}</td></tr>`;
      return;
    }

    const locale = state.lang === 'ar' ? 'ar-SA' : 'en-US';
    tbody.innerHTML = logs.map(log => {
      const date = new Date(log.createdAt).toLocaleString(locale);
      const actionBadge = log.action.includes('CREATED') || log.action.includes('ADDED') ? 'badge-success' : log.action.includes('DISABLED') || log.action.includes('ISSUED') ? 'badge-danger' : 'badge-primary';

      return `
        <tr>
          <td><small style="color:var(--text-muted); font-family:var(--font-mono);">${date}</small></td>
          <td><strong>${esc(log.userName) || 'System'}</strong></td>
          <td><span class="badge ${actionBadge}">${esc(log.action)}</span></td>
          <td>${esc(log.entityType) || '-'}</td>
          <td><code style="color:var(--primary);">${log.entityId ? esc(log.entityId.substring(0, 8)) + '...' : '-'}</code></td>
          <td><small style="color:var(--text-secondary);">${esc(log.details) || '-'}</small></td>
        </tr>
      `;
    }).join('');
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// =========================================================
// 16. User Management & Permissions Engine (إدارة المستخدمين والصلاحيات)
// =========================================================

const SYSTEM_PERMISSIONS_DEF = [
  { key: 'parts:read', labelAr: 'عرض والبحث في قطع الغيار', group: 'المخزون والقطع', icon: 'fa-boxes-stacked' },
  { key: 'parts:create', labelAr: 'إضافة أصناف وقطع جديدة', group: 'المخزون والقطع', icon: 'fa-plus' },
  { key: 'parts:edit', labelAr: 'تعديل بيانات القطع وحد الأمان', group: 'المخزون والقطع', icon: 'fa-pen-to-square' },
  { key: 'parts:delete', labelAr: 'حذف قطع الغيار من النظام', group: 'المخزون والقطع', icon: 'fa-trash' },
  { key: 'stock:in', labelAr: 'توريد وإضافة مخزون (+)', group: 'حركات المستودع', icon: 'fa-arrow-down-to-line' },
  { key: 'stock:out', labelAr: 'صرف وتفريغ رصيد (-)', group: 'حركات المستودع', icon: 'fa-arrow-up-from-line' },
  { key: 'scanner:use', labelAr: 'استخدام أجهزة السكنر للباركود', group: 'الماسحات اللاسلكية', icon: 'fa-barcode' },
  { key: 'scanner:manage', labelAr: 'ربط وإعداد وتعيين الماسحات', group: 'الماسحات اللاسلكية', icon: 'fa-wifi' },
  { key: 'orders:read', labelAr: 'عرض ومتابعة أوامر الشراء', group: 'المشتريات والتوريد', icon: 'fa-file-lines' },
  { key: 'orders:create', labelAr: 'إنشاء وتعديل أوامر الشراء', group: 'المشتريات والتوريد', icon: 'fa-cart-plus' },
  { key: 'orders:approve', labelAr: 'اعتماد واستلام وتوريد الطلبات', group: 'المشتريات والتوريد', icon: 'fa-circle-check' },
  { key: 'users:manage', labelAr: 'إدارة المستخدمين والأدوار والصلاحيات', group: 'إدارة النظام', icon: 'fa-users-gear' },
  { key: 'audit:read', labelAr: 'سجلات الرقابة والتدقيق (Audit)', group: 'إدارة النظام', icon: 'fa-clipboard-list' },
  { key: 'export:reports', labelAr: 'تصدير التقارير وجداول Excel', group: 'التقارير والإحصاء', icon: 'fa-file-excel' },
];

const ROLE_PRESET_PERMISSIONS = {
  admin: SYSTEM_PERMISSIONS_DEF.map(p => p.key),
  storekeeper: [
    'parts:read', 'parts:create', 'parts:edit',
    'stock:in', 'stock:out',
    'scanner:use',
    'orders:read', 'orders:create',
    'export:reports'
  ],
  viewer: [
    'parts:read',
    'orders:read'
  ]
};

async function loadUsers() {
  try {
    const users = await apiRequest('/auth/users');
    state.allUsers = Array.isArray(users) ? users : [];
    
    // Update Stats
    updateUsersStats(state.allUsers);
    
    // Render Table
    renderUsersTable();
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function updateUsersStats(users) {
  const statTotal = document.getElementById('statTotalUsers');
  const statAdmin = document.getElementById('statAdminUsers');
  const statStore = document.getElementById('statStorekeeperUsers');
  const statViewer = document.getElementById('statViewerUsers');

  if (statTotal) statTotal.textContent = users.length;
  if (statAdmin) statAdmin.textContent = users.filter(u => u.role === 'admin').length;
  if (statStore) statStore.textContent = users.filter(u => u.role === 'storekeeper').length;
  if (statViewer) statViewer.textContent = users.filter(u => u.role === 'viewer').length;
}

function renderUsersTable() {
  const tbody = document.getElementById('usersTableBody');
  if (!tbody) return;

  const users = state.allUsers || [];
  const searchQuery = (document.getElementById('userSearchInput')?.value || '').toLowerCase().trim();
  const roleFilter = document.getElementById('userRoleFilter')?.value || '';
  const statusFilter = document.getElementById('userStatusFilter')?.value || '';

  const filtered = users.filter(u => {
    // Search query
    if (searchQuery) {
      const matchName = (u.fullName || '').toLowerCase().includes(searchQuery);
      const matchUser = (u.username || '').toLowerCase().includes(searchQuery);
      const matchEmail = (u.email || '').toLowerCase().includes(searchQuery);
      if (!matchName && !matchUser && !matchEmail) return false;
    }

    // Role filter
    if (roleFilter && u.role !== roleFilter) return false;

    // Status filter
    if (statusFilter === 'active' && !u.isActive) return false;
    if (statusFilter === 'inactive' && u.isActive) return false;

    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-muted);">
          <i class="fa-solid fa-user-slash" style="font-size: 2rem; margin-bottom: 8px; display: block; opacity: 0.5;"></i>
          لا توجد نتائج مطابقة لمعايير البحث
        </td>
      </tr>
    `;
    return;
  }

  const locale = state.lang === 'ar' ? 'ar-SA' : 'en-US';
  const roleColors = {
    admin: { bg: 'badge-danger', icon: 'fa-shield-halved', label: 'مدير نظام (Admin)', color: '#EF4444' },
    storekeeper: { bg: 'badge-warning', icon: 'fa-boxes-stacked', label: 'أمين مخزن (Storekeeper)', color: '#F59E0B' },
    viewer: { bg: 'badge-accent', icon: 'fa-eye', label: 'مشاهد (Viewer)', color: '#38BDF8' }
  };

  tbody.innerHTML = filtered.map(u => {
    const date = new Date(u.createdAt).toLocaleDateString(locale);
    const rConfig = roleColors[u.role] || roleColors.viewer;
    const initial = (u.fullName || u.username || 'U').charAt(0).toUpperCase();

    // Permissions label/badge
    let permsBadge = '';
    if (u.role === 'admin') {
      permsBadge = `<span class="badge badge-success"><i class="fa-solid fa-star"></i> كامل الصلاحيات</span>`;
    } else if (Array.isArray(u.permissions) && u.permissions.length > 0) {
      permsBadge = `<span class="badge badge-primary" title="${u.permissions.join(', ')}"><i class="fa-solid fa-key"></i> ${u.permissions.length} صلاحيات مخصصة</span>`;
    } else {
      const defaultCount = (ROLE_PRESET_PERMISSIONS[u.role] || []).length;
      permsBadge = `<span class="badge badge-secondary"><i class="fa-solid fa-check"></i> ${defaultCount} صلاحيات افتراضية</span>`;
    }

    const isSelf = state.user && state.user.id === u.id;

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="user-avatar-sm" style="background: ${rConfig.color};">${initial}</div>
            <div>
              <strong style="color: var(--text-primary); display: block;">${esc(u.fullName) || '-'}</strong>
              ${isSelf ? '<small style="color: var(--primary); font-weight: 700;">(حسابك الحالي)</small>' : ''}
            </div>
          </div>
        </td>
        <td><code style="background: rgba(255,255,255,0.04); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">${esc(u.username)}</code></td>
        <td>${u.email ? `<a href="mailto:${esc(u.email)}" style="color: var(--text-secondary);">${esc(u.email)}</a>` : '<span style="color: var(--text-muted);">-</span>'}</td>
        <td><span class="badge ${rConfig.bg}"><i class="fa-solid ${rConfig.icon}"></i> ${rConfig.label}</span></td>
        <td>${permsBadge}</td>
        <td>
          <span class="badge ${u.isActive ? 'badge-success' : 'badge-secondary'}">
            <i class="fa-solid ${u.isActive ? 'fa-circle-check' : 'fa-circle-xmark'}"></i> ${u.isActive ? 'نشط' : 'معطل'}
          </span>
        </td>
        <td><small style="color: var(--text-muted);">${date}</small></td>
        <td>
          <div class="user-actions-cell">
            <button class="btn btn-sm btn-outline-primary" onclick="openEditUserModal('${u.id}')" title="تعديل المستخدم وتغيير الصلاحيات">
              <i class="fa-solid fa-user-pen"></i> <span>تعديل</span>
            </button>
            <button class="btn btn-sm ${u.isActive ? 'btn-outline-warning' : 'btn-outline-success'}" onclick="toggleUserStatus('${u.id}', ${!u.isActive})" title="${u.isActive ? 'تعطيل الحساب' : 'تفعيل الحساب'}" ${isSelf ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              <i class="fa-solid ${u.isActive ? 'fa-user-slash' : 'fa-user-check'}"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger" onclick="deleteUser('${u.id}', '${escJsAttr(u.username)}')" title="حذف المستخدم نهائياً" ${isSelf ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function openEditUserModal(userId) {
  const user = (state.allUsers || []).find(u => u.id === userId);
  if (!user) {
    showToast('تعذر العثور على المستخدم المطلوب', 'error');
    return;
  }

  document.getElementById('editUserId').value = user.id;
  document.getElementById('editFullName').value = user.fullName || '';
  document.getElementById('editUsername').value = user.username || '';
  document.getElementById('editEmail').value = user.email || '';
  document.getElementById('editRole').value = user.role || 'viewer';
  document.getElementById('editStatus').value = user.isActive ? 'true' : 'false';
  document.getElementById('editPassword').value = '';

  // Render Checkboxes
  renderPermissionCheckboxes(user);

  document.getElementById('editUserModal').classList.remove('hidden');
}

function renderPermissionCheckboxes(user) {
  const container = document.getElementById('permissionsCheckboxesContainer');
  if (!container) return;

  // Group by category
  const groups = {};
  SYSTEM_PERMISSIONS_DEF.forEach(p => {
    if (!groups[p.group]) groups[p.group] = [];
    groups[p.group].push(p);
  });

  // Determine which keys should be checked
  let activeKeys = [];
  if (Array.isArray(user.permissions) && user.permissions.length > 0) {
    activeKeys = user.permissions;
  } else {
    activeKeys = ROLE_PRESET_PERMISSIONS[user.role] || [];
  }

  container.innerHTML = Object.keys(groups).map(groupName => {
    const items = groups[groupName];
    return `
      <div class="perm-category-card">
        <div class="perm-category-title">
          <i class="fa-solid fa-folder-closed" style="color: var(--primary); font-size: 0.8rem;"></i> ${groupName}
        </div>
        ${items.map(item => {
          const checked = activeKeys.includes(item.key) ? 'checked' : '';
          return `
            <label class="perm-checkbox-item">
              <input type="checkbox" name="userPerms" value="${item.key}" ${checked}>
              <span><i class="fa-solid ${item.icon}" style="width: 14px; text-align: center; color: var(--text-muted);"></i> ${item.labelAr}</span>
            </label>
          `;
        }).join('')}
      </div>
    `;
  }).join('');
}

function applyRolePresetToCheckboxes(role) {
  const preset = ROLE_PRESET_PERMISSIONS[role] || [];
  const checkboxes = document.querySelectorAll('input[name="userPerms"]');
  checkboxes.forEach(cb => {
    cb.checked = preset.includes(cb.value);
  });
  showToast(`تم تطبيق قالب صلاحيات [${role}] على النموذج`, 'info');
}

function setAllPermissionCheckboxes(checked) {
  const checkboxes = document.querySelectorAll('input[name="userPerms"]');
  checkboxes.forEach(cb => {
    cb.checked = checked;
  });
}

async function handleEditUserSubmit(e) {
  e.preventDefault();
  const userId = document.getElementById('editUserId').value;
  if (!userId) return;

  const selectedPerms = Array.from(document.querySelectorAll('input[name="userPerms"]:checked')).map(cb => cb.value);

  const payload = {
    fullName: document.getElementById('editFullName').value.trim(),
    email: document.getElementById('editEmail').value.trim(),
    role: document.getElementById('editRole').value,
    isActive: document.getElementById('editStatus').value === 'true',
    permissions: selectedPerms
  };

  const pwd = document.getElementById('editPassword').value;
  if (pwd && pwd.trim().length >= 6) {
    payload.password = pwd.trim();
  }

  try {
    await apiRequest(`/auth/users/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    });

    showToast('✅ تم تحديث بيانات وصلاحيات المستخدم بنجاح!');
    document.getElementById('editUserModal').classList.add('hidden');
    loadUsers();
  } catch (err) {
    showToast(err.message, 'error');
  }
}

async function toggleUserStatus(userId, newActiveState) {
  const user = (state.allUsers || []).find(u => u.id === userId);
  const actionText = newActiveState ? 'تفعيل' : 'تعطيل';
  
  if (!confirm(`هل أنت متأكد من رغبتك في ${actionText} حساب المستخدم [${user?.username || ''}]؟`)) {
    return;
  }

  try {
    await apiRequest(`/auth/users/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify({ isActive: newActiveState })
    });

    showToast(`تم ${actionText} حساب المستخدم بنجاح`);
    loadUsers();
  } catch (err) {
    showToast(err.message, 'error');
  }
}

async function deleteUser(userId, username) {
  if (!confirm(`⚠️ تحذير: هل أنت متأكد من رغبتك في حذف المستخدم [${username}] نهائياً؟ لا يمكن التراجع عن هذا الإجراء!`)) {
    return;
  }

  try {
    await apiRequest(`/auth/users/${userId}`, {
      method: 'DELETE'
    });

    showToast(`تم حذف المستخدم [${username}] بنجاح`);
    loadUsers();
  } catch (err) {
    showToast(err.message, 'error');
  }
}

async function handleAddUser(e) {
  e.preventDefault();
  const payload = {
    fullName: document.getElementById('newFullName').value.trim(),
    username: document.getElementById('newUsername').value.trim(),
    password: document.getElementById('newPassword').value,
    role: document.getElementById('newRole').value,
    permissions: ROLE_PRESET_PERMISSIONS[document.getElementById('newRole').value] || []
  };

  try {
    await apiRequest('/auth/users', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    showToast(`تم إنشاء المستخدم [${payload.username}] وتعيين صلاحياته بنجاح!`);
    document.getElementById('addUserModal').classList.add('hidden');
    document.getElementById('addUserForm').reset();
    loadUsers();
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// Expose functions globally for onclick attributes
window.openEditUserModal = openEditUserModal;
window.toggleUserStatus = toggleUserStatus;
window.deleteUser = deleteUser;
window.applyRolePresetToCheckboxes = applyRolePresetToCheckboxes;
window.setAllPermissionCheckboxes = setAllPermissionCheckboxes;

// =========================================================
// 17. QR Scanner Hardware Management & Global Keystroke Engine
// =========================================================

// Global Keystroke Interceptor for Wireless / USB Handheld Scanners
let hardwareScanBuffer = '';
let lastKeypressTime = 0;
let hardwareScanTimer = null;

function initHardwareScannerListener() {
  window.addEventListener('keydown', (e) => {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastKeypressTime;
    lastKeypressTime = currentTime;

    // Ignore solitary modifier keys
    if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab', 'Escape'].includes(e.key)) {
      return;
    }

    const activeEl = document.activeElement;
    const isEditingSearchOrNotes = activeEl && (
      activeEl.id === 'globalSearchInput' ||
      activeEl.tagName === 'TEXTAREA'
    );

    // If Enter key is received and we accumulated a buffer
    if (e.key === 'Enter') {
      if (hardwareScanBuffer.length >= 3) {
        const rawScanned = hardwareScanBuffer.trim();
        hardwareScanBuffer = '';
        clearTimeout(hardwareScanTimer);

        if (activeEl && ['INPUT', 'TEXTAREA'].includes(activeEl.tagName)) {
          // If the user was focused on an input, avoid form submit side-effect if fast scan
          if (timeDiff < 70) {
            e.preventDefault();
          }
        }

        handleHardwareScanCaptured(rawScanned);
        return;
      }
      hardwareScanBuffer = '';
      return;
    }

    // Accumulate character into buffer
    if (e.key && e.key.length === 1) {
      // If typing slowly inside normal search input, don't hijack unless fast scanner stream
      if (isEditingSearchOrNotes && timeDiff > 80 && hardwareScanBuffer.length === 0) {
        return;
      }

      if (timeDiff > 85 && hardwareScanBuffer.length > 0) {
        hardwareScanBuffer = '';
      }

      hardwareScanBuffer += e.key;

      clearTimeout(hardwareScanTimer);
      hardwareScanTimer = setTimeout(() => {
        // If buffer collected >= 6 characters within rapid intervals without Enter terminator
        if (hardwareScanBuffer.length >= 6 && timeDiff < 60) {
          const rawScanned = hardwareScanBuffer.trim();
          hardwareScanBuffer = '';
          handleHardwareScanCaptured(rawScanned);
        } else {
          hardwareScanBuffer = '';
        }
      }, 95);
    }
  }, true);
}

// Process Captured Scan from Hardware or UI
async function handleHardwareScanCaptured(rawText) {
  const startTime = Date.now();
  const activeDevice = state.activeDevice || (state.devices.length > 0 ? state.devices[0] : null);
  const deviceName = activeDevice ? activeDevice.name : 'Hardware Scanner';
  const soundFeedback = activeDevice?.soundFeedback || 'BEEP_CHIME';

  // Instant Audio Feedback
  playAudioTone(soundFeedback);

  appendTerminalLog('calibrationTerminalBody', `> SCAN_PULSE: [${rawText.substring(0, 32)}${rawText.length > 32 ? '...' : ''}]`, 'pulse');
  appendTerminalLog('modalTestTerminalBody', `> RECV: [${rawText}]`, 'pulse');

  try {
    let result;
    if (activeDevice && activeDevice.id) {
      result = await apiRequest(`/devices/${activeDevice.id}/scan-event`, {
        method: 'POST',
        body: JSON.stringify({ raw: rawText }),
      });
    } else {
      const part = await apiRequest('/parts/scan', {
        method: 'POST',
        body: JSON.stringify({ raw: rawText }),
      });
      result = {
        success: true,
        part,
        device: { name: 'Direct Scanner' },
        message: `Recognized [${part.partNumber}]`,
      };
    }

    const latency = Math.max(1, Date.now() - startTime);

    // Update Live Latency Gauges
    const latencyBadge = document.getElementById('terminalLatencyBadge');
    if (latencyBadge) latencyBadge.textContent = `⚡ ${latency} ms`;

    const testModalLatency = document.getElementById('testModalLatencyDisplay');
    if (testModalLatency) testModalLatency.textContent = `${latency} ms`;

    state.lastScannedPart = result.part;
    renderScannedPartCard(result.part);

    appendTerminalLog('calibrationTerminalBody', `> SUCCESS: Part [${result.part.partNumber}] "${result.part.partName}" matched in ${latency}ms (Stock: ${result.part.currentQuantity} ${result.part.unit || 'pcs'})`, 'success');
    appendTerminalLog('modalTestTerminalBody', `> MATCH_OK: ${result.part.partNumber} [${latency}ms]`, 'success');

    showToast(`⚡ ${t('hw_scanner_title')} [${deviceName}]: ${result.part.partNumber} (${result.part.partName}) - ${latency}ms`);

    // If currently on scanner tab, automatically highlight card
    if (state.activeTab === 'scanner') {
      const resultCard = document.getElementById('scanResultCard');
      if (resultCard) {
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    // Refresh devices list if on devices tab
    if (state.activeTab === 'devices') {
      loadDevices();
    }
  } catch (err) {
    playAudioTone('ERROR');
    appendTerminalLog('calibrationTerminalBody', `> ERROR: ${err.message}`, 'error');
    appendTerminalLog('modalTestTerminalBody', `> REJECTED: ${err.message}`, 'error');
    showToast(`${t('scan_failed')}: ${err.message}`, 'error');
  }
}

// Load Scanner Devices from API
async function loadDevices() {
  try {
    const data = await apiRequest('/devices');
    state.devices = data.devices || [];
    state.deviceStats = data.stats || { totalDevices: 0, activeDevices: 0, totalScans: 0 };

    if (!state.activeDeviceId && state.devices.length > 0) {
      state.activeDeviceId = state.devices[0].id;
      localStorage.setItem('spareparts_active_device_id', state.activeDeviceId);
    }

    state.activeDevice = state.devices.find(d => d.id === state.activeDeviceId) || state.devices[0] || null;

    updateDeviceStatsAndNavbar();
    renderDevicesGrid();
    populateDeviceDropdowns();
  } catch (err) {
    console.error('Error loading scanner devices:', err);
  }
}

function updateDeviceStatsAndNavbar() {
  const statTotal = document.getElementById('statTotalDevices');
  if (statTotal) statTotal.textContent = state.devices.length;

  const statActive = document.getElementById('statActiveDevices');
  if (statActive) statActive.textContent = state.devices.filter(d => d.status === 'ACTIVE').length;

  const statScans = document.getElementById('statTotalDeviceScans');
  if (statScans) statScans.textContent = state.devices.reduce((sum, d) => sum + (d.totalScansCount || 0), 0);

  const navCount = document.getElementById('navDevicesCount');
  if (navCount) navCount.textContent = state.devices.length;

  // Top Navbar Active Device Pill
  const topDeviceName = document.getElementById('topActiveDeviceName');
  const topDeviceBadge = document.getElementById('topActiveDeviceBadge');
  if (topDeviceName && topDeviceBadge) {
    if (state.activeDevice) {
      topDeviceName.textContent = `${state.activeDevice.name} (${state.activeDevice.deviceType})`;
      topDeviceBadge.style.display = 'inline-flex';
    } else {
      topDeviceName.textContent = t('nav_devices');
    }
  }

  // Scanner Banner Status
  const hwStatusBadge = document.getElementById('hwScannerStatusBadge');
  if (hwStatusBadge) {
    if (state.activeDevice && state.activeDevice.status === 'ACTIVE') {
      hwStatusBadge.className = 'badge badge-success badge-sm';
      hwStatusBadge.textContent = '🟢 متصل وجاهز للمسح الفوري';
    } else if (state.activeDevice && state.activeDevice.status === 'TESTING') {
      hwStatusBadge.className = 'badge badge-warning badge-sm';
      hwStatusBadge.textContent = '🟡 وضع المعايرة والفحص';
    } else {
      hwStatusBadge.className = 'badge badge-primary badge-sm';
      hwStatusBadge.textContent = '⚪ متوقف مؤقتاً';
    }
  }
}

function renderDevicesGrid() {
  const grid = document.getElementById('devicesListGrid');
  const emptyState = document.getElementById('devicesEmptyState');
  if (!grid) return;

  if (state.devices.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  const locale = state.lang === 'ar' ? 'ar-SA' : 'en-US';

  grid.innerHTML = state.devices.map(device => {
    const isActive = state.activeDeviceId === device.id;
    const activeClass = isActive ? 'is-active-device' : '';

    let typeIcon = 'fa-barcode';
    let typeLabel = 'USB / Wireless HID';
    if (device.deviceType === 'WEB_SERIAL') {
      typeIcon = 'fa-microchip';
      typeLabel = 'Web Serial / COM';
    } else if (device.deviceType === 'CAMERA_FIXED') {
      typeIcon = 'fa-camera';
      typeLabel = 'Fixed Camera';
    } else if (device.deviceType === 'SMARTPHONE_WIFI') {
      typeIcon = 'fa-mobile-screen-button';
      typeLabel = 'Mobile Terminal';
    }

    let statusBadgeClass = 'badge-success';
    let statusText = 'نشط (Active)';
    if (device.status === 'TESTING') {
      statusBadgeClass = 'badge-warning';
      statusText = 'معايرة (Testing)';
    } else if (device.status === 'PAUSED') {
      statusBadgeClass = 'badge-primary';
      statusText = 'متوقف (Paused)';
    }

    const lastScanFormatted = device.lastScanAt
      ? new Date(device.lastScanAt).toLocaleString(locale)
      : (state.lang === 'ar' ? 'لم يتم المسح بعد' : 'No scans yet');

    return `
      <div class="device-card ${activeClass}" id="device-card-${device.id}">
        <div>
          <div class="device-card-header">
            <div class="device-icon-box">
              <i class="fa-solid ${typeIcon}"></i>
            </div>
            <div class="device-title-wrap">
              <h4>${esc(device.name)}</h4>
              <div class="device-meta-row">
                <span class="badge badge-accent badge-sm">${typeLabel}</span>
                <span class="badge ${statusBadgeClass} badge-sm">${statusText}</span>
              </div>
            </div>
            <div>
              ${isActive ? `
                <span class="badge badge-success badge-sm" style="box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);">
                  <i class="fa-solid fa-circle-check"></i> ${t('action_is_active')}
                </span>
              ` : `
                <button class="btn btn-outline-primary btn-sm" onclick="setActiveScannerDevice('${device.id}')" title="${t('action_set_active')}">
                  ${t('action_set_active')}
                </button>
              `}
            </div>
          </div>

          <div class="device-info-list">
            <div class="device-info-row">
              <span class="device-info-label">${t('form_device_location')}:</span>
              <span class="device-info-val"><i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${esc(device.warehouseLocation) || '-'}</span>
            </div>
            <div class="device-info-row">
              <span class="device-info-label">${t('form_connection_port')}:</span>
              <span class="device-info-val"><code>${esc(device.connectionPort) || 'USB-HID'}</code></span>
            </div>
            <div class="device-info-row">
              <span class="device-info-label">${t('form_default_action')}:</span>
              <span class="device-info-val badge badge-accent badge-sm">${device.defaultAction || 'LOOKUP'}</span>
            </div>
            <div class="device-info-row">
              <span class="device-info-label">${t('stat_total_device_scans')}:</span>
              <span class="device-info-val" style="color: var(--primary); font-weight: 700;">${device.totalScansCount || 0} مسحة</span>
            </div>
            <div class="device-info-row">
              <span class="device-info-label">آخر مسح:</span>
              <span class="device-info-val" style="font-size:0.75rem; color:var(--text-muted);">${lastScanFormatted}</span>
            </div>
          </div>
        </div>

        <div class="device-card-actions">
          <button class="btn btn-secondary btn-sm" onclick="openTestDeviceModal('${device.id}')">
            <i class="fa-solid fa-bolt"></i> <span>${t('action_calibrate')}</span>
          </button>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-secondary btn-sm" onclick="openEditDeviceModal('${device.id}')" title="تعديل">
              <i class="fa-solid fa-pen"></i>
            </button>
            ${state.user?.role === 'admin' ? `
              <button class="btn btn-danger btn-sm" onclick="handleDeleteDevice('${device.id}', '${escJsAttr(device.name)}')" title="حذف">
                <i class="fa-solid fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function populateDeviceDropdowns() {
  const activeSelect = document.getElementById('activeScannerDeviceSelect');
  const testSelect = document.getElementById('testStationDeviceSelect');

  if (activeSelect) {
    activeSelect.innerHTML = state.devices.map(d => `
      <option value="${d.id}" ${d.id === state.activeDeviceId ? 'selected' : ''}>
        ${d.name} (${d.warehouseLocation || d.deviceType})
      </option>
    `).join('');
  }

  if (testSelect) {
    testSelect.innerHTML = state.devices.map(d => `
      <option value="${d.id}" ${d.id === state.activeDeviceId ? 'selected' : ''}>
        ${d.name} [${d.deviceType}]
      </option>
    `).join('');
  }
}

function setActiveScannerDevice(deviceId) {
  state.activeDeviceId = deviceId;
  state.activeDevice = state.devices.find(d => d.id === deviceId) || null;
  localStorage.setItem('spareparts_active_device_id', deviceId);

  updateDeviceStatsAndNavbar();
  renderDevicesGrid();
  populateDeviceDropdowns();

  if (state.activeDevice) {
    showToast(`${t('device_active_switched')} [${state.activeDevice.name}]`);
    playAudioTone(state.activeDevice.soundFeedback || 'BEEP_CHIME');
  }
}
window.setActiveScannerDevice = setActiveScannerDevice;

// Open Add Device Modal
function openAddDeviceModal() {
  const form = document.getElementById('addDeviceForm');
  if (form) form.reset();
  const modal = document.getElementById('addDeviceModal');
  if (modal) modal.classList.remove('hidden');
}
window.openAddDeviceModal = openAddDeviceModal;

// Quick 1-Click Device Presets
function applyDevicePreset(preset) {
  const nameEl = document.getElementById('newDeviceName');
  const typeEl = document.getElementById('newDeviceType');
  const portEl = document.getElementById('newDevicePort');
  const locEl = document.getElementById('newDeviceLocation');
  const actEl = document.getElementById('newDeviceAction');
  const sndEl = document.getElementById('newDeviceSound');
  const statEl = document.getElementById('newDeviceStatus');
  const notesEl = document.getElementById('newDeviceNotes');

  if (preset === 'honeywell') {
    if (nameEl) nameEl.value = 'Honeywell Xenon 1900 2D Scanner';
    if (typeEl) typeEl.value = 'HID_KEYBOARD';
    if (portEl) portEl.value = 'USB-HID-PORT-1';
    if (locEl) locEl.value = 'Receiving Dock A (رصيف الاستلام A)';
    if (actEl) actEl.value = 'LOOKUP';
    if (sndEl) sndEl.value = 'BEEP_CHIME';
    if (statEl) statEl.value = 'ACTIVE';
    if (notesEl) notesEl.value = 'High performance area-imaging handheld scanner';
  } else if (preset === 'zebra') {
    if (nameEl) nameEl.value = 'Zebra DS2208 Cordless Gun';
    if (typeEl) typeEl.value = 'HID_KEYBOARD';
    if (portEl) portEl.value = 'BT-PAIR-ZEBRA-01';
    if (locEl) locEl.value = 'Central Dispatch (طاولة الصرف المركزية)';
    if (actEl) actEl.value = 'LOOKUP';
    if (sndEl) sndEl.value = 'BEEP_HIGH';
    if (statEl) statEl.value = 'ACTIVE';
    if (notesEl) notesEl.value = 'General purpose 1D/2D wireless handheld barcode imager';
  } else if (preset === 'netum') {
    if (nameEl) nameEl.value = 'Netum C750 Bluetooth Pocket Scanner';
    if (typeEl) typeEl.value = 'HID_KEYBOARD';
    if (portEl) portEl.value = 'BT-HID-PAIR-02';
    if (locEl) locEl.value = 'Mobile Warehouse Cart (عربة المستودع المتنقلة)';
    if (actEl) actEl.value = 'FAST_ADD';
    if (sndEl) sndEl.value = 'BEEP_DIGITAL';
    if (statEl) statEl.value = 'ACTIVE';
    if (notesEl) notesEl.value = 'Pocket-sized wireless scanner for quick inventory receiving';
  } else if (preset === 'camera') {
    if (nameEl) nameEl.value = 'Industrial Overhead Vision Cam 01';
    if (typeEl) typeEl.value = 'CAMERA_FIXED';
    if (portEl) portEl.value = 'CAM-USB-UVC-01';
    if (locEl) locEl.value = 'Automated Conveyor / Sorting Station';
    if (actEl) actEl.value = 'LOOKUP';
    if (sndEl) sndEl.value = 'BEEP_CHIME';
    if (statEl) statEl.value = 'ACTIVE';
    if (notesEl) notesEl.value = 'Fixed mounted high-speed scanning inspection camera';
  } else if (preset === 'serial') {
    if (nameEl) nameEl.value = 'Datalogic Magellan Serial Scanner';
    if (typeEl) typeEl.value = 'WEB_SERIAL';
    if (portEl) portEl.value = 'COM3 (9600 Baud)';
    if (locEl) locEl.value = 'Spareparts Issue Counter (شباك التسليم)';
    if (actEl) actEl.value = 'LOOKUP';
    if (sndEl) sndEl.value = 'BEEP_DIGITAL';
    if (statEl) statEl.value = 'ACTIVE';
    if (notesEl) notesEl.value = 'Direct RS-232 / USB Serial COM connection at 9600-8-N-1';
  }
  showToast(state.lang === 'ar' ? 'تم تطبيق القالب الجاهز بنجاح! اضغط "حفظ وربط الجهاز"' : 'Preset applied! Click "Save & Pair Device"', 'info');
}
window.applyDevicePreset = applyDevicePreset;

// Add Device Submit
async function handleAddDevice(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('saveDeviceBtn');
  if (submitBtn) submitBtn.disabled = true;

  const payload = {
    name: document.getElementById('newDeviceName').value.trim(),
    deviceType: document.getElementById('newDeviceType').value,
    connectionPort: document.getElementById('newDevicePort').value.trim() || undefined,
    warehouseLocation: document.getElementById('newDeviceLocation').value.trim() || undefined,
    defaultAction: document.getElementById('newDeviceAction').value,
    soundFeedback: document.getElementById('newDeviceSound').value,
    status: document.getElementById('newDeviceStatus').value,
    notes: document.getElementById('newDeviceNotes').value.trim() || undefined,
  };

  try {
    const created = await apiRequest('/devices', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    showToast(`${t('device_created_success')} [${created.name}]`);
    document.getElementById('addDeviceModal').classList.add('hidden');
    document.getElementById('addDeviceForm').reset();

    await loadDevices();
    setActiveScannerDevice(created.id);
  } catch (err) {
    showToast(err.message, 'error');
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

// Edit Device
function openEditDeviceModal(deviceId) {
  const device = state.devices.find(d => d.id === deviceId);
  if (!device) return;

  document.getElementById('editDeviceId').value = device.id;
  document.getElementById('editDeviceName').value = device.name;
  document.getElementById('editDeviceType').value = device.deviceType || 'HID_KEYBOARD';
  document.getElementById('editDevicePort').value = device.connectionPort || '';
  document.getElementById('editDeviceLocation').value = device.warehouseLocation || '';
  document.getElementById('editDeviceAction').value = device.defaultAction || 'LOOKUP';
  document.getElementById('editDeviceSound').value = device.soundFeedback || 'BEEP_CHIME';
  document.getElementById('editDeviceStatus').value = device.status || 'ACTIVE';
  document.getElementById('editDeviceNotes').value = device.notes || '';

  document.getElementById('editDeviceModal').classList.remove('hidden');
}
window.openEditDeviceModal = openEditDeviceModal;

async function handleEditDevice(e) {
  e.preventDefault();
  const deviceId = document.getElementById('editDeviceId').value;
  const payload = {
    name: document.getElementById('editDeviceName').value.trim(),
    deviceType: document.getElementById('editDeviceType').value,
    connectionPort: document.getElementById('editDevicePort').value.trim(),
    warehouseLocation: document.getElementById('editDeviceLocation').value.trim(),
    defaultAction: document.getElementById('editDeviceAction').value,
    soundFeedback: document.getElementById('editDeviceSound').value,
    status: document.getElementById('editDeviceStatus').value,
    notes: document.getElementById('editDeviceNotes').value.trim(),
  };

  try {
    await apiRequest(`/devices/${deviceId}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });

    showToast(t('device_updated_success'));
    document.getElementById('editDeviceModal').classList.add('hidden');
    await loadDevices();
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// Delete Device
async function handleDeleteDevice(deviceId, deviceName) {
  if (!confirm(`هل أنت متأكد من رغبتك في حذف/إيقاف جهاز الماسح [${deviceName}]؟`)) return;

  try {
    await apiRequest(`/devices/${deviceId}`, { method: 'DELETE' });
    showToast(t('device_deleted_success'));
    await loadDevices();
  } catch (err) {
    showToast(err.message, 'error');
  }
}
window.handleDeleteDevice = handleDeleteDevice;

// Open Benchmark & Test Device Modal
function openTestDeviceModal(deviceId) {
  const device = state.devices.find(d => d.id === deviceId);
  if (!device) return;

  document.getElementById('testingModalDeviceId').value = device.id;
  document.getElementById('testModalSubtitle').textContent = `${device.name} (${device.connectionPort || 'USB-HID'})`;
  document.getElementById('testModalTypeBadge').textContent = device.deviceType;
  document.getElementById('testModalStatusBadge').textContent = device.status;
  document.getElementById('testModalLocation').textContent = `Location: ${device.warehouseLocation || 'Main Store'}`;
  document.getElementById('testModalLatencyDisplay').textContent = '-- ms';
  document.getElementById('modalTestScanInput').value = '';

  const terminalBody = document.getElementById('modalTestTerminalBody');
  if (terminalBody) {
    terminalBody.innerHTML = `<div class="terminal-log-line info">> Calibrating hardware stream for [${device.name}]... Ready.</div>`;
  }

  document.getElementById('testDeviceModal').classList.remove('hidden');
}
window.openTestDeviceModal = openTestDeviceModal;

// Run Device Calibration Test API
async function runDeviceCalibrationTest(deviceId, payloadText) {
  const clientStart = Date.now();
  try {
    const result = await apiRequest(`/devices/${deviceId}/test`, {
      method: 'POST',
      body: JSON.stringify({ testPayload: payloadText, clientLatency: 12 }),
    });

    const clientLatency = Math.max(1, Date.now() - clientStart);
    playAudioTone(result.soundFeedback || 'BEEP_CHIME');

    const latencyDisplay = document.getElementById('testModalLatencyDisplay');
    if (latencyDisplay) latencyDisplay.textContent = `${clientLatency} ms`;

    appendTerminalLog('modalTestTerminalBody', `> TEST_PULSE_OK: ${result.deviceName} responded in ${clientLatency}ms (Port: ${result.connectionPort})`, 'success');
    appendTerminalLog('calibrationTerminalBody', `> BENCHMARK [${result.deviceName}]: Latency = ${clientLatency}ms | Status = ONLINE`, 'success');

    showToast(`⚡ ${t('device_test_success')} (${clientLatency}ms)`);
  } catch (err) {
    playAudioTone('ERROR');
    appendTerminalLog('modalTestTerminalBody', `> TEST_FAILED: ${err.message}`, 'error');
    showToast(err.message, 'error');
  }
}
window.runDeviceCalibrationTest = runDeviceCalibrationTest;

// Terminal Log Helper
function appendTerminalLog(containerId, message, type = 'info') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const line = document.createElement('div');
  line.className = `terminal-log-line ${type}`;
  line.textContent = message;
  container.appendChild(line);

  container.scrollTop = container.scrollHeight;
}


// =========================================================
// ASSETS MANAGEMENT — إدارة أصول الشركة
// =========================================================

const ASSET_CATEGORIES = {
  vehicle:     '🚗 مركبة',
  electronics: '💻 إلكترونيات',
  furniture:   '🪑 أثاث',
  tools:       '🔧 أدوات',
  other:       '📦 أخرى',
};

const ASSET_STATUS = {
  active:   { label: 'نشط',           color: 'success' },
  inactive: { label: 'غير نشط',       color: 'secondary' },
  damaged:  { label: 'تالف',          color: 'danger' },
  lost:     { label: 'مفقود',         color: 'danger' },
  disposed: { label: 'مستغنى عنه',    color: 'secondary' },
};

/** تحميل قائمة الأصول */
async function loadAssets() {
  try {
    const category = document.getElementById('assetFilterCategory')?.value || '';
    const status   = document.getElementById('assetFilterStatus')?.value   || '';
    const search   = document.getElementById('assetSearch')?.value          || '';
    const params   = new URLSearchParams();
    if (category) params.set('category', category);
    if (status)   params.set('status',   status);
    if (search)   params.set('search',   search);

    const [assets, stats] = await Promise.all([
      apiRequest(`/assets?${params}`),
      apiRequest('/assets/stats'),
    ]);

    renderAssetStats(stats);
    renderAssetsTable(assets);

    const badge = document.getElementById('navAssetsCount');
    if (badge) { badge.textContent = stats.total; badge.style.display = stats.total ? 'inline-block' : 'none'; }
  } catch (err) {
    showToast(err.message || 'خطأ في تحميل الأصول', 'error');
  }
}
window.loadAssets = loadAssets;

/** رسم إحصائيات الأصول */
function renderAssetStats(s) {
  const el = document.getElementById('assetStats');
  if (!el) return;
  el.innerHTML = [
    { label: 'إجمالي الأصول', value: s.total,   icon: 'fa-building',      color: 'var(--primary)' },
    { label: 'نشطة',          value: s.active,  icon: 'fa-circle-check',   color: 'var(--success)' },
    { label: 'تالفة',         value: s.damaged, icon: 'fa-triangle-exclamation', color: 'var(--warning)' },
    { label: 'مفقودة',        value: s.lost,    icon: 'fa-circle-xmark',   color: 'var(--danger)' },
  ].map(x => `
    <div style="background:var(--card-bg);border:1px solid var(--border-color);border-radius:12px;padding:14px;text-align:center;">
      <i class="fa-solid ${esc(x.icon)}" style="font-size:1.4rem;color:${esc(x.color)};margin-bottom:6px;display:block;"></i>
      <div style="font-size:1.6rem;font-weight:900;color:${esc(x.color)};">${x.value}</div>
      <div style="font-size:0.75rem;color:var(--text-muted);">${esc(x.label)}</div>
    </div>`).join('');
}

/** رسم جدول الأصول */
function renderAssetsTable(assets) {
  const tbody = document.getElementById('assetsTableBody');
  if (!tbody) return;
  if (!assets.length) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:40px;color:var(--text-muted);">
      <i class="fa-solid fa-building" style="font-size:2rem;display:block;margin-bottom:8px;"></i>
      لا توجد أصول — اضغط "إضافة أصل" للبدء
    </td></tr>`;
    return;
  }

  tbody.innerHTML = assets.map(a => {
    const st  = ASSET_STATUS[a.status] || { label: a.status, color: 'secondary' };
    const cat = ASSET_CATEGORIES[a.category] || a.category;
    const val = a.purchaseValue ? parseFloat(a.purchaseValue).toLocaleString('ar') + ' ' + (a.currency || 'AED') : '-';
    const dt  = a.purchaseDate ? new Date(a.purchaseDate).toLocaleDateString('ar-SA') : '-';
    return `<tr>
      <td>
        <button class="btn btn-sm" style="background:var(--card-bg);border:1px solid var(--border-color);"
          onclick="showAssetQR('${a.id}')">
          <i class="fa-solid fa-qrcode" style="color:var(--primary);"></i>
        </button>
      </td>
      <td><span class="part-number-tag" style="background:rgba(124,58,237,0.15);color:#a78bfa;">${esc(a.assetNumber)}</span></td>
      <td>
        <strong>${esc(a.assetName)}</strong>
        ${a.brand ? `<div style="font-size:0.75rem;color:var(--text-muted);">${esc(a.brand)} ${esc(a.model||'')}</div>` : ''}
      </td>
      <td>${esc(cat)}</td>
      <td>
        ${a.location ? `<div><i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> ${esc(a.location)}</div>` : ''}
        ${a.assignedTo ? `<div style="font-size:0.8rem;color:var(--text-muted);"><i class="fa-solid fa-user"></i> ${esc(a.assignedTo)}</div>` : ''}
      </td>
      <td><small style="font-family:var(--font-mono);">${dt}</small></td>
      <td><strong>${esc(val)}</strong></td>
      <td><span class="badge badge-${esc(st.color)}">${esc(st.label)}</span></td>
      <td>
        <div style="display:flex;gap:4px;">
          <button class="btn btn-warning btn-sm" onclick="openEditAssetModal('${a.id}')" title="تعديل">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteAsset('${a.id}','${escJsAttr(a.assetName)}')" title="حذف">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

/** فتح modal إضافة أصل */
function openAddAssetModal() {
  document.getElementById('assetModalTitle').innerHTML = '<i class="fa-solid fa-plus"></i> إضافة أصل جديد';
  document.getElementById('assetModalId').value    = '';
  document.getElementById('assetFormName').value   = '';
  document.getElementById('assetFormNumber').value = '';
  document.getElementById('assetFormBrand').value  = '';
  document.getElementById('assetFormModel').value  = '';
  document.getElementById('assetFormSerial').value = '';
  document.getElementById('assetFormLocation').value  = '';
  document.getElementById('assetFormAssigned').value  = '';
  document.getElementById('assetFormDate').value   = '';
  document.getElementById('assetFormValue').value  = '';
  document.getElementById('assetFormSupplier').value = '';
  document.getElementById('assetFormNotes').value  = '';
  document.getElementById('assetFormCategory').value = 'electronics';
  document.getElementById('assetFormStatus').value   = 'active';
  document.getElementById('assetFormCurrency').value = 'AED';
  document.getElementById('assetModal').classList.remove('hidden');
}
window.openAddAssetModal = openAddAssetModal;

/** فتح modal تعديل أصل */
async function openEditAssetModal(id) {
  try {
    const a = await apiRequest(`/assets/${id}`);
    document.getElementById('assetModalTitle').innerHTML = '<i class="fa-solid fa-pen"></i> تعديل الأصل';
    document.getElementById('assetModalId').value    = a.id;
    document.getElementById('assetFormName').value   = a.assetName || '';
    document.getElementById('assetFormNumber').value = a.assetNumber || '';
    document.getElementById('assetFormBrand').value  = a.brand || '';
    document.getElementById('assetFormModel').value  = a.model || '';
    document.getElementById('assetFormSerial').value = a.serialNumber || '';
    document.getElementById('assetFormLocation').value  = a.location || '';
    document.getElementById('assetFormAssigned').value  = a.assignedTo || '';
    document.getElementById('assetFormDate').value   = a.purchaseDate || '';
    document.getElementById('assetFormValue').value  = a.purchaseValue || '';
    document.getElementById('assetFormSupplier').value = a.supplier || '';
    document.getElementById('assetFormNotes').value  = a.notes || '';
    document.getElementById('assetFormCategory').value = a.category || 'other';
    document.getElementById('assetFormStatus').value   = a.status || 'active';
    document.getElementById('assetFormCurrency').value = a.currency || 'AED';
    document.getElementById('assetModal').classList.remove('hidden');
  } catch (err) {
    showToast('فشل تحميل بيانات الأصل', 'error');
  }
}
window.openEditAssetModal = openEditAssetModal;

/** إغلاق modal */
function closeAssetModal() {
  document.getElementById('assetModal').classList.add('hidden');
}
window.closeAssetModal = closeAssetModal;

/** حفظ الأصل (إضافة أو تعديل) */
async function saveAsset() {
  const id = document.getElementById('assetModalId').value;
  const data = {
    assetName:     document.getElementById('assetFormName').value.trim(),
    assetNumber:   document.getElementById('assetFormNumber').value.trim() || undefined,
    category:      document.getElementById('assetFormCategory').value,
    brand:         document.getElementById('assetFormBrand').value.trim() || null,
    model:         document.getElementById('assetFormModel').value.trim() || null,
    serialNumber:  document.getElementById('assetFormSerial').value.trim() || null,
    location:      document.getElementById('assetFormLocation').value.trim() || null,
    assignedTo:    document.getElementById('assetFormAssigned').value.trim() || null,
    purchaseDate:  document.getElementById('assetFormDate').value || null,
    purchaseValue: document.getElementById('assetFormValue').value || null,
    currency:      document.getElementById('assetFormCurrency').value,
    supplier:      document.getElementById('assetFormSupplier').value.trim() || null,
    status:        document.getElementById('assetFormStatus').value,
    notes:         document.getElementById('assetFormNotes').value.trim() || null,
  };

  if (!data.assetName) { showToast('اسم الأصل مطلوب', 'warning'); return; }

  try {
    if (id) {
      await apiRequest(`/assets/${id}`, { method: 'PUT', body: JSON.stringify(data) });
      showToast('تم تحديث الأصل بنجاح', 'success');
    } else {
      await apiRequest('/assets', { method: 'POST', body: JSON.stringify(data) });
      showToast('تم إضافة الأصل بنجاح', 'success');
    }
    closeAssetModal();
    loadAssets();
  } catch (err) {
    showToast(err.message || 'فشل الحفظ', 'error');
  }
}
window.saveAsset = saveAsset;

/** عرض QR الأصل */
async function showAssetQR(id) {
  try {
    const data = await apiRequest(`/assets/${id}/qrcode`);
    const el = document.getElementById('assetQrContent');
    el.innerHTML = `
      <div style="margin-bottom:10px;">
        <span class="part-number-tag" style="background:rgba(124,58,237,0.15);color:#a78bfa;">${esc(data.assetNumber)}</span>
      </div>
      <img src="${data.qrImage}" alt="QR" style="width:200px;height:200px;border-radius:10px;border:2px solid var(--border-color);">
      <p style="margin-top:10px;font-size:0.8rem;color:var(--text-muted);">امسح لعرض تفاصيل الأصل</p>`;
    document.getElementById('assetQrModal').classList.remove('hidden');
    // حفظ بيانات للطباعة
    document.getElementById('assetQrModal').dataset.qrImg    = data.qrImage;
    document.getElementById('assetQrModal').dataset.assetNum = data.assetNumber;
  } catch (err) {
    showToast('فشل توليد QR', 'error');
  }
}
window.showAssetQR = showAssetQR;

/** طباعة QR الأصل */
function printAssetQR() {
  const modal  = document.getElementById('assetQrModal');
  const qrImg  = modal.dataset.qrImg    || '';
  const assetNum = modal.dataset.assetNum || '';
  const win = window.open('', '_blank', 'width=400,height=500');
  if (!win) { showToast('الرجاء السماح بالنوافذ المنبثقة', 'warning'); return; }
  win.document.write(`<!DOCTYPE html><html lang="ar" dir="rtl"><head>
    <meta charset="UTF-8"><title>QR — ${esc(assetNum)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&display=swap" rel="stylesheet">
    <style>
      body{font-family:Cairo,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:#fff;gap:12px;}
      .num{background:#ede9fe;color:#7c3aed;padding:4px 16px;border-radius:20px;font-weight:900;font-family:monospace;font-size:1rem;}
      img{width:200px;height:200px;border:2px solid #1e3a8a;border-radius:8px;}
      p{font-size:0.8rem;color:#64748b;}
    </style>
  </head><body>
    <div class="num">${esc(assetNum)}</div>
    <img src="${qrImg}" alt="QR">
    <p>Access Lion Warehouses — أصول الشركة</p>
    <script>window.onload=function(){window.print();}<\/script>
  </body></html>`);
  win.document.close();
}
window.printAssetQR = printAssetQR;

/** حذف أصل */
async function deleteAsset(id, name) {
  if (!confirm(`هل أنت متأكد من حذف الأصل: ${name}؟`)) return;
  try {
    await apiRequest(`/assets/${id}`, { method: 'DELETE' });
    showToast('تم حذف الأصل', 'success');
    loadAssets();
  } catch (err) {
    showToast(err.message || 'فشل الحذف', 'error');
  }
}
window.deleteAsset = deleteAsset;

