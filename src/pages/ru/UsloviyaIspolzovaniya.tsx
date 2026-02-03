import React from "react";
import SEO from "../../components/SEO";
import { buildWebAppJsonLd, getPageSeo } from "../../utils/seoData";

const UsloviyaIspolzovaniya: React.FC = () => {
  const seo = getPageSeo("/ru/usloviya");

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-4xl font-bold text-white mb-10">Условия использования</h1>
      <div className="prose prose-invert prose-lg max-w-none text-gray-400">
        <p>Используя наш сайт, вы соглашаетесь со следующими условиями:</p>

        <h3>1. Использование сервиса</h3>
        <p>Наш сервис предоставляется бесплатно для личного и коммерческого использования. Вы соглашаетесь не использовать сервис для незаконных целей.</p>

        <h3>2. Отказ от гарантий</h3>
        <p>Сервис предоставляется "как есть". Мы не гарантируем, что сжатие всегда будет соответствовать определенным критериям, хотя наш инструмент настроен на максимальную точность.</p>

        <h3>3. Ответственность</h3>
        <p>Мы не несем ответственности за любые убытки или проблемы, возникшие в результате использования наших инструментов. Ответственность за содержание обрабатываемых файлов лежит на пользователе.</p>

        <h3>4. Изменения</h3>
        <p>Мы оставляем за собой право изменять эти условия в любое время. Продолжение использования сайта означает согласие с обновленными условиями.</p>
      </div>
    </div>
  );
};

export default UsloviyaIspolzovaniya;
