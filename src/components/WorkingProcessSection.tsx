'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { SectionTransitionShape } from '@/components/design-system/SectionDecorations';
import { 
  Search, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Activity 
} from 'lucide-react';

interface ProcessStep {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '1',
    title: 'Discovery',
    description: 'We understand your business goals, validate technical feasibility, and agree on the architectural roadmap.',
    icon: <Search className="w-5 h-5" />,
  },
  {
    num: '2',
    title: 'Design & Dev',
    description: 'Modular component libraries, clickable UI prototypes, and type-safe full-stack engineering.',
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    num: '3',
    title: 'Testing & QA',
    description: 'Comprehensive automated regression suites, multi-device QA, and edge-case security verification.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    num: '4',
    title: 'Deployment',
    description: 'Automated CI/CD multi-cloud delivery with zero-downtime rollouts and global edge CDN hosting.',
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    num: '5',
    title: 'Maintenance',
    description: 'Proactive 24/7 uptime monitoring, automated dependency patches, and continuous latency optimization.',
    icon: <Activity className="w-5 h-5" />,
  },
];

export default function WorkingProcessSection() {
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setIsInView(entries[0].isIntersecting);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
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
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed">
              A simple, transparent way of working, so you always know what happens next.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ULTRA-CLEAN 5-STEP CONNECTED FLOW (Directly following svss.co.in)         */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* Desktop Connecting Background Track */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-[var(--border)] z-0" />
          
          {/* Desktop Active Animated Connecting Beam */}
          <div 
            className={`hidden lg:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[var(--accent)] via-sky-400 to-[var(--accent)] z-0 transition-transform duration-1000 origin-left ease-out shadow-[0_0_8px_rgba(56,189,248,0.4)] ${
              isInView ? 'scale-x-100' : 'scale-x-0'
            }`} 
          />

          {/* 5 Connected Steps Grid */}
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10 list-none m-0 p-0">
            {PROCESS_STEPS.map((step, idx) => (
              <li 
                key={step.num}
                className="group flex flex-col items-center text-center relative"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                {/* Step Circle with Number */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-[var(--surface-elevated)] border-2 border-[var(--border)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] text-[var(--text-muted)] group-hover:text-white font-mono font-bold text-lg shadow-sm transition-all duration-300 transform-gpu group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(10,133,177,0.35)]">
                  <span>{step.num}</span>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2 tracking-tight">
                  {step.title}
                </h3>

                {/* Step 1-Sentence Short Description */}
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-[240px] m-0">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

        </div>

      </div>
    </section>
  );
}
