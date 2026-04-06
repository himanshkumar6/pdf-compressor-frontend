import React from "react";
import SEO from "../../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../../utils/seoData";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "../../utils/localization";

const Kontakty: React.FC = () => {
  const seo = PAGES_SEO["/ru/kontakty"];

  return (
    <div className="pt-16 md:pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
        lang="ru"
      />
      <div className="mb-8 flex justify-center">
        <div className="p-4 bg-gray-800 rounded-full inline-block">
          <Mail className="w-12 h-12 text-cyan-400" />
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Свяжитесь с нами</h1>
      <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
        Мы здесь, чтобы помочь. Если у вас есть вопросы о нашем инструменте сжатия PDF, предложения или отчеты об ошибках, напишите нам.
      </p>

      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-10 inline-block">
        <p className="text-gray-500 mb-2 font-medium uppercase tracking-wider text-sm">Email для связи</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl md:text-3xl font-bold text-white hover:text-cyan-400 transition-colors">
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  );
};

export default Kontakty;
