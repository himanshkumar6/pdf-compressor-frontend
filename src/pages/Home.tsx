import React, { Suspense, lazy } from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import { PAGES_SEO } from "../utils/seoData";
import { Shield, FastForward, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

// 🔥 Lazy load heavy component
const ToolSection = lazy(() => import("../components/ToolSection"));

const Home: React.FC = () => {
  const seo = PAGES_SEO["/"];
  const canonical = seo.canonical;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "CompressPDFto200KB.online",
        url: canonical,
        potentialAction: {
          "@type": "SearchAction",
          target: `${canonical}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "CompressPDFto200KB.online",
        url: canonical,
        logo: `${canonical}logo.png`,
      },
      {
        "@type": "WebPage",
        name: "Compress PDF Online Free",
        url: canonical,
        description: seo.description,
      },
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

      <div className="max-w-(--page-max-width) mx-auto px-4 sm:px-6 py-6 md:py-10">
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

        {/* Internal Links Card */}
        <section className="max-w-5xl mx-auto mb-14">
          <div className="premium-card rounded-[2.5rem] p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-black">
              Try our PDF tools (fast + secure)
            </h2>

            <p className="text-gray-400 mt-3">
              Choose the right tool based on your upload requirement. All tools
              work directly in the browser — no signup needed.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/compress-pdf-to-200kb"
                className="premium-card rounded-3xl p-5"
              >
                <p className="text-white font-black text-lg">
                  Compress PDF to{" "}
                  <span className="text-cyan-300">200KB</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Best for government forms & portal upload limits
                </p>
              </Link>

              <Link
                to="/remove-metadata-from-pdf"
                className="premium-card rounded-3xl p-5"
              >
                <p className="text-white font-black text-lg">
                  Remove{" "}
                  <span className="text-cyan-300">Metadata</span> from PDF
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Clean author, timestamps, creator & hidden properties
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section id="how-it-works" className="pt-16 pb-18">
          <div className="section-divider" />
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Why I built CompressPDF?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              After experiencing repeated upload size issues on application portals,
              I decided to build a tool specifically optimized for strict size limits.
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

        {/* FAQ (Already Lazy) */}
        <div className="mt-20">
          <Suspense fallback={<div className="h-60" />}>
            <FAQ />
          </Suspense>
        </div>

        <div className="h-10" />
      </div>
    </main>
  );
};

export default Home;
