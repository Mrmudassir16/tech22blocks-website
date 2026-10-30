import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, Smartphone, Sparkles, Shield, Cpu } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-slate-200/80">
      
      {/* Restrained corporate grid watermark */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#0a85b1 1px, transparent 1px), linear-gradient(90deg, #0a85b1 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Corporate Identification Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-semibold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-[#0a85b1]"></span>
              <span className="font-mono text-[11px] text-slate-600 uppercase tracking-wider">{COMPANY.legalName}</span>
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
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Tech22Blocks empowers startups and small businesses with high-quality software development, custom web applications, native mobile apps, and autonomous AI systems. A team that speaks plainly, builds fast, and actually shows up.
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
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                <span>Full-Stack Web Engineering</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                <span>Mobile iOS &amp; Android</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                <span>VoiSage AI Voice Systems</span>
              </div>
            </div>

          </div>

          {/* Right Column: Tasteful Corporate Visual (No terminal dumps or debug logs) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#0a85b1]"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Tech22Blocks Capability Stack
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  Verified Delivery
                </span>
              </div>

              {/* Three Pillar Cards */}
              <div className="space-y-2.5">
                
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Modern Web Platforms</p>
                      <p className="text-[11px] text-slate-500">Next.js &bull; TypeScript &bull; Tailwind</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-700">&lt; 0.8s LCP</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1]">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Native &amp; Cross-Platform Apps</p>
                      <p className="text-[11px] text-slate-500">iOS &bull; Android &bull; Offline Sync</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-700">60 FPS</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">VoiSage AI Voice Engine</p>
                      <p className="text-[11px] text-slate-500">Real-time Voice Screening &bull; LLM</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-sky-700">&lt; 600ms</span>
                </div>

              </div>

              {/* Bottom Credibility Strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>DPIIT #StartupIndia</span>
                <span>MSME Registered</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
