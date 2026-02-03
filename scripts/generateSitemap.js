/**
 * Sitemap generator: canonical URLs only, https only, trailing slash consistent.
 * Canonical format: home = baseUrl/, others = baseUrl + path (no trailing slash).
 * Generates: sitemap.xml (index), sitemap-hi.xml, sitemap-ru.xml.
 * Run: node scripts/generateSitemap.js
 */

import fs from "fs";
import path from "path";

const BASE_URL = "https://compresspdfto200kb.online";
// ✅ Output to dist/ so it runs after build
const DIST_DIR = path.resolve("dist");

/** Canonical paths (must match PAGES_SEO / app routes). No trailing slash except home. */
const CANONICAL_PATHS = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
  "/disclaimer",
  "/sitemap",
  "/tools",
  "/blog",
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
  "/blog/how-to-compress-a-pdf-on-mac",

  // ✅ Russian Paths
  "/ru",
  "/ru/o-nas",
  "/ru/kontakty",
  "/ru/politika-konfidencialnosti",
  "/ru/usloviya",
  "/ru/otkaz-ot-otvetstvennosti",
  "/ru/blog",
  "/ru/instrumenty",
  "/ru/szhat-pdf",
  "/ru/szhat-pdf-do-50kb",
  "/ru/szhat-pdf-do-100kb",
  "/ru/szhat-pdf-do-150kb",
  "/ru/szhat-pdf-do-200kb",
  "/ru/szhat-pdf-do-500kb",
  "/ru/szhat-pdf-do-1mb",
  "/ru/umenshit-razmer-pdf-do-500kb",
  "/ru/szhat-skanirovannyj-pdf",
  "/ru/szhat-skanirovannyj-pdf-do-200kb",
  "/ru/udalit-metadannye-pdf",
];

/** Build canonical URL: https only, trailing slash only for home. */
function toCanonicalUrl(pathStr) {
  const base = BASE_URL.replace(/\/$/, "");
  const clean = pathStr.replace(/\/+$/, "") || "/";
  const url = clean === "/" ? `${base}/` : `${base}${clean}`;
  return url.replace(/^http:/, "https:");
}

/** Ensure https only. */
function ensureHttps(url) {
  return url.startsWith("http://") ? url.replace("http://", "https://") : url;
}

function generateXmlForRoutes(paths, today) {
  const urls = paths.map((p) => {
    const loc = ensureHttps(toCanonicalUrl(p));
    const isHome = p === "/" || p === "/ru";
    const isBlogPost = p.includes("/blog/") && !p.endsWith("/blog");
    const isTool = [
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
      // RU Tools
      "/ru/szhat-pdf",
      "/ru/szhat-pdf-do-50kb",
      "/ru/szhat-pdf-do-100kb",
      "/ru/szhat-pdf-do-150kb",
      "/ru/szhat-pdf-do-200kb",
      "/ru/szhat-pdf-do-500kb",
      "/ru/szhat-pdf-do-1mb",
      "/ru/umenshit-razmer-pdf-do-500kb",
      "/ru/szhat-skanirovannyj-pdf",
      "/ru/szhat-skanirovannyj-pdf-do-200kb",
      "/ru/udalit-metadannye-pdf"
    ].includes(p);

    let changefreq = "monthly";
    let priority = "0.5";
    if (isHome) {
      changefreq = "weekly";
      priority = "1.0";
    } else if (isTool) {
      changefreq = "weekly";
      if (["/compress-pdf-to-200kb", "/compress-pdf-to-100kb", "/compress-pdf-to-150kb", "/ru/szhat-pdf-do-200kb"].includes(p)) {
        priority = "0.9";
      } else {
        priority = "0.8";
      }
    } else if (p.endsWith("/blog")) {
      changefreq = "weekly";
      priority = "0.6";
    } else if (isBlogPost) {
      changefreq = "yearly";
      priority = "0.5";
    } else if (["/privacy-policy", "/terms-conditions", "/disclaimer", "/ru/politika-konfidencialnosti", "/ru/usloviya", "/ru/otkaz-ot-otvetstvennosti"].includes(p)) {
      changefreq = "monthly";
      priority = "0.6";
    }

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

function run() {
  const today = new Date().toISOString().slice(0, 10);

  // ✅ Partition routes
  const ruPaths = CANONICAL_PATHS.filter(p => p.startsWith("/ru"));
  const hiPaths = CANONICAL_PATHS.filter(p => !p.startsWith("/ru"));

  // ✅ Generate Sitemap Files
  const hiXml = generateXmlForRoutes(hiPaths, today);
  const ruXml = generateXmlForRoutes(ruPaths, today);

  // ✅ Generate Sitemap Index
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-hi.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-ru.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;

  // ✅ Ensure dist exists
  if (!fs.existsSync(DIST_DIR)) {
    console.log("Creating dist directory...");
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  // ✅ Write files
  fs.writeFileSync(path.join(DIST_DIR, "sitemap-hi.xml"), hiXml, "utf8");
  fs.writeFileSync(path.join(DIST_DIR, "sitemap-ru.xml"), ruXml, "utf8");
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), indexXml, "utf8");

  // ✅ Cleanup: Remove old sitemap-en.xml if it exists anywhere
  ["public/sitemap-en.xml", "dist/sitemap-en.xml", "public/sitemap.xml"].forEach(file => {
    const fullPath = path.resolve(file);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`🗑️ Removed old file: ${file}`);
    }
  });

  console.log(`✅ Sitemap Index written to ${path.join(DIST_DIR, "sitemap.xml")}`);
  console.log(`✅ Hinglish Sitemap: ${hiPaths.length} URLs`);
  console.log(`✅ Russian Sitemap: ${ruPaths.length} URLs`);
}

run();

