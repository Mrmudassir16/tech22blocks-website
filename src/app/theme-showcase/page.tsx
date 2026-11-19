'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Compass, 
  Palette,
  ExternalLink,
  ChevronRight,
  Code2,
  Lock,
  Zap,
  Terminal,
  Activity
} from 'lucide-react';
import Star3DEngine from '@/components/design-system/Star3DEngine';
import { getAssetUrl } from '@/utils/assets';
import { COMPANY } from '@/data/company';

type ThemeId = 'obsidian' | 'executive' | 'deeptech';

export default function ThemeShowcasePage() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>('obsidian');

  return (
    <div className="min-h-screen text-slate-100 selection:bg-sky-500 selection:text-white">
      
      {/* Top Floating Control Console */}
      <div className="fixed top-0 inset-x-0 z-50 bg-[#060b18]/95 backdrop-blur-2xl border-b border-white/[0.1] px-4 py-3 sm:py-3.5 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs font-mono text-sky-400 hover:text-white transition-colors flex items-center gap-1">
              &larr; <span>Back to Current Live Site</span>
            </Link>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-sky-400" />
              <span>Theme Studio: Choose Direction</span>
            </span>
          </div>

          {/* Theme Selector Tabs */}
          <div className="flex items-center p-1 rounded-full bg-slate-950/80 border border-white/10 text-xs font-medium">
            <button
              onClick={() => setActiveTheme('obsidian')}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeTheme === 'obsidian'
                  ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.5)] font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Obsidian Precision (Linear/Vercel)
            </button>

            <button
              onClick={() => setActiveTheme('executive')}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeTheme === 'executive'
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Executive Dark Luxury (Stripe/Resend)
            </button>

            <button
              onClick={() => setActiveTheme('deeptech')}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeTheme === 'deeptech'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)] font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Deep Tech Matrix (Palantir/Mistral)
            </button>
          </div>

        </div>
      </div>

      {/* Main Preview Container based on Active Theme */}
      <div className="pt-16 sm:pt-20">
        {activeTheme === 'obsidian' && <ThemeObsidianPrecision />}
        {activeTheme === 'executive' && <ThemeExecutiveLuxury />}
        {activeTheme === 'deeptech' && <ThemeDeepTechMatrix />}
      </div>

    </div>
  );
}

/* =========================================================================
   THEME 1: OBSIDIAN PRECISION (Linear / Vercel Developer Luxury)
   - Edge-to-edge full width glass header
   - Graphite 1px hairline borders
   - Razor-sharp typography (Inter/Geist feel)
   - Diffused cyan backlighting with mathematical restraint
   ========================================================================= */
