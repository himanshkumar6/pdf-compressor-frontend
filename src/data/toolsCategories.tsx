import {
  Minimize2,
  FileText,
  Scissors,
  Layers,
  Wrench,
  Image,
  FileType,
  Crop,
  Smartphone,
  ShieldAlert
} from "lucide-react";
import { TOOL_PAGES } from "./pages";

export type ToolCategory = {
  id: string;
  title: string;
  description: string;
  icon: any;
  tools: {
    path: string;
    label: string;
    desc: string;
    icon: any;
    isNew?: boolean; // Label for new tools
  }[];
};

/**
 * Categorized Tools Configuration for /tools page
 * Phase 1: Organizing existing tools + Placeholders for Phase 2
 */
export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "compress",
    title: "Compress & Resize",
    description: "Reduce file size for portals, emails, and storage.",
    icon: Minimize2,
    tools: [
      {
        path: "/compress-pdf",
        label: "Compress PDF",
        desc: "Smart optimization for balanced quality & size.",
        icon: Minimize2,
      },
      {
        path: "/compress-pdf-to-200kb",
        label: "Compress to 200KB",
        desc: "Perfect for Govt & Entrance Exams.",
        icon: Minimize2,
      },
      {
        path: "/compress-pdf-to-100kb",
        label: "Compress to 100KB",
        desc: "Strict limit for portals.",
        icon: Minimize2,
      },
      {
        path: "/compress-pdf-to-50kb",
        label: "Compress to 50KB",
        desc: "Ultra-high compression for older sites.",
        icon: Minimize2,
      },
      {
        path: "/scanned-pdf-compressor",
        label: "Scanned PDF Compressor",
        desc: "Optimize scanned docs without blurring text.",
        icon: Smartphone, // Mobile/Scan metaphor
      },
    ]
  },
  {
    id: "convert",
    title: "Convert & Export",
    description: "Transform PDFs to images, Word docs, and more.",
    icon: FileType,
    tools: [
      {
        path: "/pdf-to-docx",
        label: "PDF to DOCX",
        desc: "Convert PDFs to editable Word documents.",
        icon: FileType,
        isNew: true,
      },
    ]
  },
  {
    id: "edit",
    title: "Edit & Organize",
    description: "Merge, split, crop, and rearrange pages.",
    icon: Layers,
    tools: [
      {
        path: "/merge-pdf",
        label: "Merge PDF",
        desc: "Combine multiple PDFs into one document.",
        icon: Layers,
        isNew: true,
      },
      {
        path: "/split-pdf",
        label: "Split PDF",
        desc: "Extract specific pages from your PDF.",
        icon: Scissors,
        isNew: true,
      }
    ]
  },
  {
    id: "utility",
    title: "Utility & Security",
    description: "Manage metadata, passwords, and recovery.",
    icon: ShieldAlert,
    tools: [
      {
        path: "/remove-metadata-from-pdf",
        label: "Remove Metadata",
        desc: "Clean hidden author data for privacy.",
        icon: ShieldAlert,
      }
    ]
  }
];

// Helper to populate existing tools dynamically if needed,
// but manual curation above is better for "Human Description" requirement.
