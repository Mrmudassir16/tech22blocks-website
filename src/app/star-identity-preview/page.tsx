'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  Code2, 
  Compass 
} from 'lucide-react';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import { getAssetUrl } from '@/utils/assets';

type Direction = 'all' | 'direction-a' | 'direction-b' | 'direction-c';

export default function StarIdentityPreviewPage() {
  const [activeTab, setActiveTab] = useState<Direction>('all');

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Exploration Header */}
      <section className="relative py-16 border-b border-slate-800 bg-[#020b14] overflow-hidden">
        <StarWatermark size={600} position="top-right" variant="white" opacity={0.035} rotate={20} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
            <StarEmblem size={14} variant="blue" />
            <span>Brand Identity System &bull; Design Exploration</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Star Logo Identity Exploration
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl font-light leading-relaxed">
            Exploring three distinct creative directions for integrating the proprietary Tech22Blocks star logo as a signature visual identity across the entire website.
          </p>

          {/* Direction Filter Switcher */}
          <div className="flex flex-wrap gap-2 pt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#0a85b1] text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Show All 3 Directions
            </button>
            <button
              onClick={() => setActiveTab('direction-a')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'direction-a'
                  ? 'bg-[#0a85b1] text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Direction A: Architectural Watermarks
            </button>
            <button
              onClick={() => setActiveTab('direction-b')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'direction-b'
                  ? 'bg-[#0a85b1] text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Direction B: Deep Blue Atmosphere
            </button>
            <button
              onClick={() => setActiveTab('direction-c')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'direction-c'
                  ? 'bg-[#0a85b1] text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Direction C: Modular Pattern &amp; Dividers
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* DIRECTION A: Architectural Precision & Geometric Watermarks */}
      {/* ======================================================== */}
      {(activeTab === 'all' || activeTab === 'direction-a') && (
        <section className="py-20 border-b border-slate-800 bg-white text-slate-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-10 pb-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#0a85b1] uppercase tracking-wider">
                  Direction A &bull; Corporate Editorial Restraint
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                  Architectural Precision &amp; Cropped Watermarks
                </h2>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                Opacity: 2% – 4% &bull; Subtly Cropped &bull; Editorial White
              </span>
            </div>

            {/* Live Section Preview: Editorial Card with Cropped Star Watermark */}
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 sm:p-12 overflow-hidden shadow-sm">
              <StarWatermark size={550} position="top-right" variant="blue" opacity={0.045} rotate={15} />

              <div className="relative z-10 max-w-2xl space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                  <StarEmblem size={14} variant="blue" />
                  <span>Engineering Methodology</span>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-950 leading-tight">
                  Software engineered with architectural rigor and lasting clarity.
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  By treating the star mark as a massive architectural watermark extending off the boundary, the brand creates immediate distinction while preserving 100% reading contrast.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <p className="font-bold text-slate-900 text-sm">WCAG AAA Contrast</p>
                    <p className="text-xs text-slate-500 mt-1">Text remains completely undisturbed over low-opacity mark.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <p className="font-bold text-slate-900 text-sm">Editorial Authority</p>
                    <p className="text-xs text-slate-500 mt-1">Evokes institutional engineering confidence like Stripe or Palantir.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* DIRECTION B: Deep Brand Blue-on-Blue Compositions */}
      {/* ======================================================== */}
      {(activeTab === 'all' || activeTab === 'direction-b') && (
        <section className="py-20 border-b border-slate-800 bg-[#020b14] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-10 pb-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  Direction B &bull; Signature Tech Atmosphere
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Deep Brand Blue-on-Blue Compositions
                </h2>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-slate-900 text-sky-300 border border-slate-800">
                Luminescent Halo &bull; Dark Midnight &bull; Deep Tech
              </span>
            </div>

            {/* Live Section Preview: Blue-on-Blue Atmospheric Canvas */}
            <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-br from-[#020b14] via-[#031b33] to-[#020b14] p-8 sm:p-12 overflow-hidden shadow-2xl">
              
              {/* Star Background with Ambient Radial Glow */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 pointer-events-none">
                <div className="absolute inset-0 bg-[#0a85b1]/20 rounded-full blur-[90px] w-[450px] h-[450px]" />
                <StarEmblem size={500} variant="white" opacity={0.06} rotate={-10} />
              </div>

              <div className="relative z-10 max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-sky-500/40 text-xs font-mono text-sky-300">
                  <StarEmblem size={14} variant="white" opacity={0.9} />
                  <span>Autonomous Intelligence Showcase</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  High-performance systems illuminated by identity.
                </h3>

                <p className="text-slate-300 leading-relaxed text-base font-light">
                  In dark sections (Hero, Featured Product, Products, Contact), the star interacts with soft radial blue lighting to create a proprietary signature atmosphere that sets Tech22Blocks apart from generic SaaS sites.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <div className="px-5 py-3 rounded-xl bg-[#0a85b1] text-white font-semibold text-sm shadow-lg shadow-[#0a85b1]/30">
                    Explore Technology
                  </div>
                  <span className="text-xs text-sky-300 font-mono">
                    Deep Engineering Aesthetic
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* DIRECTION C: Modular Pattern & Section Anchors */}
      {/* ======================================================== */}
      {(activeTab === 'all' || activeTab === 'direction-c') && (
        <section className="py-20 border-b border-slate-800 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-10 pb-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                  Direction C &bull; Modular System &amp; Section Dividers
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Modular Pattern &amp; Section Identity Anchors
                </h2>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Corner Badges &bull; Card Watermarks &bull; Rhythmic Dividers
              </span>
            </div>

            {/* Live Section Preview: 3-Card Grid with Star Identity Integration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700 p-7 overflow-hidden group hover:border-[#0a85b1] transition-all">
                <StarWatermark size={200} position="bottom-right" variant="white" opacity={0.035} rotate={10} />
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">01. Web Platforms</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Edge-optimized Next.js web platforms with micro-watermarked brand assurance.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700 p-7 overflow-hidden group hover:border-[#0a85b1] transition-all">
                <StarWatermark size={200} position="bottom-right" variant="white" opacity={0.035} rotate={25} />
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">02. Mobile Applications</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Native iOS &amp; Android systems engineered for fluid 60 FPS performance.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700 p-7 overflow-hidden group hover:border-[#0a85b1] transition-all">
                <StarWatermark size={200} position="bottom-right" variant="white" opacity={0.035} rotate={-15} />
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">03. Custom Software</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enterprise core architectures with ACID compliance and modular scalability.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* STRATEGIC EVALUATION & RECOMMENDATION */}
      {/* ======================================================== */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
              Creative Director Evaluation
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Evaluation &amp; Recommended Synthesis
            </h2>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              For an international corporate technology company, no single extreme is ideal. The most distinguished outcome is a **Thoughtful Hybrid Synthesis**:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h4 className="font-bold text-white text-base">Direction A (Light Sections)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Applied to white/light editorial sections (Who We Are, Why Tech22Blocks, Founders Story, Service Details). Uses massive 500px+ watermarks at 3-4% opacity so content remains pristine.
              </p>
              <div className="text-[11px] font-mono text-emerald-400">Rating: 9.5/10 for Editorial Credibility</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h4 className="font-bold text-white text-base">Direction B (Dark Sections)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Applied to deep corporate canvases (Hero, VoiSage AI, Products Hero, Final CTA). Uses white star silhouettes with ambient blue radial lighting.
              </p>
              <div className="text-[11px] font-mono text-sky-400">Rating: 9.8/10 for Technology Impact</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h4 className="font-bold text-white text-base">Direction C (Micro Accents)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Applied as subtle 14px–20px emblems in category pills and selected card watermarks, ensuring brand cohesion without visual clutter.
              </p>
              <div className="text-[11px] font-mono text-amber-400">Rating: 9.2/10 for Modular Cohesion</div>
            </div>

          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#0a85b1]/10 border border-[#0a85b1]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-sm">
                Ready to review the live website implementation?
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                Navigate to the main site to view how the star identity is harmoniously applied across all pages.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#0a85b1] hover:bg-[#0284c7] text-white text-xs font-mono font-bold transition-all shadow-md whitespace-nowrap"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
