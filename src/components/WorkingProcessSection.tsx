'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Plus, 
  Minus, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Search, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Activity,
  Layers,
  Sparkles
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
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-01',
    num: '01',
    title: 'Discovery Phase',
    tagline: 'Requirement Discovery & Architectural Blueprint',
    description: 'We begin with structured requirement discovery, business domain mapping, and technical feasibility validation to ensure absolute clarity on architecture and milestones before writing code.',
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

  // Intersection Observer: Start auto-cycle and trigger chain when scrolled into view
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

  // Automatic Step Progression: Moves one step after another every 4s unless user hovers
  useEffect(() => {
    if (!isInView || isHovered) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isInView, isHovered]);

  const currentStep = PROCESS_STEPS[activeStep];

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Search className="w-5 h-5" />;
      case 1: return <Code2 className="w-5 h-5" />;
      case 2: return <ShieldCheck className="w-5 h-5" />;
      case 3: return <Rocket className="w-5 h-5" />;
      case 4: return <Activity className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
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
        className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[var(--accent)]/[0.04] rounded-full blur-[140px] pointer-events-none transform-gpu" 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
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
            <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-tight cursor-default">
              <StaggeredText text="Our" />{' '}
              <StaggeredText text="Approach" isShimmer />
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Step Accordion List */}
          <div className="lg:col-span-5 space-y-3.5">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div 
                  key={step.id}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isActive 
                      ? 'bg-[var(--surface)] border-[var(--accent)] shadow-lg shadow-sky-900/10 dark:shadow-sky-950/40 translate-x-1' 
                      : 'bg-[var(--surface)]/70 border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface)]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left group cursor-pointer"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all ${
                        isActive
                          ? 'bg-[var(--accent)] text-white shadow-md'
                          : 'bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)] group-hover:text-[var(--accent)]'
                      }`}>
                        {step.num}
                      </span>
                      <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isActive ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] group-hover:text-[var(--accent)]'
                      }`}>
                        {step.title}
                      </span>
                    </div>

                    <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-[var(--accent)]/15 text-[var(--accent)]' : 'bg-[var(--surface-elevated)] text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                    }`}>
                      {isActive ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Body */}
                  {isActive && (
                    <div className="px-5 pb-5 pt-1 text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed border-t border-[var(--border)] animate-letter-appear">
                      <p>{step.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Connected Interactive Chain Pipeline Console */}
          <div 
            className="lg:col-span-7"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl relative overflow-hidden transition-all duration-300">
              
              {/* 1. Connected Chain Step Tracker (Top Connected Progress Bar) */}
              <div className="relative mb-8 pb-6 border-b border-[var(--border)]">
                
                {/* Connecting Line Track */}
                <div className="absolute top-5 left-6 right-6 h-[3px] bg-[var(--border)] rounded-full -translate-y-1/2 z-0" />
                
                {/* Active Glowing Connected Beam Line */}
                <div 
                  className="absolute top-5 left-6 h-[3px] bg-gradient-to-r from-[var(--accent)] to-sky-400 rounded-full -translate-y-1/2 z-0 transition-all duration-500 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                  style={{
                    width: `calc(${(activeStep / (PROCESS_STEPS.length - 1)) * 100}% - 48px)`,
                  }}
                />

                {/* 5 Connected Step Milestone Nodes */}
                <div className="relative z-10 flex items-center justify-between">
                  {PROCESS_STEPS.map((step, idx) => {
                    const isPassedOrCurrent = idx <= activeStep;
                    const isCurrent = idx === activeStep;

                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => setActiveStep(idx)}
                        className="group/node flex flex-col items-center cursor-pointer focus:outline-none"
                        aria-label={`Go to step ${step.num}: ${step.title}`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                          isCurrent
                            ? 'bg-[var(--accent)] text-white ring-4 ring-sky-500/20 shadow-[0_0_16px_rgba(10,133,177,0.5)] scale-110'
                            : isPassedOrCurrent
                            ? 'bg-[var(--accent)] text-white'
                            : 'bg-[var(--surface-elevated)] border-2 border-[var(--border)] text-[var(--text-muted)] group-hover/node:border-[var(--accent)]'
                        }`}>
                          {step.num}
                        </div>
                        <span className={`text-[11px] font-semibold mt-2 hidden sm:block tracking-tight transition-colors ${
                          isCurrent ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-muted)] group-hover/node:text-[var(--text-primary)]'
                        }`}>
                          {step.title.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Main Live Stage Card for the Active Step */}
              <div className="space-y-6">
                
                {/* Phase Indicator & Auto-Cycle Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] animate-pulse" />
                    <span>Phase {currentStep.num} // {currentStep.title}</span>
                  </div>

                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Step {activeStep + 1} of {PROCESS_STEPS.length}
                  </span>
                </div>

                {/* Step Headline & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">
                    {currentStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[var(--accent)] font-medium">
                    {currentStep.tagline}
                  </p>
                </div>

                {/* Detailed Description */}
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Key Deliverables & Engineering Architecture Highlights */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-3">
                    Architectural Milestones & Deliverables
                  </span>
                  <div className="space-y-2.5">
                    {currentStep.highlights.map((h, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs sm:text-sm font-medium text-[var(--text-primary)] shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Auto-Cycle Timer Progress Line */}
                <div className="pt-4">
                  <div className="w-full h-1 bg-[var(--border)] rounded-full overflow-hidden">
                    <div 
                      key={activeStep}
                      className="h-full bg-[var(--accent)] rounded-full animate-progress-fill"
                      style={{
                        animationDuration: '4s',
                      }}
                    />
                  </div>
                </div>

                {/* Action Controls: Previous / Next Step Buttons */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-xs sm:text-sm font-bold text-white shadow-md shadow-sky-900/20 transition-all cursor-pointer group/next"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/next:translate-x-1" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
