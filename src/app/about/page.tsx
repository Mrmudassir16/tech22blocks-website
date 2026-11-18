import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Box, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import FoundersSection from '@/components/FoundersSection';
import MissionGoalsSection from '@/components/MissionGoalsSection';
import FinalCTA from '@/components/FinalCTA';
import { COMPANY } from '@/data/company';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'About Us — Heritage, Mission & Leadership | Tech22Blocks',
  description: 'Operating under RRK Software Technologies Private Limited, Tech22Blocks combines generational business perspective with modern software craftsmanship.',
};

export default function AboutPage() {
  const { story } = COMPANY;

  return (
    <>
      {/* Premium Page Hero */}
      <section className="bg-[#030712] text-white py-24 lg:py-32 relative overflow-hidden border-b border-white/[0.08]">
        <StarWatermark size={650} position="top-right" variant="white" opacity={0.02} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-mono text-sky-300">
              <StarEmblem size={13} variant="white" opacity={0.9} />
              <span>About Tech22Blocks &bull; Est. 2025</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
              Technology built on trust, persistence, and practical craft.
            </h1>

            <p className="mt-6 text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Operating under {COMPANY.legalName}, Tech22Blocks unites strategic business governance with modern software craftsmanship &mdash; engineering proprietary products and custom digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Two Business Areas: Editorial Section */}
      <section className="relative py-24 lg:py-32 bg-[#060b18] text-white border-b border-white/[0.08] overflow-hidden">
        <StarWatermark size={600} position="top-right" variant="white" opacity={0.015} rotate={-10} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">

          <div className="border-b border-white/[0.08] pb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              Origin &amp; Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] mt-3">
              {story.title}
            </h2>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed font-normal text-base sm:text-lg">
            <p className="text-xl sm:text-2xl font-medium text-white leading-snug">
              {story.p1}
            </p>
            <p className="text-slate-400">
              {story.p2}
            </p>
            <p className="text-slate-400">
              {story.p3}
            </p>
          </div>

          {/* Two Distinct Business Areas Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Area 1: Proprietary Products */}
            <div className="p-8 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-500/40 backdrop-blur-xl space-y-5 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8]">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                01. Proprietary Products
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                We develop and operate our own software products, confronting real engineering challenges firsthand. Our featured product, <strong className="text-white font-semibold">VoiSage AI</strong>, is an autonomous voice assistant designed to screen unknown incoming calls and protect executive attention.
              </p>
              <div className="pt-2">
                <Link
                  href="/products/"
                  className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Explore Proprietary Products</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Area 2: Custom Technology Solutions */}
            <div className="p-8 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-500/40 backdrop-blur-xl space-y-5 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 flex items-center justify-center text-[#38bdf8]">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                02. Custom Technology Solutions
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                We design and engineer bespoke software systems, high-performance web platforms, cross-platform mobile apps, intuitive UI/UX design, and strategic IT consulting for businesses seeking tangible, reliable software solutions.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/"
                  className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Explore Our 6 Official Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-400 space-y-1 font-mono">
            <p className="font-semibold text-slate-200">Corporate Entity Details:</p>
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
