'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Code2, 
  Globe, 
  Smartphone, 
  Layout, 
  Cpu, 
  Sparkles, 
  Cloud, 
  ShieldCheck, 
  Compass, 
  Layers, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { COMPANY, ServiceItem } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

const VISUAL_PILLARS = [
  {
    title: "Web Platforms & Enterprise Applications",
    category: "Digital Experience & Architecture",
    description: "High-performance web platforms, client management portals, and cloud backends built with Next.js, TypeScript, and edge-first rendering.",
    image: "/images/enterprise-platform-mockup.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Microservices"],
    link: "/services#web-development"
  },
  {
    title: "Mobile App Development (iOS & Android)",
    category: "Mobile Engineering",
    description: "Fluid 60 FPS mobile applications with offline-first state synchronization, encrypted device storage, and biometric security.",
    image: "/images/mobile-apps-showcase.jpg",
    tags: ["React Native", "Flutter", "iOS & Android", "Offline Sync"],
    link: "/services#mobile-applications"
  },
  {
    title: "AI, Machine Learning & Cloud DevOps",
    category: "Applied Intelligence & Infrastructure",
    description: "Predictive ML pipelines, generative AI agentic automation, and zero-downtime Kubernetes cloud deployment pipelines.",
    image: "/images/ai-cloud-automation.jpg",
    tags: ["Generative AI", "RAG Systems", "DevOps & CI/CD", "Kubernetes"],
    link: "/services#generative-ai"
  }
];

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'software-development': <Code2 className="w-5 h-5 text-[#0a85b1]" />,
  'web-development': <Globe className="w-5 h-5 text-[#0a85b1]" />,
  'mobile-applications': <Smartphone className="w-5 h-5 text-[#0a85b1]" />,
  'uiux-design': <Layout className="w-5 h-5 text-[#0a85b1]" />,
  'ai-machine-learning': <Cpu className="w-5 h-5 text-[#0a85b1]" />,
  'generative-ai': <Sparkles className="w-5 h-5 text-[#0a85b1]" />,
  'cloud-devops': <Cloud className="w-5 h-5 text-[#0a85b1]" />,
  'cybersecurity': <ShieldCheck className="w-5 h-5 text-[#0a85b1]" />,
  'it-consulting': <Compass className="w-5 h-5 text-[#0a85b1]" />,
  'web3': <Layers className="w-5 h-5 text-[#0a85b1]" />
};

export default function ServicesOverview() {
  const { services } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80" aria-labelledby="capabilities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
              <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
              <span>Our Capabilities &amp; Engineering</span>
            </div>
            <h2 id="capabilities-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Technology Capabilities Engineered for Scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We design, build, and deploy reliable digital systems across web, mobile, cloud infrastructure, and artificial intelligence.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>Explore Detailed Service Pages</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Visual Capability Pillars with Real Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VISUAL_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Real High-Resolution Visual Asset */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={getAssetUrl(pillar.image)}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-white">
                    {pillar.category}
                  </div>
                </div>

                <div className="p-6 pb-2 space-y-2">
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="px-6 flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="p-6 pt-5 mt-4 border-t border-slate-100">
                <Link
                  href={pillar.link}
                  className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] group/link"
                >
                  <span>Explore specifications</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Complete 10-Service Directory Grid */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-2">
            <div>
              <h4 className="text-base font-bold text-slate-950">
                All 10 Specialized Engineering Capabilities
              </h4>
              <p className="text-xs text-slate-500">
                Click any discipline for architectural breakdown, deliverables, and technical roadmaps.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-[#0a85b1] hover:underline flex items-center gap-1"
            >
              <span>View full directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-sky-50/50 hover:border-sky-200 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#0a85b1]">
                    {SERVICE_ICONS[service.id] || <Code2 className="w-4 h-4 text-[#0a85b1]" />}
                  </div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {service.title}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono line-clamp-1">
                  {service.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
