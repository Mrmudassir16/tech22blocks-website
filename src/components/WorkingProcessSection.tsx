'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Search, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Activity,
  Layers,
  Sparkles,
  Check
} from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { SectionTransitionShape } from '@/components/design-system/SectionDecorations';

interface ProcessStep {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  deliverableBadge: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-01',
    num: '01',
    title: 'Discovery Phase',
    tagline: 'Requirement Discovery & Architectural Blueprint',
    description: 'We begin with structured requirement discovery, business domain mapping, and technical feasibility validation to ensure absolute clarity on architecture and milestones before writing code.',
    deliverableBadge: 'Blueprint & Feasibility Scope',
    highlights: [
      'Business domain mapping & feasibility scope validation',
      'Technical architecture blueprint & database schema planning',
      'Sprint milestone roadmap & risk mitigation framework',
    ],
  },
  {
    id: 'step-02',
    num: '02',
    title: 'Design and Development',
    tagline: 'Iterative Engineering & Modern Component Architecture',
    description: 'Data-driven diagnostic and predictive app for improving outcomes. We architect scalable databases, build modular component libraries, and engineer high-performance backend microservices.',
    deliverableBadge: 'Full-Stack Architecture',
    highlights: [
      'Modular atomic design systems & clickable interactive prototypes',
      'Full-stack TypeScript engineering & type-safe API services',
      'Clean Git repository access with continuous code reviews',
    ],
  },
  {
    id: 'step-03',
    num: '03',
    title: 'Testing and QA',
    tagline: 'Automated Regression Suites & Security Verification',
    description: 'Comprehensive automated test suites, end-to-end integration tests, static code analysis, and edge-case security verification before enterprise release.',
    deliverableBadge: 'Automated Regression Suites',
    highlights: [
      'Automated unit, integration, and E2E regression test suites',
      'Multi-device responsiveness & Core Web Vitals profiling',
      'Static code analysis, vulnerability checks & data compliance',
    ],
  },
  {
    id: 'step-04',
    num: '04',
    title: 'Deployment',
    tagline: 'Zero-Downtime CI/CD Multi-Cloud Delivery',
    description: 'Automated CI/CD deployment pipelines to cloud environments (AWS, Vercel, Docker) with blue-green rollouts, automated rollbacks, and distributed edge CDN delivery.',
    deliverableBadge: 'Multi-Cloud Production CI/CD',
    highlights: [
      'Zero-downtime blue-green production deployment pipelines',
      'Global edge CDN distribution with sub-second asset delivery',
      'Automated rollback safety triggers & telemetry health checks',
    ],
  },
  {
    id: 'step-05',
    num: '05',
    title: 'Maintenance',
    tagline: 'Proactive Stewardship & Continuous Optimization',
    description: 'Ongoing code stewardship, automated dependency updates, database index optimization, and proactive performance monitoring to maintain zero-downtime operations.',
    deliverableBadge: '24/7 SLA Telemetry & Updates',
    highlights: [
      '24/7 uptime monitoring & automated error alerting systems',
      'Proactive security patching & package dependency upgrades',
      'Database index tuning & sub-100ms API latency maintenance',
    ],
  },
];

