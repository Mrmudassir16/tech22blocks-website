'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import Star3DEngine from '@/components/design-system/Star3DEngine';

/* =========================================================================
   OPTION A: STAR IDENTITY HERO (The Proprietary Signature System)
   ========================================================================= */
export function HeroVariantA() {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center bg-[#020b14] text-white overflow-hidden border-b border-slate-800"
      aria-label="Tech22Blocks Corporate Hero"
    >
      {/* Background Volumetric Glow & Geometric Watermark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[750px] h-[550px] bg-[#0a85b1]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[450px] bg-sky-500/15 rounded-full blur-[130px]" />
        
        {/* Hexagonal Perspective Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a85b1 1px, transparent 1px),
              linear-gradient(to bottom, #0a85b1 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 90%)'
          }}
        />
        <StarWatermark size={750} position="top-right" variant="white" opacity={0.03} rotate={-15} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Positioning */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Star-Notch Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-slate-200 text-xs backdrop-blur-md shadow-xl shadow-sky-950/40">
              <StarEmblem size={13} variant="white" opacity={0.9} />
              <span className="font-mono text-[11px] font-semibold text-white tracking-wider uppercase">
                Software Engineering &bull; Digital Innovation
              </span>
            </div>

            {/* Core Typography */}
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

            {/* Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
            </p>

            {/* Action Buttons */}
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
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-200"
              >
                <span>Explore Our Capabilities</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Interactive 3D Perspective Star Engine */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Star3DEngine size={460} interactive={true} autoRotateSpeed={22} showCoordinates={true} />
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   OPTION B: IMMERSIVE DIGITAL HERO (Cinematic Cybernetic Experience)
   ========================================================================= */
export function HeroVariantB() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center bg-[#020617] text-white overflow-hidden border-b border-slate-800"
      aria-label="Tech22Blocks Corporate Hero"
    >
      {/* Cybernetic Particle Lattice & Atmospheric Cyan Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-r from-[#0052FF]/20 via-[#00F0FF]/15 to-transparent rounded-full blur-[150px]" />
        
        {/* Terminal Telemetry Lines */}
        <div className="absolute top-6 left-6 font-mono text-[10px] text-sky-400/60 space-y-1 hidden sm:block">
          <div>SYS.ID // TECH22BLOCKS.CORP</div>
          <div>STATUS // 100% OPERATIONAL</div>
          <div>NODE.VERIFY // DPIIT.STARTUP_INDIA</div>
        </div>
        <div className="absolute top-6 right-6 font-mono text-[10px] text-emerald-400/60 hidden sm:block">
          LATENCY // &lt;12MS &bull; ACID READY
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Cybernetic Telemetry Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-mono tracking-widest uppercase shadow-lg shadow-[#00F0FF]/10">
            <Terminal className="w-3.5 h-3.5" />
            <span>Software Engineering &bull; Digital Innovation</span>
          </div>

          {/* Monumental Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none">
              Engineering software <br />
              <span className="bg-gradient-to-r from-white via-[#00F0FF] to-[#0052FF] bg-clip-text text-transparent">
                that ships.
              </span>
            </h1>

            <p className="text-xl sm:text-3xl font-light text-slate-300 tracking-tight">
              From ambitious ideas to enterprise-scale solutions.
            </p>
          </div>

          {/* Narrative */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-sm font-bold text-black bg-[#00F0FF] hover:bg-white rounded-xl shadow-lg shadow-[#00F0FF]/30 hover:shadow-white/40 transition-all duration-200"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/services/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-sm font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all duration-200"
            >
              <span>Explore Our Capabilities</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   OPTION C: PREMIUM CORPORATE MOTION HERO (Swiss Architectural Editorial)
   ========================================================================= */
export function HeroVariantC() {
  return (
    <section 
      className="relative min-h-[82vh] flex items-center bg-white text-slate-950 overflow-hidden border-b border-slate-200"
      aria-label="Tech22Blocks Corporate Hero"
    >
      {/* Precision Hairline Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0043ce 1px, transparent 1px),
            linear-gradient(to bottom, #0043ce 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Swiss Typographic Precision */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#0043ce]" />
              <span>Software Engineering &bull; Digital Innovation</span>
            </div>

            {/* Core Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
                Engineering software <br />
                <span className="text-[#0043ce]">
                  that ships.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-700 tracking-tight font-medium">
                From ambitious ideas to enterprise-scale solutions.
              </p>
            </div>

            {/* Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#0043ce] hover:bg-[#002d9c] rounded-lg shadow-md transition-all duration-200"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/services/"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-800 hover:text-black bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg transition-all duration-200"
              >
                <span>Explore Our Capabilities</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Architectural Engineering Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                  Institutional Architecture
                </span>
                <span className="text-xs font-mono text-[#0043ce] font-semibold">
                  RRK Software Technologies
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between p-3 rounded bg-white border border-slate-200">
                  <span className="font-semibold text-slate-900">Proprietary Products</span>
                  <span className="text-xs font-mono text-slate-500">VoiSage AI &bull; Production</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded bg-white border border-slate-200">
                  <span className="font-semibold text-slate-900">Custom Engineering</span>
                  <span className="text-xs font-mono text-slate-500">Web &bull; Mobile &bull; Cloud</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded bg-white border border-slate-200">
                  <span className="font-semibold text-slate-900">Statutory Certification</span>
                  <span className="text-xs font-mono text-emerald-600">DPIIT &bull; MSME</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
                <span>Direct Engineering Ownership</span>
                <span className="text-slate-900 font-mono">EST. 2025</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
