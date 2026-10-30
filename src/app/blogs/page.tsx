import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/data/company';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Blogs & Insights — Software & AI Architecture',
  description: 'Read technical perspectives and strategic software insights from Tech22Blocks, covering AI business tools, product development, and custom software decisions.',
};

export default function BlogsPage() {
  const { blogs } = COMPANY;

  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
              <span>Engineering Perspectives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Blogs &amp; Insights
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed">
              Pragmatic thoughts on technology architecture, AI software, and building durable digital products for modern business.
            </p>
            <p className="mt-3 text-xs text-slate-400 font-mono">
              [Note: Sample technical articles authored by Tech22Blocks engineering desk]
            </p>
          </div>
        </div>
      </section>

      {/* Articles Stream */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {blogs.map((blog, index) => (
            <article 
              key={blog.slug} 
              id={blog.slug}
              className="border-b border-slate-200 pb-16 last:border-b-0 space-y-6"
            >
              {/* Category & Read Time */}
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
                <span className="px-3 py-1 rounded bg-sky-50 text-[#0a85b1] font-semibold border border-sky-100">
                  {blog.category}
                </span>
                <span>&bull;</span>
                <div className="flex items-center text-slate-600">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {blog.title}
              </h2>

              {/* Summary lead */}
              <p className="text-lg text-slate-700 font-medium leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                {blog.summary}
              </p>

              {/* Body Content */}
              <div className="prose prose-lg prose-slate text-slate-600 max-w-none space-y-4 leading-relaxed">
                {blog.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Discuss CTA */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Published by Tech22Blocks Technical Desk
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-semibold text-[#0a85b1] hover:underline"
                >
                  <span>Discuss this topic with our team</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </>
  );
}

