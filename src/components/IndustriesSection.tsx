'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';

export interface IndustryItem {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'education',
    num: '01',
    title: 'Education',
    description: 'Learning apps, online classes and school management systems that keep students engaged.',
    image: '/images/industries/education.jpg',
    href: '/contact/',
  },
  {
    id: 'logistics',
    num: '02',
    title: 'Logistics',
    description: 'Fleet, delivery and warehouse software for smooth, trackable operations.',
    image: '/images/industries/logistics.jpg',
    href: '/contact/',
  },
  {
    id: 'social-network',
    num: '03',
    title: 'Social Networking',
    description: 'Community and social apps with real-time chat, feeds, and creator monetization tools.',
    image: '/images/industries/social-network.jpg',
    href: '/contact/',
  },
  {
    id: 'fitness',
    num: '04',
    title: 'Fitness',
    description: 'Workout, membership and coaching apps that keep members coming back.',
    image: '/images/industries/fitness.jpg',
    href: '/contact/',
  },
  {
    id: 'travel',
    num: '05',
    title: 'Travel',
    description: 'Booking apps for hotels, trips, and travel services with real-time availability.',
    image: '/images/industries/travel.jpg',
    href: '/contact/',
  },
  {
    id: 'ecommerce',
    num: '06',
    title: 'E-commerce',
    description: 'Online stores and shopping apps with secure payments and easy order management.',
    image: '/images/industries/ecommerce.jpg',
    href: '/contact/',
  },
  {
    id: 'ondemand',
    num: '07',
    title: 'On Demand Services',
    description: 'Apps that connect customers with local services and verified technicians in a few taps.',
    image: '/images/industries/ondemand.jpg',
    href: '/contact/',
  },
  {
    id: 'health',
    num: '08',
    title: 'Health Services',
    description: 'Appointment, telemedicine and clinic apps that make healthcare easier to reach.',
    image: '/images/industries/health.jpg',
    href: '/contact/',
  },
];

export default function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // SVSS Auto-cycling behavior: Cycles through the 8 cards every 2.4s while in view unless paused by user hover
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setIsInView(entries[0].isIntersecting);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isHovered) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % INDUSTRIES_DATA.length);
    }, 2400);

    return () => clearInterval(timer);
  }, [isInView, isHovered]);

  return (
    <section 
      ref={sectionRef}
      id="industries"
      className="relative py-12 sm:py-16 lg:py-20 bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden"
      aria-labelledby="industries-heading"
    >
      {/* Background Volumetric Flares */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-[var(--accent)]/[0.04] rounded-full blur-[140px] pointer-events-none transform-gpu" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-sky-500/[0.04] rounded-full blur-[140px] pointer-events-none transform-gpu" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (SVSS Style Eyebrow + Subtitle) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-[var(--accent)] bg-[var(--surface)] px-3 py-1 rounded-full border border-[var(--border)] shadow-sm">
              Industries
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={44} 
              height={8} 
              className="inline-block brightness-150"
            />
          </div>

          <h2 id="industries-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-tight cursor-default">
            <StaggeredText text="Industries" />{' '}
            <StaggeredText text="We Serve" isShimmer />
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
            Experience across sectors means we already understand your customers and your workflows.
          </p>
        </div>

        {/* 1. Desktop Accordion Expanding Deck (Exact SVSS hp-ind behavior) */}
        <div 
          className="hidden lg:flex w-full h-[480px] gap-3.5 select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {INDUSTRIES_DATA.map((ind, idx) => {
            const isOpen = activeIdx === idx;

            return (
              <div
                key={ind.id}
                onMouseEnter={() => setActiveIdx(idx)}
                style={{
                  flexGrow: isOpen ? 3.6 : 1,
                  flexBasis: '0px',
                }}
                className={`group relative h-full rounded-[24px] overflow-hidden bg-slate-950 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer shadow-lg border border-[var(--border)] hover:border-[var(--accent)] ${
                  isOpen ? 'border-[var(--accent)] shadow-2xl' : ''
                }`}
              >
                {/* Background Image with Zoom on Expand */}
                <Image
                  src={getAssetUrl(ind.image)}
                  alt={ind.title}
                  fill
                  sizes="(max-width: 1200px) 25vw, 400px"
                  className={`object-cover object-center transition-all duration-700 ${
                    isOpen ? 'scale-105 saturate-100' : 'scale-100 saturate-75 opacity-70 group-hover:opacity-90'
                  }`}
                />

                {/* Multi-stage High-Contrast Dark Gradient Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-opacity duration-500 ${
                    isOpen ? 'opacity-90' : 'opacity-70 group-hover:opacity-60'
                  }`} 
                />

                {/* Top Number Pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 inline-flex items-center gap-1 shadow-sm">
                    <span>{ind.num}</span>
                    {isOpen && <span className="text-slate-400 font-normal">/ 08</span>}
                  </span>
                </div>

                {/* Bottom Body / Vertical Label */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col justify-end">
                  
                  {/* When Card is Inactive / Closed: Elegant Vertical Rotated Pill Label */}
                  {!isOpen && (
                    <div className="flex justify-center pb-2">
                      <span 
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        className="font-bold text-sm text-white tracking-wider px-2 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 whitespace-nowrap transition-transform duration-300 group-hover:scale-105"
                      >
                        {ind.title}
                      </span>
                    </div>
                  )}

                  {/* When Card is Active / Open: Full Title, Paragraph, and Pill Link */}
                  {isOpen && (
                    <div className="space-y-2 animate-fadeIn">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 line-clamp-3 leading-relaxed max-w-sm">
                        {ind.description}
                      </p>
                      
                      <div className="pt-2">
                        <Link
                          href={ind.href}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-sky-50 shadow-md transition-all group/btn"
                        >
                          <span>Explore {ind.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Filling Progress Bar (Fires during the 2.4s active window) */}
                  {isOpen && !isHovered && (
                    <div className="mt-4 w-full h-[3px] rounded-full bg-white/20 overflow-hidden">
                      <div 
                        style={{ animation: 'hp-ind-fill 2.4s linear forwards' }}
                        className="h-full bg-white origin-left"
                      />
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Mobile Responsive Swipeable Cards Carousel (< lg) */}
        <div className="flex lg:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="relative w-[82vw] max-w-[340px] flex-shrink-0 h-[380px] snap-start rounded-[24px] overflow-hidden border border-[var(--border)] shadow-md flex flex-col justify-between p-6 bg-slate-900"
            >
              <Image
                src={getAssetUrl(ind.image)}
                alt={ind.title}
                fill
                sizes="340px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20">
                  {ind.num} <span className="text-slate-400 font-normal">/ 08</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-xl font-extrabold text-white">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-200 font-normal leading-relaxed line-clamp-2">
                  {ind.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={ind.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-900 bg-white"
                  >
                    <span>Explore {ind.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action strip */}
        <div className="mt-10 text-center">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all btn-offset"
          >
            <span>Discuss your industry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
