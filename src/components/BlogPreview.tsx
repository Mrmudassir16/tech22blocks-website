import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function BlogPreview({ isPreview = false }: { isPreview?: boolean }) {
  const { blogs } = COMPANY;
  const displayBlogs = isPreview ? blogs.slice(0, 3) : blogs;

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200" aria-labelledby="blogs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
              <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
              <span>Engineering &amp; Business Insights</span>
            </div>
            <h2 id="blogs-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Blogs &amp; Perspectives
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Pragmatic articles on software architecture, AI utility, and digital product strategy for startups.
            </p>
          </div>

          {isPreview && (
            <div>
              <Link
                href="/blogs"
                className="inline-flex items-center text-sm font-semibold text-[#0a85b1] hover:text-[#0284c7] group"
              >
                <span>Read All Insights</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="flex flex-col justify-between bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="px-2.5 py-1 rounded bg-white text-slate-700 font-semibold border border-slate-200">
                    {blog.category}
                  </span>
                  <div className="flex items-center text-slate-500">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                  <Link href={`/blogs#${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {blog.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <Link
                  href={`/blogs#${blog.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-[#0a85b1] group-hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

