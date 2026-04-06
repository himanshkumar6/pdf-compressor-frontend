import React from "react";
import SEO from "../../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../../utils/seoData";

const CookiePolicyRu: React.FC = () => {
  const seo = PAGES_SEO["/ru/cookie-policy"];
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 prose prose-invert">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-5xl font-bold text-white mb-8">ПОЛИТИКА ИСПОЛЬЗОВАНИЯ КУКИ</h1>

      <p className="text-gray-300 leading-relaxed">
        Я люблю, когда всё просто и понятно.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">ТЕКУЩИЙ СТАТУС: БЕЗ КУКИ</h2>
      <p className="text-gray-300 leading-relaxed">
        На данный момент сервис Сжать PDF (https://compresspdfto200kb.online/ru) НЕ использует никакие файлы cookie. Мы не отслеживаем ваши сессии, не сохраняем настройки в куки и не используем скрытые пиксели отслеживания. Именно поэтому на нашем сайте нет того самого надоедливого баннера с кнопкой «Принять».
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">БУДУЩИЕ ИЗМЕНЕНИЯ</h2>
      <p className="text-gray-300 leading-relaxed">
        В будущем мы можем добавить сторонние сервисы, такие как Google Analytics (чтобы понимать, какие инструменты наиболее полезны) или Google AdSense (чтобы оплачивать домен и хостинг). Эти службы обычно используют свои собственные файлы cookie.
      </p>
      <p className="text-gray-300 leading-relaxed mt-4">
        Если и когда мы решим внедрить эти функции, мы обязательно обновим этот документ и добавим соответствующее уведомление на сайт, чтобы вы были в курсе.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">ВАША ПРИВАТНОСТЬ</h2>
      <p className="text-gray-300 leading-relaxed">
        Поскольку все инструменты работают полностью в вашем браузере без загрузки файлов на сервер, отсутствие куки делает ваше посещение максимально приватным.
      </p>

      <p className="mt-12 text-gray-400">
        Если у вас есть вопросы по этому поводу, не стесняйтесь писать нам по адресу himanshucareer01@gmail.com.
      </p>

      <p className="mt-4 text-gray-500 text-sm">
        Последнее обновление: 9 февраля 2026 г.
      </p>
    </div>
  );
};

export default CookiePolicyRu;
