import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, ShieldCheck, CheckCircle2, Terminal } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-200/80">
      
      {/* Restrained corporate grid watermark */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#0a85b1 1px, transparent 1px), linear-gradient(90deg, #0a85b1 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Corporate Identification Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-semibold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-[#0a85b1]"></span>
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">{COMPANY.legalName}</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#0a85b1] font-medium">Est. 2025</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              The tech partner built for startups that need to{' '}
              <span className="text-[#0a85b1] underline decoration-sky-200 underline-offset-4">
                ship real code.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Tech22Blocks empowers startups and small businesses with high-quality software development, custom applications, and intelligent systems. A team that speaks plainly, builds fast, and actually shows up.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:ring-offset-2"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-900 rounded-lg transition-all duration-150 border border-slate-200"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                <span>Full-Stack Engineering</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                <span>Mobile iOS &amp; Android</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                <span>Custom Software &amp; AI</span>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Visual (Corporate, Technical, Clean) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/50 space-y-4">
              
              {/* Architecture Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Engineering Architecture
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono">Tech22 Core Runtime</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-mono font-semibold">
                  STATUS: OPERATIONAL
                </span>
              </div>

              {/* 22 Building Blocks Visual Matrix */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-slate-700">The 22 Foundation Blocks:</p>
                <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-[#0a85b1] font-bold">01.</span> Clarity
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-[#0a85b1] font-bold">02.</span> Speed
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-[#0a85b1] font-bold">03.</span> Design
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-[#0a85b1] font-bold">04.</span> Logic
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-[#0a85b1] font-bold">05.</span> Testing
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="text-[#0a85b1] font-bold">06.</span> Honesty
                  </div>
                </div>
              </div>

              {/* Active Pipeline Feed */}
              <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono space-y-2 text-slate-300">
                <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-800 pb-2">
                  <span>DEPLOYED WORKFLOW</span>
                  <span className="text-emerald-400">CI/CD PASS</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="text-sky-400">&gt; Web App: Next.js + Tailwind (Optimized)</div>
                  <div className="text-slate-400">&gt; Mobile: Cross-Platform Native Binary</div>
                  <div className="text-slate-400">&gt; Voice AI: In-house screening active</div>
                </div>
              </div>

              {/* Footnote */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span>Enterprise Quality</span>
                <span>Warangal &bull; Telangana</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
