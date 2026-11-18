'use client';

import React from 'react';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import ImmersiveContact from '@/components/design-system/ImmersiveContact';

export default function ContactPageContent() {
  return (
    <>
      {/* Immersive Dark Editorial Header */}
      <section className="relative bg-[#020617] text-white py-18 lg:py-24 border-b border-slate-800 overflow-hidden">
        <StarWatermark size={580} position="top-right" variant="white" opacity={0.03} rotate={15} />
        
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00F0FF 1px, transparent 1px),
              linear-gradient(to bottom, #00F0FF 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8] mb-4 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
              <span>Direct Communication</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Let&apos;s build something meaningful.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed">
              Have a technology challenge or a software project ready to launch? Speak directly with our technical leadership. No intermediaries, no sales fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Immersive Contact Hub (No 3D star, sleek command deck) */}
      <ImmersiveContact />
    </>
  );
}
