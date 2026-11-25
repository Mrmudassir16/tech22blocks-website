import React from 'react';
import type { Metadata } from 'next';
import PortfolioPreview from '@/components/PortfolioPreview';
import FinalCTA from '@/components/FinalCTA';
import { ExternalLink } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies — Tech22Blocks',
  description: 'Explore live client implementations and case studies delivered by Tech22Blocks (RRK Software Technologies Private Limited).',
};

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Header */}
      <section className="bg-[var(--surface)] text-[var(--text-primary)] pt-24 sm:pt-28 pb-14 sm:pb-20 lg:py-28 relative overflow-hidden border-b border-[var(--border)] transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-3 sm:mb-4">
              <span className="heading-focus-underline text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                Client Case Studies &amp; Implementations
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              Our Work Speaks for Itself.
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed">
              We focus on shipping reliable code and building systems that solve operational bottlenecks. Explore our official case study catalog.
            </p>
            <div className="pt-6 sm:pt-8">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all shadow-md hover:-translate-y-0.5"
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
    </div>
  );
}
