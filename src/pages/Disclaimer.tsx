import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";

const Disclaimer: React.FC = () => {
  const seo = PAGES_SEO["/disclaimer"];
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 prose prose-invert">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-5xl font-bold text-white mb-8">DISCLAIMER</h1>

      <p className="text-gray-300 leading-relaxed mb-6 italic">
        Please read this before using the tools on https://compresspdfto200kb.online.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">NOT A GOVERNMENT SITE</h2>
      <p className="text-gray-300 leading-relaxed">
        I want to be 100% clear: This website, CompressPDF, is NOT affiliated with, authorized by, or endorsed by any government body, including SSC, UPSC, or any state portal. I am an independent developer providing these tools to help people meet size requirements easily.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">RESULTS MAY VARY</h2>
      <p className="text-gray-300 leading-relaxed">
        Every PDF is different. Depending on how your original file was made, the compression might work better or worse. I can't guarantee that every file will reach exactly 200KB or that the quality will be perfect for your specific needs. Please check your document before submitting it to any official portal.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">USE AT YOUR OWN RISK</h2>
      <p className="text-gray-300 leading-relaxed">
        I am not responsible for any missed deadlines, rejected applications, or data issues that might happen. It's your responsibility to make sure the final document meets the requirements of the portal you are uploading to.
      </p>

      <p className="mt-12 text-gray-400 leading-relaxed">
        If you find a bug or something isn't working, let me know at <span className="text-cyan-400 font-medium whitespace-nowrap">himanshucareer01@gmail.com</span> and I'll try to fix it.
      </p>
    </div>
  );
};

export default Disclaimer;
