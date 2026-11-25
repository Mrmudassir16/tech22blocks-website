'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { StarWatermark } from '@/components/StarEmblem';
import { StaggeredText } from '@/components/design-system/KineticTypography';

export default function FAQSection() {
  const { faqs } = COMPANY;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[var(--surface-elevated)] text-[var(--text-primary)] border-t border-[var(--border)] overflow-hidden transition-colors duration-200" aria-labelledby="faq-heading">
      <StarWatermark size={580} position="bottom-right" variant="blue" opacity={0.02} rotate={15} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="mb-3">
            <span className="heading-focus-underline text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
              Clarity &amp; Questions
            </span>
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight font-display">
            <StaggeredText text="Frequently Asked" />{' '}
            <StaggeredText text="Questions" isShimmer />
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[var(--text-muted)] font-normal">
            Straightforward answers regarding our software capabilities, working models, and technology services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[var(--surface)] border-[var(--accent)] shadow-md' 
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold tracking-tight transition-colors font-display ${
                    isOpen ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-[var(--accent)]/15 text-[var(--accent)] rotate-180' : 'bg-[var(--surface-elevated)] text-[var(--text-muted)]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal border-t border-[var(--border)] pt-3.5">
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
