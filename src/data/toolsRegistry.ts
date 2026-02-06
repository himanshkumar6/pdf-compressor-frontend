import {
  Minimize2,
  FileType,
  Layers,
  ShieldCheck,
  Scissors,
  Zap,
  Smartphone,
  ShieldAlert,
  ImageIcon,
  ArrowUpDown,
} from "lucide-react";

export type ToolCategory =
  | "Compress & Resize"
  | "Convert"
  | "PDF Editing Tools"
  | "Security & Utility";

export interface Tool {
  id: string;
  title: string;
  slug: string;
  category: ToolCategory;
  icon: any;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  isActive: boolean;
  isNew?: boolean;
  ru?: {
    title: string;
    slug: string;
    shortDescription: string;
  };
}

export const TOOL_CATEGORIES_INFO = [
  {
    name: "Compress & Resize" as ToolCategory,
    description: "Reduce file size for portals, emails, and storage.",
    icon: Minimize2,
    ru: {
      name: "Сжатие и изменение размера",
      description: "Уменьшите размер файла для порталов, почты и хранения.",
    },
  },
  {
    name: "Convert" as ToolCategory,
    description: "Transform PDFs to images and other formats.",
    icon: FileType,
    ru: {
      name: "Конвертация",
      description: "Преобразуйте PDF в изображения и другие форматы.",
    },
  },
  {
    name: "PDF Editing Tools" as ToolCategory,
    description: "Edit, Merge, split, and rearrange PDF pages.",
    icon: Layers,
    ru: {
      name: "Инструменты редактирования PDF",
      description: "Редактируйте, объединяйте, разделяйте и меняйте порядок страниц PDF.",
    },
  },
  {
    name: "Security & Utility" as ToolCategory,
    description: "Private tools for metadata and document security.",
    icon: ShieldAlert,
    ru: {
      name: "Безопасность и утилиты",
      description: "Приватные инструменты для метаданных и безопасности документов.",
    },
  },
];

