import React from "react";
import SEO from "../../components/SEO";
import { buildWebAppJsonLd, getPageSeo } from "../../utils/seoData";

const OtkazOtOtvetsvennosti: React.FC = () => {
  const seo = getPageSeo("/ru/otkaz-ot-otvetstvennosti");

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-4xl font-bold text-white mb-10">Отказ от ответственности</h1>
      <div className="prose prose-invert prose-lg max-w-none text-gray-400">
        <p>
          Информация и инструменты на сайте CompressPDFto200KB.online предоставляются исключительно в информационных целях.
        </p>
        <p>
          Хотя мы стремимся обеспечить точность и надежность наших инструментов сжатия PDF, мы не гарантируем, что обработанные файлы будут приняты на всех сторонних порталах (например, государственных сайтах) без исключений. Требования порталов могут меняться.
        </p>
        <p>
          Мы не несем ответственности за возможные технические сбои, потерю данных или отказ в приеме документов сторонними ресурсами. Пользователь использует сервис на свой страх и риск.
        </p>
        <p>
          Мы не связаны с государственными органами или упомянутыми в блоге организациями. Любые торговые марки принадлежат их владельцам.
        </p>
      </div>
    </div>
  );
};

export default OtkazOtOtvetsvennosti;
