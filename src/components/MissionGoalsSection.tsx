import React from 'react';
import { COMPANY } from '@/data/company';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export default function MissionGoalsSection() {
  const { mission, goals } = COMPANY;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#060b18] text-white border-t border-white/[0.08] overflow-hidden">
      <StarWatermark size={580} position="top-right" variant="white" opacity={0.015} rotate={-15} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Mission Statement: Editorial Hero Block */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
            <span>{mission.title}</span>
          </div>
          <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3">
            {mission.subtitle}
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-tight">
            &ldquo;{mission.statement}&rdquo;
          </h2>
          <div className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
            {mission.description}
          </div>
        </div>

        {/* Goals: Sophisticated Numbered Editorial Layout */}
        <div>
          <div className="border-b border-white/[0.08] pb-6 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8]">
                  // Strategic Direction
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-[-0.02em] mt-2">
                  Our Goals — Where We&apos;re Headed
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Long-Term Principles &bull; Established 2025
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {goals.map((goal) => (
              <div 
                key={goal.number}
                className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-baseline group"
              >
                {/* Number Index */}
                <div className="md:col-span-2 font-mono text-3xl sm:text-4xl font-extrabold text-slate-600 group-hover:text-sky-400 transition-colors">
                  {goal.number}
                </div>

                {/* Goal Title */}
                <div className="md:col-span-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {goal.title}
                  </h4>
                </div>

                {/* Goal Description */}
                <div className="md:col-span-6 text-base text-slate-400 leading-relaxed font-normal">
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
