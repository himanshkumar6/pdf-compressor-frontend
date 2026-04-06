import React, { useEffect } from "react";
import { DEFAULT_SEO, SITE } from "../utils/seoData";

/**
 * Reusable SEO component for all pages.
 * - title: 50–60 characters (meta + og:title)
 * - description: 120–160 characters (meta + og:description)
 * - canonical: full URL (also used for og:url)
 */
export interface SEOProps {
  /** Page title; 50–60 chars recommended for SEO */
  title?: string;
  /** Meta description; 120–160 chars recommended */
  description?: string;
  /** Full canonical URL (e.g. https://example.com/page) */
  canonical?: string;
  /** Optional JSON-LD schema object */
  schema?: unknown;
  /** Language code (e.g. "en", "ru") */
  lang?: string;
  /** Alternate language links for hreflang */
  alternateLinks?: Array<{ href: string; lang: string }>;
  /** Prevent indexing (for 404s/private pages) */
  noindex?: boolean;
}

function setMetaByName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function removeMetaByName(name: string) {
  const tag = document.querySelector(`meta[name="${name}"]`);
  if (tag) tag.remove();
}

function setMetaByProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.querySelector(`link[rel="canonical"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setJsonLd(schema: unknown) {
  const old = document.querySelector(`script[data-seo="jsonld"]`);
  if (old) old.remove();

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo", "jsonld");
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

function setHreflangLinks(links: Array<{ href: string; lang: string }>) {
  // Remove existing hreflang links
  const existing = document.querySelectorAll(`link[rel="alternate"][hreflang]`);
  existing.forEach((el) => el.remove());

  // Add new ones
  links.forEach(({ href, lang }) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", lang);
    link.setAttribute("href", href);
    document.head.appendChild(link);
  });

  // Also add x-default if it's not provided (usually pointing to English home)
  if (!links.find((l) => l.lang === "x-default")) {
    const defaultLink = document.createElement("link");
    defaultLink.setAttribute("rel", "alternate");
    defaultLink.setAttribute("hreflang", "x-default");
    const enHome = links.find(l => l.lang === 'en')?.href || 'https://compresspdfto200kb.online/';
    defaultLink.setAttribute("href", enHome);
    document.head.appendChild(defaultLink);
  }
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, schema, lang, alternateLinks, noindex }) => {
  useEffect(() => {
    const metaTitle = title || DEFAULT_SEO.title;
    const metaDescription = description || DEFAULT_SEO.description;
    const metaUrl = canonical || DEFAULT_SEO.canonical || SITE.baseUrl;
    const metaLang = lang || "en";

    // ✅ lang
    document.documentElement.lang = metaLang;

    // ✅ title
    document.title = metaTitle;

    // ✅ noindex
    if (noindex) {
      setMetaByName("robots", "noindex, nofollow");
    } else {
      removeMetaByName("robots");
    }

    // ✅ meta description
    setMetaByName("description", metaDescription);

    // ✅ canonical
    setCanonical(metaUrl);

    // ✅ Open Graph
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:title", metaTitle);
    setMetaByProperty("og:description", metaDescription);
    setMetaByProperty("og:url", metaUrl);
    setMetaByProperty("og:site_name", DEFAULT_SEO.siteName);

    // ✅ Twitter
    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", metaTitle);
    setMetaByName("twitter:description", metaDescription);

    // ✅ Schema JSON-LD
    if (schema) setJsonLd(schema);

    // ✅ Hreflang
    if (alternateLinks) {
      setHreflangLinks(alternateLinks);
    }
  }, [title, description, canonical, schema, lang, alternateLinks, noindex]);

  return null;
};

export default SEO;
