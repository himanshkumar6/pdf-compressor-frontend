import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Ghost } from "lucide-react";
import SEO from "../components/SEO";
import { NOT_FOUND_SEO } from "../utils/seoData";

const NotFound: React.FC = () => {
  const location = useLocation();
  const isRu = location.pathname.startsWith("/ru");

  const content = isRu
    ? {
      title: "404 - Страница не найдена | Сжать PDF",
      description: "Упс! Похоже, этой страницы не существует.",
      heading: "404",
      subheading: "Страница не найдена",
      message: "Упс! Похоже, этой страницы не существует.",
      button: "На главную",
      link: "/ru",
    }
    : {
      title: NOT_FOUND_SEO.title,
      description: NOT_FOUND_SEO.description,
      heading: "404",
      subheading: "Page Not Found",
      message: "Oops! The PDF you're looking for was lost in cyberspace.",
      button: "Go Back Home",
      link: "/",
    };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <SEO
        title={content.title}
        description={content.description}
        canonical={NOT_FOUND_SEO.canonical}
        lang={isRu ? "ru" : "en"}
      />
      <div className="animate-float">
        <Ghost className="w-24 h-24 text-cyan-400 mb-8 mx-auto" />
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">{content.heading}</h1>
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">{content.subheading}</h2>
      <p className="text-xl text-gray-500 mb-12">{content.message}</p>
      <Link
        to={content.link}
        className="btnPrimary px-8 py-4 rounded-2xl transition-all hover:scale-105"
      >
        {content.button}
      </Link>
    </div>
  );
};

export default NotFound;
