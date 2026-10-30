import React from 'react';
import type { Metadata } from 'next';
import PortfolioPreview from '@/components/PortfolioPreview';
import RecognitionStrip from '@/components/RecognitionStrip';
import FinalCTA from '@/components/FinalCTA';
import { ExternalLink } from 'lucide-react';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies — Tech22Blocks',
  description: 'Explore live client implementations and case studies delivered by Tech22Blocks (RRK Software Technologies Private Limited).',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
              <span>Client Case Studies &amp; Implementations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Our Work Speaks for Itself.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed">
              We focus on shipping reliable code and building systems that solve operational bottlenecks. Explore our official case study catalog.
            </p>
            <div className="pt-8">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] transition-all shadow"
              >
                <span>Open Official Case Studies</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition strip */}
      <RecognitionStrip />

      {/* Portfolio Preview Module */}
      <PortfolioPreview />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}

