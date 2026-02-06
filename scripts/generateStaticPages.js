import fs from "fs";
import path from "path";

const SITE = "https://compresspdfto200kb.online";
const DIST_DIR = path.resolve("dist");

// ✅ Yandex Verification
const YANDEX_VERIFICATION = "45b0752a7d05cc01";

// ✅ GA4 Measurement ID
const GA_ID = "G-FCZXPJB41V";

/** Canonical URL: https only, trailing slash only for home (matches sitemap). */
function getCanonicalUrl(route) {
  const base = SITE.replace(/\/$/, "");
  const path = route === "/" ? "/" : route.replace(/\/+$/, "");
  return `${base}${path}`;
}

// ✅ ROUTES (must match sitemap canonical paths)
// ✅ Import from Single Source of Truth
import { ALL_ROUTES as ROUTES } from "../src/data/routes.js";

// ✅ Basic SEO
const SEO = {
  "/": {
    title: "Compress PDF to 200KB Online | Free PDF Compressor Tool",
    description: "Compress PDF files to 200KB online using a free PDF compressor tool. Upload PDF, reduce size without losing readability, and download instantly.",
  },
  "/compress-pdf": {
    title: "Compress PDF Online | Free PDF Compressor Tool",
    description: "Compress PDF files online for free. Reduce file size instantly while maintaining quality. Safe, private, and works in your browser.",
  },
  "/compress-pdf-to-200kb": {
    title: "Compress PDF to 200KB Online | Free Tool for Govt Forms",
    description: "Compress PDF to 200KB online for free. Ideal for SSC, UPSC, and passport portal uploads. Reduce PDF size to exactly under 200 KB safely.",
  },
  "/compress-pdf-to-100kb": {
    title: "Compress PDF to 100KB Online | Free Tool for Resumes",
    description: "Reduce PDF size to 100KB online for free. Perfect for job portals and scholarship forms requiring a strict 100 KB limit document.",
  },
  "/compress-pdf-to-50kb": {
    title: "Compress PDF to 50KB Online | Free Ultra-Small Size Tool",
    description: "Compress PDF to 50KB online. Best for uploading signed documents and small certificates with tight size restrictions on online portals.",
  },
  "/compress-pdf-to-150kb": {
    title: "Compress PDF to 150KB Online | Free Tool for Web Forms",
    description: "Reduce PDF size to 150KB online. Ideal for university admissions and email attachments requiring a file size under 150 KB.",
  },
  "/compress-pdf-to-500kb": {
    title: "Compress PDF to 500KB Online | Quality Document Reducer",
    description: "Reduce PDF size to 500KB online. Perfect for high-quality portfolios and multipage documents while staying under common email limits.",
  },
  "/compress-pdf-to-1mb": {
    title: "Compress PDF to 1MB Online | Reduce Large PDF Files",
    description: "Compress large PDF files to 1MB or less online. Maintain document integrity for official reports and books while reducing storage space.",
  },
  "/reduce-pdf-size-to-500kb": {
    title: "Reduce PDF Size to 500KB Online | Free Document Reducer",
    description: "Quickly reduce your PDF file size to 500KB online. Perfect for email attachments and portals requiring documents to be under 500 KB limit.",
  },
  "/resize-pdf-kb": {
    title: "Resize PDF in KB Online | Set Custom Target PDF Size",
    description: "Specify a custom target size in KB for your PDF. Perfect for strict government portals (SSC, UPSC) where you need exactly 20KB, 50KB or 100KB.",
  },
  "/resize-pdf-200kb": {
    title: "Resize PDF to 200KB Online | Quickly Set PDF Size Limit",
    description: "Resize your PDF file to exactly 200KB online for free. This tool is designed for students applying for SSC, UPSC, and other government jobs.",
  },
  "/resize-pdf-mb": {
    title: "Resize PDF in MB Online | Set Target File Size in MB",
    description: "Reduce large PDF files to a specific size in MB (1MB, 2MB, 5MB). Ideal for email attachments and cloud storage optimization.",
  },
  "/scanned-pdf-compressor": {
    title: "Scanned PDF Compressor Online | Reduce Scan File Size",
    description: "Compress scanned PDF documents without losing text clarity. Optimized for passports, IDs, and certificates captured via mobile or scanner.",
  },
  "/scanned-pdf-to-200kb": {
    title: "Scanned PDF to 200KB Online | High Quality Scan Reducer",
    description: "Compress scanned PDF files to 200KB online. Specially optimized for scanned certificates, marksheets, and IDs for seamless online uploads.",
  },
  "/pdf-to-jpg": {
    title: "PDF to JPG Converter Online | High Quality (Free)",
    description: "Convert PDF pages to high-resolution JPG images online for free. Extract images or convert whole document to pictures securely in your browser.",
  },
  "/jpg-to-pdf": {
    title: "JPG to PDF Converter Online | Convert Images to PDF Free",
    description: "Convert JPG, PNG, and other images to PDF documents online for free. Combine multiple photos into a single PDF file instantly in your browser.",
  },
  "/edit-pdf": {
    title: "Edit PDF Online | Free Online PDF Editor & Annotator",
    description: "Edit PDF files online for free. Add text, images, and shapes to your documents. Secure, private, and works directly in your browser without uploads.",
  },
  "/merge-pdf": {
    title: "Merge PDF Online | Combine Multiple PDF Files Free",
    description: "Combine multiple PDF files into a single document online. Drag and drop to rearrange pages and merge certificates or reports securely.",
  },
  "/split-pdf": {
    title: "Split PDF Online | Extract Pages from PDF for Free",
    description: "Split PDF pages or extract specific sections from your document. Safe, fast, and entirely browser-based with a visual page selector.",
  },
  "/remove-metadata-from-pdf": {
    title: "Remove PDF Metadata Online | Clear PDF File Properties",
    description: "Clear PDF metadata like author, creator, and creation date online. Enhance your privacy by removing hidden properties before sharing documents.",
  },
  "/flipkart-label-cropper": {
    title: "Flipkart Label Cropper Online | Crop for 4x6 Thermal Print",
    description: "Flipkart sellers can crop shipping labels online for free. Optimized for 4x6 thermal printers to save paper and time. 100% private processing.",
  },
  "/meesho-label-cropper": {
    title: "Meesho Label Cropper Online | Crop for 4x6 Thermal Print",
    description: "Crop Meesho shipping labels online for free. Specifically designed for 4x6 thermal printers. Resize and print labels instantly and securely.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - CompressPDFto200KB.online",
    description: "Read how CompressPDFto200KB.online protects your privacy. Your PDF files are processed in your browser and never uploaded to our servers.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions - CompressPDFto200KB.online",
    description: "Terms and conditions for using CompressPDFto200KB.online PDF tools and guides.",
  },
  "/disclaimer": {
    title: "Disclaimer - CompressPDFto200KB.online",
    description: "Disclaimer for CompressPDFto200KB.online. We provide tools and guides for PDF compression and portal upload help.",
  },
  "/cookies-policy": {
    title: "Cookie Policy - CompressPDFto200KB.online",
    description: "CompressPDFto200KB.online cookie policy. We currently do not use any cookies or tracking pixels.",
  },

  // ✅ Russian SEO (Strictly No Changes)
  "/ru": { title: "Сжать PDF Онлайн Бесплатно | Уменьшить размер PDF", description: "Сжать PDF онлайн бесплатно. Уменьшить размер PDF файла без потери качества. Быстро, безопасно, без регистрации. Работает в браузере." },
  "/ru/o-nas": { title: "О Нас - CompressPDFto200KB.online", description: "Узнайте больше о нашем сервисе. Мы помогаем студентам и специалистам бесплатно сжимать PDF документы для государственных порталов." },
  "/ru/kontakty": { title: "Контакты - CompressPDFto200KB.online", description: "Свяжитесь с нами, если у вас есть вопросы или предложения по улучшению сервиса сжатия PDF." },
  "/ru/politika-konfidencialnosti": { title: "Политика Конфиденциальности - CompressPDFto200KB.online", description: "Мы уважаем вашу приватность. Ваши файлы обрабатываются локально в браузере и никогда не загружаются на наши серверы." },
  "/ru/usloviya": { title: "Условия Использования - CompressPDFto200KB.online", description: "Правила использования наших бесплатных инструментов для работы с PDF." },
  "/ru/otkaz-ot-otvetstvennosti": { title: "Отказ от Ответственности - CompressPDFto200KB.online", description: "Отказ от ответственности: мы предоставляем инструменты 'как есть' без гарантий для конкретных порталов." },
  "/ru/blog": { title: "Блог - CompressPDFto200KB.online", description: "Блог о сжатии PDF и работе с документами." },
  "/ru/instrumenty": { title: "PDF Инструменты – Сжать, Уменьшить, Очистить | Бесплатно", description: "Все инструменты для работы с PDF: сжатие до 200кб, 100кб, удаление метаданных. Бесплатно, безопасно, в браузере." },
  "/ru/szhat-pdf": { title: "Сжать PDF Онлайн Бесплатно | Уменьшить размер PDF", description: "Сжать PDF онлайн бесплатно. Уменьшить размер PDF файла без потери качества. Быстро, безопасно, без регистрации. Работает в браузере." },
  "/ru/szhat-pdf-do-50kb": { title: "Сжать PDF до 50 КБ Онлайн | Уменьшить размер PDF бесплатно", description: "Сжать PDF до 50 кб онлайн бесплатно. Идеально для строгих лимитов при загрузке документов и подписей." },
  "/ru/szhat-pdf-do-100kb": { title: "Сжать PDF до 100 КБ Онлайн | Уменьшить размер PDF бесплатно", description: "Сжать PDF до 100 кб онлайн. Подходит для резюме, анкет и заявлений. Быстрая обработка в браузере." },
  "/ru/szhat-pdf-do-150kb": { title: "Сжать PDF до 150 КБ Онлайн | Уменьшить размер PDF бесплатно", description: "Сжать PDF до 150 кб онлайн бесплатно. Оптимально для порталов госуслуг, вузов и паспортных столов." },
  "/ru/szhat-pdf-do-200kb": { title: "Сжать PDF до 200 КБ Онлайн | Уменьшить размер PDF бесплатно", description: "Сжать PDF до 200 кб онлайн. Самый популярный формат для Госуслуг, ФНС и других государственных порталов." },
  "/ru/szhat-pdf-do-500kb": { title: "Сжать PDF до 500 КБ Онлайн | Уменьшить размер PDF бесплатно", description: "Сжать PDF до 500 кб онлайн. Отлично подходит для отправки по почте, портфолио и презентаций." },
  "/ru/szhat-pdf-do-1mb": { title: "Сжать PDF до 1 МБ Онлайн | Уменьшить размер PDF бесплатно", description: "Сжать PDF до 1 МБ онлайн. Для больших договоров, книг и отчетов. Сохраняет высокое качество." },
  "/ru/umenshit-razmer-pdf-do-500kb": { title: "Уменьшить размер PDF файла до 500 КБ Онлайн (Бесплатно)", description: "Бесплатно уменьшить размер PDF до 500 КБ. Быстрая оптимизация для отправки по email и загрузки на сайты." },
  "/ru/szhat-skanirovannyj-pdf": { title: "Сжать Сканированный PDF Онлайн | Уменьшить размер скана", description: "Сжать сканированный PDF онлайн. Умная оптимизация сканов документов, квитанций и рукописей без размытия текста." },
  "/ru/szhat-skanirovannyj-pdf-do-200kb": { title: "Сжать Скан PDF до 200 КБ Онлайн | Уменьшить размер скана", description: "Сжать сканированный PDF до 200 КБ. Специальный алгоритм для паспортов, дипломов и справок. Проходит проверки на порталах." },
  "/ru/udalit-metadannye-pdf": { title: "Удалить метаданные из PDF Онлайн (Очистить свойства файла)", description: "Удалить автора, дату создания и скрытые метаданные из PDF онлайн. Повысьте конфиденциальность перед отправкой документа." },
  "/ru/izmenit-razmer-pdf-kb": { title: "Изменить размер PDF в КБ Онлайн | Уменьшить вес документа", description: "Изменить размер PDF в КБ онлайн. Задайте точный размер (50 КБ, 100 КБ) для загрузки на порталы. Конфиденциально и бесплатно." },
  "/ru/izmenit-razmer-pdf-mb": { title: "Изменить размер PDF в МБ Онлайн | Уменьшить объем PDF", description: "Изменить размер PDF в МБ онлайн для почты и хранения. Уменьшите тяжелые файлы до 1 МБ или 2 МБ прямо в браузере." },
  "/ru/pdf-v-jpg": { title: "PDF в JPG Онлайн | Конвертировать страницы в изображения", description: "Конвертировать PDF в JPG онлайн бесплатно. Превратите страницы PDF в четкие картинки JPG без загрузки на сервер." },
  "/ru/obedinit-pdf": { title: "Объединить PDF Онлайн | Склеить несколько PDF файлов", description: "Объединить PDF онлайн бесплатно. Склейте страницы и документы в один файл. Удобная сортировка и полная безопасность." },
  "/ru/razdelit-pdf": { title: "Разделить PDF Онлайн | Извлечь страницы из документа", description: "Разделить PDF онлайн бесплатно. Выбирайте страницы визуально и извлекайте их в новый файл. Быстро и приватно." },
  "/ru/flipkart-label-cropper": { title: "Flipkart Label Cropper (RU)", description: "Flipkart label cropping tool in Russian language." },
  "/ru/meesho-label-cropper": { title: "Meesho Label Cropper (RU)", description: "Meesho label cropping tool in Russian language." },
};

