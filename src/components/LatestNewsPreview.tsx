import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function LatestNewsPreview() {
  const latestItems = COMPANY.newsAndEvents.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/60" aria-labelledby="latest-news-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="label-eyebrow mb-3">Announcements & Milestones</div>
            <h2 id="latest-news-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Latest News & Updates
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Official corporate communications and technology updates from RRK Software Technologies.
            </p>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/news-events"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0a85b1] hover:text-[#0369a1] group transition-colors"
            >
              View All News
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* News Stream — stacked list */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          {latestItems.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-6 p-6 sm:p-7 hover:bg-slate-50 transition-colors group ${
                idx < latestItems.length - 1 ? 'border-b border-slate-200' : ''
              }`}
            >
              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 md:w-28 flex-shrink-0 pt-0.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1.5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0a85b1] border border-sky-100">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              {/* CTA */}
              <div className="md:pl-4 flex-shrink-0">
                <Link
                  href={`/news-events#${item.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0a85b1] hover:text-[#0369a1] transition-colors"
                >
                  Read Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link
            href="/news-events"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0a85b1] border border-[#0a85b1]/30 hover:bg-sky-50 rounded-full transition-colors"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
