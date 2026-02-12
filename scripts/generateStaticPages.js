import fs from "fs";
import path from "path";

const SITE = "https://compresspdfto200kb.online";
const DIST_DIR = path.resolve("dist");

// ✅ IMPORT UNIFIED METADATA
import { SITE_CONFIG, SEO_METADATA, RU_METADATA, BLOG_METADATA, ES_METADATA } from "../src/data/metadata.js";

const YANDEX_VERIFICATION = SITE_CONFIG.yandexVerification;
const GA_ID = SITE_CONFIG.gaId;

/** Canonical URL: https only, trailing slash only for home (matches sitemap). */
function getCanonicalUrl(route) {
  const base = SITE.replace(/\/$/, "");
  const path = route === "/" ? "/" : route.replace(/\/+$/, "");
  return `${base}${path}`;
}

// ✅ ROUTES (must match sitemap canonical paths)
// ✅ Import from Single Source of Truth
import { ALL_ROUTES as ROUTES } from "../src/data/routes.js";

// ✅ Basic SEO
// ✅ Metadata is now imported from ../src/data/metadata.js

// ✅ Utilities
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getMeta(route) {
  // Check regular routes
  if (SEO_METADATA[route]) {
    return SEO_METADATA[route];
  }

  // Check RU routes
  if (RU_METADATA[route]) {
    return RU_METADATA[route];
  }

  // Check ES routes
  if (ES_METADATA[route]) {
    return ES_METADATA[route];
  }

  // Check blog routes
  if (route.startsWith("/blog/")) {
    const slug = route.split("/").pop();
    if (BLOG_METADATA[slug]) {
      return BLOG_METADATA[slug];
    }
  }

  // Fallback
  return {
    title: "Compress PDF to 200KB Online",
    description: "Free PDF compression tools to reduce PDF size for government forms, job portals and uploads.",
  };
}

// ✅ Auto detect built assets from dist/assets
function getAssets() {
  const assetsDir = path.join(DIST_DIR, "assets");

  if (!fs.existsSync(assetsDir)) {
    throw new Error("dist/assets not found. Run vite build first.");
  }

  const files = fs.readdirSync(assetsDir);

  const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const cssFile = files.find((f) => f.startsWith("index-") && f.endsWith(".css"));

  if (!jsFile) throw new Error("index-*.js not found in dist/assets");
  if (!cssFile) throw new Error("index-*.css not found in dist/assets");

  return {
    js: `/assets/${jsFile}`,
    css: `/assets/${cssFile}`,
  };
}

// ✅ Google Tag HTML
function buildGoogleTag() {
  return `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', '${GA_ID}', { send_page_view: false });
</script>
  `.trim();
}

/** Build descriptive internal links nav for crawlers */
function buildCrawlableLinksHtml() {
  const links = ROUTES.slice(0, 20).map((p) => {
    const meta = getMeta(p);
    return `<a href="${p}" style="color: #666; margin-right: 15px; text-decoration: none;">${escapeHtml(meta.title.split("|")[0].trim())}</a>`;
  }).join(" ");

  return `<div class="crawlable-links" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px; font-size: 12px;">
    <strong>Quick Links:</strong> ${links}
  </div>`;
}