// ✅ Blog SEO (fill as much as you want)
const BLOG_SEO = {
  "how-to-compress-a-pdf-on-mac": {
    title: "How to Compress a PDF on Mac (Without Losing Quality)",
    description:
      "Learn how to compress PDF on Mac using Preview and free methods. Reduce PDF size without blurry text.",
  },
  "govt-form-pdf-reject-fix-compress-200kb": {
    title: "Govt Form PDF Rejected? Fix Upload Issue (Compress to 200KB)",
    description:
      "Fix PDF upload rejected error on government portals due to large file size. Compress PDF to 200KB quickly.",
  },
  "ssc-form-pdf-size-limit-200kb": {
    title: "SSC Form PDF Size Limit 200KB? Compress PDF to 200KB (Fix)",
    description:
      "SSC form PDF upload error due to size limit? Learn how to compress PDF to 200KB on mobile/PC.",
  },
  "upsc-documents-upload-guide-pdf-compress": {
    title: "UPSC Document Upload PDF Size Limit? Compress PDF (Guide)",
    description:
      "UPSC portal document upload size issue fix. Compress PDF to required limit without losing readability.",
  },
  "job-portal-resume-upload-problem-pdf-size-reduce": {
    title: "Job Portal Resume Upload Problem? Reduce PDF Size (Fix)",
    description:
      "Resume PDF too large? Fix job portal upload issue by reducing PDF size without breaking formatting.",
  },
  "passport-portal-200kb-limit-pdf-upload-error-fix": {
    title: "Passport Portal PDF Size Limit 200KB? Fix Upload Error",
    description:
      "Passport portal PDF upload issue due to size limit? Compress PDF to 200KB and upload successfully.",
  },
  "mobile-se-pdf-compress-kaise-kare-without-app": {
    title: "Mobile Se PDF Compress Kaise Kare? (Without App)",
    description:
      "Mobile se PDF compress karne ka easy method without app. Browser se PDF ko 200KB tak compress karo.",
  },
  "visa-kyc-pdf-upload-fail-size-reduce-solution": {
    title: "Visa / KYC PDF Upload Failed? Reduce Size (Solution)",
    description:
      "Visa/KYC portal PDF upload fail due to large file? Compress PDF and fix size limit issue quickly.",
  },
  "scanned-pdf-heavy-size-reduce-complete-guide": {
    title: "Scanned PDF Too Large? Reduce Size (Complete Guide)",
    description:
      "Scanned PDF file size heavy? Learn how to compress scanned PDF while keeping text readable.",
  },
  "scholarship-form-pdf-upload-guide-200kb-document": {
    title: "Scholarship Form PDF Upload Guide (200KB Document Fix)",
    description:
      "Scholarship portal PDF upload error due to size limit? Compress PDF to 200KB and upload successfully.",
  },
  "email-me-pdf-attach-nahi-ho-rahi-size-reduce": {
    title: "Email Me PDF Attach Nahi Ho Rahi? Reduce Size (Fix)",
    description:
      "Email attachment PDF too large? Reduce PDF size and attach easily without quality loss.",
  },
};

