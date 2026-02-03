import React from "react";
import SEO from "../../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../../utils/seoData";
import { FileText, Wrench } from "lucide-react";

// Hardcoded Russian tools list for simplicity
const RU_TOOL_PAGES = [
  { path: "/ru/szhat-pdf", label: "Сжать PDF", shortDesc: "Быстрое сжатие для любых целей" },
  { path: "/ru/szhat-pdf-do-50kb", label: "Сжать до 50 КБ", shortDesc: "Для строгих лимитов" },
  { path: "/ru/szhat-pdf-do-100kb", label: "Сжать до 100 КБ", shortDesc: "Для резюме и анкет" },
  { path: "/ru/szhat-pdf-do-150kb", label: "Сжать до 150 КБ", shortDesc: "Для веб-порталов" },
  { path: "/ru/szhat-pdf-do-200kb", label: "Сжать до 200 КБ", shortDesc: "Стандарт Госуслуг" },
  { path: "/ru/szhat-pdf-do-500kb", label: "Сжать до 500 КБ", shortDesc: "Для портфолио" },
  { path: "/ru/szhat-pdf-do-1mb", label: "Сжать до 1 МБ", shortDesc: "Для больших файлов" },
  { path: "/ru/umenshit-razmer-pdf-do-500kb", label: "Уменьшить размер", shortDesc: "Оптимизация файла" },
  { path: "/ru/szhat-skanirovannyj-pdf", label: "Сжать Скан PDF", shortDesc: "Для сканированных документов" },
  { path: "/ru/udalit-metadannye-pdf", label: "Удалить метаданные", shortDesc: "Очистка скрытых данных" },
];

const Instrumenty: React.FC = () => {
  const seo = PAGES_SEO["/ru/instrumenty"];

  return (
    <div className="pt-32 pb-20 max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
        <Wrench className="w-10 h-10 text-cyan-400" />
        Инструменты PDF
      </h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Все инструменты в одном месте. Сжатие, уменьшение размера, удаление метаданных — 100% в браузере, без загрузки.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {RU_TOOL_PAGES.map((tool) => (
          <a
            key={tool.path}
            href={tool.path}
            className="block rounded-2xl border border-gray-800 bg-gray-900/40 p-6 hover:border-cyan-500/30 hover:bg-gray-900/60 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {tool.label}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{tool.shortDesc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Popular sizes */}
      <div className="mt-14 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
        <h2 className="text-xl font-bold text-white mb-3">Популярные размеры сжатия</h2>
        <p className="text-gray-400 text-sm mb-4">
          Выберите нужный размер для Госуслуг, ФНС, вузов и других порталов.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/ru/szhat-pdf-do-50kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            50 КБ
          </a>
          <a
            href="/ru/szhat-pdf-do-100kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            100 КБ
          </a>
          <a
            href="/ru/szhat-pdf-do-150kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            150 КБ
          </a>
          <a
            href="/ru/szhat-pdf-do-200kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            200 КБ
          </a>
          <a
            href="/ru/szhat-pdf-do-500kb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            500 КБ
          </a>
          <a
            href="/ru/szhat-pdf-do-1mb"
            className="px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-bold"
          >
            1 МБ
          </a>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-2xl border border-gray-800 bg-black/20">
        <h2 className="text-xl font-bold text-white mb-3">Другие страницы</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="/ru/o-nas"
            className="px-4 py-2 rounded-xl border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors text-sm font-medium"
          >
            О нас
          </a>
          <a
            href="/ru/kontakty"
            className="px-4 py-2 rounded-xl border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors text-sm font-medium"
          >
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instrumenty;
