'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { StaggeredText } from '@/components/design-system/KineticTypography';

export default function AboutCertifications() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-7 sm:mb-9">
          <div>
            <span className="heading-focus-underline text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
              Verified Standards
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
            <StaggeredText text="Certifications &" />{' '}
            <StaggeredText text="Recognition" isShimmer />
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal">
            Operating with verified government registrations and enterprise-grade software standards.
          </p>
        </div>

        {/* Certifications Cards (SVSS cols-3 style-icon) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: MSME */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="h-16 flex items-center mb-4">
                <Image
                  src={getAssetUrl('/images/msme-white-transparent.png')}
                  alt="Ministry of MSME Govt. of India"
                  width={140}
                  height={50}
                  className="object-contain filter dark:brightness-100 brightness-0 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[11px] font-mono font-semibold mb-2">
                <CheckCircle2 className="w-3 h-3" />
                <span>Govt. of India Registered</span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] font-display tracking-tight mb-2">
                Ministry of MSME
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                Officially registered under the Ministry of Micro, Small and Medium Enterprises, Govt. of India, upholding national enterprise standards.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)]">
              Entity: RRK Software Technologies Pvt. Ltd.
            </div>
          </div>

          {/* Card 2: DPIIT Startup India */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="h-16 flex items-center mb-4">
                <Image
                  src={getAssetUrl('/images/dpiit-pure-white-transparent.png')}
                  alt="DPIIT Startup India"
                  width={160}
                  height={45}
                  className="object-contain filter dark:brightness-100 brightness-0 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[11px] font-mono font-semibold mb-2">
                <CheckCircle2 className="w-3 h-3" />
                <span>#StartupIndia Recognized</span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] font-display tracking-tight mb-2">
                DPIIT Recognition
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                Recognized by the Department for Promotion of Industry and Internal Trade (DPIIT) as a verified Indian technology startup.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)]">
              Certificate: DPIIT Recognized Startup
            </div>
          </div>

          {/* Card 3: Secure & Scalable Architecture */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="h-16 flex items-center mb-4 text-[var(--accent)]">
                <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[11px] font-mono font-semibold mb-2">
                <Award className="w-3 h-3" />
                <span>OWASP &amp; TS Compliance</span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] font-display tracking-tight mb-2">
                Secure Engineering
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                100% strict TypeScript types, automated dependency vulnerability screening, sanitized inputs, and multi-tenant security architecture.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)]">
              Security Standard: OWASP Top 10 Aligned
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