// ✅ Utilities
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getMeta(route) {
  if (SEO[route]) return SEO[route];

  if (route.startsWith("/blog/")) {
    const slug = route.replace("/blog/", "");
    return (
      BLOG_SEO[slug] || {
        title: slug.replace(/-/g, " ").toUpperCase(),
        description:
          "Read the complete guide to compress PDF size and fix upload errors.",
      }
    );
  }

  return {
    title: "CompressPDFto200KB.online",
    description:
      "Free PDF compression tools to reduce PDF size for government forms, job portals and uploads.",
  };
}

// ✅ Auto detect built assets from dist/assets
function getAssets() {
  const assetsDir = path.join(DIST_DIR, "assets");

  if (!fs.existsSync(assetsDir)) {
    throw new Error("dist/assets not found. Run vite build first.");
  }

  const files = fs.readdirSync(assetsDir);

  const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const cssFile = files.find((f) => f.startsWith("index-") && f.endsWith(".css"));

  if (!jsFile) throw new Error("index-*.js not found in dist/assets");
  if (!cssFile) throw new Error("index-*.css not found in dist/assets");

  return {
    js: `/assets/${jsFile}`,
    css: `/assets/${cssFile}`,
  };
}

// ✅ Google Tag HTML
function buildGoogleTag() {
  return `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
</script>
  `.trim();
}