export default function WorkingProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stepperScrollRef = useRef<HTMLDivElement>(null);

  // Intersection Observer: Start auto-cycle only when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setIsInView(entries[0].isIntersecting);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Automatic Step Progression: Moves one step after another every 4.5s unless hovered
  useEffect(() => {
    if (!isInView || isHovered) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isInView, isHovered]);

  // Keep active step scrolled into view on mobile
  useEffect(() => {
    if (stepperScrollRef.current) {
      const activeEl = stepperScrollRef.current.children[activeStep] as HTMLElement;
      if (activeEl) {
        const container = stepperScrollRef.current;
        const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeStep]);

  const currentStep = PROCESS_STEPS[activeStep];

  const getStepIcon = (idx: number, className = 'w-5 h-5') => {
    switch (idx) {
      case 0: return <Search className={className} />;
      case 1: return <Code2 className={className} />;
      case 2: return <ShieldCheck className={className} />;
      case 3: return <Rocket className={className} />;
      case 4: return <Activity className={className} />;
      default: return <Layers className={className} />;
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="working-process"
      className="relative pt-8 sm:pt-12 pb-14 sm:pb-20 bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* 1. Dynamic Section Transition Shape (Stepped Shelf Left) */}
      <SectionTransitionShape 
        position="top" 
        variant="stepped-left" 
        fillColor="var(--surface-elevated)" 
      />

      {/* Ambient Radial Flare */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[var(--accent)]/[0.04] rounded-full blur-[140px] pointer-events-none transform-gpu" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-sky-500/[0.03] rounded-full blur-[120px] pointer-events-none transform-gpu" 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-sm sm:text-base font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
              Working Process
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={48} 
              height={9} 
              className="inline-block brightness-150"
            />
          </div>

          <div>
            <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-tight cursor-default mb-3">
              <StaggeredText text="How" />{' '}
              <StaggeredText text="We" />{' '}
              <StaggeredText text="Engineer" isShimmer />{' '}
              <StaggeredText text="& Ship" />
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl mx-auto">
              Our end-to-end production software engineering pipeline, delivering transparency, statutory compliance, and zero architectural shortcuts from initial blueprint to continuous scaling.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL STEPPER & CONNECTING FLOW: Single Unified Interactive Pipeline */}
        {/* ========================================================================= */}
        <div 
          className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl p-5 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* 1. Full-Width Horizontal Stepper Track & Connecting Glowing Beam */}
          <div className="relative mb-8 sm:mb-10 pb-4">
            
            {/* Desktop Connecting Background Line */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-[3px] bg-[var(--border)] rounded-full -translate-y-1/2 z-0" />
            
            {/* Desktop Active Glowing Animated Beam */}
            <div 
              className="hidden md:block absolute top-7 left-12 h-[3px] bg-gradient-to-r from-[var(--accent)] via-sky-400 to-[var(--accent)] rounded-full -translate-y-1/2 z-0 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(56,189,248,0.6)]"
              style={{
                width: `calc(${(activeStep / (PROCESS_STEPS.length - 1)) * 100}% - 48px)`,
              }}
            />

            {/* Stepper Milestone Stations (Horizontal Scrollable on Mobile, 5-col on Desktop) */}
            <div 
              ref={stepperScrollRef}
              className="flex md:grid md:grid-cols-5 items-center justify-between gap-3 sm:gap-4 overflow-x-auto pb-3 md:pb-0 scrollbar-none snap-x relative z-10"
            >
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = idx < activeStep;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`flex-shrink-0 snap-center group/station flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl transition-all duration-300 cursor-pointer focus:outline-none min-w-[130px] md:min-w-0 ${
                      isActive 
                        ? 'bg-[var(--surface-elevated)] ring-1 ring-[var(--accent)]/40 shadow-md' 
                        : 'hover:bg-[var(--surface-elevated)]/50'
                    }`}
                    aria-selected={isActive}
                    aria-label={`Milestone ${step.num}: ${step.title}`}
                  >
                    {/* Circle Node Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 relative ${
                      isActive
                        ? 'bg-[var(--accent)] text-white ring-4 ring-sky-500/20 shadow-[0_0_20px_rgba(10,133,177,0.45)] scale-110'
                        : isPassed
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30'
                        : 'bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)] group-hover/station:border-[var(--accent)]/50 group-hover/station:text-[var(--text-primary)]'
                    }`}>
                      {isPassed ? (
                        <Check className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        getStepIcon(idx, 'w-5 h-5 sm:w-6 sm:h-6')
                      )}

                      {/* Small Step Number Floating Pill */}
                      <span className={`absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase ${
                        isActive
                          ? 'bg-white text-[var(--accent)] shadow-sm'
                          : 'bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)]'
                      }`}>
                        {step.num}
                      </span>
                    </div>

                    {/* Step Name */}
                    <span className={`mt-2.5 text-xs sm:text-sm font-bold tracking-tight transition-colors line-clamp-1 ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] group-hover/station:text-[var(--accent)]'
                    }`}>
                      {step.title}
                    </span>

                    {/* Concise Phase Tag */}
                    <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] tracking-tight hidden sm:block mt-0.5">
                      {step.deliverableBadge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Main Active Stage Card: Rich Architectural Deep Dive (Single Unified View) */}
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300">
            
            {/* Top Stage Bar: Phase Chip, Deliverable Badge, Step Counter */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[var(--border)]">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] animate-pulse" />
                  Phase {currentStep.num} of 05
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
                  {currentStep.deliverableBadge}
                </span>
              </div>

              <div className="text-xs font-mono font-semibold text-[var(--text-muted)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Enterprise Production Standard</span>
              </div>
            </div>

            {/* Stage Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Headline, Architectural Tagline & Narrative */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono text-[var(--accent)] font-semibold">
                    {currentStep.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pt-1">
                  {currentStep.description}
                </p>

                {/* Mobile / Inline Milestone Progress Bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-1.5">
                    <span>Engineering Milestone Progress</span>
                    <span>{((activeStep + 1) * 20)}% Pipeline Complete</span>
                  </div>
                  <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <div 
                      key={activeStep}
                      className="h-full bg-gradient-to-r from-[var(--accent)] to-sky-400 rounded-full transition-all duration-500"
                      style={{
                        width: `${((activeStep + 1) * 20)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Key Deliverables & Architectural Checkpoints */}
              <div className="lg:col-span-5 bg-[var(--surface)] p-5 sm:p-6 rounded-2xl border border-[var(--border)] space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold">
                    Phase Deliverables & Scope
                  </span>
                  <span className="text-[11px] font-mono text-[var(--accent)] font-semibold">
                    Verified Gate
                  </span>
                </div>

                <div className="space-y-2.5">
                  {currentStep.highlights.map((highlight, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs sm:text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--accent)]/40"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Controls Bar: Previous / Next & Autoplay Indicator */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Stepper Dots & Pause Reminder */}
              <div className="flex items-center gap-2">
                {PROCESS_STEPS.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeStep === idx 
                        ? 'w-8 bg-[var(--accent)]' 
                        : 'w-2.5 bg-[var(--border)] hover:bg-[var(--text-muted)]'
                    }`}
                    aria-label={`Jump to phase ${idx + 1}`}
                  />
                ))}
                <span className="ml-3 text-[11px] font-mono text-[var(--text-muted)] hidden md:inline">
                  {isHovered ? '(Auto-cycle paused on hover)' : '(Auto-advancing every 4.5s)'}
                </span>
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] transition-all cursor-pointer"
                  aria-label="Previous Phase"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-xs sm:text-sm font-bold text-white shadow-md shadow-sky-900/20 transition-all cursor-pointer group/next"
                  aria-label="Next Phase"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/next:translate-x-1" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
