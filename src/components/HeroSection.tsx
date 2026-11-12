import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

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

          {/* Right Column: Actual High-End Visual Asset */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-2xl shadow-slate-200/60 overflow-hidden group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src={getAssetUrl('/images/hero-tech-visual.jpg')}
                  alt="Tech22Blocks Enterprise Software Engineering & AI Cloud Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Division Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/70 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-medium tracking-wide">
                    Dual Division Architecture
                  </span>
                </div>

                {/* Floating Capability Tag */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 flex items-center gap-1.5 shadow-sm">
                  <Zap className="w-3.5 h-3.5 text-[#0a85b1]" />
                  <span className="text-[11px] font-mono font-bold">
                    VoiSage AI + Enterprise Core
                  </span>
                </div>
              </div>

              {/* Sub-strip below image */}
              <div className="px-3 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>RRK Software Technologies Pvt. Ltd.</span>
                <span className="text-[#0a85b1] font-semibold">Warangal &bull; Est. 2025</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
