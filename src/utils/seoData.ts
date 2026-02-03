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
  };
};

export const SITE = {
  siteName: "CompressPDF",
  baseUrl: "https://compresspdfto200kb.online",
};

/* ✅ BACKWARD COMPATIBILITY (Old code won’t break) */
export const DEFAULT_SEO = {
  title: "Compress PDF Online Free | Reduce PDF Size Instantly",
  description:
    "Free, fast and secure PDF compressor. Reduce PDF size instantly with browser-only processing. No signup required.",
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
    answer: "Наш инструмент использует браузерные технологии оптимизации. Мы удаляем лишние метаданные, сжимаем изображения и оптимизируем структуру файла, чтобы максимально уменьшить размер, сохранив текст четким и читаемым.",
  },
  {
    question: "Безопасно ли сжимать документы здесь?",
    answer: "Абсолютно. В отличие от других сервисов, наш инструмент работает на 100% в вашем браузере. Ваши конфиденциальные документы не загружаются на сервер, а значит, никто, кроме вас, не имеет к ним доступа.",
  },
  {
    question: "Почему мой файл все еще больше 200 КБ?",
    answer: "Если в PDF очень много изображений высокого разрешения, сжатие до экстремально малого размера может повредить качеству. Попробуйте наш специальный инструмент 'Сжать до 200 КБ', который применяет более агрессивную оптимизацию.",
  },
  {
    question: "Нужно ли платить за сжатие?",
    answer: "Нет, сервис полностью бесплатен. Мы не требуем регистрации, подписки или ввода данных карты.",
  },
  {
    question: "Работает ли сервис на мобильных телефонах?",
    answer: "Да, наш сайт адаптирован для всех современных браузеров на Android и iOS. Вы можете сжать PDF прямо со своего смартфона без установки приложений.",
  },
  {
    question: "Можно ли сжать отсканированный PDF?",
    answer: "Да. Для сканов мы рекомендуем использовать инструмент 'Сжать сканированный PDF', который специально оптимизирован для работы с тяжелыми изображениями страниц.",
  },
  {
    question: "Какие лимиты размера файла на входе?",
    answer: "На текущий момент мы поддерживаем файлы до 5 МБ. Этого достаточно для большинства документов, резюме и заявлений.",
  },
  {
    question: "Портит ли сжатие текст в PDF?",
    answer: "Нет, текстовый слой остается нетронутым в векторном формате. Мы оптимизируем только изображения и внутренние объекты PDF, поэтому текст останется четким при любом масштабе.",
  },
  {
    question: "Примут ли сжатый файл на Госуслугах?",
    answer: "Да, наши файлы соответствуют техническим требованиям большинства государственных порталов России и СНГ по формату и структуре.",
  },
  {
    question: "Как удалить автора и дату создания из PDF?",
    answer: "Воспользуйтесь нашим инструментом 'Удалить метаданные'. Он полностью очищает документ от скрытой информации, сохраняя при этом основной контент.",
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
export const PAGES_SEO: Record<string, PageSEO> = {
  // ✅ HOME
  "/": {
    title: "Compress PDF to 200KB Online | Free PDF Compressor Tool",
    description:
      "Compress PDF to 200KB online for free. Reduce PDF size instantly without losing quality. Best for SSC, UPSC, passport, scholarship and government portal uploads.",
    canonical: `${SITE.baseUrl}/`,
    jsonLd: {
      name: "Compress PDF to 200KB Online",
      url: `${SITE.baseUrl}/`,
      description:
        "Free online tool to compress PDF size to 200KB securely in browser.",
    },
  },

  // ✅ Tool pages (your existing ones - unchanged)
  "/compress-pdf-to-200kb": {
    title: "Compress PDF to 200KB Without Losing Quality | Free Online Tool",
    description:
      "Free, fast, and secure tool to compress PDF to 200KB without losing quality. Works 100% in your browser for total privacy—no server uploads required.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-200kb`,
    faqs: [
      {
        question: "How can I compress a PDF to 200KB without losing quality?",
        answer:
          "Our tool optimizes resources in-browser to reduce size while maintaining visual clarity.",
      },
      {
        question: "Is it safe to compress my PDFs here?",
        answer:
          "Yes. Files are processed locally in your browser and never uploaded to a server.",
      },
    ],
    jsonLd: {
      name: "Compress PDF to 200KB Tool",
      url: `${SITE.baseUrl}/compress-pdf-to-200kb`,
      description: "Compress PDF files to 200KB securely in your browser.",
    },
  },

  "/compress-pdf": {
    title: "Compress PDF Online Free (Fast & Secure PDF Compressor)",
    description:
      "Compress PDF online for free. Reduce PDF file size instantly without losing quality. 100% client-side processing.",
    canonical: `${SITE.baseUrl}/compress-pdf`,
    jsonLd: {
      name: "Compress PDF Online",
      url: `${SITE.baseUrl}/compress-pdf`,
      description: "Compress PDF online quickly and securely.",
    },
  },

  "/compress-pdf-to-50kb": {
    title: "Compress PDF to 50KB Online Free | Reduce PDF Size",
    description:
      "Compress PDF to 50KB online for free. Best for strict upload limits on govt forms, SSC, scholarship portals. 100% browser-based.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-50kb`,
    jsonLd: {
      name: "Compress PDF to 50KB",
      url: `${SITE.baseUrl}/compress-pdf-to-50kb`,
      description: "Reduce PDF size to 50KB online.",
    },
  },

  "/compress-pdf-to-100kb": {
    title: "Compress PDF to 100KB Online Free | Reduce PDF Size",
    description:
      "Compress PDF to 100KB online. Best for forms, email attachments and fast uploads. Private browser-based processing.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-100kb`,
    jsonLd: {
      name: "Compress PDF to 100KB",
      url: `${SITE.baseUrl}/compress-pdf-to-100kb`,
      description: "Reduce PDF size to 100KB online.",
    },
  },

  "/compress-pdf-to-150kb": {
    title: "Compress PDF to 150KB Online Free | Reduce PDF Size",
    description:
      "Compress PDF to 150KB online for free. Perfect for SSC, UPSC, passport & scholarship form uploads. Browser-based, no uploads.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-150kb`,
    jsonLd: {
      name: "Compress PDF to 150KB",
      url: `${SITE.baseUrl}/compress-pdf-to-150kb`,
      description: "Reduce PDF size to 150KB online.",
    },
  },

  "/compress-pdf-to-500kb": {
    title: "Compress PDF to 500KB Online Free | Reduce PDF Size",
    description:
      "Compress PDF to 500KB online for free. Ideal for email attachments, job portals & document uploads. 100% private.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-500kb`,
    jsonLd: {
      name: "Compress PDF to 500KB",
      url: `${SITE.baseUrl}/compress-pdf-to-500kb`,
      description: "Reduce PDF size to 500KB online.",
    },
  },

  "/compress-pdf-to-1mb": {
    title: "Compress PDF to 1MB Online Free | Reduce PDF Size",
    description:
      "Compress PDF to 1MB online for free. Best for large documents, job applications & email. Browser-based, no server uploads.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-1mb`,
    jsonLd: {
      name: "Compress PDF to 1MB",
      url: `${SITE.baseUrl}/compress-pdf-to-1mb`,
      description: "Reduce PDF size to 1MB online.",
    },
  },

  "/reduce-pdf-size-to-500kb": {
    title: "Reduce PDF Size to 500KB Online Free | PDF Compressor",
    description:
      "Reduce PDF size to 500KB online for free. Perfect for email, job portals & govt form uploads. 100% browser-based.",
    canonical: `${SITE.baseUrl}/reduce-pdf-size-to-500kb`,
    jsonLd: {
      name: "Reduce PDF Size to 500KB",
      url: `${SITE.baseUrl}/reduce-pdf-size-to-500kb`,
      description: "Reduce PDF file size to 500KB online.",
    },
  },

  "/remove-metadata-from-pdf": {
    title: "Remove Metadata from PDF Online (Free & Secure) | CompressPDF Tool",
    description:
      "Remove hidden PDF metadata like author, creator, title, keywords & timestamps. Free browser-only tool (no uploads). Best for resumes, job portals & US forms.",
    canonical: `${SITE.baseUrl}/remove-metadata-from-pdf`,
    faqs: [
      {
        question: "What does removing metadata from PDF mean?",
        answer:
          "It means deleting hidden PDF properties such as author name, creator tool, timestamps, title, keywords, and other embedded information.",
      },
      {
        question: "Is this tool safe and private?",
        answer:
          "Yes. Your PDF is processed only inside your browser. Files are not uploaded to a server.",
      },
      {
        question: "Does metadata removal change PDF content?",
        answer:
          "No. This removes hidden properties only. Your PDF pages, text and layout remain unchanged.",
      },
      {
        question: "Can I remove metadata from resume PDFs?",
        answer:
          "Yes. This is ideal for resume uploads on job portals where privacy matters.",
      },
    ],
    jsonLd: {
      name: "Remove Metadata from PDF",
      url: `${SITE.baseUrl}/remove-metadata-from-pdf`,
      description: "Remove hidden metadata from PDF online securely.",
    },
  },

  "/scanned-pdf-compressor": {
    title: "Scanned PDF Compressor Online (Reduce Scanned PDF Size Fast)",
    description:
      "Compress scanned PDF documents online and reduce file size without ruining readability. Perfect for forms & uploads.",
    canonical: `${SITE.baseUrl}/scanned-pdf-compressor`,
    jsonLd: {
      name: "Scanned PDF Compressor",
      url: `${SITE.baseUrl}/scanned-pdf-compressor`,
      description:
        "Compress scanned PDF file size while keeping text readable.",
    },
  },

  "/scanned-pdf-to-200kb": {
    title: "Compress Scanned PDF to 200KB Online (Fast & Free)",
    description:
      "Compress scanned PDF to 200KB online for free. Reduce scanned documents while keeping them readable.",
    canonical: `${SITE.baseUrl}/scanned-pdf-to-200kb`,
    jsonLd: {
      name: "Compress Scanned PDF to 200KB",
      url: `${SITE.baseUrl}/scanned-pdf-to-200kb`,
      description: "Compress scanned PDFs to 200KB online.",
    },
  },

  // ✅ Static pages SEO (new)
  "/about": {
    title: "About Us - CompressPDFto200KB.online",
    description:
      "Learn more about CompressPDFto200KB.online — a free PDF compression website built to help users reduce PDF file size for uploads and government portals.",
    canonical: `${SITE.baseUrl}/about`,
    jsonLd: {
      name: "About CompressPDFto200KB.online",
      url: `${SITE.baseUrl}/about`,
      description: "About page for CompressPDFto200KB.online.",
    },
  },

  "/contact": {
    title: "Contact Us - CompressPDFto200KB.online",
    description:
      "Get in touch with CompressPDFto200KB.online for feedback, support, or suggestions related to PDF compression tools and upload fixes.",
    canonical: `${SITE.baseUrl}/contact`,
    jsonLd: {
      name: "Contact CompressPDFto200KB.online",
      url: `${SITE.baseUrl}/contact`,
      description: "Contact page for CompressPDFto200KB.online.",
    },
  },

  "/privacy-policy": {
    title: "Privacy Policy - CompressPDFto200KB.online",
    description:
      "Read how CompressPDFto200KB.online protects your privacy. Your PDF files are processed in your browser and never uploaded to our servers.",
    canonical: `${SITE.baseUrl}/privacy-policy`,
    jsonLd: {
      name: "Privacy Policy",
      url: `${SITE.baseUrl}/privacy-policy`,
      description: "Privacy policy for CompressPDFto200KB.online.",
    },
  },

  "/terms-conditions": {
    title: "Terms & Conditions - CompressPDFto200KB.online",
    description:
      "Terms and conditions for using CompressPDFto200KB.online PDF tools and guides.",
    canonical: `${SITE.baseUrl}/terms-conditions`,
    jsonLd: {
      name: "Terms & Conditions",
      url: `${SITE.baseUrl}/terms-conditions`,
      description: "Terms & conditions for CompressPDFto200KB.online.",
    },
  },

  "/disclaimer": {
    title: "Disclaimer - CompressPDFto200KB.online",
    description:
      "Disclaimer for CompressPDFto200KB.online. We provide tools and guides for PDF compression and portal upload help.",
    canonical: `${SITE.baseUrl}/disclaimer`,
    jsonLd: {
      name: "Disclaimer",
      url: `${SITE.baseUrl}/disclaimer`,
      description: "Disclaimer for CompressPDFto200KB.online.",
    },
  },

  "/sitemap": {
    title: "Sitemap - CompressPDFto200KB.online",
    description:
      "HTML sitemap of CompressPDFto200KB.online. Find all PDF tools and blog posts in one place.",
    canonical: `${SITE.baseUrl}/sitemap`,
    jsonLd: {
      name: "Sitemap",
      url: `${SITE.baseUrl}/sitemap`,
      description: "HTML sitemap for CompressPDFto200KB.online.",
    },
  },

  "/tools": {
    title: "PDF Tools – Compress, Reduce Size, Remove Metadata | Free",
    description:
      "All PDF tools in one place: compress PDF, compress to 200KB or 100KB, scanned PDF compressor, remove metadata. Free, private, browser-based.",
    canonical: `${SITE.baseUrl}/tools`,
    jsonLd: {
      name: "PDF Tools",
      url: `${SITE.baseUrl}/tools`,
      description: "Free PDF compression and metadata removal tools.",
    },
  },

  // ✅ Blog index and posts (SEO only)
  "/blog": {
    title: "Blog - CompressPDFto200KB.online",
    description:
      "Read guides on compressing PDFs for government portals, SSC forms, UPSC documents, passport uploads, scholarships and more.",
    canonical: `${SITE.baseUrl}/blog`,
    jsonLd: {
      name: "CompressPDF Blog",
      url: `${SITE.baseUrl}/blog`,
      description: "Blog with PDF compression and upload fix guides.",
    },
  },

  "/blog/govt-form-pdf-reject-fix-compress-200kb": {
    title: "Govt Form PDF Rejected? Fix Upload Issue (Compress PDF to 200KB)",
    description:
      "Fix government portal PDF upload rejected issue due to large file size. Learn how to compress PDF to 200KB easily.",
    canonical: `${SITE.baseUrl}/blog/govt-form-pdf-reject-fix-compress-200kb`,
    jsonLd: {
      name: "Govt Form PDF Rejected Fix",
      url: `${SITE.baseUrl}/blog/govt-form-pdf-reject-fix-compress-200kb`,
      description: "Fix PDF rejected errors on government portals.",
    },
  },

  "/blog/ssc-form-pdf-size-limit-200kb": {
    title: "SSC Form PDF Size Limit 200KB? Compress PDF to 200KB (Fix)",
    description:
      "SSC form PDF upload error due to size limit? Compress PDF to 200KB with step-by-step method for mobile and PC.",
    canonical: `${SITE.baseUrl}/blog/ssc-form-pdf-size-limit-200kb`,
    jsonLd: {
      name: "SSC PDF Size Limit Fix",
      url: `${SITE.baseUrl}/blog/ssc-form-pdf-size-limit-200kb`,
      description: "Guide to compress PDF to 200KB for SSC portal uploads.",
    },
  },

  "/blog/upsc-documents-upload-guide-pdf-compress": {
    title: "UPSC Documents Upload Guide: Compress PDF Size for Portal",
    description:
      "UPSC document upload guide: how to compress PDF size for UPSC portals without losing quality.",
    canonical: `${SITE.baseUrl}/blog/upsc-documents-upload-guide-pdf-compress`,
    jsonLd: {
      name: "UPSC PDF Upload Guide",
      url: `${SITE.baseUrl}/blog/upsc-documents-upload-guide-pdf-compress`,
      description: "UPSC documents upload guide with PDF compression tips.",
    },
  },

  "/blog/job-portal-resume-upload-problem-pdf-size-reduce": {
    title: "Resume Upload Failed? Reduce PDF Size for Job Portal (Fix)",
    description:
      "Resume PDF too large? Learn how to reduce PDF size for job portals quickly while keeping the resume readable.",
    canonical: `${SITE.baseUrl}/blog/job-portal-resume-upload-problem-pdf-size-reduce`,
    jsonLd: {
      name: "Resume Upload Problem Fix",
      url: `${SITE.baseUrl}/blog/job-portal-resume-upload-problem-pdf-size-reduce`,
      description:
        "Fix job portal resume upload problems by reducing PDF size.",
    },
  },

  "/blog/passport-portal-200kb-limit-pdf-upload-error-fix": {
    title: "Passport Portal PDF Upload Error? Fix 200KB Limit Issue",
    description:
      "Passport portal PDF upload error due to 200KB limit? Learn how to compress PDF size and upload successfully.",
    canonical: `${SITE.baseUrl}/blog/passport-portal-200kb-limit-pdf-upload-error-fix`,
    jsonLd: {
      name: "Passport PDF Upload Error Fix",
      url: `${SITE.baseUrl}/blog/passport-portal-200kb-limit-pdf-upload-error-fix`,
      description:
        "Fix passport portal PDF upload error and 200KB limit issues.",
    },
  },

  "/blog/mobile-se-pdf-compress-kaise-kare-without-app": {
    title: "Mobile Se PDF Compress Kaise Kare (Without App) - Guide",
    description:
      "Mobile se PDF compress kaise kare bina app? Step-by-step guide to reduce PDF size for portal uploads in browser.",
    canonical: `${SITE.baseUrl}/blog/mobile-se-pdf-compress-kaise-kare-without-app`,
    jsonLd: {
      name: "Mobile PDF Compress Guide",
      url: `${SITE.baseUrl}/blog/mobile-se-pdf-compress-kaise-kare-without-app`,
      description: "Guide to compress PDF on mobile without app.",
    },
  },

  "/blog/visa-kyc-pdf-upload-fail-size-reduce-solution": {
    title: "Visa/KYC PDF Upload Failed? Reduce PDF Size (Solution)",
    description:
      "Visa or KYC PDF upload failed due to large file size? Learn how to reduce PDF size and upload successfully.",
    canonical: `${SITE.baseUrl}/blog/visa-kyc-pdf-upload-fail-size-reduce-solution`,
    jsonLd: {
      name: "Visa KYC PDF Upload Fail Solution",
      url: `${SITE.baseUrl}/blog/visa-kyc-pdf-upload-fail-size-reduce-solution`,
      description: "Solution for visa/KYC PDF upload failure due to size.",
    },
  },

  "/blog/scanned-pdf-heavy-size-reduce-complete-guide": {
    title: "Scanned PDF Too Large? Reduce Scanned PDF Size (Complete Guide)",
    description:
      "Scanned PDF file size too large? Complete guide to reduce scanned PDF size without ruining readability for uploads.",
    canonical: `${SITE.baseUrl}/blog/scanned-pdf-heavy-size-reduce-complete-guide`,
    jsonLd: {
      name: "Scanned PDF Too Large Guide",
      url: `${SITE.baseUrl}/blog/scanned-pdf-heavy-size-reduce-complete-guide`,
      description: "Complete guide to reduce scanned PDF size for uploads.",
    },
  },

  "/blog/scholarship-form-pdf-upload-guide-200kb-document": {
    title: "Scholarship Form PDF Upload Guide (Compress to 200KB Document)",
    description:
      "Scholarship portal PDF upload guide. Learn how to compress PDF document to 200KB and fix upload errors.",
    canonical: `${SITE.baseUrl}/blog/scholarship-form-pdf-upload-guide-200kb-document`,
    jsonLd: {
      name: "Scholarship PDF Upload Guide",
      url: `${SITE.baseUrl}/blog/scholarship-form-pdf-upload-guide-200kb-document`,
      description: "Guide to compress PDF to 200KB for scholarship forms.",
    },
  },

  "/blog/email-me-pdf-attach-nahi-ho-rahi-size-reduce": {
    title: "Email Me PDF Attach Nahi Ho Rahi? PDF Size Reduce Kaise Kare",
    description:
      "Email me PDF attach nahi ho rahi due to large file size? Learn how to reduce PDF size quickly and send attachments easily.",
    canonical: `${SITE.baseUrl}/blog/email-me-pdf-attach-nahi-ho-rahi-size-reduce`,
    jsonLd: {
      name: "Email PDF Attachment Problem Fix",
      url: `${SITE.baseUrl}/blog/email-me-pdf-attach-nahi-ho-rahi-size-reduce`,
      description: "Fix PDF attachment issue in email by reducing file size.",
    },
  },

  "/blog/how-to-compress-a-pdf-on-mac": {
    title: "How to Compress a PDF on Mac (Reduce PDF Size on macOS)",
    description:
      "Learn how to compress a PDF on Mac. Step-by-step methods to reduce PDF size on macOS without losing readability.",
    canonical: `${SITE.baseUrl}/blog/how-to-compress-a-pdf-on-mac`,
    jsonLd: {
      name: "Compress PDF on Mac",
      url: `${SITE.baseUrl}/blog/how-to-compress-a-pdf-on-mac`,
      description: "Guide to compress PDF on Mac and reduce PDF size.",
    },
  },

  // ✅ RUSSIAN SEO START
  "/ru/szhat-pdf": {
    title: "Сжать PDF Онлайн Бесплатно | Уменьшить размер PDF",
    description: "Сжать PDF онлайн бесплатно. Уменьшить размер PDF файла без потери качества. Быстро, безопасно, без регистрации. Работает в браузере.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf`,
    jsonLd: {
      name: "Сжать PDF Онлайн",
      url: `${SITE.baseUrl}/ru/szhat-pdf`,
      description: "Бесплатный онлайн инструмент для сжатия PDF файлов.",
    },
  },

  "/ru/szhat-pdf-do-50kb": {
    title: "Сжать PDF до 50 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 50 кб онлайн бесплатно. Идеально для строгих лимитов при загрузке документов и подписей.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-50kb`,
    jsonLd: {
      name: "Сжать PDF до 50 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-50kb`,
      description: "Уменьшить размер PDF до 50 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-100kb": {
    title: "Сжать PDF до 100 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 100 кб онлайн. Подходит для резюме, анкет и заявлений. Быстрая обработка в браузере.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-100kb`,
    jsonLd: {
      name: "Сжать PDF до 100 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-100kb`,
      description: "Уменьшить размер PDF до 100 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-150kb": {
    title: "Сжать PDF до 150 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 150 кб онлайн бесплатно. Оптимально для порталов госуслуг, вузов и паспортных столов.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-150kb`,
    jsonLd: {
      name: "Сжать PDF до 150 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-150kb`,
      description: "Уменьшить размер PDF до 150 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-200kb": {
    title: "Сжать PDF до 200 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 200 кб онлайн. Самый популярный формат для Госуслуг, ФНС и других государственных порталов.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-200kb`,
    jsonLd: {
      name: "Сжать PDF до 200 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-200kb`,
      description: "Уменьшить размер PDF до 200 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-500kb": {
    title: "Сжать PDF до 500 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 500 кб онлайн. Отлично подходит для отправки по почте, портфолио и презентаций.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-500kb`,
    jsonLd: {
      name: "Сжать PDF до 500 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-500kb`,
      description: "Уменьшить размер PDF до 500 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-1mb": {
    title: "Сжать PDF до 1 МБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 1 МБ онлайн. Для больших договоров, книг и отчетов. Сохраняет высокое качество.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-1mb`,
    jsonLd: {
      name: "Сжать PDF до 1 МБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-1mb`,
      description: "Уменьшить размер PDF до 1 МБ онлайн.",
    },
  },

  "/ru/umenshit-razmer-pdf-do-500kb": {
    title: "Уменьшить размер PDF файла до 500 КБ Онлайн (Бесплатно)",
    description: "Бесплатно уменьшить размер PDF до 500 КБ. Быстрая оптимизация для отправки по email и загрузки на сайты.",
    canonical: `${SITE.baseUrl}/ru/umenshit-razmer-pdf-do-500kb`,
    jsonLd: {
      name: "Уменьшить размер PDF до 500 КБ",
      url: `${SITE.baseUrl}/ru/umenshit-razmer-pdf-do-500kb`,
      description: "Уменьшить размер PDF файла до 500 КБ онлайн.",
    },
  },

  "/ru/szhat-skanirovannyj-pdf": {
    title: "Сжать Сканированный PDF Онлайн | Уменьшить размер скана",
    description: "Сжать сканированный PDF онлайн. Умная оптимизация сканов документов, квитанций и рукописей без размытия текста.",
    canonical: `${SITE.baseUrl}/ru/szhat-skanirovannyj-pdf`,
    jsonLd: {
      name: "Сжать Сканированный PDF",
      url: `${SITE.baseUrl}/ru/szhat-skanirovannyj-pdf`,
      description: "Сжать сканированный PDF документ онлайн.",
    },
  },

  "/ru/szhat-skanirovannyj-pdf-do-200kb": {
    title: "Сжать Скан PDF до 200 КБ Онлайн | Уменьшить размер скана",
    description: "Сжать сканированный PDF до 200 КБ. Специальный алгоритм для паспортов, дипломов и справок. Проходит проверки на порталах.",
    canonical: `${SITE.baseUrl}/ru/szhat-skanirovannyj-pdf-do-200kb`,
    jsonLd: {
      name: "Сжать Скан PDF до 200 КБ",
      url: `${SITE.baseUrl}/ru/szhat-skanirovannyj-pdf-do-200kb`,
      description: "Сжать скан PDF до 200 КБ онлайн.",
    },
  },

  "/ru/udalit-metadannye-pdf": {
    title: "Удалить метаданные из PDF Онлайн (Очистить свойства файла)",
    description: "Удалить автора, дату создания и скрытые метаданные из PDF онлайн. Повысьте конфиденциальность перед отправкой документа.",
    canonical: `${SITE.baseUrl}/ru/udalit-metadannye-pdf`,
    jsonLd: {
      name: "Удалить метаданные PDF",
      url: `${SITE.baseUrl}/ru/udalit-metadannye-pdf`,
      description: "Очистить метаданные и скрытые свойства PDF файла.",
    },
  },

  "/ru/instrumenty": {
    title: "PDF Инструменты – Сжать, Уменьшить, Очистить | Бесплатно",
    description: "Все инструменты для работы с PDF: сжатие до 200кб, 100кб, удаление метаданных. Бесплатно, безопасно, в браузере.",
    canonical: `${SITE.baseUrl}/ru/instrumenty`,
    jsonLd: {
      name: "Инструменты PDF",
      url: `${SITE.baseUrl}/ru/instrumenty`,
      description: "Сборник бесплатных инструментов для работы с PDF.",
    },
  },
    
  "/ru/o-nas": {
    title: "О Нас - CompressPDFto200KB.online",
    description: "Узнайте больше о нашем сервисе. Мы помогаем студентам и специалистам бесплатно сжимать PDF документы для государственных порталов.",
    canonical: `${SITE.baseUrl}/ru/o-nas`,
    jsonLd: {
        name: "О Нас",
        url: `${SITE.baseUrl}/ru/o-nas`,
        description: "Информация о проекте CompressPDFto200KB.",
    },
  },

  "/ru/kontakty": {
    title: "Контакты - CompressPDFto200KB.online",
    description: "Свяжитесь с нами, если у вас есть вопросы или предложения по улучшению сервиса сжатия PDF.",
    canonical: `${SITE.baseUrl}/ru/kontakty`,
    jsonLd: {
        name: "Контакты",
        url: `${SITE.baseUrl}/ru/kontakty`,
        description: "Контактная информация CompressPDFto200KB.",
    },
  },

  "/ru/politika-konfidencialnosti": {
    title: "Политика Конфиденциальности - CompressPDFto200KB.online",
    description: "Мы уважаем вашу приватность. Ваши файлы обрабатываются локально в браузере и никогда не загружаются на наши серверы.",
    canonical: `${SITE.baseUrl}/ru/politika-konfidencialnosti`,
    jsonLd: {
        name: "Политика Конфиденциальности",
        url: `${SITE.baseUrl}/ru/politika-konfidencialnosti`,
        description: "Политика обработки данных пользователей.",
    },
  },

  "/ru/usloviya": {
    title: "Условия Использования - CompressPDFto200KB.online",
    description: "Правила использования наших бесплатных инструментов для работы с PDF.",
    canonical: `${SITE.baseUrl}/ru/usloviya`,
    jsonLd: {
        name: "Условия Использования",
        url: `${SITE.baseUrl}/ru/usloviya`,
        description: "Правила использования сервиса.",
    },
  },

  "/ru/otkaz-ot-otvetstvennosti": {
    title: "Отказ от Ответственности - CompressPDFto200KB.online",
    description: "Отказ от ответственности: мы предоставляем инструменты 'как есть' без гарантий для конкретных порталов.",
    canonical: `${SITE.baseUrl}/ru/otkaz-ot-otvetstvennosti`,
    jsonLd: {
        name: "Отказ от Ответственности",
        url: `${SITE.baseUrl}/ru/otkaz-ot-otvetstvennosti`,
        description: "Информация об ограничении ответственности.",
    },
  },
  // Alias for typo in some files
  "/ru/otkaz-ot-otvetsvennosti": {
    title: "Отказ от Ответственности - CompressPDFto200KB.online",
    description: "Отказ от ответственности: мы предоставляем инструменты 'как есть' без гарантий для конкретных порталов.",
    canonical: `${SITE.baseUrl}/ru/otkaz-ot-otvetstvennosti`,
  },
  "/ru/usloviya-ispolzovaniya": {
    title: "Условия Использования - CompressPDFto200KB.online",
    description: "Правила использования наших бесплатных инструментов для работы с PDF.",
    canonical: `${SITE.baseUrl}/ru/usloviya`,
  }
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
