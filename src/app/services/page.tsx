import React from 'react';
import type { Metadata } from 'next';
import ServiceEditorial from '@/components/ServiceEditorial';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'Our Services — Tech22Blocks',
  description: 'Explore the 6 core software services offered by Tech22Blocks: Website Development, Mobile Application Development (iOS & Android), UI/UX Design, Custom Software Development, IT Consulting & Advisory, and Web3.0.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Editorial Header */}
      <section className="bg-[var(--surface)] text-[var(--text-primary)] py-14 sm:py-20 lg:py-28 relative overflow-hidden border-b border-[var(--border)] transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3 sm:mb-4 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
              <span>Capabilities &amp; Enterprise Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              Software engineered to give your organization a decisive edge.
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed">
              We focus on impact over volume. Every engagement receives dedicated engineering leadership, transparent codebases, disciplined architectures, and reliable milestone delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Services Editorial */}
      <ServiceEditorial />

      {/* Technical FAQ */}
      <FAQSection />

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
