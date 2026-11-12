'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'software-development': <Code2 className="w-6 h-6 text-[#0a85b1]" />,
  'web-development': <Globe className="w-6 h-6 text-[#0a85b1]" />,
  'mobile-applications': <Smartphone className="w-6 h-6 text-[#0a85b1]" />,
  'uiux-design': <Layout className="w-6 h-6 text-[#0a85b1]" />,
  'ai-machine-learning': <Cpu className="w-6 h-6 text-[#0a85b1]" />,
  'generative-ai': <Sparkles className="w-6 h-6 text-[#0a85b1]" />,
  'cloud-devops': <Cloud className="w-6 h-6 text-[#0a85b1]" />,
  'cybersecurity': <ShieldCheck className="w-6 h-6 text-[#0a85b1]" />,
  'it-consulting': <Compass className="w-6 h-6 text-[#0a85b1]" />,
  'web3': <Layers className="w-6 h-6 text-[#0a85b1]" />
};

const PILLARS = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'Digital Experience', label: 'Digital Experience' },
  { id: 'Enterprise Systems', label: 'Enterprise Systems' },
  { id: 'Intelligence & Advisory', label: 'Applied Intelligence & Strategy' }
] as const;

export default function ServicesOverview() {
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const { services } = COMPANY;

  const filteredServices = selectedPillar === 'all' 
    ? services 
    : services.filter(s => s.category === selectedPillar);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80" aria-labelledby="services-overview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
              <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
              <span>Our Service Portfolio</span>
            </div>
            <h2 id="services-overview-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Technology Capabilities Engineered for Impact
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We design, build, and deploy mission-critical digital systems. From enterprise core architectures to generative AI and responsive customer experiences, explore how we partner with your team.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>Explore All Detailed Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Pillar Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/60">
          {PILLARS.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#0a85b1] text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {pillar.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Cards Grid: Each Service has a distinct visual personality */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md hover:border-[#0a85b1]/40 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#0a85b1] transition-colors" />

              <div className="space-y-4">
                
                {/* Header: Icon + Category + Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100/80 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                    {SERVICE_ICONS[service.id] || <Code2 className="w-6 h-6 text-[#0a85b1]" />}
                  </div>

                  <div className="flex items-center gap-2">
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {service.badge}
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Service Title & Category */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Concrete Business Outcome (Instead of technical specifications) */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900 block mb-0.5">Value Delivered:</span>
                  {service.outcome}
                </div>

              </div>

              {/* Bottom Card Navigation */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <span className="text-[11px] text-slate-400 font-mono">
                  {service.deliverables.length} Deliverables
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-white border border-slate-200 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-950">
              Need a customized technology stack or multi-disciplinary engagement?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              We assemble focused engineering pods tailored to your exact architectural scope and milestone schedule.
            </p>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm transition-all"
          >
            <span>View Full Service Architecture</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
