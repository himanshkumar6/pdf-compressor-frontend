// src/utils/cleanBlogHtml.ts
export function cleanBlogHtml(html: string) {
  let out = html;

  // 1) Fix markdown-style anchors that Gemini sometimes outputs:
  // <a href="[https://site](https://site)">text</a>
  out = out.replace(/<a\s+href="\[([^\]]+)\]\([^)]+\)"/g, `<a href="$1"`);

  // 2) Fix cases where anchor text itself includes markdown
  // <a href="...">[https://...](https://...)</a>
  out = out.replace(/>\s*\[([^\]]+)\]\([^)]+\)\s*</g, `>$1<`);

  // 3) Remove table attributes (border/cellpadding/cellspacing/style etc.)
  out = out.replace(/<table[^>]*>/g, `<table>`);

  // 4) Remove style attributes from tr/th/td
  out = out.replace(/<tr[^>]*>/g, "<tr>");
  out = out.replace(/<th[^>]*>/g, "<th>");
  out = out.replace(/<td[^>]*>/g, "<td>");

  // 5) Remove HR tags (not needed, looks weird in prose)
  out = out.replace(/<hr\s*\/?>/g, "");

  // 6) Cleanup multiple blank lines
  out = out.replace(/\n{3,}/g, "\n\n");

  return out.trim();
}
