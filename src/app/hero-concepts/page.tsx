import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check, Sparkles, Eye, Compass, Layers } from 'lucide-react';
import HeroConcept1 from '@/components/hero-concepts/HeroConcept1';
import HeroConcept2 from '@/components/hero-concepts/HeroConcept2';
import HeroConcept3 from '@/components/hero-concepts/HeroConcept3';

export const metadata: Metadata = {
  title: 'Hero Section Design Concepts — Tech22Blocks',
  description: 'Three distinct working preview concepts for the Tech22Blocks corporate website hero section.',
};

export default function HeroConceptsPage() {
  return (
    <div className="bg-slate-100 min-h-screen">
      
      {/* Top Review Masthead */}
      <header className="bg-slate-950 text-white border-b border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>Back to Homepage Live Preview</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Tech22Blocks Hero Section &bull; 3 Working Design Concepts
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                As requested, we have created three distinctly different, fully functional hero section concepts using the existing project components, styling system, and assets. Each concept features a unique visual direction, layout, typography, and image treatment while strictly preserving Tech22Blocks&apos; blue-and-white brand identity.
              </p>
            </div>

            {/* Quick Navigation Anchor Bar */}
            <div className="flex flex-wrap md:flex-col gap-2 flex-shrink-0">
              <a
                href="#concept-a"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-[#0a85b1] text-xs font-mono border border-slate-800 hover:border-[#0a85b1] text-slate-200 transition-colors"
              >
                Jump to Concept A &darr;
              </a>
              <a
                href="#concept-b"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-[#0a85b1] text-xs font-mono border border-slate-800 hover:border-[#0a85b1] text-slate-200 transition-colors"
              >
                Jump to Concept B &darr;
              </a>
              <a
                href="#concept-c"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-[#0a85b1] text-xs font-mono border border-slate-800 hover:border-[#0a85b1] text-slate-200 transition-colors"
              >
                Jump to Concept C &darr;
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* CONCEPT A SECTION */}
      <section id="concept-a" className="py-12 border-b-8 border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0a85b1] text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                <span>Concept A</span>
                <span>&bull;</span>
                <span>Immersive Full-Width Corporate Image-Led</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Full-Width Visual Background with Sophisticated Blue Treatment
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                Features an edge-to-edge corporate technology visual background with a multi-stage deep navy/brand blue gradient treatment, architectural grid overlay, luminous typography with WCAG AAA contrast, and a docked trust metrics strip.
              </p>
            </div>
            <div className="flex-shrink-0 text-xs font-mono text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-900">Key Highlights:</p>
              <p>&bull; WCAG AAA text contrast</p>
              <p>&bull; Edge-to-edge cinematic scale</p>
              <p>&bull; Docked metrics &amp; trust strip</p>
            </div>
          </div>
        </div>

        {/* Live Working Component Preview */}
        <div className="shadow-2xl">
          <HeroConcept1 />
        </div>
      </section>

      {/* CONCEPT B SECTION */}
      <section id="concept-b" className="py-12 border-b-8 border-slate-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                <span>Concept B</span>
                <span>&bull;</span>
                <span>Premium Editorial Typography-Led</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Whitespace-Driven Asymmetry with Deep Blue Architectural Monolith
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                Breaks away from repetitive text-left/image-right symmetry with a high-fashion editorial layout. Features a massive uppercase headline with a brand blue geometric highlight block, high-contrast whitespace, an editorial index, and an asymmetrical deep blue engineering monolith detailing company principles.
              </p>
            </div>
            <div className="flex-shrink-0 text-xs font-mono text-slate-500 bg-white p-3 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-900">Key Highlights:</p>
              <p>&bull; Asymmetrical 7/5 spatial rhythm</p>
              <p>&bull; Editorial headline typography</p>
              <p>&bull; Deep blue monolith architectural card</p>
            </div>
          </div>
        </div>

        {/* Live Working Component Preview */}
        <div className="shadow-2xl">
          <HeroConcept2 />
        </div>
      </section>

      {/* CONCEPT C SECTION */}
      <section id="concept-c" className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-sky-900/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                <span>Concept C</span>
                <span>&bull;</span>
                <span>Digital Engineering Visual Composition</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Technical CAD Blueprint with Multi-Tier System Topology
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                Inspired by elite engineering infrastructure platforms (Databricks, Stripe, Linear). Features a CAD blueprint coordinate grid, live HUD telemetry header, and an interactive multi-tier architecture topology displaying real frontend, voice intelligence (VoiSage AI), and backend cloud systems.
              </p>
            </div>
            <div className="flex-shrink-0 text-xs font-mono text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800">
              <p className="font-semibold text-white">Key Highlights:</p>
              <p>&bull; CAD blueprint grid aesthetic</p>
              <p>&bull; Multi-tier interactive topology</p>
              <p>&bull; Technical authority &amp; latency metrics</p>
            </div>
          </div>
        </div>

        {/* Live Working Component Preview */}
        <div className="shadow-2xl">
          <HeroConcept3 />
        </div>
      </section>

      {/* Review Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-950">
            Which concept do you prefer for the Tech22Blocks homepage?
          </h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Once you review these three working previews and share your selection (Concept A, Concept B, or Concept C), we will proceed with the rest of the homepage redesign following your designated creative direction.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#0a85b1] hover:bg-[#0284c7] text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Return to Homepage (with Live Concept Switcher)</span>
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
