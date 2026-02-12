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
  "/compress-pdf": {
    intro: `Large PDF files are a constant source of friction, especially when you're trying to meet a strict upload limit. Whether it's a job application, a government form, or simply sending an attachment via email, a bulky PDF can stop you in your tracks.

Our general PDF compressor is designed to give you maximum control over your file size without the need for complex software. It's fast, free, and runs entirely in your browser window. No matter if you're on a high-end PC or a basic smartphone, you can shrink your documents in seconds.`,
    content: `### Why Browser-Memory Compression is the Future
Most 'online' PDF tools ask you to upload your document to their cloud server. While this works, it poses a significant privacy risk—especially for documents containing your address, signature, or financial details. 

We use **WebAssembly (Wasm)** technology to bring the compression engine *to you*. Instead of your file going to the server, the server sends the tool to your browser. This means:
- **Instant Speed**: No waiting for uploads or downloads from a remote server.
- **Total Privacy**: Your document stays in your RAM. Once you close the tab, it's gone from the world.
- **Offline Capability**: Once the page is loaded, you can even compress files without an active internet connection.

### Perfect for Professionals and Students
From students trying to submit assignments on Google Classroom to professionals sending reports on Slack or Microsoft Teams, our tool scales to your needs. If you need more specific limits, we also offer dedicated paths like:
- [Compress PDF to 200KB](/compress-pdf-to-200kb) (Standard for SSC/UPSC).
- [Compress PDF to 100KB](/compress-pdf-to-100kb) (Common for scholarship portals).
- [Resize PDF in MB](/resize-pdf-mb) (For huge reports and legal docs).

### How to Get the Best Results
For the smallest file size, ensure your PDF doesn't have unnecessary high-resolution photos embedded. If you're working with scanned documents, our engine will automatically strip unneeded metadata and optimize image layers to strike the perfect balance between quality and weight.`,
    steps: [
      {
        title: "Select Your PDF",
        desc: "Drag and drop or click to pick the file you want to shrink.",
      },
      {
        title: "Automatic Optimization",
        desc: "Our engine analyzes your file and optimizes the internal structure instantly.",
      },
      {
        title: "Download Sharp PDF",
        desc: "Save your new, lightweight document and use it anywhere.",
      },
    ],
    faqs: [
      {
        q: "Is there a limit on how many PDFs I can compress?",
        a: "No! You can compress as many files as you want. There are no daily limits, no 'Pro' subscriptions, and no hidden queues. It's truly unlimited and free.",
      },
      {
        q: "Will the resolution of my document drop?",
        a: "We only reduce resolution if it's absolutely necessary to hit a target size. For our general tool, we prioritize 'Perceptual Quality', meaning it will look almost identical to the original but weigh much less.",
      },
      {
        q: "Can I use this on my iPhone or Android device?",
        a: "Yes. Our tool is fully responsive and optimized for mobile browsers. You can select files directly from your phone's 'Files' app or gallery.",
      },
      {
        q: "Is my data really safe?",
        a: "Yes. Because we use in-browser processing, your file never leaves your device. We don't have a 'database' of your uploads because nothing is ever successfully uploaded to us.",
      },
      {
        q: "What if I need an exact file size like 50KB?",
        a: "We have dedicated tools for specific targets. Check our [All Tools](/tools) page to find the exact target you need.",
      },
    ],
  },

  "/compress-pdf-to-100kb": {
    intro: `Looking for a way to get your PDF under 100KB? You've likely hit a wall on a portal like the National Scholarship Portal (NSP) or a state-level admission site. These sites are notorious for having tiny file limits that standard scanners just can't meet.

Our 100KB PDF compressor is built to solve this exact problem. It's not just about making the file smaller; it's about making it 'portal-ready'. We prioritize text clarity so your marksheet remains readable even at this ultra-small size.`,
    content: `### Why is the 100KB Limit So Common?
Many legacy government databases in India were built to handle small packets of data. For them, a 100KB file is the maximum they can store without slowing down their systems. While this saves them storage costs, it makes life difficult for you. 

When you scan a document at a cyber cafe, it usually creates a file between 500KB and 2MB. If you try to upload that, you'll get a "File size too large" error. That's where we come in.

### The Secret to 100KB Compression
Unlike generic tools that just lower the image quality, our engine uses **SVG-based path optimization** and **metadata stripping**. We look at the PDF structure and remove everything that isn't essential for a human to read the document. 

This includes:
- Removing hidden font weights you don't use.
- Stripping 'creator' metadata from scanning software.
- Downsampling images to exactly 150 DPI—the sweet spot for 100KB files.

### 100% Private - No Uploads Required
We know that marksheets and ID cards contain your most sensitive information. That's why we use **Client-Side Technology**. Your file stays in your browser's memory and is processed locally on your computer or phone. We never see your data, and it never touches a server. You can safely use this for your Aadhar card, PAN card, or personal certificates.`,
    steps: [
      {
        title: "Upload PDF",
        desc: "Choose the PDF file that is currently larger than 100KB.",
      },
      {
        title: "Shrink to 100KB",
        desc: "Our engine will automatically calculate the best settings to fit the 100KB limit.",
      },
      {
        title: "Download Result",
        desc: "Save your optimized file and upload it to your portal instantly.",
      },
    ],
    faqs: [
      {
        q: "Will my marksheet be readable at 100KB?",
        a: "Yes. Our tool is optimized for 'Contrast Awareness', which keeps text sharp even when images are compressed. It's designed for verification, not just for shrinking.",
      },
      {
        q: "Is it safe for the National Scholarship Portal (NSP)?",
        a: "Absolutely. Many students use our tool specifically for NSP and other scholarship forms where 100KB is the standard limit.",
      },
      {
        q: "Do I need to install any app on my phone?",
        a: "No. Just open this page in Chrome or Safari on your mobile. It works 100% in the browser.",
      },
      {
        q: "What if the file is still 105KB?",
        a: "If the first pass doesn't hit the target, just download it and run it through the tool one more time. It will gradually strip more data to hit the 100KB mark.",
      },
    ],
  },

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
        desc: "Save the new 200KB file and go back to your portal to finish your application.",
      },
    ],
    faqs: [
      {
        q: "What if my PDF is still over 200KB after compression?",
        a: "If your original file was massive (like 20MB+), it might take two passes. Just download the first result and put it back into the tool again. However, for most standard certificates, one click does the job.",
      },
      {
        q: "Will my signature look blurry on the SSC form?",
        a: "We prioritize 'Contrast Awareness'. This means we don't blur the dark lines of signatures and text. We mostly reduce the quality of background 'noise' that you don't need anyway.",
      },
      {
        q: "Is it safe to compress my Aadhar Card here?",
        a: "Absolutely. Since your file never leaves your phone or computer (it stays in the browser window), there is zero risk of your ID being stored on a server. It's as safe as using an offline software.",
      },
      {
        q: "Do I need to pay or sign up for some 'Pro' account?",
        a: "No. This tool is 100% free. We don't ask for your email, we don't add watermarks, and there are no daily limits. We want to help you get that job or admission without extra stress.",
      },
      {
        q: "Why is 200KB the magic number?",
        a: "Most Indian government infrastructure (like NIC portals) use optimized storage systems that are built for 200KB chunks. It's the standard for 90% of recruitment forms in India.",
      },
    ],
  },

  "/scanned-pdf-compressor": {
    content: `Scanning a marksheet or certificate often creates a very large PDF. Most government portals (SSC, UPSC) won't accept these heavy files. 

Our  Scanned PDF Compressor  is specially tuned to handle images. Unlike normal compressors that blur the text, we use intelligent downsampling to keep your signatures and stamps clear while reducing the file size. 

 Best for: 
- Marksheets & Degree Certificates
- Caste/EWS Certificates
- Scanned ID Proofs (Voter ID, PAN)

Everything happens in your browser. We don't upload your private documents to any server. It's fast, free, and secure.`,
    steps: [
      {
        title: "Upload Scan",
        desc: "Select the scanned PDF that is too large for the portal.",
      },
      {
        title: "Smart Compression",
        desc: "Our engine optimizes image layers without blurring the text.",
      },
      {
        title: "Download",
        desc: "Save your optimized scan and proceed with your application.",
      },
    ],
    faqs: [
      {
        q: "Will my marksheet details be readable?",
        a: "Yes. We prioritize text contrast so that grades, roll numbers, and names remain sharp.",
      },
      {
        q: "Is this safe for sensitive documents?",
        a: "100%. Processing is done locally in your browser. No files are uploaded.",
      },
      {
        q: "Does it work for multi-page scans?",
        a: "Yes, it works for single and multi-page scanned PDF documents.",
      },
    ],
  },

  "/scanned-pdf-to-200kb": {
    intro: `Scanning a marksheet or a certificate usually results in a file size that is way too big for government portals. If your scanner just produced a 2MB-5MB file and the site is asking for **exactly 200KB**, you're in the right place.

The "Scanned PDF to 200KB" tool is specifically tuned for images. Unlike normal compressors that might make your text blurry, we use intelligent downsampling to keep signatures and stamps clear while slashing the file size.`,
    content: `### The Challenge with Scanned Documents
When you use a physical scanner or a phone app like Adobe Scan or CamScanner, the output is essentially a high-resolution photo wrapped in a PDF. These files contain millions of pixels, many of which are just 'white space' or background noise. 

Standard compression tools often treat these files like text, which results in artifacts and blurry letters. Our tool is different. We use **Image Layer Optimization** to specifically target the background while keeping the high-contrast areas (like your grades and name) sharp.

### Why Indian Portals (SSC, UPSRTC, Ojas) Love 200KB
If you're applying for jobs in India, you've seen this limit everywhere. It's the industry standard for the National Informatics Centre (NIC) based portals. They require a file that is small enough to be viewed instantly by a human reviewer but clear enough to be verified as authentic.

Our tool helps you hit that 'sweet spot' where the file size is below 200KB but the document looks professional.

### Privacy You Can Trust
We know you're processing sensitive certificates—Caste certificates, EWS documents, for even your Passport Seva uploads. **Your documents never leave your browser.** 

We don't upload your files to a cloud server. Everything happens in your device's memory. This isn't just a convenience; it's a security feature. No uploads means no data leaks. Your personal info stays with you.`,
    steps: [
      {
        title: "Upload Your Scan",
        desc: "Select the heavy scanned PDF certificate from your device.",
      },
      {
        title: "Smart Image Optimization",
        desc: "Our engine will analyze the pixels and compress the background layers.",
      },
      {
        title: "Check & Download",
        desc: "Check the preview to make sure everything is readable before you save.",
      },
    ],
    faqs: [
      {
        q: "Will my Grade Sheet remain readable?",
        a: "Yes. Our tool is designed to identify text areas and preserve their detail. Roll numbers and grades will stay clear enough for official verification.",
      },
      {
        q: "Is it safe for Caste or EWS certificates?",
        a: "Absolutely. No data is stored or uploaded. It's 100% private, processing locally in your browser memory.",
      },
      {
        q: "Does it work with mobile scanner apps?",
        a: "Yes! If you used a phone app like CamScanner or Microsoft Lens and the file is too big, our tool will perfectly resize it to 200KB.",
      },
      {
        q: "What if my scan has multiple pages?",
        a: "No problem. Our engine processes each page individually to ensure the total file stays under the 200KB mark.",
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
        a: "No. The visible content (text, images, layout) remains exactly the same. Only hidden data is removed.",
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

  "/compress-pdf-to-50kb": {
    content: `Facing a strict  50KB PDF limit ? Some Indian government scholarship portals and signature upload fields require extremely small file sizes. 

Our  50KB PDF Smallizer  uses aggressive but text-safe compression to help you fit under this tight limit. 

 Best for: 
- Signatures converted to PDF
- Single-page basic certificates
- Passport-size photos in PDF format

 Note:  If your PDF has many photos, quality might reduce to fit the 50KB target. Text remains readable for verification. Works 100% offline in your browser.`,
    steps: [
      {
        title: "Select PDF",
        desc: "Choose the file that needs to be under 50KB.",
      },
      {
        title: "Compress",
        desc: "Our tool will automatically optimize it for the 50KB limit.",
      },
      {
        title: "Download",
        desc: "Save the processed PDF and upload it to your portal.",
      },
    ],
    faqs: [
      {
        q: "Will a full marksheet fit in 50KB?",
        a: "It's difficult for complex marksheets, but simple text-only docs can be compressed to 50KB safely.",
      },
      {
        q: "Is it safe for my signature?",
        a: "Yes. Processing is local inside your browser. Your signature is never uploaded to any server.",
      },
      {
        q: "Can I use it on mobile?",
        a: "Yes, works perfectly in any mobile browser.",
      },
    ],
  },

  "/compress-pdf-to-150kb": {
    content: `Many Indian government portals like  SSC, Railways, and Passport Seva  have a 150KB or 200KB limit for document uploads. If your 1MB scan is getting rejected, you've found the right fix.

Our tool is optimized to reduce PDF size under  150KB  while keeping the text sharp enough for official verification. Chaahe caste certificate ho ya bank statement, hum use perfectly resize kar dete hain.

 Why trust us? 
-  No Uploads:  Your sensitive files stay in your browser.
-  Fast:  Processing takes less than 2 seconds.
-  Free:  No signups or hidden watermarks.

Submission se pehle, PDF select karein, resize karein, aur tension-free portal pe upload karein.`,
    steps: [
      { title: "Choose File", desc: "Select the PDF file larger than 150KB." },
      {
        title: "Auto-Resize",
        desc: "Wait while we optimize the file for 150KB limit.",
      },
      {
        title: "Download",
        desc: "Save the ready-to-upload PDF to your device.",
      },
    ],
    faqs: [
      {
        q: "Is 150KB enough for a marksheet?",
        a: "Yes, for a standard single-page marksheet, 150KB provides high readability.",
      },
      {
        q: "Works for Passport Seva?",
        a: "Yes, it is perfectly suited for Passport portal document requirements.",
      },
      {
        q: "Mobile pe ho jayega?",
        a: "Ji haan, mobile browser mein smoothly kaam karta hai.",
      },
    ],
  },

  "/compress-pdf-to-500kb": {
    content: ` Professional PDF Compression for Your Career 
Many corporate portals and job boards like  Naukri, LinkedIn, and Indeed  have a 500KB limit for resume uploads. If your CV is currently 2MB, it might get rejected.

Our 500KB tool optimizes your resume without compromising on searchability or layout. Chaahe background images ho ya charts, hum unhe professionally resize karte hain taki aapka document HR-ready rahe.

 Trust & Privacy: 
Your Resume contains sensitive contact info. We respect that. Unlike other sites, we process your file  entirely in your browser . No Resume is ever uploaded to our server. 100% Secure.`,
    steps: [
      {
        title: "Select Resume",
        desc: "Choose the PDF version of your CV or Resume.",
      },
      {
        title: "Optimize to 500KB",
        desc: "Wait a second while we optimize the file layers.",
      },
      {
        title: "Download",
        desc: "Save the optimized copy and start applying to jobs.",
      },
    ],
    faqs: [
      {
        q: "Will the recruiter be able to read my text?",
        a: "Yes. We maintain text sharpness so that ATS and human recruiters see a clear document.",
      },
      {
        q: "Is it safe for my contact info?",
        a: "ABSOLUTELY. Your file stays in your browser's memory and is never uploaded.",
      },
      { q: "Free for all users?", a: "Yes, 100% free. No watermarks." },
    ],
  },

  "/compress-pdf-to-1mb": {
    content: ` Optimize Large PDF Documents to 1MB 
Handling heavy reports, university thesis files, or multipage contracts? Many email systems and university portals (like DU, JNU, or foreign admissions) set a  1MB limit .

Our  1MB PDF Compressor  balances high resolution with small file size. It’s designed for longer documents where you need the text to remain perfectly crisp for printing.

 100% Private Engine: 
Don't risk your academic or legal documents on cloud servers. We process everything  offline  in your browser. Fast, secure, and reliable.`,
    steps: [
      {
        title: "Select Document",
        desc: "Choose your large PDF (e.g. 10MB report).",
      },
      {
        title: "Optimize",
        desc: "The engine will downsample assets to fit the 1MB target.",
      },
      { title: "Download", desc: "Save the professional, 1MB-ready PDF." },
    ],
    faqs: [
      {
        q: "Is 1MB enough for a 50-page PDF?",
        a: "For text-heavy files, yes. For image-heavy portfolios, we apply strong but clear compression.",
      },
      {
        q: "Can I use it for University forms?",
        a: "Yes, it is ideal for academic portals with a 1MB file limit.",
      },
      {
        q: "Data security?",
        a: "Your file is never uploaded. It's processed entirely on your device.",
      },
    ],
  },

  "/reduce-pdf-size-to-500kb": {
    content: ` Need to hit exactly 500KB? 
Whether it's for a government scheme or a corporate job application, reducing PDF size to 500KB is a common requirement. Our tool simplifies this process.

No more "File size limit exceeded" messages. Just drag your document, and our browser engine will shrink it for you in seconds.

 Privacy Reminder:  Your documents are your business. We don't see them, and we don't store them. Everything stays in your browser session.`,
    steps: [
      { title: "Add File", desc: "Select the PDF from your storage." },
      {
        title: "Process",
        desc: "Wait for the 'Reduced' indicator to show up.",
      },
      {
        title: "Download",
        desc: "Save and upload to your destination portal.",
      },
    ],
    faqs: [
      {
        q: "Does it work with color documents?",
        a: "Yes, it optimizes color profiles to save space without losing the look.",
      },
      {
        q: "Can I use it on a public computer?",
        a: "Yes. Since it runs in the browser and doesn't store data, it's safer than uploading to a server.",
      },
      {
        q: "Is it safe for marksheets?",
        a: "Yes. All processing happens offline in your browser. Your sensitive marksheets and certificates never touch our servers.",
      },
    ],
  },

  "/resize-pdf-kb": {
    content: ` The Ultimate Resize Tool for Indian Portals 
Are you confused by limits like "20KB to 50KB" or "100KB to 200KB"? Indian recruitment sites (SSC, UPSC, Railways, IBPS) often have very specific ranges.

Our  Resize PDF in KB  tool allows you to pick a target and hit it. We remove unnecessary metadata and optimize technical headers so you can finally click 'Submit' without an error.

 Safe & Private: 
Since your marksheets and certificates contain personal info, we process everything  locally in your browser . No uploads, no risk.`,
    steps: [
      { title: "Upload PDF", desc: "Choose the file you need to resize." },
      {
        title: "Pick Target KB",
        desc: "Select common limits like 50KB, 100KB, or 200KB.",
      },
      { title: "Download", desc: "Get your resized file instantly." },
    ],
    faqs: [
      {
        q: "Can I resize to a specific KB number?",
        a: "We provide optimized targets (50kb, 100kb, etc.) that are most commonly required by Indian portals.",
      },
      {
        q: "Will the resolution drop?",
        a: "Only if the file is extremely large. For most standard docs, quality stays excellent.",
      },
      {
        q: "Is it really private?",
        a: "Yes. Use our tool for Aadhar/PAN cards without any worry — no data hits our servers.",
      },
    ],
  },

  "/resize-pdf-mb": {
    content: ` Shrink Gigantic PDF Files in Seconds 
Have a 20MB scan that needs to be sent via email? Or a 50MB legal document that won't upload to a corporate cloud? 

Our  Resize PDF in MB  tool is built for efficiency. It compresses heavy assets to bring files down to 1MB, 2MB, or 5MB targets without breaking the bank — or your privacy.

 Why Use It? 
-  Email Ready:  No more "Attachment too large" Gmail errors.
-  Fast:  Much faster than cloud-based tools since it runs on YOUR hardware.
-  Secure:  Your confidential business or legal docs never leave your sight.`,
    steps: [
      {
        title: "Select Large PDF",
        desc: "Choose the heavy MB file from your drive.",
      },
      {
        title: "Select Target MB",
        desc: "Choose your desired size (e.g. Reduce to 2MB).",
      },
      { title: "Download", desc: "Save the light, optimized PDF." },
    ],
    faqs: [
      {
        q: "How much can I reduce?",
        a: "You can often shrink 10MB files down to 1MB or 2MB easily.",
      },
      {
        q: "Is there a file size limit?",
        a: "The tool handles up to 50MB files smoothly on most modern devices.",
      },
      {
        q: "Does it work offline?",
        a: "Yes! Once the page is loaded, you don't even need internet to compress.",
      },
    ],
  },

  "/pdf-to-jpg": {
    intro: `Need to turn your PDF pages into high-quality JPG images? Whether you're uploading a certificate to a portal that doesn't accept PDFs, or you want to share a specific page on social media, our converter is the perfect solution.

Unlike other online converters that compress your images until they're unreadable, we give you full control over the quality. You can choose your desired DPI (Dots Per Inch) to ensure that even the smallest text remains crisp and clear.`,
    content: `### High-Quality Conversion and Privacy
Converting sensitive documents like resumes, ID cards, or certificates requires trust. Most 'free' converters upload your files to their servers and keep them for 24 hours. We don't. 

Our **PDF to JPG** tool runs 100% in your browser. Your images are generated right inside your device's memory. This makes it:
1. **Ultra-Fast**: No waiting for file uploads or processing queues.
2. **Secure**: Your documents never touch our server, so there's no risk of a data breach.
3. **Private**: Once you close your browser tab, the images are gone forever.

### Why You Might Need This
- **Government Portals**: Many sites in India (like for PAN card updates or specific state forms) specifically ask for JPG format instead of PDF.
- **Social Sharing**: Share your certificates or report pages directly on WhatsApp, LinkedIn, or Instagram.
- **Mobile Viewing**: JPGs are often easier to view and scroll through on mobile devices than multi-page PDFs.

### How it Works
We use a high-performance rendering engine that treats every PDF page as a high-resolution canvas. When you click 'Convert', the tool 'paints' the page into an image and package it for download. You can convert whole documents or pick specific pages. 

If your PDF is too large to load or needs cleaning first, try our [Compress PDF](/compress-pdf) or [Remove Metadata](/remove-metadata-from-pdf) tools.`,
    steps: [
      {
        title: "Upload Your PDF",
        desc: "Select the document you want to turn into images.",
      },
      {
        title: "Set Your Quality",
        desc: "Choose from Standard (150 DPI) or High (300 DPI) quality settings.",
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
        a: "Yes, it's 100% free and very safe for legal or official documents because the conversion happens locally on your computer. No data is sent to us.",
      },
      {
        q: "What DPI should I choose for my marksheet?",
        a: "We recommend 300 DPI for marksheets and certificates. This ensures that even small fonts and signatures are perfectly sharp and readable.",
      },
      {
        q: "Does it work on Android and iPhone?",
        a: "Yes! You can convert PDFs to JPGs directly from your phone's browser. It's much faster than downloading a heavy app just for one task.",
      },
      {
        q: "What happens to my PDF after conversion?",
        a: "Nothing! It stays on your device. Our tool merely reads the file in your browser's RAM and generates images. No copies are stored anywhere.",
      },
    ],
  },

  "/merge-pdf": {
    content: `Merge multiple PDF files into one single document instantly. This tool is perfect for Indian students and job seekers who need to combine their Xth, XIIth, and Graduation marksheets into a single file for SSC, UPSC, or private job applications on Naukri.

Humara Merge PDF tool purely browser-based hai. Iska matlab aapke sensitive certificates kabhi hamare server par upload nahi hote. Sab kuch aapke computer ya mobile par process hota hai, making it 100% safe and secure for official documents.

Need to reduce the file size after merging? Use our [Compress PDF](/compress-pdf) tool. Or if you need to organize pages or add text, try [Edit PDF](/edit-pdf).`,
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
        q: "How to merge PDF files Mac?",
        a: "Honestly, if you're tryin' to figure out how to merge pdf files mac style, most people tell you to use the built-in apps. It's okay, but can be a bit of a click-fest if you have more than two files. If you want a zero-install way that's actually faster, just use our Merge PDF tool. It works right in Safari or Chrome on your Macbook, and you don't have to fiddle with sidebar thumbnails or hidden menus.",
      },
      {
        q: "How to merge PDF documents in Preview?",
        a: "Look, knowing how to merge pdf documents in preview is a good skill for Mac users, but dragging those tiny pages in the sidebar is super annoying if you have a bunch of files. Most of us just want to get it over with. Our online PDF combiner is way easier—just drop 'em all at once and you're good to go. No dragging required.",
      },
      {
        q: "Mail merge PDF",
        a: "If you're doing a mail merge pdf for work and end up with like fifty separate files, you probably need them in one big doc to print or save. Instead of clicking 'Save as PDF' on every single one, just run your merge and then use our Merge PDF utility to stack them up. It saves a ton of time whether you're on Windows or a Mac.",
      },
      {
        q: "Merge PDF documents Acrobat",
        a: "Acrobat is expensive, let's be real. If you don't have the paid Pro version, you can't even merge pdf documents acrobat style without that annoying 'Start Free Trial' popup. Skip the subscription and use our free tool. It does the same exact thing without asking for your credit card.",
      },
      {
        q: "Linux merge PDF",
        a: "For the Linux folks, yeah you can use Ghostscript or PDFtk, but let's be honest—remembering the command line syntax for a linux merge pdf task is just a pain. If you're using Ubuntu or Fedora and just want a quick GUI, our Merge PDF online tool works perfectly in Firefox. It's 100% private too, so your data stays safe.",
      },
      {
        q: "How to merge PDF files on Mac?",
        a: "A lot of people keep asking how to merge pdf files on mac because the built-in way is kinda hidden inside the Quick Actions menu. If you can't find it or it's being buggy (which happens sometimes), our site is always up. Just upload, merge, and download—it literally takes like 5-10 seconds tops.",
      },
      {
        q: "How to mail merge PDF documents?",
        a: "Trying to figure out how to mail merge pdf documents in Word or Excel can be tricky because you usually get separate PDFs for each person. Our tool helps you combine those individual results into one final report for your records or for emailing out as one file.",
      },
      {
        q: "How to merge PDF files in Windows?",
        a: "Windows doesn't really have a built-in 'Preview' app like Mac does, so how to merge pdf files in windows is a constant headache for most. You usually end up downloading some random app that probably has viruses. Don't do that. Just use our secure Merge PDF tool. It’s clean, fast, and stays entirely in your browser memory.",
      },
      {
        q: "Merge PDF files Mac OS",
        a: "Whether you're on the new Sequoia or some older version, to merge pdf files mac os provides a few ways, but they keep changing where the buttons are. Our online merger is consistent. Works perfectly on any iMac or MacBook without needing to learn whatever new thing Apple changed this year.",
      },
      {
        q: "Dropbox merge PDF",
        a: "If you got a bunch of files in a shared folder, doing a dropbox merge pdf manually means downloading everything, merging, and re-uploading. If you use our site, you just drag the files directly from your sync folder to the browser and it combines them instantly. Super simple.",
      },
    ],
  },

  "/split-pdf": {
    content: `Struggling with a giant PDF that needs to be broken down? Whether you have a 50-page report or a scanned batch of marksheets, our  Split PDF  tool helps you separate files without the complexity of heavy software. It runs 100% in your browser, meaning your sensitive documents never leave your device.

 Why we built this for Indian Portals:  Whether it’s the back of your passbook for an  EPFO  claim or a single degree certificate from a semester-wise PDF, we know the struggle. This tool is designed to help you extract exactly what you need for  SSC, UPSC, NSDL, and NTA  portals without needing a laptop or expensive software.

 100% Local Browser Processing:  Most "online" splitters send your bank statements to a remote server. We don't. Our tool uses  WebAssembly (Wasm)  to run the splitting logic inside your browser's memory. Your files are never uploaded, never saved, and never seen by us. Your privacy is our architecture.

>  Pro Tip for Students:  If you're splitting a 10-page scan for a scholarship portal and the final file is still over 200KB, use our [Compress PDF](/compress-pdf) tool right after splitting. Most Indian portals (like NSP or SSC) are very strict about the size of individual page uploads.`,
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
        q: "How do I split PDF pages without paying for a subscription?",
        a: "Honestly, you don't need a pro editor. If you're wondering how do i split pdf pages quickly, just use our [Split PDF tool](https://compresspdfto200kb.online/split-pdf). It's totally free, and because it runs in your browser, it's actually faster than most paid software. Just select the pages you want and hit extract—it’s that simple.",
      },
      {
        q: "What is the best way to split PDF in Preview Mac?",
        a: "If you have a MacBook and want to split pdf in preview mac, you usually have to drag pages one by one to your desktop. It’s okay for one page, but if you have a big file, it’s much easier to just drop it here at our [Split PDF tool](https://compresspdfto200kb.online/split-pdf) and click the pages you need visually. No more messy desktops!",
      },
      {
        q: "How to split PDF Adobe Acrobat style?",
        a: "Everyone wants to know how to split pdf adobe acrobat style but without the huge monthly bill. Our tool gives you that same 'Extract' and 'Split' functionality you'd find in the acrobat pro dc split pdf menu. You get high-quality separate files without the Adobe price tag or annoying login requirements.",
      },
      {
        q: "How to split PDF by pages for government forms?",
        a: "When you're applying for a job or a scholarship and the portal only wants your 'Page 3' certificate, you need to know how to split pdf by pages instantly. Just upload your multi-page scan here, click the specific page you need, and download it as a new file. [Split PDF online](https://compresspdfto200kb.online/split-pdf) now.",
      },
      {
        q: "How to split PDF file into separate PDF files?",
        a: "If you have one big scan of all your documents and need to know how to split pdf file into separate pdf files, you've found the right spot. Our tool lets you select custom page ranges so you can turn one giant scan into five or ten individual PDFs in one go. Much better than re-scanning every single page!",
      },
      {
        q: "How to split PDF file into multiple files on Windows?",
        a: "Windows doesn't have a built-in 'Preview' app like Mac, so knowing how to split pdf file into multiple files on PC can be a headache. Don't download random apps that might have viruses. Just use our secure [Split PDF tool](https://compresspdfto200kb.online/split-pdf). It works on any Windows 10 or 11 browser safely.",
      },
      {
        q: "Can I split PDF in Adobe without a Pro account?",
        a: "It’s really hard to figure out how to split pdf in adobe if you only have the free Reader version (they usually gray out the button). Instead of getting frustrated, just use our [Split PDF utility](https://compresspdfto200kb.online/split-pdf). It’s built to be a free alternative that just works, no strings attached.",
      },
      {
        q: "Is it possible to split PDF pages into separate files on mobile?",
        a: "Yes! If you need to split pdf pages into separate files using your phone, our mobile-responsive tool is perfect. Whether you're at a cyber cafe or on the go, you can separate your certificates directly from your mobile storage without needing a computer.",
      },
      {
        q: "What if I need to split a large PDF for a team project?",
        a: "If you're handling a massive report and need to extract pdf pages into separate files for different colleagues, our tool handles large files easily. It’s fast, keeps the formatting perfect, and ensures everyone gets exactly the pages they need.",
      },
      {
        q: "How to evaluate the intelligent automation software company NICE on Split PDF?",
        a: "When enterprise users evaluate the intelligent automation software company nice on split pdf workflows, they're looking for high-end robotic processing. For most of us, though, we just need a simple, safe way to fix a PDF. Our tool is 'nice' and free, giving you that automated feel without the corporate complexity.",
      },
    ],
  },

  "/split-pdf-mac": {
    content: `If you're wondering how to split pdf in preview mac, you basically have to print to PDF or drag pages out one by one. It’s kinda clunky. For MacBook and iMac users, our browser-based tool is a much smoother experience. 

Whether you are organizing student assignments or compiling reports on Mac OS, our split pdf tool provides a seamless, professional solution without needing to fiddle with sidebar thumbnails or hidden Preview menus.`,
    steps: [
      {
        title: "Select PDF",
        desc: "Choose the document from your Mac Finder.",
      },
      {
        title: "Select Pages",
        desc: "Click the pages or ranges you need to separate.",
      },
      { title: "Download", desc: "Get your extracted PDF files instantly." },
    ],
    faqs: [
      {
        q: "Is there a faster way than Preview to split a PDF on Mac?",
        a: "Yes, our online [Split PDF tool](https://compresspdfto200kb.online/split-pdf) is much faster for multi-page extractions than manually dragging pages in Preview.",
      },
      {
        q: "How to split PDF in Preview on Mac OS?",
        a: "While you can use Preview, it's manual. Use our [online splitter](https://compresspdfto200kb.online/split-pdf) for a faster, automatic way to extract pages.",
      },
    ],
  },

  "/split-pdf-windows": {
    content: `Windows doesn't really have a built-in "Preview" app like Mac does, so how to split pdf files in windows is a constant headache. Most users end up downloading random apps that might be unsafe. 

Our tool is the perfect fixed-for-windows solution. It's clean, fast, and stays entirely in your browser memory. Whether you use Windows 10 or 11, splitting long documents into separate files is now a 3-click process.`,
    steps: [
      {
        title: "Upload",
        desc: "Select files from your Windows file explorer.",
      },
      { title: "Pick Range", desc: "Enter the pages you need to extract." },
      { title: "Save", desc: "Download the new PDFs to your PC." },
    ],
    faqs: [
      {
        q: "How to split PDF files in Windows for free?",
        a: "Don't install sketchy software. Use our secure [Split PDF tool](https://compresspdfto200kb.online/split-pdf) directly in your browser.",
      },
      {
        q: "Can I split a PDF into separate files on Windows 11?",
        a: "Yes! Our tool works perfectly on all Windows versions to [separate PDF pages](https://compresspdfto200kb.online/split-pdf).",
      },
    ],
  },

  "/split-pdf-adobe": {
    content: `Acrobat Pro DC split pdf prompts are annoying when you just want a quick fix. If you don't have the paid version, you're usually stuck. Our tool gives you that same professional "Extract" and "Split" functionality without the subscription.

It's the perfect Acrobat alternative for students and pros. You get high-quality results without having to deal with Adobe's complicated menus or cloud upload risks. Everything happens right here, privately.`,
    steps: [
      {
        title: "Drop PDF",
        desc: "Add the file you'd usually open in Acrobat.",
      },
      { title: "Choose Pages", desc: "Select extraction points visually." },
      { title: "Extract", desc: "Get your files without the Adobe price tag." },
    ],
    faqs: [
      {
        q: "How to split PDF Adobe style for free?",
        a: "Use our [Split PDF tool](https://compresspdfto200kb.online/split-pdf) to get professional results without the Acrobat Pro subscription.",
      },
    ],
  },

  "/split-pdf-by-pages": {
    content: `Need to separate specific segments of a document? Knowing how to split pdf by pages is essential for scholarship applications and official document submission. 

Our tool allows you to define exact ranges (like 1-3, 5, 8-10) or simply click the thumbnails to pick your pages. It’s specially tuned for Indian government portals which often require individual certificate uploads from a single scanned file.`,
    steps: [
      { title: "Upload Scan", desc: "Choose your multi-document scanned PDF." },
      {
        title: "Define Range",
        desc: "Select the specific pages for each document.",
      },
      {
        title: "Split PDF",
        desc: "Download the individual files ready for upload.",
      },
    ],
    faqs: [
      {
        q: "How to split PDF by pages for SSC/UPSC?",
        a: "Simply select your page range in our [Split PDF tool](https://compresspdfto200kb.online/split-pdf) to get the exact file required for the portal.",
      },
    ],
  },

  "/resize-pdf-200kb": {
    intro: `Searching for "Resize PDF to 200KB"? You are likely facing a file upload limit on a government portal like SSC, UPSC, or Ojas.
    
    Many users get confused between "Resizing" and "Compressing". While they achieve the same goal (smaller file size), resizing is often the term used when you need to hit a *specific* target like 200KB or 50KB to strict portal requirements. Our tool ensures your PDF is exactly under 200KB without blurring the text.
    
    Need to modify the document before resizing? Try our [Edit PDF](/edit-pdf) tool. Scanning documents? Convert [JPG to PDF](/jpg-to-pdf) first. Or if you purely generally need a smaller file, just [Compress PDF](/compress-pdf).`,
    features: [
      {
        title: "Exact 200KB Target",
        desc: "Specifically tuned to bring PDFs under the 200KB mark required by Indian government document portals.",
      },
      {
        title: "Precision Resizing",
        desc: "Need 150KB or 50KB instead? You can adjust the settings to hit any size limit exactly.",
      },
      {
        title: "No Quality Loss",
        desc: "We optimize the file structure rather than just downscaling images, ensuring text remains sharp.",
      },
      {
        title: "Government Compliant",
        desc: "Generated PDFs are compatible with all major recruitment portals (SSC, IBPS, Railways).",
      },
    ],
    useCases: [
      "Fixing 'File too large' errors on SSC/UPSC websites",
      "Resizing scanned Aadhaar/PAN cards for KYC",
      "Reducing file size for Email attachments",
      "Optimizing resumes for job portals with strict limits",
    ],
    trustBlock: {
      title: "Client-Side Resizing Architecture",
      desc: "Unlike other tools that process files on a server, we resize your PDF directly in your browser. Your data never leaves your device.",
    },
    steps: [
      { title: "Select PDF", desc: "Choose the file that is currently too large." },
      { title: "Set Target", desc: "Confirm 200KB (or choose another size)." },
      { title: "Resize", desc: "Download your resized, portal-ready PDF." },
    ],
    faqs: [
      {
        q: "How to resize PDF to 200KB online?",
        a: "Simply upload your document to our tool. It is pre-configured to target the 200KB limit used by most portals.",
      },
      {
        q: "What is the difference between resize and compress?",
        a: "Resize typically implies hitting a specific dimension or file size target (like 200KB), whereas compression is about making it 'as small as possible'. Our tool handles both.",
      },
      {
        q: "Is it safe to use this for government forms?",
        a: "Yes, absolutely. Since we do not upload your files to any server, your sensitive personal documents remain private on your device.",
      },
      {
        q: "Can I resize PDF to 150KB or 50KB here?",
        a: "Yes! While 200KB is the default, you can easily select 150KB, 100KB, or 50KB options if your form requires it.",
      },
      {
        q: "Does resizing affect document dimensions?",
        a: "No, we primarily reduce the file size (KB). The page dimensions (A4, etc.) remain standard unless you explicitly choose to scale them.",
      },
      {
        q: "How to reduce PDF size for mobile uploads?",
        a: "This tool works perfectly on mobile browsers (Chrome, Safari). You can resize files directly from your phone's file manager.",
      },
    ],
  },

  "/split-pdf-online": {
    content: `Splitting PDF pages into separate files online has never been more secure. Most online tools upload your data to a remote server, but we process everything in your browser RAM. 

This is the ultimate "online" solution because it combines the convenience of the web with the security of an offline app. Fast, private, and works on any device—mobile, tablet, or desktop.`,
    steps: [
      { title: "Go Online", desc: "Open the tool in any browser." },
      { title: "Select", desc: "Choose the pages to separate." },
      { title: "Split", desc: "Generate your new PDFs instantly." },
    ],
    faqs: [
      {
        q: "Is online PDF splitting safe?",
        a: "It is with us. We use [in-browser processing](https://compresspdfto200kb.online/split-pdf) so your files are never uploaded.",
      },
    ],
  },

  "/edit-pdf": {
    intro: `Looking for a way to edit PDF online without paying for expensive software? You are in the right place.
    
    Our **Free PDF Editor** lets you add text, fill forms, and modify documents directly in your browser. Unlike other tools that require you to upload your sensitive files to a server, we process everything on your device. This makes it the safest way to *edit pdf without Adobe* or other paid tools.
    
    Need to reduce file size after editing? Use our [Resize PDF to 200KB](/resize-pdf-200kb) tool. Want to combine this with another document? [Merge PDFs](/merge-pdf) easily. File too large? [Compress PDF](/compress-pdf) online.`,
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
      {
        title: "Mobile Ready",
        desc: "Fully optimized for smartphones. Edit scanned PDFs or assignments on the go.",
      },
    ],
    useCases: [
      "Students filling out exam assignments or scholarship forms",
      "Government form submission (SSC, UPSC, Aadhaar updates)",
      "Adding signatures or dates to office documents",
      "Correcting typos in non-editable PDF files",
    ],
    trustBlock: {
      title: "Why Trust Our Editor?",
      desc: "Security is our #1 priority. Because we don't upload your file to any cloud server, your data is 100% safe from breaches. It's just you and your browser.",
    },
    steps: [
      { title: "Select PDF", desc: "Open the file you want to modify." },
      { title: "Edit", desc: "Use the text tool to add content or fill forms." },
      { title: "Save", desc: "Download the updated PDF instantly." },
    ],
    faqs: [
      {
        q: "How to edit PDF online for free?",
        a: "Simply upload your file to our tool. You can use the text tool to type anywhere on the document and then save the changes instantly.",
      },
      {
        q: "Is it safe to edit PDF files here?",
        a: "Yes. We use client-side technology, meaning the editing happens on your device. Your secure documents never touch our servers.",
      },
      {
        q: "How to edit PDF without Adobe Acrobat?",
        a: "Our free online editor is a perfect alternative. You don't need to install heavy software; just open your browser and start editing.",
      },
      {
        q: "Can I add text to a PDF?",
        a: "Absolutely. Select the 'Text' tool, click where you want to write, and type your content. You can drag to position it perfectly.",
      },
      {
        q: "Does this tool add a watermark?",
        a: "No. We provide a clean, watermark-free output for all your edited documents.",
      },
      {
        q: "How to edit scanned pdf?",
        a: "You can load a scanned PDF and add text overlays on top of it. This is great for filling out scanned forms.",
      },
      {
        q: "How to change text in PDF?",
        a: "Currently, we support *adding* new text. To change existing text, you can cover the old text with a white rectangle (using drawing tools soon) and type over it.",
      },
      {
        q: "Can I edit PDF on mobile?",
        a: "Yes! Our editor is responsive and works great on Android and iOS browsers.",
      },
      {
        q: "Is there a file size limit?",
        a: "Since we process locally, you can edit fairly large files without worrying about server upload caps.",
      },
      {
        q: "How to modify PDF files for free?",
        a: "Just use our 'Edit PDF' tool. It's completely free, requires no signup, and allows unlimited edits.",
      },
    ],
  },

  // ✅ JPG TO PDF (SEO Optimized)
  "/jpg-to-pdf": {
    intro: `Need to combine photos into a single document? Whether you're applying for a job, submitting college assignments, or aggregating receipts, convert JPG to PDF online instantly with our secure tool.

    Most image converters add watermarks or limit you to 3 files. We allow bulk conversion. Unlike mobile apps that spam you with ads, our browser tool is clean and fast.

    PDF too large after conversion? [Resize to 200KB](/resize-pdf-200kb) here. Need to add text to your images? [Edit PDF](/edit-pdf) online. Combining multiple files? [Merge PDF](/merge-pdf) tool.`,
    features: [
      {
        title: "Merge Multiple Images",
        desc: "Select multiple JPG, PNG, or JPEG files and combine them into one single PDF document.",
      },
      {
        title: "Instant Conversion",
        desc: "No queue, no waiting. The conversion happens instantly in your browser using WebAssembly.",
      },
      {
        title: "Private & Secure",
        desc: "Your photos never leave your device. We don't upload them to any cloud server.",
      },
      {
        title: "Adjustable Quality",
        desc: "Perfect for creating small PDFs for email or high-quality PDFs for printing.",
      },
    ],
    useCases: [
      "Creating a single PDF from multiple scanned pages",
      "Submitting handwritten assignments for college",
      "Merging receipts into one expense report",
      "Converting photos of ID cards for forms",
      "Sharing image collections as a document",
    ],
    trustBlock: {
      title: "Privacy-First Image Processing",
      desc: "Images often contain sensitive personal data. Unlike other converters, we process your JPGs offline in your browser. No uploads, no storage, 100% private.",
    },
    steps: [
      { title: "Select Images", desc: "Upload one or multiple JPG/PNG files." },
      { title: "Arrange", desc: "Drag and drop to set the page order." },
      { title: "Convert", desc: "Click to generate your PDF instantly." },
    ],
    faqs: [
      {
        q: "How to convert JPG to PDF online for free?",
        a: "Just open our tool, select your images, and click convert. It's completely free and works in your browser without any software installation.",
      },
      {
        q: "Can I merge multiple images into one PDF?",
        a: "Yes! You can select multiple JPGs at once, rearrange them, and we will combine them into a single multi-page PDF document.",
      },
      {
        q: "Is it safe to convert my photos here?",
        a: "Yes, extremely safe. We use client-side technology, meaning your photos are processed on your device and are never uploaded to our servers.",
      },
      {
        q: "Does it reduce image quality?",
        a: "We maintain high quality by default, but you can choose compression settings if you need a smaller file size for email.",
      },
      {
        q: "Can I convert PNG to PDF too?",
        a: "Yes, our tool supports JPG, JPEG, and PNG formats seamlessly.",
      },
      {
        q: "How to convert photo to PDF on mobile?",
        a: "Our tool is mobile-optimized. Just open this page on Chrome or Safari on your phone, select photos from your gallery, and save as PDF.",
      },
      {
        q: "Do I need to sign up?",
        a: "No. No account, no email, and no credit card required.",
      },
      {
        q: "Is there a limit on file size?",
        a: "Since processing is local, you can handle large images without the typical server upload limits found on other sites.",
      },
    ],
  },

  // ✅ RUSSIAN CONTENT START
  "/ru/szhat-pdf": {
    content: `Ваш PDF слишком большой? Не удается загрузить файл на портал госуслуг, отправить по почте или прикрепить к резюме? Вы попали по адресу.

Этот инструмент полностью бесплатен и работает на 100% в вашем браузере. Это значит, что ваши файлы никуда не загружаются — всё происходит прямо на вашем устройстве. Это идеальное решение для быстрой обработки документов.

Многие сайты и порталы (Госуслуги, налоговая, учебные порталы) имеют ограничение на размер файла. Иногда это 200 КБ, иногда 1 МБ. Наш сервис поможет вам сжать PDF до нужного размера без потери качества текста.

Мы гарантируем безопасность. Ваши документы не передаются на сторонние серверы. Многие пользователи уже доверяют нам свои файлы.

Если вам нужно уменьшить размер скана паспорта, справки или договора, просто выберите файл, и мы сделаем всё остальное. Работает и на телефоне, и на компьютере. Никаких программ устанавливать не нужно.`,
    steps: [
      {
        title: "Выберите PDF",
        desc: "Нажмите на кнопку загрузки или перетащите файл.",
      },
      {
        title: "Начните сжатие",
        desc: "Нажмите кнопку сжатия. Это займет несколько секунд.",
      },
      {
        title: "Скачайте файл",
        desc: "Готовый сжатый PDF можно скачать сразу же.",
      },
    ],
    faqs: [
      {
        q: "Пострадает ли качество при сжатии?",
        a: "Нет. Мы используем умные алгоритмы, чтобы текст оставался четким, а размер уменьшался.",
      },
      {
        q: "Можно ли использовать на телефоне?",
        a: "Да, сервис отлично работает в браузере на Android и iPhone.",
      },
      {
        q: "Мои файлы в безопасности?",
        a: "Абсолютно. Обработка происходит локально в вашем браузере, файлы не уходят на сервер.",
      },
      {
        q: "Какой максимальный размер файла?",
        a: "Сейчас мы поддерживаем файлы до 5 МБ.",
      },
      {
        q: "Это бесплатно?",
        a: "Да, полностью бесплатно и без водяных знаков.",
      },
    ],
  },

  "/ru/szhat-pdf-do-50kb": {
    content: `Нужно сжать PDF до 50 КБ? Это очень строгий лимит, который часто встречается на старых порталах или при загрузке подписей.

50 КБ — это очень мало для качественного документа, но наш инструмент постарается сделать всё возможное. Мы оптимизируем структуру файла, чтобы он "пролез" в этот лимит.

Идеально подходит для текстовых справок, квитанций и простых документов. Если в файле много картинок, качество может немного снизиться, но текст останется читаемым.

Работает прямо в браузере. Безопасно и быстро. Не нужно искать платные программы.`,
    steps: [
      {
        title: "Загрузите файл",
        desc: "Выберите документ, который нужно сильно сжать.",
      },
      {
        title: "Сжатие до 50 КБ",
        desc: "Инструмент попытается максимально уменьшить размер.",
      },
      {
        title: "Скачайте результат",
        desc: "Проверьте качество и загружайте на портал.",
      },
    ],
    faqs: [
      {
        q: "Реально ли сжать до 50 КБ?",
        a: "Для текстовых документов — да. Для сканов с фото это сложно, но мы постараемся.",
      },
      {
        q: "Сильно ли упадет качество?",
        a: "При таком сильном сжатии качество изображений может снизиться.",
      },
      {
        q: "Для чего нужен такой размер?",
        a: "Обычно для загрузки электронных подписей или анкет на старые сайты.",
      },
      { q: "Это безопасно?", a: "Да, всё происходит на вашем устройстве." },
      { q: "Нужна регистрация?", a: "Нет, сервис доступен без регистрации." },
    ],
  },

  "/ru/szhat-pdf-do-100kb": {
    content: `Требуется файл не более 100 КБ? Это стандартное требование для многих анкет, резюме и заявлений.

Наш инструмент поможет уменьшить размер PDF до 100 КБ, сохраняя при этом читаемость текста. Это оптимальный баланс для большинства документов.

Если вы подаете заявление на визу, загружаете документы в банк или отправляете резюме — этот инструмент для вас. Работает быстро, без очередей и рекламы.

Просто загрузите файл, и через пару секунд получите готовый документ нужного размера.`,
    steps: [
      {
        title: "Выберите документ",
        desc: "Загрузите PDF файл с вашего устройства.",
      },
      {
        title: "Сжатие до 100 КБ",
        desc: "Система оптимизирует файл под этот лимит.",
      },
      {
        title: "Сохраните файл",
        desc: "Скачайте готовый документ и используйте его.",
      },
    ],
    faqs: [
      {
        q: "Подойдет ли для резюме?",
        a: "Да, 100 КБ — отличный размер для отправки резюме.",
      },
      {
        q: "Читается ли текст после сжатия?",
        a: "Да, текст остается четким и разборчивым.",
      },
      {
        q: "Как долго идет обработка?",
        a: "Обычно 1-2 секунды, зависит от вашего устройства.",
      },
      {
        q: "Можно ли сжать скан?",
        a: "Да, сканированные документы тоже отлично сжимаются.",
      },
      {
        q: "Есть ли лимиты?",
        a: "Бесплатно и без ограничений по количеству файлов.",
      },
    ],
  },

  "/ru/szhat-pdf-do-150kb": {
    content: `Нужен файл до 150 КБ? Это "золотая середина" для многих государственных порталов и учебных заведений.

Часто бывает, что файл весит 160 или 180 КБ, и система его не принимает. Наш инструмент аккуратно уберет лишние данные, чтобы вы вписались в лимит 150 КБ.

Подходит для сканов паспортов, дипломов, сертификатов. Качество останется на высоком уровне.

Не тратьте время на сложные программы. Сделайте это онлайн за пару кликов. Безопасно и конфиденциально.`,
    steps: [
      {
        title: "Загрузите PDF",
        desc: "Выберите файл, который нужно немного уменьшить.",
      },
      {
        title: "Оптимизация до 150 КБ",
        desc: "Мы уберем лишний вес без потери качества.",
      },
      {
        title: "Скачайте результат",
        desc: "Ваш файл готов к загрузке на сайт.",
      },
    ],
    faqs: [
      {
        q: "Для каких документов подходит?",
        a: "Паспорта, дипломы, справки, сертификаты.",
      },
      {
        q: "Будет ли видно печати?",
        a: "Да, печати и подписи останутся четкими.",
      },
      { q: "Работает ли с цветными сканами?", a: "Да, цвет сохраняется." },
      {
        q: "Нужен ли интернет?",
        a: "Только для загрузки страницы, обработка идет в браузере.",
      },
      {
        q: "Где хранятся мои файлы?",
        a: "Нигде. Они удаляются сразу после закрытия вкладки.",
      },
    ],
  },

  "/ru/szhat-pdf-do-200kb": {
    content: `Самый популярный запрос: сжать PDF до 200 КБ. Большинство государственных порталов требуют именно этот размер.

Госуслуги, подача налоговой декларации, сайты вузов — везде требуют файлы не больше 200 КБ. Если ваш файл весит больше, система выдаст ошибку.

Мы создали этот инструмент специально для таких случаев. Он уменьшает размер PDF ровно настолько, чтобы он прошел проверку, но остался качественным.

Забудьте про сложные настройки. Просто загрузите файл и получите результат. Работает на любом устройстве — от телефона до ноутбука.`,
    steps: [
      {
        title: "Выберите файл",
        desc: "Загрузите документ, который не проходит по размеру.",
      },
      {
        title: "Сжатие до 200 КБ",
        desc: "Алгоритм подгонит размер под стандарт 200 КБ.",
      },
      {
        title: "Готово",
        desc: "Скачивайте и загружайте на портал без ошибок.",
      },
    ],
    faqs: [
      {
        q: "Примут ли такой файл на Госуслугах?",
        a: "Да, 200 КБ — стандартный лимит для большинства услуг.",
      },
      {
        q: "Можно ли сжать несколько файлов?",
        a: "Да, загружайте и сжимайте по очереди.",
      },
      {
        q: "Что если файл все равно больше?",
        a: "Попробуйте выбрать более сильное сжатие (например, до 100 КБ).",
      },
      {
        q: "Безопасно ли это?",
        a: "Полностью. Файлы не покидают ваш компьютер.",
      },
      {
        q: "Как быстро это работает?",
        a: "Почти мгновенно для обычных документов.",
      },
    ],
  },

  "/ru/szhat-pdf-do-500kb": {
    content: `Нужно уменьшить PDF до 500 КБ? Отличный размер для качественных документов, презентаций и портфолио.

500 КБ позволяют сохранить отличное качество изображений и графики. Если вы отправляете портфолио работодателю или презентацию клиенту, этот размер — то, что нужно.

Файл легко пройдет в почтовом вложении и быстро откроется на мобильном интернете.

Используйте наш сервис, чтобы не забивать почту тяжелыми файлами. Быстро, просто и бесплатно.`,
    steps: [
      {
        title: "Загрузите документ",
        desc: "Выберите PDF, который нужно 'облегчить'.",
      },
      {
        title: "Оптимизация до 500 КБ",
        desc: "Мы сохраним качество, убрав лишний вес.",
      },
      {
        title: "Скачайте файл",
        desc: "Готовый документ легкий и удобный для отправки.",
      },
    ],
    faqs: [
      {
        q: "Подойдет для портфолио с картинками?",
        a: "Да, 500 КБ достаточно для хорошего качества изображений.",
      },
      {
        q: "Можно ли отправлять по почте?",
        a: "Да, такой файл мгновенно прикрепится к письму.",
      },
      {
        q: "Изменится ли верстка?",
        a: "Нет, структура документа останется прежней.",
      },
      {
        q: "Есть ли водяные знаки?",
        a: "Нет, мы не добавляем никаких надписей.",
      },
      {
        q: "Работает на iPhone?",
        a: "Да, отлично работает в Safari и Chrome на iOS.",
      },
    ],
  },

  "/ru/szhat-pdf-do-1mb": {
    content: `У вас большой документ, и нужно уложиться в 1 МБ? Это частое требование для многостраничных договоров, отчетов и книг.

Файлы больше 1 МБ могут долго грузиться и не проходить через корпоративные почтовые фильтры. Наш инструмент поможет сделать ваш "тяжелый" PDF легким и удобным.

Мы аккуратно сожмем файл, не трогая текст и важные детали. Читать такой документ будет так же удобно, но весить он будет меньше.

Идеально для архивирования документов и отправки больших отчетов.`,
    steps: [
      {
        title: "Выберите большой файл",
        desc: "Загрузите документ любого размера (до 5 МБ).",
      },
      {
        title: "Сжатие до 1 МБ",
        desc: "Умное сжатие для многостраничных документов.",
      },
      { title: "Сохраните результат", desc: "Скачайте оптимизированный файл." },
    ],
    faqs: [
      {
        q: "Сколько страниц можно сжать?",
        a: "Ограничений по страницам нет, главное — исходный вес до 5 МБ.",
      },
      {
        q: "Будет ли текст четким?",
        a: "Да, для текстовых документов качества не меняется.",
      },
      {
        q: "Можно ли сжать книгу?",
        a: "Если она в PDF и до 5 МБ — да, без проблем.",
      },
      {
        q: "Это безопасно для конфиденциальных отчетов?",
        a: "Да, обработка локальная, никто не увидит ваш файл.",
      },
      { q: "Платно ли это?", a: "Нет, сервис бесплатный." },
    ],
  },

  "/ru/umenshit-razmer-pdf-do-500kb": {
    content: `Ищете способ уменьшить размер PDF? Если ваш файл слишком "тяжелый" для отправки или загрузки, мы поможем.

Часто бывает: сканировали документы в высоком качестве, и файл получился огромным. Наш инструмент исправит это за секунды. Мы уменьшим размер до 500 КБ или меньше, сохранив читаемость.

Это универсальное решение для любых задач — от учебы до работы. Не нужно разбираться в настройках DPI и сжатия. Просто загрузите файл, и мы сделаем его легким.

Экономьте место на диске и трафик при отправке. Попробуйте прямо сейчас.`,
    steps: [
      {
        title: "Выберите файл",
        desc: "Любой PDF документ, который нужно уменьшить.",
      },
      {
        title: "Уменьшение размера",
        desc: "Автоматическая оптимизация под веб-стандарты.",
      },
      {
        title: "Готово к отправке",
        desc: "Скачайте легкий файл и отправляйте куда угодно.",
      },
    ],
    faqs: [
      {
        q: "В чем разница между сжатием и уменьшением?",
        a: "Это одно и то же. Мы делаем файл легче.",
      },
      {
        q: "Потеряются ли данные?",
        a: "Нет, содержание документа останется тем же.",
      },
      {
        q: "Можно ли вернуть исходный размер?",
        a: "Нет, поэтому лучше сохраните копию оригинала.",
      },
      {
        q: "Работает без интернета?",
        a: "Интернет нужен только для открытия страницы.",
      },
      {
        q: "Как часто можно пользоваться?",
        a: "Сколько угодно, ограничений нет.",
      },
    ],
  },

  "/ru/szhat-skanirovannyj-pdf": {
    content: `Сканированные документы часто весят очень много. Обычные компрессоры могут испортить текст, сделав его размытым. Наш инструмент специально настроен для работы со сканами.

Мы умеем определять текст и графику, чтобы сжимать их правильно. Ваши квитанции, договора и рукописные заметки останутся четкими, но станут занимать в разы меньше места.

Если сканер выдал файл на 10 МБ, мы легко превратим его в компактный документ. Очень полезно для бухгалтеров, студентов и всех, кто работает с бумагами.

Загружайте сканы прямо с телефона или компьютера. Результат вас приятно удивит.`,
    steps: [
      { title: "Загрузите скан", desc: "Выберите сканированный PDF файл." },
      {
        title: "Умное сжатие",
        desc: "Специальный алгоритм для изображений и сканов.",
      },
      {
        title: "Скачайте",
        desc: "Получите компактный документ хорошего качества.",
      },
    ],
    faqs: [
      {
        q: "Текст не размоется?",
        a: "Мы стараемся сохранить максимальную четкость текста.",
      },
      {
        q: "Работает с цветными сканами?",
        a: "Да, цветные документы сжимаются отлично.",
      },
      {
        q: "Можно ли сжать фото документа?",
        a: "Если фото сохранено как PDF — да.",
      },
      {
        q: "Подходит для старых документов?",
        a: "Да, помогает улучшить структуру файла.",
      },
      { q: "Это безопасно?", a: "Да, ваши документы не уходят в сеть." },
    ],
  },

  "/ru/szhat-skanirovannyj-pdf-do-200kb": {
    content: `Нужно сжать скан до 200 КБ? Это сложная задача, но мы умеем её решать.

Сканы — это по сути картинки внутри PDF, поэтому они тяжелые. Чтобы ужать их до 200 КБ, нужны особые алгоритмы. Мы оптимизируем изображение так, чтобы при малом весе оно оставалось читаемым.

Это спасение, когда нужно загрузить скан паспорта или диплома на сайт с жесткими лимитами. Больше не нужно пересканировать с низким качеством. Просто прогоните файл через наш сервис.

Быстро, удобно и прямо в браузере. Справятся даже новички.`,
    steps: [
      { title: "Выберите скан", desc: "Загрузите ваш 'тяжелый' скан." },
      {
        title: "Сжатие до 200 КБ",
        desc: "Глубокая оптимизация изображений внутри PDF.",
      },
      {
        title: "Проверьте и скачайте",
        desc: "Убедитесь, что текст читаем, и скачивайте.",
      },
    ],
    faqs: [
      {
        q: "Будет ли читаем мелкий текст?",
        a: "Обычно да, но при сильном сжатии лучше проверить результат.",
      },
      {
        q: "Подходит для паспорта?",
        a: "Да, идеально для загрузки документов на госпорталы.",
      },
      {
        q: "Что если качество стало плохим?",
        a: "Попробуйте выбрать лимит побольше, например 500 КБ, если портал позволяет.",
      },
      {
        q: "Можно ли сжать рукописный текст?",
        a: "Да, рукописные сканы тоже обрабатываются.",
      },
      { q: "Бесплатно?", a: "Да, все функции бесплатны." },
    ],
  },

  "/ru/udalit-metadannye-pdf": {
    content: `Вы знали, что PDF файл хранит скрытую информацию? Имя автора, название программы, дату создания и многое другое. Иногда это нужно удалить для конфиденциальности.

Наш инструмент позволяет очистить метаданные PDF за один клик. Это полезно перед публикацией документа или отправкой его третьим лицам.

"Очищенный" файл выглядит так же, как оригинал, но больше не содержит лишней служебной информации. Это повышает вашу приватность и иногда даже немного уменьшает размер файла.

Процесс полностью безопасен — мы не смотрим ваши файлы, всё происходит у вас на компьютере.`,
    steps: [
      {
        title: "Загрузите PDF",
        desc: "Выберите файл, который нужно очистить.",
      },
      {
        title: "Удаление данных",
        desc: "Мы удалим автора, заголовок и прочие теги.",
      },
      {
        title: "Скачайте чистый файл",
        desc: "Получите новый файл без скрытой информации.",
      },
    ],
    faqs: [
      {
        q: "Что такое метаданные?",
        a: "Это скрытая информация о файле: автор, программа, дата создания.",
      },
      {
        q: "Изменится ли текст документа?",
        a: "Нет, визуально документ останется прежним.",
      },
      {
        q: "Зачем это нужно?",
        a: "Для приватности и безопасности перед отправкой файла.",
      },
      {
        q: "Можно ли восстановить данные?",
        a: "После удаления и сохранения — нет.",
      },
      {
        q: "Это законно?",
        a: "Конечно, это ваши файлы и ваше право ими управлять.",
      },
    ],
  },

  "/ru/izmenit-razmer-pdf-kb": {
    content: ` Инструмент для точного изменения размера PDF в КБ 
Вам нужно подогнать файл под строгие требования порталов, такие как "от 20 КБ до 50 КБ" или "не более 100 КБ"? 

Наш инструмент  Изменить размер PDF в КБ  позволяет выбрать целевой вес и достичь его за секунды. Мы оптимизируем техническую структуру файла, чтобы вы могли загрузить его без ошибок.

 Конфиденциальность прежде всего: 
Все операции выполняются прямо в вашем браузере. Ваши документы никуда не загружаются, что гарантирует 100% безопасность ваших персональных данных.`,
    steps: [
      {
        title: "Выберите файл",
        desc: "Загрузите PDF, размер которого нужно изменить.",
      },
      {
        title: "Укажите КБ",
        desc: "Выберите нужный лимит (например, 50 КБ или 100 КБ).",
      },
      { title: "Скачайте", desc: "Получите оптимизированный файл мгновенно." },
    ],
    faqs: [
      {
        q: "Можно ли указать точное количество КБ?",
        a: "Мы предлагаем набор самых популярных лимитов для быстрой и качественной обработки.",
      },
      {
        q: "Ухудшится ли качество?",
        a: "Мы сохраняем четкость текста. Качество изображений может снизиться только при экстремальном сжатии.",
      },
      {
        q: "Это безопасно для паспортных данных?",
        a: "Да. Обработка локальная, мы не имеем доступа к вашим файлам.",
      },
    ],
  },

  "/ru/izmenit-razmer-pdf-mb": {
    content: ` Уменьшите тяжелые PDF документы до нужного размера в МБ 
Файл весом 20 МБ не проходит в почте? Или корпоративная система не принимает документы больше 5 МБ? 

Наш инструмент  Изменить размер PDF в МБ  создан для эффективного уменьшения объема тяжелых файлов до 1 МБ, 2 МБ или 5 МБ без лишних сложностей.

-  Для почты:  Забудьте об ошибках "Файл слишком велик".
-  Быстро:  Работает на мощности вашего устройства, без ожидания загрузки на сервер.
-  Приватно:  Ваши юридические или бизнес-документы остаются только у вас.`,
    steps: [
      { title: "Выберите PDF", desc: "Загрузите тяжелый файл с вашего диска." },
      {
        title: "Выберите цель",
        desc: "Укажите желаемый размер (например, до 2 МБ).",
      },
      { title: "Скачайте", desc: "Сохраните легкую версию документа." },
    ],
    faqs: [
      {
        q: "Насколько сильно можно уменьшить файл?",
        a: "Часто удается сжать файл с 10 МБ до 1-2 МБ без видимых потерь.",
      },
      {
        q: "Нужно ли платить?",
        a: "Нет, инструмент полностью бесплатен для всех пользователей.",
      },
      {
        q: "Работает ли это на мобильном?",
        a: "Да, вы можете изменять размер прямо в браузере вашего смартфона.",
      },
    ],
  },

  "/ru/pdf-v-jpg": {
    content: ` Конвертируйте страницы PDF в качественные изображения JPG 
Вам нужно загрузить скан диплома в формате картинки? Или вы хотите поделиться страницей документа в мессенджере?

Наш  Конвертер PDF в JPG  превращает каждую страницу вашего документа в отдельное четкое изображение. Вы можете выбрать качество (DPI) для получения идеального результата.

 Безопасная конвертация: 
В отличие от облачных сервисов, мы  не загружаем ваш PDF на сервер . Конвертация происходит полностью в вашем браузере. Это быстро, бесплатно и абсолютно приватно.`,
    steps: [
      {
        title: "Загрузите документ",
        desc: "Выберите PDF файл для конвертации.",
      },
      {
        title: "Выберите качество",
        desc: "Укажите DPI (300 DPI для лучшей четкости).",
      },
      {
        title: "Скачайте архив",
        desc: "Получите все страницы в виде JPG файлов одним кликом.",
      },
    ],
    faqs: [
      {
        q: "Будет ли текст читаемым на картинке?",
        a: "Да, при выборе 300 DPI текст остается очень четким.",
      },
      {
        q: "Можно ли конвертировать только одну страницу?",
        a: "Инструмент конвертирует все страницы, и вы сможете выбрать нужные из архива.",
      },
      {
        q: "Где хранятся мои файлы?",
        a: "Нигде. Все файлы удаляются из памяти браузера сразу после закрытия вкладки.",
      },
    ],
  },

  "/ru/obedinit-pdf": {
    content: ` Объединяйте несколько PDF файлов в один документ 
Вам нужно собрать все сертификаты в один файл для отправки? Или склеить страницы отсканированного договора?

Наш инструмент  Объединить PDF  — это простой и надежный способ соединить документы прямо в браузере. Просто перетащите файлы, расставьте их в нужном порядке и сохраните.

-  Без загрузки на сервер:  Полная приватность ваших документов.
-  Удобная сортировка:  Меняйте порядок файлов простым перетаскиванием.
-  Любое количество файлов:  Объединяйте 2, 5 или даже 10+ PDF мгновенно.`,
    steps: [
      {
        title: "Добавьте файлы",
        desc: "Выберите все PDF, которые нужно соединить.",
      },
      {
        title: "Настройте порядок",
        desc: "Перетащите иконки файлов в правильной последовательности.",
      },
      {
        title: "Скачайте результат",
        desc: "Получите готовый объединенный файл.",
      },
    ],
    faqs: [
      {
        q: "Есть ли лимит на количество файлов?",
        a: "Строгих лимитов нет, но объединение очень большого количества файлов может потребовать больше памяти на вашем устройстве.",
      },
      {
        q: "Безопасно ли объединять личные документы?",
        a: "Да, так как файлы не покидают ваше устройство.",
      },
      {
        q: "Сохранится ли качество оригиналов?",
        a: "Да, инструмент объединяет файлы без изменения их внутреннего содержимого.",
      },
    ],
  },

  "/ru/razdelit-pdf": {
    content: ` Разделяйте PDF или извлекайте нужные страницы мгновенно 
Нужно вытащить всего одну страницу из огромного отчета? Или разделить документ на части для удобной отправки?

Наш инструмент  Разделить PDF  позволяет визуально просмотреть каждую страницу и выбрать именно то, что вам нужно. Всё работает быстро и прямо в вашем браузере.

-  Визуальный выбор:  Вы видите превью каждой страницы.
-  Гибкие настройки:  Указывайте диапазоны или выбирайте страницы кликом.
-  Приватно на 100%:  Никаких серверов. Ваши данные остаются только у вас.`,
    steps: [
      {
        title: "Выберите PDF",
        desc: "Загрузите файл, который хотите разделить.",
      },
      {
        title: "Отметьте страницы",
        desc: "Выберите страницы кликом или введите диапазоны (например, 1-3, 5).",
      },
      {
        title: "Извлеките PDF",
        desc: "Скачайте новые файлы на свое устройство.",
      },
    ],
    faqs: [
      {
        q: "Можно ли выбрать страницы не по порядку?",
        a: "Да, вы можете выбрать любые страницы, например 1, 5 и 10.",
      },
      {
        q: "Будут ли видны превью всех страниц?",
        a: "Да, наш инструмент генерирует миниатюры для каждой страницы документа.",
      },
      {
        q: "Это безопасно для документов с подписями?",
        a: "Абсолютно. Файлы обрабатываются локально и не передаются в сеть.",
      },
    ],
  },

  "/merge-pdf-mac": {
    content: `How to merge PDF files on Mac without buying software? Combining multiple documents into a single file shouldn't be a headache. Whether you are organizing student assignments, compiling business reports, or preparing government application forms, our merge pdf tool provides a seamless, professional solution. 

Unlike traditional tools that require you to upload sensitive data to their servers, our platform processes everything locally in your browser, ensuring 100% privacy and security. Whether you are using a MacBook Pro, Air, or an iMac, keeping your documents organized is essential.`,
    steps: [
      {
        title: "Select PDF",
        desc: "Choose the documents you want to combine from your Mac.",
      },
      {
        title: "Arrange Files",
        desc: "Drag and drop the files to set the correct order.",
      },
      {
        title: "Merge & Save",
        desc: "Click Merge to combine and download your new PDF.",
      },
    ],
    faqs: [
      {
        q: "How to merge PDF files on Mac using just the mouse?",
        a: "You can use our merge pdf tool to drag and drop your files. It's much faster than manual methods when you need to merge pdf files on mac quickly. [Merge pdf online](https://compresspdfto200kb.online/merge-pdf)",
      },
      {
        q: "Is there a free way to mail merge PDF documents on Mac?",
        a: "Yes! After you mail merge pdf documents using Word or Pages, use our tool to [merge pdf online](https://compresspdfto200kb.online/merge-pdf) to combine those results into one file.",
      },
      {
        q: "What is the best way to merge PDF documents in Preview?",
        a: "While many ask how to merge pdf documents in preview, that method is manual. Our tool automates the process. [Combine pdf files](https://compresspdfto200kb.online/merge-pdf)",
      },
    ],
  },

  "/merge-pdf-windows": {
    content: `Need to combine PDFs in Windows? Unlike Mac, Windows does not have a native comprehensive PDF editor, so users often struggle with how to merge pdf files in windows. 

Whether it's for a government scheme or a corporate job application, reducing PDF complexity by merging files is a common requirement. Our tool simplifies this process. No more "File size limit exceeded" messages for multiple files. Just drag your document, and our browser engine will shrink it for you in seconds.`,
    steps: [
      {
        title: "Upload Files",
        desc: "Select the PDFs from your Windows storage.",
      },
      { title: "Order", desc: "Arrange them in the sequence you need." },
      {
        title: "Download",
        desc: "Save and upload to your destination portal.",
      },
    ],
    faqs: [
      {
        q: "How do I merge PDF documents Acrobat style on a work PC?",
        a: "If you can't install software, you can still merge pdf documents acrobat style by using our tool directly in your browser. [Merge pdf online](https://compresspdfto200kb.online/merge-pdf)",
      },
      {
        q: "Can I combine PDF files from my Dropbox on Windows?",
        a: "Yes, simply download your files and use our site to dropbox merge pdf files into one. [Combine pdf files](https://compresspdfto200kb.online/merge-pdf) safely with us.",
      },
      {
        q: "How to merge PDF files in Windows for free?",
        a: "Use our [merge pdf tool](https://compresspdfto200kb.online/merge-pdf) to combine files without any paid subscriptions.",
      },
    ],
  },

  "/merge-pdf-linux": {
    content: `The ultimate guide to Linux merge PDF methods. Linux users have the power of the terminal, but sometimes a GUI is more convenient. Whether you are on Ubuntu, Fedora, or Arch, our tool is 100% compatible.

If you are on a system where you can't install packages (like a server or a locked environment), the easiest way is to use our web-based tool. It provides a premium linux merge pdf experience without the complexity of command-line syntax.`,
    steps: [
      {
        title: "Select PDFs",
        desc: "Select files using your Linux file manager.",
      },
      { title: "Sort", desc: "Arrange the thumbnails in the desired order." },
      { title: "Generate", desc: "Create your merged document instantly." },
    ],
    faqs: [
      {
        q: "Is there a way to mail merge PDF documents on Linux?",
        a: "While Linux offers many scripts, it's often hard to mail merge pdf documents correctly. Use our [merge pdf tool](https://compresspdfto200kb.online/merge-pdf) to combine the results of your scripts easily.",
      },
      {
        q: "How to merge PDF files in Windows vs Linux?",
        a: "While the methods differ locally, our tool provides a unified way to merge pdf online regardless of the OS. [Combine pdf files](https://compresspdfto200kb.online/merge-pdf) seamlessly here.",
      },
      {
        q: "What is the fastest linux merge pdf command?",
        a: "While Ghostscript is fast, our browser tool is often quicker for one-off tasks. [Merge pdf online](https://compresspdfto200kb.online/merge-pdf)",
      },
    ],
  },

  "/flipkart-label-cropper": {
    intro: `Flipkart sellers ke liye sabse badi problem kya hai? Shipping label ka waste hona. Flipkart legal page pe label generate karta hai, lekin thermal printer (4x6 inch) ke liye use crop karna padta hai.
    
    Agar aap A4 sheet pe print karte hain, toh aadha paper waste hota hai. Hamara Flipkart Label Cropper tool specifically sellers ke liye banaya gaya hai. Ye smartly aapke PDF ko detect karta hai aur shipping label wale hisse ko crop karke thermal printer ready PDF deta hai.`,
    steps: [
      {
        title: "Upload Label PDF",
        desc: "Apna Flipkart shipping label PDF upload karein.",
      },
      {
        title: "Select Crop Mode",
        desc: "Choose correct preset: Thermal (4x6) ya A4 Half Page.",
      },
      {
        title: "Download & Print",
        desc: "Auto-cropped PDF download karein aur thermal printer se print nikalein.",
      },
      {
        title: "Save Paper",
        desc: "Isse aapka paper cost 50% tak bachega.",
      },
    ],
    faqs: [
      {
        q: "Kya ye tool free hai?",
        a: "Jee haan, ye tool bilkul free hai Flipkart sellers ke liye.",
      },
      {
        q: "Thermal Printer ke liye kaunsa size choose karein?",
        a: "Agar aapke paas 4x6 inch (100x150mm) ka thermal printer hai, toh 'Thermal Label' preset choose karein.",
      },
      {
        q: "Bulk crop kar sakte hain?",
        a: "Abhi ye tool ek file process karta hai, lekin agar aapke PDF mein multiple labels hain toh ye sabko same size pe crop karega.",
      },
      {
        q: "Mera data safe hai?",
        a: "Bilkul. Processing aapke browser mein hoti hai, koi bhi label hamare server pe upload nahi hota.",
      },
    ],
  },

  "/meesho-label-cropper": {
    intro: `Meesho sellers aksar pareshan rehte hain kyunki Meesho labels ka format thoda alag hota hai. Unhe thermal printer pe set karne ke liye manually crop karna padta hai.
    
    Hamara tool Meesho labels ko auto-detect karta hai aur unhe perfectly 4x6 ya 6x4 size mein resize karta hai. Chaahe aap TSC, Zebra, ya Xprinter use kar rahe ho, ye cropped PDF perfectly print hoga.`,
    steps: [
      {
        title: "Upload Meesho Label",
        desc: "Apna downloaded dispatch label select karein.",
      },
      {
        title: "Resize for Thermal",
        desc: "Presests mein se 'Thermal Label' select karein.",
      },
      {
        title: "Instant Download",
        desc: "Bina quality loss ke HD label download karein.",
      },
    ],
    faqs: [
      {
        q: "Meesho label crop kyu zaruri hai?",
        a: "Direct A4 print karne se paper waste hota hai aur barcode chhota dikhta hai. Cropping se label bada aur clear print hota hai.",
      },
      {
        q: "Kya ye 4x6 sticker roll pe chalega?",
        a: "Haan, hamara 'Thermal' preset specially 4x6 inch rolls ke liye designed hai.",
      },
      {
        q: "Quality kharab toh nahi hogi?",
        a: "Nahi, hum PDF vector data use karte hain, isliye barcode scan karne mein koi dikkat nahi aayegi.",
      },
    ],
  },
  "/ru/jpg-v-pdf": {
    intro: `Нужно превратить фотографии или картинки в PDF? Наш конвертер JPG в PDF — самый простой способ объединить изображения в один документ. Это часто требуется для загрузки справок, чеков или сертификатов на сайты, которые принимают только формат PDF.`,
    content: `### Безопасное превращение JPG в PDF
Загрузка личных фотографий или сканированных документов на сторонние серверы всегда связана с риском. 
Наш инструмент работает иначе — он конвертирует ваши файлы **прямо в браузере**. 

Это значит:
- **Ваши фото не уходят в сеть**: Всё происходит локально на вашем устройстве.
- **Мгновенный результат**: Нет очередей на обработку и ожидания загрузки.
- **Без регистрации**: Вам не нужно создавать аккаунт или оставлять почту.

### Как это работает
Вы выбираете одно или несколько изображений (JPG, PNG), и наш инструмент аккуратно упаковывает их в PDF файл. Вы можете быть уверены, что качество ваших фото останется высоким, а размер файла будет оптимальным для отправки по электронной почте или загрузки на порталы.`,
    steps: [
      {
        title: "Выберите изображения",
        desc: "Загрузите одно или несколько фото, которые нужно превратить в PDF.",
      },
      {
        title: "Настройка",
        desc: "Проверьте порядок изображений и их вид.",
      },
      {
        title: "Скачать PDF",
        desc: "Нажмите кнопку, чтобы получить готовый документ.",
      },
    ],
    faqs: [
      {
        q: "Можно ли объединить несколько фото в один PDF?",
        a: "Да, вы можете загрузить сразу несколько картинок, и они будут идти в PDF одна за другой по порядку.",
      },
      {
        q: "Это бесплатно?",
        a: "Да, инструмент полностью бесплатен и не ограничивает количество файлов.",
      },
      {
        q: "Поддерживаются ли другие форматы, кроме JPG?",
        a: "Да, вы также можете конвертировать изображения PNG и WebP.",
      },
      {
        q: "Безопасно ли загружать личные фото?",
        a: "Абсолютно. Ваши файлы обрабатываются локально в браузере и никогда не попадают на наш сервер.",
      },
    ],
  },
  "/ru/redaktirovat-pdf": {
    intro: `Вам нужно быстро подправить PDF файл? Наш онлайн-редактор позволяет добавлять текст, изображения и фигуры прямо в ваш документ без установки сложных программ. Это идеальное решение для заполнения анкет, добавления комментариев или вставки логотипа.`,
    content: `### Удобное редактирование PDF онлайн
Многие профессиональные редакторы стоят дорого и требуют долгой установки. Мы создали инструмент, который открывается за секунду и дает вам все базовые функции для работы с PDF.

**Что можно делать:**
- **Добавлять текст**: Заполняйте бланки и формы прямо на экране.
- **Вставлять изображения**: Добавляйте подписи или печати в документ.
- **Рисовать**: Выделяйте важные участки или рисуйте фигуры.

### Полная приватность ваших правок
Ваши документы содержат важную информацию, поэтому мы не храним ни байта ваших данных. Редактирование происходит в оперативной памяти вашего браузера. Как только вы закрываете вкладку, все следы документа исчезают. Это намного безопаснее, чем использовать облачные редакторы, которые хранят копии ваших файлов.`,
    steps: [
      {
        title: "Загрузите PDF",
        desc: "Выберите файл, который хотите отредактировать.",
      },
      {
        title: "Внесите изменения",
        desc: "Используйте панель инструментов, чтобы добавить текст или элементы.",
      },
      {
        title: "Сохраните результат",
        desc: "Скачайте отредактированный файл на свой ПК или телефон.",
      },
    ],
    faqs: [
      {
        q: "Изменится ли качество документа после редактирования?",
        a: "Нет, мы сохраняем оригинальное качество PDF, добавляя ваши правки верхним слоем.",
      },
      {
        q: "Можно ли удалить существующий текст?",
        a: "Наш онлайн-инструмент позволяет добавлять новые элементы. Чтобы 'удалить' текст, вы можете перекрыть его белым прямоугольником и написать сверху новый.",
      },
      {
        q: "Работает ли редактор на мобильных устройствах?",
        a: "Да, вы можете вносить простые правки прямо со своего смартфона через обычный браузер.",
      },
    ],
  },
  "/ru/razmer-pdf-200kb": {
    intro: `Нужно подогнать PDF под лимит 200 КБ? Наш инструмент «Размер PDF 200 КБ» создан специально для этого. Мы используем умные алгоритмы оптимизации, чтобы ваш файл весил ровно столько, сколько нужно для успешной загрузки.`,
    content: `### Идеально для Госуслуг и порталов вакансий
Многие сайты, такие как Госуслуги, сайты налоговой или порталы для поиска работы, имеют жесткий лимит на размер загружаемого PDF — обычно это 200 КБ. Если ваш скан или документ весит больше, система просто его не примет.

Наш сервис решает эту проблему без потери читаемости. Мы удаляем лишние данные из файла и оптимизируем изображения, чтобы текст оставался четким, а размер — правильным.

### Почему стоит выбрать наш инструмент:
- **Безопасность**: Ваши паспортные данные и справки не загружаются на сервер.
- **Скорость**: Обработка занимает всего пару секунд.
- **Бесплатно**: Никаких платных подписок или водяных знаков.`,
    steps: [
      {
        title: "Загрузите файл",
        desc: "Выберите PDF, размер которого нужно изменить.",
      },
      {
        title: "Оптимизация",
        desc: "Дождитесь окончания процесса подгонки под 200 КБ.",
      },
      {
        title: "Скачайте",
        desc: "Получите готовый файл для загрузки на нужный вам сайт.",
      },
    ],
    faqs: [
      {
        q: "Будет ли мой документ читаемым?",
        a: "Да, мы уделяем приоритетное внимание четкости текста, чтобы его могли прочитать проверяющие органы.",
      },
      {
        q: "Нужно ли скачивать приложение?",
        a: "Нет, всё работает прямо в вашем браузере на компьютере или смартфоне.",
      },
    ],
  },
  "/ru/flipkart-label-cropper": {
    intro: `Для продавцов на Flipkart есть одна большая проблема — экономия бумаги при печати этикеток. Обычно Flipkart генерирует этикетки на листе A4, что неудобно для термопринтеров. Наш инструмент помогает быстро обрезать лишнее и подготовить этикетку для печати на формате 4x6 дюймов.`,
    steps: [
      {
        title: "Загрузите PDF с этикетками",
        desc: "Выберите файл, скачанный из личного кабинета Flipkart.",
      },
      {
        title: "Обрежьте под размер",
        desc: "Наш алгоритм автоматически найдет границы этикетки.",
      },
      {
        title: "Печать",
        desc: "Скачайте готовый файл и отправьте на термопринтер.",
      },
    ],
    faqs: [
      {
        q: "Зачем обрезать этикетки?",
        a: "Это позволяет использовать стандартные термотрансферные ленты и экономить место на листе.",
      },
      {
        q: "Безопасно ли это для данных о заказах?",
        a: "Да, обработка идет в браузере, мы не видим ваших покупателей и заказов.",
      },
    ],
  },
  "/ru/meesho-label-cropper": {
    intro: `Работаете с Meesho? Наш инструмент поможет вам адаптировать стандартные этикетки под ваш принтер. Больше не нужно вручную резать бумагу — мы автоматически подгоняем размер этикеток Meesho под популярный формат 4х6 для термопечати.`,
    steps: [
      {
        title: "Загрузите файл Meesho",
        desc: "Добавьте PDF файл с вашими накладными.",
      },
      {
        title: "Оптимизация",
        desc: "Инструмент уберет пустые поля и отцентрирует этикетку.",
      },
      {
        title: "Готово к печати",
        desc: "Скачайте файл и распечатайте его в один клик.",
      },
    ],
    faqs: [
      {
        q: "Meesho label crop kyu zaruri hai?",
        a: "Direct A4 print karne se paper waste hota hai aur barcode chhota dikhta hai. Cropping se label bada aur clear print hota hai.",
      },
      {
        q: "Kya ye 4x6 sticker roll pe chalega?",
        a: "Haan, hamara 'Thermal' preset specially 4x6 inch rolls ke liye designed hai.",
      },
      {
        q: "Quality kharab toh nahi hogi?",
        a: "Nahi, hum PDF vector data use karte hain, isliye barcode scan karne mein koi dikkat nahi aayegi.",
      },
    ],
  },
  "/es/dividir-pdf-en-varias-partes-online": {
    intro:
      "¿Te suena la escena? Estás intentando subir la declaración de la renta o los papeles del paro y el portal te suelta: *'El archivo supera el tamaño permitido'*. No pierdas más tiempo. Aquí puedes **dividir tu PDF en varias partes online** ahora mismo y terminar con el trámite de una vez.",
    content: `
### ¿Por qué tienes que andar dividiendo tus PDF?

Pues básicamente porque los portales oficiales (sí, Hacienda, el SEPE o la Seguridad Social) suelen ser muy tiquismiquis. Te piden escaneos perfectos, pero luego te limitan el tamaño por archivo. 

Si has buscado cómo **dividir pdf en varias partes online**, ya habrás visto cientos de webs que te bombardean a publicidad. Aquí hemos quitado todo el ruido para que vayas al grano.

#### Tu privacidad no es negociable
Lo habitual es que, al usar una web para cortar un PDF, tu archivo se suba a su "nube". Pero si es una nómina o tu DNI, ¿quién sabe quién se queda con una copia?

Aquí el proceso es distinto. Todo ocurre **dentro de tu navegador**. Tus papeles no salen de tu casa. Es como usar un programa en tu PC, pero sin instalaciones raras. Rápido, limpio y blindado.

---

### Cómo separar un PDF en partes sin volverte loco

Hemos simplificado el proceso al máximo. Tres pasos y fuera:

1.  **Sube tu PDF**: Arrástralo o búscalo en tus carpetas. Se carga al instante porque no tiene que viajar por la red.
2.  **Elige las páginas**: Verás las miniaturas de tu archivo. Pincha en las que necesites o pon el rango (ideal si solo quieres de la página 2 a la 5).
3.  **Descárgalo**: Dale al botón y, antes de que parpadees, tendrás los archivos listos para subirlos a donde necesites.

---

### Errores habituales al subir PDFs (y cómo evitarlos)

Si el portal te sigue dando problemas, echa un ojo a estos fallos que todos cometemos alguna vez:

- **Archivo demasiado pesado**: Aunque lo dividas, si una sola página pesa mucho, te la rechazarán. Pásala por nuestro compresor si te ocurre.
- **Nombres de archivo prohibidos**: No uses tildes, ñ ni espacios en el nombre del archivo. Pon algo sencillo como \`certificado-parte-1.pdf\`.
- **Formato incorrecto**: Asegúrate de que el portal pide PDF y no JPG. Si ves que piden fotos, también puedes convertirlo aquí mismo.
- **PDF bloqueado**: Si el documento tiene contraseña, el portal no podrá leerlo. Tendrás que quitarle la protección antes de subirlo.

---

### Lo que nos diferencia de verdad

No vamos a venderte humo. Lo que te damos es una herramienta útil y honesta:

- **Gratis de verdad**: Sin correos, sin tarjetas y sin marcas de agua que te estropeen el papel oficial.
- **En cualquier dispositivo**: Da igual si es el Mac de casa o un Android barato en la oficina. Funciona perfecto.
- **Sin esperas**: Al usar la potencia de tu propio móvil o PC, no hay colas de espera. Es inmediato.

---

### ¿Cuándo te va a salvar la vida este divisor?

#### Trámites oficiales en España
Desde presentar una beca hasta los papeles de la jubilación. Si el PDF es un bloque de 20 páginas y solo te piden la tercera, aquí la sacas en un segundo.

#### Oposiciones y empleo
No te arriesgues a que te rechacen por un error técnico. Separa tus méritos en archivos individuales y asegúrate de que cada uno cumple con lo que pide la convocatoria.

#### Estudiantes y el bendito Erasmus
Si el sistema de la facultad se queda colgado al subir tus notas, la solución suele ser cortar el PDF y subirlo por trozos pequeños. Mano de santo.
`,
    steps: [
      {
        title: "Sube tu PDF",
        desc: "Selecciona el archivo que quieres dividir. Se carga al instante.",
      },
      {
        title: "Elige las páginas",
        desc: "Pincha en las miniaturas o escribe el rango de páginas que necesitas.",
      },
      {
        title: "Descarga",
        desc: "Pulsa el botón y guarda tus archivos divididos listos para usar.",
      },
    ],
    faqs: [
      {
        q: "¿De verdad es 100% privado?",
        a: "Sí. El archivo entra en tu memoria RAM, se divide y sale a tus descargas. Nosotros ni lo vemos ni podemos guardarlo aunque quisiéramos.",
      },
      {
        q: "¿Se pierde calidad al separar las páginas?",
        a: "Para nada. El texto sigue siendo nítido y las fotos mantienen su resolución original. Solo reorganizamos el archivo.",
      },
      {
        q: "¿Puedo dividir PDFs muy largos?",
        a: "Sin problema. La herramienta aguanta archivos de cientos de páginas. Eso sí, ten un poco de paciencia si vas con un móvil con poca memoria.",
      },
      {
        q: "¿Hay algún límite diario?",
        a: "Ninguno. Puedes procesar 1 o 100 documentos. No hay cuentas premium ni límites que te frenen el trabajo.",
      },
    ],
  },
};


