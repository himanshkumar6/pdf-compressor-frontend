import fs from "fs";
import path from "path";

const SITE = "https://compresspdfto200kb.online";
const DIST_DIR = path.resolve("dist");

// ✅ GA4 Measurement ID
const GA_ID = "G-FCZXPJB41V";

/** Canonical URL: https only, trailing slash only for home (matches sitemap). */
function getCanonicalUrl(route) {
  const base = SITE.replace(/\/$/, "");
  const pathStr = (route || "/").replace(/\/+$/, "") || "/";
  const url = pathStr === "/" ? `${base}/` : `${base}${pathStr}`;
  return url.replace(/^http:/, "https:");
}

// ✅ ROUTES (must match sitemap canonical paths)
const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
  "/disclaimer",
  "/sitemap",
  "/tools",
  "/blog",

  "/blog/how-to-compress-a-pdf-on-mac",
  "/blog/govt-form-pdf-reject-fix-compress-200kb",
  "/blog/ssc-form-pdf-size-limit-200kb",
  "/blog/upsc-documents-upload-guide-pdf-compress",
  "/blog/job-portal-resume-upload-problem-pdf-size-reduce",
  "/blog/passport-portal-200kb-limit-pdf-upload-error-fix",
  "/blog/mobile-se-pdf-compress-kaise-kare-without-app",
  "/blog/visa-kyc-pdf-upload-fail-size-reduce-solution",
  "/blog/scanned-pdf-heavy-size-reduce-complete-guide",
  "/blog/scholarship-form-pdf-upload-guide-200kb-document",
  "/blog/email-me-pdf-attach-nahi-ho-rahi-size-reduce",

  "/compress-pdf",
  "/compress-pdf-to-50kb",
  "/compress-pdf-to-100kb",
  "/compress-pdf-to-150kb",
  "/compress-pdf-to-200kb",
  "/compress-pdf-to-500kb",
  "/compress-pdf-to-1mb",
  "/reduce-pdf-size-to-500kb",
  "/scanned-pdf-compressor",
  "/scanned-pdf-to-200kb",
  "/remove-metadata-from-pdf",
];

// ✅ Basic SEO
const SEO = {
  "/": {
    title: "Compress PDF to 200KB Online | Free PDF Compressor Tool",
    description:
      "Compress PDF files to 200KB online using a free PDF compressor tool. Upload PDF, reduce size without losing readability, and download instantly.",
  },
  "/about": {
    title: "About Us - CompressPDFto200KB.online",
    description:
      "Learn more about CompressPDFto200KB.online — a privacy-focused PDF compression tool built for govt portals, job forms and online uploads.",
  },
  "/contact": {
    title: "Contact Us - CompressPDFto200KB.online",
    description:
      "Contact CompressPDFto200KB.online for feedback, support, and suggestions related to PDF compression and document upload issues.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - CompressPDFto200KB.online",
    description:
      "Read our privacy policy. Your PDFs are processed locally in your browser and never uploaded to our servers.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions - CompressPDFto200KB.online",
    description:
      "Read the terms & conditions for using CompressPDFto200KB.online PDF tools and services.",
  },
  "/disclaimer": {
    title: "Disclaimer - CompressPDFto200KB.online",
    description:
      "Read disclaimer for CompressPDFto200KB.online. We provide informational tools and guides without portal-specific guarantees.",
  },
  "/blog": {
    title: "CompressPDF Blog - Fix PDF Upload Errors & Reduce PDF Size",
    description:
      "Guides to compress PDF to 200KB, fix upload errors on SSC/UPSC/job portals, passport/visa document size issues and more.",
  },
  "/sitemap": {
    title: "Sitemap - CompressPDFto200KB.online",
    description:
      "HTML sitemap of CompressPDFto200KB.online. Find all PDF tools and blog posts in one place.",
  },
  "/tools": {
    title: "PDF Tools – Compress, Reduce Size, Remove Metadata | Free",
    description:
      "All PDF tools in one place: compress PDF, compress to 200KB or 100KB, scanned PDF compressor, remove metadata. Free, private, browser-based.",
  },
};

