import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import SEO from "./SEO";
import ToolSection from "./ToolSection";
import ToolSectionRemoveMetadata from "./ToolSectionRemoveMetadata";
import BreadcrumbSchema from "./BreadcrumbSchema";

import {
  PAGES_SEO,
  buildFAQJsonLd,
  buildWebAppJsonLd,
  SITE,
} from "../utils/seoData";

import { TOOLS_REGISTRY } from "../data/toolsRegistry";

import { buildBreadcrumbSchemaItems } from "../utils/breadcrumbItems";
import { getRelatedTools } from "../data/pages";
import { TOOL_CONTENT } from "../data/toolContent";
import FAQAccordion from "./FAQAccordion";

type ToolType = "COMPRESS" | "REMOVE_METADATA" | "PDF_EDITING" | "UTILITY";

type TargetSizeOption = { v: number; l: string };

type ToolLandingPageProps = {
  routeKey: string;
  heading?: React.ReactNode;
  tagline?: string;
  toolType?: ToolType;
  defaultTargetSize?: number;
  targetSizeOptions?: TargetSizeOption[];
  ctaText?: string;
  children?: React.ReactNode;
};

export default function ToolLandingPage({
  routeKey,
  toolType = "COMPRESS",
  defaultTargetSize,
  targetSizeOptions,
  ctaText,
  children,
}: ToolLandingPageProps) {
  const page = PAGES_SEO[routeKey];

  // ✅ Breadcrumb JSON-LD items (Auto)
  const breadcrumbItems = useMemo(() => {
    return buildBreadcrumbSchemaItems(routeKey);
  }, [routeKey]);

  // ✅ Hreflang logic (Alternate language pages)
  const alternateLinks = useMemo(() => {
    const currentTool = TOOLS_REGISTRY.find(
      (t) => t.slug === routeKey || t.ru?.slug === routeKey || t.es?.slug === routeKey
    );

    if (!currentTool) return undefined;

    const links = [
      { lang: "en", href: `${SITE.baseUrl}${currentTool.slug}` },
    ];
    if (currentTool.ru) {
      links.push({ lang: "ru", href: `${SITE.baseUrl}${currentTool.ru.slug}` });
    }
    if (currentTool.es) {
      links.push({ lang: "es", href: `${SITE.baseUrl}${currentTool.es.slug}` });
    }
    return links;
  }, [routeKey]);

  if (!page) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-white text-2xl font-bold">SEO config missing</h1>
        <p className="text-gray-400 mt-3">
          Please add this route to{" "}
          <span className="text-cyan-400 font-semibold">PAGES_SEO</span>
        </p>

        <pre className="mt-5 p-4 rounded-2xl bg-black/50 border border-gray-800 text-left text-sm text-gray-200 overflow-auto">
          {routeKey}
        </pre>

        <Link
          to="/"
          className="inline-flex mt-8 px-5 py-3 rounded-2xl border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const {
    content,
    intro,
    features,
    useCases,
    steps,
    faqs,
    trustBlock,
  } = TOOL_CONTENT[routeKey] || {};

  const faqsForSchema = faqs?.map((f) => ({ question: f.q, answer: f.a })) ?? page.faqs ?? [];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebAppJsonLd(page),
      ...(faqsForSchema.length ? [buildFAQJsonLd(faqsForSchema)] : []),
    ],
  };

  const renderTool = () => {
    if (children) return children;
    if (toolType === "REMOVE_METADATA") return <ToolSectionRemoveMetadata />;
    return <ToolSection defaultTargetSize={defaultTargetSize} targetSizeOptions={targetSizeOptions} ctaText={ctaText} />;
  };

  /* Determine language */
  const isRu = routeKey.startsWith("/ru");
  const isEs = routeKey.startsWith("/es");
  const lang = isRu ? "ru" : isEs ? "es" : "en";

  const labels = isRu
    ? {
      whenToUse: "Когда использовать",
      howItWorks: "Как это работает",
      related: "Другие инструменты",
      relatedDesc: "Попробуйте эти бесплатные PDF инструменты.",
      features: "Возможности",
      useCases: "Сценарии использования",
      trust: "Доверие и Безопасность",
    }
    : isEs
      ? {
        whenToUse: "¿Cuándo usar esta herramienta?",
        howItWorks: "¿Cómo funciona?",
        related: "Herramientas Relacionadas",
        relatedDesc: "Prueba estas herramientas PDF — todas gratuitas y seguras.",
        features: "Características Principales",
        useCases: "Casos de Uso",
        trust: "Por qué confiar en nosotros",
      }
      : {
        whenToUse: "When you should use this tool",
        howItWorks: "How this tool works",
        related: "Related Tools",
        relatedDesc: "Try these PDF tools — all free and run in your browser.",
        features: "Key Features",
        useCases: "Use Cases",
        trust: "Why Trust Us",
      };

  /**
   * Simple Markdown-to-JSX Parser
   * Converts:
   * - ### Heading -> <h3>
   * - #### Heading -> <h4>
   * - **Bold** -> <strong>
   * - --- Separator -> <hr>
   * - Bullet points starting with - -> <li>
   */
  const renderMarkdown = (text: string) => {
    if (!text) return null;

    // Split by lines to handle block elements
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];

    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc ml-6 space-y-2 text-gray-300">
            {listItems.map((item, i) => (
              <li key={i}>{processInlines(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const processInlines = (line: string) => {
      // Bold: **text** -> <strong>text</strong>
      let processed: React.ReactNode[] = [line];

      // Process Bold
      processed = processed.flatMap((part) => {
        if (typeof part !== "string") return part;
        const subParts = part.split(/(\*\*.*?\*\*)/g);
        return subParts.map((sp, i) => {
          if (sp.startsWith("**") && sp.endsWith("**")) {
            return <strong key={`b-${i}`} className="text-white font-bold">{sp.slice(2, -2)}</strong>;
          }
          return sp;
        });
      });

      // Process Italic: *text* -> <em>text</em>
      processed = processed.flatMap((part) => {
        if (typeof part !== "string") return part;
        const subParts = part.split(/(\*.*?\*)/g);
        return subParts.map((sp, i) => {
          if (sp.startsWith("*") && sp.endsWith("*") && !sp.startsWith("**")) {
            return <em key={`i-${i}`} className="italic text-gray-200">{sp.slice(1, -1)}</em>;
          }
          return sp;
        });
      });

      return processed;
    };

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();

      // Horizontal Rule
      if (trimmedLine === "---") {
        flushList();
        elements.push(<hr key={idx} className="border-gray-800 my-8" />);
        return;
      }

      // Headings
      if (trimmedLine.startsWith("#### ")) {
        flushList();
        elements.push(<h4 key={idx} className="text-white text-lg font-bold mt-6 mb-3">{processInlines(trimmedLine.slice(5))}</h4>);
        return;
      }
      if (trimmedLine.startsWith("### ")) {
        flushList();
        elements.push(<h3 key={idx} className="text-white text-xl font-bold mt-8 mb-4">{processInlines(trimmedLine.slice(4))}</h3>);
        return;
      }
      if (trimmedLine.startsWith("## ")) {
        flushList();
        elements.push(<h2 key={idx} className="text-white text-2xl font-black mt-10 mb-6">{processInlines(trimmedLine.slice(3))}</h2>);
        return;
      }

      // List Items
      if (trimmedLine.startsWith("- ")) {
        listItems.push(trimmedLine.slice(2));
        return;
      }

      // Empty Lines
      if (trimmedLine === "") {
        flushList();
        return;
      }

      // Standard Paragraph
      flushList();
      elements.push(<p key={idx} className="text-gray-300 leading-relaxed">{processInlines(trimmedLine)}</p>);
    });

    flushList(); // Final cleanup
    return <div className="space-y-4">{elements}</div>;
  };

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6">
      {/* ✅ SEO */}
      <SEO
        title={page.title}
        description={page.description}
        canonical={page.canonical}
        schema={schemaGraph}
        lang={lang}
        alternateLinks={alternateLinks}
      />

      {/* ✅ Breadcrumb Schema (Google) */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* HERO SECTION REMOVED - Handled by ToolLayout */}
      {/* ToolSection now handles its own top spacing */}

      {/* ✅ TOOL */}
      <section className="w-full max-w-4xl mx-auto">{renderTool()}</section>

      {/* ✅ SEO content */}
      <section className="w-full max-w-4xl mx-auto mt-12 space-y-12">
        {/* Intro / When to Use */}
        {(intro || content) && (
          <div className="rounded-3xl md:rounded-[2.5rem] border border-gray-800 bg-black/30 p-6 md:p-10">
            <h2 className="text-white text-xl md:text-3xl font-black mb-6">
              {labels.whenToUse}
            </h2>
            <div className="text-gray-300 leading-relaxed">
              {intro && <div className="mb-8">{renderMarkdown(intro)}</div>}
              {content && <div>{renderMarkdown(content)}</div>}
            </div>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="rounded-[2rem] border border-gray-800 bg-black/20 p-6">
                <h3 className="text-white font-bold text-lg mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* How It Works */}
        {steps && (
          <div className="rounded-3xl md:rounded-[2.5rem] border border-gray-800 bg-black/30 p-6 md:p-10">
            <h2 className="text-white text-xl md:text-3xl font-black mb-6">
              {labels.howItWorks}
            </h2>
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-black">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-bold">{step.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Use Cases */}
        {useCases && useCases.length > 0 && (
          <div className="rounded-[2.5rem] border border-gray-800 bg-black/30 p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-black mb-6">
              {labels.useCases}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <p className="text-gray-300">{uc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Trust Block */}
        {trustBlock && (
          <div className="rounded-3xl md:rounded-[2.5rem] border border-cyan-900/30 bg-cyan-950/10 p-6 md:p-10 text-center">
            <h2 className="text-white text-xl md:text-3xl font-black mb-4">
              {labels.trust}
            </h2>
            <h3 className="text-cyan-400 font-bold text-lg mb-2">{trustBlock.title}</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">{trustBlock.desc}</p>
          </div>
        )}

        {faqs && (
          <div className="max-w-4xl">
            <FAQAccordion faqs={faqs} />
          </div>
        )}
      </section>

      {/* ✅ Related Tools */}
      <section className="w-full max-w-4xl mx-auto mt-12">
        {/* ...related tools markup... */}
        <div className="rounded-[2.5rem] border border-gray-800 bg-black/30 p-6 md:p-10">
          <h2 className="text-white text-2xl md:text-3xl font-black mb-2">
            {labels.related}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {labels.relatedDesc}
          </p>
          <div className="flex flex-wrap gap-3">
            {getRelatedTools(routeKey, 4).map((t) => (
              <Link
                key={t.path}
                to={t.path}
                className="px-4 py-2.5 rounded-2xl border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition text-sm font-medium"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-12" />
    </div>
  );
}
