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
  "/sitemap",
  "/tools",
  "/blog",
];

// ✅ Tool Routes (Hinglish/English)
export const TOOL_ROUTES = [
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
  "/resize-pdf-kb",
  "/resize-pdf-200kb",
  "/resize-pdf-mb",
  "/pdf-to-jpg",
  "/merge-pdf",
  "/split-pdf",
  "/edit-pdf",
  "/jpg-to-pdf",
  "/flipkart-label-cropper",
  "/meesho-label-cropper",
  "/pdf-to-word" // Added new tool
];

// ✅ Blog Routes
export const BLOG_ROUTES = [
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

// ✅ Russian Routes
export const RU_ROUTES = [
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
  "/ru/izmenit-razmer-pdf-kb",
  "/ru/izmenit-razmer-pdf-mb",
  "/ru/pdf-v-jpg",
  "/ru/obedinit-pdf",
  "/ru/razdelit-pdf",
  "/ru/flipkart-label-cropper",
  "/ru/meesho-label-cropper",
];

// Combine all for Sitemap/StaticGen
export const ALL_ROUTES = [
  ...MAIN_ROUTES,
  ...TOOL_ROUTES,
  ...BLOG_ROUTES,
  ...RU_ROUTES,
];
