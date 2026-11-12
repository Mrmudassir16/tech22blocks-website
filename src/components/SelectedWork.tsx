import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  Smartphone, 
  LayoutDashboard, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY } from '@/data/company';

const CAPABILITY_PROJECTS = [
  {
    title: "High-Performance Modern Web Platforms",
    domain: "Full-Stack Web Engineering",
    description: "Component-driven architectures, sub-second LCP scores, and enterprise structured metadata designed for high discoverability.",
    icon: <Globe className="w-5 h-5 text-[#0a85b1]" />,
    link: COMPANY.portfolioUrl
  },
  {
    title: "Cross-Platform Mobile Ecosystems (iOS & Android)",
    domain: "Mobile Application Engineering",
    description: "Responsive 60 FPS mobile client applications with offline synchronization, encrypted device storage, and real-time event sockets.",
    icon: <Smartphone className="w-5 h-5 text-[#0a85b1]" />,
    link: COMPANY.portfolioUrl
  },
  {
    title: "Bespoke Enterprise Operations & Data Platforms",
    domain: "Custom Software Engineering",
    description: "Tailored internal operations portals, role-based access workflows, and scalable ACID database structures replacing fragmented spreadsheets.",
    icon: <LayoutDashboard className="w-5 h-5 text-[#0a85b1]" />,
    link: COMPANY.portfolioUrl
  }
];

export default function SelectedWork() {
  return (
    <section className="py-18 lg:py-24 bg-slate-50/70 border-b border-slate-200/80" aria-labelledby="selected-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
              <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
              <span>Case Studies &amp; Track Record</span>
            </div>
            <h2 id="selected-work-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Selected Work
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              A sample of digital systems engineered to solve concrete operational bottlenecks and scale without technical debt.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>View All Portfolio Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Compact Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {CAPABILITY_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {proj.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#0a85b1] uppercase tracking-wider">
                    {proj.domain}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[#0a85b1] hover:underline"
                >
                  <span>Explore Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
