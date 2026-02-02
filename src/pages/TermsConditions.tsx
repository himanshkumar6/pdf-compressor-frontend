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
      <h1 className="text-5xl font-bold text-white">Terms & Conditions</h1>
      <br />
      <h2 className="text-2xl font-semibold text-white">Welcome to CompressPDF!</h2>
      <br />
      <p>These terms and conditions outline the rules and regulations for the use of CompressPDF's Website, located at https://compresspdfto200kb.online.</p>

      <br />

      <h2 className='font-semibold'>1. License</h2>
      <p>Unless otherwise stated, CompressPDF and/or its licensors own the intellectual property rights for all material on CompressPDF. All intellectual property rights are reserved. You may access this from CompressPDF for your own personal use subjected to restrictions set in these terms and conditions.</p>

      <br />

      <h2 className='font-semibold'>2. Use of Tool</h2>
      <p>Our PDF compression tool is provided as-is. While we strive to maintain high quality and reach targets like "200KB", we cannot guarantee the exact file size for every unique PDF structure. We are not responsible for any loss of data or corruption that might occur during the client-side processing.</p>

      <br />

      <h2 className='font-semibold'>3. Limitation of Liability</h2>
      <p>In no event shall CompressPDF, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website.</p>
    </div>
  );
};

export default TermsConditions;
