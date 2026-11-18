'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COMPANY } from '@/data/company';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export default function FAQSection() {
  const { faqs } = COMPANY;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] text-white border-t border-white/[0.08] overflow-hidden" aria-labelledby="faq-heading">
      <StarWatermark size={580} position="bottom-right" variant="white" opacity={0.015} rotate={15} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
            <span>Clarity &amp; Questions</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Straightforward answers regarding our software capabilities, working models, and technology services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-xl ${
                  isOpen 
                    ? 'bg-[#0b1120]/90 border-sky-500/40 shadow-[0_0_25px_rgba(14,165,233,0.12)]' 
                    : 'bg-white/[0.02] border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.04]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                    isOpen ? 'text-[#38bdf8]' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-sky-500/20 text-[#38bdf8] rotate-180' : 'bg-white/[0.04] text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal border-t border-white/[0.06] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
