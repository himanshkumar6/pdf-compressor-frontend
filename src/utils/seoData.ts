export type FAQItem = {
  question: string;
  answer: string;
};

export type PageSEO = {
  title: string;
  description: string;
  canonical: string;
  siteName?: string;
  faqs?: FAQItem[];
  jsonLd?: {
    name: string;
    url: string;
    description: string;
    applicationCategory?: string;
    operatingSystem?: string;
  };
};

export const SITE = {
  siteName: "CompressPDF",
  baseUrl: "https://compresspdfto200kb.online",
};

/* ✅ BACKWARD COMPATIBILITY (Old code won’t break) */
export const DEFAULT_SEO = {
  title: "Compress PDF Online Free | Reduce PDF Size Instantly",
  description:
    "Free, fast and secure PDF compressor. Reduce PDF size instantly with browser-only processing. No signup required.",
  canonical: `${SITE.baseUrl}/`,
  siteName: SITE.siteName,
};

/** SEO for 404 page: single h1, meta title/description, canonical to homepage */
export const NOT_FOUND_SEO: PageSEO = {
  title: "404 - Page Not Found | Compress PDF to 200KB",
  description:
    "The page you requested was not found. Use our free PDF compressor to reduce PDF size to 200KB for forms, job portals and government uploads.",
  canonical: `${SITE.baseUrl}/`,
  jsonLd: {
    name: "Compress PDF to 200KB",
    url: `${SITE.baseUrl}/`,
    description: "Free online PDF compression tool.",
  },
};

/* ✅ Old FAQ export used in FAQ component */
export const FAQ_DATA: FAQItem[] = [
  {
    question: "How can I compress a PDF to 200KB without losing quality?",
    answer:
      "Our tool uses browser-based optimization to reduce PDF size while maintaining readability and clarity.",
  },
  {
    question: "Is it safe to compress my PDFs here?",
    answer:
      "Yes. Your files are processed locally in your browser and never uploaded to any server.",
  },
  {
    question: "What if my PDF is still larger than 200KB?",
    answer:
      "Some PDFs contain high-resolution images. We apply maximum safe compression while keeping it readable.",
  },
  {
    question: "Is it free to compress PDF?",
    answer: "Yes, this tool is free to use.",
  },
  {
    question: "Can I compress PDF on mobile?",
    answer: "Yes, it works on Android and iPhone browsers.",
  },
];

/* ✅ Russian FAQ data */
export const RU_FAQ_DATA: FAQItem[] = [
  {
    question: "Как сжать PDF до 200 КБ без потери качества?",
    answer: "Наш инструмент использует браузерные технологии оптимизации. Мы удаляем лишние метаданные, сжимаем изображения и оптимизируем структуру файла, чтобы максимально уменьшить размер, сохранив текст четким и читаемым.",
  },
  {
    question: "Безопасно ли сжимать документы здесь?",
    answer: "Абсолютно. В отличие от других сервисов, наш инструмент работает на 100% в вашем браузере. Ваши конфиденциальные документы не загружаются на сервер, а значит, никто, кроме вас, не имеет к ним доступа.",
  },
  {
    question: "Почему мой файл все еще больше 200 КБ?",
    answer: "Если в PDF очень много изображений высокого разрешения, сжатие до экстремально малого размера может повредить качеству. Попробуйте наш специальный инструмент 'Сжать до 200 КБ', который применяет более агрессивную оптимизацию.",
  },
  {
    question: "Нужно ли платить за сжатие?",
    answer: "Нет, сервис полностью бесплатен. Мы не требуем регистрации, подписки или ввода данных карты.",
  },
  {
    question: "Работает ли сервис на мобильных телефонах?",
    answer: "Да, наш сайт адаптирован для всех современных браузеров на Android и iOS. Вы можете сжать PDF прямо со своего смартфона без установки приложений.",
  },
  {
    question: "Можно ли сжать отсканированный PDF?",
    answer: "Да. Для сканов мы рекомендуем использовать инструмент 'Сжать сканированный PDF', который специально оптимизирован для работы с тяжелыми изображениями страниц.",
  },
  {
    question: "Какие лимиты размера файла на входе?",
    answer: "На текущий момент мы поддерживаем файлы до 5 МБ. Этого достаточно для большинства документов, резюме и заявлений.",
  },
  {
    question: "Портит ли сжатие текст в PDF?",
    answer: "Нет, текстовый слой остается нетронутым в векторном формате. Мы оптимизируем только изображения и внутренние объекты PDF, поэтому текст останется четким при любом масштабе.",
  },
  {
    question: "Примут ли сжатый файл на Госуслугах?",
    answer: "Да, наши файлы соответствуют техническим требованиям большинства государственных порталов России и СНГ по формату и структуре.",
  },
  {
    question: "Как удалить автора и дату создания из PDF?",
    answer: "Воспользуйтесь нашим инструментом 'Удалить метаданные'. Он полностью очищает документ от скрытой информации, сохраняя при этом основной контент.",
  },
];

/* ✅ Old getJsonLd used by existing pages */
export const getJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Compress PDF Tool",
  url: SITE.baseUrl,
  description:
    "Free tool to compress PDF online and reduce PDF size quickly without uploading files to server.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
});

