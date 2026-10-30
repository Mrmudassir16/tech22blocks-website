import React from 'react';
import { Cpu, Layers, Sparkles, Target } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: <Cpu className="w-5 h-5 text-[#0a85b1]" />,
    title: "AI-First Engineering",
    description: "We don't build superficial wrappers. We integrate practical machine intelligence and voice automation directly into daily business operations."
  },
  {
    icon: <Layers className="w-5 h-5 text-[#0a85b1]" />,
    title: "Scalable Architecture",
    description: "Clean codebases engineered for speed, high concurrency, and zero bloat. Systems built to sustain your business as you grow."
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#0a85b1]" />,
    title: "Modern Technology Stack",
    description: "Next.js, React Native, TypeScript, cloud native microservices, and robust SQL databases — proven tools that ship reliably."
  },
  {
    icon: <Target className="w-5 h-5 text-[#0a85b1]" />,
    title: "Product-Focused Execution",
    description: "Two generations of founder leadership who speak plainly, build fast, provide transparent repositories, and actually show up."
  }
];

export default function WhyTech22Blocks() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
            <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
            <span>Why Tech22Blocks</span>
          </div>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built for Impact, Not Volume
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We’d rather do 10 projects exceptionally well than 100 adequately. Here is what sets our technology partnership apart.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DIFFERENTIATORS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