// ✅ Offscreen CSS for bots
const OFFSCREEN_STYLE = "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;";

/** Build descriptive internal links nav */
function buildCrawlableLinksHtml() {
  const links = ROUTES.slice(0, 15).map((p) => {
    const meta = getMeta(p);
    const text = meta.title.split("|")[0].trim();
    return `<a href="${p}">${escapeHtml(text)}</a>`;
  }).join(" | ");
  return `<nav id="crawlable-internal-links" style="${OFFSCREEN_STYLE}" aria-label="Internal links">${links}</nav>`;
}

/** Get translated version for hreflang */
function getAlternateUrl(route) {
  const mapping = {
    "/": "/ru",
    "/about": "/ru/o-nas",
    "/contact": "/ru/kontakty",
    "/privacy-policy": "/ru/politika-konfidencialnosti",
    "/terms-conditions": "/ru/usloviya",
    "/disclaimer": "/ru/otkaz-ot-otvetstvennosti",
    "/tools": "/ru/instrumenty",
    "/blog": "/ru/blog",
    "/compress-pdf": "/ru/szhat-pdf",
    "/compress-pdf-to-50kb": "/ru/szhat-pdf-do-50kb",
    "/compress-pdf-to-100kb": "/ru/szhat-pdf-do-100kb",
    "/compress-pdf-to-150kb": "/ru/szhat-pdf-do-150kb",
    "/compress-pdf-to-200kb": "/ru/szhat-pdf-do-200kb",
    "/compress-pdf-to-500kb": "/ru/szhat-pdf-do-500kb",
    "/compress-pdf-to-1mb": "/ru/szhat-pdf-do-1mb",
    "/reduce-pdf-size-to-500kb": "/ru/umenshit-razmer-pdf-do-500kb",
    "/scanned-pdf-compressor": "/ru/szhat-skanirovannyj-pdf",
    "/scanned-pdf-to-200kb": "/ru/szhat-skanirovannyj-pdf-do-200kb",
    "/remove-metadata-from-pdf": "/ru/udalit-metadannye-pdf",
    "/resize-pdf-kb": "/ru/izmenit-razmer-pdf-kb",
    "/resize-pdf-mb": "/ru/izmenit-razmer-pdf-mb",
    "/pdf-to-jpg": "/ru/pdf-v-jpg",
    "/merge-pdf": "/ru/obedinit-pdf",
    "/split-pdf": "/ru/razdelit-pdf",
  };

  // Reverse mapping for RU -> EN
  const reverseMapping = {};
  for (const en in mapping) {
    reverseMapping[mapping[en]] = en;
  }

  const altPath = mapping[route] || reverseMapping[route];
  if (altPath) {
    return getCanonicalUrl(altPath);
  }
  return null;
}

