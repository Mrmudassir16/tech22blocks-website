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
  Cpu
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroConcept2() {
  return (
    <section className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* 1. Subtle Editorial Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0a85b1 1px, transparent 1px),
            linear-gradient(to bottom, #0a85b1 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 2. Top Editorial Classification Bar */}
      <div className="border-b border-slate-200/80 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-600">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-[#0a85b1]/10 text-[#0a85b1] font-bold uppercase tracking-wider">
              Concept 02 &bull; Editorial Asymmetrical Canvas
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline">{COMPANY.legalName}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Corporate Portfolio &bull; 2025 Edition</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Verified Enterprise
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Asymmetrical Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Massive Editorial Headline Block */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-[#0a85b1] font-bold">
            <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
            <span>Technology Engineering &bull; Two Business Divisions</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-950 tracking-tight leading-[0.98] uppercase">
            Engineering software <br />
            <span className="inline-block mt-2 px-4 py-1.5 rounded-xl bg-[#0a85b1] text-white">
              that ships.
            </span>
          </h1>
        </div>

        {/* Asymmetrical 7/5 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Editorial Typography & Strategy */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-semibold text-slate-800 tracking-tight leading-snug">
                From ambitious ideas to enterprise-scale solutions.
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Tech22Blocks bridges strategic governance with modern engineering agility. We operate across two distinct business directions: developing our own proprietary voice intelligence product (<strong className="text-slate-900 font-semibold">VoiSage AI</strong>) and delivering high-craft bespoke engineering for enterprises worldwide.
              </p>
            </div>

            {/* Editorial CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-950 hover:bg-[#0a85b1] rounded-lg shadow-sm transition-colors group"
              >
                <span>Initiate Engineering Dialogue</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              >
                <span>Full Service Portfolio</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-slate-500" />
              </Link>
            </div>

            {/* Editorial Index Points */}
            <div className="border-t border-slate-200 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-mono text-[#0a85b1] font-bold">01 / R&amp;D PRODUCT</span>
                <p className="font-bold text-slate-900">VoiSage AI Voice</p>
                <p className="text-slate-500 text-[11px]">Autonomous call triage &amp; summaries</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[#0a85b1] font-bold">02 / CLIENT WORK</span>
                <p className="font-bold text-slate-900">Custom Engineering</p>
                <p className="text-slate-500 text-[11px]">Full-stack web, mobile, and cloud</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[#0a85b1] font-bold">03 / TRUST</span>
                <p className="font-bold text-slate-900">100% IP Ownership</p>
                <p className="text-slate-500 text-[11px]">Zero lock-in, shared Git repositories</p>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Asymmetrical Deep Blue Monolith Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-[#051c30] to-[#041221] text-white p-6 sm:p-7 shadow-2xl border border-slate-800 space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0a85b1] flex items-center justify-center text-white">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-white">TECH22 ARCHITECTURE</p>
                    <p className="text-[10px] font-mono text-sky-400">Production Pipeline</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-semibold">
                  BUILD VERIFIED
                </span>
              </div>

              {/* Code Telemetry Snippet */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs space-y-2">
                <div className="text-slate-500 text-[11px] flex justify-between">
                  <span>// System Manifest</span>
                  <span className="text-[#38bdf8]">v2.4.0</span>
                </div>
                <p className="text-emerald-400">const division_01 = &quot;Proprietary VoiSage AI&quot;;</p>
                <p className="text-sky-300">const division_02 = &quot;Custom Enterprise Systems&quot;;</p>
                <p className="text-slate-300">const principles = 22; // Zero Agency Fluff</p>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Git Repository:</span>
                  <span className="text-white font-semibold">Client 100% Owned</span>
                </div>
              </div>

              {/* Core Feature Badges */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
                  <span className="text-slate-300">VoiSage Sub-600ms Voice Stream</span>
                  <span className="font-mono text-sky-300 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
                  <span className="text-slate-300">Multi-Cloud Edge Deployment</span>
                  <span className="font-mono text-emerald-400 font-semibold">99.99%</span>
                </div>
              </div>

              {/* Statutory Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0a85b1]" />
                  DPIIT #StartupIndia Recognized
                </span>
                <span>Warangal HQ</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
