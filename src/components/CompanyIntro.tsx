'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { StarWatermark } from '@/components/StarEmblem';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { CornerBrackets, BorderBeam } from '@/components/design-system/AtmosphericPerimeter';

export default function CompanyIntro() {
  return (
    <section 
      id="about-mission"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#020713] text-white overflow-hidden" 
      aria-labelledby="about-heading"
    >
      {/* Background Volumetric Flares */}
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-[#0052FF]/[0.12] rounded-full blur-[140px] pointer-events-none transform-gpu animate-pulse-aura" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-sky-500/[0.1] rounded-full blur-[130px] pointer-events-none transform-gpu" />
      
      {/* Unique Blueprint Micro-Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #38bdf8 1px, transparent 1px),
            linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
        }}
      />

      {/* Hairline subtle top ambient glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />
      
      <StarWatermark size={680} position="top-right" variant="white" opacity={0.02} rotate={15} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Focus Underline, and Mission Statement */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest font-mono text-[#38bdf8]">
                About Us
              </span>
              <Image 
                src={getAssetUrl('/images/shape_title_under_line.svg')} 
                alt="" 
                width={40} 
                height={8} 
                className="inline-block brightness-200"
              />
            </div>

            <div>
              <h2 id="about-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white cursor-default">
                <StaggeredText text="Tech22Blocks" />{' '}
                <StaggeredText text="Mission & Goal" isShimmer />
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              At Tech22Blocks, our mission is to empower businesses and visionary founders through innovative software solutions that streamline operations, foster growth, and drive success. With a commitment to engineering excellence and customer satisfaction, we deliver production software that ships reliably.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              Operating under RRK Software Technologies Private Limited, our technical leadership combines battle-tested architectural principles with modern cloud technologies to engineer scalable digital systems, real-time mobile platforms, and proprietary intelligence products.
            </p>

            {/* Core Capability Checklist with Obsidian Glass Capsules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all text-sm text-slate-200 backdrop-blur-sm cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:text-white transition-colors">Proprietary Tech IP</span>
              </div>
              <div className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all text-sm text-slate-200 backdrop-blur-sm cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:text-white transition-colors">Zero Architectural Shortcuts</span>
              </div>
              <div className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all text-sm text-slate-200 backdrop-blur-sm cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:text-white transition-colors">Direct Git Repo Access</span>
              </div>
              <div className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all text-sm text-slate-200 backdrop-blur-sm cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium group-hover:text-white transition-colors">Statutory Compliance Handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Craft Photo Staging + Glassmorphic Funfact Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end">
            
            {/* Engineer Working Photo with Luminous Edge */}
            <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden shadow-2xl border border-white/[0.12] hover:border-sky-400/40 transition-all group">
              <CornerBrackets size="w-3.5 h-3.5" color="border-sky-400/40" activeColor="group-hover:border-sky-300" />
              <Image 
                src={getAssetUrl('/images/about_image_6.webp')} 
                alt="Tech22Blocks Engineering Team at work" 
                width={396} 
                height={480} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>

            {/* Overlapping Glassmorphic Funfact Card */}
            <div 
              className="group relative lg:-mt-24 w-full max-w-[480px] bg-[#0b1120]/95 text-white p-7 sm:p-9 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-white/[0.12] hover:border-sky-400/50 transition-all backdrop-blur-2xl z-20 overflow-hidden"
            >
              <CornerBrackets size="w-3.5 h-3.5" color="border-sky-400/40" activeColor="group-hover:border-sky-300" />
              {/* Top Row: Trusted Avatars + Learn More Button */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center -space-x-2.5 mb-2.5">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#0b1120]">
                      TK
                    </div>
                    <div className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#0b1120]">
                      MK
                    </div>
                    <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#0b1120]">
                      SA
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#0a85b1] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#0b1120]">
                      +
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Trusted by Founders &amp; Enterprises
                  </span>
                </div>

                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-[#0a85b1] hover:from-sky-400 hover:to-sky-500 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:-translate-y-0.5"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Bottom Row: Key Engineering Metrics */}
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-[#38bdf8] flex-shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-white leading-none">
                      100%
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Code Handover
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-white leading-none">
                      Enterprise
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Quality Standards
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
