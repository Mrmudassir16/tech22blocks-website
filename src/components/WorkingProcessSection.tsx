'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { SectionTransitionShape, SectionBackground } from '@/components/design-system/SectionDecorations';

interface ProcessStep {
  id: string;
  num: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-01',
    num: '01',
    title: 'Discovery Phase',
    description: 'We begin with structured requirement discovery, business domain mapping, and technical feasibility validation to ensure absolute clarity on architecture and milestones before writing code.',
  },
  {
    id: 'step-02',
    num: '02',
    title: 'Design and Development',
    description: 'Data-driven diagnostic and predictive app for improving outcomes. We architect scalable databases, build modular component libraries, and engineer high-performance backend microservices.',
  },
  {
    id: 'step-03',
    num: '03',
    title: 'Maintenance',
    description: 'Ongoing code stewardship, automated dependency updates, database index optimization, and proactive performance monitoring to maintain zero-downtime operations.',
  },
  {
    id: 'step-04',
    num: '04',
    title: 'Deployment',
    description: 'Automated CI/CD deployment pipelines to cloud environments (AWS, Vercel, Docker) with blue-green rollouts, automated rollbacks, and distributed edge CDN delivery.',
  },
  {
    id: 'step-05',
    num: '05',
    title: 'Testing and QA',
    description: 'Comprehensive automated test suites, end-to-end integration tests, static code analysis, and edge-case security verification before enterprise release.',
  },
];

export default function WorkingProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1); // Default to "02. Design and Development"

  return (
    <section 
      id="working-process"
      className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* 1. Dynamic Section Transition Shape (Stepped Shelf Left - User Approved) */}
      <SectionTransitionShape 
        position="top" 
        variant="stepped-left" 
        fillColor="var(--surface-elevated)" 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Accordion List */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header */}
            <div>
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

            {/* Accordion List (WeEvolveIT Central Process Pattern) */}
            <div className="space-y-4 pt-2">
              {PROCESS_STEPS.map((step, idx) => {
                const isOpen = activeStep === idx;

                return (
                  <div 
                    key={step.id}
                    className={`rounded-[var(--radius-card)] transition-all duration-200 border p-5 sm:p-6 ${
                      isOpen 
                        ? 'bg-[var(--surface)] border-[var(--accent)] shadow-md' 
                        : 'bg-[var(--surface)]/60 border-[var(--border)] hover:border-[var(--border-subtle)] hover:bg-[var(--surface)]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-[var(--accent)]' : 'text-[var(--text-primary)] group-hover:text-[var(--accent)]'
                      }`}>
                        {step.num}. {step.title}
                      </span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isOpen ? 'bg-[var(--accent)]/15 text-[var(--accent)]' : 'bg-[var(--surface-elevated)] text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {/* Expanded Body Box */}
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-[var(--border)] text-[var(--text-muted)] text-sm sm:text-base leading-relaxed animate-letter-appear">
                        <p>{step.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Overlapping Oval Ellipse Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center pt-8 lg:pt-14">
            <div className="w-full max-w-[480px] relative">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-full h-[90px] sm:h-[125px] rounded-[100px] flex items-center justify-center text-center px-4 sm:px-8 transition-all duration-200 cursor-pointer ${
                      idx !== 0 ? '-mt-7 sm:-mt-10' : ''
                    } ${
                      isActive
                        ? 'bg-[var(--accent)] text-white border-2 border-white/20 z-20 shadow-[0_10px_30px_rgba(10,133,177,0.35)] scale-[1.02] font-bold text-base sm:text-2xl'
                        : 'bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)] z-10 font-semibold text-sm sm:text-xl shadow-md'
                    }`}
                    style={{
                      position: 'relative',
                    }}
                    aria-label={`Select process step: ${step.title}`}
                  >
                    <span>{step.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
