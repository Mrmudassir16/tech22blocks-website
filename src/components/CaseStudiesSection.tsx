'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

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
    description: 'Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys leverages edge cloud infrastructure.',
    industry: 'Real Estate',
    country: 'France, Paris',
    image: '/images/case_image_3.webp',
    technologies: [
      { name: 'Python', icon: '/images/icon_python.svg' },
      { name: 'Angular', icon: '/images/icon_angular.svg' },
    ],
    href: '/services/#custom-software',
  },
  {
    id: 'case-04',
    category: 'Autonomous AI Product',
    title: 'Voisage Audio Engine',
    description: 'An autonomous communication system engineered by Tech22Blocks to handle incoming phone calls, filter automated spam, and deliver concise, actionable briefings to business leadership with sub-second latency.',
    industry: 'Enterprise Telephony',
    country: 'Global Cloud',
    image: '/images/case_image_4.webp',
    technologies: [
      { name: 'Python', icon: '/images/icon_python.svg' },
      { name: '.NET Core', icon: '/images/icon_netcore.svg' },
    ],
    href: '/products',
  },
];

export default function CaseStudiesSection() {
  return (
    <section 
      id="case-studies"
      className="relative py-24 lg:py-32 bg-[#F2F6FA]" 
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Techco Exact Style with Underline Shape */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
              Case Studies
            </span>
            <Image 
              src="/images/shape_title_under_line.svg" 
              alt="" 
              width={40} 
              height={8} 
              className="inline-block"
            />
          </div>

          <h2 id="case-studies-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Our latest <span className="text-[#0a85b1]">Case</span> Studies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore how we build production software architectures for global enterprises, modern platforms, and proprietary products.
          </p>
        </div>

        {/* Stacking / Overlapping Sticky Cards Wrapper (Exact Techco Implementation) */}
        <div className="relative pb-24 space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="sticky top-20 sm:top-24 bg-white rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                zIndex: 10 + idx * 5,
                boxShadow: '0 16px 45px rgba(2, 9, 63, 0.16), 0 4px 12px rgba(2, 9, 63, 0.08)',
                border: '1px solid rgba(2, 9, 63, 0.06)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left Column: Details, Metadata, Core Technologies, and Read Case Button */}
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
                      {study.category}
                    </span>

                    {/* Case Study Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-4 hover:text-[#0a85b1] transition-colors">
                      <Link href={study.href}>
                        {study.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                      {study.description}
                    </p>

                    {/* Industry & Country Metadata List */}
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-8 text-sm">
                      <div className="text-slate-500">
                        <strong className="text-[#0f172a] font-bold">Industry:</strong> {study.industry}
                      </div>
                      <div className="text-slate-500">
                        <strong className="text-[#0f172a] font-bold">Country:</strong> {study.country}
                      </div>
                    </div>

                    {/* Core Technologies Row with Circular Elevated Badges */}
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-sm font-bold text-[#0f172a]">
                        Core Technologies:
                      </span>
                      <div className="flex items-center gap-3">
                        {study.technologies.map((tech, tIdx) => (
                          <div 
                            key={tIdx}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2.5 transition-transform hover:scale-110"
                            style={{
                              boxShadow: '0 4px 18px rgba(174, 191, 210, 0.45)',
                            }}
                            title={tech.name}
                          >
                            <Image 
                              src={tech.icon} 
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

                  {/* Blue Action Button (Techco Exact Style) */}
                  <div>
                    <Link
                      href={study.href}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#0a85b1] text-white font-bold text-sm tracking-wide hover:bg-[#0369a1] transition-all shadow-md group"
                    >
                      <span>Read Case</span>
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Vivid Solid Blue Card with Isometric Device Mockup */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#0a85b1] to-[#0369a1] flex items-center justify-center p-6 sm:p-10 relative overflow-hidden min-h-[300px] lg:min-h-full">
                  {/* Background subtle angle lines */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  <div className="relative z-10 w-full max-w-[420px] transition-transform duration-500 hover:scale-105">
                    <Image 
                      src={study.image} 
                      alt={study.title} 
                      width={465} 
                      height={430} 
                      className="w-full h-auto object-contain drop-shadow-2xl"
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
