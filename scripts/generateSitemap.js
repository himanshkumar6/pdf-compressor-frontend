/**
 * Sitemap generator: canonical URLs only, https only, trailing slash consistent.
 * Canonical format: home = baseUrl/, others = baseUrl + path (no trailing slash).
 * Run: node scripts/generateSitemap.js
 */

import fs from "fs";
import path from "path";

const BASE_URL = "https://compresspdfto200kb.online";
const OUTPUT = path.resolve("public", "sitemap.xml");

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

function run() {
  const today = new Date().toISOString().slice(0, 10);

  const urls = CANONICAL_PATHS.map((p) => {
    const loc = ensureHttps(toCanonicalUrl(p));
    const isHome = p === "/";
    const isBlogPost = p.startsWith("/blog/") && p !== "/blog";
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
    ].includes(p);

    let changefreq = "monthly";
    let priority = "0.5";
    if (isHome) {
      changefreq = "weekly";
      priority = "1.0";
    } else if (isTool) {
      changefreq = "weekly";
      // High priority for main target sizes
      if (["/compress-pdf-to-200kb", "/compress-pdf-to-100kb", "/compress-pdf-to-150kb"].includes(p)) {
        priority = "0.9";
      } else {
        priority = "0.8";
      }
    } else if (p === "/blog") {
      changefreq = "weekly";
      priority = "0.6";
    } else if (isBlogPost) {
      changefreq = "yearly";
      priority = "0.5";
    } else if (["/privacy-policy", "/terms-conditions", "/disclaimer"].includes(p)) {
      changefreq = "monthly";
      priority = "0.6";
    } else if (["/about", "/contact"].includes(p)) {
      changefreq = "yearly";
      priority = "0.4";
    } else if (["/sitemap", "/tools"].includes(p)) {
      changefreq = "monthly";
      priority = "0.5";
    }

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  fs.writeFileSync(OUTPUT, xml, "utf8");
  console.log(`✅ Sitemap written to ${OUTPUT} (${CANONICAL_PATHS.length} canonical URLs)`);
}

run();
