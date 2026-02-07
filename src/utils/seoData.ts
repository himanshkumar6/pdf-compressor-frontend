export type FAQItem = {
  question: string;
  answer: string;
};

export type PageSEO = {
  title: string;
  description: string;
  canonical: string;
  siteName?: string;
  faqs?: FAQItem[];
  jsonLd?: {
    name: string;
    url: string;
    description: string;
    applicationCategory?: string;
    operatingSystem?: string;
  };
};

import {
  SITE_CONFIG,
  SEO_METADATA,
  RU_METADATA,
  BLOG_METADATA,
} from "../data/metadata.js";

export const SITE = {
  siteName: SITE_CONFIG.name,
  baseUrl: SITE_CONFIG.baseUrl,
};

/* ✅ BACKWARD COMPATIBILITY (Old code won’t break) */
export const DEFAULT_SEO = {
  title: SEO_METADATA["/"].title,
  description: SEO_METADATA["/"].description,
  canonical: `${SITE.baseUrl}/`,
  siteName: SITE.siteName,
};

/** SEO for 404 page: single h1, meta title/description, canonical to homepage */
export const NOT_FOUND_SEO: PageSEO = {
  title: "404 - Page Not Found | Compress PDF to 200KB",
  description:
    "The page you requested was not found. Use our free PDF compressor to reduce PDF size to 200KB for forms, job portals and government uploads.",
  canonical: `${SITE.baseUrl}/`,
  jsonLd: {
    name: "Compress PDF to 200KB",
    url: `${SITE.baseUrl}/`,
    description: "Free online PDF compression tool.",
  },
};

/* ✅ Old FAQ export used in FAQ component */
export const FAQ_DATA: FAQItem[] = [
  {
    question: "How can I compress a PDF to 200KB without losing quality?",
    answer:
      "Our tool uses browser-based optimization to reduce PDF size while maintaining readability and clarity.",
  },
  {
    question: "Is it safe to compress my PDFs here?",
    answer:
      "Yes. Your files are processed locally in your browser and never uploaded to any server.",
  },
  {
    question: "What if my PDF is still larger than 200KB?",
    answer:
      "Some PDFs contain high-resolution images. We apply maximum safe compression while keeping it readable.",
  },
  {
    question: "Is it free to compress PDF?",
    answer: "Yes, this tool is free to use.",
  },
  {
    question: "Can I compress PDF on mobile?",
    answer: "Yes, it works on Android and iPhone browsers.",
  },
];

/* ✅ Russian FAQ data */
export const RU_FAQ_DATA: FAQItem[] = [
  {
    question: "Как сжать PDF до 200 КБ без потери качества?",
    answer:
      "Наш инструмент использует браузерные технологии оптимизации. Мы удаляем лишние метаданные, сжимаем изображения и оптимизируем структуру файла, чтобы максимально уменьшить размер, сохранив текст четким и читаемым.",
  },
  {
    question: "Безопасно ли сжимать документы здесь?",
    answer:
      "Абсолютно. В отличие от других сервисов, наш инструмент работает на 100% в вашем браузере. Ваши конфиденциальные документы не загружаются на сервер, а значит, никто, кроме вас, не имеет к ним доступа.",
  },
  {
    question: "Почему мой файл все еще больше 200 КБ?",
    answer:
      "Если в PDF очень много изображений высокого разрешения, сжатие до экстремально малого размера может повредить качеству. Попробуйте наш специальный инструмент 'Сжать до 200 КБ', который применяет более агрессивную оптимизацию.",
  },
  {
    question: "Нужно ли платить за сжатие?",
    answer:
      "Нет, сервис полностью бесплатен. Мы не требуем регистрации, подписки или ввода данных карты.",
  },
  {
    question: "Работает ли сервис на мобильных телефонах?",
    answer:
      "Да, наш сайт адаптирован для всех современных браузеров на Android и iOS. Вы можете сжать PDF прямо со своего смартфона без установки приложений.",
  },
  {
    question: "Можно ли сжать отсканированный PDF?",
    answer:
      "Да. Для сканов мы рекомендуем использовать инструмент 'Сжать сканированный PDF', который специально оптимизирован для работы с тяжелыми изображениями страниц.",
  },
  {
    question: "Какие лимиты размера файла на входе?",
    answer:
      "На текущий момент мы поддерживаем файлы до 5 МБ. Этого достаточно для большинства документов, резюме и заявлений.",
  },
  {
    question: "Портит ли сжатие текст в PDF?",
    answer:
      "Нет, текстовый слой остается нетронутым в векторном формате. Мы оптимизируем только изображения и внутренние объекты PDF, поэтому текст останется четким при любом масштабе.",
  },
  {
    question: "Примут ли сжатый файл на Госуслугах?",
    answer:
      "Да, наши файлы соответствуют техническим требованиям большинства государственных порталов России и СНГ по формату и структуре.",
  },
  {
    question: "Как удалить автора и дату создания из PDF?",
    answer:
      "Воспользуйтесь нашим инструментом 'Удалить метаданные'. Он полностью очищает документ от скрытой информации, сохраняя при этом основной контент.",
  },
];

/* ✅ Old getJsonLd used by existing pages */
export const getJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Compress PDF Tool",
  url: SITE.baseUrl,
  description:
    "Free tool to compress PDF online and reduce PDF size quickly without uploading files to server.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
});

/* ✅ New page SEO system (for 6 landing pages) */
// ✅ Dynamic Map from Metadata
export const PAGES_SEO: Record<string, PageSEO> = {};

// 1. Map Main & Tool Routes
Object.entries(SEO_METADATA).forEach(([route, data]) => {
  const meta = data as any;
  PAGES_SEO[route] = {
    title: meta.title,
    description: meta.description,
    canonical: `${SITE.baseUrl}${route === "/" ? "" : route}`,
    jsonLd: {
      name: meta.h1,
      url: `${SITE.baseUrl}${route === "/" ? "" : route}`,
      description: meta.description,
    },
  };
});

// 2. Map Russian Routes
Object.entries(RU_METADATA).forEach(([route, data]) => {
  const meta = data as any;
  PAGES_SEO[route] = {
    title: meta.title,
    description: meta.description,
    canonical: `${SITE.baseUrl}${route}`,
    jsonLd: {
      name: meta.h1,
      url: `${SITE.baseUrl}${route}`,
      description: meta.description,
    },
  };
});

// 3. Map Blog Routes
Object.entries(BLOG_METADATA).forEach(([slug, data]) => {
  const meta = data as any;
  const route = `/blog/${slug}`;
  PAGES_SEO[route] = {
    title: meta.title,
    description: meta.description,
    canonical: `${SITE.baseUrl}${route}`,
    jsonLd: {
      name: meta.h1,
      url: `${SITE.baseUrl}${route}`,
      description: meta.description,
    },
  };
});

/**
 * Global safe fallback for page SEO.
 * Prevents "Cannot read properties of undefined" crashes.
 */
export const getPageSeo = (path: string): PageSEO => {
  // Normalize path (remove trailing slash)
  const key = path === "/" ? "/" : path.replace(/\/$/, "");

  if (PAGES_SEO[key]) {
    return PAGES_SEO[key];
  }

  // Fallback to home or default
  return PAGES_SEO["/"] || DEFAULT_SEO;
};

export const buildWebAppJsonLd = (page: PageSEO) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: page.jsonLd?.name ?? "Compress PDF Tool",
  url: page.jsonLd?.url ?? SITE.baseUrl,
  description: page.jsonLd?.description ?? page.description,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
});

export const buildFAQJsonLd = (faqs: FAQItem[] = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
});
