/**
 * Central routes and page config for internal linking (audit-friendly).
 * Single source for: /tools page, navbar, footer, related tools, sitemap.
 */

import { TOOLS_REGISTRY } from "./toolsRegistry";

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
export const TOOL_PAGES: ToolPageItem[] = TOOLS_REGISTRY.map((t) => ({
  path: t.slug,
  label: t.title,
  shortDesc: t.shortDescription,
}));

/** Russian Tool Pages List */
export const RU_TOOL_PAGES: ToolPageItem[] = TOOLS_REGISTRY.filter(
  (t) => t.ru
).map((t) => ({
  path: t.ru!.slug,
  label: t.ru!.title,
  shortDesc: t.ru!.shortDescription,
}));

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
  { path: "/cookies-policy", label: "Cookie Policy" },
];

/** Set of active tool paths (for App: hide nav/footer on tool pages) */
const ALL_TOOL_PATHS = [
  ...TOOLS_REGISTRY.map((t) => t.slug),
  ...TOOLS_REGISTRY.filter((t) => t.ru).map((t) => t.ru!.slug),
];

export const TOOL_ROUTES_SET = new Set(ALL_TOOL_PATHS);

/**
 * Get related tool pages (excluding current). Used for "Related Tools" section.
 */
export function getRelatedTools(
  currentPath: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _minCount = 4
): ToolPageItem[] {
  const isRu = currentPath.startsWith("/ru");
  const sourceList = isRu ? RU_TOOL_PAGES : TOOL_PAGES;

  /* ✅ SMART CLUSTERING: Prioritize same category */
  const allTools = isRu ?  TOOLS_REGISTRY.filter(t => t.ru) : TOOLS_REGISTRY;
  const currentTool = allTools.find(t => isRu ? t.ru?.slug === currentPath : t.slug === currentPath);
  
  const category = currentTool?.category;

  const sameCategory = sourceList.filter(t => {
     const tool = allTools.find(at => (isRu ? at.ru?.slug : at.slug) === t.path);
     return tool?.category === category && t.path !== currentPath;
  });

  const otherCategory = sourceList.filter(t => {
     const tool = allTools.find(at => (isRu ? at.ru?.slug : at.slug) === t.path);
     return tool?.category !== category && t.path !== currentPath;
  });

  // Interleave or just concat: Same Cat (High Priority) + Others
  return [...sameCategory, ...otherCategory].slice(0, 4);
}

/** Navbar Tools dropdown */
export const TOOLS_NAV = TOOL_PAGES.map((t) => ({
  label: t.label,
  desc: t.shortDesc,
  to: t.path,
}));
