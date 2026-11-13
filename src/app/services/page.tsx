import React from 'react';
import type { Metadata } from 'next';
import ServiceEditorial from '@/components/ServiceEditorial';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Our Services — Tech22Blocks',
  description: 'Explore the 6 core software services offered by Tech22Blocks: Website Development, Mobile Application Development (iOS & Android), UI/UX Design, Custom Software Development, IT Consulting & Advisory, and Web3.0.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Editorial Header */}
      <section className="bg-slate-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-slate-800">
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
              <span>Capabilities &amp; Enterprise Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Software engineered to give your organization a decisive edge.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed">
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
