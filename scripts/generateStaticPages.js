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
  const pathStr = (route || "/").replace(/\/+$/, "") || "/";
  const url = pathStr === "/" ? `${base}/` : `${base}${pathStr}`;
  return url.replace(/^http:/, "https:");
}

// ✅ ROUTES (must match sitemap canonical paths)
// ✅ Import from Single Source of Truth
import { ALL_ROUTES as ROUTES } from "../src/data/routes.js";

// ✅ Basic SEO
const SEO = {
  "/": {
    title: "Compress PDF to 200KB Online | Free PDF Compressor Tool",
    description:
      "Compress PDF files to 200KB online using a free PDF compressor tool. Upload PDF, reduce size without losing readability, and download instantly.",
  },
  "/about": {
    title: "About Us - CompressPDFto200KB.online",
    description:
      "Learn more about CompressPDFto200KB.online — a privacy-focused PDF compression tool built for govt portals, job forms and online uploads.",
  },
  "/contact": {
    title: "Contact Us - CompressPDFto200KB.online",
    description:
      "Contact CompressPDFto200KB.online for feedback, support, and suggestions related to PDF compression and document upload issues.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - CompressPDFto200KB.online",
    description:
      "Read our privacy policy. Your PDFs are processed locally in your browser and never uploaded to our servers.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions - CompressPDFto200KB.online",
    description:
      "Read the terms & conditions for using CompressPDFto200KB.online PDF tools and services.",
  },
  "/disclaimer": {
    title: "Disclaimer - CompressPDFto200KB.online",
    description:
      "Read disclaimer for CompressPDFto200KB.online. We provide informational tools and guides without portal-specific guarantees.",
  },
  "/blog": {
    title: "CompressPDF Blog - Fix PDF Upload Errors & Reduce PDF Size",
    description:
      "Guides to compress PDF to 200KB, fix upload errors on SSC/UPSC/job portals, passport/visa document size issues and more.",
  },
  "/sitemap": {
    title: "Sitemap - CompressPDFto200KB.online",
    description:
      "HTML sitemap of CompressPDFto200KB.online. Find all PDF tools and blog posts in one place.",
  },
  "/tools": {
    title: "PDF Tools – Compress, Reduce Size, Remove Metadata | Free",
    description:
      "All PDF tools in one place: compress PDF, compress to 200KB or 100KB, scanned PDF compressor, remove metadata. Free, private, browser-based.",
  },

  // ✅ Russian SEO
  "/ru": {
    title: "Сжать PDF Онлайн Бесплатно | Уменьшить размер PDF",
    description: "Сжать PDF онлайн бесплатно. Уменьшить размер PDF файла без потери качества. Быстро, безопасно, без регистрации. Работает в браузере.",
  },
  "/ru/o-nas": {
    title: "О Нас - CompressPDFto200KB.online",
    description: "Узнайте больше о нашем сервисе. Мы помогаем студентам и специалистам бесплатно сжимать PDF документы для государственных порталов.",
  },
  "/ru/kontakty": {
    title: "Контакты - CompressPDFto200KB.online",
    description: "Свяжитесь с нами, если у вас есть вопросы или предложения по улучшению сервиса сжатия PDF.",
  },
  "/ru/politika-konfidencialnosti": {
    title: "Политика Конфиденциальности - CompressPDFto200KB.online",
    description: "Мы уважаем вашу приватность. Ваши файлы обрабатываются локально в браузере и никогда не загружаются на наши серверы.",
  },
  "/ru/usloviya": {
    title: "Условия Использования - CompressPDFto200KB.online",
    description: "Правила использования наших бесплатных инструментов для работы с PDF.",
  },
  "/ru/otkaz-ot-otvetstvennosti": {
    title: "Отказ от Ответственности - CompressPDFto200KB.online",
    description: "Отказ от ответственности: мы предоставляем инструменты 'как есть' без гарантий для конкретных порталов.",
  },
  "/ru/blog": {
    title: "Блог - CompressPDFto200KB.online",
    description: "Блог о сжатии PDF и работе с документами.",
  },
  "/ru/instrumenty": {
    title: "PDF Инструменты – Сжать, Уменьшить, Очистить | Бесплатно",
    description: "Все инструменты для работы с PDF: сжатие до 200кб, 100кб, удаление метаданных. Бесплатно, безопасно, в браузере.",
  },
  "/ru/szhat-pdf": {
    title: "Сжать PDF Онлайн Бесплатно | Уменьшить размер PDF",
    description: "Сжать PDF онлайн бесплатно. Уменьшить размер PDF файла без потери качества. Быстро, безопасно, без регистрации. Работает в браузере.",
  },
  "/ru/szhat-pdf-do-50kb": {
    title: "Сжать PDF до 50 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 50 кб онлайн бесплатно. Идеально для строгих лимитов при загрузке документов и подписей.",
  },
  "/ru/szhat-pdf-do-100kb": {
    title: "Сжать PDF до 100 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 100 кб онлайн. Подходит для резюме, анкет и заявлений. Быстрая обработка в браузере.",
  },
  "/ru/szhat-pdf-do-150kb": {
    title: "Сжать PDF до 150 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 150 кб онлайн бесплатно. Оптимально для порталов госуслуг, вузов и паспортных столов.",
  },
  "/ru/szhat-pdf-do-200kb": {
    title: "Сжать PDF до 200 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 200 кб онлайн. Самый популярный формат для Госуслуг, ФНС и других государственных порталов.",
  },
  "/ru/szhat-pdf-do-500kb": {
    title: "Сжать PDF до 500 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 500 кб онлайн. Отлично подходит для отправки по почте, портфолио и презентаций.",
  },
  "/ru/szhat-pdf-do-1mb": {
    title: "Сжать PDF до 1 МБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 1 МБ онлайн. Для больших договоров, книг и отчетов. Сохраняет высокое качество.",
  },
  "/ru/umenshit-razmer-pdf-do-500kb": {
    title: "Уменьшить размер PDF файла до 500 КБ Онлайн (Бесплатно)",
    description: "Бесплатно уменьшить размер PDF до 500 КБ. Быстрая оптимизация для отправки по email и загрузки на сайты.",
  },
  "/ru/szhat-skanirovannyj-pdf": {
    title: "Сжать Сканированный PDF Онлайн | Уменьшить размер скана",
    description: "Сжать сканированный PDF онлайн. Умная оптимизация сканов документов, квитанций и рукописей без размытия текста.",
  },
  "/ru/szhat-skanirovannyj-pdf-do-200kb": {
    title: "Сжать Скан PDF до 200 КБ Онлайн | Уменьшить размер скана",
    description: "Сжать сканированный PDF до 200 КБ. Специальный алгоритм для паспортов, дипломов и справок. Проходит проверки на порталах.",
  },
  "/ru/udalit-metadannye-pdf": {
    title: "Удалить метаданные из PDF Онлайн (Очистить свойства файла)",
    description: "Удалить автора, дату создания и скрытые метаданные из PDF онлайн. Повысьте конфиденциальность перед отправкой документа.",
  },
  "/resize-pdf-kb": {
    title: "Resize PDF to KB Online | Set Target Size for SSC, UPSC Forms",
    description: "Resize PDF in KB online for free. Set a target size like 50KB, 100KB, or 200KB for government portals and job forms. Fast and private.",
  },
  "/resize-pdf-mb": {
    title: "Resize PDF to MB Online | Reduce Large PDFs for Email",
    description: "Resize PDF in MB online to reduce large documents for email attachments. Set target size to 1MB, 2MB, or 5MB easily in your browser.",
  },
  "/pdf-to-jpg": {
    title: "PDF to JPG Converter Online | High Quality (Free & Private)",
    description: "Convert PDF pages to JPG images online for free. Maintain high resolution for document scans and ID proofs. No upload required.",
  },
  "/merge-pdf": {
    title: "Merge PDF Online | Combine Multiple PDFs into One (Free)",
    description: "Merge multiple PDF files into a single document online. Rearrange pages easily and combine certificates or reports securely.",
  },
  "/split-pdf": {
    title: "Split PDF Online | Extract Pages from PDF (Free & Private)",
    description: "Split PDF pages online or extract specific pages from a document. Visual preview available for easy page selection. 100% private.",
  },
  "/ru/izmenit-razmer-pdf-kb": {
    title: "Изменить размер PDF в КБ Онлайн | Уменьшить вес документа",
    description: "Изменить размер PDF в КБ онлайн. Задайте точный размер (50 КБ, 100 КБ) для загрузки на порталы. Конфиденциально и бесплатно.",
  },
  "/ru/izmenit-razmer-pdf-mb": {
    title: "Изменить размер PDF в МБ Онлайн | Уменьшить объем PDF",
    description: "Изменить размер PDF в МБ онлайн для почты и хранения. Уменьшите тяжелые файлы до 1 МБ или 2 МБ прямо в браузере.",
  },
  "/ru/pdf-v-jpg": {
    title: "PDF в JPG Онлайн | Конвертировать страницы в изображения",
    description: "Конвертировать PDF в JPG онлайн бесплатно. Превратите страницы PDF в четкие картинки JPG без загрузки на сервер.",
  },
  "/ru/obedinit-pdf": {
    title: "Объединить PDF Онлайн | Склеить несколько PDF файлов",
    description: "Объединить PDF онлайн бесплатно. Склейте страницы и документы в один файл. Удобная сортировка и полная безопасность.",
  },
  "/ru/razdelit-pdf": {
    title: "Разделить PDF Онлайн | Извлечь страницы из документа",
    description: "Разделить PDF онлайн бесплатно. Выбирайте страницы визуально и извлекайте их в новый файл. Быстро и приватно.",
  },
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

/** Paths to include in crawlable internal links (plain <a href>). All ROUTES so every page gets incoming links. */
const CRAWLABLE_LINK_PATHS = ROUTES;

/** Offscreen CSS: crawlable by bots, not display:none/visibility:hidden. */
const OFFSCREEN_STYLE =
  "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;";

/** SEO content block */
const SEO_CONTENT = {}; // keep your existing SEO_CONTENT object here if you want (not required for yandex fix)

// ✅ helpers you already have
function getSeoContent(route, meta) {
  return {
    h1: meta.title,
    content: meta.description || "",
    steps: [],
    faqs: [],
  };
}

const SEO_BLOCK_STYLE = OFFSCREEN_STYLE;

function buildSeoContentHtml(route, meta) {
  const seo = getSeoContent(route, meta);
  return `<section id="seo-content-block" style="${SEO_BLOCK_STYLE}" aria-hidden="true"><h1>${escapeHtml(
    seo.h1
  )}</h1><p style="white-space:pre-line;">${escapeHtml(
    seo.content
  )}</p></section>`;
}

/** Build hidden-but-crawlable internal links nav */
function buildCrawlableLinksHtml() {
  const links = CRAWLABLE_LINK_PATHS.map((p) => {
    const href = p === "/" ? "/" : p;
    const text = p === "/" ? "Home" : p.replace(/^\//, "");
    return `<a href="${href}">${escapeHtml(text)}</a>`;
  }).join("");
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
<div id="root"></div>

<script>
  history.replaceState({}, "", "${route}");
</script>
</body>
</html>`;
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
