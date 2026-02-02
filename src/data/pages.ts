/**
 * Central routes and page config for internal linking (audit-friendly).
 * Single source for: /tools page, navbar, footer, related tools, sitemap.
 */

export type ToolPageItem = {
  path: string;
  label: string;
  shortDesc: string;
};

export type MainPageItem = {
  path: string;
  label: string;
};

/** All tool pages (for /tools listing, footer Tools column, Related Tools section) */
export const TOOL_PAGES: ToolPageItem[] = [
  {
    path: "/compress-pdf",
    label: "Compress PDF Online",
    shortDesc: "Smart compression with quality",
  },
  {
    path: "/compress-pdf-to-50kb",
    label: "Compress PDF to 50KB",
    shortDesc: "For strict 50KB upload limits",
  },
  {
    path: "/compress-pdf-to-100kb",
    label: "Compress PDF to 100KB",
    shortDesc: "Strict limit uploads",
  },
  {
    path: "/compress-pdf-to-150kb",
    label: "Compress PDF to 150KB",
    shortDesc: "Perfect for form uploads",
  },
  {
    path: "/compress-pdf-to-200kb",
    label: "Compress PDF to 200KB",
    shortDesc: "Best for govt forms & portals",
  },
  {
    path: "/compress-pdf-to-500kb",
    label: "Compress PDF to 500KB",
    shortDesc: "For email & job portals",
  },
  {
    path: "/compress-pdf-to-1mb",
    label: "Compress PDF to 1MB",
    shortDesc: "For large document uploads",
  },
  {
    path: "/reduce-pdf-size-to-500kb",
    label: "Reduce PDF Size to 500KB",
    shortDesc: "Reduce PDF for email & portals",
  },
  {
    path: "/scanned-pdf-compressor",
    label: "Scanned PDF Compressor",
    shortDesc: "Reduce scanned PDF size",
  },
  {
    path: "/scanned-pdf-to-200kb",
    label: "Scanned PDF to 200KB",
    shortDesc: "Target 200KB for scanned docs",
  },
  {
    path: "/remove-metadata-from-pdf",
    label: "Remove Metadata from PDF",
    shortDesc: "Erase author, creator, XMP data",
  },
];

/** Main nav links (header): Home, Tools, Blog, About, Contact */
export const MAIN_NAV_PAGES: MainPageItem[] = [
  { path: "/", label: "Home" },
  { path: "/tools", label: "All Tools" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

/** Footer Support column */
export const FOOTER_SUPPORT_PAGES: MainPageItem[] = [
  { path: "/tools", label: "All Tools" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
  { path: "/sitemap", label: "Sitemap" },
];

/** Footer Legal column */
export const FOOTER_LEGAL_PAGES: MainPageItem[] = [
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms-conditions", label: "Terms & Conditions" },
  { path: "/disclaimer", label: "Disclaimer" },
];

/** Set of tool paths (for App: hide nav/footer on tool pages) */
export const TOOL_ROUTES_SET = new Set(TOOL_PAGES.map((t) => t.path));

/**
 * Get related tool pages (excluding current). Used for "Related Tools" section.
 * Returns all other tools (min 4 for audit; we have 7 tools so always 6 links).
 */
export function getRelatedTools(
  currentPath: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _minCount = 4
): ToolPageItem[] {
  return TOOL_PAGES.filter((t) => t.path !== currentPath);
}

/** Navbar Tools dropdown: same as TOOL_PAGES (label + shortDesc) */
export const TOOLS_NAV = TOOL_PAGES.map((t) => ({
  label: t.label,
  desc: t.shortDesc,
  to: t.path,
}));
