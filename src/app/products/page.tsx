import React from 'react';
import type { Metadata } from 'next';
import ProductShowcase from '@/components/ProductShowcase';
import FinalCTA from '@/components/FinalCTA';
import { Shield, Sparkles, Cpu, Layers } from 'lucide-react';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'Our Products — AI Call Assistant for Unknown Calls',
  description: 'Tech22Blocks builds proprietary software tools. Discover our in-house AI Call Assistant engineered to screen unknown calls and protect executive focus.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Product Hero Header */}
      <section className="relative bg-[#030712] text-white py-24 lg:py-32 border-b border-white/[0.08] overflow-hidden">
        <StarWatermark size={650} position="top-right" variant="white" opacity={0.02} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
              <span>Internal R&amp;D Initiatives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
              We don&apos;t just build for clients. We build for ourselves too.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-normal leading-relaxed">
              When we encounter deep daily operational frustrations, we build technology to solve them. Here is a look at what our engineering team is actively building.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <ProductShowcase />

      {/* Engineering Philosophy Behind Internal Products */}
      <section className="relative py-28 lg:py-36 bg-[#060b18] text-white border-t border-white/[0.08] overflow-hidden">
        <StarWatermark size={550} position="bottom-right" variant="white" opacity={0.015} rotate={-10} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
              <span>Product Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] mt-2">
              Why We Build In-House Products
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Developing our own proprietary systems ensures our team stays sharp, understands the full product lifecycle, and confronts real engineering complexities before offering solutions to clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-500/40 backdrop-blur-xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">First-Party Dogfooding</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                We use the AI Call Assistant in our own executive daily routines, refining latency, voice fidelity, and accuracy based on genuine caller scenarios.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-500/40 backdrop-blur-xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Privacy &amp; Data Control</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Our audio architectures are designed with secure transcription pipelines, ensuring sensitive business conversations remain strictly confidential.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-500/40 backdrop-blur-xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Production-Ready Architecture</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Every component developed for our products — from speech-to-text to webhook triggers — enhances the codebase foundation we bring to client projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <FinalCTA />
    </>
  );
}
