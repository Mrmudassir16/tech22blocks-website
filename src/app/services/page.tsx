import React from 'react';
import type { Metadata } from 'next';
import ServiceEditorial from '@/components/ServiceEditorial';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'Our Services — Tech22Blocks',
  description: 'Explore the 6 core software services offered by Tech22Blocks: Website Development, Mobile Application Development (iOS & Android), UI/UX Design, Custom Software Development, IT Consulting & Advisory, and Web3.0.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Editorial Header */}
      <section className="bg-[#030712] text-white py-24 lg:py-32 relative overflow-hidden border-b border-white/[0.08]">
        <StarWatermark size={650} position="top-right" variant="white" opacity={0.02} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
              <StarEmblem size={13} variant="white" opacity={0.9} />
              <span>// Capabilities &amp; Enterprise Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
              Software engineered to give your organization a decisive edge.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-normal leading-relaxed">
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
    </>
  );
}
