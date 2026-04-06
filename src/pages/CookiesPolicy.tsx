import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import { Cookie, Shield, Eye, Settings } from "lucide-react";

const CookiesPolicy: React.FC = () => {
  const seo = PAGES_SEO["/cookies-policy"];
  
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
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Last updated: February 28, 2026
        </p>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 md:p-10 shadow-lg space-y-8">

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          I like to keep things simple and transparent. This Cookie Policy explains how and why <strong className="text-white">compresspdfto200kb.online</strong> uses cookies to keep this service 100% free for everyone.
        </p>

        {/* Section 1: What are Cookies */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Cookie className="w-5 h-5 text-cyan-500" />
            1. What Are Cookies?
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, improve user experience, and provide analytical or advertising information.
          </p>
        </section>

        {/* Section 2: AdSense & Third-Party Cookies (CRITICAL) */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-cyan-500" />
            2. Google AdSense & Third-Party Cookies
          </h2>
          <p className="leading-relaxed text-sm md:text-base mb-3">
            To keep all the PDF tools completely free, I use third-party services like Google Analytics (to see which tools are most helpful) and Google AdSense (to display ads that help pay for domain and server costs).
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-sm md:text-base ml-2">
            <li>
              <strong>Google DoubleClick DART Cookie:</strong> Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.
            </li>
            <li>
              You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">Google Ad Policies</a>.
            </li>
          </ul>
        </section>

        {/* Section 3: Staying Private */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-500" />
            3. File Privacy Remains Untouched
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            It is extremely important to note that <strong>cookies have nothing to do with your PDF files</strong>. Because all our tools operate using Local WebAssembly processing, your actual documents, ID proofs, and sensitive files are never tracked, uploaded, or stored anywhere. The cookies only help with serving ads and measuring website traffic.
          </p>
        </section>

        {/* Section 4: How to Manage */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-cyan-500" />
            4. How to Manage Cookies
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website and all our PDF tools will continue to function perfectly.
          </p>
        </section>

        {/* Contact info */}
        <div className="pt-6 border-t border-[var(--border)] mt-8">
          <p className="text-gray-400 text-sm md:text-base">
            If you have any questions about this Cookie Policy, feel free to reach me directly at:{" "}
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

export default CookiesPolicy;