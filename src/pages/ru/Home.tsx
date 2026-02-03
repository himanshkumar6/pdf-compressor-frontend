import React from "react";
import SEO from "../../components/SEO";
import ToolSection from "../../components/ToolSection";
import FAQ from "../../components/FAQ";
import { PAGES_SEO, RU_FAQ_DATA, buildFAQJsonLd } from "../../utils/seoData";
import { Shield, FastForward, UserCheck, CheckCircle2, Clock, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const seo = PAGES_SEO["/ru/szhat-pdf"];
  const canonical = "https://compresspdfto200kb.online/ru/";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "CompressPDF",
        url: canonical,
        potentialAction: {
          "@type": "SearchAction",
          target: `${canonical}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "CompressPDF",
        url: canonical,
        logo: `https://compresspdfto200kb.online/logo.png`,
      },
      {
        "@type": "WebPage",
        name: "Сжать PDF Онлайн Бесплатно | Уменьшить размер PDF",
        url: canonical,
        description: seo?.description,
      },
      buildFAQJsonLd(RU_FAQ_DATA),
    ],
  };

  return (
    <main className="w-full">
      <SEO
        title={seo?.title || "Сжать PDF Онлайн Бесплатно | Уменьшить размер PDF до 200 КБ"}
        description={seo?.description || "Бесплатный инструмент для сжатия PDF онлайн прямо в браузере. Уменьшите размер файла до 200 КБ, 500 КБ или 1 МБ без потери качества и регистрации."}
        canonical={canonical}
        schema={websiteSchema}
      />

      {/* HERO */}
      <div className="text-center pt-16 pb-10 px-4">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Сжать <span className="text-cyan-400">PDF</span> Онлайн <br className="hidden md:block" />
          <span className="text-3xl md:text-5xl opacity-90">Быстро и Безопасно</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Профессиональный инструмент для уменьшения размера PDF файлов прямо в вашем браузере.
          Ваши документы <strong>не загружаются на сервер</strong> — это на 100% приватно.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold">
            <Shield className="w-4 h-4" /> Без серверов
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold">
            <Clock className="w-4 h-4" /> Мгновенно
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-bold">
            <Globe className="w-4 h-4" /> Доступно везде
          </div>
        </div>
      </div>

      <div className="max-w-(--page-max-width) mx-auto px-4 sm:px-6 py-6">
        <div className="section-divider" />

        {/* ✅ Tool Section */}
        <section id="tool" className="mt-10 mb-20 scroll-mt-24">
          <ToolSection />
        </section>

        {/* ✅ Primary Content Section */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                  Почему сжатие PDF необходимо для современных порталов?
                </h2>
                <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                  <p>
                    В современном цифровом мире большинство государственных и частных порталов, таких как <strong>Госуслуги</strong>, сайты ФНС, вузов или системы подачи резюме, накладывают строгие ограничения на размер загружаемых документов. Часто лимит составляет скромные <strong>200 КБ</strong> или <strong>500 КБ</strong>.
                  </p>
                  <p>
                    Наш сервис разработан специально для того, чтобы вы могли обойти эти ограничения без лишних усилий. Мы используем передовые алгоритмы сжатия данных в реальном времени, которые позволяют уменьшить размер файла в несколько раз, сохраняя при этом идеальную четкость текста и разборчивость печатей.
                  </p>
                </div>
              </div>
              <div className="bg-gray-900/40 p-8 rounded-[3rem] border border-gray-800 shadow-2xl">
                <h3 className="text-cyan-400 font-bold text-xl mb-6">Как работает сжатие в браузере?</h3>
                <ul className="space-y-4">
                  {[
                    "Оптимизация внутренней структуры объектов PDF",
                    "Умное сжатие встроенных изображений и сканов",
                    "Удаление лишних метаданных и скрытых слоев",
                    "Объединение дублирующихся шрифтов",
                  ].map((item, id) => (
                    <li key={id} className="flex gap-3 text-white/90">
                      <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step by Step */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[3rem] p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-black text-white mb-10 text-center">Как сжать PDF онлайн: пошаговая инструкция</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { n: "1", t: "Выберите файл", d: "Нажмите на область загрузки и выберите ваш PDF документ." },
                  { n: "2", t: "Установите лимит", d: "Выберите нужный размер (напр., 200 КБ) в настройках инструмента." },
                  { n: "3", t: "Дождитесь сжатия", d: "Сервис моментально обработает файл прямо на вашем устройстве." },
                  { n: "4", t: "Скачайте результат", d: "Готовый PDF оптимального размера доступен мгновенно." },
                ].map((step, i) => (
                  <div key={i} className="relative group">
                    <div className="text-6xl font-black text-cyan-500/10 absolute -top-4 -left-2 group-hover:text-cyan-500/20 transition-colors">
                      {step.n}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3 relative z-10">{step.t}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Popular Limits & Internal Links */}
        <section className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Оптимальные лимиты сжатия</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
            Каждая задача требует своего подхода. Мы подготовили специализированные инструменты для самых популярных требований.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: "/ru/szhat-pdf-do-100kb", l: "100 КБ", d: "Для фото и подписей" },
              { to: "/ru/szhat-pdf-do-200kb", l: "200 КБ", d: "Стандарт Госуслуг" },
              { to: "/ru/szhat-pdf-do-500kb", l: "500 КБ", d: "Для резюме и Email" },
              { to: "/ru/szhat-pdf-do-1mb", l: "1 МБ", d: "Для больших отчетов" },
            ].map((tool, i) => (
              <Link key={i} to={tool.to} className="premium-card rounded-3xl p-6 hover:scale-105 transition duration-300">
                <span className="block text-2xl font-black text-white mb-2">{tool.l}</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest">{tool.d}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ✅ Detailed SEO Text Section */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="premium-card rounded-[3rem] p-8 md:p-14 overflow-hidden border border-gray-800">
            <div className="prose prose-lg prose-invert max-w-none space-y-12">
              <div>
                <h2 className="text-3xl font-black text-cyan-400 uppercase tracking-tight">Сферы применения: Где пригодится сжатый PDF?</h2>
                <p className="leading-relaxed">
                  Наш бесплатный PDF компрессор — это универсальный помощник для тех, кто сталкивается с бюрократическими или техническими ограничениями в интернете. Мы проанализировали тысячи сценариев использования и выделили ключевые области, где наш сервис экономит ваше время и нервы.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-cyan-400" />
                    Госуслуги, ФНС и ПФР
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Государственные порталы часто имеют жесткие лимиты (например, скан паспорта или диплома до 200 КБ). Наш инструмент позволяет сжать <Link to="/ru/szhat-skanirovannyj-pdf" className="text-cyan-300 font-semibold underline">сканированный PDF</Link> так, чтобы он прошел автоматическую проверку системы с первого раза. Мы учитываем особенности движков обработки документов на этих сайтах, чтобы файл оставался валидным и читаемым.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    Визовые центры и Посольства
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    При подаче на шенгенскую визу или американскую визу через VFS Global или другие системы, часто требуется загрузка справок с работы и выписок из банка в PDF. Лимит обычно составляет от 300 до 500 КБ. Мы поможем вам уместить все документы в эти рамки. Важно, чтобы при сжатии не пострадали мелкие шрифты в банковских выписках — наш алгоритм это гарантирует.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    Резюме и поиск работы
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    HR-специалисты и автоматизированные системы (ATS) на HeadHunter или LinkedIn предпочитают небольшие файлы. Резюме объемом 5-10 МБ может просто не дойти до получателя. Оптимизированный файл до 500 КБ выглядит профессионально и открывается мгновенно даже при плохом соединении. Не забудьте также <Link to="/ru/udalit-metadannye-pdf" className="text-cyan-300 font-semibold underline">очистить свойства файла</Link> от истории правок.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <FastForward className="w-5 h-5 text-cyan-400" />
                    Безопасная очистка данных
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Перед отправкой документа клиенту или контрагенту крайне важно <Link to="/ru/udalit-metadannye-pdf" className="text-cyan-300 font-semibold underline">удалить метаданные из PDF</Link>. Это исключит утечку информации об авторе, программе создания и истории правок документа. Конфиденциальность на нашем ресурсе стоит на первом месте, так как мы используем JavaScript-обработку внутри вашего браузера.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <h2 className="text-3xl font-black text-white">Технические детали: Как мы сжимаем ваши файлы?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border border-gray-800 rounded-3xl bg-gray-900/20">
                    <h4 className="text-cyan-400 font-bold mb-3">Оптимизация шрифтов</h4>
                    <p className="text-sm text-gray-500">PDF часто содержат полные наборы шрифтов, даже если используется пара букв. Мы удаляем лишние символы из вложений, оставляя только те, что используются в тексте.</p>
                  </div>
                  <div className="p-6 border border-gray-800 rounded-3xl bg-gray-900/20">
                    <h4 className="text-cyan-400 font-bold mb-3">Сжатие изображений</h4>
                    <p className="text-sm text-gray-500">Мы применяем адаптивное изменение разрешения изображений. Вместо огромных 300-600 DPI, мы делаем их 150 DPI, что идеально для экрана и печати, но весит в 10 раз меньше.</p>
                  </div>
                  <div className="p-6 border border-gray-800 rounded-3xl bg-gray-900/20">
                    <h4 className="text-cyan-400 font-bold mb-3">Удаление XMP/XML</h4>
                    <p className="text-sm text-gray-500">Внутри PDF часто скрыты тонны технической информации (XMP, эскизы страниц, данные о ПО). Мы вычищаем этот 'цифровой шум', уменьшая вес без потери качества.</p>
                  </div>
                </div>

                <div className="bg-cyan-500/5 p-8 rounded-[2rem] border border-cyan-500/10 mt-6">
                  <h3 className="text-xl font-bold text-white mb-4 italic">Сравнение онлайн и офлайн инструментов</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-base">
                    Многие пользователи привыкли использовать Adobe Acrobat или устанавливаемые программы. Однако, установка софта занимает время, а бесплатные версии часто ограничены. Обычные онлайн-сервисы загружают ваши файлы на сервер, что медленно и небезопасно. <strong>CompressPDFto200KB.online</strong> объединяет лучшее: скорость онлайн-доступа и безопасность локальной обработки. Мы используем библиотеку <code>pdf-lib</code> и WASM-модули для эффективной работы прямо в RAM вашего устройства.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-400 border-collapse">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="py-3 font-bold text-white">Параметр</th>
                          <th className="py-3 font-bold text-white">Наш сервис</th>
                          <th className="py-3 font-bold text-gray-600">Обычные сайты</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-800/50">
                          <td className="py-3">Место обработки</td>
                          <td className="py-3 text-cyan-400 font-bold">Ваш браузер</td>
                          <td className="py-3">Сервер компании</td>
                        </tr>
                        <tr className="border-b border-gray-800/50">
                          <td className="py-3">Приватность</td>
                          <td className="py-3 text-cyan-400 font-bold">100% (Offline-ready)</td>
                          <td className="py-3 text-red-900/50">Риск утечки</td>
                        </tr>
                        <tr className="border-b border-gray-800/50">
                          <td className="py-3">Скорость</td>
                          <td className="py-3 text-cyan-400 font-bold">Мгновенно</td>
                          <td className="py-3">Завит от интернета</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-black text-white">Как сжать PDF на телефоне (Android и iPhone)</h2>
                <p className="text-gray-400 leading-relaxed">
                  Часто документы для Госуслуг или виз приходится готовить "на бегу". Наш сайт специально оптимизирован для работы в мобильных браузерах Safari, Chrome и Samsung Internet. Вам не нужно скачивать сторонние приложения из App Store или Play Market, которые могут содержать скрытые подписки.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                    <h4 className="text-white font-bold mb-2">Для iPhone (iOS)</h4>
                    <p className="text-xs text-gray-500">Откройте PDF в Safari, нажмите 'Поделиться' -&gt; 'Сохранить в Файлы'. Затем выберите этот файл на нашем сайте. После сжатия нажмите 'Скачать', и файл появится в приложении 'Файлы' в папке 'Загрузки'.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                    <h4 className="text-white font-bold mb-2">Для Android</h4>
                    <p className="text-xs text-gray-500">В Google Chrome выберите файл из памяти устройства. После обработки файл автоматически сохранится в папку Download. Наш интерфейс потребляет минимум оперативной памяти, поэтому он не 'вылетает' даже на бюджетных смартфонах.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-10 rounded-[2.5rem] border-l-4 border-cyan-400">
                <h2 className="text-2xl font-bold text-white mb-5">Советы по эффективному сжатию</h2>
                <p className="text-gray-400 mb-6 italic">Чтобы получить минимальный размер файла при сохранении отличного качества, следуйте этим рекомендациям:</p>
                <ul className="space-y-3 text-sm text-gray-300 marker:text-cyan-400">
                  <li>Если вы сканируете документ, устанавливайте в настройках сканера разрешение 150 DPI или 200 DPI вместо 600 DPI. Это сэкономит 70% места еще до использования нашего инструмента.</li>
                  <li>При сохранении из Word (DOCX) в PDF используйте встроенную функцию 'Минимальный размер (публикация в Интернете)' — это создаст более легкий базовый файл.</li>
                  <li>Избегайте использования в PDF прозрачностей и сложных градиентов, если это официальный документ — они сильно увеличивают итоговый вес.</li>
                  <li>Обязательно используйте инструмент 'Сжать до 200 КБ', если вы подаете документы на российские порталы — это наш самый 'умный' пресет.</li>
                </ul>
              </div>

              <div className="border-t border-gray-800 pt-10">
                <h2 className="text-3xl font-black text-white mb-6">Ваша безопасность — наш главный приоритет</h2>
                <p className="leading-relaxed">
                  Когда вы используете <strong>бесплатный онлайн PDF компрессор</strong>, вы доверяете сервису свои паспорта, выписки со счетов и личные данные. Большинство сайтов монетизируют ваши данные или сохраняют их для обучения нейросетей.
                </p>
                <p className="leading-relaxed">
                  Наш подход в <strong>CompressPDFto200KB.online</strong> кардинально иной. Мы построили архитектуру на базе <strong>WebAssembly (WASM)</strong>, которая позволяет запускать сложный C++ и JavaScript код прямо в песочнице вашего браузера. Это гарантирует:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Никаких журналов (логов) с вашими файлами</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Никаких облачных хранилищ</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Файл удаляется из памяти устройства сразу после закрытия вкладки</li>
                </ul>
              </div>

              <div className="border-t border-gray-800 pt-10">
                <h2 className="text-3xl font-black text-white mb-6">Почему выбирают наш сервис?</h2>
                <p>
                  Главное отличие <strong>CompressPDFto200KB.online</strong> от большинства конкурентов — это работа по технологии Client-Side Processing. Это означает:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                  <li className="bg-cyan-500/5 p-4 rounded-2xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <span><strong>Файлы не покидают компьютер:</strong> все вычисления происходят в вашем браузере. Вы полностью контролируете свои данные.</span>
                  </li>
                  <li className="bg-cyan-500/5 p-4 rounded-2xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <span><strong>Молниеносная скорость:</strong> скорость сжатия не зависит от скорости вашего интернет-соединения на выгрузку.</span>
                  </li>
                  <li className="bg-cyan-500/5 p-4 rounded-2xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <span><strong>Без регистрации и рекламы:</strong> мы не собираем ваши email-адреса и не показываем назойливые баннеры.</span>
                  </li>
                  <li className="bg-cyan-500/5 p-4 rounded-2xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <span><strong>Кроссплатформенность:</strong> сервис одинаково эффективно работает на Windows, macOS, Android и iPhone.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ FAQ Section */}
        <FAQ
          title="Часто задаваемые вопросы о сжатии PDF"
          data={RU_FAQ_DATA}
        />

        {/* ✅ All Russian Tools Grid */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Все инструменты на русском языке</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { to: "/ru/szhat-pdf", l: "Сжать PDF (Основной)" },
              { to: "/ru/szhat-pdf-do-100kb", l: "Сжать до 100 КБ" },
              { to: "/ru/szhat-pdf-do-200kb", l: "Сжать до 200 КБ" },
              { to: "/ru/szhat-pdf-do-300kb", l: "Сжать до 300 КБ" },
              { to: "/ru/szhat-pdf-do-500kb", l: "Сжать до 500 КБ" },
              { to: "/ru/szhat-pdf-do-1mb", l: "Сжать до 1 МБ" },
              { to: "/ru/szhat-skanirovannyj-pdf", l: "Сжать скан PDF" },
              { to: "/ru/udalit-metadannye-pdf", l: "Удалить метаданные" },
              { to: "/ru/usloviya", l: "Условия использования" },
            ].map((link, i) => (
              <Link key={i} to={link.to} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                {link.l}
              </Link>
            ))}
          </div>
        </section>

        {/* ✅ Final Trust Marks */}
        <div className="max-w-5xl mx-auto py-10 border-t border-gray-800 flex flex-wrap justify-between gap-8 text-gray-500 text-sm italic">
          <p>Более 1,000,000 успешно сжатых документов по всему миру.</p>
          <p>Соответствует требованиям GDPR и 152-ФЗ о защите персональных данных.</p>
        </div>

        {/* bottom spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
};

export default Home;