// ✅ Blog SEO (fill as much as you want)
const BLOG_SEO = {
  "how-to-compress-a-pdf-on-mac": {
    title: "How to Compress a PDF on Mac (Without Losing Quality)",
    description:
      "Learn how to compress PDF on Mac using Preview and free methods. Reduce PDF size without blurry text.",
  },
  "govt-form-pdf-reject-fix-compress-200kb": {
    title: "Govt Form PDF Rejected? Fix Upload Issue (Compress to 200KB)",
    description:
      "Fix PDF upload rejected error on government portals due to large file size. Compress PDF to 200KB quickly.",
  },
  "ssc-form-pdf-size-limit-200kb": {
    title: "SSC Form PDF Size Limit 200KB? Compress PDF to 200KB (Fix)",
    description:
      "SSC form PDF upload error due to size limit? Learn how to compress PDF to 200KB on mobile/PC.",
  },
  "upsc-documents-upload-guide-pdf-compress": {
    title: "UPSC Document Upload PDF Size Limit? Compress PDF (Guide)",
    description:
      "UPSC portal document upload size issue fix. Compress PDF to required limit without losing readability.",
  },
  "job-portal-resume-upload-problem-pdf-size-reduce": {
    title: "Job Portal Resume Upload Problem? Reduce PDF Size (Fix)",
    description:
      "Resume PDF too large? Fix job portal upload issue by reducing PDF size without breaking formatting.",
  },
  "passport-portal-200kb-limit-pdf-upload-error-fix": {
    title: "Passport Portal PDF Size Limit 200KB? Fix Upload Error",
    description:
      "Passport portal PDF upload issue due to size limit? Compress PDF to 200KB and upload successfully.",
  },
  "mobile-se-pdf-compress-kaise-kare-without-app": {
    title: "Mobile Se PDF Compress Kaise Kare? (Without App)",
    description:
      "Mobile se PDF compress karne ka easy method without app. Browser se PDF ko 200KB tak compress karo.",
  },
  "visa-kyc-pdf-upload-fail-size-reduce-solution": {
    title: "Visa / KYC PDF Upload Failed? Reduce Size (Solution)",
    description:
      "Visa/KYC portal PDF upload fail due to large file? Compress PDF and fix size limit issue quickly.",
  },
  "scanned-pdf-heavy-size-reduce-complete-guide": {
    title: "Scanned PDF Too Large? Reduce Size (Complete Guide)",
    description:
      "Scanned PDF file size heavy? Learn how to compress scanned PDF while keeping text readable.",
  },
  "scholarship-form-pdf-upload-guide-200kb-document": {
    title: "Scholarship Form PDF Upload Guide (200KB Document Fix)",
    description:
      "Scholarship portal PDF upload error due to size limit? Compress PDF to 200KB and upload successfully.",
  },
  "email-me-pdf-attach-nahi-ho-rahi-size-reduce": {
    title: "Email Me PDF Attach Nahi Ho Rahi? Reduce Size (Fix)",
    description:
      "Email attachment PDF too large? Reduce PDF size and attach easily without quality loss.",
  },
};

// ✅ Utilities
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getMeta(route) {
  if (SEO[route]) return SEO[route];

  if (route.startsWith("/blog/")) {
    const slug = route.replace("/blog/", "");
    return (
      BLOG_SEO[slug] || {
        title: slug.replace(/-/g, " ").toUpperCase(),
        description:
          "Read the complete guide to compress PDF size and fix upload errors.",
      }
    );
  }

  return {
    title: "CompressPDFto200KB.online",
    description:
      "Free PDF compression tools to reduce PDF size for government forms, job portals and uploads.",
  };
}

// ✅ Auto detect built assets from dist/assets
function getAssets() {
  const assetsDir = path.join(DIST_DIR, "assets");

  if (!fs.existsSync(assetsDir)) {
    throw new Error("dist/assets not found. Run vite build first.");
  }

  const files = fs.readdirSync(assetsDir);

  const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const cssFile = files.find((f) => f.startsWith("index-") && f.endsWith(".css"));

  if (!jsFile) throw new Error("index-*.js not found in dist/assets");
  if (!cssFile) throw new Error("index-*.css not found in dist/assets");

  return {
    js: `/assets/${jsFile}`,
    css: `/assets/${cssFile}`,
  };
}

// ✅ Google Tag HTML (exact same style as your tag)
function buildGoogleTag() {
  return `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', '${GA_ID}');
</script>
  `.trim();
}

/** Paths to include in crawlable internal links (plain <a href>). All ROUTES so every page gets incoming links. */
const CRAWLABLE_LINK_PATHS = ROUTES;

/** Offscreen CSS: crawlable by bots, not display:none/visibility:hidden. */
const OFFSCREEN_STYLE =
  "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;";

