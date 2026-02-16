import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";

const About: React.FC = () => {
  const seo = PAGES_SEO["/about"];

  return (
    <div className="pt-16 md:pt-32 pb-20 max-w-4xl mx-auto px-4 text-gray-400">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />

      {/* ✅ Updated H1 (Brand Authority Boost) */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        About Himanshu – Creator of CompressPDFto200KB
      </h1>

      {/* Intro Block */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 mb-10 leading-relaxed">
        <p className="text-lg text-gray-300 mb-6">
          Hi, I’m <strong className="text-white">Himanshu</strong>.
        </p>

        <p className="mb-6">
          I built <strong className="text-cyan-400">CompressPDF</strong> because I was tired of seeing my own applications get rejected.
          While applying for various exams myself, I constantly hit the "File Too Large" error.
          Existing tools were frustrating—either they asked for a login, added a watermark, or made my clear documents blurry.
        </p>

        <p>
          So, I used my background in web development to build the tool I wish I had back then.
          A simple, secure, and private way to get your PDF under 200KB without any headaches.
          This isn't a corporate product; it's a utility built by a developer who understands the pain of submitting a government form at the last minute.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Authority */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Technical Expertise</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white block">WebAssembly Core</strong>
                I coded this to run locally on your device. No server uploads means your data never leaves your control.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white block">Student-Focused Algorithms</strong>
                I tuned the compression engine specifically for the 200KB limit used by NIC, SSC, and NTA portals.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
              <span>
                <strong className="text-white block">Zero-Knowledge Architecture</strong>
                Since I don't run a backend database for files, I can't see your documents even if I wanted to.
              </span>
            </li>
          </ul>
        </div>

        {/* Vision/Mission */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Why This Tool?</h2>
          <div className="space-y-4 text-sm">
            <p>
              During my own application processes, I noticed that most free online tools add watermarks,
              require email signups, or simply fail to compress scanned documents properly.
            </p>
            <p>I wanted to create a solution that is:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-cyan-200/80">
              <li>100% Free forever (no paywalls)</li>
              <li>No Signup required (speed matters)</li>
              <li>Watermark-Free (professional)</li>
            </ul>
            <p className="mt-4 italic border-l-2 border-cyan-500/30 pl-4 py-1">
              "Technology should be an enabler, not a hurdle for students chasing their dreams."
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Freshness Signal (SEO Boost) */}
      <div className="mt-14 text-center text-xs text-gray-500">
        Last updated: February 2026
      </div>
    </div>
  );
};

export default About;
