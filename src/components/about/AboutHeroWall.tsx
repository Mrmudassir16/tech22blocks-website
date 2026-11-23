'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Cpu, Smartphone, Globe, Code2, Database } from 'lucide-react';

const WALL_TILES_ROW1 = [
  { title: 'VoiSage AI Voice Assistant', tag: 'Proprietary AI', icon: Cpu, color: 'from-sky-500/20 to-blue-600/30' },
  { title: 'Next.js Enterprise Platforms', tag: 'Web Development', icon: Globe, color: 'from-blue-500/20 to-indigo-600/30' },
  { title: 'Native iOS & Android Apps', tag: 'Mobile Apps', icon: Smartphone, color: 'from-cyan-500/20 to-teal-600/30' },
  { title: 'Multi-Cloud DevOps & Edge', tag: 'Cloud Scale', icon: Database, color: 'from-indigo-500/20 to-purple-600/30' },
  { title: 'Atomic Design Systems', tag: 'UI/UX Design', icon: Layers, color: 'from-amber-500/20 to-orange-600/30' },
  { title: 'VoiSage AI Voice Assistant', tag: 'Proprietary AI', icon: Cpu, color: 'from-sky-500/20 to-blue-600/30' },
  { title: 'Next.js Enterprise Platforms', tag: 'Web Development', icon: Globe, color: 'from-blue-500/20 to-indigo-600/30' },
  { title: 'Native iOS & Android Apps', tag: 'Mobile Apps', icon: Smartphone, color: 'from-cyan-500/20 to-teal-600/30' },
];

const WALL_TILES_ROW2 = [
  { title: 'Web3 & Distributed Systems', tag: 'Smart Contracts', icon: Code2, color: 'from-emerald-500/20 to-teal-600/30' },
  { title: 'Architecture & Security Audit', tag: 'OWASP Verified', icon: ShieldCheck, color: 'from-rose-500/20 to-red-600/30' },
  { title: 'Automated CI/CD Pipelines', tag: 'DevOps & QA', icon: Sparkles, color: 'from-violet-500/20 to-purple-600/30' },
  { title: 'Real-Time Telemetry & SLAs', tag: '24/7 Monitoring', icon: Database, color: 'from-blue-500/20 to-sky-600/30' },
  { title: 'Custom CRM & Business Portals', tag: 'Enterprise Apps', icon: Globe, color: 'from-teal-500/20 to-emerald-600/30' },
  { title: 'Web3 & Distributed Systems', tag: 'Smart Contracts', icon: Code2, color: 'from-emerald-500/20 to-teal-600/30' },
  { title: 'Architecture & Security Audit', tag: 'OWASP Verified', icon: ShieldCheck, color: 'from-rose-500/20 to-red-600/30' },
  { title: 'Automated CI/CD Pipelines', tag: 'DevOps & QA', icon: Sparkles, color: 'from-violet-500/20 to-purple-600/30' },
];

export default function AboutHeroWall() {
  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 bg-[var(--canvas)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      
      {/* Background Soft Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[var(--accent)]/[0.07] rounded-full blur-[140px] pointer-events-none transform-gpu" 
      />

      {/* Hero Copy (Modeled on SVSS ab-wall-copy) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-xs font-mono font-semibold text-[var(--accent)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>Who We Are &bull; Est. 2025</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[var(--text-primary)] font-display">
          Engineering Digital Success{' '}
          <span className="bg-gradient-to-r from-[var(--accent)] via-sky-500 to-indigo-500 bg-clip-text text-transparent">
            Since 2025
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl mx-auto">
          Operating under <strong className="text-[var(--text-primary)] font-semibold">RRK Software Technologies Private Limited</strong>, Tech22Blocks unites strategic business perspective with modern software craftsmanship &mdash; engineering proprietary products and custom digital solutions that ship reliably.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-semibold shadow-md transition-all duration-200 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-semibold transition-all duration-200"
          >
            <span>Explore Our 6 Services</span>
          </Link>
        </div>
      </div>

      {/* 3D Isometric Wall (SVSS ab-wall) */}
      <div className="ab-wall-container max-w-7xl mx-auto px-4 sm:px-6 relative" aria-hidden="true">
        <div className="ab-wall-plane">
          
          {/* Row 1 - Left Marquee */}
          <div className="ab-marquee-row-left">
            {WALL_TILES_ROW1.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <div 
                  key={i}
                  className="w-[240px] sm:w-[280px] p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md flex items-center gap-3.5 flex-shrink-0"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${tile.color} flex items-center justify-center text-[var(--accent)] flex-shrink-0 border border-[var(--border)]`}>
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold block">
                      {tile.tag}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate font-display">
                      {tile.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2 - Right Marquee */}
          <div className="ab-marquee-row-right">
            {WALL_TILES_ROW2.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <div 
                  key={i}
                  className="w-[240px] sm:w-[280px] p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md flex items-center gap-3.5 flex-shrink-0"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${tile.color} flex items-center justify-center text-[var(--accent)] flex-shrink-0 border border-[var(--border)]`}>
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold block">
                      {tile.tag}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate font-display">
                      {tile.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