function ThemeObsidianPrecision() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-100 font-sans">
      
      {/* Concept 1 Header: Full-width Edge-to-Edge Architectural Masthead */}
      <header className="sticky top-14 inset-x-0 z-40 bg-[#030712]/80 backdrop-blur-2xl border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo with integrated dark contrast */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-44">
              <Image
                src={getAssetUrl('/images/tech22blocks-logo.jpg')}
                alt="Tech22Blocks"
                fill
                className="object-contain object-left invert contrast-125"
              />
            </div>
          </div>

          {/* Desktop Nav: Clean 13px graphite links with glowing active pill */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium tracking-normal text-slate-400">
            <span className="text-white font-semibold cursor-pointer">Home</span>
            <span className="hover:text-white transition-colors cursor-pointer">About Us</span>
            <span className="hover:text-white transition-colors cursor-pointer">Our Services</span>
            <span className="hover:text-white transition-colors cursor-pointer">Our Products</span>
            <span className="hover:text-white transition-colors cursor-pointer">Portfolio</span>
            <span className="hover:text-white transition-colors cursor-pointer">Blogs</span>
            <span className="hover:text-white transition-colors cursor-pointer">News & Events</span>
          </nav>

          {/* Action Button: Linear-style minimal elevated button */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 border border-white/[0.1] px-2.5 py-1 rounded-md hidden lg:inline-block">
              SLA &lt; 2h
            </span>
            <button className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Contact Us &rarr;
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section: Obsidian Precision */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-white/[0.08]">
        {/* Diffused ice-blue ambient lighting */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-sky-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
        
        {/* Subtle 32px Micro-Grid */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-sky-400">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>OBSIDIAN PRECISION &bull; THEME 01</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-white leading-[1.05]">
                Engineering software <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                  that ships.
                </span>
              </h1>

              <p className="text-xl text-slate-300 font-normal tracking-[-0.01em]">
                From ambitious ideas to enterprise-scale solutions.
              </p>

              <p className="text-base text-slate-400 leading-relaxed max-w-xl">
                We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button className="px-7 py-3.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-white shadow-[0_0_25px_rgba(14,165,233,0.4)] transition-all">
                  Discuss Your Project &rarr;
                </button>
                <button className="px-6 py-3.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 transition-all">
                  Explore Services
                </button>
              </div>
            </div>

            {/* Right: Star3DEngine anchored as a computational precision core */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent p-[1px] border border-white/[0.1]">
                <div className="w-full h-full rounded-[23px] bg-[#070d1d]/80 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                  <Star3DEngine size={320} autoRotateSpeed={24} />
                  <div className="absolute bottom-4 inset-x-0 text-center font-mono text-[10px] text-slate-500 tracking-wider">
                    COMPUTATIONAL GYROSCOPE &bull; CSS HARDWARE CORE
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bento Grid Services Preview */}
      <section className="py-20 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">Our Services</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-2">
              How We Can Help You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { code: '01', title: 'Custom Software Development', desc: 'Software architecture design, system integration, data migration, and legacy modernization.' },
              { code: '02', title: 'Audit & IT Consulting', desc: 'TechGuard Architectural Audit, CyberSafe consulting, and statutory compliance advisory.' },
              { code: '03', title: 'Web Application Development', desc: 'High-performance Next.js architectures, enterprise portals, and distributed edge cloud platforms.' },
            ].map((s) => (
              <div key={s.code} className="p-8 rounded-2xl bg-[#090e1c] border border-white/[0.08] hover:border-sky-400/50 transition-all hover:-translate-y-1 group">
                <span className="text-xs font-mono text-slate-500 block mb-4">{s.code}</span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

/* =========================================================================
   THEME 2: EXECUTIVE DARK LUXURY (Stripe / Resend / Ramp)
   - Deep midnight slate (#0a0f1d)
   - Rich iridescent metallic gradients (cobalt, silver, slate)
   - Premium generous whitespace, dignified typography
   - Enterprise governance and institutional trust
   ========================================================================= */
function ThemeExecutiveLuxury() {
  return (
    <div className="bg-[#090d1a] min-h-screen text-slate-100 font-sans">
      
      {/* Concept 2 Header: Classic Executive Floating Bar with Warm Indigo Trim */}
      <header className="sticky top-14 inset-x-0 z-40 bg-[#0c1224]/85 backdrop-blur-2xl border-b border-indigo-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="bg-white px-3 py-1.5 rounded-lg border border-white/20 shadow-sm">
              <div className="relative h-8 w-40">
                <Image
                  src={getAssetUrl('/images/tech22blocks-logo.jpg')}
                  alt="Tech22Blocks"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <span className="text-[11px] font-mono uppercase text-indigo-300 hidden xl:inline-block border-l border-white/10 pl-3">
              RRK Software Technologies
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium tracking-normal text-slate-300">
            <span className="text-white font-semibold cursor-pointer">Home</span>
            <span className="hover:text-white transition-colors cursor-pointer">About Us</span>
            <span className="hover:text-white transition-colors cursor-pointer">Our Services</span>
            <span className="hover:text-white transition-colors cursor-pointer">Our Products</span>
            <span className="hover:text-white transition-colors cursor-pointer">Portfolio</span>
            <span className="hover:text-white transition-colors cursor-pointer">Blogs</span>
            <span className="hover:text-white transition-colors cursor-pointer">News & Events</span>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase font-mono bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:brightness-110 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all">
              Initiate Dialogue
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section: Executive Dark Luxury */}
      <section className="relative pt-24 pb-28 overflow-hidden border-b border-white/[0.08]">
        {/* Soft iridescent mesh lights */}
        <div className="absolute top-1/3 -left-20 w-[600px] h-[500px] bg-blue-600/[0.12] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-indigo-600/[0.12] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-400/30 text-xs font-semibold text-indigo-300">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>EXECUTIVE DARK LUXURY &bull; THEME 02</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-tight">
                Engineering software <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                  that ships.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 font-medium">
                From ambitious ideas to enterprise-scale solutions.
              </p>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button className="px-8 py-4 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition-all">
                  Discuss Your Project &rarr;
                </button>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span>Director-Level Consultation</span>
                </div>
              </div>
            </div>

            {/* Right: Star3DEngine as an elevated corporate monument */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-10 rounded-3xl bg-[#0e162b]/70 border border-indigo-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                <Star3DEngine size={340} autoRotateSpeed={20} />
                <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>DPIIT Startup India</span>
                  <span className="text-indigo-400 font-semibold">ISO &bull; Enterprise Grade</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Executive Card Grid */}
      <section className="py-20 border-b border-white/[0.08] bg-[#070b16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Enterprise Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              How We Can Help You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Custom Software Development', desc: 'Software architecture design, system integration services, data migration, and legacy app modernization.' },
              { num: '02', title: 'Audit & IT Consulting Services', desc: 'TechGuard Architectural Audit, CyberSafe & Cloud IT Consulting, and AssuranceEdge governance.' },
              { num: '03', title: 'Web Application Design & Dev', desc: 'Next.js architectures, enterprise portals, high-concurrency cloud systems with 99.99% uptime.' },
            ].map((card) => (
              <div key={card.num} className="p-8 rounded-2xl bg-[#0c1326] border border-indigo-500/15 hover:border-indigo-400/40 transition-all shadow-lg hover:-translate-y-1">
                <span className="text-xs font-mono font-bold text-indigo-400 mb-4 block">{card.num}</span>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

/* =========================================================================
   THEME 3: DEEP TECH MATRIX (Palantir / Mistral / Research Lab)
   - Technical monochrome canvas with pure cyan accents
   - Monospace telemetry data chips and architectural status badges
   - Star3DEngine anchored as proprietary AI computation core (VoiSage IP)
   ========================================================================= */
function ThemeDeepTechMatrix() {
  return (
    <div className="bg-[#02050e] min-h-screen text-slate-100 font-sans">
      
      {/* Concept 3 Header: High-Tech Telemetry Terminal Bar */}
      <header className="sticky top-14 inset-x-0 z-40 bg-[#02050e]/90 backdrop-blur-2xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-cyan-500/30">
              <span className="text-sm font-mono font-bold tracking-wider text-cyan-400">
                TECH22BLOCKS // CORE
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              SYS &bull; ONLINE
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[12px] font-mono uppercase tracking-wider text-slate-400">
            <span className="text-cyan-300 font-bold cursor-pointer">/ Home</span>
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">/ About</span>
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">/ Services</span>
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">/ Products</span>
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">/ Portfolio</span>
            <span className="hover:text-cyan-300 transition-colors cursor-pointer">/ News</span>
          </nav>

          <button className="px-5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
            Deploy Architecture &rarr;
          </button>

        </div>
      </header>

      {/* Hero Section: Deep Tech Matrix */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-cyan-500/20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>DEEP TECH MATRIX &bull; THEME 03</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-white leading-[1.05]">
                Engineering software <br />
                <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                  that ships.
                </span>
              </h1>

              <p className="text-xl text-slate-200 font-mono text-sm tracking-wide">
                &gt; From ambitious ideas to enterprise-scale solutions.
              </p>

              <p className="text-base text-slate-400 leading-relaxed max-w-xl font-normal">
                We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button className="px-7 py-3.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.45)] transition-all">
                  Run Diagnostic Consultation
                </button>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>Latency &lt; 20ms</span>
                </div>
              </div>
            </div>

            {/* Right: Star3DEngine as Proprietary AI Core */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-8 rounded-2xl bg-slate-950/90 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-[11px] text-slate-400">
                  <span>VOISAGE AI CORE</span>
                  <span className="text-cyan-400">ACTIVE &bull; 60 FPS</span>
                </div>
                <Star3DEngine size={320} autoRotateSpeed={18} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Deep Tech Grid */}
      <section className="py-20 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">&gt; CAPABILITIES_MATRIX</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 font-mono">
              How We Can Help You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'SYS-01', title: 'Custom Software Development', spec: 'Next.js &bull; Python &bull; .NET' },
              { id: 'SYS-02', title: 'Audit & IT Consulting Services', spec: 'SOC2 &bull; Cloud Architecture &bull; ISO' },
              { id: 'SYS-03', title: 'Web Application Design and Dev', spec: 'Next.js &bull; Distributed Edge &bull; REST' },
            ].map((item) => (
              <div key={item.id} className="p-7 rounded-xl bg-slate-950 border border-cyan-500/20 hover:border-cyan-400/60 transition-all">
                <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 block w-max mb-4">{item.id}</span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs font-mono text-slate-400">{item.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
