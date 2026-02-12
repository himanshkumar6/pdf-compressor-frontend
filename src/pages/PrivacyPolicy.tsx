import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";

const PrivacyPolicy: React.FC = () => {
  const seo = PAGES_SEO["/privacy-policy"];
  return (
    <div className="pt-16 md:pt-32 pb-20 max-w-4xl mx-auto px-4 prose prose-invert">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">PRIVACY POLICY</h1>

      <p className="text-gray-300 leading-relaxed">
        Hey there, I'm the owner of CompressPDF. I've built this tool to make your life easier when dealing with large PDF files, especially for government forms. Because I value your privacy as much as my own, here is exactly how I handle your data.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">NO FILE UPLOADS</h2>
      <p className="text-gray-300 leading-relaxed">
        The most important thing to know is that your PDFs never leave your computer. When you "upload" a file here, it stays in your browser. My website uses local processing technology. This means your private documents, photos, or ID proofs are never sent to my server or stored anywhere online by me.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">PERSONAL DATA</h2>
      <p className="text-gray-300 leading-relaxed">
        I don't ask for your name, phone number, or email address to use the tools. There are no user accounts here. If you use the contact form, I'll see your email just so I can reply to you, but that's it.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">SERVER LOGS</h2>
      <p className="text-gray-300 leading-relaxed">
        Like any other website on the internet, my server automatically picks up some basic info like your IP address, what browser you are using, and the time you visited. This is just standard stuff for security and to see how many people are using the site.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">THIRD PARTIES</h2>
      <p className="text-gray-300 leading-relaxed">
        Since I don't collect your files or personal info, I have nothing to sell to anyone. If I ever add ads or analytics in the future to help pay for the server costs, those services might have their own way of looking at anonymous data, but your PDFs will always remain private and local.
      </p>

      <p className="mt-12 text-gray-400 italic">
        If you have questions, just email me at support@compresspdfto200kb.online.
      </p>

      <p className="mt-4 text-gray-500 text-sm">
        Last updated: February 7, 2026
      </p>
    </div>
  );
};

export default PrivacyPolicy;
