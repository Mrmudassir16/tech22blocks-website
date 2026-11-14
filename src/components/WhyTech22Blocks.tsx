import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Cpu, 
  Eye, 
  Wrench, 
  Target 
} from 'lucide-react';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

const WHY_POINTS = [
  {
    num: '01',
    theme: 'Product-Grade Engineering',
    category: 'Engineering Craft',
    icon: Cpu,
    title: 'Product-Grade Engineering',
    description: 'We bring the same architectural discipline, testing rigor, and performance standards developed for our in-house AI platforms (like VoiSage AI) to every client system we build.'
  },
  {
    num: '02',
    theme: 'Transparent Development',
    category: 'Visibility & Trust',
    icon: Eye,
    title: 'Transparent Development',
    description: 'Shared Git repositories, direct access to sprint progress, clear architectural documentation, and honest milestone reporting from day one.'
  },
  {
    num: '03',
    theme: 'Practical Problem Solving',
    category: 'Pragmatism',
    icon: Wrench,
    title: 'Practical Problem Solving',
    description: 'We prioritize clean, maintainable solutions engineered to solve concrete business bottlenecks rather than introducing unnecessary architectural complexity.'
  },
  {
    num: '04',
    theme: 'Long-Term Technology Partnerships',
    category: 'Enduring Stewardship',
    icon: Target,
    title: 'Long-Term Partnerships',
    description: 'We structure our engagements around lasting stability and continuous technical stewardship, supporting businesses through multi-year scaling and product roadmaps.'
  }
];

export default function WhyTech22Blocks() {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden" aria-labelledby="why-heading">
      <StarWatermark size={560} position="top-right" variant="blue" opacity={0.022} rotate={25} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
            <StarEmblem size={13} variant="blue" />
            <span>Why Tech22Blocks &bull; Engineering Philosophy</span>
          </div>
          <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Engineering built on ownership, transparency and accountability.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We focus on shipping software that creates tangible business value, partnering closely with leaders through dedicated engineering collaboration.
          </p>
        </div>

        {/* 4 Themed Differentiators in 4-Column Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div 
                key={point.num}
                className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950 tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {point.description}
                    </p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200/70 mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{point.num}</span>
                  <span>{point.category}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
