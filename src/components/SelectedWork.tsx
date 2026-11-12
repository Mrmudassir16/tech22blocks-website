import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Globe, Smartphone, LayoutDashboard } from 'lucide-react';
import { COMPANY } from '@/data/company';

const SELECTED_PROJECTS = [
  {
    title: 'Scalable Enterprise Web Platforms',
    category: 'Full-Stack Web Engineering',
    description:
      'Sub-second page speeds, custom Next.js server components, structured metadata, and conversion-optimized architectures built for growth.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: <Globe className="w-5 h-5 text-[#0a85b1]" />,
    accentFrom: '#0a85b1',
    accentTo: '#38bdf8',
  },
  {
    title: 'Cross-Platform Mobile Ecosystems',
    category: 'Mobile Application (iOS & Android)',
    description:
      'Responsive 60 FPS mobile applications with offline synchronization, encrypted local storage, and real-time socket event handling.',
    tech: ['React Native', 'Flutter', 'Firebase', 'REST APIs'],
    icon: <Smartphone className="w-5 h-5 text-[#0a85b1]" />,
    accentFrom: '#0369a1',
    accentTo: '#0a85b1',
  },
  {
    title: 'Custom Operations & ERP Systems',
    category: 'Custom Software Engineering',
    description:
      'Tailored internal operations portals, role-based access workflows, and automated data pipelines replacing fragmented spreadsheets.',
    tech: ['PostgreSQL', 'Node.js', 'Docker', 'ACID APIs'],
    icon: <LayoutDashboard className="w-5 h-5 text-[#0a85b1]" />,
    accentFrom: '#0b1120',
    accentTo: '#0369a1',
  },
];

export default function SelectedWork() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/60" aria-labelledby="selected-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="label-eyebrow mb-3">Case Studies & Track Record</div>
            <h2 id="selected-work-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Selected Work
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Software solutions built to give startup founders and scaling businesses a decisive competitive edge.
            </p>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0a85b1] hover:text-[#0369a1] group transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SELECTED_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#0a85b1]/20 transition-all duration-200 group flex flex-col"
            >
              {/* Accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${proj.accentFrom}, ${proj.accentTo})` }}
              />

              <div className="p-7 flex flex-col flex-1 space-y-4">
                {/* Category */}
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0a85b1]">
                  {proj.category}
                </span>

                {/* Icon + Title */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {proj.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {proj.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/80">
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2 mt-auto border-t border-slate-100">
                  <a
                    href={COMPANY.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a85b1] hover:text-[#0369a1] transition-colors group/link"
                  >
                    View Case Study
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile + desktop centered CTA */}
        <div className="mt-10 flex justify-center md:justify-start">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0a85b1] border border-[#0a85b1]/30 hover:bg-sky-50 hover:border-[#0a85b1]/60 rounded-full transition-colors"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
