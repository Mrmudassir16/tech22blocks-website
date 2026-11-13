import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Lock,
  Layers
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroConcept1() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#040e18] text-white overflow-hidden border-b border-slate-800">
      
      {/* 1. Immersive Deep Blue Cinematic Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Deep navy to brand blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030911] via-[#051829] to-[#040e18]" />
        
        {/* Architectural Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a85b1 1px, transparent 1px),
              linear-gradient(to bottom, #0a85b1 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)'
          }}
        />

        {/* Ambient Brand Blue Glow Spotlights */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#0a85b1]/20 rounded-full blur-[140px]" 
        />
        <div 
          className="absolute top-1/3 -right-24 w-[500px] h-[400px] bg-sky-500/15 rounded-full blur-[120px]" 
        />
        <div 
          className="absolute bottom-0 -left-24 w-[500px] h-[400px] bg-[#0369a1]/20 rounded-full blur-[130px]" 
        />

        {/* Diagonal Light Telemetry Beams (SVG) */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.08]" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="8 12" />
          <line x1="20%" y1="0" x2="100%" y2="80%" stroke="#0a85b1" strokeWidth="1" strokeDasharray="6 14" />
          <line x1="0" y1="30%" x2="70%" y2="100%" stroke="#0284c7" strokeWidth="1" strokeDasharray="10 16" />
        </svg>

        {/* High-Contrast Vignette for Perfect Typography Legibility */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#040e18]/60 to-[#040e18]/90" />
      </div>

      {/* 2. Concept Badge Header Bar */}
      <div className="relative z-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs">
          <div className="inline-flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 font-mono text-[11px] font-semibold tracking-wider uppercase">
              Concept 01 &bull; Immersive Full-Bleed Cinematic
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Architecture Active
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline">Multi-Region Edge</span>
          </div>
        </div>
      </div>

      {/* 3. Hero Main Content Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-4xl space-y-8">
          
          {/* Corporate Identification Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-slate-200 text-xs backdrop-blur-md shadow-lg shadow-sky-950/30">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold text-white tracking-wider uppercase">
              {COMPANY.legalName}
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-sky-300 font-medium">Two Business Divisions</span>
          </div>

          {/* Prominent Editorial Headlines */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Engineering software <br className="hidden sm:block" />
              <span className="relative inline-block bg-gradient-to-r from-sky-400 via-[#38bdf8] to-[#0a85b1] bg-clip-text text-transparent">
                that ships.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 tracking-tight leading-snug">
              From ambitious ideas to enterprise-scale solutions.
            </p>
          </div>

          {/* Strategic Narrative */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
            Tech22Blocks operates across two complementary business directions: developing our own proprietary intelligent software products (featuring <strong className="text-white font-semibold">VoiSage AI</strong>) and delivering mission-critical custom engineering for organizations of all sizes.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-xl shadow-lg shadow-[#0a85b1]/30 hover:shadow-[#0a85b1]/50 transition-all duration-200 group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/20 hover:border-white/30 backdrop-blur-md transition-all duration-200"
            >
              <span>Explore Capabilities</span>
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-sky-300 hover:text-white transition-colors"
            >
              <Sparkles className="w-4 h-4 mr-2 text-sky-400" />
              <span>Discover VoiSage AI</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 4. Docked Full-Width Metrics & Trust Strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sky-400">
                <Layers className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Dual Model</span>
              </div>
              <p className="text-sm font-semibold text-white">Proprietary + Custom</p>
              <p className="text-[11px] text-slate-400">R&amp;D Products &bull; Enterprise Code</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sky-400">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Sub-600ms Voice</span>
              </div>
              <p className="text-sm font-semibold text-white">VoiSage AI Screening</p>
              <p className="text-[11px] text-slate-400">Autonomous Inbound Triage</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sky-400">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Complete IP</span>
              </div>
              <p className="text-sm font-semibold text-white">100% Code Ownership</p>
              <p className="text-[11px] text-slate-400">Shared Git Repos &bull; Zero Lock-in</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Recognized</span>
              </div>
              <p className="text-sm font-semibold text-white">DPIIT &bull; MSME Registered</p>
              <p className="text-[11px] text-slate-400">RRK Software Technologies</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
