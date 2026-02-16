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

  // STRATEGY: Homepage ko "Hub" bana diya.
  // Keywords: "All-in-One", "Secure", "No Upload".
  "/": {
    title: "Free PDF Tools: Compress, Merge & Convert (100% Secure)",
    description: "The safest online PDF tools. Compress PDF size, merge files, or convert to JPG locally in your browser. No file uploads, no signup needed.",
    h1: "Secure & Free Online PDF Tools"
  },

  "/about": {
    title: "About Us – Why We Are Safe & Private",
    description: "Unlike other tools, we use serverless technology. Learn how we compress PDFs directly on your device without ever seeing your files.",
    h1: "Privacy-First PDF Technology"
  },

  "/tools": {
    title: "PDF Tool Suite: All Converters & Editors (Free)",
    description: "Browse our complete list of tools: PDF Compressor (200KB/100KB), JPG Converter, Merger, and Splitter. Optimized for government form uploads.",
    h1: "All Free PDF Utilities"
  },

  // STRATEGY: Blog ko "Problem Solver" banaya.
  // Target: "Error Fixing" traffic.
  "/blog": {
    title: "Fix PDF Upload Errors: Guides for SSC, UPSC & Govt Jobs",
    description: "Solved: 'File Too Large' and 'Invalid Format' errors. Step-by-step tutorials to resize PDFs and signatures for SSC CGL, UPSC, and IBPS portals.",
    h1: "PDF Upload Troubleshooting & Guides"
  },

  "/contact": {
    title: "Help & Support – Fix PDF Compression Issues",
    description: "Struggling to resize your PDF? Contact our support team for help with government form uploads and compression settings.",
    h1: "Get Help with Your PDF"
  },

  "/sitemap": {
    title: "Sitemap – Browse All PDF Tools",
    description: "Full directory of our PDF compression tools, converters, and upload guides for easy navigation.",
    h1: "HTML Sitemap"
  },

  "/privacy-policy": {
    title: "Privacy Policy – 100% Client-Side Processing",
    description: "We guarantee your privacy. Read how our browser-based engine ensures your sensitive documents never touch a server.",
    h1: "Data Privacy & Security Policy"
  },

  "/terms-conditions": {
    title: "Terms of Use – Tool Limitations & Usage",
    description: "Guidelines for using our free PDF manipulation services for personal and official purposes.",
    h1: "Terms & Conditions"
  },

  "/disclaimer": {
    title: "Disclaimer – Not Affiliated with Govt",
    description: "We provide tools to assist with uploads but are not affiliated with SSC, UPSC, or any government body. Use responsibly.",
    h1: "Official Disclaimer"
  },

  "/cookies-policy": {
    title: "Cookie Policy – Minimal & Non-Intrusive",
    description: "Transparency on how we use local storage to enhance your tool experience without tracking your personal data.",
    h1: "Cookie & Storage Policy"
  },

  // --- CONSOLIDATED TOOL ROUTES (High Impact Optimizations) ---

  // *** THE MONEY PAGE (Critical Updates) ***
  // Changes:
  // 1. Added "(Exact)" to Title -> Implies precision.
  // 2. Description now targets "100KB" too (based on your GSC data).
  // 3. H1 includes "Free" to reduce bounce rate.
  "/compress-pdf-to-200kb": {
    title: "Compress PDF to 200KB (Exact Size) – Free for SSC/UPSC",
    description: "Reduce PDF size to under 200KB, 100KB, or 50KB instantly. The best free PDF compressor for SSC, IBPS & Govt portals without losing quality.",
    h1: "Compress PDF to Under 200KB for Free"
  },

  // Target: Users who want "Clear" images, not blurry ones.
  "/pdf-to-jpg": {
    title: "PDF to JPG: Convert to High-Quality Images (Free)",
    description: "Convert PDF pages to HD JPG images. Perfect for extracting slides, notes, or documents. 100% private & fast browser conversion.",
    h1: "Convert PDF to High-Quality JPG"
  },

  // Target: "Phone Scans" crowd.
  "/jpg-to-pdf": {
    title: "JPG to PDF: Turn Images into PDF (No Watermark)",
    description: "Make a PDF from photos instantly. Combine multiple JPG screenshots or phone scans into a single document for easy sharing.",
    h1: "Free JPG to PDF Converter"
  },

  // Target: Students merging ID + Marksheet.
  "/merge-pdf": {
    title: "Merge PDF: Combine Admit Cards & Docs (Free)",
    description: "Join multiple PDF files into one. ideal for combining application forms, ID proofs, and marksheets for single-file uploads.",
    h1: "Merge & Combine PDF Files"
  },

  // Target: "Extracting" specific pages.
  "/split-pdf": {
    title: "Split PDF: Extract Pages & Remove Unwanted Ones",
    description: "Separate specific pages from a large PDF. Upload, select the pages you need, and save them as a new file instantly.",
    h1: "Split PDF & Extract Pages"
  },

  // Target: "Filling Forms".
  "/edit-pdf": {
    title: "Edit PDF Online: Type Text, Sign & Fill Forms",
    description: "Need to fill an application form? Add text, signatures, and checkmarks to your PDF directly in your browser. No software needed.",
    h1: "Free Online PDF Editor & Form Filler"
  },

  // Target: "Cleaning" for privacy.
  "/remove-metadata-from-pdf": {
    title: "Clean PDF: Remove Hidden Properties & Author Name",
    description: "Scrub hidden metadata, author names, and software history from your PDF files to ensure total privacy before sharing.",
    h1: "Remove PDF Metadata & Hidden Data"
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
