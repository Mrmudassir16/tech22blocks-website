import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function LatestNewsPreview() {
  const latestItems = COMPANY.newsAndEvents.slice(0, 3);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80" aria-labelledby="latest-news-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
              <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
              <span>Announcements &amp; Milestones</span>
            </div>
            <h2 id="latest-news-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Latest News &amp; Updates
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Official corporate communications, annual letters, and technology updates from RRK Software Technologies.
            </p>
          </div>

          <div>
            <Link
              href="/news-events"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>View All News</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 News items in clean table/stream */}
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200/90 bg-slate-50/50 overflow-hidden shadow-2xs">
          {latestItems.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 hover:bg-white transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
            >
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-500 md:w-52 flex-shrink-0">
                <div className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  <span>{item.date}</span>
                </div>
                <span>&bull;</span>
                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">
                  {item.category}
                </span>
              </div>

              <div className="flex-1 space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="md:pl-4 flex-shrink-0">
                <Link
                  href={`/news-events#${item.id}`}
                  className="inline-flex items-center text-xs font-semibold text-[#0a85b1] group-hover:underline"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
