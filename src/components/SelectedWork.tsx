import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Globe, Smartphone, LayoutDashboard } from 'lucide-react';
import { COMPANY } from '@/data/company';

const SELECTED_PROJECTS = [
  {
    title: "Scalable Enterprise Web Platforms",
    category: "Full-Stack Web Engineering",
    description: "Sub-second page speeds, custom Next.js server components, structured metadata, and conversion-optimized architectures.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: <Globe className="w-5 h-5 text-[#0a85b1]" />
  },
  {
    title: "Cross-Platform Mobile Ecosystems",
    category: "Mobile Application (iOS & Android)",
    description: "Responsive 60 FPS mobile applications with offline synchronization, encrypted storage, and real-time socket events.",
    tech: ["React Native", "Flutter", "Firebase", "REST APIs"],
    icon: <Smartphone className="w-5 h-5 text-[#0a85b1]" />
  },
  {
    title: "Custom Operations & ERP Systems",
    category: "Custom Software Engineering",
    description: "Tailored internal operations portals, role-based workflows, and automated pipelines replacing fragmented spreadsheets.",
    tech: ["PostgreSQL", "Node.js", "Docker", "ACID APIs"],
    icon: <LayoutDashboard className="w-5 h-5 text-[#0a85b1]" />
  }
];

export default function SelectedWork() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80" aria-labelledby="selected-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
              <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
              <span>Case Studies &amp; Track Record</span>
            </div>
            <h2 id="selected-work-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Selected Work
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore recent software solutions built to give startup founders and scaling businesses a decisive edge.
            </p>
          </div>

          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SELECTED_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {proj.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0a85b1] uppercase tracking-wider">
                    {proj.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={COMPANY.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[#0a85b1] hover:underline"
                >
                  <span>View Case Study</span>
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
