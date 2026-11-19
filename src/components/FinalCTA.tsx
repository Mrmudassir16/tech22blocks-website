import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { StarWatermark } from '@/components/StarEmblem';
import { getAssetUrl } from '@/utils/assets';
import { SectionTransitionShape, SectionBackground } from '@/components/design-system/SectionDecorations';

export default function FinalCTA() {
  return (
    <section 
      className="bg-[var(--surface-elevated)] text-[var(--text-primary)] py-14 sm:py-16 lg:py-20 relative overflow-hidden transition-colors duration-200" 
      aria-labelledby="cta-heading"
    >
      {/* 1. Dynamic Section Transition Shape (Stepped Shelf Right - No straight border) */}
      <SectionTransitionShape 
        position="top" 
        variant="stepped-right" 
        fillColor="var(--canvas)" 
      />

      {/* 2. Keynote Torus Atmosphere + Corner Accent (Vivid in Light Mode) */}
      <SectionBackground type="torus" position="center" opacity="opacity-75 dark:opacity-30" />
      <SectionBackground type="angle-corner" position="bottom-left" opacity="opacity-70 dark:opacity-25" />

      {/* Background Volumetric Glow & Signature Star Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--accent)]/[0.04] rounded-full blur-[140px] pointer-events-none transform-gpu" 
      />

      <StarWatermark size={720} position="center" variant="white" opacity={0.02} rotate={-10} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-sm sm:text-base font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
              Initiate an Engineering Dialogue
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={48} 
              height={9} 
              className="inline-block opacity-80"
            />
          </div>

          {/* Perfectly Centered Balanced Headline */}
          <div className="text-center relative w-full">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.15] [text-wrap:balance]">
              Have a project or product idea?{' '}
              <span className="text-[var(--accent)] block sm:inline">
                Let&apos;s engineer something extraordinary together.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you require a mission-critical web platform, an intelligent mobile app, custom enterprise software, or an early consultation on voice AI automation — our leadership and engineering team are ready to collaborate.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="btn-offset w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider font-mono text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-xl shadow-lg transition-all duration-200 group"
            >
              <span>Schedule a Project Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <a
              href={`mailto:${COMPANY.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-xs font-semibold uppercase tracking-wider font-mono text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)] rounded-xl transition-all duration-200 shadow-sm"
            >
              <Mail className="w-4 h-4 mr-2 text-[var(--accent)]" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          {/* Quick Contact & Telemetry Info */}
          <div className="pt-10 mt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[var(--text-muted)] font-mono">
            <div className="card-surface p-4 flex items-center justify-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{COMPANY.phoneDisplay}</span>
            </div>
            <div className="card-surface p-4 flex items-center justify-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Warangal, Telangana, India</span>
            </div>
            <div className="card-surface p-4 flex items-center justify-center gap-2.5">
              <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Direct Founder Engagement</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