/** SEO content block: visible h1, 250-400 words (tools) or 80-150 (non-tools), steps, FAQ. */
const SEO_CONTENT = {
  "/compress-pdf-to-200kb": {
    h1: "Compress PDF to 200KB Online Free",
    content: `SSC form, passport portal, scholarship — jahan bhi 200KB limit hai, yahan se fix karo. Govt portals pe PDF upload karte waqt sabse common error: "File size exceeds 200KB". Bahut students ko ye problem aati hai. Humara tool specifically isi ke liye hai — PDF ko 200KB ke andar laata hai bina readability kharab kiye. Passport application, SSC CGL form, scholarship documents — sab ke liye use kar sakte ho. Mobile pe bhi kaam karega, koi app nahi chahiye. Browser open karo, PDF select karo, compress karo, download karo. 100% secure. Aapka PDF kisi server pe nahi jata. Sab aapke device pe hi process hota hai. Agar PDF scanned hai toh Scanned PDF to 200KB tool use karo. Normal PDF ke liye yahi tool sahi hai. Form reject hone se bach jayega.`,
    steps: [
      { title: "PDF select karo", desc: "Upar click karke ya drag-drop se PDF choose karo." },
      { title: "Compress to 200KB pe click karo", desc: "Tool 200KB target pe optimize karega." },
      { title: "Download karo aur portal pe upload karo", desc: "Ready PDF download karke form pe upload kar do." },
    ],
    faqs: [
      { q: "SSC form ke liye sahi hai?", a: "Haan, SSC portal pe 200KB limit hoti hai — is tool se perfect fit ho jayega." },
      { q: "Passport application mein use kar sakte hain?", a: "Haan, passport portal bhi 200KB maangta hai. Ye tool wahi ke liye hai." },
      { q: "Quality kaise rahegi?", a: "Optimized compression use karte hain. Text clear rahega, photos bhi readable." },
      { q: "Mobile se kaise use karen?", a: "Browser open karo, is page pe aao, PDF select karo. Koi app install nahi karni." },
      { q: "Mera data safe hai?", a: "Haan. PDF aapke device pe hi process hota hai, kahi upload nahi hota." },
    ],
  },
  "/compress-pdf-to-100kb": {
    h1: "Compress PDF to 100KB Online Free",
    content: `Kya form pe 100KB limit hai? Email attachment size chhota chahiye? Yahi tool use karo. 100KB ka limit bohot strict hota hai — kuch portals, forms aur email systems yahi maangte hain. Hum tumhari PDF ko 100KB ke andar laane mein madad karte hain, bina quality totally kharab kiye. Students jo scholarship ya short forms bhar rahe hain, unke liye ye tool helpful hai. 100% browser-based — koi upload nahi, koi signup nahi. Trust pe rakho, tumhara data safe hai. Agar 200KB limit hai toh Compress to 200KB tool use karo. Kuch scholarship forms strict 100KB maangte hain. Is tool se tum PDF ko us limit ke andar laa sakte ho.`,
    steps: [
      { title: "PDF upload karo", desc: "Select PDF karke apna file choose karo." },
      { title: "100KB target select karo", desc: "Tool automatically 100KB target pe compress karega." },
      { title: "Process karo aur download karo", desc: "Compress button dabao, phir download kar lo." },
    ],
    faqs: [
      { q: "100KB mein sab PDF fit ho jayega?", a: "Zyada bade PDF mein thoda quality compromise ho sakta hai. Text documents easily fit ho jate hain." },
      { q: "Email attachment ke liye sahi hai?", a: "Haan, jahan 100KB limit hai wahan perfect hai." },
      { q: "Scanned PDF bhi compress ho sakta hai?", a: "Haan, par scanned PDF ke liye humara Scanned PDF tool zyada better hai." },
      { q: "Free hai?", a: "Haan, bilkul free. Koi charge nahi." },
      { q: "Mobile se use kar sakte hain?", a: "Haan, browser se mobile pe bhi kaam karega." },
    ],
  },
  "/compress-pdf": {
    h1: "Compress PDF Online Free",
    content: `Kya aapka PDF bahut bada hai? SSC form, scholarship, ya passport portal pe upload karte waqt "file too large" error aata hai? Ye tool bilkul free hai aur 100% browser mein chalta hai. Aapka PDF kahi upload nahi hota — sab kuch aapke phone ya computer pe hi process hota hai. SSC, UPSC, scholarship forms, passport application — sab jagah PDF size limit hoti hai. Koi app install karne ki zarurat nahi, sirf browser open karo aur PDF select karo. Hamara tool secure hai. Students ke liye perfect. Form submit karte waqt tension nahi lena padega. Mobile pe bhi same process — select, compress, download. Simple.`,
    steps: [
      { title: "PDF select karo", desc: "Upar wale area mein click karke apna PDF choose karo, ya drag-and-drop karo." },
      { title: "Compress start karo", desc: "Compress button dabao. Thodi der mein processing ho jayegi." },
      { title: "Download karo", desc: "Compressed PDF ready hone par download kar lo." },
    ],
    faqs: [
      { q: "PDF compress karne se quality kharab toh nahi hogi?", a: "Nahi. Hum optimized compression use karte hain — text readable rahega." },
      { q: "Mobile pe kaam karega?", a: "Haan, bilkul. Android aur iPhone dono pe browser se use kar sakte ho." },
      { q: "Mera PDF kisi server pe upload toh nahi hoga?", a: "Nahi. Sab processing aapke device pe hi hoti hai." },
      { q: "Kitna bada PDF upload kar sakte hain?", a: "Abhi 5MB tak support hai." },
      { q: "Yeh tool free hai?", a: "Haan, completely free. Koi signup, watermark ya hidden charge nahi hai." },
    ],
  },
  "/compress-pdf-to-50kb": {
    h1: "Compress PDF to 50KB Online Free",
    content: `50KB PDF size limit hai? SSC form, scholarship ya email attachment ke liye strict limit hai? Ye tool tumhare liye hai. 50KB ka limit bahut tight hota hai — bahut kam portals aur forms isse maangte hain. Lekin kuch competitive exams aur govt forms mein yahi limit hoti hai. Humara tool PDF ko 50KB ke aas-paas laane ki koshish karta hai. Students jo strict upload limits face kar rahe hain — scholarship forms, admission portals — unke liye ye perfect hai. Quality thodi adjust hogi par document readable rahega. Mobile pe bhi kaam karega. 100% browser mein chalta hai. Koi server upload nahi. Trust karo, tumhara data safe hai.`,
    steps: [
      { title: "PDF select karo", desc: "Apna heavy PDF file choose karo." },
      { title: "50KB target pe compress karo", desc: "Tool 50KB ke around optimize karega." },
      { title: "Download aur upload karo", desc: "Compressed file download karke portal pe upload karo." },
    ],
    faqs: [
      { q: "50KB mein sab PDF fit ho jayega?", a: "Bahut bade PDFs mein quality compromise ho sakta hai. Text-only docs easily fit ho jate hain." },
      { q: "Kaunse portals 50KB maangte hain?", a: "Kuch scholarship aur competitive exam forms strict 50KB limit rakhte hain." },
      { q: "Quality kharab hogi?", a: "Strict limit hai toh thodi quality adjust hogi, par readable rahega." },
      { q: "Mobile se kaam karega?", a: "Haan, browser se mobile pe bhi use kar sakte ho." },
      { q: "Free hai?", a: "Haan, completely free. No signup required." },
      { q: "Data safe hai?", a: "Haan. Sab aapke device pe process hota hai." },
    ],
  },
  "/compress-pdf-to-150kb": {
    h1: "Compress PDF to 150KB Online Free",
    content: `150KB PDF limit hai? SSC form, UPSC portal, passport application ya scholarship ke liye document compress karna hai? Ye tool perfect hai. 150KB ka limit 100KB aur 200KB ke beech hai — kai govt portals aur forms isme fit ho jaate hain. Humara tool PDF ko 150KB ke aas-paas optimize karta hai bina text quality kharab kiye. SSC CGL, CHSL, passport application, scholarship forms — sab ke liye use kar sakte ho. Mobile pe bhi kaam karega. Browser open karo, PDF select karo, compress karo, download karo. 100% secure. Tumhara PDF kisi server pe nahi jata. Students ke liye trusted tool. Form reject hone se bach jayega.`,
    steps: [
      { title: "PDF upload karo", desc: "Apna document select karo." },
      { title: "150KB target pe compress karo", desc: "Tool 150KB ke andar optimize karega." },
      { title: "Download aur upload karo", desc: "Ready PDF portal pe upload kar do." },
    ],
    faqs: [
      { q: "SSC form ke liye sahi hai?", a: "Haan, bahut se SSC forms 150KB-200KB limit rakhte hain." },
      { q: "Passport portal pe use kar sakte hain?", a: "Haan, passport document uploads ke liye perfect hai." },
      { q: "Quality kaise rahegi?", a: "Optimized compression use karte hain. Text clear rahega." },
      { q: "Mobile se use kar sakte hain?", a: "Haan, browser se mobile pe bhi kaam karega." },
      { q: "Mera data safe hai?", a: "Haan. PDF aapke device pe hi process hota hai." },
      { q: "Free hai?", a: "Haan, bilkul free. No signup." },
    ],
  },
  "/compress-pdf-to-500kb": {
    h1: "Compress PDF to 500KB Online Free",
    content: `500KB PDF size limit hai? Email attachment ya job portal ke liye document compress karna hai? Ye tool tumhare kaam ka hai. 500KB ka limit medium-sized PDFs ke liye perfect hai. Job portals, email attachments, company forms — sab jagah 500KB limit common hai. Is tool se tum PDF ko 500KB ke andar laa sakte ho. Naukri.com, LinkedIn, company career pages — sab pe resume upload karte waqt 500KB-1MB limit hoti hai. Humara tool quality maintain karte hue size reduce karta hai. 100% browser mein chalta hai. Safe, free, koi upload nahi. Mobile pe bhi kaam karega. Email mein PDF attach karte waqt bhi useful hai.`,
    steps: [
      { title: "PDF select karo", desc: "Heavy PDF file choose karo." },
      { title: "500KB target pe compress karo", desc: "Tool 500KB ke andar optimize karega." },
      { title: "Download aur share karo", desc: "Compressed PDF download karke email ya portal pe use karo." },
    ],
    faqs: [
      { q: "Job portal ke liye sahi hai?", a: "Haan, Naukri, LinkedIn jaise portals pe 500KB limit common hai." },
      { q: "Email attachment ke liye?", a: "Haan, email mein PDF attach karte waqt 500KB perfect size hai." },
      { q: "Resume compress ho jayega?", a: "Haan, resume PDFs easily 500KB ke andar fit ho jate hain." },
      { q: "Quality kharab hogi?", a: "Nahi. 500KB mein quality theek rahegi." },
      { q: "Mobile se kaam karega?", a: "Haan, browser se mobile pe bhi use kar sakte ho." },
      { q: "Free hai?", a: "Haan, completely free. No signup required." },
    ],
  },
  "/compress-pdf-to-1mb": {
    h1: "Compress PDF to 1MB Online Free",
    content: `1MB PDF size limit hai? Large document compress karna hai? Ye tool tumhare liye hai. 1MB ka limit large PDFs ke liye reasonable hai. Multi-page documents, detailed forms, heavy marksheets — sab 1MB mein fit ho sakte hain. Job applications, company portals, email attachments — sab jagah 1MB limit acceptable hai. Humara tool large PDFs ko 1MB ke andar optimize karta hai. Quality maintain hoti hai, sirf unnecessary data remove hota hai. 100% browser mein chalta hai. Koi server upload nahi. Safe aur free. Mobile pe bhi kaam karega.`,
    steps: [
      { title: "PDF select karo", desc: "Large PDF file choose karo." },
      { title: "1MB target pe compress karo", desc: "Tool 1MB ke andar optimize karega." },
      { title: "Download aur use karo", desc: "Compressed PDF download karke portal pe upload karo." },
    ],
    faqs: [
      { q: "Kitna bada PDF 1MB mein fit hoga?", a: "Multi-page documents, heavy marksheets easily 1MB mein fit ho jate hain." },
      { q: "Email ke liye sahi hai?", a: "Haan, most email services 5-10MB attachment allow karti hain, 1MB easily chal jayega." },
      { q: "Job application ke liye?", a: "Haan, company portals pe 1MB limit common hai." },
      { q: "Quality kaise rahegi?", a: "1MB mein quality achhi rahegi. Large limit hai toh compression light hoga." },
      { q: "Mobile se use kar sakte hain?", a: "Haan, browser se mobile pe bhi kaam karega." },
      { q: "Free hai?", a: "Haan, bilkul free. No signup." },
    ],
  },
  "/reduce-pdf-size-to-500kb": {
    h1: "Reduce PDF Size to 500KB Online Free",
    content: `PDF size reduce karke 500KB karna hai? Email ya job portal ke liye document chhota karna hai? Ye tool best hai. PDF size reduce karna common requirement hai. Job portals pe resume upload, email mein document attach, company forms — sab jagah file size limit hoti hai. 500KB medium-sized limit hai jo zyadatar jagah accept hoti hai. Is tool se tum PDF ka size reduce karke 500KB ke andar laa sakte ho. Text clear rahega, formatting same rahegi. Sirf unnecessary data remove hoga. Naukri.com, LinkedIn, Internshala — sab job portals pe resume upload ke liye useful. 100% browser mein chalta hai. Safe aur free.`,
    steps: [
      { title: "PDF select karo", desc: "Jis PDF ka size reduce karna hai use choose karo." },
      { title: "500KB target pe reduce karo", desc: "Tool PDF size 500KB ke andar le aayega." },
      { title: "Download aur use karo", desc: "Reduced size PDF download karke email ya portal pe upload karo." },
    ],
    faqs: [
      { q: "Reduce aur compress mein kya farak hai?", a: "Dono same kaam karte hain — file size kam karna. Reduce term common hai." },
      { q: "Resume ke liye best hai?", a: "Haan, job portal pe resume upload ke liye 500KB perfect size hai." },
      { q: "Email attachment ke liye?", a: "Haan, 500KB file easily email mein attach ho jati hai." },
      { q: "Quality kam hogi?", a: "Nahi, 500KB mein quality theek rahegi. Text readable rahega." },
      { q: "Mobile pe kaam karega?", a: "Haan, browser se mobile pe bhi use kar sakte ho." },
      { q: "Free hai?", a: "Haan, completely free. No signup required." },
    ],
  },
  "/scanned-pdf-compressor": {
    h1: "Scanned PDF Compressor Online",
    content: `Scanned documents — marksheet, certificate, ID proof — inka size kabhi bahut bada ho jata hai. Scan karte waqt high resolution hoti hai, isliye file heavy ban jati hai. Form upload karte waqt problem aati hai. Is tool se tum scanned PDF ka size reduce kar sakte ho, bina text blur kiye. Students jo apni marksheet, TC ya certificate scan karke upload karte hain, unke liye ye tool helpful hai. Normal PDF compressor se alag — yahan scanned images pe better optimization hoti hai. Agar portal pe 200KB strict limit hai toh Scanned PDF to 200KB tool use karo. Browser mein hi chalta hai — secure, free, no upload. Marksheet, TC, certificate — scan karte waqt resolution high hoti hai. Is tool se size reduce karo, text blur nahi hoga.`,
    steps: [
      { title: "Scanned PDF select karo", desc: "Apna scanned document (marksheet, certificate, etc.) choose karo." },
      { title: "Compress start karo", desc: "Button dabao. Tool scan ko optimize karega." },
      { title: "Download karo", desc: "Compressed scanned PDF download kar lo." },
    ],
    faqs: [
      { q: "Scanned PDF aur normal PDF mein kya farak hai?", a: "Scanned PDF image-based hota hai. Is tool pe image optimization better hai." },
      { q: "Marksheet scan compress ho jayega?", a: "Haan, marksheet, certificate, TC — sab scanned docs ka size reduce ho sakta hai." },
      { q: "Text blur toh nahi hoga?", a: "Nahi. Readable rahega." },
      { q: "200KB limit wale portal ke liye?", a: "Haan, par agar strict 200KB chahiye toh Scanned PDF to 200KB tool use karo." },
      { q: "Free hai?", a: "Haan, completely free. No signup." },
    ],
  },
  "/scanned-pdf-to-200kb": {
    h1: "Scanned PDF to 200KB Online",
    content: `Scanned document hai aur 200KB limit hai? Yahi solution hai. Passport, scholarship, SSC — kabhi kabhi scanned PDF chahiye hota hai aur size 200KB ke andar hona chahiye. Is tool se tum scanned PDF ko specifically 200KB ke andar laa sakte ho. Marksheet, certificate, ID proof — jo bhi scan kiya hai, is tool pe daalo. Text readable rahega, bas file size target pe aajayega. Students ke liye bohot useful — form reject hone se bach jayega. 100% browser-based. Safe, free, koi upload nahi. Agar normal (non-scanned) PDF hai toh Compress PDF to 200KB tool use karo. Scanned docs ke liye yahi tool best hai. Passport portal, scholarship form, SSC — scanned document maangte hain aur 200KB limit bhi hoti hai. Mobile pe bhi kaam karega. Data safe rahega.`,
    steps: [
      { title: "Scanned PDF choose karo", desc: "Apna scanned document select karo." },
      { title: "200KB target pe compress karo", desc: "Tool 200KB ke andar optimize karega." },
      { title: "Download karo aur upload karo", desc: "Ready file portal pe upload kar do." },
    ],
    faqs: [
      { q: "Kis type ke scanned PDF ke liye hai?", a: "Marksheet, certificate, ID proof, TC — koi bhi scanned document." },
      { q: "200KB ke andar guarantee?", a: "Tool 200KB target pe optimize karta hai." },
      { q: "Passport document ke liye?", a: "Haan, passport portal pe scanned docs upload karte waqt use kar sakte ho." },
      { q: "Mobile pe kaam karega?", a: "Haan, browser se mobile pe bhi use kar sakte ho." },
      { q: "Data safe hai?", a: "Haan. Sab aapke device pe process hota hai." },
    ],
  },
  "/remove-metadata-from-pdf": {
    h1: "Remove Metadata from PDF Online",
    content: `PDF mein hidden info hoti hai — author name, creation date, software name. Job portal pe resume upload karte waqt, scholarship form ya govt form pe — kuch portals metadata check karte hain. Agar tum chahte ho ki tumhara naam, date ya koi aur info PDF se hat jaye, toh ye tool use karo. Students jo privacy chahte hain, jo resume clean karke upload karna chahte hain — unke liye perfect. PDF ka actual content — text, images — same rahega. Sirf hidden properties remove hongi. 100% browser mein chalta hai. PDF kahi upload nahi hota. Safe aur free. Job portal pe resume bhejte waqt metadata remove karna privacy ke liye accha hai. Agar tum author name, creation date ya software info nahi dikhana chahte, toh pehle metadata remove kar lo. Sirf hidden info clean hogi.`,
    steps: [
      { title: "PDF select karo", desc: "Jis PDF se metadata remove karni hai, use choose karo." },
      { title: "Remove Metadata pe click karo", desc: "Button dabao. Hidden info clean ho jayegi." },
      { title: "Clean PDF download karo", desc: "Metadata-free PDF download kar lo." },
    ],
    faqs: [
      { q: "Metadata kya hoti hai?", a: "Author name, creator software, creation date — ye sab hidden properties metadata hain." },
      { q: "PDF ka content change hoga?", a: "Nahi. Text, images, layout sab same rahega. Sirf hidden info remove hogi." },
      { q: "Resume upload ke liye sahi hai?", a: "Haan. Job portal pe clean resume upload karne ke liye metadata remove karna helpful hai." },
      { q: "Mera PDF safe hai?", a: "Haan. Processing aapke browser mein hi hoti hai." },
      { q: "Free hai?", a: "Haan, bilkul free. No signup." },
    ],
  },
  "/": {
    h1: "Compress PDF to 200KB Online Free",
    content: `Compress PDF to 200KB online for free. Reduce PDF size instantly without losing quality. Best for SSC, UPSC, passport, scholarship and government portal uploads. Our tool runs 100% in your browser — no uploads, no signup. Students use it for form submissions. Secure and private. Try our compress PDF tool above.`,
    steps: [
      { title: "Select PDF", desc: "Click or drag-and-drop your PDF file." },
      { title: "Compress", desc: "Click compress and wait a few seconds." },
      { title: "Download", desc: "Download your compressed PDF ready for upload." },
    ],
    faqs: [
      { q: "Is it free?", a: "Yes, 100% free. No signup or watermark." },
      { q: "Is my PDF uploaded?", a: "No. Processing happens in your browser only." },
      { q: "Works on mobile?", a: "Yes, works on Android and iPhone browsers." },
      { q: "Best for which portals?", a: "SSC, passport, scholarship, job portals with 200KB limit." },
      { q: "Quality preserved?", a: "Yes. We use optimized compression to keep text readable." },
    ],
  },
  "/about": {
    h1: "About CompressPDF",
    content: `CompressPDF is a privacy-focused PDF compression tool built for government portals, job forms and online uploads. We process your PDF locally in your browser — files never leave your device. Students use our tools for SSC, UPSC, scholarship and passport applications. All tools are free, fast and secure. No signup required.`,
    steps: [],
    faqs: [
      { q: "Who runs CompressPDF?", a: "A team focused on helping users meet PDF size limits for forms and portals." },
      { q: "Is it safe?", a: "Yes. 100% client-side processing. No server uploads." },
      { q: "Free to use?", a: "Yes, completely free." },
    ],
  },
  "/contact": {
    h1: "Contact Us",
    content: `Contact CompressPDF for feedback, support and suggestions related to PDF compression and document upload issues. We help with SSC form PDF size limits, passport uploads, scholarship documents and more. Reach us via the form or email.`,
    steps: [],
    faqs: [
      { q: "How to contact?", a: "Use the contact form or email provided on this page." },
      { q: "Response time?", a: "We aim to respond within 24-48 hours." },
    ],
  },
  "/privacy-policy": {
    h1: "Privacy Policy",
    content: `Our privacy policy explains how CompressPDF handles your data. PDF compression runs 100% in your browser. We do not upload, store or access your files. Logs may include basic visit data. Cookies are used for analytics. Your documents stay on your device.`,
    steps: [],
    faqs: [
      { q: "Is my PDF uploaded?", a: "No. Processing is client-side only." },
      { q: "What data do you collect?", a: "Basic analytics. No document content." },
    ],
  },
  "/terms-conditions": {
    h1: "Terms & Conditions",
    content: `Terms and conditions for using CompressPDF. Our PDF tools are provided as-is. Use for personal document compression. We are not liable for data loss. Client-side processing means files stay on your device.`,
    steps: [],
    faqs: [
      { q: "Free to use?", a: "Yes. No charge for our tools." },
      { q: "Liability?", a: "Use at your own risk. We recommend keeping backups." },
    ],
  },
  "/disclaimer": {
    h1: "Disclaimer",
    content: `Disclaimer for CompressPDF. We provide tools and guides for PDF compression and portal upload help. Information is for general use. We do not guarantee portal-specific results. Use at your own discretion.`,
    steps: [],
    faqs: [
      { q: "General disclaimer?", a: "Content is informational. Verify with official portals." },
    ],
  },
  "/sitemap": {
    h1: "Sitemap",
    content: `HTML sitemap of CompressPDF. Find all PDF tools and blog posts in one place. Use this page to navigate to compress PDF, compress to 200KB, scanned PDF compressor, remove metadata tool, and our blog guides.`,
    steps: [],
    faqs: [
      { q: "What is this?", a: "A sitemap listing all main pages and tools." },
    ],
  },
  "/tools": {
    h1: "PDF Tools",
    content: `All PDF tools in one place. Compress PDF, compress to 200KB or 100KB, scanned PDF compressor, remove metadata. Free, private, browser-based. Each tool runs in your browser with no uploads. Choose the tool you need above.`,
    steps: [],
    faqs: [
      { q: "What tools are here?", a: "Compress PDF, 200KB, 100KB, scanned PDF, remove metadata." },
      { q: "All free?", a: "Yes, all tools are free." },
    ],
  },
  "/blog": {
    h1: "Blog",
    content: `Read guides on compressing PDFs for government portals, SSC forms, UPSC documents, passport uploads, scholarships and more. Our blog helps students fix PDF upload errors and reduce file size.`,
    steps: [],
    faqs: [
      { q: "What topics?", a: "PDF compression, portal upload fixes, SSC, passport, scholarship." },
    ],
  },
};

