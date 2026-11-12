import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Compass, 
  Activity, 
  Zap,
  Globe,
  Radio
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-200/70">
      
      {/* Editorial Engineering Grid Background */}
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

      {/* Subtle organic light accent */}
      <div 
        aria-hidden="true" 
        className="absolute -top-32 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Positioning & Typography */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Corporate Positioning Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a85b1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0a85b1]"></span>
              </span>
              <span className="font-mono text-[11px] font-semibold text-slate-900 tracking-wider uppercase">
                {COMPANY.legalName}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-semibold">Two Business Divisions</span>
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
              Tech22Blocks builds proprietary intelligent software products and engineers custom, mission-critical digital systems for clients across all stages. A technology partner defined by architectural precision, honest communication, and reliable execution.
            </p>

            {/* Primary & Secondary Action CTAs */}
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
                <span>Proprietary AI &amp; Solutions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition representing the Dual Business Direction */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive System Preview Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/50 space-y-6 relative overflow-hidden">
              
              {/* Header: System Topology */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0a85b1]"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900 font-mono">
                    Tech22Blocks Ecosystem
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  Dual Capability
                </span>
              </div>

              {/* Division 1: Proprietary Products (VoiSage AI) */}
              <div className="rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50/50 via-white to-sky-50/20 p-4 space-y-3 relative group hover:border-sky-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0a85b1]">
                      Division 01 &bull; Proprietary Product
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Active R&amp;D
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-[#0a85b1]" />
                    VoiSage AI &bull; Voice Intelligence Engine
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Autonomous conversational voice screening for unknown calls with sub-600ms latency and real-time intent extraction.
                  </p>
                </div>

                {/* Simulated Audio Spectrogram Visual */}
                <div className="flex items-center gap-1 h-6 bg-slate-900 rounded-lg px-3 py-1">
                  <span className="text-[9px] font-mono text-sky-400 mr-1.5">VOICE STREAM</span>
                  {[30, 75, 45, 90, 60, 100, 50, 85, 40, 70, 95, 30, 65, 80, 55, 90, 45, 70].map((h, i) => (
                    <span 
                      key={i} 
                      className="w-1 bg-gradient-to-t from-[#0a85b1] to-sky-400 rounded-full"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                  <span className="text-[9px] font-mono text-emerald-400 ml-auto">&lt;600ms</span>
                </div>
              </div>

              {/* Division 2: Custom Technology Solutions */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-3 group hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Division 02 &bull; Client Solutions
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Full Lifecycle
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#0a85b1]" />
                    Enterprise &amp; Digital Engineering
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Custom web platforms, cross-platform mobile apps, cloud architectures, and machine learning pipelines for businesses worldwide.
                  </p>
                </div>

                {/* Capability Badges */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono text-slate-700">
                  <div className="px-2 py-1 bg-white rounded border border-slate-200 text-center font-medium">
                    Web &amp; Mobile
                  </div>
                  <div className="px-2 py-1 bg-white rounded border border-slate-200 text-center font-medium">
                    AI &amp; Automation
                  </div>
                  <div className="px-2 py-1 bg-white rounded border border-slate-200 text-center font-medium">
                    Cloud &amp; DevOps
                  </div>
                </div>
              </div>

              {/* Footer Meta */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#0a85b1]" />
                  Production-Ready Standards
                </span>
                <span className="font-semibold text-slate-700">
                  22 Engineering Principles
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
