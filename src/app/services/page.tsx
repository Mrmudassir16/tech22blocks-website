import React from 'react';
import type { Metadata } from 'next';
import ServiceEditorial from '@/components/ServiceEditorial';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import RecognitionStrip from '@/components/RecognitionStrip';

export const metadata: Metadata = {
  title: 'Our Services — Software Engineering & Digital Capabilities',
  description: 'Explore the 6 core software services offered by Tech22Blocks: Website Development, Mobile Apps (iOS & Android), UI/UX Design, Custom Software, IT Consulting, and Web3.0.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Editorial Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
              <span>Capabilities &amp; Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Software engineered to give your business a real edge.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed">
              We focus on impact over volume. Every project receives dedicated engineering focus, disciplined architecture, and clear communication.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Strip */}
      <RecognitionStrip />

      {/* Alternating Services Editorial */}
      <ServiceEditorial />

      {/* Technical FAQ */}
      <FAQSection />

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}

