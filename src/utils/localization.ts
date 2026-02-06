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
};

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
  },
  ru: {
    home: "/ru/",
    tools: "/ru/instrumenty",
    blog: "/ru/blog",
    about: "/ru/o-nas",
    contact: "/ru/kontakty",
    privacy: "/ru/politika-konfidencialnosti",
    terms: "/ru/usloviya",
    disclaimer: "/ru/otkaz-ot-otvetstvennosti",
    cookies: "/ru/cookie-policy", // Simplified/placeholder as /ru usually uses same
  },
};

export const TOOL_UI_LABELS = {
  en: {
    uploadTitle: "Upload PDF",
    uploadHint: "Maximum file size: 5 MB",
    uploadHint2: "Drag & drop your PDF here, or click to browse.",
    chooseFile: "Choose file",
    dropHere: "Drop the file here",
    supported: "Only PDF files are supported",

    compressingTitle: "Compressing your PDF...",
    optimizing: "Optimizing to reach your target...",
    attempt: "Attempt",
    target: "Target",

    originalSize: "Original size",
    selectedLimit: "Selected limit",
    finalSize: "Final size",
    attempts: "Attempts",
    saved: "Saved",

    download: "Download",
    tryAgain: "Try again",
    reset: "Upload another file",

    toastUploadError: "Please upload a valid PDF file.",
    toastTooLarge: "File is too large. Maximum allowed size is 5 MB.",
    toastCompressFailed: "Compression failed. Please try again.",
    toastNetworkError: "Network error. Please try again.",
    toastDone: "Done!",

    removeMetadataTitle: "Remove Metadata",
    removeMetadataDesc:
      "Remove hidden info like author name, created date, and software details.",
    removingMetadata: "Removing metadata...",
    metadataRemoved: "Metadata removed successfully!",
  },

  ru: {
    uploadTitle: "Загрузить PDF",
    uploadHint: "Максимальный размер файла: 5 МБ",
    uploadHint2: "Перетащите PDF сюда или нажмите, чтобы выбрать файл.",
    chooseFile: "Выбрать файл",
    dropHere: "Отпустите файл здесь",
    supported: "Поддерживаются только PDF файлы",

    compressingTitle: "Сжимаем ваш PDF…",
    optimizing: "Подбираем оптимальный размер под ваш лимит…",
    attempt: "Попытка",
    target: "Цель",

    originalSize: "Исходный размер",
    selectedLimit: "Выбранный лимит",
    finalSize: "Итоговый размер",
    attempts: "Количество попыток",
    saved: "Экономия",

    download: "Скачать",
    tryAgain: "Попробовать ещё раз",
    reset: "Загрузить другой файл",

    toastUploadError: "Пожалуйста, загрузите корректный PDF файл.",
    toastTooLarge: "Файл слишком большой. Максимум — 5 МБ.",
    toastCompressFailed: "Не удалось сжать PDF. Попробуйте ещё раз.",
    toastNetworkError: "Проблема с сетью. Попробуйте снова.",
    toastDone: "Готово!",

    removeMetadataTitle: "Удалить метаданные",
    removeMetadataDesc:
      "Удалите скрытую информацию: автора, дату создания, название программы и др.",
    removingMetadata: "Удаляем метаданные…",
    metadataRemoved: "Метаданные успешно удалены!",
  },
};

export const CONTACT_EMAIL = "himanshucareer01@gmail.com";

export const PAGE_TITLES: Record<string, string> = {
  "/ru": "Главная",
  "/ru/instrumenty": "Инструменты",
  "/ru/blog": "Блог",
  "/ru/o-nas": "О нас",
  "/ru/kontakty": "Контакты",
  "/ru/politika-konfidencialnosti": "Политика конфиденциальности",
  "/ru/usloviya": "Условия использования",
  "/ru/otkaz-ot-otvetstvennosti": "Отказ от ответственности",
  "/ru/szhat-pdf": "Сжать PDF",
  "/ru/szhat-pdf-do-50kb": "Сжать PDF до 50 КБ",
  "/ru/szhat-pdf-do-100kb": "Сжать PDF до 100 КБ",
  "/ru/szhat-pdf-do-150kb": "Сжать PDF до 150 КБ",
  "/ru/szhat-pdf-do-200kb": "Сжать PDF до 200 КБ",
  "/ru/szhat-pdf-do-500kb": "Сжать PDF до 500 КБ",
  "/ru/szhat-pdf-do-1mb": "Сжать PDF до 1 МБ",
  "/ru/umenshit-razmer-pdf-do-500kb": "Уменьшить размер PDF до 500 КБ",
  "/ru/szhat-skanirovannyj-pdf": "Сжать сканированный PDF",
  "/ru/szhat-skanirovannyj-pdf-do-200kb": "Сжать скан до 200 КБ",
  "/ru/udalit-metadannye-pdf": "Удалить метаданные",
};

export type Language = "en" | "ru";

export function getLanguage(pathname: string): Language {
  return pathname.startsWith("/ru") ? "ru" : "en";
}
