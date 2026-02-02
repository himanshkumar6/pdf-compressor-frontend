// src/utils/breadcrumbItems.ts

import { BLOG_POSTS } from "./blogPosts";

/**
 * BreadcrumbSchema.tsx expects:
 * items: { name: string; url: string }[]
 */

export type BreadcrumbSchemaItem = {
  name: string;
  url: string;
};

const SITE_URL = "https://compresspdfto200kb.online";

/**
 * ✅ Human labels for static routes
 */
const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",

  // Tools
  "/compress-pdf": "Compress PDF",
  "/compress-pdf-to-100kb": "Compress PDF to 100KB",
  "/compress-pdf-to-200kb": "Compress PDF to 200KB",
  "/compress-pdf-free": "Compress PDF Free",
  "/scanned-pdf-compressor": "Scanned PDF Compressor",
  "/scanned-pdf-to-200kb": "Scanned PDF to 200KB",
  "/remove-metadata-from-pdf": "Remove Metadata from PDF",

  // Pages
  "/tools": "All Tools",
  "/blog": "Blog",
  "/contact": "Contact",
  "/about": "About",
  "/privacy-policy": "Privacy Policy",
  "/terms-conditions": "Terms & Conditions",
  "/disclaimer": "Disclaimer",
};

function safeJoinUrl(pathname: string) {
  // pathname always starts with "/"
  return `${SITE_URL}${pathname}`;
}

/**
 * ✅ Pretty fallback title from slug
 * example: "remove-metadata-from-pdf" => "Remove Metadata From Pdf"
 */
function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * ✅ Detect: /blog/:slug
 */
function isBlogPostPath(pathname: string) {
  return pathname.startsWith("/blog/") && pathname.split("/").length >= 3;
}

/**
 * ✅ Extract slug from /blog/:slug
 */
function getBlogSlug(pathname: string) {
  const parts = pathname.split("/").filter(Boolean); // ["blog", "slug"]
  return parts.length >= 2 ? parts[1] : "";
}

/**
 * ✅ Build breadcrumb schema items for any route
 * Works for:
 * - Tool pages
 * - Blog listing /blog?page=...
 * - Blog post /blog/:slug
 * - Other static pages
 */
export function buildBreadcrumbSchemaItems(
  pathname: string
): BreadcrumbSchemaItem[] {
  // normalize: remove trailing slash except "/"
  let path = pathname?.trim() || "/";
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);

  // homepage => no breadcrumb schema needed usually (but safe)
  // still return Home only, optional
  if (path === "/") {
    return [{ name: "Home", url: `${SITE_URL}/` }];
  }

  // ✅ base crumbs always
  const crumbs: BreadcrumbSchemaItem[] = [
    { name: "Home", url: `${SITE_URL}/` },
  ];

  /**
   * ✅ BLOG POST
   * /blog/:slug
   */
  if (isBlogPostPath(path)) {
    const slug = getBlogSlug(path);

    // Blog listing crumb
    crumbs.push({ name: "Blog", url: safeJoinUrl("/blog") });

    // Find real title from BLOG_POSTS
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    crumbs.push({
      name: post?.title || titleFromSlug(slug) || "Article",
      url: safeJoinUrl(`/blog/${slug}`),
    });

    return crumbs;
  }

  /**
   * ✅ Exact match static pages
   * tools + privacy policy + blog listing etc.
   */
  if (ROUTE_LABELS[path]) {
    crumbs.push({
      name: ROUTE_LABELS[path],
      url: safeJoinUrl(path),
    });
    return crumbs;
  }

  /**
   * ✅ Nested fallback
   * Example: /tools/something
   * create hierarchical crumbs: /tools -> /tools/something
   */
  const parts = path.split("/").filter(Boolean);
  let current = "";

  for (const part of parts) {
    current += `/${part}`;

    // label priority:
    // 1) exact mapping
    // 2) pretty slug fallback
    const label = ROUTE_LABELS[current] || titleFromSlug(part);

    crumbs.push({
      name: label,
      url: safeJoinUrl(current),
    });
  }

  /**
   * ✅ Remove duplicates (safety)
   */
  const unique: BreadcrumbSchemaItem[] = [];
  const seen = new Set<string>();

  for (const c of crumbs) {
    const key = c.url;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(c);
  }

  return unique;
}
