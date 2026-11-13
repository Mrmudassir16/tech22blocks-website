import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-12 pb-16 lg:pt-18 lg:pb-24 overflow-hidden border-b border-slate-200/80">
      
      {/* Subtle Engineering Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0a85b1 1px, transparent 1px),
            linear-gradient(90deg, #0a85b1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Positioning & Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Corporate Identification Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a85b1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0a85b1]"></span>
              </span>
              <span className="font-mono text-[11px] font-semibold text-slate-900 tracking-wider uppercase">
                {COMPANY.legalName}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[#0a85b1] font-semibold">Two Business Divisions</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
                Engineering software <br />
                <span className="text-[#0a85b1] relative inline-block">
                  that ships.
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-2 text-[#0a85b1]/30" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-700 font-medium tracking-tight">
                From ambitious ideas to enterprise-scale solutions.
              </p>
            </div>

            {/* Strategic Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Tech22Blocks operates across two complementary business directions: developing our own proprietary intelligent software products (featuring <strong className="text-slate-900 font-semibold">VoiSage AI</strong>) and delivering mission-critical custom engineering for organizations of all sizes.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 rounded-lg border border-slate-200 transition-all duration-200"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>

            {/* Trust and Verification Matrix */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                <span>DPIIT #StartupIndia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                <span>MSME Registered</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                <span>Founder-Led Architecture</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Software Engineering Architecture Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/70 overflow-hidden">
              
              {/* Engineering Console Header */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono font-medium text-slate-300">
                    tech22blocks/core-systems
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-medium text-emerald-400">
                    Production Healthy
                  </span>
                </div>
              </div>

              {/* Architectural Layers & Capabilities */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-50 via-white to-white space-y-3.5">
                
                {/* Layer 1: Client Applications (Web & Mobile) */}
                <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500">
                      01 &bull; Client Delivery Layer
                    </span>
                    <span className="text-[10px] font-mono text-[#0a85b1] font-semibold bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      Multi-Platform
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-200/70 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] flex-shrink-0 shadow-2xs">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 leading-tight truncate">Enterprise Web</p>
                        <p className="text-[10px] text-slate-500 font-mono truncate">Next.js &bull; TypeScript</p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-200/70 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] flex-shrink-0 shadow-2xs">
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 leading-tight truncate">Mobile Clients</p>
                        <p className="text-[10px] text-slate-500 font-mono truncate">iOS &bull; Android &bull; Flutter</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SVG Architecture Connector */}
                <div className="flex items-center justify-center -my-1 text-slate-300">
                  <div className="flex items-center space-x-1">
                    <div className="w-8 h-px bg-slate-200"></div>
                    <svg className="w-3.5 h-3.5 text-[#0a85b1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <div className="w-8 h-px bg-slate-200"></div>
                  </div>
                </div>

                {/* Layer 2: Dual Division Engineering & Edge Services */}
                <div className="rounded-xl border border-[#0a85b1]/30 bg-sky-50/40 p-3 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#0a85b1]">
                      02 &bull; Dual Division Architecture
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                      &lt; 25ms Edge Latency
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center gap-1.5 text-slate-900 font-semibold mb-1">
                        <Cpu className="w-3.5 h-3.5 text-[#0a85b1]" />
                        <span>Custom Enterprise Core</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        Secure REST &amp; gRPC APIs, distributed microservices, and workflow automation.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 text-white border border-slate-800 shadow-2xs">
                      <div className="flex items-center gap-1.5 text-sky-300 font-semibold mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                        <span>VoiSage AI Engine</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Autonomous call triage, sub-600ms voice pipeline, and WhatsApp summaries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SVG Architecture Connector */}
                <div className="flex items-center justify-center -my-1 text-slate-300">
                  <div className="flex items-center space-x-1">
                    <div className="w-8 h-px bg-slate-200"></div>
                    <svg className="w-3.5 h-3.5 text-[#0a85b1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <div className="w-8 h-px bg-slate-200"></div>
                  </div>
                </div>

                {/* Layer 3: Cloud Infrastructure & Verification */}
                <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500">
                      03 &bull; Cloud Infrastructure &amp; Persistence
                    </span>
                    <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      99.99% Availability
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    <span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1">
                      <Cloud className="w-3 h-3 text-[#0a85b1]" />
                      Multi-Cloud Edge
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#0a85b1]" />
                      PostgreSQL + Vector
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#0a85b1]" />
                      Zero-Lock-in Git
                    </span>
                  </div>
                </div>

                {/* Automated Deployment Verification Terminal */}
                <div className="rounded-lg bg-slate-950 p-2.5 font-mono text-[11px] text-slate-300 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-800 mb-1.5">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#0a85b1]" />
                      PIPELINE VERIFICATION
                    </span>
                    <span className="text-emerald-400 font-semibold">ALL TESTS PASSING</span>
                  </div>
                  <p className="text-sky-300">$ tech22 ship --target=production --verified</p>
                  <p className="text-slate-400 mt-0.5">
                    &gt; 22/22 suites passed &bull; Zero-downtime deployment verified in 1.4s
                  </p>
                </div>

              </div>

              {/* Console Footnote */}
              <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>RRK Software Technologies Pvt. Ltd.</span>
                <span className="text-[#0a85b1] font-semibold flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  Engineering That Ships
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
