import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Lock,
  Layers,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function HeroConcept1() {
  return (
    <section 
      className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#020b14] text-white overflow-hidden border-b border-slate-800"
      aria-label="Hero Section - Concept A: Immersive Full-Width Corporate Image-Led"
    >
      
      {/* 1. Full-Width Background Image with Blue Treatment & Contrast Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Real High-Resolution Corporate Technology Visual Asset */}
        <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-luminosity">
          <Image
            src={getAssetUrl('/images/hero-corporate-engineering.jpg')}
            alt="Tech22Blocks enterprise software engineering visual"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Sophisticated Deep Blue Gradient Overlay for WCAG AAA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b14] via-[#031526]/90 to-[#020b14]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-transparent to-[#020b14]/70" />
        
        {/* Architectural Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a85b1 1px, transparent 1px),
              linear-gradient(to bottom, #0a85b1 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)'
          }}
        />

        {/* Ambient Brand Blue Glow Spotlights */}
        <div 
          className="absolute -top-32 left-1/3 w-[800px] h-[500px] bg-[#0a85b1]/20 rounded-full blur-[140px]" 
        />
        <div 
          className="absolute bottom-10 -right-24 w-[600px] h-[450px] bg-sky-500/15 rounded-full blur-[130px]" 
        />
      </div>

      {/* 2. Concept A Indicator Bar */}
      <div className="relative z-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs">
          <div className="inline-flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 font-mono text-[11px] font-semibold tracking-wider uppercase">
              Concept A &bull; Immersive Full-Width Corporate Image-Led
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Activity className="w-3.5 h-3.5" />
              Production Verified
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline">DPIIT #StartupIndia Recognized</span>
          </div>
        </div>
      </div>

      {/* 3. Hero Main Content Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="max-w-4xl space-y-8">
          
          {/* Corporate Positioning Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-slate-200 text-xs backdrop-blur-md shadow-lg shadow-sky-950/30">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold text-white tracking-wider uppercase">
              {COMPANY.legalName}
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-sky-300 font-medium">Est. 2025</span>
          </div>

          {/* Prominent Editorial Headlines */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Engineering software <br className="hidden sm:block" />
              <span className="relative inline-block bg-gradient-to-r from-sky-300 via-[#38bdf8] to-[#0a85b1] bg-clip-text text-transparent">
                that ships.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 tracking-tight leading-snug">
              From ambitious ideas to enterprise-scale solutions.
            </p>
          </div>

          {/* Strategic Narrative */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
            We build software that gives ambitious organizations an enduring edge &mdash; engineering our own intelligent products like <strong className="text-white font-semibold">VoiSage AI</strong> and delivering resilient, production-grade custom systems across web, mobile, and cloud.
          </p>

          {/* Standardized CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-xl shadow-lg shadow-[#0a85b1]/30 hover:shadow-[#0a85b1]/50 transition-all duration-200 group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services/"
              className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/20 hover:border-white/30 backdrop-blur-md transition-all duration-200"
            >
              <span>Explore Our Capabilities</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 4. Docked Trust Metrics Strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#020b14]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-slate-300">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-[11px]">DPIIT Startup India</p>
                <p className="text-[10px] text-slate-400">Govt. Recognized</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-[11px]">MSME Registered</p>
                <p className="text-[10px] text-slate-400">Enterprise Entity</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 flex-shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-[11px]">100% IP Transferred</p>
                <p className="text-[10px] text-slate-400">Zero Vendor Lock-In</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 flex-shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-[11px]">6 Core Services</p>
                <p className="text-[10px] text-slate-400">Production Engineering</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
