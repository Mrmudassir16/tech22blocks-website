'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

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
    description: 'Data-driven diagnostic and predictive planning for improving architectural outcomes. We define technical requirements, database schemas, and milestone roadmaps before development starts.',
  },
  {
    id: 'step-02',
    num: '02',
    title: 'Design and Development',
    description: 'Modular engineering sprints with direct access to shared Git repositories, daily code commits, clean documentation, and automated continuous integration pipelines.',
  },
  {
    id: 'step-03',
    num: '03',
    title: 'Maintenance',
    description: 'Proactive system monitoring, dependency patches, edge performance profiling, and continuous reliability support to ensure long-term stability without regressions.',
  },
  {
    id: 'step-04',
    num: '04',
    title: 'Deployment',
    description: 'Automated CI/CD cloud orchestration, zero-downtime blue/green rollouts, containerized scaling, and comprehensive infrastructure telemetry handover.',
  },
  {
    id: 'step-05',
    num: '05',
    title: 'Testing and QA',
    description: 'Automated unit test coverage, end-to-end integration simulation, API contract validation, and security compliance verification to certify production readiness.',
  },
];

export default function WorkingProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1); // Default to step 02 as in Techco screenshot

  return (
    <section 
      id="working-process"
      className="relative py-24 lg:py-32 bg-[#F2F6FA] overflow-hidden" 
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, and Interactive Accordion */}
          <div className="lg:col-span-6">
            
            {/* Eyebrow and Heading with Techco Underline Shape */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0044EB]">
                  Working Process
                </span>
                <Image 
                  src="/images/shape_title_under_line.svg" 
                  alt="" 
                  width={40} 
                  height={8} 
                  className="inline-block"
                />
              </div>

              <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#02093F] tracking-tight leading-tight">
                Our <span className="text-[#0044EB]">Approach</span>
              </h2>
            </div>

            {/* Accordion List (Techco Exact Style) */}
            <div className="space-y-4">
              {PROCESS_STEPS.map((step, idx) => {
                const isOpen = activeStep === idx;

                return (
                  <div 
                    key={step.id}
                    className="border-b border-slate-200/90 pb-4 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className="w-full flex items-center justify-between text-left py-3 group cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-[#0044EB]' : 'text-[#02093F] group-hover:text-[#0044EB]'
                      }`}>
                        {step.num}. {step.title}
                      </span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? 'text-[#0044EB]' : 'text-slate-400 group-hover:text-[#0044EB]'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-5 h-5 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {/* Expanded Body Box (Techco Light Blue Bubble) */}
                    {isOpen && (
                      <div className="mt-3 p-5 sm:p-6 rounded-xl bg-[#E6F0FA] text-[#02093F] text-sm sm:text-base leading-relaxed transition-all duration-300">
                        <p>{step.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Overlapping Oval / Ellipse Ring Diagram (Exact Techco Representation) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center pt-8 lg:pt-0">
            <div className="w-full max-w-[460px] relative">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-full h-[110px] sm:h-[125px] rounded-[100px] flex items-center justify-center text-center px-6 transition-all duration-300 cursor-pointer ${
                      idx !== 0 ? '-mt-9 sm:-mt-10' : ''
                    } ${
                      isActive
                        ? 'bg-[#0044EB] text-white border-2 border-[#0044EB] z-20 shadow-xl shadow-blue-600/30 scale-102 font-bold text-xl sm:text-2xl'
                        : 'bg-white text-[#02093F] border border-[#02093F]/80 hover:border-[#0044EB] hover:text-[#0044EB] z-10 font-semibold text-lg sm:text-xl'
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
