// utils/localization.ts

export type Language = "en" | "ru" | "es";

/* ---------------- NAV LABELS ---------------- */

export const NAV_LABELS = {
  en: {
    brand: "Compress PDF",
    home: "Home",
    tools: "Tools",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    disclaimer: "Disclaimer",
    cookies: "Cookie Policy",
  },
  ru: {
    brand: "Сжать PDF",
    home: "Главная",
    tools: "Инструменты",
    blog: "Блог",
    about: "О нас",
    contact: "Контакты",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    disclaimer: "Отказ от ответственности",
    cookies: "Политика использования куки",
  },
  es: {
    brand: "Comprimir PDF",
    home: "Inicio",
    tools: "Herramientas",
    blog: "Blog",
    about: "Sobre nosotros",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    disclaimer: "Descargo de responsabilidad",
    cookies: "Cookies",
  },
} as const;

/* ---------------- ROUTES ---------------- */

export const ROUTE_MAP = {
  en: {
    home: "/",
    tools: "/tools",
    blog: "/blog",
    about: "/about",
    contact: "/contact",
    privacy: "/privacy-policy",
    terms: "/terms-conditions",
    disclaimer: "/disclaimer",
    cookies: "/cookies-policy",
    cta: "/tools",
  },
  ru: {
    home: "/ru",
    tools: "/ru/instrumenty",
    blog: "/ru/blog",
    about: "/ru/o-nas",
    contact: "/ru/kontakty",
    privacy: "/ru/politika-konfidencialnosti",
    terms: "/ru/usloviya",
    disclaimer: "/ru/otkaz-ot-otvetstvennosti",
    cookies: "/ru/cookie-policy",
    cta: "/ru/instrumenty",
  },
  es: {
    home: "/es/dividir-pdf-en-varias-partes-online",
    tools: "/es/dividir-pdf-en-varias-partes-online",
    blog: "/blog",
    about: "/about",
    contact: "/contact",
    privacy: "/privacy-policy",
    terms: "/terms-conditions",
    disclaimer: "/disclaimer",
    cookies: "/cookies-policy",
    cta: "/es/dividir-pdf-en-varias-partes-online",
  },
} as const;

/* ---------------- CRUD LABELS ---------------- */

export const CRUD_LABELS = {
  en: {
    home: "Home",
    article: "Article",
    page: "Page",
    cta: "Try Free",
  },
  ru: {
    home: "Главная",
    article: "Статья",
    page: "Страница",
    cta: "Попробовать",
  },
  es: {
    home: "Inicio",
    article: "Artículo",
    page: "Página",
    cta: "Probar Gratis",
  },
} as const;

/* ---------------- PAGE TITLES (SEO / BREADCRUMBS ONLY) ---------------- */

export const PAGE_TITLES = {
  en: {
    "/": "Home",
    "/about": "About Us",
    "/contact": "Contact Us",
    "/privacy-policy": "Privacy Policy",
    "/terms-conditions": "Terms & Conditions",
    "/disclaimer": "Disclaimer",
    "/cookies-policy": "Cookie Policy",
    "/tools": "All Tools",

    "/compress-pdf": "Compress PDF",
    "/compress-pdf-to-200kb": "Compress PDF to 200KB",
    "/pdf-to-jpg": "PDF to JPG",
    "/jpg-to-pdf": "JPG to PDF",
    "/merge-pdf": "Merge PDF",
    "/split-pdf": "Split PDF",
    "/edit-pdf": "Edit PDF",
    "/flipkart-label-cropper": "Flipkart Label Cropper",
    "/meesho-label-cropper": "Meesho Label Cropper",
  },
  ru: {
    "/ru": "Главная",
    "/ru/instrumenty": "Инструменты",
    "/ru/blog": "Блог",
    "/ru/o-nas": "О нас",
    "/ru/kontakty": "Контакты",
    "/ru/politika-konfidencialnosti": "Политика конфиденциальности",
    "/ru/usloviya": "Условия использования",
    "/ru/otkaz-ot-otvetstvennosti": "Отказ от ответственности",
    "/ru/cookie-policy": "Политика использования куки",

    "/ru/szhat-pdf": "Сжать PDF",
    "/ru/szhat-pdf-do-200kb": "Сжать PDF до 200 КБ",
    "/ru/pdf-v-jpg": "PDF в JPG",
    "/ru/jpg-v-pdf": "JPG в PDF",
    "/ru/obedinit-pdf": "Объединить PDF",
    "/ru/razdelit-pdf": "Разделить PDF",
    "/ru/redaktirovat-pdf": "Редактировать PDF",
    "/ru/flipkart-label-cropper": "Flipkart Label Cropper",
    "/ru/meesho-label-cropper": "Meesho Label Cropper",
  },
  es: {
    "/es/dividir-pdf-en-varias-partes-online": "Dividir PDF",
  },
} as const;

