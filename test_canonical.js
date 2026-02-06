const SITE = "https://compresspdfto200kb.online";

function getCanonicalUrl(route) {
  const base = SITE.replace(/\/$/, "");
  const path = route === "/" ? "/" : route.replace(/\/+$/, "");
  return `${base}${path}`;
}

const testRoutes = [
  "/",
  "/compress-pdf-to-200kb",
  "/resize-pdf-mb",
  "/pdf-to-jpg",
  "/ru/szhat-pdf",
  "/privacy-policy"
];

testRoutes.forEach(route => {
  console.log(`Route: ${route} -> Canonical: ${getCanonicalUrl(route)}`);
});
