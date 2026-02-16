console.log("🚀 Starting Sitemap Generation...");

import fs from "fs";
import path from "path";

const BASE_URL = "https://compresspdfto200kb.online";
const DIST_DIR = path.resolve("dist");

// ✅ Canonical routes
import { ALL_ROUTES as CANONICAL_PATHS } from "../src/data/routes.js";

// ✅ Blog posts with slug + date
import { BLOG_POSTS } from "../src/utils/blogPosts.ts";

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
function generateXml(pages) {
  const urls = pages.map((page) => {
    const loc = toCanonicalUrl(page.path);

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join("\n")}
</urlset>`;
}

/* ----------------------------- */
/* Main Runner */
/* ----------------------------- */
function run() {
  const today = new Date().toISOString().slice(0, 10);

  console.log("📌 Blog posts loaded:", BLOG_POSTS.length);

  // 🏠 Static Pages + Tools
  const staticPages = CANONICAL_PATHS.map((route) => {
    let changefreq = "monthly";
    let priority = "0.6";

    if (route === "/") {
      changefreq = "weekly";
      priority = "1.0";
    }
    else if (route === "/compress-pdf-to-200kb") {
      changefreq = "weekly";
      priority = "0.9"; // 🔥 money page boost
    }
    else if (route.includes("pdf")) {
      changefreq = "weekly";
      priority = "0.8";
    }
    else if (route === "/blog") {
      changefreq = "weekly";
      priority = "0.7";
    }
    else if (
      route.includes("privacy") ||
      route.includes("terms") ||
      route.includes("disclaimer") ||
      route.includes("cookies")
    ) {
      changefreq = "yearly";
      priority = "0.3";
    }

    return {
      path: route,
      lastmod: today,
      changefreq,
      priority
    };
  });

  // 📝 Blog Posts with real dates
  const blogPages = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: post.date, // ✅ real publish date
    changefreq: "monthly",
    priority: "0.6"
  }));

  // 🔥 Merge + remove duplicates
  const allPagesMap = new Map();

  [...staticPages, ...blogPages].forEach((page) => {
    if (!allPagesMap.has(page.path)) {
      allPagesMap.set(page.path, page);
    }
  });

  const finalPages = Array.from(allPagesMap.values());

  const sitemapXml = generateXml(finalPages);

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml);

  console.log("✅ Sitemap Generated Successfully");
  console.log("Total URLs:", finalPages.length);
}

run();
