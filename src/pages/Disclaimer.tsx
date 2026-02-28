import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import { AlertTriangle, Info } from "lucide-react";

const Disclaimer: React.FC = () => {
  const seo = PAGES_SEO["/disclaimer"];
  
  return (
    <div className="pt-24 md:pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 text-gray-400">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Disclaimer
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Last updated: February 2026
        </p>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 md:p-10 shadow-lg space-y-8">
        
        {/* Intro Alert */}
        <div className="flex items-start p-5 bg-cyan-950/20 border border-cyan-900/40 rounded-2xl">
          <Info className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5 mr-4" />
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Please read this disclaimer carefully before using the tools provided on <strong className="text-white">compresspdfto200kb.online</strong>. By using this website, you accept this disclaimer in full.
          </p>
        </div>

        {/* Section 1: Non-Affiliation */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            Not a Government Website
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            I want to be 100% clear: This website (CompressPDF) is an independent, privately-run utility tool. It is <strong>NOT affiliated with, authorized by, endorsed by, or in any way officially connected to any government body</strong>, including but not limited to SSC, UPSC, NTA, or any state/central government portals. I am an independent web developer providing these free tools to help applicants meet strict file size requirements.
          </p>
        </section>

        {/* Section 2: "As Is" and Results Variation */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            "As Is" Basis & Results May Vary
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            The tools on this website are provided on an "as is" and "as available" basis. Every PDF is different. Depending on how your original file was generated or scanned, the compression algorithm might yield different results. I cannot guarantee that every file will reach exactly the target size (e.g., 200KB or 100KB) or that the visual quality will perfectly match your specific needs. 
          </p>
          <p className="leading-relaxed text-sm md:text-base mt-2 font-medium text-cyan-100/70">
            *It is strictly your responsibility to open and verify the clarity and readability of your compressed document before submitting it to any official portal.*
          </p>
        </section>

        {/* Section 3: Limitation of Liability */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Limitation of Liability
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            Under no circumstances shall the developer or owners of compresspdfto200kb.online be held liable for any direct, indirect, incidental, or consequential damages. This includes, but is not limited to:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-sm md:text-base ml-2">
            <li>Missed application deadlines.</li>
            <li>Rejected forms or applications due to document quality or size issues.</li>
            <li>Loss of data or technical glitches during compression.</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base mt-3">
            You use these tools entirely at your own risk.
          </p>
        </section>

        {/* Section 4: Professional Advice */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            No Professional Advice
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            The guides, blogs, and tips provided on this website are based on personal experience and general best practices. They do not constitute official legal, educational, or professional advice. Always refer to the official notification guidelines provided by the respective examining or governing body.
          </p>
        </section>

        {/* Contact info */}
        <div className="pt-6 border-t border-[var(--border)] mt-8">
          <p className="text-gray-400 text-sm md:text-base">
            If you find a bug, have concerns regarding this disclaimer, or need support, please contact me directly at:{" "}
            <a 
              href="mailto:support@compresspdfto200kb.online" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              support@compresspdfto200kb.online
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Disclaimer;