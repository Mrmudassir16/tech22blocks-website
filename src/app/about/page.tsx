import React from 'react';
import type { Metadata } from 'next';
import FoundersSection from '@/components/FoundersSection';
import MissionGoalsSection from '@/components/MissionGoalsSection';
import RecognitionStrip from '@/components/RecognitionStrip';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us | Tech22Blocks',
  description: COMPANY.mission.statement,
};

export default function AboutPage() {
  const { story } = COMPANY;

  return (
    <>
      {/* Premium Page Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle grid accent */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="block w-5 h-0.5 bg-[#0a85b1]" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#38bdf8]">
                About Tech22Blocks
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              About Tech22Blocks
            </h1>

            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Operating under RRK Software Technologies Private Limited, Tech22Blocks combines
              generational perspective with agile software craftsmanship — building technology
              that is accessible, honest, and human.
            </p>
          </div>
        </div>
      </section>

      {/* Official Recognition */}
      <RecognitionStrip />

      {/* Our Story: Editorial Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="border-b border-slate-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#0a85b1]">
              Origin &amp; Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
              {story.title}
            </h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug">
              {story.p1}
            </p>
            <p className="text-lg">
              {story.p2}
            </p>

            <div className="my-10 p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                What does &quot;Tech22Blocks&quot; mean?
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {story.p3}
              </p>
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-700">
                <div className="p-2.5 bg-white rounded border border-slate-200 text-center font-semibold">1. Clarity</div>
                <div className="p-2.5 bg-white rounded border border-slate-200 text-center font-semibold">2. Speed</div>
                <div className="p-2.5 bg-white rounded border border-slate-200 text-center font-semibold">3. Design</div>
                <div className="p-2.5 bg-white rounded border border-slate-200 text-center font-semibold">4. Logic</div>
                <div className="p-2.5 bg-white rounded border border-slate-200 text-center font-semibold">5. Testing</div>
                <div className="p-2.5 bg-white rounded border border-slate-200 text-center font-semibold">6. Communication</div>
                <div className="p-2.5 bg-white rounded border border-slate-200 text-center font-semibold">7. Honesty</div>
                <div className="p-2.5 bg-white rounded border border-slate-200 text-center font-semibold text-[#0a85b1]">+ 15 More</div>
              </div>
            </div>

            <p className="text-base text-slate-600">
              Today, from our registered headquarters in Warangal/Hanamkonda, we work directly with
              emerging founders, SMEs, and commercial partners to design, engineer, and deploy digital
              systems that deliver real-world outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* The Founders Section */}
      <FoundersSection />

      {/* Mission & 4 Official Goals */}
      <MissionGoalsSection />
    </>
  );
}
