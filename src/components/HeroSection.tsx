'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import { useDesignMode } from '@/context/DesignModeContext';
import { HeroVariantA, HeroVariantB, HeroVariantC } from '@/components/design-system/CreativeHeroVariants';

export default function HeroSection() {
  const { mode } = useDesignMode();

  if (mode === 'option-a') {
    return <HeroVariantA />;
  }
  if (mode === 'option-b') {
    return <HeroVariantB />;
  }
  if (mode === 'option-c') {
    return <HeroVariantC />;
  }

  return (
    <section 
      className="relative min-h-[78vh] lg:min-h-[84vh] flex items-center bg-[#020b14] text-white overflow-hidden border-b border-slate-800"
      aria-label="Tech22Blocks Corporate Hero"
    >
      
      {/* 1. Immersive Full-Width Corporate Image Background with Deep Blue Treatment */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Real High-Resolution Corporate Technology Visual Asset */}
        <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-luminosity">
          <Image
            src={getAssetUrl('/images/hero-corporate-engineering.jpg')}
            alt="Tech22Blocks enterprise software engineering visual"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Multi-Stage Deep Blue Gradient Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b14] via-[#031526]/90 to-[#020b14]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-transparent to-[#020b14]/70" />
        
        {/* Architectural Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a85b1 1px, transparent 1px),
              linear-gradient(to bottom, #0a85b1 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)'
          }}
        />

        {/* Ambient Brand Blue Glow Spotlights */}
        <div 
          className="absolute -top-32 left-1/3 w-[800px] h-[500px] bg-[#0a85b1]/20 rounded-full blur-[140px]" 
        />
        <div 
          className="absolute bottom-10 -right-24 w-[600px] h-[450px] bg-sky-500/15 rounded-full blur-[130px]" 
        />

        {/* Signature Brand Star Architectural Watermark */}
        <StarWatermark size={700} position="top-right" variant="white" opacity={0.035} rotate={-12} />
      </div>

      {/* 2. Hero Main Content Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-4xl space-y-8">
          
          {/* Corporate Positioning Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-slate-200 text-xs backdrop-blur-md shadow-lg shadow-sky-950/30">
            <StarEmblem size={13} variant="white" opacity={0.9} />
            <span className="font-mono text-[11px] font-semibold text-white tracking-wider uppercase">
              Software Engineering &bull; Digital Innovation
            </span>
          </div>

          {/* Prominent Editorial Headlines */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Engineering software <br className="hidden sm:block" />
              <span className="relative inline-block bg-gradient-to-r from-sky-300 via-[#38bdf8] to-[#0a85b1] bg-clip-text text-transparent">
                that ships.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 tracking-tight leading-snug">
              From ambitious ideas to enterprise-scale solutions.
            </p>
          </div>

          {/* Strategic Narrative */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
            We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
          </p>

          {/* Standardized CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-xl shadow-lg shadow-[#0a85b1]/30 hover:shadow-[#0a85b1]/50 transition-all duration-200 group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services/"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-200"
            >
              <span>Explore Our Capabilities</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
