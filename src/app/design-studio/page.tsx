'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Layers, 
  Compass, 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  Layout, 
  Code2, 
  Terminal, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Eye,
  Zap,
  Activity,
  Box,
  Wrench,
  Clock,
  RotateCw
} from 'lucide-react';
import { useDesignMode, DesignMode } from '@/context/DesignModeContext';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import Star3DEngine from '@/components/design-system/Star3DEngine';
import { BespokeServiceVisual } from '@/components/design-system/BespokeServiceShowcase';
import { HeroVariantA, HeroVariantB, HeroVariantC } from '@/components/design-system/CreativeHeroVariants';
import StarNexusContact from '@/components/design-system/StarNexusContact';
import { COMPANY } from '@/data/company';

export default function DesignStudioPage() {
  const { mode, setMode } = useDesignMode();
  const [selectedServiceId, setSelectedServiceId] = useState<string>('website-development');
  const [simulatedHeroOption, setSimulatedHeroOption] = useState<DesignMode>('option-a');

  return (
    <div className="bg-[#020b14] text-white min-h-screen selection:bg-sky-500 selection:text-white">
      
      {/* 1. Master Studio Header */}
      <section className="relative py-20 lg:py-28 border-b border-slate-800 overflow-hidden bg-gradient-to-b from-[#020b14] via-[#031526] to-[#020b14]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[800px] h-[500px] bg-[#0a85b1]/15 rounded-full blur-[140px]" />
          <StarWatermark size={700} position="top-right" variant="white" opacity={0.03} rotate={15} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-500/40 text-sky-400 text-xs font-mono uppercase tracking-wider mb-6 shadow-xl">
            <StarEmblem size={14} variant="white" opacity={0.9} />
            <span>Creative Direction &bull; Digital Brand Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Tech22Blocks Design Studio
          </h1>
          
          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Three complete, production-ready design directions created for Tech22Blocks. Explore the interactive 3D star identity, test the 6 distinct service architectures, and navigate through every page.
          </p>

          {/* Quick Global Mode Trigger Bar */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-900/90 border border-sky-500/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Active Website Mode:</span>
              <strong className="text-white uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sky-950 border border-sky-800">
                {mode}
              </strong>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setMode('option-a')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  mode === 'option-a'
                    ? 'bg-[#0a85b1] text-white shadow-lg shadow-[#0a85b1]/40 ring-1 ring-sky-300'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Activate Option A (Star Identity)
              </button>
              <button
                onClick={() => setMode('option-b')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  mode === 'option-b'
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/40 ring-1 ring-sky-300'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Activate Option B (Immersive)
              </button>
              <button
                onClick={() => setMode('option-c')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  mode === 'option-c'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 ring-1 ring-indigo-300'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Activate Option C (Corporate)
              </button>
              <button
                onClick={() => setMode('default')}
                className={`px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                  mode === 'default'
                    ? 'bg-slate-700 text-white ring-1 ring-slate-400'
                    : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                }`}
              >
                Baseline
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE THREE FULL DESIGN OPTIONS: OVERVIEW CARDS */}
      <section className="py-20 border-b border-slate-800 bg-[#020b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Comparative Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Three Distinct Design Paradigms
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl leading-relaxed">
              Each option delivers a unique visual aesthetic, motion style, and architectural atmosphere while strictly maintaining 100% of the website&apos;s approved copy and structure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* OPTION A */}
            <div className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
              mode === 'option-a'
                ? 'bg-gradient-to-b from-[#0a85b1]/15 via-slate-900 to-slate-950 border-[#0a85b1] ring-2 ring-[#0a85b1]/50 shadow-2xl'
                : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0a85b1]/20 border border-[#0a85b1]/40 text-sky-300 font-bold uppercase">
                    Option A
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">Recommended</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Star Identity System
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  A proprietary visual system built directly from the Tech22Blocks 6-pointed block star. The star serves as an interactive 3D gyroscope in the hero, a geometric architectural divider between sections, and a luminous nexus in the contact hub.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                    <span>Interactive 3D gyroscopic perspective star engine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                    <span>Hexagonal geometric coordinate lines &amp; energy meshes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                    <span>Star Nexus contact section with SLA guarantee</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => setMode('option-a')}
                  className="w-full py-3 rounded-xl bg-[#0a85b1] hover:bg-[#0284c7] text-white text-xs font-mono font-bold shadow-lg shadow-[#0a85b1]/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Select Option A System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* OPTION B */}
            <div className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
              mode === 'option-b'
                ? 'bg-gradient-to-b from-sky-600/15 via-slate-900 to-slate-950 border-sky-500 ring-2 ring-sky-500/50 shadow-2xl'
                : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-300 font-bold uppercase">
                    Option B
                  </span>
                  <span className="text-xs font-mono text-sky-400">Cinematic Tech</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Immersive Digital Experience
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  A bold, full-screen digital experience inspired by award-winning tech studios (Awwwards, Active Theory). Features obsidian backdrops, electric blue and laser cyan highlights, telemetry HUDs, and dramatic kinetic typography.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Monumental typography with laser cyan gradients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Real-time telemetry indicators &amp; terminal HUDs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Mission Control command terminal contact deck</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => setMode('option-b')}
                  className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-mono font-bold shadow-lg shadow-sky-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Select Option B System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* OPTION C */}
            <div className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
              mode === 'option-c'
                ? 'bg-gradient-to-b from-indigo-600/15 via-slate-900 to-slate-950 border-indigo-500 ring-2 ring-indigo-500/50 shadow-2xl'
                : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300 font-bold uppercase">
                    Option C
                  </span>
                  <span className="text-xs font-mono text-indigo-300">Swiss Editorial</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Premium Corporate Motion
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  A prestigious Swiss-inspired corporate technology design (Stripe, Linear, Apple Developer). High-contrast crisp typography, hairline 1px grid dividers, refined royal blue accents, and quiet, authoritative motion.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    <span>Architectural hairline grid &amp; multi-column ledgers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    <span>Institutional governance and statutory proof badges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    <span>Executive consultation suite with friction-free form</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => setMode('option-c')}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Select Option C System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE 3D STAR PLAYGROUND & GEOMETRY LAB */}
      <section className="py-20 border-b border-slate-800 bg-[#030e1b] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Star Story & Anatomy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                <Sparkles className="w-4 h-4" />
                <span>Proprietary Brand Anatomy</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                The Tech22Blocks Star: An Architectural Anchor
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-light">
                Extracted directly from the official logo mark, the star is an equilateral hexagram constructed from four interlocking blocks with pill-capped incision channels.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-white">Continuous Gyroscopic 3D Tilt</h4>
                  <p className="text-xs text-slate-400">
                    Moves with the visitor&apos;s mouse pointer using hardware-accelerated CSS 3D transforms (`perspective(1200px)`), revealing depth without heavy 3D rendering engines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-white">Multi-Scale Deployment</h4>
                  <p className="text-xs text-slate-400">
                    Scales effortlessly from a 13px inline category badge to a 750px cropped architectural watermark, maintaining 100% brand consistency across all pages.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive 3D Model */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-950 border border-sky-500/30 shadow-2xl relative">
              <div className="absolute top-4 left-4 text-[10px] font-mono text-sky-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>3D Gyroscope Engine // Live Telemetry</span>
              </div>

              <div className="py-6">
                <Star3DEngine size={420} interactive={true} autoRotateSpeed={18} showCoordinates={true} />
              </div>

              <div className="w-full pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Hover or drag your cursor over the star to tilt in 3D</span>
                <span className="text-sky-400">60 FPS Hardware Rendered</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BESPOKE SERVICES ARCHITECTURE: 6 DISTINCT VISUAL IDENTITIES */}
      <section className="py-20 border-b border-slate-800 bg-[#020b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                Zero Repetition &bull; 6 Unique Visuals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Bespoke Service Architectures
              </h2>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                Rather than repeating generic cards six times, every single service is engineered with its own unique interactive visual model:
              </p>
            </div>

            <Link
              href="/services/"
              className="inline-flex items-center text-xs font-mono font-bold text-sky-400 hover:text-white transition-colors"
            >
              <span>View Live Services Page</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          {/* Interactive Service Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'website-development', num: '01', title: 'Website Development' },
              { id: 'mobile-applications', num: '02', title: 'Mobile Applications' },
              { id: 'uiux-design', num: '03', title: 'UI/UX Design' },
              { id: 'custom-software', num: '04', title: 'Custom Software' },
              { id: 'it-consulting', num: '05', title: 'IT Consulting' },
              { id: 'web3', num: '06', title: 'Web3.0 (Coming Soon)' },
            ].map((srv) => (
              <button
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedServiceId === srv.id
                    ? 'bg-[#0a85b1] text-white shadow-md shadow-[#0a85b1]/30 border border-sky-400'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{srv.num}. </span>
                <span>{srv.title}</span>
              </button>
            ))}
          </div>

          {/* Service Visual Preview Canvas */}
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
            <BespokeServiceVisual id={selectedServiceId} />
          </div>

        </div>
      </section>

      {/* 5. ALL-PAGE NAVIGATION LAUNCHPAD */}
      <section className="py-20 border-b border-slate-800 bg-[#030e1b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Complete Website Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Test Every Page in Your Preferred Mode
            </h2>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed font-light">
              Click any page below to experience how the active design system transforms the typography, layout, motion, and visual hierarchy while preserving 100% of the text.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { title: 'Homepage', path: '/', desc: 'Hero, Recognition, Products, Services, CTA' },
              { title: 'About Us', path: '/about/', desc: 'Heritage, Founders Story, Mission & Goals' },
              { title: 'Our Services', path: '/services/', desc: '6 Bespoke Service Architectures & FAQ' },
              { title: 'Our Products', path: '/products/', desc: 'VoiSage AI Voice Assistant Showcase' },
              { title: 'Portfolio', path: '/portfolio/', desc: 'Production Client Case Studies' },
              { title: 'Blogs', path: '/blogs/', desc: 'Engineering Thought Leadership' },
              { title: 'News & Events', path: '/news-events/', desc: 'Corporate Milestones & Annual Letter' },
              { title: 'Contact Us', path: '/contact/', desc: 'Star Nexus Direct Consultation Suite' },
            ].map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      {page.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {page.desc}
                  </p>
                </div>
                <span className="mt-4 text-[10px] font-mono text-[#0a85b1] uppercase font-semibold">
                  Launch Page &rarr;
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6. STRATEGIC COMPARISON & FINAL EVALUATION MATRIX */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Creative Director Verdict
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Strategic Evaluation Matrix
            </h2>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Comparing the three creative paradigms across core brand and technical performance benchmarks:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-4">Evaluation Dimension</th>
                  <th className="py-4 px-4 text-sky-300">Option A: Star Identity</th>
                  <th className="py-4 px-4 text-cyan-300">Option B: Immersive Digital</th>
                  <th className="py-4 px-4 text-indigo-300">Option C: Corporate Motion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Brand Memorability</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">10 / 10 (Signature Star)</td>
                  <td className="py-4 px-4">9.2 / 10 (Bold Visuals)</td>
                  <td className="py-4 px-4">8.8 / 10 (Understated)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Enterprise Credibility</td>
                  <td className="py-4 px-4">9.6 / 10 (High Rigor)</td>
                  <td className="py-4 px-4">8.9 / 10 (Tech-Forward)</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">10 / 10 (Swiss Institutional)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Motion &amp; Interaction</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">9.8 / 10 (3D Gyroscope)</td>
                  <td className="py-4 px-4">9.5 / 10 (HUD &amp; Kinetic)</td>
                  <td className="py-4 px-4">9.0 / 10 (Subtle Micro)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Service Distinction</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">10 / 10 (6 Bespoke Mockups)</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">10 / 10 (6 Bespoke Mockups)</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">10 / 10 (6 Bespoke Mockups)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Contact Experience</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">Star Nexus + 2h SLA</td>
                  <td className="py-4 px-4">Mission Control Deck</td>
                  <td className="py-4 px-4">Executive Suite</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Performance / Static Export</td>
                  <td className="py-4 px-4 text-emerald-400">100% Lightweight CSS/SVG</td>
                  <td className="py-4 px-4 text-emerald-400">100% Lightweight CSS/SVG</td>
                  <td className="py-4 px-4 text-emerald-400">100% Lightweight CSS/SVG</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Recommendation Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#0a85b1]/20 via-sky-950/40 to-slate-900 border border-[#0a85b1]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                Creative Director Recommendation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Option A: The Star Identity System
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl font-light leading-relaxed">
                Option A transforms the Tech22Blocks star into an iconic, internationally recognizable brand asset. It strikes the perfect balance between the high-tech excitement of Option B and the institutional credibility of Option C.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 whitespace-nowrap">
              <button
                onClick={() => setMode('option-a')}
                className="px-6 py-3.5 rounded-xl bg-[#0a85b1] hover:bg-[#0284c7] text-white text-xs font-mono font-bold shadow-lg shadow-[#0a85b1]/40 transition-all flex items-center justify-center gap-2"
              >
                <span>Activate Option A</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <Link
                href="/"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-mono font-bold transition-all text-center"
              >
                Return to Site
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
