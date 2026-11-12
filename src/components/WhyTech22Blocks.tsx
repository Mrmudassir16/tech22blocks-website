import React from 'react';
import { Cpu, Layers, Sparkles, Target } from 'lucide-react';
import { COMPANY } from '@/data/company';

const DIFFERENTIATORS = [
  {
    num: '01',
    icon: <Cpu className="w-5 h-5 text-[#0a85b1]" />,
    title: 'AI-First Engineering',
    description: "We don't build superficial wrappers. We integrate practical machine intelligence and voice automation directly into daily business operations — with our own proprietary AI product as proof.",
  },
  {
    num: '02',
    icon: <Layers className="w-5 h-5 text-[#0a85b1]" />,
    title: 'Scalable Architecture',
    description: 'Clean codebases engineered for speed, high concurrency, and zero technical debt. Systems designed to sustain your business as it grows — not collapse under pressure.',
  },
  {
    num: '03',
    icon: <Sparkles className="w-5 h-5 text-[#0a85b1]" />,
    title: 'Modern Technology Stack',
    description: 'Next.js, React Native, TypeScript, cloud-native microservices, and robust SQL databases — proven tools chosen for reliability, not for trend-following.',
  },
  {
    num: '04',
    icon: <Target className="w-5 h-5 text-[#0a85b1]" />,
    title: 'Product-Focused Execution',
    description: "Two generations of founder leadership who speak plainly, build fast, and show up. You work directly with decision-makers — no account managers, no vanishing developers.",
  },
];

export default function WhyTech22Blocks() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/60" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="label-eyebrow mb-3">Why Tech22Blocks</div>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built for Impact, Not Volume
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {`We'd rather do 10 projects exceptionally well than 100 adequately. Here is what sets our technology partnership apart.`}
          </p>
        </div>

        {/* 4 Differentiators — editorial left-border style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.num}
              className="border-l-2 border-[#0a85b1] pl-5 py-1 space-y-3 hover:border-[#0369a1] transition-colors group"
            >
              <span className="text-3xl font-black text-slate-100 group-hover:text-sky-100 leading-none select-none block transition-colors">
                {item.num}
              </span>
              <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission statement strip */}
        <div className="mt-14 pt-8 border-t border-slate-100 text-center">
          <p className="text-sm sm:text-base text-slate-500 italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;{COMPANY.mission.statement}&rdquo;
          </p>
          <p className="mt-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            — The Tech22Blocks Mission
          </p>
        </div>

      </div>
    </section>
  );
}
