import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  Smartphone, 
  LayoutDashboard, 
  Cpu, 
  Layers, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { COMPANY } from '@/data/company';

const CAPABILITY_PROJECTS = [
  {
    title: "High-Performance Modern Web Platforms",
    domain: "Full-Stack Web Engineering",
    description: "Component-driven architectures, sub-second LCP scores, automated CI/CD releases, and enterprise structured metadata designed for high search discoverability.",
    architecturalHighlights: [
      "Next.js SSR/SSG Hybrid Rendering",
      "Tailwind Design System Integration",
      "Automated Lighthouse CI Gateways"
    ],
    icon: <Globe className="w-5 h-5 text-[#0a85b1]" />,
    link: COMPANY.portfolioUrl
  },
  {
    title: "Cross-Platform Mobile Ecosystems (iOS & Android)",
    domain: "Mobile Application Engineering",
    description: "Responsive 60 FPS mobile client applications with offline synchronization, encrypted device storage, and low-latency real-time event sockets.",
    architecturalHighlights: [
      "Cross-Platform React Native Architecture",
      "Encrypted Local SQLite & State Cache",
      "Zero-Latency Push Notifications & WebSockets"
    ],
    icon: <Smartphone className="w-5 h-5 text-[#0a85b1]" />,
    link: COMPANY.portfolioUrl
  },
  {
    title: "Bespoke Enterprise Operations & Data Platforms",
    domain: "Custom Software Engineering",
    description: "Tailored internal operations portals, role-based access workflows, and scalable ACID database structures replacing fragmented spreadsheet systems.",
    architecturalHighlights: [
      "ACID-Compliant PostgreSQL Schemas",
      "Granular Role-Based Access Control (RBAC)",
      "Automated Business Workflow Webhooks"
    ],
    icon: <LayoutDashboard className="w-5 h-5 text-[#0a85b1]" />,
    link: COMPANY.portfolioUrl
  }
];

export default function SelectedWork() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80" aria-labelledby="selected-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
              <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
              <span>Case Studies &amp; Track Record</span>
            </div>
            <h2 id="selected-work-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Selected Work &amp; Architecture
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A sample of digital systems engineered to solve concrete operational bottlenecks and scale without technical debt.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={COMPANY.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>Explore All Case Studies</span>
              <ExternalLink className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* 3 Detailed Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CAPABILITY_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {proj.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0a85b1] uppercase tracking-wider">
                    {proj.domain}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Architectural highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold block">
                    Key Architectural Pillars:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {proj.architecturalHighlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0a85b1] flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[#0a85b1] hover:underline group/btn"
                >
                  <span>View Case Study Catalog</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Transparency Notice */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            <strong className="text-slate-900 font-semibold">Strict Client Confidentiality:</strong> Certain enterprise codebases and proprietary internal tools are protected under NDAs. Detailed technical walkthroughs are available upon direct consultation.
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 font-semibold text-[#0a85b1] hover:underline"
          >
            Request Private Walkthrough &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
