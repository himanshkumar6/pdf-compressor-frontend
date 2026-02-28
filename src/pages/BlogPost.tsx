import React, { useMemo } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

import { BLOG_POSTS } from "../utils/blogPosts";
import TableOfContents from "../components/TableOfContents";
import FAQAccordion, { type FAQItem } from "../components/FAQAccordion";
import { cleanBlogHtml } from "../utils/cleanBlogHtml";

import { buildBreadcrumbSchemaItems } from "../utils/breadcrumbItems";

// ✅ Safe slugify
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ✅ Escape string for regex
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ✅ Add unique ids to h2/h3 so TOC works
function addHeadingIds(html: string) {
  const used = new Map<string, number>();

  const addForTag = (tag: "h2" | "h3", inputHtml: string) => {
    const regex = new RegExp(`<${tag}([^>]*)>([\\s\\S]*?)</${tag}>`, "gi");

    return inputHtml.replace(regex, (_m, attrs, inner) => {
      const plain = inner.replace(/<[^>]*>/g, "").trim();
      if (!plain) return `<${tag}${attrs}>${inner}</${tag}>`;

      let id = slugify(plain);

      const count = used.get(id) ?? 0;
      used.set(id, count + 1);
      if (count > 0) id = `${id}-${count + 1}`;

      if (String(attrs).includes("id=")) {
        return `<${tag}${attrs}>${inner}</${tag}>`;
      }

      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
    });
  };

  const withH2 = addForTag("h2", html);
  const withH3 = addForTag("h3", withH2);
  return withH3;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function extractFaqsFromHtml(_html: string): FAQItem[] {
  // Future: agar tum HTML se FAQ extract karna chaho toh implement kar dena
  return [];
}

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const location = useLocation();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // ✅ Breadcrumb JSON-LD items auto
  const breadcrumbSchemaItems = useMemo(() => {
    return buildBreadcrumbSchemaItems(location.pathname);
  }, [location.pathname]);

  const htmlWithIds = useMemo(() => {
    if (!post) return "";

    let cleaned = cleanBlogHtml(post.contentHtml);

    // ✅ fix markdown links if any left
    cleaned = cleaned.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_m, text, url) => `<a href="${url}">${text}</a>`
    );

    // ✅ remove title if repeated inside content
    const titleRegex = new RegExp(
      `<h2[^>]*>\\s*${escapeRegExp(post.title)}\\s*</h2>`,
      "i"
    );
    cleaned = cleaned.replace(titleRegex, "");

    return addHeadingIds(cleaned);
  }, [post]);

  const faqs = useMemo(() => {
    if (!post) return [];
    return extractFaqsFromHtml(post.contentHtml);
  }, [post]);

  if (!post) {
    return (
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-white">
        <h1 className="text-3xl font-black">Post not found</h1>
        <Link
          to="/blog"
          className="inline-block mt-6 text-cyan-400 font-black underline"
        >
          ← Back to blogs
        </Link>
      </div>
    );
  }

  // ✅ canonical url
  const canonicalUrl = `https://compresspdfto200kb.online/blog/${post.slug}`;

  // ✅ BlogPosting schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    author: {
      "@type": "Person",
      name: post.author || "CompressPDF Team",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    image: post.coverImage
      ? [`https://compresspdfto200kb.online${post.coverImage}`]
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "CompressPDFto200KB.online",
      url: "https://compresspdfto200kb.online",
    },
  };

  return (
    <div className="relative z-10">
      {/* ✅ SEO */}
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={canonicalUrl}
        schema={blogSchema}
      />

      {/* ✅ Breadcrumb Schema JSON-LD */}
      <BreadcrumbSchema items={breadcrumbSchemaItems} />

      {/* ✅ HERO */}
      <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-14 pb-8 md:pb-10">
        {/* ✅ Breadcrumb UI */}
        <div className="mb-4 sm:mb-6">
          <Breadcrumbs />
        </div>

        <Link to="/blog" className="text-cyan-300 font-black hover:text-cyan-200">
          ← Back to blogs
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mt-6 md:mt-8 leading-tight">
          {post.title}
        </h1>

        <div className="text-gray-500 mt-3 md:mt-4 text-sm">
          {post.date} • {post.author}
        </div>

        {/* Cover */}
        <div className="mt-10 rounded-3xl overflow-hidden border border-gray-800 bg-gray-950/40">
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={post.coverImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-35"
              loading="eager"
            />

            <img
              src={post.coverImage}
              alt={post.title}
              className="relative z-10 w-full h-full object-contain"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-20" />
          </div>
        </div>

        <p className="text-gray-300 text-base sm:text-lg mt-6 md:mt-8 leading-relaxed max-w-3xl">
          {post.excerpt}
        </p>
      </div>

      {/* ✅ Content + TOC */}
      <div className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        {/* Main article */}
        <div>
          <article
            className="
              prose prose-lg prose-invert max-w-none mt-8 md:mt-10
              prose-headings:text-white
              prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-black prose-h2:mt-8 md:prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-6 md:prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg
              prose-strong:text-white
              prose-a:text-cyan-300 prose-a:font-bold hover:prose-a:text-cyan-200
              prose-ul:my-5 prose-ul:pl-6
              prose-ol:my-5 prose-ol:pl-6
              prose-li:text-gray-300
              prose-li:my-2
              prose-li:marker:text-cyan-300
              prose-table:my-8 prose-table:w-full prose-table:overflow-hidden
              prose-table:rounded-2xl prose-table:border prose-table:border-gray-800
              prose-thead:bg-gray-900/60
              prose-th:text-white prose-th:font-bold prose-th:p-3 prose-th:border prose-th:border-gray-800
              prose-td:text-gray-300 prose-td:p-3 prose-td:border prose-td:border-gray-800
            "
            dangerouslySetInnerHTML={{ __html: htmlWithIds }}
          />

          {/* ✅ CTA */}
          <div className="mt-10 md:mt-14 p-4 sm:p-6 md:p-8 rounded-[2rem] border border-gray-800 bg-gray-900/40 theme-transition">
            <h2 className="text-white font-black text-xl sm:text-2xl">
              Compress PDF to 200KB Now
            </h2>
            <p className="text-gray-400 mt-2">
              Use our free tool to create a 200KB PDF for government forms, job
              portals, passport/visa uploads.
            </p>

            <Link
              to="/compress-pdf-to-200kb"
              className="btnPrimary inline-flex mt-6 px-4 py-3 sm:px-6 md:py-4 rounded-2xl min-h-[48px] items-center justify-center w-full sm:w-auto"
            >
              Open PDF Compressor →
            </Link>
          </div>

          {/* FAQ */}
          {faqs.length > 0 && <FAQAccordion faqs={faqs} />}
        </div>

        {/* TOC */}
        <TableOfContents html={htmlWithIds} />
      </div>
    </div>
  );
};

export default BlogPost;
