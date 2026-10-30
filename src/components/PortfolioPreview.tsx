import React from 'react';
import { ArrowRight, ExternalLink, Code2, Smartphone, LayoutDashboard } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function PortfolioPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
              <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
              <span>Client Case Studies &amp; Implementations</span>
            </div>
            <h2 id="portfolio-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Featured Work &amp; Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Explore how we engineer dependable technology solutions for startup founders and scaling businesses.
            </p>
          </div>

          <div>
            <a
              href={COMPANY.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm transition-all"
            >
              <span>View Our Work</span>
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Portfolio Teasers (Real work preview cards linking to official case studies) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-semibold text-[#0a85b1] uppercase tracking-wider">Web Engineering</span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                Scalable Corporate Web Platforms
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Full-stack custom websites built with sub-second page performance, robust SEO meta architectures, and conversion-optimized user flows.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200/80">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-[#0a85b1] hover:underline"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-semibold text-[#0a85b1] uppercase tracking-wider">Mobile Systems</span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                Cross-Platform Mobile Applications
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                High-performance iOS and Android applications with offline synchronization, real-time socket events, and streamlined native interactions.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200/80">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-[#0a85b1] hover:underline"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-semibold text-[#0a85b1] uppercase tracking-wider">Custom Software</span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                Internal Automation &amp; Portals
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom software systems, operations dashboards, and automated business workflows replacing fragmented spreadsheets and manual bottlenecks.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200/80">
              <a
                href={COMPANY.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-[#0a85b1] hover:underline"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

        </div>

        {/* Central Portfolio Redirection Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              Official Case Studies Repository
            </h4>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Review full client case studies, live architectural implementations, and technical breakdown on our primary case-study portal.
            </p>
          </div>
          <a
            href={COMPANY.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] transition-colors whitespace-nowrap shadow"
          >
            <span>Visit tech22blocks.in/case-studies</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
}

