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
    question: "How do I ensure my PDF is exactly under 200KB?",
    answer: "Our tool allows you to target specific size limits. It uses advanced compression to get your file as close to the limit as possible while ensuring it stays below it for successful portal uploads.",
  },
  {
    question: "Will the text in my PDF remain readable after compression?",
    answer: "Yes. Our optimization engine focuses on reducing image size and stripping unnecessary metadata while preserving text clarity, ensuring your document passes official review.",
  },
  {
    question: "Is it safe to compress sensitive documents (Aadhaar, Passport) here?",
    answer: "Absolutely. Processing happens entirely in your browser. Your sensitive documents never touch our servers, providing 100% privacy and security for your official IDs.",
  },
  {
    question: "Why does my government portal still say 'File Too Large'?",
    answer: "Some portals have very strict limits. If 200KB is still too large, try our 100KB or 50KB tools. Also, ensure you are not uploading a password-protected PDF.",
  },
  {
    question: "Can I use this PDF compressor on my mobile phone?",
    answer: "Yes, our tool is fully responsive and works perfectly on Android and iPhone browsers, making it easy to resize documents on the go for quick uploads.",
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// 4. Map Spanish Routes
Object.entries(SEO_METADATA).forEach(([route, data]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meta = data as any;
  PAGES_SEO[route] = {
    ...meta,
    canonical: `${SITE.baseUrl}${route}`,
    jsonLd: {
      name: meta.h1,
      url: `${SITE.baseUrl}${route}`,
      description: meta.description,
    },
  };
});

// 5. Programmatic SEO Pages
PAGES_SEO["/compress-pdf-to-50kb"] = {
  title: "Compress PDF to 50kb Online - Resize Signature for Exams",
  description:
    "Free tool to compress PDF to 50kb online. Perfect for resizing Scanned Signatures, Passport Photos, and Documents for SSC, UPSC, and IBPS forms.",
  canonical: `${SITE.baseUrl}/compress-pdf-to-50kb`,
  jsonLd: {
    name: "Compress PDF to 50KB",
    url: `${SITE.baseUrl}/compress-pdf-to-50kb`,
    description:
      "Free tool to compress PDF to 50kb online for SSC, UPSC and Govt exams.",
  },
};
PAGES_SEO["/compress-pdf-to-100kb"] = {
  title: "Compress PDF to 100KB Online Free (No Quality Loss) – Instant Tool",
  description:
    "Need to compress PDF to 100KB for government or job forms? Reduce file size instantly without losing quality. 100% free, secure, and no signup required.",
  canonical: `${SITE.baseUrl}/compress-pdf-to-100kb`,
  jsonLd: {
    name: "Compress PDF to 100KB Online Free",
    url: `${SITE.baseUrl}/compress-pdf-to-100kb`,
    description:
      "Instantly compress PDF to 100KB for job applications, SSC, UPSC and official forms. Free, fast and secure.",
  },
};

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

export const buildOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CompressPDFto200KB.online",
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}/logo.png`,
});

export const buildWebAppJsonLd = (page: PageSEO) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: page.jsonLd?.name ?? "Compress PDF to 200KB Online",
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
