import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";

const TermsConditions: React.FC = () => {
  const seo = PAGES_SEO["/terms-conditions"];
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 prose prose-invert">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-5xl font-bold text-white mb-8">TERMS & CONDITIONS</h1>

      <p className="text-gray-300 leading-relaxed">
        Welcome to CompressPDF (https://compresspdfto200kb.online). By using this site, you're agreeing to these simple rules.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">HOW TO USE THE SITE</h2>
      <p className="text-gray-300 leading-relaxed">
        You can use my tools for free as much as you want. I built these specifically to help with things like SSC, UPSC, and other job or government portal uploads. Just don't use the site for anything illegal or to try and break the website.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">NO GUARANTEES</h2>
      <p className="text-gray-300 leading-relaxed">
        I try my best to make sure the tools work perfectly, but I'm just one person. The service is provided "as-is." I can't promise that the website will always be up or that the compressed files will always be accepted by every single portal out there (though they usually are!).
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">LIABILITY</h2>
      <p className="text-gray-300 leading-relaxed">
        Since all the processing happens on your own computer and I never even see your files, I'm not responsible for any issues that happen after you download your file. Please check your documents after processing to make sure they look right.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">JURISDICTION</h2>
      <p className="text-gray-300 leading-relaxed">
        Any legal talk or issues will be handled under the laws of India.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">GAPS AND CHANGES</h2>
      <p className="text-gray-300 leading-relaxed">
        I might update these rules from time to time as the site grows. I'll post the date of the last update at the bottom.
      </p>

      <p className="mt-12 text-gray-300 font-medium">
        Thanks for using my tool!
      </p>

      <p className="mt-4 text-gray-400">
        Email: himanshucareer01@gmail.com
      </p>

      <p className="mt-2 text-gray-500 text-sm">
        Last updated: February 7, 2026
      </p>
    </div>
  );
};

export default TermsConditions;
