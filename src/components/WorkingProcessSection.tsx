'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileCode2, 
  GitBranch, 
  ShieldCheck, 
  Rocket, 
  Cpu, 
  Terminal 
} from 'lucide-react';
import { StarWatermark } from '@/components/StarEmblem';

interface ProcessStep {
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: React.ElementType;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery & Architecture Blueprint',
    shortDesc: 'System architecture, API contracts, and technology stack selection.',
    fullDesc: 'Before writing a single line of production code, our technical leadership evaluates technical trade-offs, data structures, and infrastructure requirements to prevent costly architectural re-writes.',
    deliverables: [
      'Comprehensive Architecture Blueprint',
      'Normalized Database Schemas & API Contracts',
      'Realistic Delivery Milestone Timeline',
    ],
    icon: FileCode2,
  },
  {
    num: '02',
    title: 'Modular Engineering & Sprints',
    shortDesc: 'Agile sprint cadence with shared Git repositories and clear PR reviews.',
    fullDesc: 'We build in transparent weekly sprint cycles. Clients have direct access to shared Git repositories, daily development commits, and continuous integration pipelines.',
    deliverables: [
      'Direct Access to Shared Git Repositories',
      'Weekly Production Demo Builds',
      'Clean, Documented Modular Codebase',
    ],
    icon: GitBranch,
  },
  {
    num: '03',
    title: 'Testing, Security & Verification',
    shortDesc: 'Automated test suites, security checks, and zero-regression verification.',
    fullDesc: 'Every feature undergoes automated unit testing, end-to-end integration tests, load simulation, and static code security analysis before entering staging.',
    deliverables: [
      'Automated Unit & End-to-End Test Suites',
      'Security Baseline & Statutory Compliance Check',
      'Performance & Load-Time Profiling',
    ],
    icon: ShieldCheck,
  },
  {
    num: '04',
    title: 'Production Deployment & Scale',
    shortDesc: 'Automated CI/CD pipelines, cloud orchestration, and telemetry monitoring.',
    fullDesc: 'We deploy to production using automated CI/CD pipelines, zero-downtime blue/green releases, and real-time observability telemetry to ensure long-term stability.',
    deliverables: [
      'Automated CI/CD Cloud Deployment',
      'Real-Time Observability & Telemetry Dashboards',
      'Complete Code & Infrastructure Handover',
    ],
    icon: Rocket,
  },
];

export default function WorkingProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = PROCESS_STEPS[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section 
      className="relative py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 overflow-hidden" 
      aria-labelledby="working-process-heading"
    >
      <StarWatermark size={600} position="bottom-left" variant="blue" opacity={0.02} rotate={20} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a85b1] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Working Process
            </span>
          </div>

          <h2 id="working-process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Our Four-Stage Engineering Methodology
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A transparent, accountable approach to turning complex business requirements into production software that ships reliably.
          </p>
        </div>

        {/* Techco-Inspired Overlapping / Connected Step Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            const StepIcon = step.icon;

            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`relative p-6 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#0a85b1] text-white border-[#0a85b1] shadow-xl shadow-[#0a85b1]/20 scale-102 ring-2 ring-sky-300/40'
                    : 'bg-white text-slate-800 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                }`}
              >
                {/* Step Index & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-mono font-extrabold ${
                    isSelected ? 'text-sky-200' : 'text-slate-300'
                  }`}>
                    {step.num}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0a85b1]'
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Step Title & Teaser */}
                <div>
                  <h3 className={`text-base font-bold mb-1 leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-950'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-sky-100' : 'text-slate-500'
                  }`}>
                    {step.shortDesc}
                  </p>
                </div>

                {/* Active Indicator Arrow */}
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono">
                  <span className={isSelected ? 'text-white font-semibold' : 'text-slate-400'}>
                    {isSelected ? 'Currently Viewing' : 'Click to inspect'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : 'text-slate-400'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel (Expands Smoothly) */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Detail Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#0a85b1] bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                  Phase {current.num} &bull; Execution Focus
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Tech22Blocks Production Standard
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {current.title}
              </h4>

              <p className="text-base text-slate-600 leading-relaxed">
                {current.fullDesc}
              </p>
            </div>

            {/* Right: Key Phase Deliverables */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 block">
                Key Phase Deliverables:
              </span>
              <ul className="space-y-2.5">
                {current.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
