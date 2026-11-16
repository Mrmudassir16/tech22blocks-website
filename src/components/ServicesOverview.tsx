'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Layout, 
  Code2, 
  Compass, 
  Layers, 
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { StarWatermark } from '@/components/StarEmblem';

const HOMEPAGE_SERVICES = [
  {
    num: '01',
    id: 'website-development',
    title: 'Website Development',
    tagline: 'Modern, scalable web experiences.',
    description: 'High-performance web platforms and full-stack applications engineered for speed, clean indexing, and seamless customer interactions.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: Globe,
    badge: 'Digital Experience',
  },
  {
    num: '02',
    id: 'mobile-applications',
    title: 'Mobile Application Development',
    tagline: 'Applications for iOS and Android.',
    description: 'Native and cross-platform mobile apps engineered for fluid 60 FPS performance, offline data synchronization, and security.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    icon: Smartphone,
    badge: 'Digital Experience',
  },
  {
    num: '03',
    id: 'uiux-design',
    title: 'UI/UX Design',
    tagline: 'Intuitive and thoughtful digital experiences.',
    description: 'Purposeful digital workflows, interactive wireframes, and scalable component design systems that minimize user friction.',
    technologies: ['Figma', 'Design Systems', 'User Research', 'Tokens'],
    icon: Layout,
    badge: 'Digital Experience',
  },
  {
    num: '04',
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Software tailored to business needs.',
    description: 'Bespoke core systems, enterprise operations portals, and high-throughput APIs crafted specifically around your unique operating model.',
    technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL'],
    icon: Code2,
    badge: 'Enterprise Systems',
  },
  {
    num: '05',
    id: 'it-consulting',
    title: 'IT Consulting & Advisory',
    tagline: 'Technology guidance and architecture.',
    description: 'Pragmatic technical advisory helping business leaders evaluate technology trade-offs, audit architecture, and plan roadmaps.',
    technologies: ['Stack Selection', 'Architecture Audits', 'Due Diligence'],
    icon: Compass,
    badge: 'Intelligence & Advisory',
  },
  {
    num: '06',
    id: 'web3',
    title: 'Web3.0',
    tagline: 'Decentralized architecture and verification.',
    description: 'Pragmatic research and architectural exploration of distributed ledger technology, smart contracts, and cryptographic data verification.',
    technologies: ['Distributed Ledgers', 'Cryptographic Proofs', 'Smart Contracts'],
    icon: Layers,
    badge: 'Coming Soon',
    comingSoon: true,
  },
];

export default function ServicesOverview() {
  return (
    <section 
      className="relative py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 overflow-hidden" 
      aria-labelledby="services-heading"
    >
      <StarWatermark size={640} position="top-left" variant="blue" opacity={0.02} rotate={-15} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Techco-Style Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            {/* Clean Section Tag without Star Bullet */}
            <div className="inline-block mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a85b1] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Our Services
              </span>
            </div>

            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Software Engineered for Performance and Scale
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Practical technology solutions engineered to solve real business bottlenecks and create measurable operational advantage.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/services/"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>Explore All 6 Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Techco-Inspired 3x2 Grid: Balanced, Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-4">
          {HOMEPAGE_SERVICES.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="relative overflow-hidden bg-white rounded-2xl border border-slate-200/90 p-7 lg:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#0a85b1]/60 hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Top Subtle Brand Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0a85b1] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  
                  {/* Card Header: Icon + Number & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1] group-hover:bg-[#0a85b1] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <IconComponent className="w-6 h-6 transition-colors" />
                    </div>

                    <div className="flex items-center gap-2">
                      {service.comingSoon ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-bold uppercase tracking-wider">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 font-medium">
                          {service.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {service.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0a85b1]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/#${service.id}`}
                    className="inline-flex items-center text-xs font-bold text-slate-800 group-hover:text-[#0a85b1] transition-colors"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0a85b1] transition-colors" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
