'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Wrench, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { StaggeredText } from '@/components/design-system/KineticTypography';

export default function AboutTwoPillars() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[var(--surface)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
            Our Business Pillars
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
            <StaggeredText text="What" />{' '}
            <StaggeredText text="We Do" isShimmer />
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal">
            Two distinct engineering models uniting proprietary product innovation with custom technology delivery.
          </p>
        </div>

        {/* 2 Distinct Pillars Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Pillar 1: Proprietary Products */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-5 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                <Box className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                  Pillar 01
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display tracking-tight mt-1">
                  Proprietary AI Products
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                We develop and operate our own software products, confronting real engineering challenges firsthand. Our featured product, <strong className="text-[var(--text-primary)] font-semibold">VoiSage AI</strong>, is an autonomous voice assistant designed to screen unknown incoming calls and protect executive attention.
              </p>

              <div className="space-y-2 pt-2 border-t border-[var(--border)]">
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span>Autonomous intelligent call screening</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span>Real-time voice synthesis and transcripts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span>Zero-distraction executive productivity</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/products/"
                className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline transition-colors"
              >
                <span>Explore Proprietary Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Custom Technology Solutions */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-5 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                <Wrench className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                  Pillar 02
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display tracking-tight mt-1">
                  Custom Technology Solutions
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                We design and engineer bespoke software systems, high-performance web platforms, cross-platform mobile apps, intuitive UI/UX design, and strategic IT consulting for businesses seeking tangible, reliable software solutions.
              </p>

              <div className="space-y-2 pt-2 border-t border-[var(--border)]">
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span>Website &amp; Web Application Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span>Native &amp; Cross-Platform iOS/Android Mobile Apps</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                  <span>UI/UX Design, Cloud/DevOps &amp; Web3 Systems</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/services/"
                className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline transition-colors"
              >
                <span>Explore Our 6 Official Services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Corporate Entity Details Pill */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs text-[var(--text-muted)] space-y-1 font-mono">
          <p className="font-semibold text-[var(--text-primary)]">Corporate Entity &amp; Jurisdiction:</p>
          <p>RRK Software Technologies Private Limited &bull; Registered Office: 5-11-840, Hanamkonda, Warangal, 506009, Telangana, India.</p>
        </div>

      </div>
    </section>
  );
}
