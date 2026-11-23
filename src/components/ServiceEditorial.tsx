import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { StarWatermark } from '@/components/StarEmblem';
import { BespokeServiceVisual } from '@/components/design-system/BespokeServiceShowcase';

export default function ServiceEditorial() {
  const { services } = COMPANY;

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200" aria-labelledby="services-detail-heading">
      <StarWatermark size={680} position="top-right" variant="blue" opacity={0.02} rotate={-12} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
            <span>Comprehensive Service Architecture</span>
          </div>
          <h2 id="services-detail-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display">
            End-to-End Technology Capabilities
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
            From modern website platforms and native mobile applications to tailored custom software, intuitive UI/UX design, strategic IT advisory, and emerging Web3 technologies &mdash; we engineer practical solutions that solve real business bottlenecks.
          </p>
        </div>

        {/* Alternating Service Showcase */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                
                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-5 sm:space-y-6 ${isReversed ? 'lg:col-start-7' : ''}`}>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      <span className="font-mono text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/30">
                        Capability {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                        {service.category}
                      </span>
                      {service.badge && (
                        <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-500 border border-amber-400/30">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Concrete Value Delivered */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm space-y-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
                      // Business Problem Addressed &amp; Value:
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                      {service.outcome}
                    </p>
                  </div>

                  {/* Core Deliverables List */}
                  <div className="space-y-2.5 pt-1">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                      Key Deliverables &amp; Artifacts
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--text-muted)]">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stacks */}
                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Relevant Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                    <Link
                      href={`/services/${service.id}/`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-md transition-all group"
                    >
                      <span>Explore Dedicated Service Page</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact/"
                      className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline group transition-colors"
                    >
                      <span>Discuss Project</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Purposeful Visual Composition */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <BespokeServiceVisual id={service.id} />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
