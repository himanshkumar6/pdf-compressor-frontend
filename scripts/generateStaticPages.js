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
const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
  "/disclaimer",
  "/sitemap",
  "/tools",
  "/blog",

  "/blog/how-to-compress-a-pdf-on-mac",
  "/blog/govt-form-pdf-reject-fix-compress-200kb",
  "/blog/ssc-form-pdf-size-limit-200kb",
  "/blog/upsc-documents-upload-guide-pdf-compress",
  "/blog/job-portal-resume-upload-problem-pdf-size-reduce",
  "/blog/passport-portal-200kb-limit-pdf-upload-error-fix",
  "/blog/mobile-se-pdf-compress-kaise-kare-without-app",
  "/blog/visa-kyc-pdf-upload-fail-size-reduce-solution",
  "/blog/scanned-pdf-heavy-size-reduce-complete-guide",
  "/blog/scholarship-form-pdf-upload-guide-200kb-document",
  "/blog/email-me-pdf-attach-nahi-ho-rahi-size-reduce",

  "/compress-pdf",
  "/compress-pdf-to-50kb",
  "/compress-pdf-to-100kb",
  "/compress-pdf-to-150kb",
  "/compress-pdf-to-200kb",
  "/compress-pdf-to-500kb",
  "/compress-pdf-to-1mb",
  "/reduce-pdf-size-to-500kb",
  "/scanned-pdf-compressor",
  "/scanned-pdf-to-200kb",
  "/remove-metadata-from-pdf",
];

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

// ✅ Create proper HTML that loads SPA + correct meta tags
function createHtml(route, meta, assets) {
  const canonical = getCanonicalUrl(route);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${canonical}" />

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
${buildSeoContentHtml(route, meta)}
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
