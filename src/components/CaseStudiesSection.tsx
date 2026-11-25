'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { SectionTransitionShape } from '@/components/design-system/SectionDecorations';

interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  description: string;
  industry: string;
  country: string;
  image: string;
  technologies: { name: string; icon: string }[];
  href: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-01',
    category: 'Computer Software',
    title: 'Astarte Medical',
    description: 'Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements and goals of the project.',
    industry: 'Computer software',
    country: 'Germany, Issum',
    image: '/images/case_image_1.webp',
    technologies: [
      { name: 'Angular', icon: '/images/icon_angular.svg' },
      { name: 'PostgreSQL', icon: '/images/icon_elephent.svg' },
    ],
    href: '/services/website-development/',
  },
  {
    id: 'case-02',
    category: 'Healthcare',
    title: 'CAE Blue Phantom',
    description: 'CAE Blue Phantom is a cutting-edge simulation technology designed to revolutionize medical training and education. Utilizing advanced virtual reality and artificial intelligence, CAE Blue Phantom provides high-fidelity tactile feedback.',
    industry: 'Wellness & Fitness',
    country: 'Germany, Issum',
    image: '/images/case_image_2.webp',
    technologies: [
      { name: '.NET Core', icon: '/images/icon_netcore.svg' },
      { name: 'Python', icon: '/images/icon_python.svg' },
    ],
    href: '/services/mobile-applications/',
  },
  {
    id: 'case-03',
    category: 'Real Estate',
    title: 'Liberkeys',
    description: 'Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys offers a full-service real estate experience.',
    industry: 'Real estate software',
    country: 'Germany, Issum',
    image: '/images/case_image_3.webp',
    technologies: [
      { name: 'Angular', icon: '/images/icon_angular.svg' },
      { name: 'Python', icon: '/images/icon_python.svg' },
    ],
    href: '/services/custom-software/',
  },
  {
    id: 'case-04',
    category: 'Enterprise Cloud',
    title: 'NovaCore Systems',
    description: 'Engineered high-throughput enterprise middleware with distributed telemetry, robust fault tolerance, and automated cloud deployments tailored for real-time transactional workloads.',
    industry: 'Fintech & Cloud Systems',
    country: 'India, Hyderabad',
    image: '/images/case_image_1.webp',
    technologies: [
      { name: '.NET Core', icon: '/images/icon_netcore.svg' },
      { name: 'PostgreSQL', icon: '/images/icon_elephent.svg' },
    ],
    href: '/services/it-consulting/',
  },
];

export default function CaseStudiesSection() {
  return (
    <section 
      id="case-studies"
      className="relative pt-12 sm:pt-16 pb-8 sm:pb-10 bg-[var(--surface-elevated)] text-[var(--text-primary)] overflow-x-clip transition-colors duration-200" 
      aria-labelledby="case-studies-heading"
    >
      {/* 1. Dynamic Section Transition Shape (Stepped Shelf Left - No straight border line) */}
      <SectionTransitionShape 
        position="top" 
        variant="stepped-left" 
        fillColor="var(--canvas)" 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Kinetic Typography */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="mb-3">
            <span className="heading-focus-underline text-sm sm:text-base font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
              Case Studies
            </span>
          </div>

          <div>
            <h2 id="case-studies-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-tight cursor-default">
              <StaggeredText text="Our latest" />{' '}
              <StaggeredText text="Case Studies" isShimmer />
            </h2>
          </div>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
            Explore how we build production software architectures for global enterprises, modern platforms, and proprietary products.
          </p>
        </div>

        {/* Stacking / Overlapping Sticky Cards Deck (Sticky on Mobile & Desktop) */}
        <div className="relative pb-16 sm:pb-20 space-y-6 sm:space-y-10">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="group sticky bg-[var(--surface)] rounded-2xl sm:rounded-[var(--radius-shell)] overflow-hidden border border-[var(--border)] shadow-[0_-12px_32px_rgba(0,0,0,0.35),0_20px_40px_rgba(0,0,0,0.25)] hover:border-[var(--accent)]/50 transition-all duration-300"
              style={{
                zIndex: 10 + idx * 5,
                top: `calc(76px + ${idx * 18}px)`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left Column: Details, Metadata, Core Technologies, and Read Case Button */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Category Label with Monospace Tag */}
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <span className="px-3 py-1 rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
                        {study.category}
                      </span>
                    </div>

                    {/* Case Study Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-primary)] mb-3 sm:mb-4 hover:text-[var(--accent)] transition-colors leading-tight">
                      <Link href={study.href}>
                        {study.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-5 font-normal">
                      {study.description}
                    </p>

                    {/* Industry & Country Metadata List (ZentixSoft Trust Pattern) */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-xs sm:text-sm">
                      <div className="text-[var(--text-muted)]">
                        <strong className="text-[var(--text-primary)] font-semibold">Industry:</strong> {study.industry}
                      </div>
                      <div className="text-[var(--text-muted)]">
                        <strong className="text-[var(--text-primary)] font-semibold">Country:</strong> {study.country}
                      </div>
                    </div>
                  </div>

                  {/* Core Technologies & Action Button */}
                  <div className="pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2 sm:mb-3 font-semibold">
                        Core Technologies
                      </span>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {study.technologies.map((tech, techIdx) => (
                          <div 
                            key={techIdx} 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-mono text-[var(--text-primary)]"
                          >
                            <Image 
                              src={getAssetUrl(tech.icon)} 
                              alt="" 
                              width={16} 
                              height={16} 
                              className="w-4 h-4 object-contain"
                            />
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={study.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-sm btn-offset flex-shrink-0"
                    >
                      <span>Read Case</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                </div>

                {/* Right Column: Case Study Hero Image */}
                <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[360px] lg:min-h-full bg-[var(--surface-elevated)] overflow-hidden">
                  <Image 
                    src={getAssetUrl(study.image)} 
                    alt={study.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 42vw" 
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[var(--surface)] via-transparent to-transparent opacity-60" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
