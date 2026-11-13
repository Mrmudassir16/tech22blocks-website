import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroConcept2() {
  return (
    <section 
      className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200"
      aria-label="Hero Section - Concept B: Premium Editorial Typography-Led"
    >
      
      {/* 1. Subtle Editorial Hairline Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0a85b1 1px, transparent 1px),
            linear-gradient(to bottom, #0a85b1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Top Editorial Classification Bar */}
      <div className="border-b border-slate-200/80 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-600">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-[#0a85b1]/10 text-[#0a85b1] font-bold uppercase tracking-wider">
              Concept B &bull; Premium Editorial Typography-Led
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline font-semibold">{COMPANY.legalName}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-medium">Corporate Charter &bull; 2025 Edition</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Production Ready
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Asymmetrical Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        
        {/* Massive Editorial Headline Block */}
        <div className="mb-12 max-w-5xl">
          <div className="inline-flex items-center gap-2 mb-5 text-xs font-mono uppercase tracking-widest text-[#0a85b1] font-bold">
            <span className="w-8 h-0.5 bg-[#0a85b1]"></span>
            <span>Technology Engineering &bull; In-House Products &amp; Client Solutions</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-950 tracking-tight leading-[0.98] uppercase">
            Engineering software <br />
            <span className="inline-block mt-2 px-4 py-1.5 rounded-xl bg-[#0a85b1] text-white shadow-md">
              that ships.
            </span>
          </h1>
        </div>

        {/* Asymmetrical 7/5 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Editorial Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight leading-snug">
                From ambitious ideas to enterprise-scale solutions.
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Tech22Blocks unites strategic governance with modern engineering agility. We operate with dual capability: building our own autonomous voice intelligence system (<strong className="text-slate-900 font-semibold">VoiSage AI</strong>) and delivering high-craft bespoke software architectures for ambitious companies worldwide.
              </p>
            </div>

            {/* Editorial CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-950 hover:bg-[#0a85b1] rounded-xl shadow-md transition-colors group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services/"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors border border-slate-300"
              >
                <span>Explore Our Capabilities</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-slate-500" />
              </Link>
            </div>

            {/* Editorial Credentials Footnote */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0a85b1]" />
                <span className="text-slate-700 font-semibold">DPIIT Recognized</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                <span className="text-slate-700 font-semibold">MSME Registered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0a85b1]"></span>
                <span className="text-slate-700 font-semibold">100% Code Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Deep Blue Monolith Architectural Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#040e1a] text-white p-7 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0a85b1]" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                    Architectural Spec
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-400 font-bold">
                  2025 CHARTER
                </span>
              </div>

              {/* Monolith Principles */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <p className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wide">
                    01 &bull; Direct Accountability
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Zero junior account managers or telephone games. You collaborate directly with principal architects and leadership.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <p className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wide">
                    02 &bull; Total IP &amp; Code Ownership
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Full access to Git repositories, CI/CD pipelines, and cloud environments from sprint zero. Zero proprietary lock-in.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <p className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wide">
                    03 &bull; Production-Grade Craft
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every client system receives the same engineering discipline honed for our proprietary voice AI platform.
                  </p>
                </div>
              </div>

              {/* Technologies strip */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Core Stack:</span>
                <span className="text-sky-300">Next.js &bull; TypeScript &bull; Python &bull; Go</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
