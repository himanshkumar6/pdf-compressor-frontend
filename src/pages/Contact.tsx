import React, { useState } from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const seo = PAGES_SEO["/contact"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Our Team</h1>
        <p className="text-gray-400">Have questions about our PDF tools? We're here to help.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl">
            <Mail className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-white font-bold mb-2">Email Us</h3>
            <p className="text-sm text-gray-500">himanshucareer01@gmail.com</p>
          </div>
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl">
            <MessageSquare className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-white font-bold mb-2">Live Support</h3>
            <p className="text-sm text-gray-500">Available Mon-Fri, 12pm-5pm IST</p>
          </div>
        </div>

        <div className="md:col-span-2 bg-gray-900/50 border border-gray-800 rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
              <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" required></textarea>
            </div>
            <button
              type="submit"
              className="btnPrimary w-full py-4 rounded-xl flex items-center justify-center"
            >
              {sent ? "Message Sent Successfully!" : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
