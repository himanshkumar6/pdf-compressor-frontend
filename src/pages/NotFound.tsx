import React from "react";
import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";
import SEO from "../components/SEO";
import { NOT_FOUND_SEO } from "../utils/seoData";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <SEO
        title={NOT_FOUND_SEO.title}
        description={NOT_FOUND_SEO.description}
        canonical={NOT_FOUND_SEO.canonical}
      />
      <div className="animate-float">
        <Ghost className="w-24 h-24 text-cyan-400 mb-8 mx-auto" />
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-12">Oops! The PDF you're looking for was lost in cyberspace.</p>
      <Link
        to="/"
        className="btnPrimary px-8 py-4 rounded-2xl transition-all hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
