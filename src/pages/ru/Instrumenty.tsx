import React, { useMemo } from "react";
import SEO from "../../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../../utils/seoData";
import { TOOLS_REGISTRY, TOOL_CATEGORIES_INFO } from "../../data/toolsRegistry";
import { ArrowRight, Wrench, Minimize2 } from "lucide-react";

/**
 * 🛠️ Russian Tools Hub - Data Driven
 */
const Instrumenty: React.FC = () => {
  const seo = PAGES_SEO["/ru/instrumenty"];

  // Group tools by category using Russian translations
  const categorizedTools = useMemo(() => {
    return TOOL_CATEGORIES_INFO.map((catInfo) => ({
      ...catInfo,
      name: catInfo.ru.name,
      description: catInfo.ru.description,
      tools: TOOLS_REGISTRY.filter(
        (tool) => tool.category === catInfo.name && tool.isActive && tool.ru
      ).map(t => ({
        ...t,
        title: t.ru!.title,
        slug: t.ru!.slug,
        shortDescription: t.ru!.shortDescription
      })),
    })).filter((cat) => cat.tools.length > 0);
  }, []);

  return (
    <div className="pt-32 pb-24 max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />

      {/* Hero Section */}
      <div className="mb-16 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 flex items-center gap-3 tracking-tight">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500" />
          </div>
          Инструменты PDF
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          Полный набор инструментов PDF с приоритетом приватности. Сжимайте, конвертируйте и организуйте документы
          <span className="text-cyan-500 font-medium"> прямо в браузере.</span> Без загрузки, без ожидания.
        </p>
      </div>

      {/* Tool Categories */}
      <div className="space-y-20">
        {categorizedTools.map((category, catIndex) => {
          const CatIcon = category.icon;

          return (
            <section
              key={category.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8 border-b border-[var(--border)] pb-4">
                <CatIcon className="w-6 h-6 text-gray-500" />
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text)]">{category.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                </div>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.tools.map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <a
                      key={tool.slug}
                      href={tool.slug}
                      className="group relative flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] 
                                 hover:border-cyan-500/40 hover:bg-[var(--card-hover)] hover:shadow-lg hover:shadow-cyan-500/5
                                 transition-all duration-300 touch-manipulation"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-500" />

                      <div className="relative z-10">
                        {/* Header: Icon + Arrow */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] group-hover:border-cyan-500/30 group-hover:text-cyan-500 transition-colors">
                            <ToolIcon className="w-6 h-6" />
                          </div>

                          <div className="flex items-center gap-2">
                            {tool.isNew && (
                              <span className="px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-500">
                                NEW
                              </span>
                            )}
                            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-[var(--text)] group-hover:text-cyan-500 transition-colors mb-2">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                          {tool.shortDescription}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Popular sizes section (Keep but optimize if needed) */}
      <div className="mt-20 p-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <Minimize2 className="w-32 h-32 text-cyan-500" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-3">Популярные размеры сжатия</h2>
          <p className="text-gray-400 text-base mb-6 max-w-xl">
            Выберите нужный размер для Госуслуг, ФНС, вузов и других порталов.
          </p>
          <div className="flex flex-wrap gap-3">
            {[50, 100, 150, 200, 500].map(size => (
              <a
                key={size}
                href={`/ru/szhat-pdf-do-${size}kb`}
                className="px-5 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-all text-sm font-black"
              >
                {size} КБ
              </a>
            ))}
            <a
              href="/ru/szhat-pdf-do-1mb"
              className="px-5 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-all text-sm font-black"
            >
              1 МБ
            </a>
          </div>
        </div>
      </div>

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Instrumenty;
