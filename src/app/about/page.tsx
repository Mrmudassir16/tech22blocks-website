import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Box, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import FoundersSection from '@/components/FoundersSection';
import MissionGoalsSection from '@/components/MissionGoalsSection';
import FinalCTA from '@/components/FinalCTA';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us — Heritage, Mission & Leadership | Tech22Blocks',
  description: 'Operating under RRK Software Technologies Private Limited, Tech22Blocks combines generational business perspective with modern software craftsmanship.',
};

export default function AboutPage() {
  const { story } = COMPANY;

  return (
    <>
      {/* Premium Page Hero */}
      <section className="bg-slate-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                About Tech22Blocks &bull; Est. 2025
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Technology built on trust, persistence, and practical craft.
            </h1>

            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Operating under {COMPANY.legalName}, Tech22Blocks unites strategic business governance with modern software craftsmanship &mdash; engineering proprietary products and custom digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Two Business Areas: Editorial Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="border-b border-slate-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#0a85b1]">
              Origin &amp; Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
              {story.title}
            </h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
            <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug">
              {story.p1}
            </p>
            <p className="text-lg text-slate-600">
              {story.p2}
            </p>
            <p className="text-base text-slate-600">
              {story.p3}
            </p>
          </div>

          {/* Two Distinct Business Areas Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Area 1: Proprietary Products */}
            <div className="p-8 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-4">
              <div className="w-11 h-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                01. Proprietary Products
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We develop and operate our own software products, confronting real engineering challenges firsthand. Our featured product, <strong className="text-slate-900 font-semibold">VoiSage AI</strong>, is an autonomous voice assistant designed to screen unknown incoming calls and protect executive attention.
              </p>
              <div className="pt-2">
                <Link
                  href="/products/"
                  className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:underline"
                >
                  <span>Explore Proprietary Products</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Area 2: Custom Technology Solutions */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                02. Custom Technology Solutions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We design and engineer bespoke software systems, high-performance web platforms, cross-platform mobile apps, intuitive UI/UX design, and strategic IT consulting for businesses seeking tangible, reliable software solutions.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/"
                  className="inline-flex items-center text-xs font-bold text-slate-800 hover:text-[#0a85b1] transition-colors"
                >
                  <span>Explore Our 6 Official Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <p className="font-semibold text-slate-900">Corporate Entity Details:</p>
            <p>RRK Software Technologies Private Limited &bull; Registered Office: 5-11-840, Hanamkonda, Warangal, 506009, Telangana, India.</p>
          </div>

        </div>
      </section>

      {/* The Founders Section (Detailed Father & Son Story) */}
      <FoundersSection />

      {/* Mission & 4 Core Goals */}
      <MissionGoalsSection />

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}
