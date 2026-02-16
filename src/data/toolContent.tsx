import React from "react";

export type ToolStep = { title: string; desc: string };
export type ToolFaq = { q: string; a: string };
export type ToolFeature = { title: string; desc: string };
export type TrustBlock = { title: string; desc: string };

export type ToolContentItem = {
  content?: React.ReactNode;
  intro?: React.ReactNode;
  features?: ToolFeature[];
  useCases?: string[];
  trustBlock?: TrustBlock;
  steps: ToolStep[];
  faqs: ToolFaq[];
};

export const TOOL_CONTENT: Record<string, ToolContentItem> = {
  "/compress-pdf-to-200kb": {
    intro: (
      <div className="space-y-4">
        <p>
          Struggling with a <span className="text-red-500 font-medium">"File Size Exceeded"</span> error on a government portal? You're not alone. Most official websites in India, from the <strong>Staff Selection Commission (SSC)</strong> to the <strong>Union Public Service Commission (UPSC)</strong>, have a strict <strong>200KB limit</strong> for document uploads.
        </p>
        <p>
          Whether you're trying to compress a scanned marksheet, an Aadhaar card, or a caste certificate, getting that file under 200KB while keeping it readable is a massive headache. We built this tool specifically to solve that problem for students and job seekers across India.
        </p>
        <p className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-500 text-sm">
          <strong>The best part?</strong> You don't have to upload your private documents to any random server. Our tool works right inside your browser. Your sensitive IDs and certificates stay on your device.
        </p>
      </div>
    ),
    content: (
      <div className="space-y-8 mt-8">
        <section>
          <h3 className="text-xl font-bold text-(--textHeading) mb-3">
            Why is the 200KB PDF Limit Everywhere in India?
          </h3>
          <p className="text-(--textBody) leading-relaxed">
            If you've ever wondered why sites like SSC, UPSC, IBPS, or even State Scholarship portals (NSP) insist on 200KB, it's mostly about server stability. These portals handle millions of applications simultaneously. If every student uploaded a 5MB scan, the servers would crash instantly.
          </p>
          <p className="text-(--textBody) leading-relaxed mt-3">
            But for you, at a cyber cafe or on your phone, this limit is a barrier. Usually, a high-quality scan of a 10th or 12th marksheet comes out to be 2MB-3MB. If you just "reduce resolution" manually, the text often becomes so blurry that the authorities might reject your application.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-(--textHeading) mb-3">
            How to Compress PDF to 200KB Without Losing Readability
          </h3>
          <p className="text-(--textBody) leading-relaxed">
            Most people think they need expensive software like Adobe Acrobat Pro to hit an exact 200KB target. But there's a better way. Our engine uses <strong>intelligent downsampling</strong> and <strong>metadata stripping</strong>.
          </p>
          <p className="text-(--textBody) leading-relaxed mt-3">
            When you select a file, our tool looks for things you don't need—like hidden creator info, embedded color profiles, and redundant font data—and removes them first. Then, it gently optimizes the images just enough to hit the 200KB mark while ensuring that your roll numbers, grades, and signatures remain sharp and zoomable.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-(--textHeading) mb-3">
            When Should You Use This Specific 200KB Tool?
          </h3>
          <p className="mb-4">This page is pre-configured for the most common Indian recruitment and admission requirements:</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "SSC CGL / CHSL / GD (Photo-signed docs)",
              "UPSC DAF (Detailed Application Form)",
              "State Govt Jobs (Ojas, UPSSSC, HSSC)",
              "Central Universities (JEE, NEET, CUET)",
              "Bank PO/Clerk (IBPS Documents)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-medium bg-(--bg-secondary) p-3 rounded-lg border border-(--border)">
                <span className="text-cyan-500">✓</span> {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/20">
          <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
            ⚠️ A Quick Warning About Online Safety
          </h3>
          <p className="text-sm text-(--textBody)">
            A lot of "free" PDF sites want you to upload your Aadhar or PAN card to their servers. Honestly? That's risky. You never know where that data is stored.
          </p>
          <p className="text-sm text-(--textBody) mt-3 font-medium">
            That's why our "Compress PDF to 200KB" tool uses <span className="underline decoration-cyan-500 underline-offset-2">Client-Side Processing</span>.
            Your file isn't "uploaded" in the traditional sense. It's loaded into your browser's temporary memory, processed by secure code (WebAssembly), and given back to you. The moment you close the tab, the document is gone.
          </p>
        </section>
      </div>
    ),
    features: [
      {
        title: "Exact 200KB Target",
        desc: "We specifically target the 200KB file size requirement for Indian government portals like SSC, UPSC, and IBPS.",
      },
      {
        title: "100% Client-Side Privacy",
        desc: "Uses WebAssembly to process files locally. Your sensitive documents (Aadhaar, PAN) never leave your device.",
      },
    ],
    trustBlock: {
      title: "Zero Data Risk Architecture",
      desc: "We process your files entirely in your browser memory. No uploads means no data breaches. Safe for Personal Identifiable Information (PII).",
    },
    steps: [
      {
        title: "Choose Your Oversized PDF",
        desc: "Select the marksheet or certificate that is currently too large for the portal.",
      },
      {
        title: "Auto-Optimize for 200KB",
        desc: "Wait a second while our engine trims metadata and optimizes images to hit the target.",
      },
      {
        title: "Download & Upload",
        desc: "Save the 200KB file and go back to your portal to finish your application.",
      },
    ],
    faqs: [
      {
        q: "What if my PDF is still over 200KB after compression?",
        a: "If your original file was massive (like 20MB+), it might take two passes. Just download the first result and put it back into the tool again.",
      },
      {
        q: "Will my signature look blurry on the SSC form?",
        a: "We prioritize 'Contrast Awareness'. This means we don't blur the dark lines of signatures and text.",
      },
      {
        q: "Is it safe to compress my Aadhar Card here?",
        a: "Absolutely. Since your file never leaves your phone or computer, there is zero risk of your ID being stored on a server.",
      },
      {
        q: "Do I need to pay or sign up for some 'Pro' account?",
        a: "No. This tool is 100% free. We don't ask for your email, we don't add watermarks, and there are no daily limits.",
      },
      {
        q: "Why is 200KB the magic number?",
        a: "Most Indian government infrastructure (like NIC portals) use optimized storage systems built for 200KB chunks.",
      },
    ],
  },

  "/remove-metadata-from-pdf": {
    intro: (
      <div className="space-y-4">
        <p>
          Did you know your Resume or PDF stores hidden info like <strong>author name, creation date, and software used</strong>? Sometimes, Indian job portals or recruiters check these details.
        </p>
        <p>
          Our <strong>PDF Metadata Remover</strong> cleans your file to protect your privacy. It removes hidden tags without changing your text or layout.
        </p>
      </div>
    ),
    content: (
      <div className="space-y-8 mt-8">
        <section>
          <h3 className="text-xl font-bold text-(--textHeading) mb-3">Why Remove Metadata?</h3>
          <ul className="space-y-3">
            {[
              "Clean Resumes: Hide the 'Creator Name' or software version from your job application.",
              "Privacy: Remove timestamps and location data from your private documents.",
              "Portal Compatibility: Some government portals reject files with heavy or corrupt metadata tags."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-(--textBody)">
                <span className="text-cyan-500 mt-1">●</span> {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-500 text-sm">
          <strong>Privacy-First:</strong> Your files are processed 100% in your browser. No data is ever uploaded to any server. Completely free and secure.
        </section>
      </div>
    ),
    steps: [
      {
        title: "Select PDF",
        desc: "Choose the Resume or document you want to sanitize.",
      },
      {
        title: "Scrub Metadata",
        desc: "Our engine will strip all hidden properties and tags.",
      },
      {
        title: "Ready to Upload",
        desc: "Download the clean, meta-free PDF for your job application.",
      },
    ],
    faqs: [
      {
        q: "Does it change my PDF text?",
        a: "No. The visible content remains exactly the same. Only hidden data is removed.",
      },
      {
        q: "Is it safe for Resumes (Naukri/LinkedIn)?",
        a: "Yes. It's highly recommended to clear metadata before uploading resumes to protect your privacy.",
      },
      {
        q: "Do you see my personal info?",
        a: "Never. Everything is done locally in your browser. Your data stays with you.",
      },
    ],
  },

  "/pdf-to-jpg": {
    intro: (
      <div className="space-y-4">
        <p>
          Need to combine photos into a single document? Whether you're applying for a job or submitting college assignments, <strong>convert JPG to PDF online instantly</strong> with our secure tool.
        </p>
        <p>
          Most image converters add watermarks or limit you to 3 files. We allow bulk conversion. Unlike mobile apps that spam you with ads, our browser tool is clean and fast.
        </p>
      </div>
    ),
    features: [
      {
        title: "Merge Multiple Images",
        desc: "Select JPG, PNG, or JPEG files and combine them into one single PDF document.",
      },
      {
        title: "Instant Conversion",
        desc: "The conversion happens instantly in your browser using WebAssembly. No waiting.",
      },
      {
        title: "Private & Secure",
        desc: "Your photos never leave your device. We don't upload them to any cloud server.",
      },
    ],
    steps: [
      { title: "Select Images", desc: "Upload one or multiple JPG/PNG files." },
      { title: "Arrange", desc: "Drag and drop to set the page order." },
      { title: "Convert", desc: "Click to generate your PDF instantly." },
    ],
    faqs: [
      {
        q: "How to convert JPG to PDF online for free?",
        a: "Just select your images and click convert. It's completely free and works in your browser without software.",
      },
      {
        q: "Can I merge multiple images into one PDF?",
        a: "Yes! You can select multiple JPGs at once and combine them into a single multi-page PDF document.",
      },
      {
        q: "Is it safe to convert my photos here?",
        a: "Yes. Your photos are processed on your device and are never uploaded to our servers.",
      },
      {
        q: "How to convert photo to PDF on mobile?",
        a: "Open this page on your phone, select photos from your gallery, and save as PDF instantly.",
      },
    ],
  },

  "/merge-pdf": {
    intro: (
      <div className="space-y-4">
        <p>
          Have multiple PDF files that need to be in one document? Our <strong>Merge PDF Tool</strong> lets you combine them easily.
        </p>
        <p>
          Perfect for combining application forms with ID proofs, or merging multiple chapters into one book. Fast, free, and private.
        </p>
      </div>
    ),
    steps: [
      {
        title: "Add Files",
        desc: "Select all the PDF files you want to combine.",
      },
      {
        title: "Organize",
        desc: "Drag the files to put them in the right order.",
      },
      {
        title: "Download Merged PDF",
        desc: "Click to generate and save your new combined file.",
      },
    ],
    faqs: [
      {
        q: "How to merge PDF files on Windows?",
        a: "Windows doesn't have a built-in 'Preview' app like Mac, so merging PDF files is a headache. Don't download random apps; just use our secure, browser-based tool.",
      },
      {
        q: "Is it safe for official documents?",
        a: "Yes, 100%. Processing is done locally in your browser memory. Your files never leave your device.",
      },
      {
        q: "Can I merge PDF files on Mac?",
        a: "Yes. It works perfectly in Safari or Chrome on any MacBook without needing to use Preview or other software.",
      },
      {
        q: "Is there a limit on file count?",
        a: "No! You can combine as many files as you need for your application.",
      },
    ],
  },

  "/split-pdf": {
    intro: (
      <div className="space-y-4">
        <p>
          Need to extract just one page from a large PDF? Or split a document into separate chapters?
        </p>
        <p>
          Our <strong>Split PDF Tool</strong> makes it easy to separate pages. Upload your file, click the pages you want to keep, and download them instantly.
        </p>
      </div>
    ),
    steps: [
      { title: "Select PDF", desc: "Drop your file into the tool above." },
      {
        title: "Pick Pages",
        desc: "Click thumbnails or enter ranges (e.g., 1-5, 10).",
      },
      {
        title: "Split & Download",
        desc: "Save your new, separate PDF files instantly.",
      },
    ],
    faqs: [
      {
        q: "How do I split PDF pages for free?",
        a: "Just use our Split PDF tool. It's totally free, and because it runs in your browser, it's actually faster than most paid software.",
      },
      {
        q: "Can I split PDF without Adobe Acrobat Pro?",
        a: "Yes! Our tool gives you the same 'Extract' and 'Split' functionality without the huge subscription costs.",
      },
      {
        q: "Is it safe for government forms?",
        a: "Absolutely. Since your file remains in your browser, there is zero risk of data leaks for your personal documents.",
      },
      {
        q: "How to split PDF by pages on mobile?",
        a: "Our tool is mobile-responsive. You can separate your marksheets directly from your phone's storage anywhere.",
      },
    ],
  },

  "/edit-pdf": {
    intro: (
      <div className="space-y-4">
        <p>
          Looking for a way to edit PDF online without paying for expensive software? You are in the right place. Our <strong>Free PDF Editor</strong> lets you add text, fill forms, and modify documents directly in your browser.
        </p>
        <p>
          Processing everything on your device makes it the safest way to <em>edit PDF without Adobe</em> or other paid tools. Perfect for students and professionals.
        </p>
      </div>
    ),
    features: [
      {
        title: "Add Text Anywhere",
        desc: "Click anywhere on your PDF to type text. Perfect for filling out forms or adding notes.",
      },
      {
        title: "Secure Browser Editing",
        desc: "Your file is edited locally using WebAssembly technology. It never leaves your computer.",
      },
      {
        title: "No Watermarks",
        desc: "Save your edited PDF completely free without any annoying watermarks or branding.",
      },
    ],
    steps: [
      { title: "Select PDF", desc: "Open the file you want to modify." },
      {
        title: "Edit",
        desc: "Use the text tool to add content or fill forms.",
      },
      { title: "Save", desc: "Download the updated PDF instantly." },
    ],
    faqs: [
      {
        q: "How to edit PDF online for free?",
        a: "Simply upload your file to our tool, type anywhere on the document, and save the changes instantly.",
      },
      {
        q: "Is it safe to edit PDF files here?",
        a: "Yes. Your secure documents never touch our servers as editing happens on your device.",
      },
      {
        q: "How to edit PDF without Adobe Acrobat?",
        a: "Our free online editor is a perfect alternative. You don't need to install heavy software; just open your browser.",
      },
      {
        q: "Can I edit PDF on mobile?",
        a: "Yes! Our editor is responsive and works great on Android and iOS browsers.",
      },
    ],
  },

  "/jpg-to-pdf": {
    intro: (
      <div className="space-y-4">
        <p>
          Need to combine photos into a single document? Whether you're applying for a job or submitting college assignments, <strong>convert JPG to PDF online instantly</strong> with our secure tool.
        </p>
        <p>
          Most image converters add watermarks or limit you to 3 files. We allow bulk conversion. Unlike mobile apps that spam you with ads, our browser tool is clean and fast.
        </p>
      </div>
    ),
    features: [
      {
        title: "Merge Multiple Images",
        desc: "Select JPG, PNG, or JPEG files and combine them into one single PDF document.",
      },
      {
        title: "Instant Conversion",
        desc: "The conversion happens instantly in your browser using WebAssembly. No waiting.",
      },
      {
        title: "Private & Secure",
        desc: "Your photos never leave your device. We don't upload them to any cloud server.",
      },
    ],
    steps: [
      { title: "Select Images", desc: "Upload one or multiple JPG/PNG files." },
      { title: "Arrange", desc: "Drag and drop to set the page order." },
      { title: "Convert", desc: "Click to generate your PDF instantly." },
    ],
    faqs: [
      {
        q: "How to convert JPG to PDF online for free?",
        a: "Just select your images and click convert. It's completely free and works in your browser without software.",
      },
      {
        q: "Can I merge multiple images into one PDF?",
        a: "Yes! You can select multiple JPGs at once and combine them into a single multi-page PDF document.",
      },
      {
        q: "Is it safe to convert my photos here?",
        a: "Yes. Your photos are processed on your device and are never uploaded to our servers.",
      },
      {
        q: "How to convert photo to PDF on mobile?",
        a: "Open this page on your phone, select photos from your gallery, and save as PDF instantly.",
      },
    ],
  },

  "/compress-pdf-to-100kb": {
    intro: (
      <div className="space-y-4">
        <p>
          Many state scholarship portals and education boards require documents under <strong>100KB</strong> for upload. If your marksheet, caste certificate, income certificate, or college admission document exceeds this limit, the upload fails with a <span className="text-red-500">"File Size Exceeded"</span> error.
        </p>
        <p>
          This tool helps you reduce PDF size to 100KB while keeping text readable and clear. It is especially useful for state-level government portals and scholarship applications where the 100KB limit is common.
        </p>
      </div>
    ),
    features: [
      {
        title: "Targeted 100KB Optimization",
        desc: "Precisely reduce your PDF size close to 100KB without unnecessary quality loss.",
      },
      {
        title: "100% Browser-Based",
        desc: "Your file stays on your device. No server upload, no storage, no privacy risk.",
      },
      {
        title: "Balanced Compression",
        desc: "Maintains readable DPI for certificates and scanned documents.",
      },
    ],
    useCases: [
      "State scholarship portals",
      "College admission uploads",
      "Marksheets and education certificates",
      "State-level government forms",
    ],
    trustBlock: {
      title: "Your Documents Stay Private",
      desc: "Unlike many online tools, this compressor works entirely inside your browser. Your personal documents, IDs, and certificates never leave your device.",
    },
    steps: [
      { title: "Upload PDF", desc: "Select your PDF file from your device." },
      {
        title: "Choose 100KB Target",
        desc: "Set the compression target to 100KB.",
      },
      {
        title: "Download Optimized File",
        desc: "Get your compressed PDF instantly.",
      },
    ],
    faqs: [
      {
        q: "Will quality reduce when compressing to 100KB?",
        a: "Minor compression may occur, but text and essential details remain readable.",
      },
      {
        q: "Is this tool safe for government documents?",
        a: "Yes. Files are processed locally in your browser and are not uploaded to any server.",
      },
      {
        q: "Can I compress scanned certificates?",
        a: "Yes, scanned certificates and marksheets can be resized to 100KB.",
      },
      {
        q: "Why do portals require 100KB?",
        a: "Many state portals limit file size to reduce server storage and speed up processing.",
      },
      {
        q: "Is registration required?",
        a: "No. The tool is completely free and does not require signup.",
      },
    ],
  },
};