
import fs from "fs";
import path from "path";

const BASE_URL = "https://compresspdfto200kb.online";
const DIST_DIR = path.resolve("dist");

// ✅ Import Routes
import { ALL_ROUTES as CANONICAL_PATHS } from "../src/data/routes.js";

/* ----------------------------- */
/* Canonical URL Builder */
/* ----------------------------- */
function toCanonicalUrl(pathStr) {
  const base = BASE_URL.replace(/\/$/, "");
  const clean = pathStr.replace(/\/+$/, "") || "/";
  return clean === "/" ? `${base}/` : `${base}${clean}`;
}

/* ----------------------------- */
/* Generate XML */
/* ----------------------------- */
function generateXmlForRoutes(paths, today) {
  const urls = paths.map((p) => {
    const loc = toCanonicalUrl(p);

    // Detect blog post
    const blogMatch = BLOG_POSTS.find(
      (post) => `/blog/${post.slug}` === p
    );

    const isHome = p === "/" || p === "/ru";
    const isBlogIndex = p.endsWith("/blog");
    const isBlogPost = blogMatch !== undefined;
    const isTool =
      !isHome &&
      !isBlogIndex &&
      !isBlogPost &&
      !p.startsWith("/ru/blog");

    // Blog lastmod = blog date
    const lastmod = blogMatch ? blogMatch.date : today;

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
    <lastmod>${lastmod}</lastmod>
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

  // ✅ Auto add blog paths
  const blogPaths = BLOG_POSTS.map(
    (post) => `/blog/${post.slug}`
  );

  // Merge & remove duplicates
  const ALL_PATHS = [...new Set([...CANONICAL_PATHS, ...blogPaths])];

  // Partition
  const ruPaths = ALL_PATHS.filter((p) => p.startsWith("/ru"));
  const hiPaths = ALL_PATHS.filter((p) => !p.startsWith("/ru"));

  const hiXml = generateXmlForRoutes(hiPaths, today);
  const ruXml = generateXmlForRoutes(ruPaths, today);

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
</sitemapindex>`;

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(DIST_DIR, "sitemap-hi.xml"), hiXml, "utf8");
  fs.writeFileSync(path.join(DIST_DIR, "sitemap-ru.xml"), ruXml, "utf8");
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), indexXml, "utf8");

  console.log("✅ Sitemap Generated Successfully");
  console.log(`HI URLs: ${hiPaths.length}`);
  console.log(`RU URLs: ${ruPaths.length}`);
}

run();
