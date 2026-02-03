import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, ShieldCheck } from "lucide-react";

import SEO from "./SEO";
import ToolSection from "./ToolSection";
import ToolSectionRemoveMetadata from "./ToolSectionRemoveMetadata";

import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbSchema from "./BreadcrumbSchema";

import {
  PAGES_SEO,
  buildFAQJsonLd,
  buildWebAppJsonLd,
} from "../utils/seoData";

import { buildBreadcrumbSchemaItems } from "../utils/breadcrumbItems";
import { getRelatedTools } from "../data/pages";
import { TOOL_CONTENT } from "../data/toolContent";
import FAQAccordion from "./FAQAccordion";

type ToolType = "COMPRESS" | "REMOVE_METADATA";

type TargetSizeOption = { v: number; l: string };

type ToolLandingPageProps = {
  routeKey: string;
  heading: React.ReactNode;
  tagline: string;
  toolType?: ToolType;
  defaultTargetSize?: number;
  targetSizeOptions?: TargetSizeOption[];
  ctaText?: string;
};

export default function ToolLandingPage({
  routeKey,
  heading,
  tagline,
  toolType = "COMPRESS",
  defaultTargetSize,
  targetSizeOptions,
  ctaText,
}: ToolLandingPageProps) {
  const page = PAGES_SEO[routeKey];

  // ✅ Breadcrumb JSON-LD items (Auto)
  const breadcrumbItems = useMemo(() => {
    return buildBreadcrumbSchemaItems(routeKey);
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

  const toolContent = TOOL_CONTENT[routeKey];
  const faqsForSchema = toolContent?.faqs?.map((f) => ({ question: f.q, answer: f.a })) ?? page.faqs ?? [];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebAppJsonLd(page),
      ...(faqsForSchema.length ? [buildFAQJsonLd(faqsForSchema)] : []),
    ],
  };

  const renderTool = () => {
    if (toolType === "REMOVE_METADATA") return <ToolSectionRemoveMetadata />;
    return <ToolSection defaultTargetSize={defaultTargetSize} targetSizeOptions={targetSizeOptions} ctaText={ctaText} />;
  };

  /* Determine language */
  const isRu = routeKey.startsWith("/ru");
  const lang = isRu ? "ru" : "en";

  const labels = isRu
    ? {
      back: "На главную",
      worksInBrowser: "Работает в браузере",
      free: "Бесплатно • Без регистрации",
      whatAndHow: "Что и Как?",
      steps: "Пошаговая инструкция",
      related: "Другие инструменты",
      relatedDesc: "Попробуйте эти бесплатные PDF инструменты.",
    }
    : {
      back: "Back to Website",
      worksInBrowser: "Works 100% in browser",
      free: "No signup • Free",
      whatAndHow: "Kya aur Kaise?",
      steps: "Step-by-Step",
      related: "Related Tools",
      relatedDesc: "Try these PDF tools — all free and run in your browser.",
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
      />

      {/* ✅ Breadcrumb Schema (Google) */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* ✅ HERO */}
      <section className="w-full max-w-[var(--page-max-width)] mx-auto pt-10 pb-8">
        {/* ✅ Breadcrumb UI */}
        <div className="mb-5">
          <Breadcrumbs />
        </div>

        <div className="flex justify-center mb-6">
          <Link
            to={isRu ? "/ru" : "/"}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {labels.back}
          </Link>
        </div>

        <div className="text-center">
          {/* ✅ H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            {heading}
          </h1>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">{tagline}</p>

          {/* ✅ Trust Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold">
              <ShieldCheck className="inline w-4 h-4 mr-2 text-cyan-300" />
              {labels.worksInBrowser}
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold">
              <Sparkles className="inline w-4 h-4 mr-2 text-cyan-300" />
              {labels.free}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ TOOL */}
      <section className="w-full max-w-4xl mx-auto">{renderTool()}</section>

      {/* ✅ SEO content (300–600 words Hinglish) + Steps + FAQ */}
      {toolContent && (
        <section className="w-full max-w-4xl mx-auto mt-12 space-y-12">
          <div className="rounded-[2.5rem] border border-gray-800 bg-black/30 p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-black mb-6">
              {labels.whatAndHow}
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
              {toolContent.content}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-gray-800 bg-black/30 p-6 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-black mb-6">
              {labels.steps}
            </h2>
            <ol className="space-y-6">
              {toolContent.steps.map((step, i) => (
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

          <div className="max-w-4xl">
            <FAQAccordion faqs={toolContent.faqs} />
          </div>
        </section>
      )}

      {/* ✅ Related Tools (min 4 internal links for audit) */}
      <section className="w-full max-w-4xl mx-auto mt-12">
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