/** Get translated version for hreflang */
function getAlternateUrls(route) {
  const mapping = {
    "/": ["/ru"],
    "/about": ["/ru/o-nas"],
    "/contact": ["/ru/kontakty"],
    "/privacy-policy": ["/ru/politika-konfidencialnosti"],
    "/terms-conditions": ["/ru/usloviya"],
    "/disclaimer": ["/ru/otkaz-ot-otvetstvennosti"],
    "/tools": ["/ru/instrumenty"],
    "/blog": ["/ru/blog"],
    "/compress-pdf": ["/ru/szhat-pdf"],
    "/compress-pdf-to-50kb": ["/ru/szhat-pdf-do-50kb"],
    "/compress-pdf-to-100kb": ["/ru/szhat-pdf-do-100kb"],
    "/compress-pdf-to-150kb": ["/ru/szhat-pdf-do-150kb"],
    "/compress-pdf-to-200kb": ["/ru/szhat-pdf-do-200kb"],
    "/compress-pdf-to-500kb": ["/ru/szhat-pdf-do-500kb"],
    "/compress-pdf-to-1mb": ["/ru/szhat-pdf-do-1mb"],
    "/reduce-pdf-size-to-500kb": ["/ru/umenshit-razmer-pdf-do-500kb"],
    "/scanned-pdf-compressor": ["/ru/szhat-skanirovannyj-pdf"],
    "/scanned-pdf-to-200kb": ["/ru/szhat-skanirovannyj-pdf-do-200kb"],
    "/remove-metadata-from-pdf": ["/ru/udalit-metadannye-pdf"],
    "/resize-pdf-kb": ["/ru/izmenit-razmer-pdf-kb"],
    "/resize-pdf-mb": ["/ru/izmenit-razmer-pdf-mb"],
    "/pdf-to-jpg": ["/ru/pdf-v-jpg"],
    "/merge-pdf": ["/ru/obedinit-pdf"],
    "/split-pdf": ["/ru/razdelit-pdf", "/es/dividir-pdf-en-varias-partes-online"],
  };

  // Build a reverse mapping
  const reverseMapping = {};
  for (const en in mapping) {
    mapping[en].forEach(alt => {
      reverseMapping[alt] = en;
    });
  }

  const alts = [];
  if (mapping[route]) {
    mapping[route].forEach(pathStr => {
      const code = pathStr.startsWith("/ru") ? "ru" : pathStr.startsWith("/es") ? "es" : "en";
      alts.push({ lang: code, href: getCanonicalUrl(pathStr) });
    });
  } else if (reverseMapping[route]) {
    const enPath = reverseMapping[route];
    alts.push({ lang: "en", href: getCanonicalUrl(enPath) });
    // Add other siblings
    mapping[enPath].forEach(pathStr => {
      if (pathStr !== route) {
        const code = pathStr.startsWith("/ru") ? "ru" : pathStr.startsWith("/es") ? "es" : "en";
        alts.push({ lang: code, href: getCanonicalUrl(pathStr) });
      }
    });
  }

  return alts;
}

