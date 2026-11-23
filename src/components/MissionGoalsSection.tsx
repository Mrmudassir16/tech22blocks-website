import React from 'react';
import { COMPANY } from '@/data/company';
import { StarWatermark } from '@/components/StarEmblem';

export default function MissionGoalsSection() {
  const { mission, goals } = COMPANY;

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--canvas)] text-[var(--text-primary)] border-t border-[var(--border)] overflow-hidden transition-colors duration-200">
      <StarWatermark size={580} position="top-right" variant="blue" opacity={0.02} rotate={-15} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* Mission Statement: Editorial Hero Block */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
            <span>{mission.title}</span>
          </div>
          <p className="text-xs font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 sm:mb-3">
            {mission.subtitle}
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display">
            &ldquo;{mission.statement}&rdquo;
          </h2>
          <div className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl font-normal">
            {mission.description}
          </div>
        </div>

        {/* Goals: Sophisticated Numbered Editorial Layout */}
        <div>
          <div className="border-b border-[var(--border)] pb-5 sm:pb-6 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--accent)]">
                  // Strategic Direction
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mt-1.5 sm:mt-2 font-display">
                  Our Goals — Where We&apos;re Headed
                </h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                Long-Term Principles &bull; Established 2025
              </p>
            </div>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {goals.map((goal) => (
              <div 
                key={goal.number}
                className="py-8 sm:py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-baseline group"
              >
                {/* Number Index */}
                <div className="md:col-span-2 font-mono text-2xl sm:text-4xl font-extrabold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                  {goal.number}
                </div>

                {/* Goal Title */}
                <div className="md:col-span-4">
                  <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent)] transition-colors font-display">
                    {goal.title}
                  </h4>
                </div>

                {/* Goal Description */}
                <div className="md:col-span-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
                  {goal.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
