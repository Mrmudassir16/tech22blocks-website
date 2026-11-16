'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, ExternalLink } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  badge: string;
  link: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-01',
    category: 'Web Systems',
    title: 'High-Throughput E-Commerce & Operations Portal',
    description: 'An edge-rendered Next.js platform engineered for sub-second page loads, automated inventory synchronization, and zero cumulative layout shift.',
    image: '/images/enterprise-platform-mockup.jpg',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    badge: 'Illustrative Architecture',
    link: '/services/#website-development',
  },
  {
    id: 'cs-02',
    category: 'Mobile Engineering',
    title: 'Real-Time Field Logistics & Order Dispatch App',
    description: 'Native iOS and Android application with fluid 60 FPS animations, local SQLite offline caching, and instant WebSocket dispatch synchronization.',
    image: '/images/mobile-apps-showcase.jpg',
    tech: ['Flutter', 'Swift', 'Kotlin', 'SQLite'],
    badge: 'Illustrative Architecture',
    link: '/services/#mobile-applications',
  },
  {
    id: 'cs-03',
    category: 'Proprietary AI Product',
    title: 'Autonomous Executive Call Screening & Briefing Engine',
    description: 'Real-time conversational audio pipeline filtering spam, conducting contextual triage, and delivering structured executive text summaries.',
    image: '/images/ai-cloud-automation.jpg',
    tech: ['Python', 'WebRTC', 'Real-Time Audio', 'FastAPI'],
    badge: 'Illustrative Product Showcase',
    link: '/products/',
  },
  {
    id: 'cs-04',
    category: 'Custom Software',
    title: 'Enterprise ACID Transaction & Workflow Engine',
    description: 'Bespoke modular backend decoupling legacy spreadsheets into an audited, role-based microservices architecture.',
    image: '/images/hero-corporate-engineering.jpg',
    tech: ['Node.js', 'Go', 'Docker', 'Redis'],
    badge: 'Illustrative Architecture',
    link: '/services/#custom-software',
  },
];

export default function CaseStudiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section 
      className="relative py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden" 
      aria-labelledby="case-studies-heading"
    >
      <StarWatermark size={580} position="top-right" variant="blue" opacity={0.02} rotate={15} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Left/Right Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            {/* Clean Section Tag without Star Bullet */}
            <div className="inline-block mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a85b1] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Case Studies
              </span>
            </div>

            <h2 id="case-studies-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Architectural Demonstrations &amp; Case Studies
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Illustrative project demonstrations showcasing how Tech22Blocks engineers web platforms, mobile systems, custom software, and voice intelligence.
            </p>
          </div>

          {/* Interactive Navigation Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-slate-300 text-slate-800 hover:border-[#0a85b1] hover:bg-[#0a85b1] hover:text-white shadow-xs'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50'
              }`}
              aria-label="Scroll case studies left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-slate-300 text-slate-800 hover:border-[#0a85b1] hover:bg-[#0a85b1] hover:text-white shadow-xs'
                  : 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50'
              }`}
              aria-label="Scroll case studies right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="flex-shrink-0 w-[320px] sm:w-[400px] lg:w-[440px] snap-start bg-slate-50/80 rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#0a85b1]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={getAssetUrl(study.image)}
                    alt={study.title}
                    fill
                    sizes="(max-width: 640px) 320px, 440px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950/80 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                      {study.category}
                    </span>
                  </div>

                  {/* Illustrative Marker */}
                  <div className="absolute bottom-3 right-4">
                    <span className="text-[10px] font-mono text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700/80">
                      {study.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                <Link
                  href={study.link}
                  className="inline-flex items-center text-xs font-bold text-slate-800 group-hover:text-[#0a85b1] transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="pt-2 text-center text-xs text-slate-400 font-mono">
          <span>&larr; Drag or use arrows to scroll through illustrative case studies &rarr;</span>
        </div>

      </div>
    </section>
  );
}
