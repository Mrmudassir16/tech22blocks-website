'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ArrowRight, 
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
  pct: number;
  title: string;
  image: string;
  shortDesc: string;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-01',
    num: '01',
    pct: 20,
    title: 'Discovery Phase',
    image: 'images/svss/proc-planning.webp',
    shortDesc: 'Structured requirement discovery, technical feasibility validation, and architectural blueprinting before code execution. We establish clear milestone deliverables and product roadmaps.',
    deliverables: ['Scope & Feasibility Analysis', 'Architecture Blueprint', 'Milestone Delivery Roadmap'],
  },
  {
    id: 'step-02',
    num: '02',
    pct: 40,
    title: 'Design and Architecture',
    image: 'images/svss/proc-design.webp',
    shortDesc: 'Modern atomic component systems, high-fidelity clickable Figma prototypes, and clean domain-driven architecture designed for zero tech-debt from day one.',
    deliverables: ['Interactive Design Prototypes', 'Design System & Tokens', 'Database Schema Models'],
  },
  {
    id: 'step-03',
    num: '03',
    pct: 60,
    title: 'Engineering and Development',
    image: 'images/svss/proc-dev.webp',
    shortDesc: 'Agile sprint execution using full-stack TypeScript, native mobile engines (Swift/Kotlin/Flutter), and scalable microservices with daily commits and weekly sprint demos.',
    deliverables: ['Clean Full-Stack Code', 'Automated Unit Test Suites', 'Weekly Working Software Demos'],
  },
  {
    id: 'step-04',
    num: '04',
    pct: 80,
    title: 'Testing and Quality Assurance',
    image: 'images/svss/proc-testing.webp',
    shortDesc: 'Comprehensive automated regression test suites, cross-browser/device responsiveness verification, latency stress audits, and OWASP security vulnerability checks.',
    deliverables: ['Automated End-to-End Tests', 'Cross-Device QA Signoff', 'Security & Latency Audits'],
  },
  {
    id: 'step-05',
    num: '05',
    pct: 100,
    title: 'Deployment and Continuous Scaling',
    image: 'images/svss/proc-launch.webp',
    shortDesc: 'Zero-downtime production cutovers with blue-green CI/CD automation, cloud infrastructure provisioning, store submissions, and 24/7 proactive uptime telemetry.',
    deliverables: ['Automated CI/CD Deployment', 'Store Launch Management', '3-Month Post-Launch Warranty'],
  },
];

export default function WorkingProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  // IntersectionObserver: Active step is driven by the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-home-step'));
            if (!isNaN(idx)) {
              setActiveStep(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    const target = stepRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section 
      id="working-process"
      className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 ms-jr-sec ms-jr-themed transition-colors duration-200"
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
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <div className="mb-2.5">
            <span className="heading-focus-underline text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
              Working Process
            </span>
          </div>

          <div>
            <h2 id="process-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight cursor-default mb-3 font-display">
              <StaggeredText text="How" />{' '}
              <StaggeredText text="We" />{' '}
              <StaggeredText text="Engineer" isShimmer />{' '}
              <StaggeredText text="& Ship" />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal leading-relaxed max-w-xl mx-auto">
              A disciplined, milestone-driven development journey from initial discovery to continuous production scaling.
            </p>
          </div>
        </div>

        {/* Authentic SVSS ms-jr Scroll Journey Grid */}
        <div className="ms-jr">
          
          {/* Left Sticky Stage (.ms-jr-stage) */}
          <div className="ms-jr-stage" aria-hidden="true">
            
            {/* Screen Container with Multi-Layered Stage Images */}
            <div className="ms-jr-screen">
              {PROCESS_STEPS.map((step, sIdx) => {
                const isOn = activeStep === sIdx;
                return (
                  <Image
                    key={sIdx}
                    src={getAssetUrl(step.image)}
                    alt={step.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 550px"
                    priority={sIdx === 0}
                    data-active={isOn ? 'true' : 'false'}
                    className={`object-cover transition-all duration-700 ${
                      isOn ? 'on opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  />
                );
              })}

              {/* Live Badge that lights up at 100% Launch Stage */}
              <span className={`ms-jr-live ${activeStep === 4 ? 'on' : ''}`}>
                Production Live &amp; Scaling
              </span>
            </div>

            {/* Progress Meter with Stage Name and Percentage */}
            <div className="ms-jr-meter">
              <span className="ms-jr-stagename">
                {PROCESS_STEPS[activeStep]?.title}
              </span>
              <span className="ms-jr-pct">
                <b>{PROCESS_STEPS[activeStep]?.pct}</b>%
              </span>
              <span className="ms-jr-bar">
                <i style={{ width: `${PROCESS_STEPS[activeStep]?.pct}%` }} />
              </span>
            </div>

          </div>

          {/* Right Steps Column with Scroll Heights (.ms-jr-steps) */}
          <ol className="ms-jr-steps">
            {PROCESS_STEPS.map((step, idx) => {
              const isOn = activeStep === idx;
              return (
                <li
                  key={step.id}
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  data-home-step={idx}
                  onClick={() => handleStepClick(idx)}
                  className={`${isOn ? 'on' : ''}`}
                >
                  <span className="ms-jr-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.shortDesc}</p>

                  {/* Deliverables Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {step.deliverables.map((item, dIdx) => (
                      <span 
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>

        </div>

      </div>
    </section>
  );
}
