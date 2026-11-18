import React from 'react';
import type { Metadata } from 'next';
import PortfolioPreview from '@/components/PortfolioPreview';
import FinalCTA from '@/components/FinalCTA';
import { ExternalLink } from 'lucide-react';
import { COMPANY } from '@/data/company';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies — Tech22Blocks',
  description: 'Explore live client implementations and case studies delivered by Tech22Blocks (RRK Software Technologies Private Limited).',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#030712] text-white py-24 lg:py-32 relative overflow-hidden border-b border-white/[0.08]">
        <StarWatermark size={650} position="top-right" variant="white" opacity={0.02} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
              <StarEmblem size={13} variant="white" opacity={0.9} />
              <span>Client Case Studies &amp; Implementations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
              Our Work Speaks for Itself.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-normal leading-relaxed">
              We focus on shipping reliable code and building systems that solve operational bottlenecks. Explore our official case study catalog.
            </p>
            <div className="pt-8">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-[#0a85b1] to-[#0284c7] hover:from-sky-400 hover:to-sky-500 transition-all shadow-[0_0_20px_rgba(14,165,233,0.35)] hover:-translate-y-0.5"
              >
                <span>Open Official Case Studies</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Teasers Grid */}
      <PortfolioPreview />

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}
