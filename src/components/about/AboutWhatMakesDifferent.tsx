'use client';

import React from 'react';
import { 
  Users, 
  GitPullRequest, 
  Layers, 
  Zap, 
  ShieldCheck, 
  MessageSquareCode 
} from 'lucide-react';

export default function AboutWhatMakesDifferent() {
  const commitments = [
    {
      idx: '01',
      title: 'Two Generations of Thinking',
      icon: Users,
      desc: 'Combining decades of business perspective and corporate discipline with cutting-edge TypeScript and AI engineering.',
      tint: 'from-blue-500/10 to-transparent',
    },
    {
      idx: '02',
      title: 'Sprint-Based Predictability',
      icon: GitPullRequest,
      desc: 'Disciplined agile sprints, shared git repos, clear milestone acceptance criteria, and zero hidden scope creep.',
      tint: 'from-sky-500/10 to-transparent',
    },
    {
      idx: '03',
      title: 'Dual Product & Client Craft',
      icon: Layers,
      desc: 'We develop our own software products like VoiSage AI firsthand, so our client architectures reflect battle-tested production reality.',
      tint: 'from-indigo-500/10 to-transparent',
    },
    {
      idx: '04',
      title: 'Sub-100ms Performance Focus',
      icon: Zap,
      desc: 'Architected with modern Next.js server components, edge caching, and fluid 60 FPS mobile layouts for sub-second LCP.',
      tint: 'from-amber-500/10 to-transparent',
    },
    {
      idx: '05',
      title: 'Zero-Compromise Security',
      icon: ShieldCheck,
      desc: 'OWASP-compliant code practices, automated end-to-end regression suites, and strict data privacy compliance.',
      tint: 'from-emerald-500/10 to-transparent',
    },
    {
      idx: '06',
      title: 'Direct Senior Engineering',
      icon: MessageSquareCode,
      desc: 'Direct communication with technical founders and senior system architects &mdash; no non-technical middleman friction.',
      tint: 'from-purple-500/10 to-transparent',
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
            Our Commitments
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
            What Makes Tech22Blocks Different?
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal">
            Six engineering commitments we make to every client, and keep, release after release.
          </p>
        </div>

        {/* 6 Grid Cards (SVSS sv-icards cols-3 style-icon) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.tint} pointer-events-none rounded-bl-full`} />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                    {item.idx}
                  </span>
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
