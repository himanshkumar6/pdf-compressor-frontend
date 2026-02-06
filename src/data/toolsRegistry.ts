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
    isActive: true,
    isNew: true,
    ru: {
      title: "Meesho Кроппер",
      slug: "/ru/meesho-label-cropper",
      shortDescription: "Обрезка этикеток Meesho.",
    },
  },
];
