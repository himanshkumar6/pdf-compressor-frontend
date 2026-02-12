/**
 * 🚀 SINGLE SOURCE OF TRUTH FOR ROUTES
 * Used by:
 * 1. Build Scripts (Node.js) - generateSitemap.js, generateStaticPages.js
 * 2. Frontend (Vite/React) - toolsRegistry.ts, App.tsx
 */

export const BASE_URL = "https://compresspdfto200kb.online";

// ✅ Main Pages
export const MAIN_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
  "/disclaimer",
  "/cookies-policy",
  "/sitemap",
  "/tools",
  "/blog",
];

// ✅ Tool Routes (Consolidated to 7 primary tools)
export const TOOL_ROUTES = [
  "/compress-pdf-to-200kb",
  "/pdf-to-jpg",
  "/jpg-to-pdf",
  "/merge-pdf",
  "/split-pdf",
  "/edit-pdf",
  "/remove-metadata-from-pdf",
];

// ✅ Blog Routes (Handled dynamically in sitemap script usually, or kept empty if not needed here)
export const BLOG_ROUTES = [];

// ✅ Russian & Spanish Routes (Removed - Consolidated to Home)
export const RU_ROUTES = [];
export const ES_ROUTES = [];

// Combine all for Sitemap/StaticGen
export const ALL_ROUTES = [
  ...MAIN_ROUTES,
  ...TOOL_ROUTES,
  ...BLOG_ROUTES,
  ...RU_ROUTES,
  ...ES_ROUTES,
];
