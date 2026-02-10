import React from "react";
import SEO from "../../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../../utils/seoData";

const ONas: React.FC = () => {

  const seo = PAGES_SEO["/ru/o-nas"];

  return (
    <div className="pt-16 md:pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">О сервисе</h1>
      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-gray-400 space-y-6 leading-relaxed">
        <p>
          Добро пожаловать в <span className="text-cyan-400 font-bold">CompressPDF</span> — ваш сервис для качественного и безопасного сжатия PDF файлов. Наша цель проста: дать пользователям возможность сжать документы для государственных порталов без передачи данных на сторонние серверы.
        </p>
        <p>
          Мы построили этот инструмент на современных технологиях WebAssembly и JavaScript, чтобы вся обработка происходила локально в вашем браузере. Когда вы используете функцию "сжать PDF до 200 КБ", ваши данные остаются в оперативной памяти вашего устройства, и только вы имеете доступ к ним.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Наша Миссия</h2>
        <p>
          Наша миссия — сделать профессиональные инструменты для работы с документами доступными для всех. Мы считаем, что качественное сжатие PDF должно быть бесплатным, быстрым и безопасным.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-white font-bold mb-2">Приватность</h3>
            <p className="text-sm">Мы никогда не храним, не загружаем и не просматриваем ваши файлы. Нулевой след на сервере.</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-white font-bold mb-2">Точность</h3>
            <p className="text-sm">Наш стандарт 200 КБ специально настроен для лимитов большинства официальных госпорталов.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ONas;
