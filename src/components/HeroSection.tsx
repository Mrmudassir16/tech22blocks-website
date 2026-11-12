import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Cpu,
  Box,
  Wrench,
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-200/60">

      {/* Very subtle dot-grid watermark */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0a85b1 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-7">

            {/* Legal / Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a85b1]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-600">
                {COMPANY.legalName}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-[11px] font-bold text-[#0a85b1]">Est. 2025</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-950 tracking-tight leading-[1.1]">
                Engineering software
                <span className="block text-[#0a85b1]">that ships.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 font-normal leading-relaxed max-w-xl">
                Built for startups. Ready for enterprise.
              </p>
            </div>

            {/* Supporting statement */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Tech22Blocks empowers startups and growing businesses with high-quality web platforms,
              native mobile apps, and AI-powered automation — delivered by founders who speak plainly,
              build fast, and actually show up.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0369a1] rounded-full shadow-sm transition-colors"
              >
                Talk to Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-full border border-slate-200 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0a85b1]" />
                DPIIT StartupIndia Certified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0a85b1]" />
                MSME Registered
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0a85b1]" />
                Founder-Led Engineering
              </span>
            </div>
          </div>

          {/* Right: Business Divisions Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">

              {/* Card header */}
              <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0a85b1]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Tech22Blocks
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Est. 2025
                </span>
              </div>

              <div className="p-5 space-y-3">
                {/* Division 1: Proprietary Products */}
                <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-4 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0a85b1] flex items-center justify-center">
                      <Box className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0a85b1]">Division 1</p>
                      <p className="text-sm font-bold text-slate-900">Proprietary Products</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We build our own AI-powered technology products. Currently developing{' '}
                    <span className="font-semibold text-[#0a85b1]">VoiSage AI</span> — autonomous voice intelligence for businesses.
                  </p>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-sky-500" />
                    <span className="text-[11px] font-mono text-sky-600">AI · Voice · Automation</span>
                  </div>
                </div>

                {/* Division 2: Enterprise Solutions */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Division 2</p>
                      <p className="text-sm font-bold text-slate-900">Enterprise Solutions</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Custom web platforms, mobile apps, UI/UX design, and intelligent automation — built for your business.
                  </p>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-slate-500" />
                    <Smartphone className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-[11px] font-mono text-slate-500">Web · Mobile · Custom Software</span>
                  </div>
                </div>

                {/* Bottom credibility row */}
                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-100">
                  <span>DPIIT #StartupIndia</span>
                  <span>MSME Registered</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