// ✅ Create proper HTML that loads SPA + correct meta tags
function createHtml(route, meta, assets) {
  const canonical = getCanonicalUrl(route);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  const isRu = route.startsWith("/ru");
  const isEs = route.startsWith("/es");
  const lang = isRu ? "ru" : isEs ? "es" : "en";

  const alternates = getAlternateUrls(route);
  const alternateLinks = alternates.map(alt =>
    `<link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`
  ).join("\n");

  const selfLink = `<link rel="alternate" hreflang="${lang}" href="${canonical}" />`;
  const xDefault = (isRu || isEs) ? "" : `<link rel="alternate" hreflang="x-default" href="${canonical}" />`;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${canonical}" />
${selfLink}
${alternateLinks}
${xDefault}

<!-- ✅ Verification -->
<meta name="yandex-verification" content="${YANDEX_VERIFICATION}" />
<meta name="google-site-verification" content="${SITE_CONFIG.googleVerification}" />

<meta property="og:type" content="website" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${SITE}/og-image.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />

<link rel="stylesheet" crossorigin href="${assets.css}" />
<script type="module" crossorigin src="${assets.js}"></script>

${buildGoogleTag()}
</head>

<body>

<div id="root">
  <!-- ✅ PRE-RENDERED SEO CONTENT (Hydrated by React) -->
  <div class="pre-rendered-seo" style="padding: 20px; max-width: 800px; margin: 0 auto; color: #333;">
    ${buildSeoContentHtml(route, meta)}
    ${buildCrawlableLinksHtml()}
  </div>
</div>

</body>
</html>`;
}

/**
 * ✅ Build rich HTML for SEO (The Magic against Thin Content)
 */
function buildSeoContentHtml(route, meta) {
  // Extract clean H1 from title
  const h1 = meta.title.split("|")[0].trim();
  let html = `<h1>${escapeHtml(h1)}</h1>`;
  html += `<p>${escapeHtml(meta.description)}</p>`;

  // Context-aware content injection
  if (route.includes("compress")) {
    html += `
      <h2>How to compress PDF online?</h2>
      <ol>
        <li>Click "Select PDF" button above or drag and drop your file.</li>
        <li>Your file is processed locally in your browser - 100% private.</li>
        <li>Wait a second for optimization and download your compressed PDF instantly.</li>
      </ol>
      <h2>Why use our PDF Compressor?</h2>
      <p>Our tool is designed for students and professionals. Whether you need to upload a 200KB PDF for SSC, UPSC, or any government portal, we optimize the file specifically for those requirements without losing text clarity.</p>
    `;
  } else if (route.includes("resize")) {
    html += `
      <h2>How to resize PDF to a specific size?</h2>
      <p>Need exactly 50KB or 100KB? Just set your target size and let the tool do the rest. Perfect for job applications and portal uploads where size limits are strict.</p>
      <p>Our intelligent engine adjusts image quality and document structure to meet your target KB without making the document unreadable.</p>
    `;
  } else if (route.includes("pdf-to-jpg") || route.includes("jpg-to-pdf")) {
    html += `
      <h2>High Quality PDF Conversion</h2>
      <p>Convert documents to images or images to PDF with zero quality loss. Ideal for converting ID proofs, certificates, and marksheets for online submission.</p>
      <ul>
        <li>Convert whole PDF to JPG in one click.</li>
        <li>Combine multiple JPGs into a single professional PDF.</li>
        <li>Works offline in your browser.</li>
      </ul>
    `;
  } else if (route.includes("merge") || route.includes("split")) {
    html += `
      <h2>Organize Your PDF Documents</h2>
      <p>Merge multiple files into one or extract specific pages from a large document. Our visual preview makes it easy to select and rearrange pages as needed.</p>
    `;
  } else if (route.includes("metadata")) {
    html += `
      <h2>Remove PDF Metadata for Privacy</h2>
      <p>Hidden information like author name, creation date, and software used can be sensitive. Our tool clears all properties before you share the document.</p>
    `;
  } else if (route.includes("cropper")) {
    html += `
      <h2>Shipping Label Cropping for Thermal Printers</h2>
      <p>Perfect for Flipkart and Meesho sellers. Crop your shipping labels into 4x6 format instantly to save paper and printing costs. Works without uploading images to any server.</p>
    `;
  } else if (route.startsWith("/es/")) {
    // Spanish Content (Sanitized from markdown)
    html += `
      <h2>¿Por qué tienes que andar dividiendo tus PDF?</h2>
      <p>Pues básicamente porque los portales oficiales (sí, Hacienda, el SEPE o la Seguridad Social) suelen ser muy tiquismiquis. Te piden escaneos perfectos, pero luego te limitan el tamaño por archivo.</p>
      <h2>Tu privacidad no es negociable</h2>
      <p>Lo habitual es que, al usar una web para cortar un PDF, tu archivo se suba a su "nube". Pero si es una nómina o tu DNI, ¿quién sabe quién se queda con una copia?</p>
      <p>Aquí el proceso es distinto. Todo ocurre dentro de tu navegador. Tus papeles no salen de tu casa. Es como usar un programa en tu PC, pero sin instalaciones raras. Rápido, limpio y blindado.</p>
      <h2>Cómo separar un PDF en partes sin volverte loco</h2>
      <p>Hemos simplificado el proceso al máximo. Tres pasos y fuera:</p>
      <ol>
        <li>Sube tu PDF: Arrástralo o búscalo en tus carpetas. Se carga al instante porque no tiene que viajar por la red.</li>
        <li>Elige las páginas: Verás las miniaturas de tu archivo. Pincha en las que necesites o pon el rango (ideal si solo quieres de la página 2 a la 5).</li>
        <li>Descárgalo: Dale al botón y, antes de que parpadees, tendrás los archivos listos para subirlos a donde necesites.</li>
      </ol>
      <h2>Preguntas Frecuentes</h2>
      <div class="faq-item">
        <strong>¿De verdad es 100% privado?</strong>
        <p>Sí. El archivo entra en tu memoria RAM, se divide y sale a tus descargas. Nosotros ni lo vemos ni podemos guardarlo aunque quisiéramos.</p>
      </div>
      <div class="faq-item">
        <strong>¿Se pierde calidad al separar las páginas?</strong>
        <p>Para nada. El texto sigue siendo nítido y las fotos mantienen su resolución original. Solo reorganizamos el archivo.</p>
      </div>
    `;
  } else if (route === "/privacy-policy") {
    html += `
      <p>Hey there, I'm the owner of CompressPDF. I've built this tool to make your life easier when dealing with large PDF files, especially for government forms. Because I value your privacy as much as my own, here is exactly how I handle your data.</p>
      <h2>NO FILE UPLOADS</h2>
      <p>The most important thing to know is that your PDFs never leave your computer. When you "upload" a file here, it stays in your browser. My website uses local processing technology. This means your private documents, photos, or ID proofs are never sent to my server or stored anywhere online by me.</p>
      <h2>PERSONAL DATA</h2>
      <p>I don't ask for your name, phone number, or email address to use the tools. There are no user accounts here. If you use the contact form, I'll see your email just so I can reply to you, but that's it.</p>
      <h2>SERVER LOGS</h2>
      <p>Like any other website on the internet, my server automatically picks up some basic info like your IP address, what browser you are using, and the time you visited. This is just standard stuff for security and to see how many people are using the site.</p>
      <h2>THIRD PARTIES</h2>
      <p>Since I don't collect your files or personal info, I have nothing to sell to anyone. If I ever add ads or analytics in the future to help pay for the server costs, those services might have their own way of looking at anonymous data, but your PDFs will always remain private and local.</p>
    `;
  } else if (route === "/terms-conditions") {
    html += `
      <p>Welcome to CompressPDF (https://compresspdfto200kb.online). By using this site, you're agreeing to these simple rules.</p>
      <h2>HOW TO USE THE SITE</h2>
      <p>You can use my tools for free as much as you want. I built these specifically to help with things like SSC, UPSC, and other job or government portal uploads. Just don't use the site for anything illegal or to try and break the website.</p>
      <h2>NO GUARANTEES</h2>
      <p>I try my best to make sure the tools work perfectly, but I'm just one person. The service is provided "as-is." I can't promise that the website will always be up or that the compressed files will always be accepted by every single portal out there (though they usually are!).</p>
      <h2>LIABILITY</h2>
      <p>Since all the processing happens on your own computer and I never even see your files, I'm not responsible for any issues that happen after you download your file. Please check your documents after processing to make sure they look right.</p>
      <h2>JURISDICTION</h2>
      <p>Any legal talk or issues will be handled under the laws of India.</p>
    `;
  } else if (route === "/disclaimer") {
    html += `
      <p>Please read this before using the tools on https://compresspdfto200kb.online.</p>
      <h2>NOT A GOVERNMENT SITE</h2>
      <p>I want to be 100% clear: This website, CompressPDF, is NOT affiliated with, authorized by, or endorsed by any government body, including SSC, UPSC, or any state portal. I am an independent developer providing these tools to help people meet size requirements easily.</p>
      <h2>RESULTS MAY VARY</h2>
      <p>Every PDF is different. Depending on how your original file was made, the compression might work better or worse. I can't guarantee that every file will reach exactly 200KB or that the quality will be perfect for your specific needs. Please check your document before submitting it to any official portal.</p>
      <h2>USE AT YOUR OWN RISK</h2>
      <p>I am not responsible for any missed deadlines, rejected applications, or data issues that might happen. It's your responsibility to make sure the final document meets the requirements of the portal you are uploading to.</p>
    `;
  } else if (route === "/cookies-policy") {
    html += `
      <p>I like to keep things simple.</p>
      <h2>CURRENT STATUS: NO COOKIES</h2>
      <p>As of right now, CompressPDF (https://compresspdfto200kb.online) does NOT use any cookies. I don't track your sessions, I don't save your preferences in cookies, and there are no tracking pixels here. That's why you don't see a big annoying cookie banner when you visit.</p>
      <h2>FUTURE CHANGES</h2>
      <p>In the future, I might add third-party services like Google Analytics (to see which tools are popular) or Google AdSense (to help pay for the domain and hosting). These services usually use their own cookies.</p>
      <p>If and when I decide to add these features, I will update this policy and add a proper notice on the website so you stay informed.</p>
      <h2>STAYING PRIVATE</h2>
      <p>Because the tools work entirely in your browser without uploading files, the lack of cookies means your visit is very private.</p>
    `;
  }

  // Common FAQ section for all tools
  html += `
    <div style="margin-top: 2rem; border-top: 1px solid #eee; padding-top: 1rem;">
      <h2>Common Questions</h2>
      <div class="faq-item">
        <strong>Is this PDF tool free to use?</strong>
        <p>Yes, all our tools are 100% free with no limits on the number of files you can process.</p>
      </div>
      <div class="faq-item">
        <strong>Are my files safe and private?</strong>
        <p>Absolutely. We use purely client-side technology. Your files never leave your computer and are never uploaded to any server.</p>
      </div>
      <div class="faq-item">
        <strong>Does it work on mobile phones?</strong>
        <p>Yes! Our website is fully optimized for all mobile browsers, including Android and iPhone.</p>
      </div>
    </div>
  `;

  return html;
}

function run() {
  if (!fs.existsSync(DIST_DIR)) {
    console.log("❌ dist folder not found. Run `vite build` first.");
    process.exit(1);
  }

  const assets = getAssets();

  console.log("✅ Generating static pages into dist...");
  console.log("✅ Using assets:", assets);
  console.log("✅ GA enabled:", GA_ID);

  for (const route of ROUTES) {
    const meta = getMeta(route);

    const outDir =
      route === "/"
        ? DIST_DIR
        : path.join(DIST_DIR, route.replace(/^\//, ""));

    ensureDir(outDir);

    const filePath = path.join(outDir, "index.html");
    fs.writeFileSync(filePath, createHtml(route, meta, assets), "utf8");

    console.log("✅ generated:", route);
  }

  console.log("🎉 Done. Static pages created.");
}

run();
