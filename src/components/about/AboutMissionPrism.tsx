'use client';

import React, { useState } from 'react';
import { Target, Compass, Award } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function AboutMissionPrism() {
  const [activeFace, setActiveFace] = useState<number>(0);

  const PRISM_DATA = [
    {
      idx: '01',
      title: 'Our Mission',
      icon: Target,
      tagline: 'Why We Show Up Every Day',
      body: COMPANY.mission.description || 'To make high-caliber software development and intelligent technology accessible, honest, and impactful. We combine deep technical skill, disciplined agile processes, and an unwavering focus on measurable client outcomes.',
      bgGradient: 'from-[#0A85B1] to-[#0A1628]',
      accentColor: '#38BDF8'
    },
    {
      idx: '02',
      title: 'Our Vision',
      icon: Compass,
      tagline: 'Where We Are Headed',
      body: 'To become the most trusted software engineering partner for ambitious businesses, recognized not for excessive team headcount, but for the precision, technical craft, and enduring commercial impact our software creates for every partner.',
      bgGradient: 'from-[#0284C7] to-[#0F172A]',
      accentColor: '#60A5FA'
    },
    {
      idx: '03',
      title: 'Our Values',
      icon: Award,
      tagline: 'How We Behave on the Way',
      body: 'Ownership over excuses, transparency over spin, and software craft over shortcuts. We treat every client’s architecture and budget as if it were our own, ship code we are proud of, and measure our success by the tangible growth our partners achieve.',
      bgGradient: 'from-[#0D9488] to-[#042F2E]',
      accentColor: '#2DD4BF'
    }
  ];

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
            Core Philosophy
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
            Mission, Vision &amp; Values
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal">
            What we work for, where we are going, and the principles that guide every release.
          </p>
        </div>

        {/* 3D Turning Prism Scene */}
        <div className="ab-prism-scene relative">
          <div 
            className="ab-prism-body" 
            style={{ 
              transform: `translateZ(-160px) rotateY(${activeFace * -120}deg)` 
            }}
          >
            {PRISM_DATA.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`ab-prism-face bg-gradient-to-br ${item.bgGradient} text-white text-left`}
                  style={{
                    transform: `rotateY(${i * 120}deg) translateZ(160px)`,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-widest opacity-90 uppercase" style={{ color: item.accentColor }}>
                      {item.tagline}
                    </span>
                    <Icon className="w-5 h-5 opacity-90" style={{ color: item.accentColor }} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm lg:text-[15px] text-slate-100/90 leading-relaxed overflow-y-auto max-h-[140px] sm:max-h-[160px] scrollbar-none">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab Controls (Modeled after SVSS ab-prism-tabs) */}
        <div className="mt-8 inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] shadow-sm">
          {PRISM_DATA.map((item, i) => {
            const isSelected = activeFace === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveFace(i)}
                className={`min-h-[40px] px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent)] text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]'
                }`}
                aria-selected={isSelected}
              >
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
