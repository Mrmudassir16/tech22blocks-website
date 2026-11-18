'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';

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
      className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] text-white overflow-hidden border-b border-white/[0.08]"
      aria-labelledby="process-heading"
    >
      {/* Background Volumetric Flares */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-sky-500/[0.08] rounded-full blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#0a85b1]/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu" />

      {/* Hairline subtle top ambient glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Accordion List */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest font-mono text-[#38bdf8]">
                  Working Process
                </span>
                <Image 
                  src={getAssetUrl('/images/shape_title_under_line.svg')} 
                  alt="" 
                  width={40} 
                  height={8} 
                  className="inline-block brightness-200"
                />
              </div>

              <h2 id="process-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-tight">
                Our <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-[#0a85b1] bg-clip-text text-transparent">Approach</span>
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-4 pt-2">
              {PROCESS_STEPS.map((step, idx) => {
                const isOpen = activeStep === idx;

                return (
                  <div 
                    key={step.id}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen 
                        ? 'bg-[#0b1120]/90 border-sky-500/40 shadow-[0_0_25px_rgba(14,165,233,0.15)]' 
                        : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04]'
                    } p-5 sm:p-6 backdrop-blur-sm`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className="w-full flex items-center justify-between text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-[#38bdf8]' : 'text-white group-hover:text-[#38bdf8]'
                      }`}>
                        {step.num}. {step.title}
                      </span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isOpen ? 'bg-sky-500/20 text-[#38bdf8]' : 'bg-white/[0.04] text-slate-400 group-hover:text-white'
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
                      <div className="mt-4 pt-4 border-t border-white/[0.08] text-slate-300 text-sm sm:text-base leading-relaxed transition-all duration-300">
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
                    className={`w-full h-[110px] sm:h-[125px] rounded-[100px] flex items-center justify-center text-center px-8 transition-all duration-300 cursor-pointer ${
                      idx !== 0 ? '-mt-9 sm:-mt-10' : ''
                    } ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-500 via-[#0a85b1] to-[#0284c7] text-white border-2 border-sky-300 z-20 shadow-[0_0_35px_rgba(14,165,233,0.45)] scale-[1.02] font-bold text-xl sm:text-2xl'
                        : 'bg-[#0b1120]/90 text-slate-300 border border-white/[0.12] hover:border-sky-400/40 hover:text-white z-10 font-semibold text-lg sm:text-xl backdrop-blur-xl shadow-lg'
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
