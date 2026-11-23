import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/data/company';
import FinalCTA from '@/components/FinalCTA';
import { StarWatermark } from '@/components/StarEmblem';

export const metadata: Metadata = {
  title: 'Blogs & Insights — Software & AI Architecture | Tech22Blocks',
  description: 'Read technical perspectives and strategic software insights from Tech22Blocks, covering AI business tools, product development, and custom software decisions.',
};

export default function BlogsPage() {
  const { blogs } = COMPANY;

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Header */}
      <section className="relative bg-[var(--surface)] text-[var(--text-primary)] py-14 sm:py-20 lg:py-28 border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3 sm:mb-4 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
              <span>Engineering Perspectives</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              Blogs &amp; Insights
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed">
              Pragmatic thoughts on technology architecture, AI software, and building durable digital products for modern business.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Stream */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {blogs.map((blog) => (
            <article 
              key={blog.slug} 
              id={blog.slug}
              className="border-b border-[var(--border)] pb-12 sm:pb-16 last:border-b-0 space-y-5 sm:space-y-6"
            >
              {/* Category & Read Time */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-[var(--text-muted)]">
                <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold border border-[var(--accent)]/30">
                  {blog.category}
                </span>
                <span>&bull;</span>
                <div className="flex items-center text-[var(--text-muted)]">
                  <Clock className="w-3.5 h-3.5 mr-1 text-[var(--accent)]" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display">
                {blog.title}
              </h2>

              {/* Summary lead */}
              <div className="text-sm sm:text-base lg:text-lg text-[var(--text-primary)] font-medium leading-relaxed bg-[var(--surface)] p-5 sm:p-6 rounded-2xl border border-[var(--border)] shadow-sm">
                {blog.summary}
              </div>

              {/* Body Content */}
              <div className="text-[var(--text-muted)] max-w-none space-y-4 leading-relaxed font-normal text-xs sm:text-sm lg:text-base">
                {blog.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Discuss CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-[var(--border)] gap-2">
                <span className="text-[11px] sm:text-xs font-mono text-[var(--text-muted)]">
                  Published by Tech22Blocks Technical Desk
                </span>
                <Link
                  href="/contact/"
                  className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline transition-colors"
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
    </div>
  );
}
