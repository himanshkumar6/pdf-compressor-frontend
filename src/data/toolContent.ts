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
    content: `SSC form, passport portal, scholarship — jahan bhi 200KB limit hai, yahan se fix karo.

Govt portals pe PDF upload karte waqt sabse common error: "File size exceeds 200KB". Bahut students ko ye problem aati hai. Humara tool specifically isi ke liye hai — PDF ko 200KB ke andar laata hai bina readability kharab kiye.

Passport application, SSC CGL form, scholarship documents — sab ke liye use kar sakte ho. Mobile pe bhi kaam karega, koi app nahi chahiye. Browser open karo, PDF select karo, compress karo, download karo. Form pe upload karte waqt ab error nahi aayega.

100% secure. Aapka PDF kisi server pe nahi jata. Sab aapke device pe hi process hota hai. Students ke liye trusted tool — try karo, tension mat lo.

Agar PDF scanned hai — marksheet, certificate — toh Scanned PDF to 200KB tool use karo. Woh scanned documents ke liye better optimize hai. Normal PDF ke liye yahi tool sahi hai.

Passport application, SSC form, scholarship — jahan bhi 200KB limit hai, wahan pehle is tool se size check karo. Bada hai toh compress kar lo. Form reject hone se bach jayega. Mobile pe bhi same — koi app nahi chahiye.`,
    steps: [
      {
        title: "PDF select karo",
        desc: "Upar click karke ya drag-drop se PDF choose karo.",
      },
      {
        title: "Compress to 200KB pe click karo",
        desc: "Tool 200KB target pe optimize karega.",
      },
      {
        title: "Download karo aur portal pe upload karo",
        desc: "Ready PDF download karke form pe upload kar do.",
      },
    ],
    faqs: [
      {
        q: "SSC form ke liye sahi hai?",
        a: "Haan, SSC portal pe 200KB limit hoti hai — is tool se perfect fit ho jayega.",
      },
      {
        q: "Passport application mein use kar sakte hain?",
        a: "Haan, passport portal bhi 200KB maangta hai. Ye tool wahi ke liye hai.",
      },
      {
        q: "Quality kaise rahegi?",
        a: "Optimized compression use karte hain. Text clear rahega, photos bhi readable.",
      },
      {
        q: "Mobile se kaise use karen?",
        a: "Browser open karo, is page pe aao, PDF select karo. Koi app install nahi karni.",
      },
      {
        q: "Mera data safe hai?",
        a: "Haan. PDF aapke device pe hi process hota hai, kahi upload nahi hota.",
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
    content: `Scanned document hai aur 200KB limit hai? Yahi solution hai.

Passport, scholarship, SSC — kabhi kabhi scanned PDF chahiye hota hai aur size 200KB ke andar hona chahiye. High-quality scan ka size zyada hota hai. Is tool se tum scanned PDF ko specifically 200KB ke andar laa sakte ho.

Marksheet, certificate, ID proof — jo bhi scan kiya hai, is tool pe daalo. Text readable rahega, bas file size target pe aajayega. Students ke liye bohot useful — form reject hone se bach jayega. Govt portals pe upload karte waqt "file too large" error nahi aayega.

100% browser-based. Safe, free, koi upload nahi. Trust karo aur use karo.

Agar normal (non-scanned) PDF hai toh Compress PDF to 200KB tool use karo. Scanned docs ke liye yahi tool best hai. Form fill karte waqt PDF ready rakho — last moment pe tension nahi lena padega.

Passport portal, scholarship form, SSC — scanned document maangte hain aur 200KB limit bhi hoti hai. Scanner se bani file ka size zyada hota hai. Is tool se target pe laa sakte ho. Mobile pe bhi kaam karega. Data safe rahega.`,
    steps: [
      {
        title: "Scanned PDF choose karo",
        desc: "Apna scanned document select karo.",
      },
      {
        title: "200KB target pe compress karo",
        desc: "Tool 200KB ke andar optimize karega.",
      },
      {
        title: "Download karo aur upload karo",
        desc: "Ready file portal pe upload kar do.",
      },
    ],
    faqs: [
      {
        q: "Kis type ke scanned PDF ke liye hai?",
        a: "Marksheet, certificate, ID proof, TC — koi bhi scanned document. Image-based PDF ke liye best hai.",
      },
      {
        q: "200KB ke andar guarantee?",
        a: "Tool 200KB target pe optimize karta hai. Zyada bade scans mein thoda quality adjust ho sakti hai.",
      },
      {
        q: "Passport document ke liye?",
        a: "Haan, passport portal pe scanned docs upload karte waqt use kar sakte ho.",
      },
      {
        q: "Mobile pe kaam karega?",
        a: "Haan, browser se mobile pe bhi use kar sakte ho.",
      },
      {
        q: "Data safe hai?",
        a: "Haan. Sab aapke device pe process hota hai, kahi upload nahi.",
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
    content: `500KB PDF size limit hai? Email attachment ya job portal ke liye document compress karna hai? Ye tool tumhare kaam ka hai.

500KB ka limit medium-sized PDFs ke liye perfect hai. Job portals, email attachments, company forms — sab jagah 500KB limit common hai. Is tool se tum PDF ko 500KB ke andar laa sakte ho.

Naukri.com, LinkedIn, company career pages — sab pe resume upload karte waqt 500KB-1MB limit hoti hai. Humara tool quality maintain karte hue size reduce karta hai.

100% browser mein chalta hai. Safe, free, koi upload nahi. Mobile pe bhi kaam karega. Email mein PDF attach karte waqt bhi useful hai.`,
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
};
