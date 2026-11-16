'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  Cpu, 
  Terminal, 
  Layers, 
  Sparkles,
  Zap
} from 'lucide-react';
import { StarWatermark } from '@/components/StarEmblem';

interface TechItem {
  name: string;
  category: 'frontend' | 'mobile' | 'backend' | 'cloud';
  desc: string;
  badge: string;
}

const TECHNOLOGIES: TechItem[] = [
  // Frontend
  { name: 'Next.js 14', category: 'frontend', desc: 'Server-Side Rendering, App Router & Edge Runtime', badge: 'SSR / Edge' },
  { name: 'React', category: 'frontend', desc: 'Component architectures & interactive client states', badge: 'Web UI' },
  { name: 'TypeScript', category: 'frontend', desc: 'Strict static typing & enterprise compile-time safety', badge: 'Type Safe' },
  { name: 'Tailwind CSS', category: 'frontend', desc: 'Utility-first responsive layouts & design systems', badge: 'Styling' },
  
  // Mobile
  { name: 'Flutter', category: 'mobile', desc: 'Cross-platform native compilation for iOS & Android', badge: 'Cross-Platform' },
  { name: 'React Native', category: 'mobile', desc: 'Native mobile components powered by modern React', badge: 'Mobile' },
  { name: 'Swift & SwiftUI', category: 'mobile', desc: 'High-performance native Apple iOS architectures', badge: 'iOS Native' },
  { name: 'Kotlin & Compose', category: 'mobile', desc: 'Modern Android native app development', badge: 'Android Native' },

  // Backend
  { name: 'Node.js', category: 'backend', desc: 'Asynchronous event-driven backend microservices', badge: 'Runtime' },
  { name: 'Python', category: 'backend', desc: 'AI orchestration, data processing & FastAPI services', badge: 'AI / Backend' },
  { name: 'Go (Golang)', category: 'backend', desc: 'High-concurrency microservices & low-latency APIs', badge: 'Concurrency' },
  { name: 'PostgreSQL', category: 'backend', desc: 'ACID-compliant relational database management', badge: 'Relational DB' },

  // Cloud & DevOps
  { name: 'Docker', category: 'cloud', desc: 'Containerized deployment & reproducible environments', badge: 'Containers' },
  { name: 'Redis', category: 'cloud', desc: 'In-memory caching & distributed pub/sub pipelines', badge: 'In-Memory Cache' },
  { name: 'AWS & Cloudflare', category: 'cloud', desc: 'Global CDN, edge DNS & cloud compute infrastructure', badge: 'Infrastructure' },
  { name: 'Git & GitHub CI', category: 'cloud', desc: 'Automated CI/CD pipelines & version-controlled releases', badge: 'DevOps' },
];

export default function TechnologiesSection() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'mobile' | 'backend' | 'cloud'>('all');

  const filtered = filter === 'all' 
    ? TECHNOLOGIES 
    : TECHNOLOGIES.filter((t) => t.category === filter);

  return (
    <section 
      className="relative py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden" 
      aria-labelledby="technologies-heading"
    >
      <StarWatermark size={580} position="top-right" variant="blue" opacity={0.02} rotate={15} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-block mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a85b1] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Our Technologies
              </span>
            </div>

            <h2 id="technologies-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Modern Tech Stack. Built for Scale.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We select battle-tested languages, frameworks, and cloud infrastructure engineered for high throughput, maintainability, and security.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'frontend', label: 'Web & UI' },
              { id: 'mobile', label: 'Mobile' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'cloud', label: 'Cloud & DevOps' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-[#0a85b1] text-white shadow-md shadow-[#0a85b1]/30 font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-[#0a85b1]/60 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#0a85b1]/40 group-hover:bg-[#0a85b1] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="capitalize">{item.category}</span>
                <span className="text-emerald-600 font-semibold">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
