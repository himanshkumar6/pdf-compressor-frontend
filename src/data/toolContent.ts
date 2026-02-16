/*
 * SEO content for each tool page: 300–600 words Hinglish, steps, 5 FAQs.
 * Tone: trust-building, for students (SSC, Scholarship, Passport uploads).
 */

export type ToolStep = { title: string; desc: string };
export type ToolFaq = { q: string; a: string };
export type ToolFeature = { title: string; desc: string };
export type TrustBlock = { title: string; desc: string };

export type ToolContentItem = {
  content?: string;
  intro?: string;
  features?: ToolFeature[];
  useCases?: string[];
  trustBlock?: TrustBlock;
  steps: ToolStep[];
  faqs: ToolFaq[];
};

export const TOOL_CONTENT: Record<string, ToolContentItem> = {
  "/compress-pdf-to-200kb": {
    intro: `Struggling with a "File Size Exceeded" error on a government portal? You're not alone. Most official websites in India, from the Staff Selection Commission (SSC) to the Union Public Service Commission (UPSC), have a strict 200KB limit for document uploads.

Whether you're trying to compress a scanned marksheet, an Aadhaar card, or a caste certificate, getting that file under 200KB while keeping it readable is a massive headache. We built this tool specifically to solve that problem for students and job seekers across India.

The best part? You don't have to upload your private documents to any random server. Our tool works right inside your browser. Your sensitive IDs and certificates stay on your device, making this the safest way to resize your PDF.`,
    content: `### Why is the 200KB PDF Limit Everywhere in India? 
If you've ever wondered why sites like SSC, UPSC, IBPS, or even State Scholarship portals (NSP) insist on 200KB, it's mostly about server stability. These portals handle millions of applications simultaneously. If every student uploaded a 5MB scan, the servers would crash instantly. 

But for you, at a cyber cafe or on your phone, this limit is a barrier. Usually, a high-quality scan of a 10th or 12th marksheet comes out to be 2MB-3MB. If you just "reduce resolution" manually, the text often becomes so blurry that the authorities might reject your application.

### How to Compress PDF to 200KB Without Losing Readability
Most people think they need expensive software like Adobe Acrobat Pro to hit an exact 200KB target. But there's a better way. Our engine uses intelligent downsampling and metadata stripping. 

When you select a file, our tool looks for things you don't need—like hidden creator info, embedded color profiles, and redundant font data—and removes them first. Then, it gently optimizes the images just enough to hit the 200KB mark while ensuring that your roll numbers, grades, and signatures remain sharp and zoomable.

### When Should You Use This Specific 200KB Tool? 
This page is pre-configured for the most common Indian recruitment and admission requirements:
- **SSC CGL / CHSL / GD**: For uploading your photo-signed documents and certificates.
- **UPSC DAF**: Detailed Application Forms often require multiple certificates under 200KB each.
- **State Govt Jobs**: Sites like Ojas, UPSSSC, and HSSC almost always use this limit.
- **Central Universities**: JEE, NEET, and CUET admission portals often cap document sizes at 200KB.

### A Quick Warning About Online Safety
A lot of "free" PDF sites want you to upload your Aadhar or PAN card to their servers. Honestly? That's risky. You never know where that data is stored. 

That's why our "Compress PDF to 200KB" tool uses **Client-Side Processing**. Your file isn't "uploaded" in the traditional sense. It's loaded into your browser's temporary memory, processed by a small piece of secure code (called WebAssembly), and then given back to you as a download. The moment you close the tab, the document is gone. We never see your data, and we don't want to.`,
    features: [
      {
        title: "Exact 200KB Target",
        desc: "We specifically target the 200KB file size requirement for Indian government portals like SSC, UPSC, and IBPS.",
      },
      {
        title: "100% Client-Side Privacy",
        desc: "Uses WebAssembly to process files locally. Your sensitive documents (Aadhar, PAN) never leave your device.",
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
    content: `Did you know your Resume or PDF stores hidden info like author name, creation date, and software used? Sometimes, Indian job portals or recruiters check these details. 

Our  PDF Metadata Remover  cleans your file to protect your privacy. It removes hidden tags without changing your text or layout. 

 Why use it? 
-  Clean Resumes:  Hide the "Creator Name" from your job application.
-  Privacy:  Remove timestamps from your private documents.
-  Portal Compatibility:  Some government portals reject files with heavy metadata.

 Privacy-First:  Your files are processed 100% in your browser. No data is ever uploaded to any server. Completely free and secure.`,
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
    steps: [
      {
        title: "Upload Your PDF",
        desc: "Select the document you want to turn into images.",
      },
      {
        title: "Set Your Quality",
        desc: "Choose from 150 DPI or 300 DPI quality settings.",
      },
      {
        title: "Extract & Download",
        desc: "Wait a moment for the conversion and download your images as a ZIP file.",
      },
    ],
    faqs: [
      {
        q: "Can I convert a single page instead of the whole file?",
        a: "Yes. Our tool allows you to select specific pages or convert the entire document in one go. You'll get them all neatly packed in a ZIP file.",
      },
      {
        q: "Is this tool free for legal documents?",
        a: "Yes, it's 100% free and very safe for legal or official documents because the conversion happens locally on your computer.",
      },
      {
        q: "What DPI should I choose for my marksheet?",
        a: "We recommend 300 DPI for marksheets and certificates. This ensures that even small fonts and signatures are sharp.",
      },
      {
        q: "Does it work on Android and iPhone?",
        a: "Yes! You can convert PDFs to JPGs directly from your phone's browser.",
      },
      {
        q: "What happens to my PDF after conversion?",
        a: "Nothing! It stays on your device. Our tool merely reads the file in your browser's RAM and generates images.",
      },
    ],
  },

  "/merge-pdf": {
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
    intro: `Looking for a way to edit PDF online without paying for expensive software? You are in the right place. Our **Free PDF Editor** lets you add text, fill forms, and modify documents directly in your browser. 
    
    Processing everything on your device makes it the safest way to *edit pdf without Adobe* or other paid tools. Perfect for students and professionals.`,
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
    intro: `Need to combine photos into a single document? Whether you're applying for a job or submitting college assignments, convert JPG to PDF online instantly with our secure tool.
    
    Most image converters add watermarks or limit you to 3 files. We allow bulk conversion. Unlike mobile apps that spam you with ads, our browser tool is clean and fast.`,
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
    intro: `Many state scholarship portals and education boards require documents under 100KB for upload. If your marksheet, caste certificate, income certificate, or college admission document exceeds this limit, the upload fails with a "File Size Exceeded" error.

This tool helps you reduce PDF size to 100KB while keeping text readable and clear. It is especially useful for state-level government portals and scholarship applications where the 100KB limit is common.`,

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
