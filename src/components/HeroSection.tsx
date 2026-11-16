'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import Star3DEngine from '@/components/design-system/Star3DEngine';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center bg-[#020b14] text-white overflow-hidden border-b border-slate-800"
      aria-label="Tech22Blocks Corporate Hero"
    >
      {/* Background Volumetric Glow & Geometric Watermark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[750px] h-[550px] bg-[#0a85b1]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[450px] bg-sky-500/15 rounded-full blur-[130px]" />
        
        {/* Hexagonal Perspective Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a85b1 1px, transparent 1px),
              linear-gradient(to bottom, #0a85b1 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 90%)'
          }}
        />
        <StarWatermark size={750} position="top-right" variant="white" opacity={0.03} rotate={-15} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Positioning */}
          <div className="lg:col-span-7 space-y-7">

            {/* Core Typography */}
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

            {/* Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
            </p>

            {/* Action Buttons */}
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

          {/* Right Column: Interactive 3D Perspective Star Engine */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Star3DEngine size={460} interactive={true} autoRotateSpeed={22} showCoordinates={true} />
          </div>

        </div>
      </div>
    </section>
  );
}
