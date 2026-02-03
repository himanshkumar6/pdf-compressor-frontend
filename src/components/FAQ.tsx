import React from 'react';
import { FAQ_DATA } from '../utils/seoData';
import type { FAQItem } from '../utils/seoData';
import { HelpCircle } from 'lucide-react';

interface FAQProps {
  data?: FAQItem[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ data = FAQ_DATA, title = "Frequently Asked Questions" }) => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-3 mb-12">
          <HelpCircle className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">{title}</h2>
        </div>

        <div className="space-y-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-3">{item.question}</h3>
              <p className="text-gray-400 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
