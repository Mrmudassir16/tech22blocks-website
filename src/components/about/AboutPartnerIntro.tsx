'use client';

import React from 'react';
import { COMPANY } from '@/data/company';
import { StarWatermark } from '@/components/StarEmblem';
import { ShieldCheck, Code, Zap, Clock } from 'lucide-react';

export default function AboutPartnerIntro() {
  const metrics = [
    { label: 'Official Services', value: '06', desc: 'Specialized engineering disciplines from web to AI', icon: Code },
    { label: 'Code Ownership', value: '100%', desc: 'Transparent git repos & complete IP ownership', icon: ShieldCheck },
    { label: 'Target Latency', value: '< 100ms', desc: 'Sub-second LCP and edge-optimized architecture', icon: Zap },
    { label: 'Production Uptime', value: '24/7', desc: 'Active telemetry, monitoring and post-launch SLAs', icon: Clock },
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--surface)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      <StarWatermark size={550} position="top-right" variant="blue" opacity={0.02} rotate={12} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Intro Copy */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
            Generational Trust &bull; Modern Craft
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2.5 font-display">
            Your Trusted Technology Partner
          </h2>
          <div className="mt-5 sm:mt-6 space-y-4 text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
            <p className="text-base sm:text-xl font-medium text-[var(--text-primary)] leading-snug">
              Today, Tech22Blocks operates under <strong className="text-[var(--text-primary)] font-semibold">{COMPANY.legalName}</strong> as a dedicated software engineering and product laboratory headquartered in Hanamkonda (Warangal), Telangana.
            </p>
            <p>
              We were founded to bridge the critical gap between superficial agency slide decks and production-ready software systems. Our service portfolio encompasses full-stack web platforms, fluid iOS and Android mobile engineering, atomic UI/UX design systems, cloud/DevOps architectures, and Web3.0 implementations &mdash; all delivered through agile sprints with fixed-price predictability and direct engineering accountability.
            </p>
          </div>
        </div>

        {/* 4 Metric Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] mb-3 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] mt-1 font-display">
                  {m.label}
                </div>
                <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-1.5 leading-snug">
                  {m.desc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
