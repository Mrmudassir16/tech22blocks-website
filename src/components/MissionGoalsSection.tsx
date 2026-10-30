import React from 'react';
import { COMPANY } from '@/data/company';

export default function MissionGoalsSection() {
  const { mission, goals } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Mission Statement: Editorial Hero Block */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
            <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
            <span>{mission.title}</span>
          </div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
            {mission.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            &ldquo;{mission.statement}&rdquo;
          </h2>
          <div className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {mission.description}
          </div>
        </div>

        {/* Goals: Sophisticated Numbered Editorial Layout (Not repetitive cards) */}
        <div>
          <div className="border-b border-slate-300/80 pb-6 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                  Strategic Direction
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Our Goals — Where We&apos;re Headed
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Long-Term Principles &bull; Established 2025
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {goals.map((goal) => (
              <div 
                key={goal.number}
                className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-baseline group"
              >
                {/* Number Index */}
                <div className="md:col-span-2 font-mono text-3xl sm:text-4xl font-extrabold text-slate-300 group-hover:text-[#0a85b1] transition-colors">
                  {goal.number}
                </div>

                {/* Goal Title */}
                <div className="md:col-span-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-slate-950">
                    {goal.title}
                  </h4>
                </div>

                {/* Goal Description */}
                <div className="md:col-span-6">
                  <p className="text-base text-slate-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

