'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { SectionTransitionShape, SectionBackground } from '@/components/design-system/SectionDecorations';
import AnimatedStatsStrip from '@/components/design-system/AnimatedCounters';

export default function CompanyIntro() {
  return (
    <section 
      id="about-mission"
      className="relative section-pad bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden" 
      aria-labelledby="about-heading"
    >
      {/* 1. Dynamic Section Transition Shape (Stepped Architectural Shelf) */}
      <SectionTransitionShape 
        position="top" 
        variant="stepped-right" 
        fillColor="var(--surface-elevated)" 
      />

      {/* 2. Ambient Section Background (Architectural prism anchor - Vivid in light mode) */}
      <SectionBackground type="prism" opacity="opacity-80 dark:opacity-25" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Focus Underline, and Mission Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
                About Us
              </span>
              <Image 
                src={getAssetUrl('/images/shape_title_under_line.svg')} 
                alt="" 
                width={48} 
                height={9} 
                className="inline-block brightness-150"
              />
            </div>

            <div>
              <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-[var(--text-primary)] cursor-default">
                <StaggeredText text="Tech22Blocks" />{' '}
                <StaggeredText text="Mission & Goal" isShimmer />
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
              At Tech22Blocks, our mission is to empower businesses and visionary founders through innovative software solutions that streamline operations, foster growth, and drive success. With a commitment to engineering excellence and customer satisfaction, we deliver production software that ships reliably.
            </p>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
              Operating under RRK Software Technologies Private Limited, our technical leadership combines battle-tested architectural principles with modern cloud technologies to engineer scalable digital systems, real-time mobile platforms, and proprietary intelligence products.
            </p>

            {/* Core Capability Checklist with Surface Capsules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] text-sm text-[var(--text-primary)] shadow-sm transition-all cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span className="font-medium">Proprietary Tech IP</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] text-sm text-[var(--text-primary)] shadow-sm transition-all cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span className="font-medium">Zero Architectural Shortcuts</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] text-sm text-[var(--text-primary)] shadow-sm transition-all cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span className="font-medium">Direct Git Repo Access</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] text-sm text-[var(--text-primary)] shadow-sm transition-all cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span className="font-medium">Statutory Compliance Handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Craft Photo Staging + Glassmorphic Funfact Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end">
            
            {/* Engineer Working Photo with Concentric Squircle Radius */}
            <div className="relative w-full max-w-[440px] rounded-[var(--radius-shell)] overflow-hidden shadow-2xl border border-[var(--border)] group">
              <Image 
                src={getAssetUrl('/images/about_image_6.webp')} 
                alt="Tech22Blocks Engineering Team at work" 
                width={396} 
                height={480} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)] via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlapping Surface Funfact Card (Modeled on Techco Software Company Funfact Staging) */}
            <div 
              className="relative -mt-8 sm:-mt-14 lg:-mt-22 w-full max-w-[490px] bg-[var(--surface)] text-[var(--text-primary)] p-5 sm:p-7 rounded-[26px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-[var(--border)] hover:border-[var(--accent)]/50 z-20 transition-all duration-300 group/card overflow-hidden"
            >
              {/* Corner Ambient Glow Accent */}
              <div 
                aria-hidden="true" 
                className="absolute -top-6 -right-6 w-32 h-32 rounded-bl-full bg-gradient-to-bl from-sky-500/20 via-[var(--accent)]/15 to-transparent pointer-events-none group-hover/card:scale-125 transition-transform duration-500 blur-xs"
              />

              {/* Top Row: Trusted Avatars with Glowing (+) Badge + Learn More Action */}
              <div className="flex items-center justify-between pb-5 border-b border-[var(--border)] relative z-10">
                <div className="flex items-center gap-3">
                  {/* Overlapping Avatar Stack with prominent (+) badge */}
                  <div className="flex items-center -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[var(--surface)] shadow-sm">
                      TK
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-sky-400 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[var(--surface)] shadow-sm">
                      MK
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-700 to-indigo-500 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[var(--surface)] shadow-sm">
                      SA
                    </div>
                    {/* Glowing (+) Badge beside TK, MK, SA */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--accent)] to-sky-400 text-white flex items-center justify-center font-extrabold text-sm ring-2 ring-[var(--surface)] shadow-[0_0_15px_rgba(10,133,177,0.55)] z-10 transition-transform duration-300 hover:scale-110">
                      +
                    </div>
                  </div>

                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] block font-display leading-tight">
                      Engineering Leadership
                    </span>
                    <span className="text-[11px] font-mono text-[var(--accent)] font-semibold">
                      30+ Yrs Collective Craft
                    </span>
                  </div>
                </div>

                {/* Learn More Action Button */}
                <Link 
                  href="/about/"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group/btn flex-shrink-0"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>

              {/* Middle Row: Techco Funfact Metric Counters */}
              <div className="py-5 grid grid-cols-2 gap-4 border-b border-[var(--border)] relative z-10">
                <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
                    06<span className="text-[var(--accent)]">+</span>
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5 font-display">
                    Official Services
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                    Full-Stack Engineering
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
                    100<span className="text-[var(--accent)]">%</span>
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5 font-display">
                    Code Ownership
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                    Zero Lock-In Guarantee
                  </div>
                </div>
              </div>

              {/* Bottom Row: The Iconic Glowing Wireframe Globe with Ripple Waves */}
              <div className="pt-4 flex items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-3">
                  {/* Glowing Globe Vessel with Animated Expanding Ripples */}
                  <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
                    <div 
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-[var(--accent)] globe-ripple-ring-1 pointer-events-none"
                    />
                    <div 
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-sky-400 globe-ripple-ring-2 pointer-events-none"
                    />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--accent)] via-sky-500 to-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(10,133,177,0.55)] relative z-10">
                      <Globe2 className="w-5 h-5 globe-spin-icon text-white" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[var(--text-primary)] block font-display leading-tight">
                      Global Engineering Standards
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      Warangal, India &bull; Worldwide Delivery
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                    Entity Status
                  </span>
                  <span className="text-xs font-bold font-mono text-[var(--accent)]">
                    DPIIT &bull; MSME
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Animated Number Counters (Inspired by SVSS) */}
        <AnimatedStatsStrip />

      </div>
    </section>
  );
}