function getSeoContent(route, meta) {
  const entry = SEO_CONTENT[route];
  if (entry) return entry;
  if (route.startsWith("/blog/")) {
    return {
      h1: meta.title,
      content: `Read this guide on PDF compression and portal uploads. Our blog helps with SSC forms, passport documents, scholarship uploads and more. Use our free tools to compress PDF to 200KB or 100KB.`,
      steps: [],
      faqs: [
        { q: "Related tools?", a: "Try our compress PDF or compress to 200KB tools." },
        { q: "Free?", a: "Yes, all our tools are free." },
      ],
    };
  }
  return {
    h1: meta.title,
    content: `CompressPDF offers free PDF compression tools for government portals, job forms and uploads. Reduce PDF size for SSC, passport, scholarship applications. All tools run in your browser. No uploads, no signup.`,
    steps: [],
    faqs: [
      { q: "Free?", a: "Yes. All tools are free." },
      { q: "Safe?", a: "100% client-side. No server uploads." },
    ],
  };
}

/** Offscreen: crawlable by bots, no layout impact, no display:none. */
const SEO_BLOCK_STYLE = OFFSCREEN_STYLE;

function buildSeoContentHtml(route, meta) {
  const seo = getSeoContent(route, meta);
  let html = `<section id="seo-content-block" style="${SEO_BLOCK_STYLE}" aria-hidden="true"><h1>${escapeHtml(seo.h1)}</h1><p style="white-space:pre-line;">${escapeHtml(seo.content)}</p>`;
  if (seo.steps.length > 0) {
    html += `<h2 style="font-size:1rem;color:#e5e7eb;margin:1rem 0 0.5rem;">Steps</h2><ol style="margin:0 0 1rem;padding-left:1.25rem;">`;
    seo.steps.forEach((s) => {
      html += `<li style="margin-bottom:0.25rem;"><strong>${escapeHtml(s.title)}</strong>: ${escapeHtml(s.desc)}</li>`;
    });
    html += `</ol>`;
  }
  if (seo.faqs.length > 0) {
    html += `<h2 style="font-size:1rem;color:#e5e7eb;margin:1rem 0 0.5rem;">FAQ</h2><dl style="margin:0;">`;
    seo.faqs.forEach((f) => {
      html += `<dt style="font-weight:600;color:#d1d5db;margin-top:0.5rem;">${escapeHtml(f.q)}</dt><dd style="margin-left:0;margin-bottom:0.5rem;">${escapeHtml(f.a)}</dd>`;
    });
    html += `</dl>`;
  }
  html += `</section>`;
  return html;
}

