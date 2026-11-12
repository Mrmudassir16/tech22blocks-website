import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function LatestNewsPreview() {
  const latestNews = COMPANY.newsAndEvents.slice(0, 3);
  const featuredArticle = COMPANY.blogs[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80" aria-labelledby="news-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
              <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
              <span>Corporate News &bull; Engineering Insights</span>
            </div>
            <h2 id="news-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              News, Releases &amp; Perspectives
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Official updates from RRK Software Technologies, architectural perspectives, and product release updates.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/news-events"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>View All News &amp; Events</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Editorial Layout: Featured Insight on Left (5 Cols), Corporate News Stream on Right (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Engineering Insight (Left) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-8 flex flex-col justify-between shadow-sm group hover:border-[#0a85b1]/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="px-2.5 py-1 rounded bg-sky-50 text-[#0a85b1] font-semibold border border-sky-100">
                  Featured Insight
                </span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors leading-snug">
                {featuredArticle.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {featuredArticle.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href={`/blogs#${featuredArticle.slug}`}
                className="inline-flex items-center text-xs font-bold text-[#0a85b1] group-hover:underline"
              >
                <span>Read Full Architectural Essay</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Corporate News Stream (Right) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 divide-y divide-slate-100 shadow-sm overflow-hidden">
            {latestNews.map((item) => (
              <div 
                key={item.id} 
                className="p-6 sm:p-7 hover:bg-slate-50/70 transition-colors group flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {item.date}
                    </span>
                    <span>&bull;</span>
                    <span className="font-semibold text-slate-700">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                <div className="flex-shrink-0 sm:pl-4">
                  <Link
                    href={`/news-events#${item.id}`}
                    className="inline-flex items-center text-xs font-semibold text-[#0a85b1] group-hover:underline"
                  >
                    <span>Read release</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
