'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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
          <Image src="/images/icon_angular.svg" alt="Angular" width={40} height={40} className="w-10 h-10 object-contain" />
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
          <Image src="/images/icon_elephent.svg" alt="PostgreSQL" width={40} height={40} className="w-10 h-10 object-contain" />
        </div>
      ),
    },
    {
      name: 'Redis',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#DC382D" />
          <path d="M7 16l9-5 9 5-9 5-9-5z" fill="white" />
          <path d="M7 20l9 5 9-5" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M12 2C12 2 6 8.5 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5.5-6-12-6-12z" fill="#47A248" />
          <path d="M12 2v18c3.3 0 6-2.7 6-6 0-5.5-6-12-6-12z" fill="#3FA037" />
        </svg>
      ),
    },
    {
      name: 'SQLite',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#003B57" />
          <text x="16" y="21" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SQL</text>
        </svg>
      ),
    },
  ],
  cloud: [
    {
      name: 'AWS Cloud',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#232F3E" />
          <path d="M10 18c3 2 9 2 12-1" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M13 8h-2v2h2V8zm-3 0H8v2h2V8zm-3 0H5v2h2V8zm6-3h-2v2h2V5zm-3 0H8v2h2V5zM4 11h16c.5 3-1.5 6-5 6-3 0-5-2-6-2s-3 2-6 2c-.5 0-1-.1-1.5-.2C1 15 2 12 4 11z" fill="#2496ED" />
        </svg>
      ),
    },
    {
      name: 'GitHub CI/CD',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#24292E">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'Cloudflare Edge',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#F38020" />
          <path d="M18 10a5 5 0 00-4.5 3A4 4 0 009 17a4 4 0 004 4h9a4 4 0 001-7.8A5 5 0 0018 10z" fill="white" />
        </svg>
      ),
    },
  ],
  mobile: [
    {
      name: 'Flutter',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#02569B">
          <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.07 11.072L7.697 17.76l3.69 3.69 6.687-6.687-3.69-3.69zm3.69 7.382l-3.69-3.69-3.69 3.69 3.69 3.69 3.69-3.69z" />
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
      name: 'Swift (iOS)',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#FA7343" />
          <path d="M22 22C16 22 10 16 10 10c3 4 7 7 12 8-2-2-3-5-3-7 5 4 8 10 3 11z" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Kotlin (Android)',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#7F52FF" />
          <path d="M8 8h16L16 16l8 8H8V8z" fill="white" />
        </svg>
      ),
    },
  ],
  frameworks: [
    {
      name: 'Python',
      svg: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src="/images/icon_python.svg" alt="Python" width={40} height={40} className="w-10 h-10 object-contain" />
        </div>
      ),
    },
    {
      name: '.NET Core',
      svg: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src="/images/icon_netcore.svg" alt=".NET Core" width={40} height={40} className="w-10 h-10 object-contain" />
        </div>
      ),
    },
    {
      name: 'FastAPI',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#05998B" />
          <path d="M17 7L9 18h6l-2 7 9-11h-6l3-7z" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Go (Golang)',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#00ADD8" />
          <text x="16" y="21" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">GO</text>
        </svg>
      ),
    },
  ],
};

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('web');

  const currentItems = TECHNOLOGIES[activeCategory] || [];

  return (
    <section 
      id="technologies"
      className="relative py-24 lg:py-32 bg-white overflow-hidden" 
      aria-labelledby="tech-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Techco Underline Shape */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
              Technologies
            </span>
            <Image 
              src="/images/shape_title_under_line.svg" 
              alt="" 
              width={40} 
              height={8} 
              className="inline-block"
            />
          </div>

          <h2 id="tech-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Technologies We <span className="text-[#0a85b1]">Deploy</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Battle-tested frameworks, languages, and distributed systems engineered for speed and longevity.
          </p>
        </div>

        {/* Tab Navigation Pill Bar (Techco Exact Style) */}
        <div className="flex justify-center mb-14">
          <div 
            className="inline-flex flex-wrap items-center justify-center gap-1.5 p-2 rounded-2xl bg-[#e0f2fe]/80 max-w-full"
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
                  className={`px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0f172a] shadow-md shadow-blue-900/10 scale-102'
                      : 'text-[#0f172a]/80 hover:text-[#0f172a] hover:bg-white/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid (Techco Iconbox Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[170px] bg-[#F7F9FC] border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-100 group"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.svg}
              </div>
              <span className="text-sm font-bold text-[#0f172a] tracking-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
