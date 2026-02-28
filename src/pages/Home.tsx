import React, { Suspense, lazy } from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import { Shield, FastForward, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PAGES_SEO,
  FAQ_DATA,
  buildOrganizationJsonLd,
  buildWebAppJsonLd,
  buildFAQJsonLd,
} from "../utils/seoData";
// 🔥 Import the helper function to fetch latest blogs automatically
import { getLatestBlogPosts } from "../utils/blogPosts";

// 🔥 Lazy load heavy components
const ToolSection = lazy(() => import("../components/ToolSection"));
const FAQ = lazy(() => import("../components/FAQ")); // Fixed: FAQ is now properly lazy-loaded

const Home: React.FC = () => {
  const seo = PAGES_SEO["/"];
  const canonical = seo.canonical;
  
  // Fetch the latest 3 posts for the homepage
  const latestPosts = getLatestBlogPosts(3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationJsonLd(),
      buildWebAppJsonLd(seo),
      buildFAQJsonLd(FAQ_DATA),
    ],
  };

  return (
    <main className="w-full">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={canonical}
        schema={schema}
      />

      {/* HERO */}
      <Hero />

      <div className="max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="section-divider" />

        {/* 🔥 TOOL SECTION (Lazy Loaded) */}
        <section
          id="tool"
          className="mt-6 md:mt-10 mb-10 md:mb-14 scroll-mt-24"
        >
          <Suspense
            fallback={
              <div className="h-60 flex items-center justify-center text-gray-400">
                Loading tool...
              </div>
            }
          >
            <ToolSection />
          </Suspense>
        </section>

        {/* 🌟 NEW: 3-Step Guide (Improves Text-to-HTML ratio for AdSense) */}
        <section className="mb-14 max-w-4xl mx-auto premium-card rounded-[2.5rem] p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8">
            How to Compress Your PDF in 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 font-bold mx-auto mb-4 text-lg">1</span>
              <strong className="text-white block mb-2 text-lg">Upload</strong> 
              Select your document securely from your device. No server uploads.
            </div>
            <div>
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 font-bold mx-auto mb-4 text-lg">2</span>
              <strong className="text-white block mb-2 text-lg">Process</strong> 
              Our local WebAssembly engine optimizes the file size instantly.
            </div>
            <div>
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 font-bold mx-auto mb-4 text-lg">3</span>
              <strong className="text-white block mb-2 text-lg">Download</strong> 
              Get your crystal-clear, portal-ready document in seconds.
            </div>
          </div>
        </section>

        {/* 🌟 EXPANDED: Internal Links Card (Boosts SEO for all tools) */}
        <section className="max-w-5xl mx-auto mb-14">
          <div className="premium-card rounded-[2.5rem] p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-black">
              Explore Our Free PDF Tools
            </h2>
            <p className="text-gray-400 mt-3">
              Choose the right tool based on your upload requirement. All tools
              work directly in the browser — no signup, no watermarks.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/compress-pdf-to-200kb" className="premium-card rounded-3xl p-5 border border-transparent hover:border-cyan-500/30 transition-all">
                <p className="text-white font-black text-lg">
                  Compress to <span className="text-cyan-300">200KB</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Perfect for SSC, UPSC & official forms.</p>
              </Link>

              <Link to="/compress-pdf-to-100kb" className="premium-card rounded-3xl p-5 border border-transparent hover:border-cyan-500/30 transition-all">
                <p className="text-white font-black text-lg">
                  Compress to <span className="text-cyan-300">100KB</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Optimized for NTA, NEET & signature uploads.</p>
              </Link>

              <Link to="/jpg-to-pdf" className="premium-card rounded-3xl p-5 border border-transparent hover:border-cyan-500/30 transition-all">
                <p className="text-white font-black text-lg">
                  JPG to <span className="text-cyan-300">PDF</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Convert scanned photos into proper PDFs.</p>
              </Link>

              <Link to="/merge-pdf" className="premium-card rounded-3xl p-5 border border-transparent hover:border-cyan-500/30 transition-all">
                <p className="text-white font-black text-lg">
                  Merge <span className="text-cyan-300">PDF</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Combine multiple certificates into one file.</p>
              </Link>

              <Link to="/remove-metadata-from-pdf" className="premium-card rounded-3xl p-5 border border-transparent hover:border-cyan-500/30 transition-all">
                <p className="text-white font-black text-lg">
                  Remove <span className="text-cyan-300">Metadata</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Clean hidden tracking data before uploading.</p>
              </Link>

              <Link to="/split-pdf" className="premium-card rounded-3xl p-5 border border-transparent hover:border-cyan-500/30 transition-all">
                <p className="text-white font-black text-lg">
                  Split <span className="text-cyan-300">PDF</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Extract specific pages from large documents.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section id="how-it-works" className="pt-10 pb-18">
          <div className="section-divider" />
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Why I built this tool?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              After repeatedly hitting 'File Too Large' errors on application portals,
              I realized that general compressors were either too blurry or too slow.
              I built this to provide a fast, secure, and precise way to meet strict size limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                icon: <Shield className="w-10 h-10 text-cyan-400" />,
                title: "Privacy-Focused Design",
                desc: "Your files are processed securely in the browser. We prioritize document privacy and minimal data exposure.",
              },
              {
                icon: <FastForward className="w-10 h-10 text-cyan-400" />,
                title: "Optimized for Portal Limits",
                desc: "Designed specifically for common 20KB–200KB upload requirements used by government and academic portals.",
              },
              {
                icon: <UserCheck className="w-10 h-10 text-cyan-400" />,
                title: "Accurate Size Targeting",
                desc: "Instead of guessing file size, the tool helps adjust documents close to required limits while keeping text readable.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 md:p-8 premium-card rounded-3xl"
              >
                <div className="inline-flex p-4 bg-cyan-500/10 rounded-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🌟 NEW: Latest Guides Section (Crucial for AdSense & Internal Linking) */}
        <section className="pt-10 pb-10">
          <div className="section-divider" />
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Latest Upload Guides & Tips
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn how to fix document upload errors on government, academic, and job application portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`} 
                className="premium-card p-6 rounded-[2rem] border border-transparent hover:border-cyan-500/30 transition-all flex flex-col h-full"
              >
                <h3 className="text-white font-bold text-xl mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <span className="text-cyan-400 font-semibold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Read Full Guide <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
             <Link to="/blog" className="text-gray-400 hover:text-white underline underline-offset-4 transition-colors">
               View all articles
             </Link>
          </div>
        </section>

        {/* FAQ (Lazy Loaded) */}
        <div className="mt-16">
          <Suspense fallback={<div className="h-60 flex items-center justify-center text-gray-500">Loading FAQs...</div>}>
            <FAQ />
          </Suspense>
        </div>

        <div className="h-10" />
      </div>
    </main>
  );
};

export default Home;