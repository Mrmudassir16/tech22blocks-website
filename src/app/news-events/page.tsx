'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Tag, FileText, ChevronRight, Download, Filter } from 'lucide-react';
import { COMPANY, NewsItem } from '@/data/company';
import FinalCTA from '@/components/FinalCTA';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export default function NewsEventsPage() {
  const { newsAndEvents } = COMPANY;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Annual Letter', 'Company Milestone', 'Product Update', 'Corporate Announcement'];

  const filteredItems = selectedCategory === 'All'
    ? newsAndEvents
    : newsAndEvents.filter(item => item.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <section className="relative bg-[#030712] text-white py-24 lg:py-32 border-b border-white/[0.08] overflow-hidden">
        <StarWatermark size={650} position="top-right" variant="white" opacity={0.02} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
              <StarEmblem size={13} variant="white" opacity={0.9} />
              <span>Corporate Communications &amp; Disclosures</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
              News &amp; Events
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-normal leading-relaxed">
              Official press releases, annual company letters, financial year milestones, and strategic announcements from RRK Software Technologies Private Limited (operating as Tech22Blocks).
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Newsroom Section */}
      <section className="py-24 lg:py-32 bg-[#060b18] text-white border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between pb-8 mb-12 border-b border-white/[0.08] gap-4">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              <Filter className="w-4 h-4 text-sky-400" />
              <span>Filter By Category:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-white/[0.12] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] border border-white/20'
                      : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Chronological Disclosures Stream */}
          <div className="space-y-12">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-500/40 rounded-3xl p-8 sm:p-10 space-y-6 transition-all duration-300 shadow-xl backdrop-blur-xl"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono gap-2 border-b border-white/[0.06] pb-5">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center text-slate-300 font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
                      {item.date}
                    </span>
                    <span>&bull;</span>
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-semibold border border-sky-400/20">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    RRK Software Technologies Pvt. Ltd. Official Release
                  </span>
                </div>

                {/* Release Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-[-0.02em] leading-snug">
                  {item.title}
                </h2>

                {/* Summary */}
                <div className="text-base text-slate-200 font-normal leading-relaxed bg-white/[0.02] p-5 rounded-2xl border border-white/[0.04]">
                  {item.summary}
                </div>

                {/* Full Release Body */}
                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-2">
                  {item.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Footer Attribution */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4 font-mono">
                  <span>Issued by: Office of the Directors (Shivasai Adepu &amp; Rajkumar Adepu)</span>
                  <Link
                    href="/contact/"
                    className="text-sky-400 font-semibold hover:text-sky-300 transition-colors uppercase tracking-wider"
                  >
                    Direct Press or Partner Inquiries &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}
