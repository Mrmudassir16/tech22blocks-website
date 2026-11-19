'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Star3DEngine from '@/components/design-system/Star3DEngine';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { getAssetUrl } from '@/utils/assets';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[80vh] lg:min-h-[82vh] flex items-center bg-[var(--canvas)] text-[var(--text-primary)] overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16 border-b border-[var(--border)] transition-colors duration-200"
      aria-label="Tech22Blocks Corporate Hero"
    >
      {/* Background Volumetric Vignette & Precision Grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft Ambient Radial Flares */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-sky-500/[0.08] rounded-full blur-[140px] transform-gpu" />
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-[var(--accent)]/[0.12] rounded-full blur-[150px] transform-gpu" />

        {/* Dynamic Moving Tech Visual for Mobile View (Replaces empty grid on mobile when Star is hidden) */}
        <div className="block lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] max-w-[85vw] opacity-75 dark:opacity-35 pointer-events-none select-none z-0">
          <div className="absolute inset-0 bg-sky-400/25 dark:bg-sky-500/15 rounded-full blur-3xl animate-pulse-aura" />
          <Image
            src={getAssetUrl('/images/abstract_fluid_helix.png')}
            alt=""
            fill
            priority
            className="object-contain animate-float-slow filter drop-shadow-[0_16px_40px_rgba(10,133,177,0.45)] dark:drop-shadow-[0_12px_36px_rgba(10,133,177,0.4)]"
          />
        </div>

        {/* Micro-Grid with Radial Mask */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 35%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 35%, transparent 80%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Premium Architectural Typography */}
          <div className="lg:col-span-7 space-y-7">

            {/* Core Typography with Stagger and Clean Leading */}
            <div className="space-y-4 group/heading">
              <h1 
                className="font-extrabold text-[var(--text-primary)] tracking-[-0.035em] cursor-default"
                style={{ fontSize: 'clamp(2.15rem, 6.5vw, 5.25rem)', lineHeight: '1.08' }}
              >
                <StaggeredText text="Engineering software" interactiveHover /> <br className="hidden sm:block" />
                <StaggeredText text="that ships." isShimmer interactiveHover />
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--text-muted)] tracking-[-0.02em] leading-snug cursor-default">
                From ambitious ideas to enterprise-scale solutions.
              </p>
            </div>

            {/* Narrative */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
              We build proprietary technology products and develop tailored digital solutions that help businesses solve real-world challenges and move forward with confidence.
            </p>

            {/* Action Buttons with 180ms Hover Lift & Hard Offset Shadow */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider font-mono text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-xl shadow-[0_4px_16px_rgba(10,133,177,0.35)] btn-offset group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services/"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider font-mono text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-sm btn-offset"
              >
                <span>Explore Our Capabilities</span>
              </Link>
            </div>

          </div>

          {/* Right Column: 3D Gyroscopic Star Engine (Desktop view, Intact via CSS Keyframes) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center relative">
            
            {/* Radial Vignette directly behind the Star Engine */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                background: 'radial-gradient(circle at 50% 50%, transparent 15%, var(--canvas) 75%)',
                filter: 'blur(10px)',
              }}
              aria-hidden="true"
            />

            {/* Soft Ambient Aura */}
            <div 
              className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] bg-sky-500/[0.1] rounded-full blur-[80px] pointer-events-none"
              aria-hidden="true" 
            />

            {/* 3D Star Engine */}
            <div className="relative z-10 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              <Star3DEngine size={420} interactive={true} autoRotateSpeed={24} />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
