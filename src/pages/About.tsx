import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";

const About: React.FC = () => {

  const seo = PAGES_SEO["/about"];

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-4xl font-bold text-white mb-8 text-center">About CompressPDF</h1>
      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-gray-400 space-y-6 leading-relaxed">
        <p>
          Welcome to <span className="text-cyan-400 font-bold">CompressPDF</span>, your premier destination for high-quality, privacy-focused PDF optimization. Our journey started with a simple problem: users needed a way to compress sensitive documents to meet specific file size requirements without trusting their data to third-party servers.
        </p>
        <p>
          We built this tool using modern WebAssembly and JavaScript technologies to ensure that all processing happens locally on your computer. When you use our "compress pdf to 200kb without losing quality" feature, your data stays in your RAM, and only you have access to it.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to democratize high-end document processing tools. We believe that professional-grade PDF optimization should be free, fast, and secure for everyone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-white font-bold mb-2">Privacy First</h3>
            <p className="text-sm">We never store, upload, or see your files. Zero server footprint.</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-white font-bold mb-2">Precision Tools</h3>
            <p className="text-sm">Our 200KB target is specifically tuned for official web portal limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
