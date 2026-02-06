import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";

const CookiesPolicy: React.FC = () => {
  const seo = PAGES_SEO["/cookies-policy"];
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 prose prose-invert">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-5xl font-bold text-white mb-8">COOKIE POLICY</h1>

      <p className="text-gray-300 leading-relaxed">
        I like to keep things simple.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">CURRENT STATUS: NO COOKIES</h2>
      <p className="text-gray-300 leading-relaxed">
        As of right now, CompressPDF (https://compresspdfto200kb.online) does NOT use any cookies. I don't track your sessions, I don't save your preferences in cookies, and there are no tracking pixels here. That's why you don't see a big annoying cookie banner when you visit.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">FUTURE CHANGES</h2>
      <p className="text-gray-300 leading-relaxed">
        In the future, I might add third-party services like Google Analytics (to see which tools are popular) or Google AdSense (to help pay for the domain and hosting). These services usually use their own cookies.
      </p>
      <p className="text-gray-300 leading-relaxed mt-4">
        If and when I decide to add these features, I will update this policy and add a proper notice on the website so you stay informed.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">STAYING PRIVATE</h2>
      <p className="text-gray-300 leading-relaxed">
        Because the tools work entirely in your browser without uploading files, the lack of cookies means your visit is very private.
      </p>

      <p className="mt-12 text-gray-400">
        If you have any questions about this, feel free to reach me at himanshucareer01@gmail.com.
      </p>

      <p className="mt-4 text-gray-500 text-sm">
        Last updated: February 7, 2026
      </p>
    </div>
  );
};

export default CookiesPolicy;
