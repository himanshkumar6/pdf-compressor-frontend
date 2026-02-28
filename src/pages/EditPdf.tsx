import React from "react";
import {
  Monitor,
  Smartphone,
  HelpCircle,
  Laptop
} from "lucide-react";
import ToolLandingPage from "../components/ToolLandingPage";
import ToolErrorBoundary from "../components/ToolErrorBoundary";
import PdfEditor from "../features/pdf-editor/PdfEditor";

const UniqueSEOContent = () => (
  <div className="space-y-10 md:space-y-12 text-(--textBody)">

    {/* Hero */}
    <section className="bg-(--card) p-4 sm:p-6 md:p-8 rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-(--textHeading) mb-3 md:mb-4 leading-snug">
        Free <span className="text-cyan-600 dark:text-cyan-400 italic">PDF Editor Online</span> - No Installation Required
      </h2>

      <p className="leading-relaxed mb-5 text-base md:text-lg">
        Searching for a way to modify your documents without heavy software? Whether you need to <strong>edit PDF in Firefox</strong>, Chrome, or Safari, our tool provides a seamless experience. It's the perfect solution for users looking to <strong>edit PDF documents in Linux</strong> or Windows directly through their favorite web browser.
      </p>

      <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
        {['Firefox', 'Chrome', 'Linux', 'macOS', 'Windows'].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-100 dark:border-cyan-500/20 rounded-full text-[9px] font-semibold tracking-normal text-cyan-700 dark:text-cyan-400"
          >
            {tag} Supported
          </span>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {[
        {
          title: "Edit on iPhone & iPad",
          desc: "No need for paid apps. Learn <strong>how to edit PDF file in iPhone</strong> or iPad instantly using our mobile-optimized interface.",
          icon: Smartphone,
          color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-500/10"
        },
        {
          title: "Linux & Open Source",
          desc: "For those using <strong>Linux edit PDF</strong> workflows, our tool is a great alternative to <strong>LibreOffice Draw edit PDF</strong>.",
          icon: Laptop,
          color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10"
        },
        {
          title: "Browser Based",
          desc: "Edit directly in your browser. Whether you use <strong>LibreOffice</strong> or <strong>Google Drive</strong>, our tool fills the gaps.",
          icon: Monitor,
          color: "text-green-600 bg-green-50 dark:bg-green-500/10"
        }
      ].map((item, i) => (
        <div
          key={i}
          className="p-4 sm:p-6 md:p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition hover:-translate-y-1 transition-all"
        >
          <div className={`w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
            <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <h3 className="font-semibold text-(--textHeading) mb-2 text-base md:text-lg leading-snug">
            {item.title}
          </h3>

          <p
            className="text-sm md:text-base text-(--textBody) leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        </div>
      ))}
    </section>

    {/* FAQ */}
    <section className="space-y-6 md:space-y-8">
      <h3 className="text-lg md:text-2xl font-semibold text-(--textHeading) flex items-center gap-3 leading-snug">
        <HelpCircle className="w-6 h-6 md:w-7 md:h-7 text-cyan-500" />
        PDF Editing Guide & Tips
      </h3>

      <div className="grid gap-4 md:gap-5">
        {[
          {
            q: "How to edit PDF documents in Google Drive?",
            a: "While you can <strong>edit PDF in Google Drive</strong> by converting it to Docs, our tool allows you to edit the original layout directly without losing formatting."
          },
          {
            q: "Can I edit PDF with LibreOffice Draw?",
            a: "Yes, you can <strong>edit PDF with LibreOffice</strong>, but our online tool is much faster and requires no installation, working perfectly on <strong>Firefox</strong> and <strong>Linux</strong> systems."
          },
          {
            q: "Is it safe to edit sensitive documents?",
            a: "Absolutely. All processing is done locally in your browser. We don't store your files, making it a 100% secure way to modify your documents."
          }
        ].map((faq, i) => (
          <div
            key={i}
            className="p-4 sm:p-5 md:p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition"
          >
            <h4 className="font-semibold text-(--textHeading) mb-2 flex items-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
              <span className="text-cyan-600 dark:text-cyan-500 shrink-0">Q.</span>
              <span dangerouslySetInnerHTML={{ __html: faq.q }} />
            </h4>

            <p
              className="text-sm md:text-base text-(--textBody) leading-relaxed pl-6 md:pl-8 border-l border-cyan-500/20"
              dangerouslySetInnerHTML={{ __html: faq.a }}
            />
          </div>
        ))}
      </div>
    </section>
  </div>
);


const EditPdf: React.FC = () => {
  return (
    <ToolErrorBoundary toolName="Edit PDF">
      <ToolLandingPage
        routeKey="/edit-pdf"
        heading={
          <span className="text-(--textHeading)">
            Online{" "}
            <span className="text-cyan-600 dark:text-cyan-500 italic">
              PDF Editor
            </span>
          </span>
        }
        tagline="Free, Fast, and Secure PDF Editing across Linux, iPhone, and Windows."
        customContent={<UniqueSEOContent />}
      >
        <PdfEditor />
      </ToolLandingPage>
    </ToolErrorBoundary>
  );
};


export default EditPdf;