import fs from "fs";
import path from "path";

const SITE = "https://compresspdfto200kb.online";
const DIST_DIR = path.resolve("dist");

// -----------------------------
// IMPORT METADATA
// -----------------------------
import {
  SITE_CONFIG,
  SEO_METADATA,
  RU_METADATA,
  BLOG_METADATA,
  ES_METADATA,
} from "../src/data/metadata.js";

import { ALL_ROUTES as ROUTES } from "../src/data/routes.js";

const YANDEX_VERIFICATION = SITE_CONFIG.yandexVerification;
const GA_ID = SITE_CONFIG.gaId;

// -----------------------------
// ✅ SAFE THEME PRELOAD SCRIPT
// (ROLLUP + VERCEL SAFE)
// -----------------------------
const THEME_PRELOAD_SCRIPT =
  '<script>(function(){try{var k="theme-mode";var r=document.documentElement;r.classList.add("theme-preload");var s=localStorage.getItem(k);var m=(s==="light"||s==="dark"||s==="system")?s:"system";var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;var t=m==="system"?(d?"dark":"light"):m;r.classList.remove("light","dark");r.classList.add(t);r.style.colorScheme=t;r.dataset.themeMode=m;setTimeout(function(){r.classList.remove("theme-preload")},0);}catch(e){}})();</script>';

// -----------------------------
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getCanonicalUrl(route) {
  const base = SITE.replace(/\/$/, "");
  const p = route === "/" ? "/" : route.replace(/\/+$/, "");
  return `${base}${p}`;
}

// -----------------------------
// META RESOLVER
// -----------------------------
function getMeta(route) {
  if (SEO_METADATA[route]) return SEO_METADATA[route];
  if (RU_METADATA[route]) return RU_METADATA[route];
  if (ES_METADATA[route]) return ES_METADATA[route];

  if (route.startsWith("/blog/")) {
    const slug = route.split("/").pop();
    if (BLOG_METADATA[slug]) return BLOG_METADATA[slug];
  }

  return {
    title: "Compress PDF Online",
    description:
      "Free PDF compression and conversion tools for documents.",
  };
}

// -----------------------------
// AUTO DETECT BUILT ASSETS
// -----------------------------
function getAssets() {
  const assetsDir = path.join(DIST_DIR, "assets");

  const files = fs.readdirSync(assetsDir);

  return {
    js: `/assets/${files.find(f => f.startsWith("index-") && f.endsWith(".js"))}`,
    css: `/assets/${files.find(f => f.startsWith("index-") && f.endsWith(".css"))}`,
  };
}

// -----------------------------
function buildGoogleTag() {
  return `
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${GA_ID}',{send_page_view:false});
</script>`;
}

// -----------------------------
// SEO CONTENT
// -----------------------------
function buildSeoContentHtml(route, meta) {
  const h1 = meta.title.split("|")[0].trim();

  return `
<h1>${escapeHtml(h1)}</h1>
<p>${escapeHtml(meta.description)}</p>
`;
}

// -----------------------------
// HTML GENERATOR
// -----------------------------
function createHtml(route, meta, assets) {
  const canonical = getCanonicalUrl(route);

  return `<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>

<title>${escapeHtml(meta.title)}</title>
<meta name="description" content="${escapeHtml(meta.description)}"/>
<link rel="canonical" href="${canonical}"/>

<link rel="icon" href="/favicon.svg"/>

<link rel="stylesheet" crossorigin href="${assets.css}" />

${THEME_PRELOAD_SCRIPT}

${buildGoogleTag()}

<script type="module" crossorigin src="${assets.js}"></script>

<meta name="yandex-verification" content="${YANDEX_VERIFICATION}" />

</head>

<body>

<div id="root">
<div style="
position:absolute;
width:1px;
height:1px;
overflow:hidden;
clip:rect(0,0,0,0);
white-space:nowrap;
">
${buildSeoContentHtml(route, meta)}
</div>
</div>

</body>
</html>`;
}

// -----------------------------
// MAIN RUNNER
// -----------------------------
function run() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error("Run vite build first.");
    process.exit(1);
  }

  const assets = getAssets();

  console.log("Generating SSG pages...");

  for (const route of ROUTES) {
    const meta = getMeta(route);

    const outDir =
      route === "/"
        ? DIST_DIR
        : path.join(DIST_DIR, route.replace(/^\//, ""));

    ensureDir(outDir);

    fs.writeFileSync(
      path.join(outDir, "index.html"),
      createHtml(route, meta, assets),
      "utf8"
    );

    console.log("✓", route);
  }

  console.log("✅ Static pages generated successfully");
}

run();