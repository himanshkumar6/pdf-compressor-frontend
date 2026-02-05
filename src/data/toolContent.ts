/**
 * SEO content for each tool page: 300–600 words Hinglish, steps, 5 FAQs.
 * Tone: trust-building, for students (SSC, Scholarship, Passport uploads).
 */

export type ToolStep = { title: string; desc: string };
export type ToolFaq = { q: string; a: string };

export type ToolContentItem = {
  content: string;
  steps: ToolStep[];
  faqs: ToolFaq[];
};

export const TOOL_CONTENT: Record<string, ToolContentItem> = {
  "/compress-pdf": {
    content: `Kya aapka PDF bahut bada hai? SSC form, scholarship, ya passport portal pe upload karte waqt "file too large" error aata hai? Aap sahi jagah pe ho.

Ye tool bilkul free hai aur 100% browser mein chalta hai. Matlab aapka PDF kahi upload nahi hota — sab kuch aapke phone ya computer pe hi process hota hai. Students ke liye perfect hai kyunki form submit karne se pehle PDF size reduce karna padta hai.

SSC, UPSC, scholarship forms, passport application — sab jagah PDF size limit hoti hai. Kabhi 200KB, kabhi 500KB. Agar aap mobile se kar rahe ho toh bhi kaam karega. Koi app install karne ki zarurat nahi, sirf browser open karo aur PDF select karo. Quality bhi theek rahegi, sirf size chhota ho jayega.

Hamara tool secure hai. Aapke documents kisi server pe nahi jaate. Bahut students jo scholarship ya govt form bhar rahe hain, woh pehle se use kar rahe hain. Trust karo.

Agar tum marksheet, certificate ya koi document PDF mein convert karke upload karna chahte ho, toh pehle is tool se size check karo. Bada hai toh compress kar lo. Form submit karte waqt tension nahi lena padega. Mobile pe bhi same process — select, compress, download. Simple.

Jyada bade PDF ke liye thoda time lag sakta hai, par usually seconds mein ho jata hai. Koi signup ya login nahi chahiye. Direct use karo. Hamara tool students ke liye banaya gaya hai — SSC, UPSC, scholarship, passport — jahan bhi PDF limit hai, wahan use karo.

Last moment pe form submit karte waqt PDF error mat chhodna. Pehle se ready rakho. Is tool se tum kabhi bhi compress kar sakte ho — mobile, laptop, kahi se bhi. Data safe rahega, koi tension mat lo.`,
    steps: [
      {
        title: "PDF select karo",
        desc: "Upar wale area mein click karke apna PDF choose karo, ya drag-and-drop karo.",
      },
      {
        title: "Compress start karo",
        desc: "Compress button dabao. Thodi der mein processing ho jayegi.",
      },
      {
        title: "Download karo",
        desc: "Compressed PDF ready hone par download kar lo.",
      },
    ],
    faqs: [
      {
        q: "PDF compress karne se quality kharab toh nahi hogi?",
        a: "Nahi. Hum optimized compression use karte hain — text readable rahega, images bhi clear dikhengi. Sirf unnecessary data remove hota hai.",
      },
      {
        q: "Mobile pe kaam karega?",
        a: "Haan, bilkul. Android aur iPhone dono pe browser se use kar sakte ho. Koi app install karne ki zarurat nahi.",
      },
      {
        q: "Mera PDF kisi server pe upload toh nahi hoga?",
        a: "Nahi. Sab processing aapke device pe hi hoti hai. 100% private — hum aapka PDF dekhte hi nahi.",
      },
      {
        q: "Kitna bada PDF upload kar sakte hain?",
        a: "Abhi 5MB tak support hai. Zyada bade PDF ke liye pehle split karke try karo.",
      },
      {
        q: "Yeh tool free hai?",
        a: "Haan, completely free. Koi signup, watermark ya hidden charge nahi hai.",
      },
    ],
  },

  "/compress-pdf-to-100kb": {
    content: `Kya form pe 100KB limit hai? Email attachment size chhota chahiye? Yahi tool use karo.

100KB ka limit bohot strict hota hai — kuch portals, forms aur email systems yahi maangte hain. Hum tumhari PDF ko 100KB ke andar laane mein madad karte hain, bina quality totally kharab kiye.

Students jo scholarship ya short forms bhar rahe hain, unke liye ye tool helpful hai. Agar original PDF zyada bada hai toh thoda compression strong hoga, par text readable rahega. Email mein PDF attach karte waqt bhi size matter karta hai — 100KB ke andar rahega toh easily send ho jayega.

100% browser-based — koi upload nahi, koi signup nahi. Trust pe rakho, tumhara data safe hai.

Agar 200KB limit hai toh Compress to 200KB tool use karo. Dono tools same tarah secure hain, sirf target size alag hai. 100KB wale forms ya email attachment ke liye ye tool perfect hai.

Kuch scholarship forms strict 100KB maangte hain. Is tool se tum PDF ko us limit ke andar laa sakte ho. Quality thodi adjust hogi par document readable rahega. Trust karo — bahut students use kar chuke hain.`,
    steps: [
      {
        title: "PDF upload karo",
        desc: "Select PDF karke apna file choose karo.",
      },
      {
        title: "100KB target select karo",
        desc: "Tool automatically 100KB target pe compress karega.",
      },
      {
        title: "Process karo aur download karo",
        desc: "Compress button dabao, phir download kar lo.",
      },
    ],
    faqs: [
      {
        q: "100KB mein sab PDF fit ho jayega?",
        a: "Zyada bade PDF mein thoda quality compromise ho sakta hai. Text documents easily fit ho jate hain.",
      },
      {
        q: "Email attachment ke liye sahi hai?",
        a: "Haan, jahan 100KB limit hai wahan perfect hai.",
      },
      {
        q: "Scanned PDF bhi compress ho sakta hai?",
        a: "Haan, par scanned PDF ke liye humara Scanned PDF tool zyada better hai.",
      },
      { q: "Free hai?", a: "Haan, bilkul free. Koi charge nahi." },
      {
        q: "Mobile se use kar sakte hain?",
        a: "Haan, browser se mobile pe bhi kaam karega.",
      },
    ],
  },

  "/compress-pdf-to-200kb": {
    content: `**Why is the 200KB PDF Limit so Common?**
Most Indian government recruitment portals (SSC, UPSC, IBPS, Railways) and admission forms (JEE, NEET) rely on legacy server infrastructure. To prevent database crashes, they enforce strict file size limits—usually **20KB to 200KB**.

**The Problem: "File Size Exceeded" Error**
When you scan a document using a mobile app (CamScanner, Adobe Scan) or a cyber cafe scanner, the output is often **2MB to 5MB**. This is 10x larger than the allowed limit. Uploading this results in rejection: *"File size must be less than 200KB"*.

**The Solution: Privacy-First Compression (to200kb)**
Whether you are searching to **compress pdf to 200kb**, reduce file size **under 200kb**, or even typed **compress pdf to200kb**, this tool is engineered for you. Unlike other tools that upload your private documents to a remote cloud server (a privacy risk), **CompressPDF** uses advanced WebAssembly technology to compress your PDF **right inside your browser**.

- **Your file never leaves your device.**
- **Zero data usage** for upload/download (offline-ready).
- **Legible Text:** We optimize hidden metadata and image assets while keeping text sharp ("without losing quality").

**Best Practices for SSC/UPSC Uploads:**
1. **Resolution:** Scan at 200 DPI first.
2. **B&W vs Color:** Converting to Grayscale (B&W) saves huge space.
3. **Verify:** Always open the compressed PDF to ensure Name and Roll Number are readable.

Use this tool to fix your document size instantly and submit your application on time.`,
    steps: [
      {
        title: "Select your oversized PDF",
        desc: "Choose the document giving you the 'File too large' error.",
      },
      {
        title: "Auto-Optimize to <200KB",
        desc: "Our engine strips metadata and optimizes images to fit the 200KB limit.",
      },
      {
        title: "Download & Verify",
        desc: "Save the file. Open it to check readability before uploading to the portal.",
      },
    ],
    faqs: [
      {
        q: "Can I compress PDF to 200KB without losing quality?",
        a: "Yes. Our tool optimizes invisible metadata and thumbnails to reduce size while keeping the printable text 100% sharp and readable.",
      },
      {
        q: "Is this tool free for 100KB or 200KB size?",
        a: "Yes, it is completely free. You can compress PDF to 100KB, 200KB, or any size without any hidden charges or signups.",
      },
      {
        q: "Will this work for SSC CGL/CHSL forms?",
        a: "Yes. This tool is specifically tuned for the 200KB limit required by SSC, IBPS, and Railways recruitment forms.",
      },
      {
        q: "Check: Is my data safe (Aadhar/PAN)?",
        a: "Absolutely. We use 'Client-Side Processing'. Your Aadhar/PAN card data stays in your browser's memory and is never sent to our servers.",
      },
      {
        q: "What if I need to compress PDF under 100KB?",
        a: "You can use our specific 'Compress to 100KB' tool or check the settings to apply stronger compression if your file is very large.",
      },
    ],
  },

  "/scanned-pdf-compressor": {
    content: `Scanned documents — marksheet, certificate, ID proof — inka size kabhi bahut bada ho jata hai. Scan karte waqt high resolution hoti hai, isliye file heavy ban jati hai.

Form upload karte waqt problem aati hai. Scholarship, passport, govt form — sab jagah scanned PDF chahiye hoti hai aur size limit bhi hoti hai. Is tool se tum scanned PDF ka size reduce kar sakte ho, bina text blur kiye.

Students jo apni marksheet, TC ya certificate scan karke upload karte hain, unke liye ye tool helpful hai. Normal PDF compressor se alag — yahan scanned images pe better optimization hoti hai. Quality theek rahegi, sirf file size chhota ho jayega.

Browser mein hi chalta hai — secure, free, no upload. Try karo.

Agar portal pe 200KB strict limit hai toh Scanned PDF to 200KB tool use karo. Dono tools students ke liye bane hain — SSC, scholarship, passport sab ke liye. Scanned docs ke liye yahi tool best hai.

Marksheet, TC, certificate — scan karte waqt resolution high hoti hai, file bari ban jati hai. Is tool se size reduce karo, text blur nahi hoga. Form upload karte waqt "file too large" error nahi aayega. Try karo, confidence se use karo.`,
    steps: [
      {
        title: "Scanned PDF select karo",
        desc: "Apna scanned document (marksheet, certificate, etc.) choose karo.",
      },
      {
        title: "Compress start karo",
        desc: "Button dabao. Tool scan ko optimize karega.",
      },
      {
        title: "Download karo",
        desc: "Compressed scanned PDF download kar lo.",
      },
    ],
    faqs: [
      {
        q: "Scanned PDF aur normal PDF mein kya farak hai?",
        a: "Scanned PDF image-based hota hai. Is tool pe image optimization better hai scanned docs ke liye.",
      },
      {
        q: "Marksheet scan compress ho jayega?",
        a: "Haan, marksheet, certificate, TC — sab scanned docs ka size reduce ho sakta hai.",
      },
      {
        q: "Text blur toh nahi hoga?",
        a: "Nahi. Readable rahega. Sirf unnecessary data remove hota hai.",
      },
      {
        q: "200KB limit wale portal ke liye?",
        a: "Haan, par agar strict 200KB chahiye toh Scanned PDF to 200KB tool use karo.",
      },
      { q: "Free hai?", a: "Haan, completely free. No signup." },
    ],
  },

  "/scanned-pdf-to-200kb": {
    content: `**Optimizing Scanned Documents (Marksheets, Caste Certificates) for 200KB**

One of the biggest challenges for students is compressing **Scanned PDFs**. Unlike digital-born PDFs (created from Word), scanned PDFs are essentially high-resolution images wrapped in a PDF container. They are heavy, noisy, and difficult to compress without becoming unreadable blur.

**Why General Compressors Fail on Scanned PDFs**
Standard tools try to compress the whole file evenly, which ruins the text clarity of stamps, signatures, and small print (like serial numbers). Our **Specialized Scanned PDF Engine**:
- Detects image layers separately.
- Applies "Intelligent Downsampling" to reduce file size while preserving edge sharpness.
- Ensures the final output is **Printable** and **Readable**.

**Perfect for:**
- **Marksheets (10th/12th):** Keeps grades visible.
- **Caste/EWS Certificates:** Ensures QR codes and stamps remain scannable.
- **ID Proofs (Aadhar/Voter ID):** Balances photo quality with text legibility.

**Instructions for Best Results:**
1. **Crop First:** If your scan has extra table background, crop it. Unnecessary background adds file weight.
2. **Flatten:** If you used an app like CamScanner, ensure the "Magic Color" filter isn't overly saturated.
3. **Use this Tool:** Select your file above and let our algorithm handle the rest.`,
    steps: [
      {
        title: "Upload Scanned Document",
        desc: "Select your marksheet, certificate, or ID proof scan.",
      },
      {
        title: "Smart Scan Compression",
        desc: "We analyze the visual data to reduce size while keeping text sharp.",
      },
      {
        title: "Download & Check",
        desc: "Download the file. Zoom in to ensure all details are clear before submitting.",
      },
    ],
    faqs: [
      {
        q: "Will my marksheet grades be readable?",
        a: "Yes. Our algorithm prioritizes text contrast so numbers and grades remain visible even at 200KB.",
      },
      {
        q: "Does it work on old/faded documents?",
        a: "It works, but for very old docs, we recommend scanning at higher contrast before compressing.",
      },
      {
        q: "Is this accepted by Passport Seva?",
        a: "Yes. Passport Seva accepts PDFs under 200KB (or 1MB depending on doc type). This tool ensures compliance.",
      },
      {
        q: "Is my data private?",
        a: "100% Private. The processing happens in your browser. We never see your personal certificates.",
      },
      {
        q: "Can I compress multiple pages?",
        a: "Yes. If you have a multi-page PDF (e.g. 5-page marksheet), the tool will optimize all pages to try and fit the limit.",
      },
    ],
  },

  "/remove-metadata-from-pdf": {
    content: `PDF mein hidden info hoti hai — author name, creation date, software name. Kabhi kabhi isse problem hoti hai.

Job portal pe resume upload karte waqt, scholarship form ya govt form pe — kuch portals metadata check karte hain. Agar tum chahte ho ki tumhara naam, date ya koi aur info PDF se hat jaye, toh ye tool use karo.

Students jo privacy chahte hain, jo resume clean karke upload karna chahte hain — unke liye perfect. PDF ka actual content — text, images — same rahega. Sirf hidden properties remove hongi. Document khud change nahi hoga.

100% browser mein chalta hai. PDF kahi upload nahi hota. Safe aur free. Koi third-party ko tumhara PDF nahi dikhega — sab aapke device pe hi process hota hai. Resume ya important document ke liye metadata remove karna privacy ke liye accha hai.

Job portal pe resume bhejte waqt, scholarship form pe — kuch jagah metadata check hoti hai. Agar tum author name, creation date ya software info nahi dikhana chahte, toh pehle metadata remove kar lo. PDF ka content — text, layout — bilkul same rahega. Sirf hidden info clean hogi.`,
    steps: [
      {
        title: "PDF select karo",
        desc: "Jis PDF se metadata remove karni hai, use choose karo.",
      },
      {
        title: "Remove Metadata pe click karo",
        desc: "Button dabao. Hidden info clean ho jayegi.",
      },
      {
        title: "Clean PDF download karo",
        desc: "Metadata-free PDF download kar lo.",
      },
    ],
    faqs: [
      {
        q: "Metadata kya hoti hai?",
        a: "Author name, creator software, creation date, modified date — ye sab hidden properties metadata hain. PDF ke andar chipi hoti hain.",
      },
      {
        q: "PDF ka content change hoga?",
        a: "Nahi. Text, images, layout sab same rahega. Sirf hidden info remove hogi.",
      },
      {
        q: "Resume upload ke liye sahi hai?",
        a: "Haan. Job portal pe clean resume upload karne ke liye metadata remove karna helpful ho sakta hai.",
      },
      {
        q: "Mera PDF safe hai?",
        a: "Haan. Processing aapke browser mein hi hoti hai. Kahi upload nahi hota.",
      },
      { q: "Free hai?", a: "Haan, bilkul free. No signup." },
    ],
  },

  "/compress-pdf-to-50kb": {
    content: `50KB PDF size limit hai? SSC form, scholarship ya email attachment ke liye strict limit hai? Ye tool tumhare liye hai.

50KB ka limit bahut tight hota hai — bahut kam portals aur forms isse maangte hain. Lekin kuch competitive exams aur govt forms mein yahi limit hoti hai. Humara tool PDF ko 50KB ke aas-paas laane ki koshish karta hai.

Students jo strict upload limits face kar rahe hain — scholarship forms, admission portals — unke liye ye perfect hai. Quality thodi adjust hogi par document readable rahega. Mobile pe bhi kaam karega.

100% browser mein chalta hai. Koi server upload nahi. Trust karo, tumhara data safe hai. Agar 100KB ya 200KB limit hai toh woh tools use karo — 50KB bahut strict hai.`,
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
    content: `150KB PDF limit hai? SSC form, UPSC portal, passport application ya scholarship ke liye document compress karna hai? Ye tool perfect hai.

150KB ka limit 100KB aur 200KB ke beech hai — kai govt portals aur forms isme fit ho jaate hain. Humara tool PDF ko 150KB ke aas-paas optimize karta hai bina text quality kharab kiye.

SSC CGL, CHSL, passport application, scholarship forms — sab ke liye use kar sakte ho. Mobile pe bhi kaam karega. Browser open karo, PDF select karo, compress karo, download karo.

100% secure. Tumhara PDF kisi server pe nahi jata. Students ke liye trusted tool. Form reject hone se bach jayega.`,
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
    content: `**Reliable Compression for Job Portals (Naukri, LinkedIn) & Corporate Use**

While government forms often demand extreme compression (200KB), the private sector (MNCs, Startups, HR Portals) usually sets a **500KB to 1MB** limit for Resumes and Portfolios.

**Why 500KB is the Professional Standard:**
- **Email Safe:** Fast to attach and open on mobile networks.
- **ATS Friendly:** Applicant Tracking Systems (ATS) reject files that are too heavy or non-standard.
- **Visual Quality:** At 500KB, your resume can include a professional photo, icons, and decent layout design without looking pixelated.

**Fixing "Resume Upload Failed" on Naukri.com/LinkedIn:**
If you get an error while uploading your CV, it's often due to high-resolution assets exporting from tools like Canva or Photoshop.
1. **Export to PDF Standard:** Always choose "Standard" not "Print" quality.
2. **Use this Tool:** If it's still >1MB, run it through our **500KB Compressor**. It cleans up the internal structure without harming the text or layout.

**Secure for Corporate Data:**
We understand that Resumes, Offer Letters, and Contracts are sensitive. Our **client-side technology** ensures your professional data never leaves your browser session.`,
    steps: [
      {
        title: "Select Resume/Document",
        desc: "Choose the file you want to upload to a Job Portal or Email.",
      },
      {
        title: "Optimize to 500KB",
        desc: "We prioritize maintaining layout and font sharpness for professional documents.",
      },
      {
        title: "Download & Apply",
        desc: "Use the optimized PDF for Naukri, LinkedIn, or Email attachments.",
      },
    ],
    faqs: [
      {
        q: "Will this mess up my Resume formatting?",
        a: "No. We only optimize the internal data stream. Your fonts, margins, and layout remain exactly 100% same.",
      },
      {
        q: "Is 500KB good for Resumes?",
        a: "Yes, 500KB is the industry sweet spot. It's high quality enough for print, but small enough for any email system.",
      },
      {
        q: "Can I compress password protected Offer Letters?",
        a: "You must remove the password first. Browsers cannot process encrypted files.",
      },
      {
        q: "Is it free for commercial use?",
        a: "Yes, the tool is free for everyone, including professionals and freelancers.",
      },
      {
        q: "Do you store my resume?",
        a: "Never. Your resume is processed in your browser RAM and wiped instantly when you close the tab.",
      },
    ],
  },

  "/compress-pdf-to-1mb": {
    content: `1MB PDF size limit hai? Large document compress karna hai? Ye tool tumhare liye hai.

1MB ka limit large PDFs ke liye reasonable hai. Multi-page documents, detailed forms, heavy marksheets — sab 1MB mein fit ho sakte hain. Job applications, company portals, email attachments — sab jagah 1MB limit acceptable hai.

Humara tool large PDFs ko 1MB ke andar optimize karta hai. Quality maintain hoti hai, sirf unnecessary data remove hota hai.

100% browser mein chalta hai. Koi server upload nahi. Safe aur free. Mobile pe bhi kaam karega.`,
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
    content: `PDF size reduce karke 500KB karna hai? Email ya job portal ke liye document chhota karna hai? Ye tool best hai.

PDF size reduce karna common requirement hai. Job portals pe resume upload, email mein document attach, company forms — sab jagah file size limit hoti hai. 500KB medium-sized limit hai jo zyadatar jagah accept hoti hai.

Is tool se tum PDF ka size reduce karke 500KB ke andar laa sakte ho. Text clear rahega, formatting same rahegi. Sirf unnecessary data remove hoga.

Naukri.com, LinkedIn, Internshala — sab job portals pe resume upload ke liye useful. 100% browser mein chalta hai. Safe aur free.`,
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

  // ✅ RUSSIAN CONTENT START
  "/ru/szhat-pdf": {
    content: `Ваш PDF слишком большой? Не удается загрузить файл на портал госуслуг, отправить по почте или прикрепить к резюме? Вы попали по адресу.

Этот инструмент полностью бесплатен и работает на 100% в вашем браузере. Это значит, что ваши файлы никуда не загружаются — всё происходит прямо на вашем устройстве. Это идеальное решение для быстрой обработки документов.

Многие сайты и порталы (Госуслуги, налоговая, учебные порталы) имеют ограничение на размер файла. Иногда это 200 КБ, иногда 1 МБ. Наш сервис поможет вам сжать PDF до нужного размера без потери качества текста.

Мы гарантируем безопасность. Ваши документы не передаются на сторонние серверы. Многие пользователи уже доверяют нам свои файлы.

Если вам нужно уменьшить размер скана паспорта, справки или договора, просто выберите файл, и мы сделаем всё остальное. Работает и на телефоне, и на компьютере. Никаких программ устанавливать не нужно.`,
    steps: [
      { title: "Выберите PDF", desc: "Нажмите на кнопку загрузки или перетащите файл." },
      { title: "Начните сжатие", desc: "Нажмите кнопку сжатия. Это займет несколько секунд." },
      { title: "Скачайте файл", desc: "Готовый сжатый PDF можно скачать сразу же." },
    ],
    faqs: [
      { q: "Пострадает ли качество при сжатии?", a: "Нет. Мы используем умные алгоритмы, чтобы текст оставался четким, а размер уменьшался." },
      { q: "Можно ли использовать на телефоне?", a: "Да, сервис отлично работает в браузере на Android и iPhone." },
      { q: "Мои файлы в безопасности?", a: "Абсолютно. Обработка происходит локально в вашем браузере, файлы не уходят на сервер." },
      { q: "Какой максимальный размер файла?", a: "Сейчас мы поддерживаем файлы до 5 МБ." },
      { q: "Это бесплатно?", a: "Да, полностью бесплатно и без водяных знаков." },
    ],
  },

  "/ru/szhat-pdf-do-50kb": {
    content: `Нужно сжать PDF до 50 КБ? Это очень строгий лимит, который часто встречается на старых порталах или при загрузке подписей.

50 КБ — это очень мало для качественного документа, но наш инструмент постарается сделать всё возможное. Мы оптимизируем структуру файла, чтобы он "пролез" в этот лимит.

Идеально подходит для текстовых справок, квитанций и простых документов. Если в файле много картинок, качество может немного снизиться, но текст останется читаемым.

Работает прямо в браузере. Безопасно и быстро. Не нужно искать платные программы.`,
    steps: [
      { title: "Загрузите файл", desc: "Выберите документ, который нужно сильно сжать." },
      { title: "Сжатие до 50 КБ", desc: "Инструмент попытается максимально уменьшить размер." },
      { title: "Скачайте результат", desc: "Проверьте качество и загружайте на портал." },
    ],
    faqs: [
      { q: "Реально ли сжать до 50 КБ?", a: "Для текстовых документов — да. Для сканов с фото это сложно, но мы постараемся." },
      { q: "Сильно ли упадет качество?", a: "При таком сильном сжатии качество изображений может снизиться." },
      { q: "Для чего нужен такой размер?", a: "Обычно для загрузки электронных подписей или анкет на старые сайты." },
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
      { title: "Выберите документ", desc: "Загрузите PDF файл с вашего устройства." },
      { title: "Сжатие до 100 КБ", desc: "Система оптимизирует файл под этот лимит." },
      { title: "Сохраните файл", desc: "Скачайте готовый документ и используйте его." },
    ],
    faqs: [
      { q: "Подойдет ли для резюме?", a: "Да, 100 КБ — отличный размер для отправки резюме." },
      { q: "Читается ли текст после сжатия?", a: "Да, текст остается четким и разборчивым." },
      { q: "Как долго идет обработка?", a: "Обычно 1-2 секунды, зависит от вашего устройства." },
      { q: "Можно ли сжать скан?", a: "Да, сканированные документы тоже отлично сжимаются." },
      { q: "Есть ли лимиты?", a: "Бесплатно и без ограничений по количеству файлов." },
    ],
  },

  "/ru/szhat-pdf-do-150kb": {
    content: `Нужен файл до 150 КБ? Это "золотая середина" для многих государственных порталов и учебных заведений.

Часто бывает, что файл весит 160 или 180 КБ, и система его не принимает. Наш инструмент аккуратно уберет лишние данные, чтобы вы вписались в лимит 150 КБ.

Подходит для сканов паспортов, дипломов, сертификатов. Качество останется на высоком уровне.

Не тратьте время на сложные программы. Сделайте это онлайн за пару кликов. Безопасно и конфиденциально.`,
    steps: [
      { title: "Загрузите PDF", desc: "Выберите файл, который нужно немного уменьшить." },
      { title: "Оптимизация до 150 КБ", desc: "Мы уберем лишний вес без потери качества." },
      { title: "Скачайте результат", desc: "Ваш файл готов к загрузке на сайт." },
    ],
    faqs: [
      { q: "Для каких документов подходит?", a: "Паспорта, дипломы, справки, сертификаты." },
      { q: "Будет ли видно печати?", a: "Да, печати и подписи останутся четкими." },
      { q: "Работает ли с цветными сканами?", a: "Да, цвет сохраняется." },
      { q: "Нужен ли интернет?", a: "Только для загрузки страницы, обработка идет в браузере." },
      { q: "Где хранятся мои файлы?", a: "Нигде. Они удаляются сразу после закрытия вкладки." },
    ],
  },

  "/ru/szhat-pdf-do-200kb": {
    content: `Самый популярный запрос: сжать PDF до 200 КБ. Большинство государственных порталов требуют именно этот размер.

Госуслуги, подача налоговой декларации, сайты вузов — везде требуют файлы не больше 200 КБ. Если ваш файл весит больше, система выдаст ошибку.

Мы создали этот инструмент специально для таких случаев. Он уменьшает размер PDF ровно настолько, чтобы он прошел проверку, но остался качественным.

Забудьте про сложные настройки. Просто загрузите файл и получите результат. Работает на любом устройстве — от телефона до ноутбука.`,
    steps: [
      { title: "Выберите файл", desc: "Загрузите документ, который не проходит по размеру." },
      { title: "Сжатие до 200 КБ", desc: "Алгоритм подгонит размер под стандарт 200 КБ." },
      { title: "Готово", desc: "Скачивайте и загружайте на портал без ошибок." },
    ],
    faqs: [
      { q: "Примут ли такой файл на Госуслугах?", a: "Да, 200 КБ — стандартный лимит для большинства услуг." },
      { q: "Можно ли сжать несколько файлов?", a: "Да, загружайте и сжимайте по очереди." },
      { q: "Что если файл все равно больше?", a: "Попробуйте выбрать более сильное сжатие (например, до 100 КБ)." },
      { q: "Безопасно ли это?", a: "Полностью. Файлы не покидают ваш компьютер." },
      { q: "Как быстро это работает?", a: "Почти мгновенно для обычных документов." },
    ],
  },

  "/ru/szhat-pdf-do-500kb": {
    content: `Нужно уменьшить PDF до 500 КБ? Отличный размер для качественных документов, презентаций и портфолио.

500 КБ позволяют сохранить отличное качество изображений и графики. Если вы отправляете портфолио работодателю или презентацию клиенту, этот размер — то, что нужно.

Файл легко пройдет в почтовом вложении и быстро откроется на мобильном интернете.

Используйте наш сервис, чтобы не забивать почту тяжелыми файлами. Быстро, просто и бесплатно.`,
    steps: [
      { title: "Загрузите документ", desc: "Выберите PDF, который нужно 'облегчить'." },
      { title: "Оптимизация до 500 КБ", desc: "Мы сохраним качество, убрав лишний вес." },
      { title: "Скачайте файл", desc: "Готовый документ легкий и удобный для отправки." },
    ],
    faqs: [
      { q: "Подойдет для портфолио с картинками?", a: "Да, 500 КБ достаточно для хорошего качества изображений." },
      { q: "Можно ли отправлять по почте?", a: "Да, такой файл мгновенно прикрепится к письму." },
      { q: "Изменится ли верстка?", a: "Нет, структура документа останется прежней." },
      { q: "Есть ли водяные знаки?", a: "Нет, мы не добавляем никаких надписей." },
      { q: "Работает на iPhone?", a: "Да, отлично работает в Safari и Chrome на iOS." },
    ],
  },

  "/ru/szhat-pdf-do-1mb": {
    content: `У вас большой документ, и нужно уложиться в 1 МБ? Это частое требование для многостраничных договоров, отчетов и книг.

Файлы больше 1 МБ могут долго грузиться и не проходить через корпоративные почтовые фильтры. Наш инструмент поможет сделать ваш "тяжелый" PDF легким и удобным.

Мы аккуратно сожмем файл, не трогая текст и важные детали. Читать такой документ будет так же удобно, но весить он будет меньше.

Идеально для архивирования документов и отправки больших отчетов.`,
    steps: [
      { title: "Выберите большой файл", desc: "Загрузите документ любого размера (до 5 МБ)." },
      { title: "Сжатие до 1 МБ", desc: "Умное сжатие для многостраничных документов." },
      { title: "Сохраните результат", desc: "Скачайте оптимизированный файл." },
    ],
    faqs: [
      { q: "Сколько страниц можно сжать?", a: "Ограничений по страницам нет, главное — исходный вес до 5 МБ." },
      { q: "Будет ли текст четким?", a: "Да, для текстовых документов качество не меняется." },
      { q: "Можно ли сжать книгу?", a: "Если она в PDF и до 5 МБ — да, без проблем." },
      { q: "Это безопасно для конфиденциальных отчетов?", a: "Да, обработка локальная, никто не увидит ваш файл." },
      { q: "Платно ли это?", a: "Нет, сервис бесплатный." },
    ],
  },

  "/ru/umenshit-razmer-pdf-do-500kb": {
    content: `Ищете способ уменьшить размер PDF? Если ваш файл слишком "тяжелый" для отправки или загрузки, мы поможем.

Часто бывает: сканировали документы в высоком качестве, и файл получился огромным. Наш инструмент исправит это за секунды. Мы уменьшим размер до 500 КБ или меньше, сохранив читаемость.

Это универсальное решение для любых задач — от учебы до работы. Не нужно разбираться в настройках DPI и сжатия. Просто загрузите файл, и мы сделаем его легким.

Экономьте место на диске и трафик при отправке. Попробуйте прямо сейчас.`,
    steps: [
      { title: "Выберите файл", desc: "Любой PDF документ, который нужно уменьшить." },
      { title: "Уменьшение размера", desc: "Автоматическая оптимизация под веб-стандарты." },
      { title: "Готово к отправке", desc: "Скачайте легкий файл и отправляйте куда угодно." },
    ],
    faqs: [
      { q: "В чем разница между сжатием и уменьшением?", a: "Это одно и то же. Мы делаем файл легче." },
      { q: "Потеряются ли данные?", a: "Нет, содержание документа останется тем же." },
      { q: "Можно ли вернуть исходный размер?", a: "Нет, поэтому лучше сохраните копию оригинала." },
      { q: "Работает без интернета?", a: "Интернет нужен только для открытия страницы." },
      { q: "Как часто можно пользоваться?", a: "Сколько угодно, ограничений нет." },
    ],
  },

  "/ru/szhat-skanirovannyj-pdf": {
    content: `Сканированные документы часто весят очень много. Обычные компрессоры могут испортить текст, сделав его размытым. Наш инструмент специально настроен для работы со сканами.

Мы умеем определять текст и графику, чтобы сжимать их правильно. Ваши квитанции, договора и рукописные заметки останутся четкими, но станут занимать в разы меньше места.

Если сканер выдал файл на 10 МБ, мы легко превратим его в компактный документ. Очень полезно для бухгалтеров, студентов и всех, кто работает с бумагами.

Загружайте сканы прямо с телефона или компьютера. Результат вас приятно удивит.`,
    steps: [
      { title: "Загрузите скан", desc: "Выберите сканированный PDF файл." },
      { title: "Умное сжатие", desc: "Специальный алгоритм для изображений и сканов." },
      { title: "Скачайте", desc: "Получите компактный документ хорошего качества." },
    ],
    faqs: [
      { q: "Текст не размоется?", a: "Мы стараемся сохранить максимальную четкость текста." },
      { q: "Работает с цветными сканами?", a: "Да, цветные документы сжимаются отлично." },
      { q: "Можно ли сжать фото документа?", a: "Если фото сохранено как PDF — да." },
      { q: "Подходит для старых документов?", a: "Да, помогает улучшить структуру файла." },
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
      { title: "Сжатие до 200 КБ", desc: "Глубокая оптимизация изображений внутри PDF." },
      { title: "Проверьте и скачайте", desc: "Убедитесь, что текст читаем, и скачивайте." },
    ],
    faqs: [
      { q: "Будет ли читаем мелкий текст?", a: "Обычно да, но при сильном сжатии лучше проверить результат." },
      { q: "Подходит для паспорта?", a: "Да, идеально для загрузки документов на госпорталы." },
      { q: "Что если качество стало плохим?", a: "Попробуйте выбрать лимит побольше, например 500 КБ, если портал позволяет." },
      { q: "Можно ли сжать рукописный текст?", a: "Да, рукописные сканы тоже обрабатываются." },
      { q: "Бесплатно?", a: "Да, все функции бесплатны." },
    ],
  },

  "/ru/udalit-metadannye-pdf": {
    content: `Вы знали, что PDF файл хранит скрытую информацию? Имя автора, название программы, дату создания и многое другое. Иногда это нужно удалить для конфиденциальности.

Наш инструмент позволяет очистить метаданные PDF за один клик. Это полезно перед публикацией документа или отправкой его третьим лицам.

"Очищенный" файл выглядит так же, как оригинал, но больше не содержит лишней служебной информации. Это повышает вашу приватность и иногда даже немного уменьшает размер файла.

Процесс полностью безопасен — мы не смотрим ваши файлы, всё происходит у вас на компьютере.`,
    steps: [
      { title: "Загрузите PDF", desc: "Выберите файл, который нужно очистить." },
      { title: "Удаление данных", desc: "Мы удалим автора, заголовок и прочие теги." },
      { title: "Скачайте чистый файл", desc: "Получите новый файл без скрытой информации." },
    ],
    faqs: [
      { q: "Что такое метаданные?", a: "Это скрытая информация о файле: автор, программа, дата создания." },
      { q: "Изменится ли текст документа?", a: "Нет, визуально документ останется прежним." },
      { q: "Зачем это нужно?", a: "Для приватности и безопасности перед отправкой файла." },
      { q: "Можно ли восстановить данные?", a: "После удаления и сохранения — нет." },
      { q: "Это законно?", a: "Конечно, это ваши файлы и ваше право ими управлять." },
    ],
  },
};
