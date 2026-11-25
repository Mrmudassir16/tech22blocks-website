import React from 'react';
import Image from 'next/image';
import { Cpu, Eye, Wrench, Target } from 'lucide-react';
import { StarWatermark } from '@/components/StarEmblem';
import { getAssetUrl } from '@/utils/assets';
import { SectionTransitionShape, SectionBackground } from '@/components/design-system/SectionDecorations';

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
      className="relative py-12 sm:py-14 lg:py-16 bg-[var(--canvas)] text-[var(--text-primary)] overflow-hidden transition-colors duration-200" 
      aria-labelledby="why-heading"
    >
      {/* 1. Dynamic Section Transition Shape (Stepped Shelf Left - No straight border) */}
      <SectionTransitionShape 
        position="top" 
        variant="stepped-left" 
        fillColor="var(--surface-elevated)" 
      />

      {/* 2. Angle Image Corner Accent (Vivid in Light Mode) */}
      <SectionBackground type="angle-corner" position="bottom-right" opacity="opacity-70 dark:opacity-25" />

      {/* Background Volumetric Flare */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[var(--accent)]/[0.04] rounded-full blur-[140px] pointer-events-none transform-gpu" 
      />
      
      <StarWatermark size={680} position="top-right" variant="white" opacity={0.02} rotate={25} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 lg:mb-10">
          <div className="mb-3">
            <span className="heading-focus-underline text-sm sm:text-base font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
              Why Tech22Blocks
            </span>
          </div>

          <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
            Engineering built on <span className="text-[var(--accent)]">ownership</span> and accountability.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
            We focus on shipping software that creates tangible business value, partnering closely with leaders through dedicated engineering collaboration.
          </p>
        </div>

        {/* 4 Differentiators in 4-Column Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_POINTS.map((point) => {
            const Icon = point.icon;

            return (
              <div 
                key={point.num} 
                className="card-surface p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] group"
              >
                <div className="space-y-5">
                  
                  {/* Top Bar: Icon + Monospace Step */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-mono font-bold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                      {point.num}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                      {point.category}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                      {point.title}
                    </h3>
                  </div>

                  {/* Narrative Body */}
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                    {point.description}
                  </p>

                </div>

                <div className="pt-5 mt-6 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                  <span>Core Principle</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