// ✅ Create proper HTML that loads SPA + correct meta tags
function createHtml(route, meta, assets) {
  const canonical = getCanonicalUrl(route);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  const isRu = route.startsWith("/ru");
  const lang = isRu ? "ru" : "en";
  const alternate = getAlternateUrl(route);
  const alternateLang = isRu ? "en" : "ru";

  const alternateLink = alternate ? `<link rel="alternate" hreflang="${alternateLang}" href="${alternate}" />` : "";
  const selfLink = `<link rel="alternate" hreflang="${lang}" href="${canonical}" />`;
  const xDefault = isRu ? "" : `<link rel="alternate" hreflang="x-default" href="${canonical}" />`;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${canonical}" />
${selfLink}
${alternateLink}
${xDefault}

<!-- ✅ Yandex Verification -->
<meta name="yandex-verification" content="${YANDEX_VERIFICATION}" />

<meta property="og:type" content="website" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${SITE}/og-image.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />

<link rel="stylesheet" crossorigin href="${assets.css}" />
<script type="module" crossorigin src="${assets.js}"></script>

${buildGoogleTag()}
</head>

<body>
${buildCrawlableLinksHtml()}

<!-- ✅ RICH SEO CONTENT (Visible to Crawlers) -->
<div id="seo-content" style="padding: 20px; max-width: 800px; margin: 0 auto; color: #333;">
  ${buildSeoContentHtml(route, meta)}
</div>

<div id="root"></div>

<script>
  history.replaceState({}, "", "${route}");
</script>

<style>
  /* Hide SEO content once React hydrates to avoid double H1s */
  .hydrated #seo-content { display: none !important; }
  /* Fallback visibility for crawlers */
  #seo-content h1 { font-size: 2rem; margin-bottom: 0.5rem; }
  #seo-content h2 { font-size: 1.5rem; margin-top: 1.5rem; }
  #seo-content p { line-height: 1.6; }
</style>
</body>
</html>`;
}

/**
 * ✅ Build rich HTML for SEO (The Magic against Thin Content)
 */
function buildSeoContentHtml(route, meta) {
  // Extract clean H1 from title
  const h1 = meta.title.split("|")[0].trim();
  let html = `<h1>${escapeHtml(h1)}</h1>`;
  html += `<p>${escapeHtml(meta.description)}</p>`;

  // Context-aware content injection
  if (route.includes("compress")) {
    html += `
      <h2>How to compress PDF online?</h2>
      <ol>
        <li>Click "Select PDF" button above or drag and drop your file.</li>
        <li>Your file is processed locally in your browser - 100% private.</li>
        <li>Wait a second for optimization and download your compressed PDF instantly.</li>
      </ol>
      <h2>Why use our PDF Compressor?</h2>
      <p>Our tool is designed for students and professionals. Whether you need to upload a 200KB PDF for SSC, UPSC, or any government portal, we optimize the file specifically for those requirements without losing text clarity.</p>
    `;
  } else if (route.includes("resize")) {
    html += `
      <h2>How to resize PDF to a specific size?</h2>
      <p>Need exactly 50KB or 100KB? Just set your target size and let the tool do the rest. Perfect for job applications and portal uploads where size limits are strict.</p>
      <p>Our intelligent engine adjusts image quality and document structure to meet your target KB without making the document unreadable.</p>
    `;
  } else if (route.includes("pdf-to-jpg") || route.includes("jpg-to-pdf")) {
    html += `
      <h2>High Quality PDF Conversion</h2>
      <p>Convert documents to images or images to PDF with zero quality loss. Ideal for converting ID proofs, certificates, and marksheets for online submission.</p>
      <ul>
        <li>Convert whole PDF to JPG in one click.</li>
        <li>Combine multiple JPGs into a single professional PDF.</li>
        <li>Works offline in your browser.</li>
      </ul>
    `;
  } else if (route.includes("merge") || route.includes("split")) {
    html += `
      <h2>Organize Your PDF Documents</h2>
      <p>Merge multiple files into one or extract specific pages from a large document. Our visual preview makes it easy to select and rearrange pages as needed.</p>
    `;
  } else if (route.includes("metadata")) {
    html += `
      <h2>Remove PDF Metadata for Privacy</h2>
      <p>Hidden information like author name, creation date, and software used can be sensitive. Our tool clears all properties before you share the document.</p>
    `;
  } else if (route.includes("cropper")) {
    html += `
      <h2>Shipping Label Cropping for Thermal Printers</h2>
      <p>Perfect for Flipkart and Meesho sellers. Crop your shipping labels into 4x6 format instantly to save paper and printing costs. Works without uploading images to any server.</p>
    `;
  } else if (route === "/privacy-policy") {
    html += `
      <p>Hey there, I'm the owner of CompressPDF. I've built this tool to make your life easier when dealing with large PDF files, especially for government forms. Because I value your privacy as much as my own, here is exactly how I handle your data.</p>
      <h2>NO FILE UPLOADS</h2>
      <p>The most important thing to know is that your PDFs never leave your computer. When you "upload" a file here, it stays in your browser. My website uses local processing technology. This means your private documents, photos, or ID proofs are never sent to my server or stored anywhere online by me.</p>
      <h2>PERSONAL DATA</h2>
      <p>I don't ask for your name, phone number, or email address to use the tools. There are no user accounts here. If you use the contact form, I'll see your email just so I can reply to you, but that's it.</p>
      <h2>SERVER LOGS</h2>
      <p>Like any other website on the internet, my server automatically picks up some basic info like your IP address, what browser you are using, and the time you visited. This is just standard stuff for security and to see how many people are using the site.</p>
      <h2>THIRD PARTIES</h2>
      <p>Since I don't collect your files or personal info, I have nothing to sell to anyone. If I ever add ads or analytics in the future to help pay for the server costs, those services might have their own way of looking at anonymous data, but your PDFs will always remain private and local.</p>
    `;
  } else if (route === "/terms-conditions") {
    html += `
      <p>Welcome to CompressPDF (https://compresspdfto200kb.online). By using this site, you're agreeing to these simple rules.</p>
      <h2>HOW TO USE THE SITE</h2>
      <p>You can use my tools for free as much as you want. I built these specifically to help with things like SSC, UPSC, and other job or government portal uploads. Just don't use the site for anything illegal or to try and break the website.</p>
      <h2>NO GUARANTEES</h2>
      <p>I try my best to make sure the tools work perfectly, but I'm just one person. The service is provided "as-is." I can't promise that the website will always be up or that the compressed files will always be accepted by every single portal out there (though they usually are!).</p>
      <h2>LIABILITY</h2>
      <p>Since all the processing happens on your own computer and I never even see your files, I'm not responsible for any issues that happen after you download your file. Please check your documents after processing to make sure they look right.</p>
      <h2>JURISDICTION</h2>
      <p>Any legal talk or issues will be handled under the laws of India.</p>
    `;
  } else if (route === "/disclaimer") {
    html += `
      <p>Please read this before using the tools on https://compresspdfto200kb.online.</p>
      <h2>NOT A GOVERNMENT SITE</h2>
      <p>I want to be 100% clear: This website, CompressPDF, is NOT affiliated with, authorized by, or endorsed by any government body, including SSC, UPSC, or any state portal. I am an independent developer providing these tools to help people meet size requirements easily.</p>
      <h2>RESULTS MAY VARY</h2>
      <p>Every PDF is different. Depending on how your original file was made, the compression might work better or worse. I can't guarantee that every file will reach exactly 200KB or that the quality will be perfect for your specific needs. Please check your document before submitting it to any official portal.</p>
      <h2>USE AT YOUR OWN RISK</h2>
      <p>I am not responsible for any missed deadlines, rejected applications, or data issues that might happen. It's your responsibility to make sure the final document meets the requirements of the portal you are uploading to.</p>
    `;
  } else if (route === "/cookies-policy") {
    html += `
      <p>I like to keep things simple.</p>
      <h2>CURRENT STATUS: NO COOKIES</h2>
      <p>As of right now, CompressPDF (https://compresspdfto200kb.online) does NOT use any cookies. I don't track your sessions, I don't save your preferences in cookies, and there are no tracking pixels here. That's why you don't see a big annoying cookie banner when you visit.</p>
      <h2>FUTURE CHANGES</h2>
      <p>In the future, I might add third-party services like Google Analytics (to see which tools are popular) or Google AdSense (to help pay for the domain and hosting). These services usually use their own cookies.</p>
      <p>If and when I decide to add these features, I will update this policy and add a proper notice on the website so you stay informed.</p>
      <h2>STAYING PRIVATE</h2>
      <p>Because the tools work entirely in your browser without uploading files, the lack of cookies means your visit is very private.</p>
    `;
  }

  // Common FAQ section for all tools
  html += `
    <div style="margin-top: 2rem; border-top: 1px solid #eee; padding-top: 1rem;">
      <h2>Common Questions</h2>
      <div class="faq-item">
        <strong>Is this PDF tool free to use?</strong>
        <p>Yes, all our tools are 100% free with no limits on the number of files you can process.</p>
      </div>
      <div class="faq-item">
        <strong>Are my files safe and private?</strong>
        <p>Absolutely. We use purely client-side technology. Your files never leave your computer and are never uploaded to any server.</p>
      </div>
      <div class="faq-item">
        <strong>Does it work on mobile phones?</strong>
        <p>Yes! Our website is fully optimized for all mobile browsers, including Android and iPhone.</p>
      </div>
    </div>
  `;

  return html;
}

function run() {
  if (!fs.existsSync(DIST_DIR)) {
    console.log("❌ dist folder not found. Run `vite build` first.");
    process.exit(1);
  }

  const assets = getAssets();

  console.log("✅ Generating static pages into dist...");
  console.log("✅ Using assets:", assets);
  console.log("✅ GA enabled:", GA_ID);

  for (const route of ROUTES) {
    const meta = getMeta(route);

    const outDir =
      route === "/"
        ? DIST_DIR
        : path.join(DIST_DIR, route.replace(/^\//, ""));

    ensureDir(outDir);

    const filePath = path.join(outDir, "index.html");
    fs.writeFileSync(filePath, createHtml(route, meta, assets), "utf8");

    console.log("✅ generated:", route);
  }

  console.log("🎉 Done. Static pages created.");
}

run();
