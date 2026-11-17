'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import Star3DEngine from '@/components/design-system/Star3DEngine';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-[#030712] text-white overflow-hidden border-b border-white/[0.08]"
      aria-label="Tech22Blocks Corporate Hero"
    >
      {/* Background Architectural Grid & Volumetric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient Radial Lighting Flares */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[550px] bg-sky-500/[0.12] rounded-full blur-[130px] transform-gpu" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#0a85b1]/[0.18] rounded-full blur-[140px] transform-gpu" />
        
        {/* Subtle Precision Grid with Radial Mask */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)'
          }}
        />
        
        <StarWatermark size={780} position="top-right" variant="white" opacity={0.02} rotate={-15} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Architectural Typography */}
          <div className="lg:col-span-7 space-y-8">

            {/* Core Typography */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.035em] leading-[1.05]">
                Engineering software <br className="hidden sm:block" />
                <span className="relative inline-block bg-gradient-to-r from-white via-sky-200 to-[#38bdf8] bg-clip-text text-transparent">
                  that ships.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 tracking-[-0.02em] leading-snug">
                From ambitious ideas to enterprise-scale solutions.
              </p>
            </div>

            {/* Narrative */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
            </p>

            {/* Action Buttons with High-Craft Styling */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider font-mono text-white bg-gradient-to-r from-sky-500 via-[#0a85b1] to-[#0284c7] hover:from-sky-400 hover:to-sky-500 rounded-xl shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:shadow-[0_0_35px_rgba(14,165,233,0.55)] transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services/"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider font-mono text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] rounded-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Our Capabilities</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Interactive 3D Perspective Star Engine */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Backlight Ambient Aura */}
              <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[80px] pointer-events-none transform-gpu" />
              <Star3DEngine size={460} interactive={true} autoRotateSpeed={22} showCoordinates={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
