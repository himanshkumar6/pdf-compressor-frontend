import { useEffect } from "react";

type SEOInput = {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object;
};

function setMeta(name: string, content: string) {
  let tag = document.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(url?: string) {
  if (!url) return;
  let link = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export function useSEO({ title, description, canonical, jsonLd }: SEOInput) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setCanonical(canonical);

    // remove old JSON-LD
    const old = document.querySelector('script[data-seo="jsonld"]');
    if (old) old.remove();

    // add new JSON-LD
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "jsonld");
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, jsonLd]);
}
