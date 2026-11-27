'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, RotateCw, ExternalLink, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  monogram: string;
  colorScheme: string;
  linkedin: string;
  bio: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'shivasai',
    name: 'Shivasai Adepu',
    role: 'Director / CEO',
    department: 'Product & Architecture',
    monogram: 'SA',
    colorScheme: 'from-sky-500 to-blue-700',
    linkedin: COMPANY.leadership[0]?.linkedin || 'https://www.linkedin.com/in/shivasaiadepu/',
    bio: 'Co-founded Tech22Blocks under RRK Software Technologies. Leads engineering architecture, modern TypeScript full-stack systems, proprietary AI R&D including VoiSage AI, and technical strategy for enterprise client platforms.',
  },
  {
    id: 'rajkumar',
    name: 'Rajkumar Adepu',
    role: 'Director / Chairman',
    department: 'Governance & Strategy',
    monogram: 'RA',
    colorScheme: 'from-blue-600 to-slate-800',
    linkedin: 'https://www.linkedin.com/company/tech22blocks',
    bio: 'Brings decades of seasoned business perspective, operational wisdom, and disciplined corporate governance to ensure enduring partner relationships and organizational stability.',
  },
  {
    id: 'ai-lead',
    name: 'AI Systems Architect',
    role: 'VP of AI & Cloud Architecture',
    department: 'Cloud & Intelligence',
    monogram: 'AI',
    colorScheme: 'from-teal-500 to-emerald-700',
    linkedin: 'https://www.linkedin.com/company/tech22blocks',
    bio: 'Oversees distributed backend microservices, autonomous LLM pipelines, and automated cloud CI/CD infrastructures, maintaining a sub-100ms latency standard across all systems.',
  },
  {
    id: 'design-lead',
    name: 'Lead Product Designer',
    role: 'Head of UI/UX & Design Systems',
    department: 'Experience & Systems',
    monogram: 'UX',
    colorScheme: 'from-violet-500 to-purple-800',
    linkedin: 'https://www.linkedin.com/company/tech22blocks',
    bio: 'Champions atomic design systems, human-centered product interfaces, and accessible fluid micro-interactions across both iOS/Android mobile and modern web ecosystems.',
  },
];

