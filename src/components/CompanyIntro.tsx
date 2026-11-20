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

            {/* Overlapping Surface Funfact Card */}
            <div 
              className="relative -mt-6 sm:-mt-12 lg:-mt-24 w-full max-w-[480px] bg-[var(--surface)] text-[var(--text-primary)] p-5 sm:p-7 lg:p-9 rounded-[var(--radius-card)] shadow-[var(--shadow-elevated)] border border-[var(--border)] z-20 transition-all"
            >
              {/* Top Row: Trusted Avatars + Learn More Button */}
              <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
                <div>
                  <div className="flex items-center -space-x-2.5 mb-2.5">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[var(--surface)]">
                      TK
                    </div>
                    <div className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[var(--surface)]">
                      MK
                    </div>
                    <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[var(--surface)]">
                      SA
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-mono">
                    Engineering Leadership
                  </span>
                </div>

                <Link 
                  href="/about/"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all shadow-sm"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Bottom Row: Mission Pillar Statement */}
              <div className="pt-6">
                <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                  Uniting strategic business governance with modern production software engineering.
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                  <span>DPIIT &bull; MSME</span>
                  <span>Est. 2025</span>
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