export const TOOLS_REGISTRY: Tool[] = [
  // 🟢 COMPRESS & RESIZE
  {
    id: "compress-pdf",
    title: "Compress PDF",
    slug: "/compress-pdf",
    category: "Compress & Resize",
    icon: Minimize2,
    shortDescription: "Smart optimization for balanced quality & size.",
    metaTitle: "Compress PDF Online | Free PDF Compressor Tool",
    metaDescription: "Compress PDF files online for free. Reduce file size instantly while maintaining quality. Safe, private, and works in your browser.",
    isActive: true,
    ru: {
      title: "Сжать PDF",
      slug: "/ru/szhat-pdf",
      shortDescription: "Быстрое сжатие для любых целей.",
    },
  },
  {
    id: "compress-pdf-to-200kb",
    title: "Compress to 200KB",
    slug: "/compress-pdf-to-200kb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription: "Directly target under 200KB for official portals.",
    metaTitle: "Compress PDF to 200KB Online | Free Tool for Govt Forms",
    metaDescription: "Compress PDF to 200KB online for free. Ideal for SSC, UPSC, and passport portal uploads. Reduce PDF size to exactly under 200 KB safely.",
    isActive: true,
    ru: {
      title: "Сжать до 200 КБ",
      slug: "/ru/szhat-pdf-do-200kb",
      shortDescription: "Стандарт для Госуслуг и порталов.",
    },
  },
  {
    id: "compress-pdf-to-100kb",
    title: "Compress to 100KB",
    slug: "/compress-pdf-to-100kb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription: "Strict compression for 100KB limit forms.",
    metaTitle: "Compress PDF to 100KB Online | Free Tool for Resumes",
    metaDescription: "Reduce PDF size to 100KB online for free. Perfect for job portals and scholarship forms requiring a strict 100 KB limit document.",
    isActive: true,
    ru: {
      title: "Сжать до 100 КБ",
      slug: "/ru/szhat-pdf-do-100kb",
      shortDescription: "Для резюме и анкет.",
    },
  },
  {
    id: "compress-pdf-to-50kb",
    title: "Compress to 50KB",
    slug: "/compress-pdf-to-50kb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription: "Ultra-small size for tight upload restrictions.",
    metaTitle: "Compress PDF to 50KB Online | Free Ultra-Small Size Tool",
    metaDescription: "Compress PDF to 50KB online. Best for uploading signed documents and small certificates with tight size restrictions on online portals.",
    isActive: true,
    ru: {
      title: "Сжать до 50 КБ",
      slug: "/ru/szhat-pdf-do-50kb",
      shortDescription: "Для самых строгих лимитов.",
    },
  },
  {
    id: "compress-pdf-to-150kb",
    title: "Compress to 150KB",
    slug: "/compress-pdf-to-150kb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription: "Balanced compression for 150KB limits.",
    metaTitle: "Compress PDF to 150KB Online | Free Tool for Web Forms",
    metaDescription: "Reduce PDF size to 150KB online. Ideal for university admissions and email attachments requiring a file size under 150 KB.",
    isActive: true,
    ru: {
      title: "Сжать до 150 КБ",
      slug: "/ru/szhat-pdf-do-150kb",
      shortDescription: "Для веб-порталов и почты.",
    },
  },
  {
    id: "compress-pdf-to-500kb",
    title: "Compress to 500KB",
    slug: "/compress-pdf-to-500kb",
    category: "Compress & Resize",
    icon: Minimize2,
    shortDescription: "Ideal for email attachments and resumes.",
    metaTitle: "Compress PDF to 500KB Online | Quality Document Reducer",
    metaDescription: "Reduce PDF size to 500KB online. Perfect for high-quality portfolios and multipage documents while staying under common email limits.",
    isActive: true,
    ru: {
      title: "Сжать до 500 КБ",
      slug: "/ru/szhat-pdf-do-500kb",
      shortDescription: "Для портфолио и документов.",
    },
  },
  {
    id: "compress-pdf-to-1mb",
    title: "Compress to 1MB",
    slug: "/compress-pdf-to-1mb",
    category: "Compress & Resize",
    icon: Minimize2,
    shortDescription: "Reduce large PDFs to under 1MB easily.",
    metaTitle: "Compress PDF to 1MB Online | Reduce Large PDF Files",
    metaDescription: "Compress large PDF files to 1MB or less online. Maintain document integrity for official reports and books while reducing storage space.",
    isActive: true,
    ru: {
      title: "Сжать до 1 МБ",
      slug: "/ru/szhat-pdf-do-1mb",
      shortDescription: "Для больших файлов.",
    },
  },
  {
    id: "reduce-pdf-size-to-500kb",
    title: "Reduce Size to 500KB",
    slug: "/reduce-pdf-size-to-500kb",
    category: "Compress & Resize",
    icon: ArrowUpDown,
    shortDescription: "Quick reduction to 500KB for common portals.",
    metaTitle: "Reduce PDF Size to 500KB Online | Free Document Reducer",
    metaDescription: "Quickly reduce your PDF file size to 500KB online. Perfect for email attachments and portals requiring documents to be under 500 KB limit.",
    isActive: true,
    ru: {
      title: "Уменьшить размер",
      slug: "/ru/umenshit-razmer-pdf-do-500kb",
      shortDescription: "Оптимизация файла без потери качества.",
    },
  },
  {
    id: "resize-pdf-kb",
    title: "Resize PDF in KB",
    slug: "/resize-pdf-kb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription: "Custom target size in KB for any form.",
    metaTitle: "Resize PDF in KB Online | Set Custom Target PDF Size",
    metaDescription: "Specify a custom target size in KB for your PDF. Perfect for strict government portals (SSC, UPSC) where you need exactly 20KB, 50KB or 100KB.",
    isActive: true,
    isNew: true,
    ru: {
      title: "Изменить размер в КБ",
      slug: "/ru/izmenit-razmer-pdf-kb",
      shortDescription: "Задайте точный размер в КБ для любых форм.",
    },
  },
  {
    id: "resize-pdf-200kb",
    title: "Resize PDF to 200KB",
    slug: "/resize-pdf-200kb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription: "Resize PDF file size to 200KB instantly.",
    metaTitle: "Resize PDF to 200KB Online | Quickly Set PDF Size Limit",
    metaDescription: "Resize your PDF file to exactly 200KB online for free. This tool is designed for students applying for SSC, UPSC, and other government jobs.",
    isActive: true,
    isNew: true,
    ru: {
      title: "Размер PDF 200 КБ",
      slug: "/ru/razmer-pdf-200kb",
      shortDescription: "Измените размер PDF до 200 КБ.",
    },
  },
  {
    id: "resize-pdf-mb",
    title: "Resize PDF in MB",
    slug: "/resize-pdf-mb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription: "Custom target size in MB for large docs.",
    metaTitle: "Resize PDF in MB Online | Set Target File Size in MB",
    metaDescription: "Reduce large PDF files to a specific size in MB (1MB, 2MB, 5MB). Ideal for email attachments and cloud storage optimization.",
    isActive: true,
    isNew: true,
    ru: {
      title: "Изменить размер в МБ",
      slug: "/ru/izmenit-razmer-pdf-mb",
      shortDescription: "Уменьшите тяжелые PDF до нужного размера в МБ.",
    },
  },
  {
    id: "scanned-pdf-compressor",
    title: "Scanned PDF Compressor",
    slug: "/scanned-pdf-compressor",
    category: "Compress & Resize",
    icon: Smartphone,
    shortDescription: "Optimize scans without losing text clarity.",
    metaTitle: "Scanned PDF Compressor Online | Reduce Scan File Size",
    metaDescription: "Compress scanned PDF documents without losing text clarity. Optimized for passports, IDs, and certificates captured via mobile or scanner.",
    isActive: true,
    ru: {
      title: "Сжать Скан PDF",
      slug: "/ru/szhat-skanirovannyj-pdf",
      shortDescription: "Для сканированных документов.",
    },
  },
  {
    id: "scanned-pdf-to-200kb",
    title: "Scanned PDF to 200KB",
    slug: "/scanned-pdf-to-200kb",
    category: "Compress & Resize",
    icon: Smartphone,
    shortDescription: "Target 200KB specifically for scanned IDs.",
    metaTitle: "Scanned PDF to 200KB Online | High Quality Scan Reducer",
    metaDescription: "Compress scanned PDF files to 200KB online. Specially optimized for scanned certificates, marksheets, and IDs for seamless online uploads.",
    isActive: true,
    ru: {
      title: "Сжать скан до 200 КБ",
      slug: "/ru/szhat-skanirovannyj-pdf-do-200kb",
      shortDescription: "Стандарт для сканов на порталах.",
    },
  },

  // 🟢 CONVERT
  {
    id: "pdf-to-jpg",
    title: "PDF to JPG",
    slug: "/pdf-to-jpg",
    category: "Convert",
    icon: ImageIcon,
    shortDescription: "Convert PDF pages into high-quality JPGs.",
    metaTitle: "PDF to JPG Converter Online | High Quality (Free)",
    metaDescription: "Convert PDF pages to high-resolution JPG images online for free. Extract images or convert whole document to pictures securely in your browser.",
    isActive: true,
    isNew: true,
    ru: {
      title: "PDF в JPG",
      slug: "/ru/pdf-v-jpg",
      shortDescription: "Преобразуйте страницы PDF в четкие изображения JPG.",
    },
  },
  {
    id: "jpg-to-pdf",
    title: "JPG to PDF",
    slug: "/jpg-to-pdf",
    category: "Convert",
    icon: ImageIcon,
    shortDescription: "Convert images to PDF documents instantly.",
    metaTitle: "JPG to PDF Converter Online | Convert Images to PDF Free",
    metaDescription: "Convert JPG, PNG, and other images to PDF documents online for free. Combine multiple photos into a single PDF file instantly in your browser.",
    isActive: true,
    isNew: true,
    ru: {
      title: "JPG в PDF",
      slug: "/ru/jpg-v-pdf",
      shortDescription: "Преобразование изображений в PDF.",
    },
  },

  // 🟢 PDF EDITING TOOLS
  {
    id: "edit-pdf",
    title: "Edit PDF",
    slug: "/edit-pdf",
    category: "PDF Editing Tools",
    icon: Scissors,
    shortDescription: "Modify text, images, and pages in your PDF.",
    metaTitle: "Edit PDF Online | Free Online PDF Editor & Annotator",
    metaDescription: "Edit PDF files online for free. Add text, images, and shapes to your documents. Secure, private, and works directly in your browser without uploads.",
    isActive: true,
    isNew: true,
    ru: {
      title: "Редактировать PDF",
      slug: "/ru/redaktirovat-pdf",
      shortDescription: "Изменяйте текст, изображения и страницы в PDF.",
    },
  },
  {
    id: "merge-pdf",
    title: "Merge PDF",
    slug: "/merge-pdf",
    category: "PDF Editing Tools",
    icon: Layers,
    shortDescription: "Combine multiple PDFs into one single file.",
    metaTitle: "Merge PDF Online | Combine Multiple PDF Files Free",
    metaDescription: "Combine multiple PDF files into a single document online. Drag and drop to rearrange pages and merge certificates or reports securely.",
    isActive: true,
    isNew: true,
    ru: {
      title: "Объединить PDF",
      slug: "/ru/obedinit-pdf",
      shortDescription: "Склейте несколько PDF файлов в один.",
    },
  },
  {
    id: "split-pdf",
    title: "Split PDF",
    slug: "/split-pdf",
    category: "PDF Editing Tools",
    icon: Scissors,
    shortDescription: "Extract specific pages from your document.",
    metaTitle: "Split PDF Online | Extract Pages from PDF for Free",
    metaDescription: "Split PDF pages or extract specific sections from your document. Safe, fast, and entirely browser-based with a visual page selector.",
    isActive: true,
    isNew: true,
    ru: {
      title: "Разделить PDF",
      slug: "/ru/razdelit-pdf",
      shortDescription: "Извлеките нужные страницы из документа.",
    },
  },

  // 🟢 SECURITY & UTILITY
  {
    id: "remove-metadata",
    title: "Remove Metadata",
    slug: "/remove-metadata-from-pdf",
    category: "Security & Utility",
    icon: ShieldCheck,
    shortDescription: "Erase hidden author and creator information.",
    metaTitle: "Remove PDF Metadata Online | Clear PDF File Properties",
    metaDescription: "Clear PDF metadata like author, creator, and creation date online. Enhance your privacy by removing hidden properties before sharing documents.",
    isActive: true,
    ru: {
      title: "Удалить метаданные",
      slug: "/ru/udalit-metadannye-pdf",
      shortDescription: "Очистка скрытых данных.",
    },
  },
  {
    id: "flipkart-label-cropper",
    title: "Flipkart Label Crop",
    slug: "/flipkart-label-cropper",
    category: "Security & Utility",
    icon: Scissors,
    shortDescription: "Crop Flipkart shipping labels for thermal printers.",
    metaTitle: "Flipkart Label Cropper Online | Crop for 4x6 Thermal Print",
    metaDescription: "Flipkart sellers can crop shipping labels online for free. Optimized for 4x6 thermal printers to save paper and time. 100% private processing.",
    isActive: true,
    isNew: true,
    ru: {
      title: "Flipkart Кроппер",
      slug: "/ru/flipkart-label-cropper",
      shortDescription: "Обрезка этикеток Flipkart.",
    },
  },
  {
    id: "meesho-label-cropper",
    title: "Meesho Label Crop",
    slug: "/meesho-label-cropper",
    category: "Security & Utility",
    icon: Scissors,
    shortDescription: "Resize Meesho labels for 4x6 thermal printing.",
    metaTitle: "Meesho Label Cropper Online | Crop for 4x6 Thermal Print",
    metaDescription: "Crop Meesho shipping labels online for free. Specifically designed for 4x6 thermal printers. Resize and print labels instantly and securely.",
    isActive: true,
    isNew: true,
    ru: {
      title: "Meesho Кроппер",
      slug: "/ru/meesho-label-cropper",
      shortDescription: "Обрезка этикеток Meesho.",
    },
  },
];
