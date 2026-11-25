'use client';

import React from 'react';
import { Lightbulb, Users2, Rocket, BrainCircuit, ShieldCheck, HeartHandshake } from 'lucide-react';
import { StaggeredText } from '@/components/design-system/KineticTypography';

export default function AboutCultureLife() {
  const cultureItems = [
    {
      title: 'Builders’ Mindset',
      icon: Lightbulb,
      desc: 'Everyone on our team is encouraged to propose architectures, challenge defaults, and build prototypes &mdash; not just check off Jira tickets.',
      tint: 'from-amber-500/10 to-transparent',
    },
    {
      title: 'Cross-Discipline Squads',
      icon: Users2,
      desc: 'Designers, full-stack engineers, and QA specialists collaborate side-by-side in unified sprints to eliminate handoff friction.',
      tint: 'from-sky-500/10 to-transparent',
    },
    {
      title: 'First-Principles Engineering',
      icon: BrainCircuit,
      desc: 'We solve architectural bottlenecks at their fundamental core, avoiding fragile quick-fixes and bloated dependencies.',
      tint: 'from-indigo-500/10 to-transparent',
    },
    {
      title: 'High-Velocity Sprints',
      icon: Rocket,
      desc: 'Short, focused iterative cycles with daily testing and blue-green staging environments keep our shipping momentum high.',
      tint: 'from-emerald-500/10 to-transparent',
    },
    {
      title: 'OWASP & Production Rigor',
      icon: ShieldCheck,
      desc: 'Security reviews, static type checking, and automated regression suites are non-negotiable requirements before any code merges.',
      tint: 'from-rose-500/10 to-transparent',
    },
    {
      title: 'Transparent Ownership',
      icon: HeartHandshake,
      desc: 'Every team member takes end-to-end accountability for system reliability, code cleanliness, and partner satisfaction.',
      tint: 'from-teal-500/10 to-transparent',
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[var(--surface)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-7 sm:mb-9">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
            Culture &amp; Team
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
            <StaggeredText text="Life @" />{' '}
            <StaggeredText text="Tech22Blocks" isShimmer />
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal">
            Great software is engineered by empowered, curious people. Here is what defines our engineering workplace.
          </p>
        </div>

        {/* 6 Culture Cards (SVSS sv-icards cols-3 style-icon) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {cultureItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${item.tint} pointer-events-none rounded-bl-full`} />

                <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] mb-4 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
