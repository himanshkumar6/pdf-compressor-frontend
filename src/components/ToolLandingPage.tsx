import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import SEO from "./SEO";
import ToolSection from "./ToolSection";
import ToolSectionRemoveMetadata from "./ToolSectionRemoveMetadata";
import BreadcrumbSchema from "./BreadcrumbSchema";
import AdBanner from "./AdBanner";

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
  customContent?: React.ReactNode;
  customTool?: React.ReactNode;
  children?: React.ReactNode;
};

export default function ToolLandingPage({
  routeKey,
  toolType = "COMPRESS",
  defaultTargetSize,
  targetSizeOptions,
  ctaText,
  customContent,
  customTool,
  children,
}: ToolLandingPageProps) {
  const page = PAGES_SEO[routeKey];

  const breadcrumbItems = useMemo(() => {
    return buildBreadcrumbSchemaItems(routeKey);
  }, [routeKey]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const alternateLinks = useMemo(() => {
    const currentTool = TOOLS_REGISTRY.find(
      (t) =>
        t.slug === routeKey ||
        t.ru?.slug === routeKey ||
        t.es?.slug === routeKey
    );

    if (!currentTool) return undefined;

    const links = [{ lang: "en", href: `${SITE.baseUrl}${currentTool.slug}` }];
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
        <h1 className="text-(--textHeading) text-2xl font-bold">
          SEO config missing
        </h1>
        <p className="text-(--textMuted) mt-3">
          Please add this route to{" "}
          <span className="text-cyan-500 font-semibold">PAGES_SEO</span>
        </p>

        <pre className="mt-5 p-4 rounded-2xl bg-(--card) border border-(--border) text-left text-sm text-(--textBody) overflow-auto">
          {routeKey}
        </pre>

        <Link
          to="/"
          className="inline-flex mt-8 px-5 py-3 rounded-2xl border border-(--border) text-(--textBody) hover:text-cyan-500 hover:border-cyan-500/30 transition"
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

  const faqsForSchema =
    faqs?.map((f) => ({ question: f.q, answer: f.a })) ??
    page.faqs ??
    [];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebAppJsonLd(page),
      ...(faqsForSchema.length ? [buildFAQJsonLd(faqsForSchema)] : []),
    ],
  };

  const renderTool = () => {
    if (customTool) return customTool;
    if (children) return children;
    if (toolType === "REMOVE_METADATA")
      return <ToolSectionRemoveMetadata />;
    return (
      <ToolSection
        defaultTargetSize={defaultTargetSize}
        targetSizeOptions={targetSizeOptions}
        ctaText={ctaText}
      />
    );
  };

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6">

      <SEO
        title={page.title}
        description={page.description}
        canonical={page.canonical}
        schema={schemaGraph}
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      {/* TOOL */}
      <section className="w-full max-w-4xl mx-auto">
        {renderTool()}
      </section>

      {/* ✅ Native Banner Below Tool */}
      <AdBanner type="native" />

      {/* SEO CONTENT */}
      <section className="w-full max-w-4xl mx-auto mt-10 space-y-10">

        {customContent && (
          <div className="rounded-(--surface-radius) border border-(--border) bg-(--card) p-6 md:p-10 theme-transition">
            {customContent}
          </div>
        )}

        {!customContent && (intro || content) && (
          <div className="rounded-(--surface-radius) border border-(--border) bg-(--card) p-6 md:p-10 theme-transition">
            <h2 className="text-(--textHeading) text-xl md:text-3xl font-semibold mb-6">
              When you should use this tool
            </h2>
            <div className="text-(--textBody) leading-relaxed">
              {intro}
              {content}
            </div>
          </div>
        )}

        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-(--surface-radius) border border-(--border) bg-(--card) p-6 theme-transition"
              >
                <h3 className="text-(--textHeading) font-semibold text-lg mb-2">
                  {feat.title}
                </h3>
                <p className="text-(--textBody) text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {steps && (
          <div className="rounded-(--surface-radius) border border-(--border) bg-(--card) p-6 md:p-10 theme-transition">
            <h2 className="text-(--textHeading) text-xl md:text-3xl font-semibold mb-6">
              How this tool works
            </h2>

            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-(--textHeading) font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-(--textMuted) text-sm mt-1">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {useCases && useCases.length > 0 && (
          <div className="rounded-(--surface-radius) border border-(--border) bg-(--card) p-6 md:p-10 theme-transition">
            <h2 className="text-(--textHeading) text-xl md:text-3xl font-semibold mb-6">
              Use Cases
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <p className="text-(--textBody)">{uc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {trustBlock && (
          <div className="rounded-(--surface-radius) border border-(--border) bg-cyan-50 dark:bg-cyan-500/5 p-6 md:p-10 text-center theme-transition">
            <h2 className="text-(--textHeading) text-xl md:text-3xl font-semibold mb-4">
              Why Trust Us
            </h2>
            <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-2">
              {trustBlock.title}
            </h3>
            <p className="text-(--textBody) max-w-2xl mx-auto">
              {trustBlock.desc}
            </p>
          </div>
        )}

        {faqs && (
          <div className="max-w-4xl">
            <FAQAccordion faqs={faqs} />
          </div>
        )}
      </section>

      {/* RELATED TOOLS */}
      <section className="w-full max-w-4xl mx-auto mt-12">
        <div className="rounded-(--surface-radius) border border-(--border) bg-(--card) p-6 md:p-10 theme-transition">
          <h2 className="text-(--textHeading) text-xl md:text-3xl font-semibold mb-2">
            Related Tools
          </h2>
          <p className="text-(--textMuted) text-sm mb-6">
            Try these PDF tools — all free and run in your browser.
          </p>

          <div className="flex flex-wrap gap-3">
            {getRelatedTools(routeKey, 4).map((t) => (
              <Link
                key={t.path}
                to={t.path}
                className="px-4 py-2 rounded-xl border border-(--border) text-(--textBody) hover:text-cyan-500 hover:border-cyan-500/30 transition text-sm font-medium"
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
