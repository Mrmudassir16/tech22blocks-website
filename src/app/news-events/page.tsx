'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Filter } from 'lucide-react';
import { COMPANY } from '@/data/company';
import FinalCTA from '@/components/FinalCTA';
import { StarWatermark } from '@/components/StarEmblem';

export default function NewsEventsPage() {
  const { newsAndEvents } = COMPANY;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Annual Letter', 'Company Milestone', 'Product Update', 'Corporate Announcement'];

  const filteredItems = selectedCategory === 'All'
    ? newsAndEvents
    : newsAndEvents.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Header */}
      <section className="relative bg-[var(--surface)] text-[var(--text-primary)] pt-24 sm:pt-28 pb-14 sm:pb-20 lg:py-28 border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3 sm:mb-4 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
              <span>Corporate Communications &amp; Disclosures</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              News &amp; Events
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed">
              Official press releases, annual company letters, financial year milestones, and strategic announcements from RRK Software Technologies Private Limited (operating as Tech22Blocks).
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Newsroom Section */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-10 sm:mb-12 border-b border-[var(--border)] gap-3">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              <Filter className="w-4 h-4 text-[var(--accent)]" />
              <span>Filter By Category:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[var(--accent)] text-white shadow-sm'
                      : 'bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Chronological Disclosures Stream */}
          <div className="space-y-8 sm:space-y-10">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-5 sm:space-y-6 transition-all duration-300 shadow-md"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between text-xs text-[var(--text-muted)] font-mono gap-2 border-b border-[var(--border)] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center text-[var(--text-primary)] font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-[var(--accent)]" />
                      {item.date}
                    </span>
                    <span>&bull;</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold border border-[var(--accent)]/30">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-[11px] text-[var(--text-muted)]">
                    RRK Software Technologies Pvt. Ltd. Official Release
                  </span>
                </div>

                {/* Release Headline */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight leading-snug font-display">
                  {item.title}
                </h2>

                {/* Summary */}
                <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed bg-[var(--surface-elevated)] p-4 sm:p-5 rounded-2xl border border-[var(--border)]">
                  {item.summary}
                </div>

                {/* Full Release Body */}
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed font-normal pt-1">
                  {item.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Footer Attribution */}
                <div className="pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[var(--text-muted)] gap-3 font-mono">
                  <span>Issued by: Office of the Directors (Shivasai Adepu &amp; Rajkumar Adepu)</span>
                  <Link
                    href="/contact/"
                    className="text-[var(--accent)] font-semibold hover:underline uppercase tracking-wider"
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
    </div>
  );
}
