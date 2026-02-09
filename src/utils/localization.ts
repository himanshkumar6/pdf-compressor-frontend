// utils/localization.ts

export type Language = "en" | "ru";

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

    // Upload
    uploadTitle: "Click to Select PDF",
    uploadHint: "or drag and drop PDF file here",
    uploadHint2: "Max size: 5MB. Files are processed locally.",

    // Processing
    compressingTitle: "Compressing PDF...",
    attempt: "Attempt",
    optimizing: "Optimizing content structure...",
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
  },
} as const;

/* ---------------- HELPERS ---------------- */

export function getLanguage(pathname: string): Language {
  return pathname.startsWith("/ru") ? "ru" : "en";
}

/**
 * HARD LOCALE GUARD
 * RU → only /ru links allowed
 */
export function getLocalizedRouteGuard(
  targetPath: string,
  currentLocale: Language
): string {
  if (currentLocale === "ru" && !targetPath.startsWith("/ru")) {
    console.error(`🚨 LOCALE LEAK BLOCKED: ${targetPath}`);
    return "/ru";
  }
  return targetPath;
}
/* ---------------- CONTACT ---------------- */

export const CONTACT_EMAIL = "himanshucareer01@gmail.com";
