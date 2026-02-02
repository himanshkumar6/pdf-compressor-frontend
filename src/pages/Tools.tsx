import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import { TOOL_PAGES } from "../data/pages";
import { FileText, Wrench } from "lucide-react";

/** Use plain <a href> so crawlers (e.g. Ahrefs) see internal links without JS. */
const Tools: React.FC = () => {
  const seo = PAGES_SEO["/tools"];

  return (
    <div className="pt-32 pb-20 max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
        <Wrench className="w-10 h-10 text-cyan-400" />
        PDF Tools
      </h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        All our PDF tools in one place. Compress, reduce size, or remove metadata — 100% in your browser, no uploads.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOL_PAGES.map((tool) => (
          <a
            key={tool.path}
            href={tool.path}
            className="block rounded-2xl border border-gray-800 bg-gray-900/40 p-6 hover:border-cyan-500/30 hover:bg-gray-900/60 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {tool.label}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{tool.shortDesc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Popular PDF compression sizes */}
      <div className="mt-14 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
        <h2 className="text-xl font-bold text-white mb-3">Popular PDF Compression Sizes</h2>
        <p className="text-gray-400 text-sm mb-4">
          Choose your target size for SSC, UPSC, passport, scholarship & job portal uploads.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/compress-pdf-to-50kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            50KB
          </a>
          <a
            href="/compress-pdf-to-100kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            100KB
          </a>
          <a
            href="/compress-pdf-to-150kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            150KB
          </a>
          <a
            href="/compress-pdf-to-200kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            200KB
          </a>
          <a
            href="/compress-pdf-to-500kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            500KB
          </a>
          <a
            href="/compress-pdf-to-1mb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            1MB
          </a>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-2xl border border-gray-800 bg-black/20">
        <h2 className="text-xl font-bold text-white mb-3">More pages</h2>
        <p className="text-gray-400 text-sm mb-4">
          Visit our blog for guides, or the sitemap for a full list of pages.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/blog"
            className="px-4 py-2 rounded-xl border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors text-sm font-medium"
          >
            Blog
          </a>
          <a
            href="/sitemap"
            className="px-4 py-2 rounded-xl border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors text-sm font-medium"
          >
            Sitemap
          </a>
          <a
            href="/about"
            className="px-4 py-2 rounded-xl border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors text-sm font-medium"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-4 py-2 rounded-xl border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tools;
