import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Box, Wrench, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function CompanyIntro() {
  return (
    <section className="py-18 lg:py-24 bg-white border-b border-slate-200/80" aria-labelledby="who-we-are-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
            <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
            <span>Who We Are &bull; Two Business Divisions</span>
          </div>
          <h2 id="who-we-are-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            A technology company built on dual capability: proprietary software and custom engineering.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Operating under <strong className="text-slate-900 font-semibold">{COMPANY.legalName}</strong>, Tech22Blocks unites strategic governance with agile software craftsmanship. We serve companies across all stages — from early-stage innovators to established enterprises.
          </p>
        </div>

        {/* Merged Two Business Divisions: Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Division 01: Proprietary Products */}
          <div className="rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/60 via-white to-white p-7 sm:p-8 flex flex-col justify-between shadow-2xs group hover:border-[#0a85b1]/50 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-sky-100/80 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                  <Box className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0a85b1] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                  Division 01 &bull; R&amp;D
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                  Proprietary Technology Products
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We invent and operate our own software tools. Our current featured initiative, <strong className="text-slate-900 font-semibold">VoiSage AI</strong>, is an autonomous voice assistant engineered to screen incoming calls, eliminate spam, and generate instant executive briefs.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-sky-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Real-time voice intelligence with sub-600ms latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Rigorous first-party dogfooding before any deployment</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link
                href="/products"
                className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] group/link transition-colors"
              >
                <span>Discover VoiSage AI &amp; Product R&amp;D</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Division 02: Custom Technology Solutions */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-2xs group hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                  Division 02 &bull; Client Solutions
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                  Custom Technology Solutions
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We engineer bespoke software architectures, full-stack web platforms, native iOS &amp; Android mobile apps, cloud DevOps pipelines, and AI integrations. We partner directly with leaders to build software that scales reliably.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Complete codebase ownership, shared Git repos, zero lock-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0" />
                  <span>Enterprise web, mobile, cloud infrastructure, and AI systems</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link
                href="/services"
                className="inline-flex items-center text-xs font-bold text-slate-800 hover:text-[#0a85b1] group/link transition-colors"
              >
                <span>Explore Full Service Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

        {/* Clean Link to About Us */}
        <div className="flex items-center justify-between text-xs text-slate-600 border-t border-slate-200/80 pt-5">
          <span>RRK Software Technologies Private Limited &bull; Warangal, Telangana</span>
          <Link
            href="/about"
            className="font-bold text-[#0a85b1] hover:underline flex items-center gap-1"
          >
            <span>Learn more about our heritage &amp; founders</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
