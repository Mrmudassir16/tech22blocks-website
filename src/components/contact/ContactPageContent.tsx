'use client';

import React from 'react';
import { StarWatermark } from '@/components/StarEmblem';
import ImmersiveContact from '@/components/design-system/ImmersiveContact';

export default function ContactPageContent() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Contact Hero Header */}
      <section className="relative bg-[var(--surface)] text-[var(--text-primary)] pt-24 sm:pt-28 pb-14 sm:pb-20 lg:py-24 border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={580} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        
        {/* Subtle ambient flare */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-3">
              <span className="heading-focus-underline text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                Direct Engineering Contact
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              Let&apos;s build something meaningful.
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed">
              Have a technology challenge or a software project ready to launch? Speak directly with our technical leadership. No intermediaries, no sales fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Immersive Contact Hub */}
      <ImmersiveContact />
    </div>
  );
}
