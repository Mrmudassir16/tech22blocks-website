import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Cpu, 
  Eye, 
  Wrench, 
  Target 
} from 'lucide-react';
import { StarWatermark } from '@/components/StarEmblem';

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
      <StarWatermark size={560} position="top-right" variant="blue" opacity={0.02} rotate={25} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Uniform Techco Underline Accent */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
              Why Tech22Blocks
            </span>
            <Image 
              src="/images/shape_title_under_line.svg" 
              alt="" 
              width={40} 
              height={8} 
              className="inline-block"
            />
          </div>
          <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Engineering built on <span className="text-[#0a85b1]">ownership</span> and accountability.
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
                className="relative rounded-2xl p-6 sm:p-7 bg-slate-50/70 border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:border-[#0a85b1]/60 hover:bg-white hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Icon + Monospace Step */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] group-hover:bg-[#0a85b1] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-5 h-5 transition-colors" />
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-400">
                      {point.num}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0a85b1] font-semibold">
                      {point.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 mt-1 leading-snug group-hover:text-[#0a85b1] transition-colors">
                      {point.title}
                    </h3>
                  </div>

                  {/* Narrative Body */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {point.description}
                  </p>

                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Core Principle</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0a85b1]/40 group-hover:bg-[#0a85b1] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
