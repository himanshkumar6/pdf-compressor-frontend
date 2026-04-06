import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import { Shield, Lock, EyeOff } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  const seo = PAGES_SEO["/privacy-policy"];
  
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
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Last updated: February 28, 2026
        </p>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 md:p-10 shadow-lg space-y-8">

        {/* Intro Alert: Zero Knowledge Architecture */}
        <div className="flex items-start p-5 bg-cyan-950/20 border border-cyan-900/40 rounded-2xl">
          <Shield className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5 mr-4" />
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            At <strong className="text-white">compresspdfto200kb.online</strong>, your privacy is our highest priority. We have designed our tools using a "Zero-Knowledge Architecture" to ensure your sensitive documents remain completely private.
          </p>
        </div>

        {/* Section 1: Local File Processing */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-cyan-500" />
            1. No File Uploads (Local Processing)
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            The most important aspect of our privacy policy is how we handle your files. <strong>Your PDF files never leave your device.</strong> When you use our tools to compress, split, or convert PDFs, all processing happens locally within your web browser using WebAssembly technology. 
            We do not upload, store, or transmit your files (such as ID proofs, bank passbooks, or certificates) to any external servers. 
          </p>
        </section>

        {/* Section 2: Personal Information */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-cyan-500" />
            2. Personal Data Collection
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            We do not require you to create an account, register, or provide any Personally Identifiable Information (PII) such as your name, phone number, or email address to use our PDF tools. 
            The only exception is if you voluntarily contact us via our "Contact" form for support, in which case your email address is used solely to reply to your inquiry. We do not sell, rent, or share your email with third parties.
          </p>
        </section>

        {/* Section 3: Log Files */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            3. Log Files and Analytics
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            Like standard web servers, we use log files and basic analytics to understand how visitors use our website and to improve user experience. The information logged may include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and the number of clicks. This information is not linked to any information that is personally identifiable.
          </p>
        </section>

        {/* Section 4: Cookies & AdSense (CRITICAL FOR APPROVAL) */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            4. Cookies and Web Beacons
          </h2>
          <p className="leading-relaxed text-sm md:text-base mb-3">
            Our website may use "cookies" to store information about visitors' preferences and the pages on the website that the visitor accessed or visited. This information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
          
          <h3 className="text-lg font-semibold text-cyan-300 mb-2 mt-4">Google DoubleClick DART Cookie</h3>
          <p className="leading-relaxed text-sm md:text-base mb-2">
            Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. 
          </p>
          <p className="leading-relaxed text-sm md:text-base">
            However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://policies.google.com/technologies/ads</a>.
          </p>
        </section>

        {/* Section 5: Third Party Privacy Policies */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            5. Third-Party Privacy Policies
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            CompressPDF's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
        </section>

        {/* Section 6: Consent */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            6. Consent
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </section>

        {/* Contact info */}
        <div className="pt-6 border-t border-[var(--border)] mt-8">
          <p className="text-gray-400 text-sm md:text-base">
            If you have any questions or require more information about our Privacy Policy, please contact us at:{" "}
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

export default PrivacyPolicy;