/* ✅ New page SEO system (for 6 landing pages) */
export const PAGES_SEO: Record<string, PageSEO> = {
  // ✅ HOME
  "/": {
    title: "Compress PDF to 200KB for SSC, UPSC & Govt Forms (Free)",
    description:
      "Compress PDF to 200KB online for free. Safely reduce PDF size for SSC, UPSC, IBPS, and government portal uploads. 100% private browser-based processing.",
    canonical: `${SITE.baseUrl}/`,
    jsonLd: {
      name: "Compress PDF to 200KB Online",
      url: `${SITE.baseUrl}/`,
      description:
        "Free online tool to compress PDF size to 200KB securely in browser.",
    },
  },

  // ✅ Tool pages (your existing ones - unchanged)
  "/compress-pdf-to-200kb": {
    title: "Compress PDF to 200KB Online (Free & Without Losing Quality)",
    description:
      "Reduce PDF size under 200KB for SSC, UPSC, and IBPS online forms. Securely compress your PDF in-browser without uploading to any server. Free & fast.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-200kb`,
    faqs: [
      {
        question: "How can I compress a PDF to 200KB without losing quality?",
        answer:
          "Our tool optimizes invisible metadata and image assets in-browser to reduce size while maintaining 100% readable text and sharp clarity.",
      },
      {
        question: "Is it safe to compress my Aadhaar or PAN card here?",
        answer:
          "Yes. Files are processed locally in your browser's RAM and never uploaded to any server. Your sensitive data stays on your device.",
      },
    ],
    jsonLd: {
      name: "Compress PDF to 200KB Tool",
      url: `${SITE.baseUrl}/compress-pdf-to-200kb`,
      description: "Compress PDF files to 200KB securely in your browser.",
    },
  },

  "/compress-pdf": {
    title: "Compress PDF Online Free (Fast & Secure PDF Compressor)",
    description:
      "Compress PDF online instantly for free. Reduce PDF file size for email, WhatsApp, and form uploads without losing quality. 100% private browser processing.",
    canonical: `${SITE.baseUrl}/compress-pdf`,
    jsonLd: {
      name: "Compress PDF Online",
      url: `${SITE.baseUrl}/compress-pdf`,
      description: "Compress PDF online quickly and securely for free.",
    },
  },

  "/compress-pdf-to-50kb": {
    title: "Compress PDF to 50KB Online Free | Reduce PDF Size for Forms",
    description:
      "Compress PDF to 50KB online. Perfect for strict signature and photo upload limits on NSP, SSC, and govt scholarship portals. Safe browser-only processing.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-50kb`,
    jsonLd: {
      name: "Compress PDF to 100KB",
      url: `${SITE.baseUrl}/compress-pdf-to-100kb`,
      description: "Reduce PDF size to 100KB online for free.",
    },
  },

  "/compress-pdf-to-20kb": {
    title: "Compress PDF to 20KB Online Free | Reduce PDF Size for Mobile",
    description:
      "Compress PDF to 20KB online instantly. Ideal for small signature upload limits on SSC, UPSC and State Govt job portals. Private in-browser processing.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-20kb`,
    jsonLd: {
      name: "Compress PDF to 20kb",
      url: `${SITE.baseUrl}/compress-pdf-to-20kb`,
      description: "Reduce PDF size to 20KB online for free.",
    },
  },

  "/edit-pdf": {
    title: "Edit PDF Online – Add Text, Modify PDF Free (Secure)",
    description: "Edit PDF online for free. Add text, modify documents, and update PDFs securely in your browser. No signup required. Fast & private.",
    canonical: `${SITE.baseUrl}/edit-pdf`,
    jsonLd: {
      name: "Edit PDF Online",
      url: `${SITE.baseUrl}/edit-pdf`,
      description: "A free, secure, browser-based PDF editor to add text and modify documents.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Windows, Mac, Linux, Android, iOS",
    },
  },

  "/compress-pdf-to-100kb": {
    title: "Compress PDF to 100KB Online (Free & Fast PDF Smallizer)",
    description:
      "Compress PDF to 100KB online for free. Safely reduce PDF size for scholarship forms, job applications, and email attachments. No quality loss, no uploads.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-100kb`,
    jsonLd: {
      name: "Compress PDF to 100KB",
      url: `${SITE.baseUrl}/compress-pdf-to-100kb`,
      description: "Reduce PDF size to 100KB online for scholarship portals.",
    },
  },

  "/compress-pdf-to-150kb": {
    title: "Compress PDF to 150KB Online Free | Reduce PDF for Passport",
    description:
      "Compress PDF to 150KB online for free. Safely reduce PDF size for passport applications, scholarship portals, and govt forms. 100% private in-browser tool.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-150kb`,
    jsonLd: {
      name: "Compress PDF to 150KB",
      url: `${SITE.baseUrl}/compress-pdf-to-150kb`,
      description: "Reduce PDF size to 150KB online for government forms.",
    },
  },

  "/compress-pdf-to-500kb": {
    title: "Compress PDF to 500KB Online Free | Reduce Size for Resume",
    description:
      "Compress PDF to 500KB online for free. Ideal for resume uploads on Naukri, LinkedIn, and corporate portals. Safely reduce PDF size without losing readability.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-500kb`,
    jsonLd: {
      name: "Compress PDF to 500KB",
      url: `${SITE.baseUrl}/compress-pdf-to-500kb`,
      description: "Reduce PDF size to 500KB online for professional use.",
    },
  },

  "/compress-pdf-to-1mb": {
    title: "Compress PDF to 1MB Online Free | Reduce Size for Portals",
    description:
      "Compress PDF to 1MB online for free. Perfect for heavy documents, university applications, and email. 100% private browser processing. No uploads, no risk.",
    canonical: `${SITE.baseUrl}/compress-pdf-to-1mb`,
    jsonLd: {
      name: "Compress PDF to 1MB",
      url: `${SITE.baseUrl}/compress-pdf-to-1mb`,
      description: "Reduce PDF size to 1MB online while maintaining quality.",
    },
  },

  "/reduce-pdf-size-to-500kb": {
    title: "Reduce PDF Size to 500KB Online Free (Secure & Private)",
    description:
      "Reduce PDF size to 500KB online for free. Safely compress your PDF for job portals like Naukri and LinkedIn. 100% private browser-based processing.",
    canonical: `${SITE.baseUrl}/reduce-pdf-size-to-500kb`,
    jsonLd: {
      name: "Reduce PDF Size to 500KB",
      url: `${SITE.baseUrl}/reduce-pdf-size-to-500kb`,
      description: "Reduce PDF file size to 500KB online for free.",
    },
  },

  "/pdf-to-jpg": {
    title: "Convert PDF to JPG Online - High Quality & Secure (Free)",
    description:
      "Convert PDF to JPG online for free. Extract sharp images from PDF pages for government forms and social media. 100% private, browser-based processing.",
    canonical: `${SITE.baseUrl}/pdf-to-jpg`,
    jsonLd: {
      name: "PDF to JPG Converter",
      url: `${SITE.baseUrl}/pdf-to-jpg`,
      description: "Convert PDF pages into high-quality JPG images securely in-browser.",
    },
  },

  "/jpg-to-pdf": {
    title: "JPG to PDF Converter - Convert Images to PDF Online (Free)",
    description: "Convert JPG to PDF online for free. Merge multiple images into one PDF document securely in your browser. No signup required. Fast & Private.",
    canonical: `${SITE.baseUrl}/jpg-to-pdf`,
    faqs: [
      {
        question: "How to convert JPG to PDF online for free?",
        answer: "Just open our tool, select your images, and click convert. It's completely free and works in your browser without any software installation.",
      },
      {
        question: "Can I merge multiple images into one PDF?",
        answer: "Yes! You can select multiple JPGs at once, rearrange them, and we will combine them into a single multi-page PDF document.",
      },
      {
        question: "Is it safe to convert my photos here?",
        answer: "Yes, extremely safe. We use client-side technology, meaning your photos are processed on your device and are never uploaded to our servers.",
      },
    ],
    jsonLd: {
      name: "JPG to PDF Converter",
      url: `${SITE.baseUrl}/jpg-to-pdf`,
      description: "Convert and merge JPG/PNG images into PDF format securely.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Windows, Mac, Linux, Android, iOS",
    },
  },

  "/merge-pdf": {
    title: "Merge PDF Online - Combine Multiple PDFs for Free",
    description:
      "Merge multiple PDF files into one document instantly. Perfect for combining marksheets and certificates for government portals. Safe and 100% free.",
    canonical: `${SITE.baseUrl}/merge-pdf`,
    faqs: [
      {
        question: "How to merge PDF files Mac?",
        answer: "Honestly, if you're tryin' to figure out how to merge pdf files mac style, most people tell you to use the built-in apps. It's okay, but can be a bit of a click-fest if you have more than two files. If you want a zero-install way that's actually faster, just use our Merge PDF tool. It works right in Safari or Chrome on your Macbook, and you don't have to fiddle with sidebar thumbnails or hidden menus.",
      },
      {
        question: "How to merge PDF documents in Preview?",
        answer: "Look, knowing how to merge pdf documents in preview is a good skill for Mac users, but dragging those tiny pages in the sidebar is super annoying if you have a bunch of files. Most of us just want to get it over with. Our online PDF combiner is way easier—just drop 'em all at once and you're good to go. No dragging required.",
      },
      {
        question: "Mail merge PDF?",
        answer: "If you're doing a mail merge pdf for work and end up with like fifty separate files, you probably need them in one big doc to print or save. Instead of clicking 'Save as PDF' on every single one, just run your merge and then use our Merge PDF utility to stack them up. It saves a ton of time whether you're on Windows or a Mac.",
      },
      {
        question: "How to merge PDF documents Acrobat style?",
        answer: "Acrobat is expensive, let's be real. If you don't have the paid Pro version, you can't even merge pdf documents acrobat style without that annoying 'Start Free Trial' popup. Skip the subscription and use our free tool. It does the same exact thing without asking for your credit card.",
      },
      {
        question: "Linux merge PDF?",
        answer: "For the Linux folks, yeah you can use Ghostscript or PDFtk, but let's be honest—remembering the command line syntax for a linux merge pdf task is just a pain. If you're using Ubuntu or Fedora and just want a quick GUI, our Merge PDF online tool works perfectly in Firefox. It's 100% private too, so your data stays safe.",
      },
      {
        question: "How to merge PDF files on Mac?",
        answer: "A lot of people keep asking how to merge pdf files on mac because the built-in way is kinda hidden inside the Quick Actions menu. If you can't find it or it's being buggy (which happens sometimes), our site is always up. Just upload, merge, and download—it literally takes like 5-10 seconds tops.",
      },
      {
        question: "How to mail merge PDF documents?",
        answer: "Trying to figure out how to mail merge pdf documents in Word or Excel can be tricky because you usually get separate PDFs for each person. Our tool helps you combine those individual results into one final report for your records or for emailing out as one file.",
      },
      {
        question: "How to merge PDF files in Windows?",
        answer: "Windows doesn't really have a built-in 'Preview' app like Mac does, so how to merge pdf files in windows is a constant headache for most. You usually end up downloading some random app that probably has viruses. Don't do that. Just use our secure Merge PDF tool. It’s clean, fast, and stays entirely in your browser memory.",
      },
      {
        question: "Merge PDF files Mac OS",
        answer: "Whether you're on the new Sequoia or some older version, to merge pdf files mac os provides a few ways, but they keep changing where the buttons are. Our online merger is consistent. Works perfectly on any iMac or MacBook without needing to learn whatever new thing Apple changed this year.",
      },
      {
        question: "Dropbox merge PDF?",
        answer: "If you got a bunch of files in a shared folder, doing a dropbox merge pdf manually means downloading everything, merging, and re-uploading. If you use our site, you just drag the files directly from your sync folder to the browser and it combines them instantly. Super simple.",
      },
    ],
    jsonLd: {
      name: "Merge PDF Tool",
      url: `${SITE.baseUrl}/merge-pdf`,
      description: "Combine multiple PDF files into a single document securely.",
    },
  },

  "/split-pdf": {
    title: "Split PDF Online - Extract Pages & Separate PDF Files (Free & Private)",
    description:
      "Easily split PDF files into multiple documents or extract specific pages online. 100% private, browser-based, and free. No upload needed for Acrobat-style splitting.",
    canonical: `${SITE.baseUrl}/split-pdf`,
    faqs: [
      {
        question: "How do I split PDF pages without paying for a subscription?",
        answer: "Honestly, you don't need a pro editor. If you're wondering how do i split pdf pages quickly, just use our Split PDF tool. It's totally free, and because it runs in your browser, it's actually faster than most paid software. Just select the pages you want and hit extract—it’s that simple.",
      },
      {
        question: "What is the best way to split PDF in Preview Mac?",
        answer: "If you have a MacBook and want to split pdf in preview mac, you usually have to drag pages one by one to your desktop. It’s okay for one page, but if you have a big file, it’s much easier to just drop it here and click the pages you need visually. No more messy desktops!",
      },
      {
        question: "How to split PDF Adobe Acrobat style?",
        answer: "Everyone wants to know how to split pdf adobe acrobat style but without the huge monthly bill. Our tool gives you that same 'Extract' and 'Split' functionality you'd find in the acrobat pro dc split pdf menu. You get high-quality separate files without the Adobe price tag or annoying login requirements.",
      },
      {
        question: "How to split PDF by pages for government forms?",
        answer: "When you're applying for a job or a scholarship and the portal only wants your 'Page 3' certificate, you need to know how to split pdf by pages instantly. Just upload your multi-page scan here, click the specific page you need, and download it as a new file. It stays 100% readable for official verification.",
      },
      {
        question: "How to split PDF file into separate PDF files?",
        answer: "If you have one big scan of all your documents and need to know how to split pdf file into separate pdf files, you've found the right spot. Our tool lets you select custom page ranges so you can turn one giant scan into five or ten individual PDFs in one go. Much better than re-scanning every single page!",
      },
      {
        question: "How to split PDF file into multiple files on Windows?",
        answer: "Windows doesn't have a built-in 'Preview' app like Mac, so knowing how to split pdf file into multiple files on PC can be a headache. Don't download random apps that might have viruses. Just use our secure Split PDF online tool. It works on any Windows 10 or 11 browser safely.",
      },
      {
        question: "Can I split PDF in Adobe without a Pro account?",
        answer: "It’s really hard to figure out how to split pdf in adobe if you only have the free Reader version (they usually gray out the button). Instead of getting frustrated, just use our Split PDF utility. It’s built to be a free alternative that just works, no strings attached.",
      },
      {
        question: "Is it possible to split PDF pages into separate files on mobile?",
        answer: "Yes! If you need to split pdf pages into separate files using your phone, our mobile-responsive tool is perfect. Whether you're at a cyber cafe or on the go, you can separate your certificates directly from your mobile storage without needing a computer.",
      },
      {
        question: "What if I need to split a large PDF for a team project?",
        answer: "If you're handling a massive report and need to extract pdf pages into separate files for different colleagues, our tool handles large files easily. It’s fast, keeps the formatting perfect, and ensures everyone gets exactly the pages they need.",
      },
      {
        question: "How to evaluate the intelligent automation software company NICE on Split PDF?",
        answer: "When enterprise users evaluate the intelligent automation software company nice on split pdf workflows, they're looking for high-end robotic processing. For most of us, though, we just need a simple, safe way to fix a PDF. Our tool is 'nice' and free, giving you that automated feel without the corporate complexity.",
      },
    ],
    jsonLd: {
      name: "Split PDF Tool",
      url: `${SITE.baseUrl}/split-pdf`,
      description: "Extract specific pages from PDF documents securely and for free.",
    },
  },

  "/split-pdf-mac": {
    title: "Split PDF in Preview Mac - How to Extract PDF Pages on Mac OS",
    description: "Learn how to split PDF in Preview on Mac or use our faster online tool to extract PDF pages on Mac OS. Free, private, and simple step-by-step guide.",
    canonical: `${SITE.baseUrl}/split-pdf-mac`,
    faqs: [
      {
        question: "Is there a faster way than Preview to split a PDF on Mac?",
        answer: "Yes, our online Split PDF tool is much faster for multi-page extractions than manually dragging pages in Preview.",
      },
    ],
    jsonLd: {
      name: "Split PDF Mac Guide",
      url: `${SITE.baseUrl}/split-pdf-mac`,
      description: "Guide to splitting PDF files on Mac OS.",
    },
  },

  "/split-pdf-windows": {
    title: "How to Split PDF File in Windows - Separate PDF Files Easily",
    description: "Need to separate PDF files in Windows? Learn how to split PDF file into multiple files on Windows 10/11 using our private browser-based tool. No software required.",
    canonical: `${SITE.baseUrl}/split-pdf-windows`,
    jsonLd: {
      name: "Split PDF Windows Guide",
      url: `${SITE.baseUrl}/split-pdf-windows`,
      description: "Guide to splitting PDF files on Windows.",
    },
  },

  "/split-pdf-adobe": {
    title: "Acrobat Pro DC Split PDF Alternative - Split PDF Free",
    description: "Looking for an Acrobat Pro DC split PDF alternative? Split PDF files for free without a subscription. Professional-grade extraction tools right in your browser.",
    canonical: `${SITE.baseUrl}/split-pdf-adobe`,
    jsonLd: {
      name: "Split PDF Adobe Alternative",
      url: `${SITE.baseUrl}/split-pdf-adobe`,
      description: "Free alternative to Adobe Acrobat for splitting PDFs.",
    },
  },

  "/split-pdf-by-pages": {
    title: "How to Split PDF by Pages - Extract Specific PDF Ranges Online",
    description: "Learn how to split PDF by pages instantly. Select custom ranges or individual pages to extract from your document. Perfect for marksheets and certificates.",
    canonical: `${SITE.baseUrl}/split-pdf-by-pages`,
    jsonLd: {
      name: "Split PDF by Pages Guide",
      url: `${SITE.baseUrl}/split-pdf-by-pages`,
      description: "Detailed guide on extracting specific ranges from PDFs.",
    },
  },

  "/split-pdf-online": {
    title: "Split PDF Online - Split PDF Pages into Separate Files (Private)",
    description: "Split PDF pages into separate files online. Our private, browser-based tool is the most secure way to separate your important PDF documents for free.",
    canonical: `${SITE.baseUrl}/split-pdf-online`,
    jsonLd: {
      name: "Split PDF Online Tool",
      url: `${SITE.baseUrl}/split-pdf-online`,
      description: "Secure online tool to split PDF pages.",
    },
  },

  "/merge-pdf-mac": {
    title: "How to Merge PDF Files on Mac Free - Mac OS PDF Combiner",
    description: "Learn how to merge PDF files on Mac using Preview, Acrobat, or our free online tool. Step-by-step guide for Mac OS users to combine PDF documents.",
    canonical: `${SITE.baseUrl}/merge-pdf-mac`,
    faqs: [
      {
        question: "How to merge PDF files on Mac using just the mouse?",
        answer: "You can use our merge pdf tool to drag and drop your files. It's much faster than manual methods when you need to merge pdf files on mac quickly.",
      },
      {
        question: "Is there a free way to mail merge PDF documents on Mac?",
        answer: "Yes! After you mail merge pdf documents using Word or Pages, use our tool to merge pdf online to combine those results into one file.",
      },
    ],
    jsonLd: {
      name: "Merge PDF Mac Guide",
      url: `${SITE.baseUrl}/merge-pdf-mac`,
      description: "Step-by-step guide to merge PDF files on Mac OS.",
    },
  },

  "/merge-pdf-windows": {
    title: "How to Merge PDF Files in Windows - Best Windows PDF Merger",
    description: "Need to combine PDFs in Windows? Learn how to merge PDF files in Windows using Acrobat or our free, private online tool. Easy 3-step guide for PC users.",
    canonical: `${SITE.baseUrl}/merge-pdf-windows`,
    faqs: [
      {
        question: "How do I merge PDF documents Acrobat style on a work PC?",
        answer: "If you can't install software, you can still merge pdf documents acrobat style by using our merge pdf tool directly in your browser.",
      },
      {
        question: "Can I combine PDF files from my Dropbox on Windows?",
        answer: "Yes, simply download your files and use our site to dropbox merge pdf files into one. Merge pdf online safely with us.",
      },
    ],
    jsonLd: {
      name: "Merge PDF Windows Guide",
      url: `${SITE.baseUrl}/merge-pdf-windows`,
      description: "Step-by-step guide to merge PDF files on Windows.",
    },
  },

  "/merge-pdf-linux": {
    title: "Linux Merge PDF Guide - Combine PDF Files on Linux Online",
    description: "The ultimate guide to Linux merge PDF methods. Use command-line tools like Ghostscript or our private online PDF merger. Free, fast, and secure.",
    canonical: `${SITE.baseUrl}/merge-pdf-linux`,
    faqs: [
      {
        question: "Is there a way to mail merge PDF documents on Linux?",
        answer: "While Linux offers many scripts, it's often hard to mail merge pdf documents correctly. Use our merge pdf tool to combine the results of your scripts easily.",
      },
      {
        question: "How to merge PDF files in Windows vs Linux?",
        answer: "While the methods differ locally, our tool provides a unified way to merge pdf online regardless of the OS. Whether you need to merge pdf files in windows or Linux, combine pdf files seamlessly here.",
      },
    ],
    jsonLd: {
      name: "Merge PDF Linux Guide",
      url: `${SITE.baseUrl}/merge-pdf-linux`,
      description: "Step-by-step guide to merge PDF files on Linux.",
    },
  },

  "/resize-pdf-kb": {
    title: "Resize PDF in KB Online (SSC, UPSC & Passport Form Fixer)",
    description:
      "Resize your PDF to specific KB limits (20KB, 50KB, 100KB, 200KB) online for free. Best for Indian govt portals and exam forms. No uploads, stays private.",
    canonical: `${SITE.baseUrl}/resize-pdf-kb`,
    jsonLd: {
      name: "Resize PDF in KB",
      url: `${SITE.baseUrl}/resize-pdf-kb`,
      description: "Resize PDF to specific KB limits for Indian govt portal uploads.",
    },
  },

  "/resize-pdf-mb": {
    title: "Resize PDF in MB Online Free | Reduce Heavy Document Size",
    description:
      "Resize PDF in MB online for free. Shrink large 10MB+ files to 1MB, 2MB, or 5MB for email and corporate portals. Fast browser processing without uploads.",
    canonical: `${SITE.baseUrl}/resize-pdf-mb`,
    jsonLd: {
      name: "Resize PDF in MB",
      url: `${SITE.baseUrl}/resize-pdf-mb`,
      description: "Resize PDF to specific MB limits securely and for free.",
    },
  },

  "/remove-metadata-from-pdf": {
    title: "Remove Metadata from PDF Online (Free, Secure & Private)",
    description:
      "Clear author, keywords, and hidden data from your PDF/Resume online. Best for job applications and privacy. 100% private browser processing.",
    canonical: `${SITE.baseUrl}/remove-metadata-from-pdf`,
    faqs: [
      {
        question: "What does removing metadata from PDF mean?",
        answer:
          "It means deleting hidden properties like author name, creator software, and timestamps. This is critical for privacy before uploading resumes to job sites.",
      },
      {
        question: "Is this tool safe for clearing my Resume data?",
        answer:
          "Yes. Your Resume is never uploaded to any server. All metadata scrubbing happens locally in your browser session for 100% privacy.",
      },
    ],
    jsonLd: {
      name: "Remove Metadata from PDF",
      url: `${SITE.baseUrl}/remove-metadata-from-pdf`,
      description: "Remove hidden metadata from PDF online securely without uploads.",
    },
  },

  "/resize-pdf-200kb": {
    title: "Resize PDF to 200KB Online - Reduce File Size (Free & Secure)",
    description: "Resize PDF to 200KB online for free. Reduce PDF file size to under 200KB for SSC, UPSC, and government form uploads. Privacy-first, no quality loss.",
    canonical: `${SITE.baseUrl}/resize-pdf-200kb`,
    faqs: [
      {
        question: "How to resize PDF to 200KB?",
        answer: "Upload your file, select '200KB' as the target size, and our tool will automatically resize the PDF while maintaining the best possible quality.",
      },
      {
        question: "What is the difference between resize and compress?",
        answer: "Technically they are similar, but 'resizing' often refers to changing dimensions or strict byte-limit targets (like 200KB), while compression focuses on general size reduction.",
      },
      {
        question: "Can I resize PDF without losing quality?",
        answer: "Yes, our smart engine removes unnecessary metadata and optimizes fonts so the visual quality remains high even at lower file sizes.",
      },
    ],
    jsonLd: {
      name: "Resize PDF to 200KB",
      url: `${SITE.baseUrl}/resize-pdf-200kb`,
      description: "Resize and reduce PDF file size to specifically under 200KB for government portals.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Windows, Mac, Linux, Android, iOS",
    },
  },

  "/scanned-pdf-compressor": {
    title: "Scanned PDF Compressor Online | Reduce Marksheet Size Free",
    description:
      "Compress scanned marksheets, certificates, and ID cards online safely. Reduce file size while keeping text sharp and readable for university admissions.",
    canonical: `${SITE.baseUrl}/scanned-pdf-compressor`,
    jsonLd: {
      name: "Scanned PDF Compressor",
      url: `${SITE.baseUrl}/scanned-pdf-compressor`,
      description:
        "Compress scanned PDF marksheets and certificates while keeping text readable.",
    },
  },

  "/scanned-pdf-to-200kb": {
    title: "Compress Scanned PDF to 200KB Online (Marksheet & Certs Fix)",
    description:
      "Compress scanned marksheets and caste certificates to under 200KB for scholarship and govt jobs. Maintain readability without ruining quality.",
    canonical: `${SITE.baseUrl}/scanned-pdf-to-200kb`,
    jsonLd: {
      name: "Compress Scanned PDF to 200KB",
      url: `${SITE.baseUrl}/scanned-pdf-to-200kb`,
      description: "Compress scanned PDFs to 200KB for scholarship portal uploads.",
    },
  },

  // ✅ Static pages SEO (new)
  "/about": {
    title: "About Us - CompressPDFto200KB.online",
    description:
      "Learn more about CompressPDFto200KB.online — a free PDF compression website built to help users reduce PDF file size for uploads and government portals.",
    canonical: `${SITE.baseUrl}/about`,
    jsonLd: {
      name: "About CompressPDFto200KB.online",
      url: `${SITE.baseUrl}/about`,
      description: "About page for CompressPDFto200KB.online.",
    },
  },

  "/contact": {
    title: "Contact Us - CompressPDFto200KB.online",
    description:
      "Get in touch with CompressPDFto200KB.online for feedback, support, or suggestions related to PDF compression tools and upload fixes.",
    canonical: `${SITE.baseUrl}/contact`,
    jsonLd: {
      name: "Contact CompressPDFto200KB.online",
      url: `${SITE.baseUrl}/contact`,
      description: "Contact page for CompressPDFto200KB.online.",
    },
  },

  "/privacy-policy": {
    title: "Privacy Policy - CompressPDFto200KB.online",
    description:
      "Read how CompressPDFto200KB.online protects your privacy. Your PDF files are processed in your browser and never uploaded to our servers.",
    canonical: `${SITE.baseUrl}/privacy-policy`,
    jsonLd: {
      name: "Privacy Policy",
      url: `${SITE.baseUrl}/privacy-policy`,
      description: "Privacy policy for CompressPDFto200KB.online.",
    },
  },

  "/terms-conditions": {
    title: "Terms & Conditions - CompressPDFto200KB.online",
    description:
      "Terms and conditions for using CompressPDFto200KB.online PDF tools and guides.",
    canonical: `${SITE.baseUrl}/terms-conditions`,
    jsonLd: {
      name: "Terms & Conditions",
      url: `${SITE.baseUrl}/terms-conditions`,
      description: "Terms & conditions for CompressPDFto200KB.online.",
    },
  },

  "/disclaimer": {
    title: "Disclaimer - CompressPDFto200KB.online",
    description:
      "Disclaimer for CompressPDFto200KB.online. We provide tools and guides for PDF compression and portal upload help.",
    canonical: `${SITE.baseUrl}/disclaimer`,
    jsonLd: {
      name: "Disclaimer",
      url: `${SITE.baseUrl}/disclaimer`,
      description: "Disclaimer for CompressPDFto200KB.online.",
    },
  },

  "/sitemap": {
    title: "Sitemap - CompressPDFto200KB.online",
    description:
      "HTML sitemap of CompressPDFto200KB.online. Find all PDF tools and blog posts in one place.",
    canonical: `${SITE.baseUrl}/sitemap`,
    jsonLd: {
      name: "Sitemap",
      url: `${SITE.baseUrl}/sitemap`,
      description: "HTML sitemap for CompressPDFto200KB.online.",
    },
  },

  "/tools": {
    title: "PDF Tools – Compress, Reduce Size, Remove Metadata | Free",
    description:
      "All PDF tools in one place: compress PDF, compress to 200KB or 100KB, scanned PDF compressor, remove metadata. Free, private, browser-based.",
    canonical: `${SITE.baseUrl}/tools`,
    jsonLd: {
      name: "PDF Tools",
      url: `${SITE.baseUrl}/tools`,
      description: "Free PDF compression and metadata removal tools.",
    },
  },

  // ✅ Blog index and posts (SEO only)
  "/blog": {
    title: "Blog - CompressPDFto200KB.online",
    description:
      "Read guides on compressing PDFs for government portals, SSC forms, UPSC documents, passport uploads, scholarships and more.",
    canonical: `${SITE.baseUrl}/blog`,
    jsonLd: {
      name: "CompressPDF Blog",
      url: `${SITE.baseUrl}/blog`,
      description: "Blog with PDF compression and upload fix guides.",
    },
  },

  "/blog/govt-form-pdf-reject-fix-compress-200kb": {
    title: "Govt Form PDF Rejected? Fix Upload Issue (Compress PDF to 200KB)",
    description:
      "Fix government portal PDF upload rejected issue due to large file size. Learn how to compress PDF to 200KB easily.",
    canonical: `${SITE.baseUrl}/blog/govt-form-pdf-reject-fix-compress-200kb`,
    jsonLd: {
      name: "Govt Form PDF Rejected Fix",
      url: `${SITE.baseUrl}/blog/govt-form-pdf-reject-fix-compress-200kb`,
      description: "Fix PDF rejected errors on government portals.",
    },
  },

  "/blog/ssc-form-pdf-size-limit-200kb": {
    title: "SSC Form PDF Size Limit 200KB? Compress PDF to 200KB (Fix)",
    description:
      "SSC form PDF upload error due to size limit? Compress PDF to 200KB with step-by-step method for mobile and PC.",
    canonical: `${SITE.baseUrl}/blog/ssc-form-pdf-size-limit-200kb`,
    jsonLd: {
      name: "SSC PDF Size Limit Fix",
      url: `${SITE.baseUrl}/blog/ssc-form-pdf-size-limit-200kb`,
      description: "Guide to compress PDF to 200KB for SSC portal uploads.",
    },
  },

  "/blog/upsc-documents-upload-guide-pdf-compress": {
    title: "UPSC Documents Upload Guide: Compress PDF Size for Portal",
    description:
      "UPSC document upload guide: how to compress PDF size for UPSC portals without losing quality.",
    canonical: `${SITE.baseUrl}/blog/upsc-documents-upload-guide-pdf-compress`,
    jsonLd: {
      name: "UPSC PDF Upload Guide",
      url: `${SITE.baseUrl}/blog/upsc-documents-upload-guide-pdf-compress`,
      description: "UPSC documents upload guide with PDF compression tips.",
    },
  },

  "/blog/job-portal-resume-upload-problem-pdf-size-reduce": {
    title: "Resume Upload Failed? Reduce PDF Size for Job Portal (Fix)",
    description:
      "Resume PDF too large? Learn how to reduce PDF size for job portals quickly while keeping the resume readable.",
    canonical: `${SITE.baseUrl}/blog/job-portal-resume-upload-problem-pdf-size-reduce`,
    jsonLd: {
      name: "Resume Upload Problem Fix",
      url: `${SITE.baseUrl}/blog/job-portal-resume-upload-problem-pdf-size-reduce`,
      description:
        "Fix job portal resume upload problems by reducing PDF size.",
    },
  },

  "/blog/passport-portal-200kb-limit-pdf-upload-error-fix": {
    title: "Passport Portal PDF Upload Error? Fix 200KB Limit Issue",
    description:
      "Passport portal PDF upload error due to 200KB limit? Learn how to compress PDF size and upload successfully.",
    canonical: `${SITE.baseUrl}/blog/passport-portal-200kb-limit-pdf-upload-error-fix`,
    jsonLd: {
      name: "Passport PDF Upload Error Fix",
      url: `${SITE.baseUrl}/blog/passport-portal-200kb-limit-pdf-upload-error-fix`,
      description:
        "Fix passport portal PDF upload error and 200KB limit issues.",
    },
  },

  "/blog/mobile-se-pdf-compress-kaise-kare-without-app": {
    title: "Mobile Se PDF Compress Kaise Kare (Without App) - Guide",
    description:
      "Mobile se PDF compress kaise kare bina app? Step-by-step guide to reduce PDF size for portal uploads in browser.",
    canonical: `${SITE.baseUrl}/blog/mobile-se-pdf-compress-kaise-kare-without-app`,
    jsonLd: {
      name: "Mobile PDF Compress Guide",
      url: `${SITE.baseUrl}/blog/mobile-se-pdf-compress-kaise-kare-without-app`,
      description: "Guide to compress PDF on mobile without app.",
    },
  },

  "/blog/visa-kyc-pdf-upload-fail-size-reduce-solution": {
    title: "Visa/KYC PDF Upload Failed? Reduce PDF Size (Solution)",
    description:
      "Visa or KYC PDF upload failed due to large file size? Learn how to reduce PDF size and upload successfully.",
    canonical: `${SITE.baseUrl}/blog/visa-kyc-pdf-upload-fail-size-reduce-solution`,
    jsonLd: {
      name: "Visa KYC PDF Upload Fail Solution",
      url: `${SITE.baseUrl}/blog/visa-kyc-pdf-upload-fail-size-reduce-solution`,
      description: "Solution for visa/KYC PDF upload failure due to size.",
    },
  },

  "/blog/scanned-pdf-heavy-size-reduce-complete-guide": {
    title: "Scanned PDF Too Large? Reduce Scanned PDF Size (Complete Guide)",
    description:
      "Scanned PDF file size too large? Complete guide to reduce scanned PDF size without ruining readability for uploads.",
    canonical: `${SITE.baseUrl}/blog/scanned-pdf-heavy-size-reduce-complete-guide`,
    jsonLd: {
      name: "Scanned PDF Too Large Guide",
      url: `${SITE.baseUrl}/blog/scanned-pdf-heavy-size-reduce-complete-guide`,
      description: "Complete guide to reduce scanned PDF size for uploads.",
    },
  },

  "/blog/scholarship-form-pdf-upload-guide-200kb-document": {
    title: "Scholarship Form PDF Upload Guide (Compress to 200KB Document)",
    description:
      "Scholarship portal PDF upload guide. Learn how to compress PDF document to 200KB and fix upload errors.",
    canonical: `${SITE.baseUrl}/blog/scholarship-form-pdf-upload-guide-200kb-document`,
    jsonLd: {
      name: "Scholarship PDF Upload Guide",
      url: `${SITE.baseUrl}/blog/scholarship-form-pdf-upload-guide-200kb-document`,
      description: "Guide to compress PDF to 200KB for scholarship forms.",
    },
  },

  "/blog/email-me-pdf-attach-nahi-ho-rahi-size-reduce": {
    title: "Email Me PDF Attach Nahi Ho Rahi? PDF Size Reduce Kaise Kare",
    description:
      "Email me PDF attach nahi ho rahi due to large file size? Learn how to reduce PDF size quickly and send attachments easily.",
    canonical: `${SITE.baseUrl}/blog/email-me-pdf-attach-nahi-ho-rahi-size-reduce`,
    jsonLd: {
      name: "Email PDF Attachment Problem Fix",
      url: `${SITE.baseUrl}/blog/email-me-pdf-attach-nahi-ho-rahi-size-reduce`,
      description: "Fix PDF attachment issue in email by reducing file size.",
    },
  },

  "/blog/how-to-compress-a-pdf-on-mac": {
    title: "How to Compress a PDF on Mac (Reduce PDF Size on macOS)",
    description:
      "Learn how to compress a PDF on Mac. Step-by-step methods to reduce PDF size on macOS without losing readability.",
    canonical: `${SITE.baseUrl}/blog/how-to-compress-a-pdf-on-mac`,
    jsonLd: {
      name: "Compress PDF on Mac",
      url: `${SITE.baseUrl}/blog/how-to-compress-a-pdf-on-mac`,
      description: "Guide to compress PDF on Mac and reduce PDF size.",
    },
  },

  // ✅ RUSSIAN SEO START
  "/ru/szhat-pdf": {
    title: "Сжать PDF Онлайн Бесплатно | Уменьшить размер PDF",
    description: "Сжать PDF онлайн бесплатно. Уменьшить размер PDF файла без потери качества. Быстро, безопасно, без регистрации. Работает в браузере.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf`,
    jsonLd: {
      name: "Сжать PDF Онлайн",
      url: `${SITE.baseUrl}/ru/szhat-pdf`,
      description: "Бесплатный онлайн инструмент для сжатия PDF файлов.",
    },
  },

  "/ru/szhat-pdf-do-50kb": {
    title: "Сжать PDF до 50 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 50 кб онлайн бесплатно. Идеально для строгих лимитов при загрузке документов и подписей.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-50kb`,
    jsonLd: {
      name: "Сжать PDF до 50 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-50kb`,
      description: "Уменьшить размер PDF до 50 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-100kb": {
    title: "Сжать PDF до 100 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 100 кб онлайн. Подходит для резюме, анкет и заявлений. Быстрая обработка в браузере.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-100kb`,
    jsonLd: {
      name: "Сжать PDF до 100 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-100kb`,
      description: "Уменьшить размер PDF до 100 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-150kb": {
    title: "Сжать PDF до 150 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 150 кб онлайн бесплатно. Оптимально для порталов госуслуг, вузов и паспортных столов.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-150kb`,
    jsonLd: {
      name: "Сжать PDF до 150 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-150kb`,
      description: "Уменьшить размер PDF до 150 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-200kb": {
    title: "Сжать PDF до 200 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 200 кб онлайн. Самый популярный формат для Госуслуг, ФНС и других государственных порталов.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-200kb`,
    jsonLd: {
      name: "Сжать PDF до 200 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-200kb`,
      description: "Уменьшить размер PDF до 200 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-500kb": {
    title: "Сжать PDF до 500 КБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 500 кб онлайн. Отлично подходит для отправки по почте, портфолио и презентаций.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-500kb`,
    jsonLd: {
      name: "Сжать PDF до 500 КБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-500kb`,
      description: "Уменьшить размер PDF до 500 КБ онлайн.",
    },
  },

  "/ru/szhat-pdf-do-1mb": {
    title: "Сжать PDF до 1 МБ Онлайн | Уменьшить размер PDF бесплатно",
    description: "Сжать PDF до 1 МБ онлайн. Для больших договоров, книг и отчетов. Сохраняет высокое качество.",
    canonical: `${SITE.baseUrl}/ru/szhat-pdf-do-1mb`,
    jsonLd: {
      name: "Сжать PDF до 1 МБ",
      url: `${SITE.baseUrl}/ru/szhat-pdf-do-1mb`,
      description: "Уменьшить размер PDF до 1 МБ онлайн.",
    },
  },

  "/ru/umenshit-razmer-pdf-do-500kb": {
    title: "Уменьшить размер PDF файла до 500 КБ Онлайн (Бесплатно)",
    description: "Бесплатно уменьшить размер PDF до 500 КБ. Быстрая оптимизация для отправки по email и загрузки на сайты.",
    canonical: `${SITE.baseUrl}/ru/umenshit-razmer-pdf-do-500kb`,
    jsonLd: {
      name: "Уменьшить размер PDF до 500 КБ",
      url: `${SITE.baseUrl}/ru/umenshit-razmer-pdf-do-500kb`,
      description: "Уменьшить размер PDF файла до 500 КБ онлайн.",
    },
  },

  "/ru/szhat-skanirovannyj-pdf": {
    title: "Сжать Сканированный PDF Онлайн | Уменьшить размер скана",
    description: "Сжать сканированный PDF онлайн. Умная оптимизация сканов документов, квитанций и рукописей без размытия текста.",
    canonical: `${SITE.baseUrl}/ru/szhat-skanirovannyj-pdf`,
    jsonLd: {
      name: "Сжать Сканированный PDF",
      url: `${SITE.baseUrl}/ru/szhat-skanirovannyj-pdf`,
      description: "Сжать сканированный PDF документ онлайн.",
    },
  },

  "/ru/szhat-skanirovannyj-pdf-do-200kb": {
    title: "Сжать Скан PDF до 200 КБ Онлайн | Уменьшить размер скана",
    description: "Сжать сканированный PDF до 200 КБ. Специальный алгоритм для паспортов, дипломов и справок. Проходит проверки на порталах.",
    canonical: `${SITE.baseUrl}/ru/szhat-skanirovannyj-pdf-do-200kb`,
    jsonLd: {
      name: "Сжать Скан PDF до 200 КБ",
      url: `${SITE.baseUrl}/ru/szhat-skanirovannyj-pdf-do-200kb`,
      description: "Сжать скан PDF до 200 КБ онлайн.",
    },
  },

  "/ru/udalit-metadannye-pdf": {
    title: "Удалить метаданные из PDF Онлайн (Очистить свойства файла)",
    description: "Удалить автора, дату создания и скрытые метаданные из PDF онлайн. Повысьте конфиденциальность перед отправкой документа.",
    canonical: `${SITE.baseUrl}/ru/udalit-metadannye-pdf`,
    jsonLd: {
      name: "Удалить метаданные PDF",
      url: `${SITE.baseUrl}/ru/udalit-metadannye-pdf`,
      description: "Очистить метаданные и скрытые свойства PDF файла.",
    },
  },

  "/ru/instrumenty": {
    title: "PDF Инструменты – Сжать, Уменьшить, Очистить | Бесплатно",
    description: "Все инструменты для работы с PDF: сжатие до 200кб, 100кб, удаление метаданных. Бесплатно, безопасно, в браузере.",
    canonical: `${SITE.baseUrl}/ru/instrumenty`,
    jsonLd: {
      name: "Инструменты PDF",
      url: `${SITE.baseUrl}/ru/instrumenty`,
      description: "Сборник бесплатных инструментов для работы с PDF.",
    },
  },
    
  "/ru/o-nas": {
    title: "О Нас - CompressPDFto200KB.online",
    description: "Узнайте больше о нашем сервисе. Мы помогаем студентам и специалистам бесплатно сжимать PDF документы для государственных порталов.",
    canonical: `${SITE.baseUrl}/ru/o-nas`,
    jsonLd: {
        name: "О Нас",
        url: `${SITE.baseUrl}/ru/o-nas`,
        description: "Информация о проекте CompressPDFto200KB.",
    },
  },

  "/ru/kontakty": {
    title: "Контакты - CompressPDFto200KB.online",
    description: "Свяжитесь с нами, если у вас есть вопросы или предложения по улучшению сервиса сжатия PDF.",
    canonical: `${SITE.baseUrl}/ru/kontakty`,
    jsonLd: {
        name: "Контакты",
        url: `${SITE.baseUrl}/ru/kontakty`,
        description: "Контактная информация CompressPDFto200KB.",
    },
  },

  "/ru/politika-konfidencialnosti": {
    title: "Политика Конфиденциальности - CompressPDFto200KB.online",
    description: "Мы уважаем вашу приватность. Ваши файлы обрабатываются локально в браузере и никогда не загружаются на наши серверы.",
    canonical: `${SITE.baseUrl}/ru/politika-konfidencialnosti`,
    jsonLd: {
        name: "Политика Конфиденциальности",
        url: `${SITE.baseUrl}/ru/politika-konfidencialnosti`,
        description: "Политика обработки данных пользователей.",
    },
  },

  "/ru/usloviya": {
    title: "Условия Использования - CompressPDFto200KB.online",
    description: "Правила использования наших бесплатных инструментов для работы с PDF.",
    canonical: `${SITE.baseUrl}/ru/usloviya`,
    jsonLd: {
        name: "Условия Использования",
        url: `${SITE.baseUrl}/ru/usloviya`,
        description: "Правила использования сервиса.",
    },
  },

  "/ru/otkaz-ot-otvetstvennosti": {
    title: "Отказ от Ответственности - CompressPDFto200KB.online",
    description: "Отказ от ответственности: мы предоставляем инструменты 'как есть' без гарантий для конкретных порталов.",
    canonical: `${SITE.baseUrl}/ru/otkaz-ot-otvetstvennosti`,
    jsonLd: {
        name: "Отказ от Ответственности",
        url: `${SITE.baseUrl}/ru/otkaz-ot-otvetstvennosti`,
        description: "Информация об ограничении ответственности.",
    },
  },
  // Alias for typo in some files
  "/ru/otkaz-ot-otvetsvennosti": {
    title: "Отказ от Ответственности - CompressPDFto200KB.online",
    description: "Отказ от ответственности: мы предоставляем инструменты 'как есть' без гарантий для конкретных порталов.",
    canonical: `${SITE.baseUrl}/ru/otkaz-ot-otvetstvennosti`,
  },
  "/ru/usloviya-ispolzovaniya": {
    title: "Условия Использования - CompressPDFto200KB.online",
    description: "Правила использования наших бесплатных инструментов для работы с PDF.",
    canonical: `${SITE.baseUrl}/ru/usloviya`,
  },
  "/flipkart-label-cropper": {
    title: "Flipkart Label Cropper & Resizer (Thermal 4x6) - Free Tool",
    description: "Crop Flipkart shipping labels for 4x6 Thermal Printer online. Remove extra white space from A4 invoice labels. Free, fast & secure browser-based tool.",
    canonical: `${SITE.baseUrl}/flipkart-label-cropper`,
    jsonLd: {
      name: "Flipkart Label Cropper",
      url: `${SITE.baseUrl}/flipkart-label-cropper`,
      description: "Crop and resize Flipkart shipping labels for thermal printers.",
    },
  },

  "/meesho-label-cropper": {
    title: "Meesho Label Cropper - Resize for Thermal Printer (Online)",
    description: "Resize and crop Meesho shipping labels for 4x6 Thermal Printer. Convert A4 labels to thermal size instantly without quality loss. Free tool.",
    canonical: `${SITE.baseUrl}/meesho-label-cropper`,
    jsonLd: {
      name: "Meesho Label Cropper",
      url: `${SITE.baseUrl}/meesho-label-cropper`,
      description: "Resize and crop Meesho labels for thermal printers.",
    },
  },
};

/**
 * Global safe fallback for page SEO.
 * Prevents "Cannot read properties of undefined" crashes.
 */
export const getPageSeo = (path: string): PageSEO => {
  // Normalize path (remove trailing slash)
  const key = path === "/" ? "/" : path.replace(/\/$/, "");
  
  if (PAGES_SEO[key]) {
    return PAGES_SEO[key];
  }

  // Fallback to home or default
  return PAGES_SEO["/"] || DEFAULT_SEO;
};

export const buildWebAppJsonLd = (page: PageSEO) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: page.jsonLd?.name ?? "Compress PDF Tool",
  url: page.jsonLd?.url ?? SITE.baseUrl,
  description: page.jsonLd?.description ?? page.description,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
});

export const buildFAQJsonLd = (faqs: FAQItem[] = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
});
