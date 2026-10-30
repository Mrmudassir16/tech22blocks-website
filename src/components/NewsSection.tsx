import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag, FileText } from 'lucide-react';
import { COMPANY, NewsItem } from '@/data/company';

export default function NewsSection({ isPreview = false }: { isPreview?: boolean }) {
  const items = isPreview ? COMPANY.newsAndEvents.slice(0, 3) : COMPANY.newsAndEvents;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200" aria-labelledby="news-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
              <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
              <span>Corporate Disclosures &amp; Updates</span>
            </div>
            <h2 id="news-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              News &amp; Events
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Annual letters, executive statements, technology milestones, and statutory updates from RRK Software Technologies Private Limited.
            </p>
          </div>

          {isPreview && (
            <div>
              <Link
                href="/news-events"
                className="inline-flex items-center text-sm font-semibold text-[#0a85b1] hover:text-[#0284c7] group"
              >
                <span>View All Announcements</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>

        {/* Corporate Press Release / Newsroom Table List (BlackRock IR Purpose) */}
        <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-200 shadow-sm overflow-hidden">
          {items.map((item) => (
            <article 
              key={item.id} 
              id={item.id}
              className="p-6 sm:p-8 hover:bg-slate-50/70 transition-colors group"
            >
              <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-4">
                
                {/* Meta: Date & Category */}
                <div className="flex items-center space-x-4 text-xs text-slate-500 font-mono flex-shrink-0 lg:w-56">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                  <span className="text-slate-300">&bull;</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Content: Title & Summary */}
                <div className="lg:flex-1 space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {item.summary}
                  </p>
                  
                  {!isPreview && (
                    <div className="pt-3 space-y-2 text-sm text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200/70">
                      {item.content.map((p, idx) => (
                        <p key={idx} className="leading-relaxed">{p}</p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Read More Link */}
                {isPreview && (
                  <div className="lg:pl-6 flex items-center lg:self-center">
                    <Link
                      href={`/news-events#${item.id}`}
                      className="inline-flex items-center text-xs font-semibold text-[#0a85b1] group-hover:underline"
                    >
                      <span>Read Release</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

