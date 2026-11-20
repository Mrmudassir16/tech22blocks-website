'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';

export interface MarqueeTechItem {
  name: string;
  category: string;
  svg?: React.ReactNode;
  iconSrc?: string;
}

export const MARQUEE_TECH_ITEMS: MarqueeTechItem[] = [
  {
    name: 'Next.js',
    category: 'Frontend Framework',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path d="M149.508 157.438L69.147 54H54V125.97H66.6241V69.4125L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="white" />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'UI Library',
    svg: (
      <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
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
    category: 'Type Safety',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M72 88.5C72 98.7 80.3 107 90.5 107C100.7 107 109 98.7 109 88.5C109 76 96 74 96 67C96 64.2 98.2 62 101 62C103.8 62 106 64.2 106 67H118C118 57.6 110.4 50 101 50C91.6 50 84 57.6 84 67C84 79.5 97 81.5 97 88.5C97 92.1 94.1 95 90.5 95C86.9 95 84 92.1 84 88.5H72ZM30 50V62H47V107H59V62H76V50H30Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling Engine',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32">
        <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z" fill="#539E43" />
        <path d="M16 4.5l10.8 6.2v12.6L16 29.5 5.2 23.3V10.7L16 4.5z" fill="#333333" />
      </svg>
    ),
  },
  {
    name: 'Python',
    category: 'Backend & AI',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 128 128">
        <path d="M63.7 2.1c-15.8 0-25.2 6.9-25.2 20.3v15h25.7v3.8H28.9C13.1 41.2 2 51.5 2 67.3s11.6 25.4 26.9 25.4h8.3v-12c0-13.8 11.8-24.8 25.7-24.8h25.4v-3.8H50.9V37.7c0-8.9 7.5-16.1 16.4-16.1h21.6c7.9 0 14.7-6.2 14.7-14.7s-6.8-14.8-14.7-14.8H63.7z" fill="#3776AB" />
        <path d="M64.3 125.9c15.8 0 25.2-6.9 25.2-20.3v-15H63.8v-3.8h35.3c15.8 0 26.9-10.3 26.9-26.1s-11.6-25.4-26.9-25.4h-8.3v12c0 13.8-11.8 24.8-25.7 24.8H39.7v3.8h37.4v14.4c0 8.9-7.5 16.1-16.4 16.1H39.1c-7.9 0-14.7 6.2-14.7 14.7s6.8 14.8 14.7 14.8h25.2z" fill="#FFD438" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Relational DB',
    iconSrc: '/images/icon_elephent.svg',
  },
  {
    name: 'Redis',
    category: 'In-Memory Cache',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32">
        <path d="M2 12l14-8 14 8-14 8-14-8z" fill="#D82C20" />
        <path d="M2 12l14 8v10L2 22V12z" fill="#A41E11" />
        <path d="M30 12l-14 8v10l14-10V12z" fill="#801509" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    category: 'Containers',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185" />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    category: 'Cross-Platform App',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#02569B">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.286 9.34l-5.6 5.6 5.6 5.6h7.4l-5.6-5.6 5.6-5.6z" />
      </svg>
    ),
  },
  {
    name: 'GraphQL',
    category: 'Data Query Layer',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#E10098">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm6.928 6.27L12 4.298 5.072 8.27v7.46L12 19.702l6.928-3.972V8.27z" />
      </svg>
    ),
  },
  {
    name: 'AWS Cloud',
    category: 'Cloud Infrastructure',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF9900">
        <path d="M18.79 13.98c-1.39 1.03-3.23 1.57-5.18 1.57-2.73 0-5.18-1.07-7.05-2.88-.15-.14-.03-.34.14-.24 2.01 1.15 4.41 1.84 6.91 1.84 1.74 0 3.61-.43 5.3-1.3.26-.14.47.16.2.33l-.32.68z" />
      </svg>
    ),
  },
];

export default function TechMarquee() {
  // Duplicate array for seamless infinite looping
  const duplicatedItems = [...MARQUEE_TECH_ITEMS, ...MARQUEE_TECH_ITEMS];

  return (
    <div className="w-full relative overflow-hidden py-4 my-6">
      {/* Left/Right Edge Fades for subtle smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--canvas)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--canvas)] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max space-x-4 animate-marquee hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:border-[var(--accent)] hover:shadow-md transition-all duration-200 cursor-pointer flex-shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--surface-elevated)] flex items-center justify-center flex-shrink-0">
              {item.svg ? (
                item.svg
              ) : item.iconSrc ? (
                <Image
                  src={getAssetUrl(item.iconSrc)}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="w-5 h-5 object-contain"
                />
              ) : null}
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)] whitespace-nowrap">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
