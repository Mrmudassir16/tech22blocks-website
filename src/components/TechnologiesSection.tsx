'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText, KineticShimmerText } from '@/components/design-system/KineticTypography';

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
          <rect width="32" height="32" rx="6" fill="#DC382D" />
          <path d="M7 16l9-5 9 5-9 5-9-5z" fill="white" />
          <path d="M7 21l9 5 9-5" stroke="white" strokeWidth="2" fill="none" />
          <path d="M7 26l9 5 9-5" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M16 2s-7 6-7 13c0 5 3.5 9.5 7 11 3.5-1.5 7-6 7-11 0-7-7-13-7-13z" fill="#47A248" />
          <path d="M16 2v24c3.5-1.5 7-6 7-11 0-7-7-13-7-13z" fill="#499D4A" />
        </svg>
      ),
    },
    {
      name: 'Supabase',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 109 113" fill="none">
          <path d="M63.7076 110.284C60.848 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0632L99.1934 40.0632C106.033 40.0632 109.914 47.8837 105.776 53.3277L63.7076 110.284Z" fill="#3ECF8E" />
          <path d="M45.317 2.716C48.1766 -0.885276 53.9744 1.08799 54.0433 5.68607L54.3406 72.9368H9.83141C2.99187 72.9368 -0.889429 65.1163 3.24868 59.6723L45.317 2.716Z" fill="#3ECF8E" fillOpacity="0.7" />
        </svg>
      ),
    },
    {
      name: 'Prisma ORM',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M6 26L16 4l10 22H6z" fill="#2D3748" />
          <path d="M16 4l10 22h-8L16 4z" fill="#16A394" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M5.5 24.5L12 4.5l5 9.5-11.5 10.5z" fill="#FFA000" />
          <path d="M26.5 24.5L20 8.5l-3 5.5 9.5 10.5z" fill="#F57C00" />
          <path d="M12 4.5l5 9.5-5 5-6.5 5.5 6.5-20z" fill="#FFCA28" />
        </svg>
      ),
    },
  ],
  cloud: [
    {
      name: 'AWS',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#232F3E" />
          <path d="M9 19c3.5 2.5 10.5 2.5 14 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M21 17.5l2 1.5-2 1" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.79 9.89c-.465-.337-1.18-.42-1.803-.243-.16-.628-.62-1.12-1.226-1.353-.18-.07-.37-.107-.565-.11-.08-.002-.158.006-.237.022-.294.062-.562.2-.777.398-.24-.132-.51-.205-.792-.212-.13-.003-.26.01-.387.038a2.53 2.53 0 00-.974.455c-.244.18-.44.413-.574.68-.31-.05-.626-.034-.93.048-.48.13-.888.423-1.15.827-.14.215-.23.458-.266.713H.186A.186.186 0 000 11.336c.01 1.096.22 2.18.625 3.197.66 1.66 1.77 3.09 3.205 4.133 1.71 1.24 3.78 1.89 5.908 1.86 4.935-.07 9.49-3.08 11.455-7.585.51-.06.99-.25 1.39-.55.6-.45.96-1.14 1.01-1.89a.186.186 0 00-.186-.188z" />
        </svg>
      ),
    },
    {
      name: 'Vercel',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 116 100" fill="#ffffff">
          <path d="M57.5 0L115 100H0L57.5 0Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub Actions',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#2088FF">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Google Cloud',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M24 14.5c0-.5-.1-1-.2-1.5H16v3h4.5c-.2 1.1-.9 2.1-1.9 2.7v2.2h3.1c1.8-1.7 2.3-4.3 2.3-6.4z" fill="#4285F4" />
          <path d="M16 23c2.4 0 4.4-.8 5.9-2.2l-3.1-2.2c-.8.6-1.8.9-2.8.9-2.2 0-4-1.5-4.7-3.5H8.1v2.3C9.6 21.3 12.6 23 16 23z" fill="#34A853" />
          <path d="M11.3 16c0-.6.1-1.2.3-1.7v-2.3H8.1c-.6 1.3-1 2.6-1 4s.4 2.7 1 4l3.2-2.3c-.2-.6-.3-1.1-.3-1.7z" fill="#FBBC05" />
          <path d="M16 11.8c1.3 0 2.5.5 3.4 1.3l2.5-2.5C20.4 9.3 18.4 8.5 16 8.5c-3.4 0-6.4 1.7-7.9 4.7l3.2 2.3c.7-2 2.5-3.7 4.7-3.7z" fill="#EA4335" />
        </svg>
      ),
    },
    {
      name: 'Nginx',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M16 2L3 9.5v15L16 32l13-7.5v-15L16 2z" fill="#009639" />
          <path d="M10 22V10l12 12V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
  ],
  mobile: [
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
      name: 'Flutter',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <path d="M18.5 3L6 15.5l3.8 3.8L26 3h-7.5z" fill="#02569B" />
          <path d="M18.5 17.5L11 25l7.5 7.5h7.5l-7.5-7.5 7.5-7.5h-7.5z" fill="#0175C2" />
          <path d="M14.8 21.2l3.7 3.8-3.7 3.8-3.8-3.8 3.8-3.8z" fill="#29B6F6" />
        </svg>
      ),
    },
    {
      name: 'Android Native',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#3DDC84">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.1 12 8.1s-3.5902.3116-5.1367.8497L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
        </svg>
      ),
    },
    {
      name: 'iOS / Swift',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#F05138" />
          <path d="M8 24c4-1 9-5 11-10 1-2.5 1-4.5 0-6 2 2 4 5 4 8 0 4-4 8-10 8-2 0-3.5-.5-5-1z" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Capacitor',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#119EFF" />
          <path d="M8 12l8-5 8 5v8l-8 5-8-5v-8z" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Expo',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#000020" />
          <path d="M8 22l8-14 8 14-4-2-4-7-4 7-4 2z" fill="white" />
        </svg>
      ),
    },
  ],
  frameworks: [
    {
      name: 'Python',
      svg: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src={getAssetUrl('/images/icon_python.svg')} alt="Python" width={40} height={40} className="w-10 h-10 object-contain" />
        </div>
      ),
    },
    {
      name: '.NET Core',
      svg: (
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src={getAssetUrl('/images/icon_netcore.svg')} alt=".NET Core" width={40} height={40} className="w-10 h-10 object-contain" />
        </div>
      ),
    },
    {
      name: 'GraphQL',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#E10098" />
          <path d="M16 6l9 5v10l-9 5-9-5V11l9-5z" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="16" cy="6" r="2.5" fill="white" />
          <circle cx="25" cy="11" r="2.5" fill="white" />
          <circle cx="25" cy="21" r="2.5" fill="white" />
          <circle cx="16" cy="26" r="2.5" fill="white" />
          <circle cx="7" cy="21" r="2.5" fill="white" />
          <circle cx="7" cy="11" r="2.5" fill="white" />
        </svg>
      ),
    },
    {
      name: 'FastAPI',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#009688" />
          <path d="M17 6L8 18h7l-1 8 9-12h-7l1-8z" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Express.js',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="6" fill="#000000" />
          <text x="7" y="21" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="bold">ex</text>
        </svg>
      ),
    },
    {
      name: 'Figma',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
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
      className="relative py-16 sm:py-20 lg:py-24 bg-[#040a1b] text-white overflow-hidden border-b border-white/[0.08]" 
      aria-labelledby="tech-heading"
    >
      {/* Background Volumetric Flares */}
      <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] bg-sky-500/[0.1] rounded-full blur-[140px] pointer-events-none transform-gpu animate-pulse-aura" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.06] rounded-full blur-[130px] pointer-events-none transform-gpu" />

      {/* Cybernetic Matrix Dot Overlay */}
      <div className="absolute inset-0 bg-architectural-dots opacity-25 pointer-events-none" />

      {/* Hairline subtle top ambient glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest font-mono text-[#38bdf8]">
              Technologies
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={40} 
              height={8} 
              className="inline-block brightness-200"
            />
          </div>

          <h2 id="tech-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-tight cursor-default">
            <StaggeredText text="Technologies We" /> <KineticShimmerText>Deploy</KineticShimmerText>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Battle-tested frameworks, languages, and distributed systems engineered for speed and longevity.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex justify-center mb-10 lg:mb-12">
          <div 
            className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#0b1120]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl max-w-full"
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
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500/20 to-sky-400/20 border border-sky-400/40 text-white shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid with Elevated Obsidian Bento Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[170px] bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-400/50 rounded-2xl p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] group backdrop-blur-sm"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.svg}
              </div>
              <span className="text-xs font-mono font-medium text-slate-200 tracking-wide group-hover:text-sky-300 transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
