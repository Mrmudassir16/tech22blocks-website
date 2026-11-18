import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/data/company';
import FinalCTA from '@/components/FinalCTA';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'Blogs & Insights — Software & AI Architecture | Tech22Blocks',
  description: 'Read technical perspectives and strategic software insights from Tech22Blocks, covering AI business tools, product development, and custom software decisions.',
};

export default function BlogsPage() {
  const { blogs } = COMPANY;

  return (
    <>
      {/* Header */}
      <section className="relative bg-[#030712] text-white py-24 lg:py-32 border-b border-white/[0.08] overflow-hidden">
        <StarWatermark size={650} position="top-right" variant="white" opacity={0.02} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
              <span>Engineering Perspectives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
              Blogs &amp; Insights
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-normal leading-relaxed">
              Pragmatic thoughts on technology architecture, AI software, and building durable digital products for modern business.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Stream */}
      <section className="py-24 lg:py-32 bg-[#060b18] text-white border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {blogs.map((blog) => (
            <article 
              key={blog.slug} 
              id={blog.slug}
              className="border-b border-white/[0.08] pb-16 last:border-b-0 space-y-6"
            >
              {/* Category & Read Time */}
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-semibold border border-sky-400/20">
                  {blog.category}
                </span>
                <span>&bull;</span>
                <div className="flex items-center text-slate-400">
                  <Clock className="w-3.5 h-3.5 mr-1 text-sky-400" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-[-0.02em] leading-tight">
                {blog.title}
              </h2>

              {/* Summary lead */}
              <div className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed bg-[#0b1120]/80 p-6 rounded-2xl border border-white/[0.08] backdrop-blur-xl shadow-lg">
                {blog.summary}
              </div>

              {/* Body Content */}
              <div className="text-slate-300 max-w-none space-y-4 leading-relaxed font-normal text-base sm:text-lg">
                {blog.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Discuss CTA */}
              <div className="pt-4 flex items-center justify-between border-t border-white/[0.06]">
                <span className="text-xs font-mono text-slate-500">
                  Published by Tech22Blocks Technical Desk
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Discuss this topic with our team</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
