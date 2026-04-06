import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import { Scale, FileText, ShieldAlert, Gavel, Copyright } from "lucide-react";

const TermsConditions: React.FC = () => {
  const seo = PAGES_SEO["/terms-conditions"];
  
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
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Last updated: February 28, 2026
        </p>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 md:p-10 shadow-lg space-y-8">
        
        {/* Intro */}
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Welcome to <strong className="text-white">compresspdfto200kb.online</strong> (hereinafter referred to as "CompressPDF", "we", "us", or "our"). By accessing or using our website and tools, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, please do not use our website.
        </p>

        {/* Section 1: Use of Service */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-500" />
            1. Use of the Service
          </h2>
          <p className="leading-relaxed text-sm md:text-base mb-3">
            CompressPDF provides free, browser-based utility tools to compress, merge, and edit PDF files. You are permitted to use these tools for personal, academic, and professional purposes (such as preparing documents for SSC, UPSC, NTA, or other portals).
          </p>
          <p className="leading-relaxed text-sm md:text-base">
            You agree NOT to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-sm md:text-base ml-2">
            <li>Use the site in any way that causes, or may cause, damage to the website or impairment of its availability.</li>
            <li>Use the site for any unlawful, illegal, fraudulent, or harmful purpose.</li>
            <li>Attempt to reverse-engineer, copy, or distribute the underlying code or algorithms of our tools.</li>
          </ul>
        </section>

        {/* Section 2: Intellectual Property */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Copyright className="w-5 h-5 text-cyan-500" />
            2. Intellectual Property Rights
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            Unless otherwise stated, CompressPDF and/or its creator own the intellectual property rights for all material, design, UI elements, and original text on this website. All intellectual property rights are reserved. You may access this for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
        </section>

        {/* Section 3: No Guarantees & Warranties */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-cyan-500" />
            3. Disclaimer of Warranties
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            This website is provided "as is," with all faults, and CompressPDF expresses no representations or warranties, of any kind related to this website or the materials contained on this website. While we strive for perfection, we do not guarantee that our tools will flawlessly compress every file to the exact target size or that the output will be accepted by third-party government or corporate portals.
          </p>
        </section>

        {/* Section 4: Limitation of Liability */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Scale className="w-5 h-5 text-cyan-500" />
            4. Limitation of Liability
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            Because our tools process files locally on your device (Client-Side Processing), we do not have access to your data. Consequently, in no event shall CompressPDF, nor its creator, be held liable for any data loss, document corruption, missed application deadlines, or rejected submissions arising out of or in any way connected with your use of this website.
          </p>
        </section>

        {/* Section 5: Governing Law */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-cyan-500" />
            5. Governing Law & Jurisdiction
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            These Terms will be governed by and interpreted in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of New Delhi, India.
          </p>
        </section>

        {/* Section 6: Modifications */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            6. Changes to These Terms
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            We reserve the right to revise these Terms at any time as we see fit. By using this website, you are expected to review these Terms on a regular basis to ensure you understand all terms and conditions governing the use of this website.
          </p>
        </section>

        {/* Contact info */}
        <div className="pt-6 border-t border-[var(--border)] mt-8">
          <p className="text-gray-400 text-sm md:text-base font-medium mb-2">
            Thanks for using our tools!
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            If you have any questions about these Terms, please contact us at:{" "}
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

export default TermsConditions;