import React from 'react';
import type { Metadata } from 'next';
import ProductShowcase from '@/components/ProductShowcase';
import FinalCTA from '@/components/FinalCTA';
import { Shield, Cpu, Layers } from 'lucide-react';
import { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'Our Products — AI Call Assistant for Unknown Calls',
  description: 'Tech22Blocks builds proprietary software tools. Discover our in-house AI Call Assistant engineered to screen unknown calls and protect executive focus.',
};

export default function ProductsPage() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Product Hero Header */}
      <section className="relative bg-[var(--surface)] text-[var(--text-primary)] pt-24 sm:pt-28 pb-14 sm:pb-20 lg:py-28 border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-3 sm:mb-4">
              <span className="heading-focus-underline text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                Internal R&amp;D Initiatives
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              We don&apos;t just build for clients. We build for ourselves too.
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed">
              When we encounter deep daily operational frustrations, we build technology to solve them. Here is a look at what our engineering team is actively building.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <ProductShowcase />

      {/* Engineering Philosophy Behind Internal Products */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--canvas)] text-[var(--text-primary)] border-t border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={550} position="bottom-right" variant="blue" opacity={0.02} rotate={-10} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <div className="mb-3">
              <span className="heading-focus-underline text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                Product Philosophy
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
              Why We Build In-House Products
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
              Developing our own proprietary systems ensures our team stays sharp, understands the full product lifecycle, and confronts real engineering complexities before offering solutions to clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">First-Party Dogfooding</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                We use the AI Call Assistant in our own executive daily routines, refining latency, voice fidelity, and accuracy based on genuine caller scenarios.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">Privacy &amp; Data Control</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                Our audio architectures are designed with secure transcription pipelines, ensuring sensitive business conversations remain strictly confidential.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">Production-Ready Architecture</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                Every component developed for our products — from speech-to-text to webhook triggers — enhances the codebase foundation we bring to client projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <FinalCTA />
    </div>
  );
}
