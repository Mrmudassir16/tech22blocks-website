import React from 'react';
import Link from 'next/link';
import { ArrowRight, Box, Wrench, ShieldCheck, Award, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function CompanyIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" aria-labelledby="company-intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
            <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
            <span>Who We Are &amp; How We Operate</span>
          </div>
          <h2 id="company-intro-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            A technology company built on dual capability: proprietary innovation and custom engineering.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed font-normal">
            Operating under <strong className="text-slate-900 font-semibold">{COMPANY.legalName}</strong>, Tech22Blocks was established in 2025 to bridge the gap between high-caliber technical craftsmanship and genuine client commitment. We serve organizations across all growth stages — from emerging innovators to established enterprises.
          </p>
        </div>

        {/* Dual Business Divisions: Asymmetrical Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Division A: Proprietary Products */}
          <div className="rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/70 via-white to-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-sky-100/80 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                  <Box className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a85b1] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  Division 01
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                  Proprietary Products
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  We don&apos;t just build for clients; we invent and operate our own software systems. Our flagship internal initiative, <strong className="text-slate-900 font-semibold">VoiSage AI</strong>, is an autonomous voice assistant engineered to screen incoming calls, eliminate spam, and generate instant executive briefs.
                </p>
              </div>

              {/* Distinctive Features */}
              <div className="space-y-2 pt-2 border-t border-sky-100/80 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Real-time voice intelligence &amp; sub-600ms latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>First-party dogfooding before client deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Autonomous executive workflow automation</span>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <Link
                href="/products"
                className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group/link transition-colors"
              >
                <span>Discover Our Products &amp; R&amp;D</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Division B: Custom Technology Solutions */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Division 02
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                  Custom Technology Solutions
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  We engineer bespoke software architectures, responsive web platforms, mobile ecosystems, intelligent automation pipelines, and cloud infrastructures. We partner directly with executives to replace disjointed workflows with resilient systems.
                </p>
              </div>

              {/* Key Competencies */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Full-stack web, mobile (iOS &amp; Android), and cloud systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Generative AI integrations &amp; domain-specific automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Strict code transparency, zero vendor lock-in</span>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group/link transition-colors"
              >
                <span>Explore Full Service Portfolio</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

        {/* Corporate Trust Strip & Dedicated About CTA */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-950">
              Two Generations of Leadership. One Clear Standard.
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Led by CEO Shivasai Adepu and Chairman Rajkumar Adepu, we combine corporate governance with high-velocity modern engineering. Read our full heritage, values, and 22 building blocks on our About page.
            </p>
          </div>

          <Link
            href="/about"
            className="flex-shrink-0 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 shadow-2xs transition-all"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#0a85b1]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