/* ---------------- TOOL UI LABELS (RESULT CARD / UI) ---------------- */

export const TOOL_UI_LABELS = {
  en: {
    originalSize: "Original size",
    finalSize: "Final size",
    attempts: "Attempts",
    saved: "Saved",
    download: "Download",
    reset: "Upload another file",
    
    // Toasts
    toastTooLarge: "File is too large (max 5MB)",
    toastUploadError: "This is not a PDF file",
    toastDone: "Compression complete!",
    toastCompressFailed: "Compression failed",
    toastNetworkError: "Network error. Please try again.",

    // Split
    splitSelect: "Select PDF to Split",
    splitPreview: "Preview pages and select range visually",
    splitLoading: "Loading previews...",
    splitExtract: "Extract Page(s)",
    splitExtracting: "Extracting...",
    splitPlaceholder: "e.g. 1-5, 8",
    splitPages: "Pages",

    // Upload
    uploadTitle: "Click to Select PDF",
    uploadHint: "or drag and drop PDF file here",
    uploadHint2: "Max size: 5MB. Files are processed locally.",

    // Processing
    compressingTitle: "Compressing PDF...",
    attempt: "Attempt",
    optimizing: "Optimizing content structure...",
    warnLargeFile: "⚠️ Large file: may take 30–120 seconds",
    veryLargeFile: "Very large PDF — may take 1–2 minutes.",
    largeFile: "Large PDF — please wait.",
    trustMain: "We always compress under your selected limit.",
    trustSub: "Final size may be lower depending on PDF content.",
    targetLimit: "Target:",

    // FAQ
    faqTitle: "FAQs",
    faqSub: "Quick answers for common doubts.",

    // Metadata Tool
    removeMetadataTitle: "Remove PDF Metadata",
    removeMetadataDesc: "Clean hidden properties from your file.",
    chooseFile: "Choose PDF",
    removingMetadata: "Cleaning...",
    metadataRemoved: "Metadata removed successfully",
    downloadClean: "Download Clean PDF",
  },
  ru: {
    originalSize: "Исходный размер",
    finalSize: "Итоговый размер",
    attempts: "Попытки",
    saved: "Экономия",
    download: "Скачать",
    reset: "Загрузить другой файл",

    // Toasts
    toastTooLarge: "Файл слишком большой (макс. 5 МБ)",
    toastUploadError: "Это не PDF файл",
    toastDone: "Сжатие завершено!",
    toastCompressFailed: "Ошибка сжатия",
    toastNetworkError: "Ошибка сети. Попробуйте снова.",

    // Upload
    uploadTitle: "Нажмите для выбора PDF",
    uploadHint: "или перетащите файл сюда",
    uploadHint2: "Макс. размер: 5 МБ. Обработка на устройстве.",

    // Processing
    compressingTitle: "Сжимаем PDF...",
    attempt: "Попытка",
    optimizing: "Оптимизация структуры...",
    warnLargeFile: "⚠️ Большой файл: может занять 30–120 секунд",
    veryLargeFile: "Очень большой PDF — может занять 1–2 минуты.",
    largeFile: "Большой PDF — пожалуйста, подождите.",
    trustMain: "Всегда сжимаем до выбранного вами лимита.",
    trustSub: "Итоговый размер может быть меньше в зависимости от контента PDF.",
    targetLimit: "Цель: до",

    // Split
    splitSelect: "Выберите PDF для разделения",
    splitPreview: "Предварительный просмотр и выбор страниц",
    splitLoading: "Загрузка превью...",
    splitExtract: "Извлечь страницы",
    splitExtracting: "Извлечение...",
    splitPlaceholder: "напр. 1-5, 8",
    splitPages: "страниц",

    // FAQ
    faqTitle: "FAQs",
    faqSub: "Ответы на частые вопросы.",

    // Metadata Tool
    removeMetadataTitle: "Удалить метаданные PDF",
    removeMetadataDesc: "Очистка скрытых свойств файла.",
    chooseFile: "Выбрать PDF",
    removingMetadata: "Очистка...",
    metadataRemoved: "Метаданные успешно удалены",
    downloadClean: "Скачать чистый PDF",
  },
  es: {
    originalSize: "Tamaño original",
    finalSize: "Tamaño final",
    attempts: "Intentos",
    saved: "Ahorrado",
    download: "Descargar",
    reset: "Subir otro archivo",

    // Toasts
    toastTooLarge: "Archivo demasiado grande (máx 5MB)",
    toastUploadError: "Esto no es un archivo PDF",
    toastDone: "¡Proceso completado!",
    toastCompressFailed: "Error al procesar",
    toastNetworkError: "Error de red. Inténtalo de nuevo.",

    // Split
    splitSelect: "Selecciona el PDF para dividir",
    splitPreview: "Mira las páginas y elige cuáles quieres",
    splitLoading: "Cargando miniaturas...",
    splitExtract: "Extraer página(s)",
    splitExtracting: "Extrayendo...",
    splitPlaceholder: "ej. 1-5, 8",
    splitPages: "Páginas",

    // Upload
    uploadTitle: "Pulsa para elegir PDF",
    uploadHint: "o arrastra el archivo aquí",
    uploadHint2: "Máx 5MB. Todo se procesa en tu navegador.",

    // Processing
    compressingTitle: "Procesando PDF...",
    attempt: "Intento",
    optimizing: "Optimizando el archivo...",
    warnLargeFile: "⚠️ Archivo grande: puede tardar 30-120 segundos",
    veryLargeFile: "PDF muy grande — puede tardar 1-2 minutos.",
    largeFile: "PDF grande — por favor, espera.",
    trustMain: "Siempre comprimimos por debajo del límite seleccionado.",
    trustSub: "El tamaño final puede ser menor dependiendo del contenido del PDF.",
    targetLimit: "Objetivo:",

    // FAQ
    faqTitle: "Preguntas Frecuentes",
    faqSub: "Respuestas rápidas a las dudas más comunes.",

    // Metadata Tool
    removeMetadataTitle: "Eliminar metadatos PDF",
    removeMetadataDesc: "Limpia las propiedades ocultas del archivo.",
    chooseFile: "Elegir PDF",
    removingMetadata: "Limpiando...",
    metadataRemoved: "Metadatos eliminados con éxito",
    downloadClean: "Descargar PDF limpio",
  },
} as const;

/* ---------------- HELPERS ---------------- */

export function getLanguage(pathname: string): Language {
  if (pathname.startsWith("/ru")) return "ru";
  if (pathname.startsWith("/es")) return "es";
  return "en";
}

/**
 * HARD LOCALE GUARD
 * RU → only /ru links allowed
 */
export function getLocalizedRouteGuard(
  targetPath: string,
  currentLocale: Language
): string {
  // Russian Guard
  if (currentLocale === "ru" && !targetPath.startsWith("/ru")) {
    console.error(`🚨 LOCALE LEAK BLOCKED (RU): ${targetPath}`);
    return "/ru";
  }

  // Spanish Guard (Only one path allowed)
  const ES_TARGET = "/es/dividir-pdf-en-varias-partes-online";
  if (currentLocale === "es" && targetPath.startsWith("/es") && targetPath !== ES_TARGET) {
    console.error(`🚨 LOCALE LEAK BLOCKED (ES): ${targetPath}`);
    return ES_TARGET;
  }

  return targetPath;
}
/* ---------------- CONTACT ---------------- */

export const CONTACT_EMAIL = "himanshucareer01@gmail.com";
