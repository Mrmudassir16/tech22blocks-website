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
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText, KineticShimmerText } from '@/components/design-system/KineticTypography';

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
    <section 
      className="relative py-16 sm:py-20 lg:py-24 bg-[#020817] text-white border-b border-white/[0.08] overflow-hidden" 
      aria-labelledby="why-heading"
    >
      {/* Background Volumetric Flares */}
      <div className="absolute top-1/2 -right-40 w-[650px] h-[650px] bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu animate-pulse-aura" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-emerald-500/[0.06] rounded-full blur-[130px] pointer-events-none transform-gpu" />

      {/* Hairline subtle top ambient glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />
      
      <StarWatermark size={680} position="top-right" variant="white" opacity={0.02} rotate={25} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest font-mono text-[#38bdf8]">
              Why Tech22Blocks
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={40} 
              height={8} 
              className="inline-block brightness-200"
            />
          </div>
          <h2 id="why-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-tight cursor-default">
            <StaggeredText text="Engineering built on" /> <KineticShimmerText>ownership</KineticShimmerText> and accountability.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We focus on shipping software that creates tangible business value, partnering closely with leaders through dedicated engineering collaboration.
          </p>
        </div>

        {/* 4 Themed Differentiators in 4-Column Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_POINTS.map((point) => {
            const Icon = point.icon;

            return (
              <div 
                key={point.num} 
                className="relative rounded-2xl p-7 bg-[#0b1120]/80 border border-white/[0.08] flex flex-col justify-between hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 group backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]"
              >
                <div className="space-y-5">
                  
                  {/* Top Bar: Icon + Monospace Step */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8] group-hover:bg-sky-500/[0.15] group-hover:scale-105 transition-all duration-200">
                      <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-bold text-slate-400 group-hover:text-sky-300 group-hover:border-sky-400/30 transition-all">
                      {point.num}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                      {point.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all duration-300">
                      {point.title}
                    </h3>
                  </div>

                  {/* Narrative Body */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {point.description}
                  </p>

                </div>

                <div className="pt-5 mt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Core Principle</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400/40 group-hover:bg-sky-400 shadow-[0_0_6px_#38bdf8] transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
