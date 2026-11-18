'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';

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
    href: '/services/#website-development',
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
    href: '/services/#mobile-applications',
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
    href: '/services/#custom-software',
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
    href: '/services/#it-consulting',
  },
];

export default function CaseStudiesSection() {
  return (
    <section 
      id="case-studies"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#03081a] text-white border-b border-white/[0.08] overflow-hidden" 
      aria-labelledby="case-studies-heading"
    >
      {/* Background Volumetric Flares */}
      <div className="absolute top-1/3 -left-40 w-[650px] h-[650px] bg-[#0052FF]/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu animate-pulse-aura" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-sky-500/[0.12] rounded-full blur-[140px] pointer-events-none transform-gpu" />

      {/* Background Tech Angle Shape */}
      <div className="absolute top-20 -right-16 w-80 h-96 opacity-20 pointer-events-none animate-float-slow hidden lg:block rotate-12">
        <Image 
          src={getAssetUrl('/images/shape_angle_1.webp')} 
          alt="" 
          width={320} 
          height={440} 
          className="w-full h-auto object-contain brightness-150"
        />
      </div>

      {/* Hairline subtle top ambient glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest font-mono text-[#38bdf8]">
              Case Studies
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={40} 
              height={8} 
              className="inline-block brightness-200"
            />
          </div>

          <h2 id="case-studies-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-tight cursor-default">
            Our latest <span className="animate-text-shimmer drop-shadow-[0_0_28px_rgba(56,189,248,0.55)]">Case</span> Studies
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore how we build production software architectures for global enterprises, modern platforms, and proprietary products.
          </p>
        </div>

        {/* Stacking / Overlapping Sticky Cards Wrapper */}
        <div className="relative pb-6 space-y-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="sticky top-24 sm:top-28 bg-[#0b1120]/95 rounded-3xl overflow-hidden border border-white/[0.1] hover:border-sky-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.12)] backdrop-blur-2xl transition-all duration-300"
              style={{
                zIndex: 10 + idx * 5,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left Column: Details, Metadata, Core Technologies, and Read Case Button */}
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
                  <div>
                    {/* Category Label with Monospace Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-400/20 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                        {study.category}
                      </span>
                    </div>

                    {/* Case Study Title with kinetic hover */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 hover:text-[#38bdf8] hover:translate-x-0.5 transition-all duration-300 leading-tight">
                      <Link href={study.href}>
                        {study.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                      {study.description}
                    </p>

                    {/* Industry & Country Metadata List */}
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-8 text-sm">
                      <div className="text-slate-400">
                        <strong className="text-white font-semibold">Industry:</strong> {study.industry}
                      </div>
                      <div className="text-slate-400">
                        <strong className="text-white font-semibold">Country:</strong> {study.country}
                      </div>
                    </div>

                    {/* Core Technologies Row with Elevated Badges */}
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                        Core Technologies:
                      </span>
                      <div className="flex items-center gap-3">
                        {study.technologies.map((tech, tIdx) => (
                          <div 
                            key={tIdx}
                            className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center p-2.5 transition-all duration-200 hover:scale-110 hover:border-sky-400/50 hover:bg-sky-500/[0.1] shadow-lg"
                            title={tech.name}
                          >
                            <Image 
                              src={getAssetUrl(tech.icon)} 
                              alt={tech.name} 
                              width={28} 
                              height={28} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    <Link
                      href={study.href}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-[#0a85b1] to-[#0284c7] text-white font-mono font-semibold text-xs tracking-wider uppercase hover:from-sky-400 hover:to-sky-500 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] group"
                    >
                      <span>Read Case</span>
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Vivid Deep Gradient Showcase with Isometric Device Mockup */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#0a85b1]/20 via-[#0369a1]/10 to-[#030712] border-t lg:border-t-0 lg:border-l border-white/[0.08] flex items-center justify-center p-8 sm:p-12 relative overflow-hidden min-h-[320px] lg:min-h-full">
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                  
                  <div className="relative z-10 w-full max-w-[420px] transition-transform duration-500 hover:scale-105">
                    <Image 
                      src={getAssetUrl(study.image)} 
                      alt={study.title} 
                      width={465} 
                      height={430} 
                      className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
