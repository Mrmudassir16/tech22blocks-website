'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';

interface ServiceItem {
  id: string;
  code: string;
  category: string;
  title: string;
  shortDesc: string;
  href: string;
  iconSvg: React.ReactNode;
  features: string[]; // Exactly 3 points as requested
  isComingSoon?: boolean;
  accentGradient: string;
  glowColor: string;
  cornerGradient: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software',
    code: '01',
    category: 'Enterprise Systems',
    title: 'Custom Software Development',
    shortDesc: 'Bespoke core systems, enterprise application architectures, and robust business workflows tailored to your operating model.',
    href: '/services/custom-software/',
    accentGradient: 'from-blue-600 to-sky-500',
    glowColor: 'rgba(14, 165, 233, 0.35)',
    cornerGradient: 'from-sky-500/25 via-blue-600/15 to-transparent',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.1302 24.646L28.6623 39.3853C28.3749 39.9528 27.8009 40.2799 27.2056 40.2799C26.9576 40.2799 26.7058 40.2231 26.4694 40.1033C25.6656 39.6961 25.3442 38.7142 25.7514 37.9105L33.2193 23.1712C33.6266 22.3673 34.6087 22.0458 35.4122 22.4531C36.216 22.8605 36.5374 23.8422 36.1302 24.646ZM40.7383 27.4882C40.1012 26.8511 39.068 26.8511 38.4309 27.4882C37.7936 28.1254 37.7936 29.1584 38.4309 29.7956L42.0019 33.3667L38.4309 36.9376C37.7936 37.5749 37.7936 38.6079 38.4309 39.2451C38.7495 39.5637 39.167 39.7229 39.5846 39.7229C40.002 39.7229 40.4197 39.5636 40.7383 39.2451L45.4631 34.5204C45.7691 34.2145 45.941 33.7995 45.941 33.3667C45.941 32.9339 45.7691 32.5191 45.4631 32.213L40.7383 27.4882ZM23.569 22.1983C22.9318 21.5611 21.8988 21.5613 21.2616 22.1983L16.5368 26.923C16.2308 27.229 16.0589 27.6439 16.0589 28.0767C16.0589 28.5096 16.2308 28.9244 16.5368 29.2305L21.2616 33.9552C21.58 34.2737 21.9977 34.4331 22.4153 34.4331C22.8328 34.4331 23.2504 34.2737 23.569 33.9552C24.2062 33.318 24.2062 32.285 23.569 31.6478L19.9979 28.0767L23.569 24.5058C24.2062 23.8686 24.2062 22.8356 23.569 22.1983ZM51.3519 32.6316V42.1455H60.3684C61.2694 42.1455 62 42.8761 62 43.7771C62 44.6781 61.2694 45.4087 60.3684 45.4087H51.173C50.5404 48.2778 48.2776 50.5406 45.4085 51.1731V60.3684C45.4085 61.2694 44.678 62 43.777 62C42.8759 62 42.1454 61.2694 42.1454 60.3684V51.3519H32.6316V60.3684C32.6316 61.2694 31.901 62 31 62C30.099 62 29.3684 61.2694 29.3684 60.3684V51.3519H19.8545V60.3684C19.8545 61.2694 19.1239 62 18.2229 62C17.3219 62 16.5913 61.2694 16.5913 60.3684V51.173C13.7222 50.5404 11.4594 48.2776 10.8269 45.4085H1.63158C0.730556 45.4085 0 44.678 0 43.777C0 42.8759 0.730556 42.1454 1.63158 42.1454H10.6481V32.6316H1.63158C0.730556 32.6316 0 31.901 0 31C0 30.099 0.730556 29.3684 1.63158 29.3684H10.6481V19.8545H1.63158C0.730556 19.8545 0 19.1239 0 18.2229C0 17.3219 0.730556 16.5913 1.63158 16.5913H10.827C11.4596 13.7222 13.7224 11.4594 16.5915 10.8269V1.63158C16.5915 0.730556 17.322 0 18.223 0C19.1241 0 19.8546 0.730556 19.8546 1.63158V10.6481H29.3684V1.63158C29.3684 0.730556 30.099 0 31 0C31.901 0 32.6316 0.730556 32.6316 1.63158V10.6481H42.1455V1.63158C42.1455 0.730556 42.8761 0 43.7771 0C44.6781 0 45.4087 0.730556 45.4087 1.63158V10.827C48.2778 11.4596 50.5406 13.7224 51.1731 16.5915H60.3684C61.2694 16.5915 62 17.322 62 18.223C62 19.1241 61.2694 19.8546 60.3684 19.8546H51.3519V29.3684H60.3684C61.2694 29.3684 62 30.099 62 31C62 31.901 61.2694 32.6316 60.3684 32.6316H51.3519ZM48.0888 43.7771V18.2229C48.0888 15.8454 46.1546 13.9112 43.7771 13.9112H18.2229C15.8454 13.9112 13.9112 15.8454 13.9112 18.2229V43.777C13.9112 46.1545 15.8454 48.0886 18.2229 48.0886H43.777C46.1546 48.0888 48.0888 46.1546 48.0888 43.7771Z" fill="currentColor"/>
      </svg>
    ),
    features: [
      'Software architecture & microservices design',
      'System integration & high-throughput APIs',
      'Legacy app modernization & refactoring',
    ],
  },
  {
    id: 'it-consulting',
    code: '02',
    category: 'Intelligence & Advisory',
    title: 'Audit & IT Consulting Services',
    shortDesc: 'Pragmatic technical advisory helping business leaders make informed architectural, vendor, and scaling decisions.',
    href: '/services/it-consulting/',
    accentGradient: 'from-indigo-600 to-blue-500',
    glowColor: 'rgba(99, 102, 241, 0.35)',
    cornerGradient: 'from-indigo-500/25 via-blue-600/15 to-transparent',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.9055 18.9942C59.266 18.9942 62 16.2199 62 12.81V6.18421C62 2.77425 59.266 0 55.9055 0H6.09452C2.73402 0 0 2.77425 0 6.18421V12.81C0 16.2199 2.73402 18.9942 6.09452 18.9942H29.3661V34.5927C26.988 35.2008 25.1125 37.104 24.5134 39.5169H7.53191C6.62964 39.5169 5.89806 40.2593 5.89806 41.1748V51.1345H2.17916C1.27689 51.1345 0.545314 51.8769 0.545314 52.7924V61.3421C0.545314 62.2577 1.27689 63 2.17916 63H12.8847C13.7869 63 14.5185 62.2577 14.5185 61.3421V52.7924C14.5185 51.8769 13.7869 51.1345 12.8847 51.1345H9.16584V42.8327H24.5134C25.1125 45.2457 26.988 47.1488 29.3661 47.7569V61.3421C29.3661 62.2577 30.0977 63 31 63C31.9023 63 32.6339 62.2577 32.6339 61.3421V47.7569C35.012 47.1488 36.8875 45.2457 37.4866 42.8327H52.8342V51.1345H49.1153C48.2131 51.1345 47.4815 51.8769 47.4815 52.7924V61.3421C47.4815 62.2577 48.2131 63 49.1153 63H59.8208C60.7231 63 61.4547 62.2577 61.4547 61.3421V52.7924C61.4547 51.8769 60.7231 51.1345 59.8208 51.1345H56.1019V41.1748C56.1019 40.2593 55.3704 39.5169 54.4681 39.5169H37.4866C36.8875 37.104 35.012 35.2008 32.6339 34.5927V18.9942H55.9055ZM3.26778 6.18421C3.26778 4.60682 4.53606 3.3323 6.09452 3.3323H55.9055C57.464 3.3323 58.7322 4.60682 58.7322 6.18421V12.81C58.7322 14.3874 57.464 15.6619 55.9055 15.6619H6.09452C4.53606 15.6619 3.26778 14.3874 3.26778 12.81V6.18421ZM31 44.9754C28.9174 44.9754 27.2227 43.2559 27.2227 41.1417C27.2227 39.0275 28.9174 37.308 31 37.308C33.0826 37.308 34.7773 39.0275 34.7773 41.1417C34.7773 43.2559 33.0826 44.9754 31 44.9754Z" fill="currentColor"/>
      </svg>
    ),
    features: [
      'TechGuard Architectural Audit',
      'CyberSafe & Cloud IT Consulting',
      'AssuranceEdge Governance & Strategy',
    ],
  },
  {
    id: 'website-development',
    code: '03',
    category: 'Digital Experience',
    title: 'Web Application Design & Development',
    shortDesc: 'High-performance, search-optimized web platforms built with modern component architectures for speed, reliability, and conversions.',
    href: '/services/website-development/',
    accentGradient: 'from-sky-500 to-cyan-400',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    cornerGradient: 'from-cyan-500/25 via-sky-500/15 to-transparent',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.2243 0.881104H5.77567C2.72338 0.881104 0.240234 3.36437 0.240234 6.41666V37.5397C0.240234 40.592 2.72338 43.0751 5.77567 43.0751H18.856L16.8346 53.3122C16.7468 53.7563 16.8627 54.2166 17.1501 54.5664C17.4377 54.9163 17.8666 55.119 18.3195 55.119H39.6805H39.6829C40.5189 55.119 41.1966 54.4412 41.1966 53.6053C41.1966 53.4733 41.1797 53.3452 41.148 53.2232L39.1441 43.0751H52.2244C55.2767 43.0751 57.7599 40.592 57.7599 37.5397V6.41666C57.7598 3.36437 55.2766 0.881104 52.2243 0.881104ZM54.7214 37.5397C54.7214 38.9168 53.6015 40.0366 52.2244 40.0366H36.9839C36.2739 40.0366 35.666 40.5369 35.5298 41.2335L33.7208 50.4855L22.2792 50.4855L20.4702 41.2335C20.334 40.5369 19.7261 40.0366 19.0161 40.0366H5.77567C4.39857 40.0366 3.27871 38.9168 3.27871 37.5397V6.41666C3.27871 5.03957 4.39857 3.91971 5.77567 3.91971H52.2243C53.6014 3.91971 54.7213 5.03957 54.7213 6.41666V37.5397H54.7214Z" fill="currentColor"/>
        <path d="M12.4492 10.4282H45.5508C46.3868 10.4282 47.0645 9.75043 47.0645 8.91452C47.0645 8.0786 46.3868 7.40088 45.5508 7.40088H12.4492C11.6133 7.40088 10.9355 8.0786 10.9355 8.91452C10.9355 9.75043 11.6133 10.4282 12.4492 10.4282Z" fill="currentColor"/>
      </svg>
    ),
    features: [
      'High-performance Next.js web applications',
      'Enterprise client portals & platforms',
      'Core Web Vitals & sub-second LCP speed',
    ],
  },
  {
    id: 'mobile-applications',
    code: '04',
    category: 'Digital Experience',
    title: 'Mobile App Design & Development',
    shortDesc: 'Native and cross-platform iOS & Android applications engineered for fluid 60 FPS performance, offline sync, and security.',
    href: '/services/mobile-applications/',
    accentGradient: 'from-teal-500 to-emerald-400',
    glowColor: 'rgba(20, 184, 166, 0.35)',
    cornerGradient: 'from-teal-500/25 via-emerald-600/15 to-transparent',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 41 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8033 36.0584L21.942 24.8885C22.3838 24.0846 23.449 23.7632 24.3206 24.1705C25.1925 24.5777 25.5412 25.5595 25.0994 26.3633L18.9607 37.5332C18.649 38.1008 18.0264 38.4279 17.3807 38.4279C17.1117 38.4279 16.8385 38.3711 16.5821 38.2513C15.7103 37.844 15.3615 36.8622 15.8033 36.0584ZM28.8082 28.0592C28.1171 27.422 26.9964 27.422 26.3053 28.0592C25.6141 28.6963 25.6141 29.7295 26.3053 30.3667L28.9377 32.7936L26.3053 35.2204C25.6141 35.8575 25.6141 36.8907 26.3053 37.5279C26.6508 37.8465 27.1039 38.0057 27.5568 38.0057C28.0097 38.0057 28.4628 37.8465 28.8082 37.5279L32.6922 33.9473C33.3833 33.3101 33.3833 32.277 32.6922 31.6398L28.8082 28.0592ZM14.1506 28.0592L10.2667 31.6398C9.57551 32.277 9.57551 33.3101 10.2667 33.9473L14.1506 37.5279C14.8418 38.165 15.9625 38.165 16.6536 37.5279C17.3448 36.8907 17.3448 35.8575 16.6536 35.2204L14.0212 32.7936L16.6536 30.3667C17.3448 29.7295 17.3448 28.6963 16.6536 28.0592C15.9625 27.422 14.8418 27.422 14.1506 28.0592ZM33.6842 0H7.31579C3.28187 0 0 3.28187 0 7.31579V54.6842C0 58.7181 3.28187 62 7.31579 62H33.6842C37.7181 62 41 58.7181 41 54.6842V7.31579C41 3.28187 37.7181 0 33.6842 0ZM37.3895 54.6842C37.3895 56.7275 35.7275 58.3895 33.6842 58.3895H7.31579C5.27253 58.3895 3.61053 56.7275 3.61053 54.6842V7.31579C3.61053 5.27253 5.27253 3.61053 7.31579 3.61053H33.6842C35.7275 3.61053 37.3895 5.27253 37.3895 7.31579V54.6842Z" fill="currentColor"/>
      </svg>
    ),
    features: [
      'Cross-platform iOS & Android mobile apps',
      'Fluid 60 FPS native UI architectures',
      'Offline data caching & biometric security',
    ],
  },
  {
    id: 'uiux-design',
    code: '05',
    category: 'Digital Experience',
    title: 'UI/UX Design Services',
    shortDesc: 'Purposeful digital interfaces engineered through empathetic user research, interactive wireframing, and design systems.',
    href: '/services/uiux-design/',
    accentGradient: 'from-violet-600 to-purple-500',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    cornerGradient: 'from-violet-500/25 via-purple-600/15 to-transparent',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.7252 0H6.27479C2.8148 0 0 2.8148 0 6.27479V55.7252C0 59.1852 2.8148 62 6.27479 62H55.7252C59.1852 62 62 59.1852 62 55.7252V6.27479C62 2.8148 59.1852 0 55.7252 0ZM58.7368 55.7252C58.7368 57.3859 57.3858 58.7368 55.7252 58.7368H6.27479C4.61411 58.7368 3.26316 57.3858 3.26316 55.7252V16.9607H53.7904C54.6914 16.9607 55.422 16.2303 55.422 15.3291C55.422 14.428 54.6914 13.6976 53.7904 13.6976H3.26316V6.27479C3.26316 4.61424 4.61424 3.26316 6.27479 3.26316H55.7252C57.3858 3.26316 58.7368 4.61424 58.7368 6.27479V55.7252Z" fill="currentColor"/>
      </svg>
    ),
    features: [
      'Pixel-perfect UI design systems in Figma',
      'User journey mapping & UX wireframing',
      'Interactive clickable prototype validation',
    ],
  },
  {
    id: 'web3-engineering',
    code: '06',
    category: 'Enterprise Systems',
    title: 'Web3.0 Engineering & Maintenance',
    shortDesc: 'Decentralized architecture research, cryptographic verification, and next-generation distributed systems.',
    href: '/services/web3/',
    isComingSoon: true,
    accentGradient: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    cornerGradient: 'from-amber-500/25 via-orange-600/15 to-transparent',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 74 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.1233 49.5687C50.6272 49.5687 54.2915 45.9359 54.2915 41.4706V33.4307H59.8687C60.7204 36.4316 63.5039 38.6388 66.7993 38.6388C70.7696 38.6388 73.9997 35.4365 73.9997 31.5C73.9997 27.5635 70.7697 24.3612 66.7993 24.3612C63.5039 24.3612 60.7204 26.5684 59.8687 29.5693H54.2915V21.5293C54.2915 17.064 50.6272 13.4312 46.1233 13.4312H45.7586V9.06933H59.8685C60.7202 12.0702 63.5037 14.2774 66.7991 14.2774C70.7694 14.2774 73.9995 11.0751 73.9995 7.13867C73.9995 3.20227 70.7694 0 66.7991 0C62.8289 0 59.5988 3.20227 59.5988 7.13867C59.5988 7.78854 59.691 8.41507 59.8517 9.01185H45.6983V4.32133C45.6983 1.93853 43.7431 0 41.3402 0H33.0905C30.6875 0 28.7323 1.93853 28.7323 4.32133V9.01185H14.5789C14.7397 8.41507 14.8319 7.78854 14.8319 7.13867C14.8319 3.20227 11.6018 0 7.63155 0C3.66127 0 0.431152 3.20227 0.431152 7.13867C0.431152 11.0751 3.66127 14.2774 7.63155 14.2774C10.927 14.2774 13.7104 12.0702 14.5621 9.06933H28.672V13.4312H28.3073C23.8034 13.4312 20.1392 17.064 20.1392 21.5293V29.5693H14.5621C13.7104 26.5684 10.927 24.3612 7.63155 24.3612C3.66127 24.3612 0.431152 27.5635 0.431152 31.5C0.431152 35.4365 3.66127 38.6388 7.63155 38.6388C10.927 38.6388 13.7104 36.4316 14.5621 33.4307H20.1392V41.4706C20.1392 45.9359 23.8034 49.5687 28.3073 49.5687H28.672V53.9306H14.5621C13.7104 50.9298 10.927 48.7226 7.63155 48.7226C3.66127 48.7226 0.431152 51.9249 0.431152 55.8613C0.431152 59.7977 3.66127 63 7.63155 63C11.6018 63 14.8319 59.7977 14.8319 55.8613C14.8319 55.2115 14.7397 54.5849 14.5789 53.9881H28.7323V58.6787C28.7323 61.0615 30.6875 63 33.0905 63H41.3402C43.7431 63 45.6983 61.0615 45.6983 58.6787V53.9881H59.8517C59.691 54.5849 59.5988 55.2115 59.5988 55.8613C59.5988 59.7977 62.8289 63 66.7991 63C70.7694 63 73.9995 59.7977 73.9995 55.8613C73.9995 51.9249 70.7694 48.7226 66.7991 48.7226C63.5037 48.7226 60.7202 50.9298 59.8685 53.9306H45.7586V49.5687H46.1233Z" fill="currentColor"/>
      </svg>
    ),
    features: [
      'Smart contract architecture & audits',
      'Decentralized cryptographic infrastructure',
      'Continuous maintenance & zero-downtime SLA',
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section 
      id="services-overview"
      className="relative py-12 sm:py-16 lg:py-18 bg-[var(--surface-elevated)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Ambient Radial Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[var(--accent)]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (SVSS Style Eyebrow + Crisp Typography) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-[var(--accent)] bg-[var(--surface)] px-3 py-1 rounded-full border border-[var(--border)] shadow-sm">
              Our Services
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={44} 
              height={8} 
              className="inline-block brightness-150"
            />
          </div>

          <div>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-tight cursor-default">
              <StaggeredText text="How We Can" />{' '}
              <StaggeredText text="Help You" isShimmer />
            </h2>
          </div>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
            End-to-end software engineering capabilities tailored for ambitious product founders, modern businesses, and enterprise systems.
          </p>
        </div>

        {/* 6-Service Grid with Vibrant Ambient Glow, Curved Semi-Circle Accent & High-Impact Hover States */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group card-surface p-7 sm:p-8 flex flex-col justify-between hover:border-[var(--accent)] hover:shadow-2xl transition-all duration-500 ease-out relative rounded-tl-[26px] rounded-bl-[26px] rounded-br-[30px] rounded-tr-[10px] overflow-hidden hover:-translate-y-2 cursor-pointer"
              style={{
                ['--service-glow' as any]: service.glowColor,
              }}
            >
              {/* 1. Curved Quarter-Circle Semi-Circle Ambient Glow Accent (Expands & Radiates on Hover) */}
              <div 
                aria-hidden="true" 
                className={`absolute -top-8 -right-8 w-40 h-40 rounded-bl-full bg-gradient-to-bl ${service.cornerGradient} transition-all duration-500 ease-out pointer-events-none group-hover:scale-125 opacity-40 group-hover:opacity-100 blur-[2px] group-hover:blur-0`}
                style={{
                  boxShadow: `0 0 50px ${service.glowColor}`,
                }}
              />

              {/* 2. Soft Ambient Underglow Inside Card (Gives visual richness even when NOT on hover) */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 bg-radial from-[var(--accent)]/[0.04] via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* 3. Techco-Style Architectural Corner Accent Notch */}
              <div 
                aria-hidden="true" 
                className="absolute top-0 right-0 w-8 h-8 pointer-events-none z-10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-[var(--surface-elevated)] transform rotate-45 translate-x-6 -translate-y-6 border-b border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300" />
              </div>

              <div className="relative z-10">
                {/* Top Row: Icon Container + Monospace Index Capsule */}
                <div className="flex items-center justify-between mb-6">
                  
                  {/* Interactive Icon Vessel */}
                  <div className="w-14 h-14 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] transition-all duration-400 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_20px_rgba(10,133,177,0.3)] shadow-sm relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.accentGradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      {service.iconSvg}
                    </div>
                  </div>
                  
                  {/* Status & Glowing Number Capsule */}
                  <div className="flex items-center gap-2 pr-2">
                    {service.isComingSoon ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-mono tracking-wider text-amber-500 uppercase font-bold">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>Coming Soon</span>
                      </span>
                    ) : null}

                    {/* Number Badge: Inverts to glowing gradient on hover */}
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 bg-[var(--surface-elevated)] group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:bg-gradient-to-r ${service.accentGradient}`}>
                      {service.code}
                    </span>
                  </div>
                </div>

                {/* Service Category */}
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold block mb-1.5 transition-colors group-hover:text-[var(--accent-light)]">
                  {service.category}
                </span>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors font-display">
                  <Link href={service.href} className="hover:underline">
                    {service.title}
                  </Link>
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6 line-clamp-2">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables / Points with Interactive Hover Micro-Interactions */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[var(--text-primary)] font-medium bg-[var(--surface-elevated)] border border-[var(--border)] transition-all duration-200 group-hover:bg-[var(--surface)] group-hover:border-[var(--border-subtle)] hover:!border-[var(--accent)] hover:!translate-x-1 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Luminous Shimmer Explore Service Button with Left-to-Right Continuous Shimmer */}
              <div className="pt-5 border-t border-[var(--border)] relative z-10">
                <Link 
                  href={service.href}
                  className={`relative w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all duration-300 btn-shimmer-sweep shadow-sm hover:shadow-lg hover:-translate-y-0.5 group/btn overflow-hidden bg-gradient-to-r ${service.accentGradient}`}
                >
                  <span className="relative z-10 font-display">Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