export default function AboutLeadershipTeam() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const { foundersVision } = COMPANY;

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="leadership" className="relative py-10 sm:py-14 lg:py-16 bg-[var(--canvas)] text-[var(--text-primary)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Leadership Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div>
            <span className="heading-focus-underline text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
              Leadership &amp; Heritage
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
            <StaggeredText text="Our" />{' '}
            <StaggeredText text="Leadership" isShimmer />
          </h2>
        </div>

        {/* Father & Son: One Vision (Placed directly under Leadership, above Team Members) */}
        <div id="founders" className="mb-12 sm:mb-16 pb-10 sm:pb-12 border-b border-[var(--border)]">
          <div className="max-w-3xl mb-7 sm:mb-9">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display">
              <StaggeredText text="Father & Son." />{' '}
              <StaggeredText text="One Vision." isShimmer />
            </h3>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-[var(--text-muted)] font-medium">
              {foundersVision.supportingHeading}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Father & Son Photograph */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--border)] bg-[var(--surface)]">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={getAssetUrl('/images/founders-father-son.jpg')}
                    alt="Rajkumar Adepu (Director/Chairman) and Shivasai Adepu (Director/CEO) - Tech22Blocks Founders"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover object-top"
                  />
                </div>

                <div className="bg-[var(--surface)] text-[var(--text-primary)] p-5 sm:p-6 border-t border-[var(--border)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
                    <div className="pt-2 sm:pt-0 sm:pr-4">
                      <p className="text-xs uppercase tracking-wider font-mono text-[var(--accent)] font-semibold">Director &amp; CEO</p>
                      <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1 font-display">Shivasai Adepu</h4>
                      <p className="text-xs text-[var(--text-muted)] mt-1">Product Architecture &amp; Technology</p>
                      <a
                        href="https://www.linkedin.com/in/shivasaiadepu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2.5 inline-flex items-center text-xs font-mono font-semibold text-[var(--accent)] hover:underline transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5 mr-1" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>

                    <div className="pt-4 sm:pt-0 sm:pl-4">
                      <p className="text-xs uppercase tracking-wider font-mono text-[var(--accent)] font-semibold">Director &amp; Chairman</p>
                      <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1 font-display">Rajkumar Adepu</h4>
                      <p className="text-xs text-[var(--text-muted)] mt-1">Corporate Governance &amp; Strategy</p>
                      <span className="mt-2.5 inline-flex items-center text-xs font-mono text-[var(--text-muted)]">
                        RRK Software Technologies Pvt. Ltd.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Strategic Pillars */}
            <div className="lg:col-span-6 space-y-5">
              <div className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base space-y-4">
                {foundersVision.narrative.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "text-base sm:text-lg font-medium text-[var(--text-primary)] leading-snug" : "text-[var(--text-muted)]"}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                  <div className="flex items-center space-x-2 text-[var(--text-primary)] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                    <span>Two Generations of Thinking</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                    Combining disciplined long-term operational experience with modern engineering methods.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                  <div className="flex items-center space-x-2 text-[var(--text-primary)] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                    <span>Enduring Trust</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                    More than a contract &mdash; a relationship built on integrity, persistence, and delivering real software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section Header (Below Father & Son Leadership Section) */}
        <div className="max-w-3xl mb-7 sm:mb-9">
          <div>
            <span className="heading-focus-underline text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
              People Behind Tech22Blocks
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
            <StaggeredText text="Our" />{' '}
            <StaggeredText text="Team" isShimmer />
          </h3>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal">
            Founders, engineering architects, and department heads building production software and AI systems together. Tap any card to read more.
          </p>
        </div>

        {/* 4 Interactive 3D Flip Cards (SVSS ab-team) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => {
            const isFlipped = !!flippedCards[member.id];

            return (
              <div 
                key={member.id} 
                className="ab-team-card w-full"
              >
                <div 
                  className={`ab-team-flipper cursor-pointer ${isFlipped ? 'flipped' : ''}`}
                  onClick={() => toggleFlip(member.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFlip(member.id);
                    }
                  }}
                  aria-expanded={isFlipped}
                  aria-label={`${member.name}, ${member.role}. Tap to read more.`}
                >
                  
                  {/* FRONT FACE (SVSS ab-person-front) */}
                  <div className="ab-team-face-front bg-[var(--surface)] border border-[var(--border)] shadow-md p-6 flex flex-col items-center justify-between text-center hover:border-[var(--accent)]/60 transition-colors">
                    
                    {/* Top Row: Department & Quick LinkedIn */}
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                        {member.department}
                      </span>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] text-[var(--text-muted)] flex items-center justify-center transition-all duration-200"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Monogram / Avatar */}
                    <div className="my-auto py-2">
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr ${member.colorScheme} flex items-center justify-center text-white text-xl sm:text-2xl font-bold font-mono shadow-lg ring-4 ring-[var(--accent)]/20`}>
                        {member.monogram}
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display mt-3.5 tracking-tight">
                        {member.name}
                      </h3>
                      
                      <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider font-mono mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="w-full pt-3 border-t border-[var(--border)]/70 flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] font-mono font-medium">
                      <RotateCw className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>Tap to read bio</span>
                    </div>

                  </div>

                  {/* BACK FACE (SVSS ab-person-back) */}
                  <div className="ab-team-face-back bg-[var(--surface-elevated)] border border-[var(--accent)] shadow-xl p-6 flex flex-col justify-between text-left">
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                          Executive Bio
                        </span>
                        <span className="text-xs font-mono font-bold text-[var(--accent)]">
                          {member.monogram}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[var(--text-primary)] font-display tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider font-mono mb-3">
                        {member.role}
                      </p>

                      <p className="text-xs sm:text-[13px] text-[var(--text-muted)] leading-relaxed font-normal overflow-y-auto max-h-[140px] scrollbar-none">
                        {member.bio}
                      </p>
                    </div>

                    {/* Prominent LinkedIn CTA on Back */}
                    <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-semibold shadow-sm transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>Connect on LinkedIn</span>
                      </a>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(member.id);
                        }}
                        className="text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
                      >
                        Flip Back &times;
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
