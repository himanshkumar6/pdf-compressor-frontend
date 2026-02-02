import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";

const PrivacyPolicy: React.FC = () => {
  const seo = PAGES_SEO["/privacy-policy"];
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 prose prose-invert">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-5xl font-bold text-white">Privacy Policy</h1>
      <br />
      <p>Last updated: 25 January 2026</p>
      <br />

      <h2 className='font-semibold'>1. Introduction</h2>
      <p>At CompressPDF, accessible from https://compresspdfto200kb.online, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by CompressPDF and how we use it.</p>

      <br />

      <h2 className='font-semibold'>2. Client-Side Processing</h2>
      <p>Our primary feature—PDF compression—runs 100% in your local web browser. We do NOT upload your files to our servers. All document processing happens locally on your computer, which means we never see, store, or have access to your sensitive documents.</p>

      <br />

      <h2 className='font-semibold'>3. Log Files</h2>
      <p>CompressPDF follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

      <br />

      <h2 className='font-semibold'>4. Cookies and Web Beacons</h2>
      <p>Like any other website, CompressPDF uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

      <br />

      <h2 className='font-semibold'>5. Google DoubleClick DART Cookie</h2>
      <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.</p>
    </div>
  );
};

export default PrivacyPolicy;
