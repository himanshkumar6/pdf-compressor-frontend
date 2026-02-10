import React from "react";
import SEO from "../../components/SEO";
import { buildWebAppJsonLd, getPageSeo } from "../../utils/seoData";
import { CONTACT_EMAIL } from "../../utils/localization";

const PolitikaKonfidencialnosti: React.FC = () => {
  const seo = getPageSeo("/ru/politika-konfidencialnosti");

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
        lang="ru"
      />

      <div className="max-w-4xl mx-auto px-6 pt-10 md:pt-20 pb-20">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-12">
          Политика <span className="text-cyan-400">Конфиденциальности</span>
        </h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Введение</h2>
            <p>
              Мы уважаем вашу конфиденциальность. CompressPDFto200KB.online работает
              полностью в вашем браузере. Ваши файлы <strong>никогда</strong> не
              загружаются на наши серверы. Вся обработка происходит локально на
              вашем устройстве.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Сбор данных
            </h2>
            <p>
              Мы не собираем, не храним и не передаем ваши личные файлы. Поскольку
              файлы не покидают ваше устройство, у нас нет доступа к их
              содержимому.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Аналитика</h2>
            <p>
              Мы используем Google Analytics для сбора анонимной статистики
              посещаемости (просмотры страниц, время на сайте). Это помогает нам
              улучшать сервис. Никакие персональные данные при этом не передаются.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Контакты</h2>
            <p>
              Если у вас есть вопросы по поводу политики конфиденциальности,
              свяжитесь с нами:
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-cyan-400 hover:text-cyan-300"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitikaKonfidencialnosti;
