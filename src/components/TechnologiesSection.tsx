'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';
import { SectionTransitionShape, SectionBackground } from '@/components/design-system/SectionDecorations';

interface TechItem {
  name: string;
  category: string;
  svgIcon: React.ReactNode;
}

const CATEGORIES = [
  { id: 'web', label: 'Web Platform' },
  { id: 'databases', label: 'Databases' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'frameworks', label: 'Other Frameworks' },
];

const TECHNOLOGIES: Record<string, { name: string; svg: React.ReactNode }[]> = {
  web: [
    {
      name: 'Next.js',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 180 180" fill="none">
          <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask0_next)">
            <circle cx="90" cy="90" r="90" fill="#000000" />
            <path d="M149.508 157.438L69.147 54H54V125.97H66.6241V69.4125L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="white" />
            <rect x="115" y="54" width="12" height="72" fill="white" />
          </g>
        </svg>
      ),
    },
    {
      name: 'React',
      svg: (
        <svg className="w-12 h-12" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M72 88.5C72 98.7 80.3 107 90.5 107C100.7 107 109 98.7 109 88.5C109 76 96 74 96 67C96 64.2 98.2 62 101 62C103.8 62 106 64.2 106 67H118C118 57.6 110.4 50 101 50C91.6 50 84 57.6 84 67C84 79.5 97 81.5 97 88.5C97 92.1 94.1 95 90.5 95C86.9 95 84 92.1 84 88.5H72ZM30 50V62H47V107H59V62H76V50H30Z" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
        </svg>
      ),
    },
    {
      name: 'Angular',
      svg: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src={getAssetUrl('/images/icon_angular.svg')} alt="Angular" width={40} height={40} className="w-10 h-10 object-contain" />
        </div>
      ),
    },
    {
      name: 'Node.js',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z" fill="#539E43" />
          <path d="M16 4.5l10.8 6.2v12.6L16 29.5 5.2 23.3V10.7L16 4.5z" fill="#333333" />
        </svg>
      ),
    },
  ],
  databases: [
    {
      name: 'PostgreSQL',
      svg: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src={getAssetUrl('/images/icon_elephent.svg')} alt="PostgreSQL" width={40} height={40} className="w-10 h-10 object-contain" />
        </div>
      ),
    },
    {
      name: 'Redis',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M2 12l14-8 14 8-14 8-14-8z" fill="#D82C20" />
          <path d="M2 16l14 8 14-8" stroke="#A41E11" strokeWidth="2" fill="none" />
          <path d="M2 20l14 8 14-8" stroke="#A41E11" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M16 2C16 2 8 9 8 17c0 4.4 3.6 8 8 13 4.4-5 8-8.6 8-13 0-8-8-15-8-15z" fill="#47A248" />
          <path d="M16 2v28c4.4-5 8-8.6 8-13 0-8-8-15-8-15z" fill="#499D4A" />
          <path d="M16 18c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'MySQL',
      svg: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src={getAssetUrl('/images/icon_elephent.svg')} alt="MySQL" width={40} height={40} className="w-10 h-10 object-contain brightness-90" />
        </div>
      ),
    },
    {
      name: 'Firebase',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M5.5 25.5L4 8l6.5 6.5-5 11z" fill="#FFA000" />
          <path d="M17.5 3.5l-4 4.5 4.5 4.5 7.5-9z" fill="#F57C00" />
          <path d="M4 8l12 18.5L28 9l-6.5-5.5L4 8z" fill="#FFCA28" />
        </svg>
      ),
    },
    {
      name: 'Prisma ORM',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M7 26.5L14 3.5l11 17.5-6.5 5.5H7z" fill="#2D3748" stroke="#5A67D8" strokeWidth="1.5" />
          <path d="M14 3.5L25 21l-6.5 5.5L14 3.5z" fill="#5A67D8" />
        </svg>
      ),
    },
  ],
  cloud: [
    {
      name: 'AWS',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M10 18c-2.5 0-4.5-1.5-4.5-3.5S7.5 11 10 11s4.5 1.5 4.5 3.5-2 3.5-4.5 3.5z" fill="#FF9900" />
          <path d="M22 18c-2.5 0-4.5-1.5-4.5-3.5s2-3.5 4.5-3.5 4.5 1.5 4.5 3.5-2 3.5-4.5 3.5z" fill="#FF9900" />
          <path d="M6 23c6 3.5 14 3.5 20 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      name: 'Google Cloud',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M19.5 12h-7c-2.5 0-4.5 2-4.5 4.5S10 21 12.5 21h7c2.5 0 4.5-2 4.5-4.5S22 12 19.5 12z" fill="#4285F4" />
          <circle cx="16" cy="12" r="4.5" fill="#EA4335" />
          <circle cx="20.5" cy="14" r="3.5" fill="#FBBC05" />
          <circle cx="12" cy="16.5" r="3.5" fill="#34A853" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect x="3" y="14" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="7" y="14" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="11" y="14" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="7" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="11" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="11" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
          <path d="M2 17c0 6.5 5 9 14 9s14-2.5 14-9c-1 0-3.5 2-6 1-2-1-2.5-3-5-3-3 0-4 2-7 2-3 0-4-1-6-1-2.5 1-3.5 1-4 1z" fill="#2496ED" />
        </svg>
      ),
    },
    {
      name: 'Kubernetes',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M16 3l11 6.5v13L16 29 5 22.5v-13L16 3z" fill="#326CE5" />
          <circle cx="16" cy="16" r="5" fill="#FFFFFF" />
          <circle cx="16" cy="16" r="3" fill="#326CE5" />
        </svg>
      ),
    },
    {
      name: 'Vercel',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 1155 1000" fill="none">
          <path d="M577.346 0L1154.69 1000H0L577.346 0Z" fill="currentColor" className="text-[var(--text-primary)]" />
        </svg>
      ),
    },
    {
      name: 'Cloudflare',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M22.5 14c-.3-2.5-2.4-4.5-5-4.5-2 0-3.8 1.2-4.5 3-.4-.3-.9-.5-1.5-.5-1.4 0-2.5 1.1-2.5 2.5 0 .2 0 .4.1.5C7.3 15.4 6 16.8 6 18.5 6 20.4 7.6 22 9.5 22h13c2.2 0 4-1.8 4-4 0-2-1.5-3.6-3.5-3.9-.1 0-.3-.1-.5-.1z" fill="#F38020" />
          <path d="M22.5 14c-.3-2.5-2.4-4.5-5-4.5-2 0-3.8 1.2-4.5 3-.4-.3-.9-.5-1.5-.5-1.4 0-2.5 1.1-2.5 2.5 0 .2 0 .4.1.5" fill="#FAAE40" />
        </svg>
      ),
    },
  ],
  mobile: [
    {
      name: 'Flutter',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M18.5 2.5L7 14l4 4L26.5 2.5h-8z" fill="#42A5F5" />
          <path d="M18.5 18l-5.5 5.5 4 4 5.5-5.5-4-4z" fill="#0D47A1" />
          <path d="M12.5 12.5L7 18l4 4 5.5-5.5-4-4z" fill="#42A5F5" />
          <path d="M18.5 27.5h8l-7.5-7.5-4 4 3.5 3.5z" fill="#0D47A1" />
        </svg>
      ),
    },
    {
      name: 'React Native',
      svg: (
        <svg className="w-12 h-12" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Android Native',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M8 12c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2v-8c0-1.1-.9-2-2-2zm16 0c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2v-8c0-1.1-.9-2-2-2zm-12 1h8c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1h-8c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1z" fill="#3DDC84" />
          <path d="M12 8.5l-1.5-2.5c-.2-.3-.5-.4-.8-.2-.3.2-.4.5-.2.8L11 9c-1.8.8-3 2.5-3 4.5h16c0-2-1.2-3.7-3-4.5l1.5-2.4c.2-.3.1-.6-.2-.8-.3-.2-.6-.1-.8.2L20 8.5c-1.2-.5-2.6-.8-4-.8s-2.8.3-4 .8z" fill="#3DDC84" />
          <circle cx="13.5" cy="11.5" r="0.8" fill="#FFFFFF" />
          <circle cx="18.5" cy="11.5" r="0.8" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'Swift / iOS',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M26.5 17.5c-.3.5-.8 1.1-1.3 1.7-1 1.2-2.1 2.5-3.6 2.5-1.5 0-2-.9-3.7-.9s-2.3.9-3.7.9c-1.5 0-2.6-1.3-3.6-2.5-2-2.4-3.5-6.8-1.5-10 1-1.6 2.8-2.6 4.7-2.6 1.5 0 2.8.9 3.7.9s2-.9 3.6-.9c1.6 0 3.2.8 4.2 2.1-3.7 1.8-3.1 6.6.9 7.9-.6 1.4-1.3 2.7-2.3 3.9z" fill="#FA7343" />
          <path d="M20.5 5.5c.7-.9 1.2-2.1 1-3.4-1.1.1-2.4.7-3.1 1.6-.7.8-1.2 2-1 3.2 1.2.1 2.4-.5 3.1-1.4z" fill="#FA7343" />
        </svg>
      ),
    },
    {
      name: 'Kotlin',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M28 28H4V4h24L16 16l12 12z" fill="#7F52FF" />
          <path d="M4 28l12-12L4 4v24z" fill="#C757BC" />
          <path d="M16 16L4 28h12l12-12H16z" fill="#FF8A00" />
        </svg>
      ),
    },
    {
      name: 'Expo',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L4 24h6l6-10 6 10h6L16 4z" fill="currentColor" className="text-[var(--text-primary)]" />
        </svg>
      ),
    },
  ],
  frameworks: [
    {
      name: 'FastAPI',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="13" fill="#05998B" />
          <path d="M17.5 7L10 17.5h5.5L14.5 25 22 14.5h-5.5L17.5 7z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'GraphQL',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M16 4l10.4 6v12L16 28 5.6 22V10L16 4z" stroke="#E10098" strokeWidth="2" fill="none" />
          <circle cx="16" cy="4" r="2.5" fill="#E10098" />
          <circle cx="26.4" cy="10" r="2.5" fill="#E10098" />
          <circle cx="26.4" cy="22" r="2.5" fill="#E10098" />
          <circle cx="16" cy="28" r="2.5" fill="#E10098" />
          <circle cx="5.6" cy="22" r="2.5" fill="#E10098" />
          <circle cx="5.6" cy="10" r="2.5" fill="#E10098" />
        </svg>
      ),
    },
    {
      name: 'Python',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M15.8 3c-4.3 0-4 1.8-4 1.8l.01 1.9h4.1v.6h-5.8c-2.3 0-4 1.4-4 4.1s1.7 4 4 4h1.2v-2c0-1.2 1-2.1 2.2-2.1h5.8c1 0 1.8-.8 1.8-1.8V5.8c0-1.8-1.9-2.8-5.3-2.8zm-2.2 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" fill="#3776AB" />
          <path d="M16.2 29c4.3 0 4-1.8 4-1.8l-.01-1.9h-4.1v-.6h5.8c2.3 0 4-1.4 4-4.1s-1.7-4-4-4h-1.2v2c0 1.2-1 2.1-2.2 2.1h-5.8c-1 0-1.8.8-1.8 1.8v3.7c0 1.8 1.9 2.8 5.3 2.8zm2.2-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" fill="#FFD43B" />
        </svg>
      ),
    },
    {
      name: 'Golang',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M6 14h12v4H6v-4zm0 6h8v4H6v-4zm0-12h16v4H6V8z" fill="#00ADD8" />
          <circle cx="23" cy="18" r="3" fill="#00ADD8" />
        </svg>
      ),
    },
    {
      name: 'Apache Kafka',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="8" r="4" fill="currentColor" className="text-[var(--text-primary)]" />
          <circle cx="8" cy="22" r="4" fill="currentColor" className="text-[var(--text-primary)]" />
          <circle cx="24" cy="22" r="4" fill="currentColor" className="text-[var(--text-primary)]" />
          <path d="M14 11l-4 8m8-8l4 8" stroke="currentColor" strokeWidth="2" className="text-[var(--text-primary)]" />
        </svg>
      ),
    },
    {
      name: 'Elasticsearch',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="12" fill="#005571" />
          <path d="M10 11h12c0-3.3-2.7-6-6-6s-6 2.7-6 6zm0 10h12c0 3.3-2.7 6-6 6s-6-2.7-6-6zm0-7h12v4H10v-4z" fill="#FED136" />
        </svg>
      ),
    },
  ],
};

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('web');
  const currentItems = TECHNOLOGIES[activeCategory] || TECHNOLOGIES['web'];

  return (
    <section 
      className="py-12 sm:py-14 lg:py-16 bg-[var(--surface-elevated)] text-[var(--text-primary)] relative overflow-hidden transition-colors duration-200" 
      aria-labelledby="tech-heading"
    >
      {/* 1. Dynamic Section Transition Shape (Stepped Shelf Right - No straight border) */}
      <SectionTransitionShape 
        position="top" 
        variant="stepped-right" 
        fillColor="var(--canvas)" 
      />

      {/* 2. Ambient Section Background (Fluid Helix - Vivid in Light Mode) */}
      <SectionBackground type="helix" position="center" opacity="opacity-75 dark:opacity-30" />

      {/* Background Volumetric Glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--accent)]/[0.04] rounded-full blur-[140px] pointer-events-none transform-gpu" 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-sm sm:text-base font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
              Technologies
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={48} 
              height={9} 
              className="inline-block opacity-80"
            />
          </div>

          <h2 id="tech-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
            Technologies We <span className="text-[var(--accent)]">Deploy</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
            Battle-tested frameworks, languages, and distributed systems engineered for speed and longevity.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div 
            className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-sm max-w-full"
            role="tablist"
            aria-label="Technology categories"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--accent)] text-white shadow-sm font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid with Elevated Bento Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[170px] card-surface p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] group"
            >
              <div className="mb-4 transition-transform duration-200 group-hover:scale-105">
                {item.svg}
              </div>
              <span className="text-xs font-mono font-medium text-[var(--text-primary)] tracking-wide group-hover:text-[var(--accent)] transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
