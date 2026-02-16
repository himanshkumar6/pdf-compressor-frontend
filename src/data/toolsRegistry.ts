import {
  Minimize2,
  FileType,
  Layers,
  ShieldCheck,
  Scissors,
  Zap,
  ShieldAlert,
  ImageIcon,
  FileDown,
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  es?: {
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
      description:
        "Редактируйте, объединяйте, разделяйте и меняйте порядок страниц PDF.",
    },
  },
  {
    name: "Security & Utility" as ToolCategory,
    description: "Private tools for metadata and document security.",
    icon: ShieldAlert,
    ru: {
      name: "Безопасность и утилиты",
      description:
        "Приватные инструменты для метаданных и безопасности документов.",
    },
  },
];

export const TOOLS_REGISTRY: Tool[] = [
  // 🟢 COMPRESS & RESIZE
  {
    id: "compress-pdf-to-200kb",
    title: "Compress PDF to 200KB",
    slug: "/compress-pdf-to-200kb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription: "Directly target under 200KB for official portals.",
    metaTitle: "Compress PDF to 200KB Online | Free Tool for Govt Forms",
    metaDescription:
      "Compress PDF to 200KB online for free. Ideal for SSC, UPSC, and passport portal uploads. Reduce PDF size to exactly under 200 KB safely.",
    isActive: true,
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
    metaDescription:
      "Convert PDF pages to high-resolution JPG images online for free. Extract images or convert whole document to pictures securely in your browser.",
    isActive: true,
  },

  {
    id: "compress-pdf-50kb",
    title: "Compress PDF to 50KB",
    slug: "/compress-pdf-to-50kb",
    category: "Compress & Resize",
    icon: Zap,
    shortDescription:
      "Strictly resize PDF to 50kb, 40kb or 20kb for SSC, UPSC & Govt Exams.",
    metaTitle: "Compress PDF to 50kb Online - Resize for SSC/UPSC Forms",
    metaDescription:
      "Free tool to compress PDF to 50kb online. Perfect for resizing Scanned Signatures, Passport Photos, and Documents for SSC, UPSC, and IBPS forms.",
    isActive: true,
  },

  {
    id: "jpg-to-pdf",
    title: "JPG to PDF",
    slug: "/jpg-to-pdf",
    category: "Convert",
    icon: ImageIcon,
    shortDescription: "Convert images to PDF documents instantly.",
    metaTitle: "JPG to PDF Converter Online | Convert Images to PDF Free",
    metaDescription:
      "Convert JPG, PNG, and other images to PDF documents online for free. Combine multiple photos into a single PDF file instantly in your browser.",
    isActive: true,
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
    metaDescription:
      "Edit PDF files online for free. Add text, images, and shapes to your documents. Secure, private, and works directly in your browser without uploads.",
    isActive: true,
  },
  {
    id: "merge-pdf",
    title: "Merge PDF",
    slug: "/merge-pdf",
    category: "PDF Editing Tools",
    icon: Layers,
    shortDescription: "Combine multiple PDFs into one single file.",
    metaTitle: "Merge PDF Online | Combine Multiple PDF Files Free",
    metaDescription:
      "Combine multiple PDF files into a single document online. Drag and drop to rearrange pages and merge certificates or reports securely.",
    isActive: true,
  },
  {
    id: "split-pdf",
    title: "Split PDF",
    slug: "/split-pdf",
    category: "PDF Editing Tools",
    icon: Scissors,
    shortDescription: "Extract specific pages from your document.",
    metaTitle: "Split PDF Online | Extract Pages from PDF for Free",
    metaDescription:
      "Split PDF pages or extract specific sections from your document. Safe, fast, and entirely browser-based with a visual page selector.",
    isActive: true,
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
    metaDescription:
      "Clear PDF metadata like author, creator, and creation date online. Enhance your privacy by removing hidden properties before sharing documents.",
    isActive: true,
  },
  {
    id: "compress-100kb",
    title: "Compress to 100KB",
    slug: "/compress-pdf-to-100kb",
    category: "Compress & Resize",
    icon: FileDown,
    shortDescription:
      "Reduce your PDF file size to 100KB for government and scholarship uploads.",
    metaTitle: "Compress PDF to 100KB Online (Free & Secure) | No Quality Loss",
    metaDescription:
      "Compress PDF to 100KB online for free. Perfect for marksheets, scholarship forms, and government portals. Secure browser-based compression with no uploads.",
    isActive: true,
  },
];
