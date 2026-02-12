/**
 * 🎯 SINGLE SOURCE OF TRUTH FOR SEO METADATA
 * Used by:
 * 1. SPA (src/utils/seoData.ts)
 * 2. Static Site Generator (scripts/generateStaticPages.js)
 * 3. Sitemap Generator (scripts/generateSitemap.js)
 */

export const SITE_CONFIG = {
  name: "CompressPDF",
  domain: "compresspdfto200kb.online",
  baseUrl: "https://compresspdfto200kb.online",
  yandexVerification: "45b0752a7d05cc01",
  googleVerification: "fF6tWHVuhi42MfkcTCr7zcahCCawwtG94qAniZrUSmk",
  gaId: "G-FCZXPJB41V"
};

export const SEO_METADATA = {
  // --- MAIN PAGES ---
  "/": {
    title: "Compress PDF to 200KB Online - Free & Secure PDF Reduction",
    description: "Compress PDF to 200KB online for free. Safely reduce PDF size for SSC, UPSC, IBPS, and government portal uploads. 100% private browser-based processing.",
    h1: "Compress PDF to 200KB Online"
  },
  "/about": {
    title: "About CompressPDF – Our Mission & Browser-Side Technology",
    description: "Learn more about CompressPDFto200KB.online — a free PDF compression website built to help users reduce PDF file size for uploads and government portals.",
    h1: "About CompressPDF"
  },
  "/tools": {
    title: "All PDF Tools: Compress to 200KB, Merge, Split & Edit Free",
    description: "All PDF tools in one place: compress PDF to 200KB, merge, split, and edit PDFs. Free, private, browser-based.",
    h1: "All PDF Tools"
  },
  "/blog": {
    title: "PDF Guides & Tutorials: Fix Upload Errors for Govt Portals",
    description: "Read guides on compressing PDFs for government portals, SSC forms, UPSC documents, passport uploads, scholarships and more.",
    h1: "PDF Guides & Tutorials"
  },
  "/contact": {
    title: "Contact Support - Get Help with PDF Compression & Tools",
    description: "Get in touch with CompressPDFto200KB.online for feedback, support, or suggestions related to PDF compression tools and upload fixes.",
    h1: "Contact Support"
  },
  "/sitemap": {
    title: "Site Map: Browse all PDF Tools and Government Form Guides",
    description: "HTML sitemap of CompressPDFto200KB.online. Find all PDF tools and blog posts in one place.",
    h1: "Site Map"
  },
  "/privacy-policy": {
    title: "Privacy Policy - CompressPDFto200KB.online",
    description: "Read how CompressPDFto200KB.online protects your privacy. Your PDF files are processed in your browser and never uploaded to our servers.",
    h1: "Privacy Policy"
  },
  "/terms-conditions": {
    title: "Terms & Conditions - CompressPDFto200KB.online",
    description: "Terms and conditions for using CompressPDFto200KB.online PDF tools and guides.",
    h1: "Terms & Conditions"
  },
  "/disclaimer": {
    title: "Disclaimer - CompressPDFto200KB.online",
    description: "Disclaimer for CompressPDFto200KB.online. We provide tools and guides for PDF compression and portal upload help.",
    h1: "Disclaimer"
  },
  "/cookies-policy": {
    title: "Cookie Policy - CompressPDFto200KB.online",
    description: "CompressPDFto200KB.online cookie policy. We currently do not use any cookies or tracking pixels.",
    h1: "Cookie Policy"
  },

  // --- CONSOLIDATED TOOL ROUTES ---
  "/compress-pdf-to-200kb": {
    title: "Compress PDF to 200KB Online (Free & Without Losing Quality)",
    description: "Reduce PDF size under 200KB for SSC, UPSC, and IBPS online forms. Securely compress your PDF in-browser without uploading to any server. Free & fast.",
    h1: "Compress PDF to 200KB"
  },
  "/pdf-to-jpg": {
    title: "Convert PDF to JPG Online - High Quality & Secure (Free)",
    description: "Convert PDF to JPG online for free. Extract sharp images from PDF pages for government forms and social media. 100% private, browser-based processing.",
    h1: "Convert PDF to JPG Online"
  },
  "/jpg-to-pdf": {
    title: "JPG to PDF Converter - Convert Images to PDF Online (Free)",
    description: "Convert JPG to PDF online for free. Merge multiple images into one PDF document securely in your browser. No signup required. Fast & Private.",
    h1: "JPG to PDF Converter"
  },
  "/merge-pdf": {
    title: "Merge PDF Online - Combine Multiple PDFs for Free",
    description: "Merge multiple PDF files into one document instantly. Perfect for combining marksheets and certificates for government portals. Safe and 100% free.",
    h1: "Merge PDF Online"
  },
  "/split-pdf": {
    title: "Split PDF Online - Extract Pages & Separate PDF Files (Free & Private)",
    description: "Easily split PDF files into multiple documents or extract specific pages online. 100% private, browser-based, and free. No upload needed for Acrobat-style splitting.",
    h1: "Split PDF Online"
  },
  "/edit-pdf": {
    title: "Edit PDF Online – Add Text, Modify PDF Free (Secure)",
    description: "Edit PDF online for free. Add text, modify documents, and update PDFs securely in your browser. No signup required. Fast & private.",
    h1: "Edit PDF Online"
  },
  "/remove-metadata-from-pdf": {
    title: "Remove Metadata from PDF Online (Free, Secure & Private)",
    description: "Clear author, keywords, and hidden data from your PDF/Resume online. Best for job applications and privacy. 100% private browser processing.",
    h1: "Remove Metadata from PDF"
  }
};

