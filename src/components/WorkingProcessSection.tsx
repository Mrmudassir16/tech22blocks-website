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
  navTitle: string;
  shortDesc: string;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-01',
    num: '01',
    title: 'Discovery Phase',
    navTitle: 'Discovery',
    shortDesc: 'Structured requirement discovery, technical feasibility validation, and architectural blueprinting before code execution.',
    deliverables: ['Scope & Feasibility', 'Architecture Blueprint', 'Milestone Roadmap'],
  },
  {
    id: 'step-02',
    num: '02',
    title: 'Design and Development',
    navTitle: 'Design & Dev',
    shortDesc: 'Modern atomic component systems, full-stack TypeScript engineering, and scalable backend microservices.',
    deliverables: ['Interactive Prototypes', 'Full-Stack Code', 'Git Code Reviews'],
  },
  {
    id: 'step-03',
    num: '03',
    title: 'Testing and QA',
    navTitle: 'Testing & QA',
    shortDesc: 'Comprehensive automated test suites, multi-device responsiveness testing, and security vulnerability checks.',
    deliverables: ['Automated Regression', 'Cross-Device QA', 'Security Compliance'],
  },
  {
    id: 'step-04',
    num: '04',
    title: 'Deployment',
    navTitle: 'Deployment',
    shortDesc: 'Automated CI/CD multi-cloud production rollouts with blue-green delivery and zero-downtime cutover.',
    deliverables: ['Zero-Downtime CI/CD', 'Edge CDN Rollout', 'Health Telemetry'],
  },
  {
    id: 'step-05',
    num: '05',
    title: 'Maintenance',
    navTitle: 'Maintenance',
    shortDesc: 'Proactive 24/7 uptime monitoring, security patching, and continuous database & latency optimization.',
    deliverables: ['24/7 Monitoring', 'Security Patches', 'Sub-100ms Tuning'],
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

  const getStepIcon = (idx: number, className = 'w-4 h-4 sm:w-5 sm:h-5') => {
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
      className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Dynamic Section Transition Shape (Stepped Shelf Left) */}
      <SectionTransitionShape 
        position="top" 
        variant="stepped-left" 
        fillColor="var(--surface-elevated)" 
      />

      {/* Ambient Radial Flare */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-[var(--accent)]/[0.04] rounded-full blur-[120px] pointer-events-none transform-gpu" 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
              Working Process
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={42} 
              height={8} 
              className="inline-block brightness-150"
            />
          </div>

          <div>
            <h2 id="process-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-tight cursor-default mb-2">
              <StaggeredText text="How" />{' '}
              <StaggeredText text="We" />{' '}
              <StaggeredText text="Engineer" isShimmer />{' '}
              <StaggeredText text="& Ship" />
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed max-w-xl mx-auto">
              A disciplined, milestone-driven development pipeline from initial architecture to continuous scaling.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT HORIZONTAL STEPPER & FOCUSED MILESTONE FLOW                       */}
        {/* ========================================================================= */}
        <div 
          className="rounded-2xl sm:rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-lg p-4 sm:p-6 lg:p-7 relative overflow-hidden transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* 1. Horizontal Stepper Stations Track */}
          <div className="relative mb-6 pb-2">
            
            {/* Desktop Connecting Background Line */}
            <div className="hidden md:block absolute top-6 left-10 right-10 h-[2px] bg-[var(--border)] rounded-full -translate-y-1/2 z-0" />
            
            {/* Desktop Active Glowing Animated Beam */}
            <div 
              className="hidden md:block absolute top-6 left-10 h-[2px] bg-gradient-to-r from-[var(--accent)] via-sky-400 to-[var(--accent)] rounded-full -translate-y-1/2 z-0 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              style={{
                width: `calc(${(activeStep / (PROCESS_STEPS.length - 1)) * 100}% - 40px)`,
              }}
            />

            {/* Stepper Milestone Stations */}
            <div 
              ref={stepperScrollRef}
              className="flex md:grid md:grid-cols-5 items-center justify-between gap-2.5 sm:gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none snap-x relative z-10"
            >
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = idx < activeStep;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`flex-shrink-0 snap-center group/station flex flex-col items-center text-center p-2 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none min-w-[105px] md:min-w-0 ${
                      isActive 
                        ? 'bg-[var(--surface-elevated)] ring-1 ring-[var(--accent)]/40 shadow-sm' 
                        : 'hover:bg-[var(--surface-elevated)]/50'
                    }`}
                    aria-selected={isActive}
                    aria-label={`Milestone ${step.num}: ${step.title}`}
                  >
                    {/* Circle Node Icon */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 relative ${
                      isActive
                        ? 'bg-[var(--accent)] text-white ring-4 ring-sky-500/20 shadow-[0_0_14px_rgba(10,133,177,0.4)] scale-105'
                        : isPassed
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30'
                        : 'bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)] group-hover/station:border-[var(--accent)]/50 group-hover/station:text-[var(--text-primary)]'
                    }`}>
                      {isPassed ? (
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        getStepIcon(idx)
                      )}

                      {/* Small Step Number Floating Pill */}
                      <span className={`absolute -top-1 -right-1 px-1 py-0.2 rounded text-[9px] font-mono font-bold uppercase ${
                        isActive
                          ? 'bg-white text-[var(--accent)] shadow-sm'
                          : 'bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)]'
                      }`}>
                        {step.num}
                      </span>
                    </div>

                    {/* Step Name */}
                    <span className={`mt-2 text-xs font-bold tracking-tight transition-colors line-clamp-1 ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] group-hover/station:text-[var(--accent)]'
                    }`}>
                      {step.navTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Sleek, Focused Active Stage Console (Short & Concise) */}
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden transition-all duration-300">
            
            {/* Top Row: Phase Tag & Navigation Controls */}
            <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-[var(--border)]">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                <Sparkles className="w-3 h-3 text-[var(--accent)]" />
                <span>Phase {currentStep.num} // {currentStep.title}</span>
              </div>

              {/* Prev / Next & Step Indicator */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1.5 mr-2">
                  {PROCESS_STEPS.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeStep === idx 
                          ? 'w-5 bg-[var(--accent)]' 
                          : 'w-2 bg-[var(--border)] hover:bg-[var(--text-muted)]'
                      }`}
                      aria-label={`Jump to phase ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--surface)] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous Phase"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white flex items-center justify-center shadow-sm transition-all cursor-pointer"
                  aria-label="Next Phase"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Main Content: Title & Concise Summary */}
            <div className="space-y-1.5 mb-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {currentStep.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-3xl">
                {currentStep.shortDesc}
              </p>
            </div>

            {/* Bottom Row: Key Deliverables as Compact Inline Pills */}
            <div className="pt-2.5 border-t border-[var(--border)]/70 flex flex-wrap items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mr-1">
                Deliverables:
              </span>
              {currentStep.deliverables.map((deliv, i) => (
                <div 
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[11px] sm:text-xs font-medium text-[var(--text-primary)]"
                >
                  <CheckCircle2 className="w-3 h-3 text-[var(--accent)] flex-shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
