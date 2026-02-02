import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import { BLOG_POSTS } from "../utils/blogPosts";
import { PAGES_SEO } from "../utils/seoData";

import Breadcrumbs from "../components/Breadcrumbs";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { buildBreadcrumbSchemaItems } from "../utils/breadcrumbItems";

const POSTS_PER_PAGE = 6;

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function getPaginationRange(current: number, total: number) {
  const delta = 1;
  const range: (number | "...")[] = [];

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);

  if (left > 2) range.push("...");

  for (let i = left; i <= right; i++) range.push(i);

  if (right < total - 1) range.push("...");

  if (total > 1) range.push(total);

  return range;
}

const Blog: React.FC = () => {
  const location = useLocation();
  const query = useQuery();

  const seo = PAGES_SEO["/blog"];

  // ✅ current page read from URL (?page=1)
  const pageParam = Number(query.get("page") || 1);
  const page = Number.isFinite(pageParam) ? Math.max(1, pageParam) : 1;

  // ✅ reverse so latest blogs show first
  const sortedPosts = useMemo(() => {
    return [...BLOG_POSTS].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  // ✅ ensure page never goes > totalPages
  const safePage = Math.min(page, totalPages || 1);

  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(startIndex, endIndex);

  // ✅ canonical (page wise)
  const canonicalUrl =
    safePage <= 1
      ? "https://compresspdfto200kb.online/blog"
      : `https://compresspdfto200kb.online/blog?page=${safePage}`;

  // ✅ Breadcrumb JSON-LD auto mapping
  const breadcrumbSchemaItems = useMemo(() => {
    return buildBreadcrumbSchemaItems(location.pathname);
  }, [location.pathname]);

  return (
    <div className="max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 py-16">
      {/* ✅ SEO */}
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={canonicalUrl}
        schema={null}
      />

      {/* ✅ Breadcrumb schema for Google */}
      <BreadcrumbSchema items={breadcrumbSchemaItems} />

      {/* ✅ Breadcrumb UI */}
      <div className="mb-8">
        <Breadcrumbs />
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          CompressPDF <span className="text-cyan-400">Blog</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Practical guides to reduce PDF size, fix portal upload errors, and save
          documents fast.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-gray-900/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all"
          >
            {/* Cover */}
            <Link to={`/blog/${post.slug}`}>
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </Link>

            {/* Body */}
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>

              <h2 className="text-lg font-bold text-white mb-3 leading-snug">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              {/* ✅ Premium CTA button */}
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl 
                bg-white/5 border border-white/10 text-cyan-200 font-black text-sm
                hover:bg-white/10 hover:border-cyan-500/30 transition"
              >
                Read Article <span className="text-cyan-300">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="mt-14 flex items-center justify-center gap-3 flex-wrap">
          {/* Prev */}
          <Link
            to={safePage <= 2 ? `/blog` : `/blog?page=${safePage - 1}`}
            className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all ${safePage === 1
              ? "pointer-events-none opacity-40 border-gray-800 text-gray-500"
              : "border-gray-700 text-white hover:border-cyan-500/40 hover:text-cyan-300"
              }`}
          >
            ← Prev
          </Link>

          {/* Page numbers */}
          {getPaginationRange(safePage, totalPages).map((item, idx) => {
            if (item === "...") {
              return (
                <span
                  key={`dots-${idx}`}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-900 text-gray-600 text-sm select-none"
                >
                  ...
                </span>
              );
            }

            const pageNum = item;
            const active = pageNum === safePage;

            const pageHref = pageNum === 1 ? `/blog` : `/blog?page=${pageNum}`;

            return (
              <Link
                key={pageNum}
                to={pageHref}
                className={`w-10 h-10 flex items-center justify-center rounded-xl border text-sm font-bold transition-all ${active
                  ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                  : "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
                  }`}
              >
                {pageNum}
              </Link>
            );
          })}

          {/* Next */}
          <Link
            to={`/blog?page=${safePage + 1}`}
            className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all ${safePage === totalPages
              ? "pointer-events-none opacity-40 border-gray-800 text-gray-500"
              : "border-gray-700 text-white hover:border-cyan-500/40 hover:text-cyan-300"
              }`}
          >
            Next →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Blog;
