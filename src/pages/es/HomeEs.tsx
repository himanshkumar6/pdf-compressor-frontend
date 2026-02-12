import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { PAGES_SEO } from "../../utils/seoData";
import { Scissors, Zap, Shield, Heart } from "lucide-react";

const HomeEs = () => {
  const page = PAGES_SEO["/es"];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <SEO
        title={page?.title || "Comprimir PDF Online - Gratis y Seguro"}
        description={page?.description || "Herramientas PDF gratuitas y seguras."}
        canonical="https://compresspdfto200kb.online/es"
        lang="es"
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Herramientas <span className="text-orange-500 text-glow">PDF</span> Gratuitas
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Procesa tus documentos directamente en tu navegador. Sin subidas a servidores,
          100% privado y rápido como el rayo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tool Card: Split PDF */}
        <Link
          to="/es/dividir-pdf-en-varias-partes-online"
          className="group p-8 rounded-[2.5rem] bg-black/40 border border-gray-800 hover:border-orange-500/50 hover:bg-orange-950/5 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-900/20">
            <Scissors className="w-7 h-7 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Dividir PDF</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Separa tus documentos en varias partes para subirlos a portales oficiales fácilmente.
          </p>
          <div className="flex items-center text-orange-400 font-bold group-hover:translate-x-1 transition-transform">
            Empezar ahora &rarr;
          </div>
        </Link>

        {/* Placeholder for other ES tools */}
        <div className="p-8 rounded-[2.5rem] bg-black/40 border border-gray-800 opacity-50 relative overflow-hidden group">
          <div className="w-14 h-14 rounded-2xl bg-gray-500/20 flex items-center justify-center mb-6">
            <Zap className="w-7 h-7 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Comprimir PDF</h2>
          <p className="text-gray-400 leading-relaxed"> Próximamente en español </p>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold px-4 py-2 bg-gray-800 rounded-xl">Próximamente</span>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-white font-bold mb-2">100% Privado</h3>
          <p className="text-gray-500 text-sm">Tus archivos nunca salen de tu navegador.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-pink-400" />
          </div>
          <h3 className="text-white font-bold mb-2">Gratis de verdad</h3>
          <p className="text-gray-500 text-sm">Sin registros, sin límites y sin publicidad intrusiva.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-orange-400" />
          </div>
          <h3 className="text-white font-bold mb-2">Ultra Rápido</h3>
          <p className="text-gray-500 text-sm">Procesamiento local utilizando la potencia de tu dispositivo.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeEs;