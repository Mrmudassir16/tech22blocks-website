import React from 'react';
import { ArrowRight, ExternalLink, Code2, Smartphone, LayoutDashboard } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function PortfolioPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#060b18] text-white border-b border-white/[0.08]" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
              <span>Client Case Studies &amp; Implementations</span>
            </div>
            <h2 id="portfolio-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] mt-2">
              Featured Work &amp; Case Studies
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
              Explore how we engineer dependable technology solutions for startup founders and scaling businesses.
            </p>
          </div>

          <div>
            <a
              href={COMPANY.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] rounded-xl backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <span>View Our Work</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Portfolio Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#0b1120]/80 rounded-2xl border border-white/[0.08] hover:border-sky-500/40 p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-xl shadow-lg hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8] group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">Web Engineering</span>
              <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#38bdf8] transition-colors">
                Scalable Corporate Web Platforms
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Full-stack custom websites built with sub-second page performance, robust SEO meta architectures, and conversion-optimized user flows.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0b1120]/80 rounded-2xl border border-white/[0.08] hover:border-sky-500/40 p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-xl shadow-lg hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8] group-hover:scale-105 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">Mobile Systems</span>
              <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#38bdf8] transition-colors">
                Cross-Platform Mobile Applications
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                High-performance iOS and Android applications with offline synchronization, real-time socket events, and streamlined native interactions.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0b1120]/80 rounded-2xl border border-white/[0.08] hover:border-sky-500/40 p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-xl shadow-lg hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8] group-hover:scale-105 transition-transform">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">Custom Software</span>
              <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#38bdf8] transition-colors">
                Internal Automation &amp; Portals
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Custom software systems, operations dashboards, and automated business workflows replacing fragmented spreadsheets and manual bottlenecks.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Central Portfolio Redirection Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#0b1120]/95 border border-white/[0.1] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl font-bold text-white">
              Official Case Studies Repository
            </h4>
            <p className="text-sm text-slate-400 mt-2 max-w-xl font-normal">
              Review full client case studies, live architectural implementations, and technical breakdown on our primary case-study portal.
            </p>
          </div>
          <a
            href={COMPANY.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-[#0a85b1] hover:from-sky-400 hover:to-sky-500 transition-all whitespace-nowrap shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:-translate-y-0.5"
          >
            <span>Visit tech22blocks.in/case-studies</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
}
