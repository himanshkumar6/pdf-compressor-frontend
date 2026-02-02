// src/utils/breadcrumbMap.ts

export type Crumb = { label: string; to: string };

export const getBreadcrumbsForPath = (
  pathname: string,
): { crumbs: Crumb[]; jsonLd: unknown } => {
  const base = "https://compresspdfto200kb.online";

  const home: Crumb = { label: "Home", to: "/" };

  // Blog post route: /blog/:slug
  if (pathname.startsWith("/blog/") && pathname.split("/").length === 3) {
    return {
      crumbs: [
        home,
        { label: "Blog", to: "/blog" },
        { label: "Article", to: pathname },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${base}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Article",
            item: `${base}${pathname}`,
          },
        ],
      },
    };
  }

  // Blog listing route: /blog
  if (pathname === "/blog") {
    return {
      crumbs: [home, { label: "Blog", to: "/blog" }],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${base}/blog`,
          },
        ],
      },
    };
  }

  // Tool routes
  const TOOL_LABELS: Record<string, string> = {
    "/compress-pdf-to-200kb": "Compress PDF to 200KB",
    "/remove-metadata-from-pdf": "Remove Metadata from PDF",
    "/compress-pdf": "Compress PDF",
  };

  if (TOOL_LABELS[pathname]) {
    const label = TOOL_LABELS[pathname];

    return {
      crumbs: [home, { label: "Tools", to: "/#tool" }, { label, to: pathname }],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: `${base}/#tool`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: label,
            item: `${base}${pathname}`,
          },
        ],
      },
    };
  }

  // Default: Only Home
  return {
    crumbs: [home],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${base}/`,
        },
      ],
    },
  };
};
