console.log("🚀 Starting Sitemap Generation...");

import fs from "fs";
import path from "path";

const BASE_URL = "https://compresspdfto200kb.online";
const DIST_DIR = path.resolve("dist");

// ✅ Import canonical routes
import { ALL_ROUTES as CANONICAL_PATHS } from "../src/data/routes.js";

// ✅ Import dynamic blog slugs
import { BLOG_SLUGS } from "../src/data/blogSlugs.js";

/* ----------------------------- */
/* Canonical URL Builder */
/* ----------------------------- */
function toCanonicalUrl(routePath) {
  const base = BASE_URL.replace(/\/$/, "");
  const clean = routePath.replace(/\/+$/, "") || "/";
  return clean === "/" ? `${base}/` : `${base}${clean}`;
}

/* ----------------------------- */
/* XML Generator */
/* ----------------------------- */
function generateXml(paths, today) {
  const urls = paths.map((p) => {
    const loc = toCanonicalUrl(p);

    const isHome = p === "/" || p === "/ru" || p === "/es/dividir-pdf-en-varias-partes-online";
    const isBlogIndex = p.endsWith("/blog");
    const isBlogPost = p.includes("/blog/") && !isBlogIndex;
    const isTool = !isHome && !isBlogIndex && !isBlogPost;

    let changefreq = "monthly";
    let priority = "0.6";

    if (isHome) {
      changefreq = "weekly";
      priority = "1.0";
    } else if (isTool) {
      changefreq = "weekly";
      priority = "0.8";
    } else if (isBlogIndex) {
      changefreq = "weekly";
      priority = "0.7";
    } else if (isBlogPost) {
      changefreq = "yearly";
      priority = "0.5";
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
</urlset>`;
}

/* ----------------------------- */
/* Main Runner */
/* ----------------------------- */
function run() {
  const today = new Date().toISOString().slice(0, 10);

  console.log("📌 Blog slugs loaded:", BLOG_SLUGS.length);

  // ✅ Dynamic Blog Paths
  const blogPaths = BLOG_SLUGS.map((slug) => `/blog/${slug}`);

  // ✅ Merge + remove duplicates
  const ALL_PATHS = [...new Set([...CANONICAL_PATHS, ...blogPaths])];

  // ✅ Partition by locale
  const ruPaths = ALL_PATHS.filter((p) => p.startsWith("/ru"));
  const esPaths = ALL_PATHS.filter((p) => p.startsWith("/es"));
  const hiPaths = ALL_PATHS.filter(
    (p) => !p.startsWith("/ru") && !p.startsWith("/es")
  );

  // ✅ Generate XMLs
  const hiXml = generateXml(hiPaths, today);
  const ruXml = generateXml(ruPaths, today);
  const esXml = generateXml(esPaths, today);

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
  <sitemap>
    <loc>${BASE_URL}/sitemap-es.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(DIST_DIR, "sitemap-hi.xml"), hiXml);
  fs.writeFileSync(path.join(DIST_DIR, "sitemap-ru.xml"), ruXml);
  fs.writeFileSync(path.join(DIST_DIR, "sitemap-es.xml"), esXml);
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), indexXml);

  console.log("✅ Sitemap Generated Successfully");
  console.log("HI URLs:", hiPaths.length);
  console.log("RU URLs:", ruPaths.length);
  console.log("ES URLs:", esPaths.length);
}

run();
