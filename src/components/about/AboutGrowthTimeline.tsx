'use client';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';

interface Milestone {
  year: string;
  quarter?: string;
  title: string;
  description: string;
  badge: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '2025',
    quarter: 'Q1',
    title: 'Founded in Hanamkonda (Warangal)',
    badge: 'Origin',
    description: 'Incorporated under RRK Software Technologies Private Limited by father and son, establishing an engineering foundation uniting long-term business governance with modern full-stack software craftsmanship.',
  },
  {
    year: '2025',
    quarter: 'Q2',
    title: 'Architecture & Prototyping of VoiSage AI',
    badge: 'Proprietary R&D',
    description: 'Began research & engineering on our flagship proprietary AI platform, VoiSage AI &mdash; an autonomous voice agent designed to screen unknown calls, filter spam, and protect executive focus.',
  },
  {
    year: '2025',
    quarter: 'Q3',
    title: 'Formalization of 6 Core Engineering Verticals',
    badge: 'Official Services',
    description: 'Standardized our full-stack service catalog across Next.js Web Development, Mobile Apps (iOS/Android), UI/UX Systems, Multi-Cloud DevOps, Web3 Distributed Systems, and Architecture Audits.',
  },
  {
    year: '2026',
    quarter: 'Q1',
    title: 'DPIIT & MSME Enterprise Recognition',
    badge: 'Compliance',
    description: 'Recognized by the Ministry of MSME, Govt. of India, and registered under DPIIT Startup India, establishing verified enterprise credibility and compliance.',
  },
  {
    year: '2026',
    quarter: 'Ongoing',
    title: 'Multi-Cloud Deployments & Enterprise Scale',
    badge: 'Expansion',
    description: 'Scaling custom software client deliveries with sprint-based predictability, sub-100ms edge response standards, and 24/7 post-launch SLA reliability.',
  },
];

export default function AboutGrowthTimeline() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const reelRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(MILESTONES.length - 1, prev + 1));
  };

  const progressPercent = ((currentIndex + 1) / MILESTONES.length) * 100;

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--surface)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
            Growth Timeline
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal">
            From initial architectural blueprints in Warangal to engineering software for ambitious businesses.
          </p>
        </div>

        {/* Film Reel Navigation & Progress Bar (Modeled on SVSS ab-film-nav) */}
        <div className="flex items-center gap-4 mb-6">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] hover:bg-[var(--accent)] hover:text-white text-[var(--text-primary)] flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-sm"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Progress Track */}
          <div className="flex-1 h-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[var(--accent)] to-sky-400 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === MILESTONES.length - 1}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] hover:bg-[var(--accent)] hover:text-white text-[var(--text-primary)] flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-sm"
            aria-label="Next milestone"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Reel Cards (Scrollable horizontal or active focused display) */}
        <div 
          ref={reelRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {MILESTONES.map((m, idx) => {
            const isFocused = currentIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isFocused
                    ? 'bg-[var(--surface-elevated)] border-[var(--accent)] ring-2 ring-[var(--accent)]/30 shadow-md -translate-y-1'
                    : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-elevated)]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{m.year} &bull; {m.quarter}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display tracking-tight mb-2.5">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
