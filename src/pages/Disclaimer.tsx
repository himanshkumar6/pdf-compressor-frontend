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
      <h1 className="text-5xl font-bold text-white">Disclaimer</h1>
      <br />
      <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <span className='font-semibold text-blue-400'>himanshucareer01@gmail.com.</span></p>
      <br />
      <h2 className='text-2xl'>Disclaimers for CompressPDF</h2>
      <br />
      <p>All the information on this website - https://compresspdfto200kb.online - is published in good faith and for general information purpose only. CompressPDF does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (CompressPDF), is strictly at your own risk. CompressPDF will not be liable for any losses and/or damages in connection with the use of our website.</p>
      <br />
      <h2>Consent</h2>
      <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
      <br />
      <h2>Updates</h2>

      <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
    </div>
  );
};

export default Disclaimer;