export const RU_METADATA = {};
export const ES_METADATA = {};

export const BLOG_METADATA = {
  "how-to-compress-a-pdf-on-mac": {
    title: "How to Compress a PDF on Mac (Reduce PDF Size on macOS)",
    description: "Learn how to compress a PDF on Mac. Step-by-step methods to reduce PDF size on macOS without losing readability.",
    h1: "How to Compress a PDF on Mac"
  },
  "govt-form-pdf-reject-fix-compress-200kb": {
    title: "Govt Form PDF Rejected? Fix Upload Issue (Compress PDF to 200KB)",
    description: "Fix government portal PDF upload rejected issue due to large file size. Learn how to compress PDF to 200KB easily.",
    h1: "Govt Form PDF Rejected? Fix Upload Issue"
  },
  "ssc-form-pdf-size-limit-200kb": {
    title: "SSC Form PDF Size Limit 200KB? Compress PDF to 200KB (Fix)",
    description: "SSC form PDF upload error due to size limit? Compress PDF to 200KB with step-by-step method for mobile and PC.",
    h1: "SSC Form PDF Size Limit 200KB? Fix"
  },
  "upsc-documents-upload-guide-pdf-compress": {
    title: "UPSC Documents Upload Guide: Compress PDF Size for Portal",
    description: "UPSC document upload guide: how to compress PDF size for UPSC portals without losing quality.",
    h1: "UPSC Documents Upload Guide"
  },
  "job-portal-resume-upload-problem-pdf-size-reduce": {
    title: "Resume Upload Failed? Reduce PDF Size for Job Portal (Fix)",
    description: "Resume PDF too large? Learn how to reduce PDF size for job portals quickly while keeping the resume readable.",
    h1: "Resume Upload Failed? Fix"
  },
  "passport-portal-200kb-limit-pdf-upload-error-fix": {
    title: "Passport Portal PDF Upload Error? Fix 200KB Limit Issue",
    description: "Passport portal PDF upload error due to 200KB limit? Learn how to compress PDF size and upload successfully.",
    h1: "Passport Portal PDF Upload Error? Fix"
  },
  "mobile-se-pdf-compress-kaise-kare-without-app": {
    title: "Mobile Se PDF Compress Kaise Kare (Without App) - Guide",
    description: "Mobile se PDF compress kaise kare bina app? Step-by-step guide to reduce PDF size for portal uploads in browser.",
    h1: "Mobile Se PDF Compress Kaise Kare"
  },
  "visa-kyc-pdf-upload-fail-size-reduce-solution": {
    title: "Visa/KYC PDF Upload Failed? Reduce PDF Size (Solution)",
    description: "Visa or KYC PDF upload failed due to large file size? Learn how to reduce PDF size and upload successfully.",
    h1: "Visa/KYC PDF Upload Failed? Solution"
  },
  "scanned-pdf-heavy-size-reduce-complete-guide": {
    title: "Scanned PDF Too Large? Reduce Scanned PDF Size (Complete Guide)",
    description: "Scanned PDF file size too large? Complete guide to reduce scanned PDF size without ruining readability for uploads.",
    h1: "Scanned PDF Too Large? Guide"
  },
  "scholarship-form-pdf-upload-guide-200kb-document": {
    title: "Scholarship Form PDF Upload Guide (Compress to 200KB Document)",
    description: "Scholarship portal PDF upload guide. Learn how to compress PDF document to 200KB and fix upload errors.",
    h1: "Scholarship Form PDF Upload Guide"
  },
  "email-me-pdf-attach-nahi-ho-rahi-size-reduce": {
    title: "Email Me PDF Attach Nahi Ho Rahi? PDF Size Reduce Kaise Kare",
    description: "Email me PDF attach nahi ho rahi due to large file size? Learn how to reduce PDF size quickly and send attachments easily.",
    h1: "Email Me PDF Attach Nahi Ho Rahi? Fix"
  }
};
