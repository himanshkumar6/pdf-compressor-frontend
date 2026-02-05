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
      // Phase 2 Placeholders (Hidden or Disabled if needed, but requested to show structure)
      // For Phase 1, we will only show what we have or mark as "Coming Soon" if allowed.
      // User said "Build ONLY tools that have clear intent".
      // I will put placeholders but maybe filter them out in UI if they don't exist yet, 
      // OR mostly likely the user wants the structure ready.
      // Since I can't link to non-existent routes, I will keep this list empty-ish or use existing tools if any match.
      // Currently we have NO convert tools. 
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
