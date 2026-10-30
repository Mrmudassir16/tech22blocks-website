'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Tag, FileText, ChevronRight, Download, Filter } from 'lucide-react';
import { COMPANY, NewsItem } from '@/data/company';
import FinalCTA from '@/components/FinalCTA';
import RecognitionStrip from '@/components/RecognitionStrip';

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
      <section className="bg-slate-900 text-white py-20 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
              <span>Corporate Communications &amp; Disclosures</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              News &amp; Events
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed">
              Official press releases, annual company letters, financial year milestones, and strategic announcements from RRK Software Technologies Private Limited (operating as Tech22Blocks).
            </p>
          </div>
        </div>
      </section>

      {/* Recognition strip */}
      <RecognitionStrip />

      {/* Corporate Newsroom Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between pb-8 mb-10 border-b border-slate-200 gap-4">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <Filter className="w-4 h-4" />
              <span>Filter By Category:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#0a85b1] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Chronological Disclosures Stream (BlackRock IR Purpose) */}
          <div className="space-y-12">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-slate-300 transition-colors"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono gap-2 border-b border-slate-200 pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center text-slate-600 font-bold">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                      {item.date}
                    </span>
                    <span>&bull;</span>
                    <span className="px-2.5 py-0.5 rounded bg-white text-slate-700 font-semibold border border-slate-200">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    RRK Software Technologies Pvt. Ltd. Official Release
                  </span>
                </div>

                {/* Release Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                  {item.title}
                </h2>

                {/* Summary */}
                <p className="text-base text-slate-700 font-medium leading-relaxed bg-white p-4 rounded-xl border border-slate-200/80">
                  {item.summary}
                </p>

                {/* Full Release Body */}
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed pt-2">
                  {item.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Footer Attribution */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-4">
                  <span>Issued by: Office of the Directors (Shivasai Adepu &amp; Rajkumar Adepu)</span>
                  <Link
                    href="/contact"
                    className="text-[#0a85b1] font-semibold hover:underline"
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