/** Build hidden-but-crawlable internal links nav (plain HTML) for Ahrefs/Sitebulb. */
function buildCrawlableLinksHtml() {
  const links = CRAWLABLE_LINK_PATHS.map((p) => {
    const href = p === "/" ? "/" : p;
    const text = p === "/" ? "Home" : p.replace(/^\//, "");
    return `<a href="${href}">${escapeHtml(text)}</a>`;
  }).join("");
  return `<nav id="crawlable-internal-links" style="${OFFSCREEN_STYLE}" aria-label="Internal links">${links}</nav>`;
}

// ✅ Create proper HTML that loads SPA + correct meta tags (canonical in head for crawlers)
function createHtml(route, meta, assets) {
  const canonical = getCanonicalUrl(route);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${canonical}" />

<meta property="og:type" content="website" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${SITE}/og-image.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />

<link rel="stylesheet" crossorigin href="${assets.css}" />
<script type="module" crossorigin src="${assets.js}"></script>

${buildGoogleTag()}
</head>

<body>
${buildSeoContentHtml(route, meta)}
${buildCrawlableLinksHtml()}
<div id="root"></div>

<script>
  // ✅ Set correct SPA route for BrowserRouter before React app loads fully
  history.replaceState({}, "", "${route}");
</script>
</body>
</html>`;
}

function run() {
  if (!fs.existsSync(DIST_DIR)) {
    console.log("❌ dist folder not found. Run `vite build` first.");
    process.exit(1);
  }

  const assets = getAssets();

  console.log("✅ Generating static pages into dist...");
  console.log("✅ Using assets:", assets);
  console.log("✅ GA enabled:", GA_ID);

  for (const route of ROUTES) {
    const meta = getMeta(route);

    const outDir =
      route === "/"
        ? DIST_DIR
        : path.join(DIST_DIR, route.replace(/^\//, ""));

    ensureDir(outDir);

    const filePath = path.join(outDir, "index.html");
    fs.writeFileSync(filePath, createHtml(route, meta, assets), "utf8");

    console.log("✅ generated:", route);
  }

  console.log("🎉 Done. Static pages created.");
}

run();
