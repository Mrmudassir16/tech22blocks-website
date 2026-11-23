import React from 'react';
import { ArrowRight, ExternalLink, Code2, Smartphone, LayoutDashboard } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function PortfolioPreview() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] transition-colors duration-200" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
              <span>Client Case Studies &amp; Implementations</span>
            </div>
            <h2 id="portfolio-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
              Featured Work &amp; Case Studies
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[var(--text-muted)] font-normal">
              Explore how we engineer dependable technology solutions for startup founders and scaling businesses.
            </p>
          </div>

          <div>
            <a
              href={COMPANY.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-xl transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <span>View All Live Work</span>
              <ExternalLink className="w-4 h-4 ml-2 text-[var(--accent)]" />
            </a>
          </div>
        </div>

        {/* Portfolio Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1 */}
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/50 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-md group">
            <div className="space-y-4 sm:space-y-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-[var(--accent)] uppercase tracking-wider">Web Engineering</span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors font-display">
                Scalable Corporate Web Platforms
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                Full-stack custom websites built with sub-second page performance, robust SEO meta architectures, and conversion-optimized user flows.
              </p>
            </div>
            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[var(--border)]">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline transition-colors"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/50 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-md group">
            <div className="space-y-4 sm:space-y-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-[var(--accent)] uppercase tracking-wider">Mobile Systems</span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors font-display">
                Cross-Platform Mobile Applications
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                High-performance iOS and Android applications with offline synchronization, real-time socket events, and streamlined native interactions.
              </p>
            </div>
            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[var(--border)]">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline transition-colors"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/50 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-md group">
            <div className="space-y-4 sm:space-y-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-[var(--accent)] uppercase tracking-wider">Custom Software</span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors font-display">
                Internal Automation &amp; Portals
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                Custom software systems, operations dashboards, and automated business workflows replacing fragmented spreadsheets and manual bottlenecks.
              </p>
            </div>
            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[var(--border)]">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline transition-colors"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Central Portfolio Redirection Banner */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">
              Official Case Studies Repository
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5 max-w-xl font-normal">
              Review full client case studies, live architectural implementations, and technical breakdown on our primary case-study portal.
            </p>
          </div>
          <a
            href={COMPANY.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all whitespace-nowrap shadow-md hover:-translate-y-0.5 flex-shrink-0"
          >
            <span>Visit Live Case Studies</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
}
