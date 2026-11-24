'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  Zap, 
  Award, 
  Clock, 
  Users, 
  Lock, 
  Terminal, 
  Cloud, 
  Workflow,
  Cpu,
  Layers,
  Code2
} from 'lucide-react';
import { ServiceDetailData } from '@/data/serviceDetails';
import { COMPANY } from '@/data/company';
import { StarWatermark } from '@/components/StarEmblem';
import FinalCTA from '@/components/FinalCTA';

interface ServiceDetailTemplateProps {
  data: ServiceDetailData;
}

export default function ServiceDetailTemplate({ data }: ServiceDetailTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const otherServices = COMPANY.services.filter((s) => s.id !== data.slug);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                            */}
      {/* ========================================================================= */}
      <section className="relative pt-20 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden border-b border-[var(--border)] bg-[var(--surface)] transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-mono text-[var(--text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-[var(--border)]" /></li>
              <li>
                <Link href="/services/" className="hover:text-[var(--accent)] transition-colors">
                  Services
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-[var(--border)]" /></li>
              <li className="text-[var(--accent)] font-semibold truncate max-w-[200px] sm:max-w-none">
                {data.hero.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>{data.hero.categoryBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
                {data.hero.title}
              </h1>

              <p className="text-lg sm:text-xl font-bold text-[var(--accent)] font-display">
                {data.hero.subtitle}
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl">
                {data.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all flex items-center gap-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#capabilities"
                  className="px-5 py-3.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all"
                >
                  View Scope &amp; Deliverables
                </a>
              </div>

              {/* Verified Trust Stats */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[var(--border)]">
                {data.hero.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-[var(--text-primary)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Interactive Architecture Spec Box */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-[460px] rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border)] p-6 shadow-2xl relative overflow-hidden">
                
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border)]">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    // verified-engineering-spec
                  </span>
                </div>

                {/* Key Spec Cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)]">Zero Technical Debt Policy</div>
                      <div className="text-[11px] text-[var(--text-muted)]">Strict TypeScript typing &amp; clean modular code</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)]">Bi-Weekly Staging Releases</div>
                      <div className="text-[11px] text-[var(--text-muted)]">Verifiable working software every 7–14 days</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)]">100% Code &amp; IP Ownership</div>
                      <div className="text-[11px] text-[var(--text-muted)]">Direct Git, cloud keys &amp; store credentials</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)]">Complimentary Warranty</div>
                      <div className="text-[11px] text-[var(--text-muted)]">30–60 days post-launch monitoring included</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Banner */}
                <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>Architecture SLA:</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                    Active &amp; Ready to Deploy
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PLATFORMS & ARCHITECTURES ("One Team for Every Platform")             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Architectural Breadth
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              {data.platformsHeading}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.platformsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.platforms.map((platform, i) => (
              <div 
                key={i}
                className="group p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                      {platform.badge}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] font-display tracking-tight mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {platform.title}
                  </h3>
                  <div className="text-xs font-mono text-[var(--accent)] mb-3">
                    {platform.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {platform.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] space-y-1.5">
                  {platform.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPREHENSIVE CAPABILITIES BREAKDOWN                                   */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              End-to-End Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              {data.capabilitiesHeading}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.capabilitiesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {data.capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Phase {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {cap.description}
                </p>

                <div className="pt-3 border-t border-[var(--border)] flex flex-wrap gap-2">
                  {cap.deliverables.map((deliv, dIdx) => (
                    <span 
                      key={dIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)]"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "WHAT WE'VE BUILT" (ONLY FOR MOBILE & WEB DEVELOPMENT)                 */}
      {/* ========================================================================= */}
      {data.builtWorks && data.builtWorks.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
                Proven Production Experience
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
                {data.builtWorksHeading || 'Platforms We Have Built'}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
                {data.builtWorksSubtitle || 'Representative commercial projects delivering high performance and operational scale.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {data.builtWorks.map((work, wIdx) => (
                <div 
                  key={wIdx}
                  className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Badge */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30">
                        {work.category}
                      </span>
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        Production Case 0{wIdx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display tracking-tight mb-3">
                      {work.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                      {work.description}
                    </p>

                    {/* Metrics Banner */}
                    <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] mb-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {work.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-[var(--text-muted)] mr-1">Stack:</span>
                    {work.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. SOLUTIONS WE BUILD ACROSS VERTICALS                                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Industry Applications
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              {data.solutionsHeading}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.solutionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.solutions.map((sol, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)] mb-2">
                    {sol.industry}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] space-y-1">
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURES WE BUILD INTO EVERY SYSTEM                                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Engineering Baseline
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              {data.featuresHeading}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {data.features.map((feat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all duration-300"
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] inline-block mb-3">
                  {feat.category}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-display tracking-tight mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TECHNOLOGIES WE DEPLOY                                                 */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
                Technology Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-display">
                {data.technologiesHeading}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md">
              {data.technologiesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.technologies.map((techCat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] space-y-3"
              >
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                  // {techCat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techCat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. OUR 5-STAGE ENGINEERING METHODOLOGY                                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Sprint Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              {data.processHeading}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {data.process.map((step) => (
              <div 
                key={step.step}
                className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[var(--accent)] mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-display tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] text-[11px] font-mono text-[var(--accent)]">
                  // {step.keyOutcome}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WAYS TO WORK WITH US (ENGAGEMENT MODELS)                               */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Flexible Engagement
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              {data.waysToWorkHeading}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.waysToWorkSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {data.waysToWork.map((model, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] mb-1">
                    {model.subtitle}
                  </div>
                  <h3 className="text-xl font-extrabold text-[var(--text-primary)] font-display tracking-tight mb-2">
                    {model.title}
                  </h3>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-mono font-bold mb-4">
                    {model.timeline}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {model.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] space-y-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    Included Deliverables:
                  </div>
                  {model.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Link
                      href="/contact/"
                      className="w-full py-2.5 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--accent)] text-[var(--text-primary)] hover:text-white border border-[var(--border)] text-xs font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <span>Choose {model.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. WHY CHOOSE TECH22BLOCKS                                               */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Why Tech22Blocks
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Why Choose Us Over Conventional Agencies
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              We combine enterprise engineering craft with transparent sprint velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whyChooseUs.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all duration-300"
              >
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] mb-2">
                  // {item.bullet}
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-display tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. TECHNICAL FAQS ACCORDION                                              */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              {data.hero.title} FAQs
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Straightforward answers to common questions about timelines, costs, tech stacks, and IP ownership.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-[var(--canvas)] border border-[var(--border)] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-display">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[var(--accent)] border-[var(--accent)]' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)]/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. EXPLORE OTHER SERVICES                                                */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
                More Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-display">
                Explore Other Engineering Disciplines
              </h3>
            </div>
            <Link
              href="/services/"
              className="text-xs sm:text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}/`}
                className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[var(--accent)]">
                    {item.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2 mt-1.5 leading-relaxed">
                  {item.shortDesc}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FINAL DIRECT CONSULTATION CTA                                         */}
      {/* ========================================================================= */}
      <FinalCTA />

    </div>
  );
}
