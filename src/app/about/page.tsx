import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Box, Wrench, ArrowRight } from 'lucide-react';
import FoundersSection from '@/components/FoundersSection';
import MissionGoalsSection from '@/components/MissionGoalsSection';
import FinalCTA from '@/components/FinalCTA';
import { COMPANY } from '@/data/company';
import { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'About Us — Heritage, Mission & Leadership | Tech22Blocks',
  description: 'Operating under RRK Software Technologies Private Limited, Tech22Blocks combines generational business perspective with modern software craftsmanship.',
};

export default function AboutPage() {
  const { story } = COMPANY;

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Page Hero Header */}
      <section className="bg-[var(--surface)] text-[var(--text-primary)] py-14 sm:py-20 lg:py-28 relative overflow-hidden border-b border-[var(--border)] transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-xs font-mono font-semibold text-[var(--accent)]">
              <span>About Tech22Blocks &bull; Est. 2025</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              Technology built on trust, persistence, and practical craft.
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl">
              Operating under {COMPANY.legalName}, Tech22Blocks unites strategic business governance with modern software craftsmanship &mdash; engineering proprietary products and custom digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Two Business Areas: Editorial Section */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={600} position="top-right" variant="blue" opacity={0.02} rotate={-10} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">

          <div className="border-b border-[var(--border)] pb-6 sm:pb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
              Origin &amp; Background
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 sm:mt-3 font-display">
              {story.title}
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 text-[var(--text-muted)] leading-relaxed font-normal text-sm sm:text-base lg:text-lg">
            <p className="text-lg sm:text-xl font-medium text-[var(--text-primary)] leading-snug">
              {story.p1}
            </p>
            <p className="text-[var(--text-muted)]">
              {story.p2}
            </p>
            <p className="text-[var(--text-muted)]">
              {story.p3}
            </p>
          </div>

          {/* Two Distinct Business Areas Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
            
            {/* Area 1: Proprietary Products */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 space-y-4 sm:space-y-5 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                <Box className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">
                01. Proprietary Products
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                We develop and operate our own software products, confronting real engineering challenges firsthand. Our featured product, <strong className="text-[var(--text-primary)] font-semibold">VoiSage AI</strong>, is an autonomous voice assistant designed to screen unknown incoming calls and protect executive attention.
              </p>
              <div className="pt-2">
                <Link
                  href="/products/"
                  className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline transition-colors"
                >
                  <span>Explore Proprietary Products</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Area 2: Custom Technology Solutions */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 space-y-4 sm:space-y-5 transition-all duration-300 hover:-translate-y-1 shadow-md group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">
                02. Custom Technology Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                We design and engineer bespoke software systems, high-performance web platforms, cross-platform mobile apps, intuitive UI/UX design, and strategic IT consulting for businesses seeking tangible, reliable software solutions.
              </p>
              <div className="pt-2">
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

          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs text-[var(--text-muted)] space-y-1 font-mono">
            <p className="font-semibold text-[var(--text-primary)]">Corporate Entity Details:</p>
            <p>RRK Software Technologies Private Limited &bull; Registered Office: 5-11-840, Hanamkonda, Warangal, 506009, Telangana, India.</p>
          </div>

        </div>
      </section>

      {/* The Founders Section (Detailed Father & Son Story) */}
      <FoundersSection />

      {/* Mission & 4 Core Goals */}
      <MissionGoalsSection />

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
