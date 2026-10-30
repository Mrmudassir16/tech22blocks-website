import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, X, ShieldAlert, Sparkles, Target, Zap } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function WhatWeDo() {
  const { story } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200" aria-labelledby="about-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
            <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
            <span>Why Tech22Blocks</span>
          </div>
          <h2 id="about-preview-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {story.title}.
          </h2>
          <p className="mt-4 text-xl text-slate-700 font-medium">
            {story.subtitle}
          </p>
        </div>

        {/* Narrative & Contrast Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-650 text-base sm:text-lg leading-relaxed">
            <p className="text-slate-800 font-medium leading-relaxed">
              {story.p1}
            </p>
            <p>
              {story.p2}
            </p>
            <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 text-slate-800 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a85b1]">Behind the Name</span>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                {story.p3}
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group"
              >
                <span>Read Full Company Story &amp; Founders Journey</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Contrast Comparison (The Tech22Blocks Standard) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 space-y-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs">
                The Tech Partner Difference
              </h3>

              {/* Bad vs Tech22Blocks Comparison points */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white border border-rose-150 shadow-sm space-y-1">
                  <div className="flex items-center text-xs font-bold text-rose-600">
                    <X className="w-4 h-4 mr-1.5" />
                    <span>Traditional Agencies</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    Excessive slide decks, exorbitant retainers, and prolonged project handoffs that delay shipping.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-rose-150 shadow-sm space-y-1">
                  <div className="flex items-center text-xs font-bold text-rose-600">
                    <X className="w-4 h-4 mr-1.5" />
                    <span>Unreliable Freelancers</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    Disappear after initial milestone payments, leaving unmaintainable code without documentation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white shadow-md space-y-2">
                  <div className="flex items-center text-xs font-bold text-sky-400">
                    <Check className="w-4 h-4 mr-1.5" />
                    <span>The Tech22Blocks Commitment</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-5">
                    Two generations of leadership. We speak plainly, build fast, provide transparent codebases, and actually show up.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

