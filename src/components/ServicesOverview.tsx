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
    id: 'website-development',
    code: '01',
    category: 'Digital Experience',
    title: 'Web Application Design & Development',
    shortDesc: 'High-performance, search-optimized web platforms built with modern component architectures for speed, reliability, and conversions.',
    href: '/services/website-development/',
    accentGradient: 'from-sky-500 to-cyan-400',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    cornerGradient: 'from-cyan-500/25 via-sky-500/15 to-transparent',
    iconSvg: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor Stand */}
        <path d="M25 46L22 55H42L39 46" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Monitor Frame */}
        <rect x="6" y="10" width="52" height="36" rx="6" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2.6" />
        {/* Browser Header Strip */}
        <path d="M6 16C6 12.6863 8.68629 10 12 10H52C55.3137 10 58 12.6863 58 16V20H6V16Z" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" />
        <circle cx="12" cy="15" r="1.6" fill="#FB7185" />
        <circle cx="17.5" cy="15" r="1.6" fill="#FBBF24" />
        <circle cx="23" cy="15" r="1.6" fill="#34D399" />
        {/* Content Blocks */}
        <rect x="13" y="25" width="22" height="14" rx="3" fill="#FDE68A" stroke="#0F172A" strokeWidth="2" />
        <rect x="39" y="25" width="12" height="6" rx="2" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.8" />
        <rect x="39" y="34" width="12" height="5" rx="2" fill="#34D399" stroke="#0F172A" strokeWidth="1.8" />
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
    code: '02',
    category: 'Digital Experience',
    title: 'Mobile App Design & Development',
    shortDesc: 'Native and cross-platform iOS & Android applications engineered for fluid 60 FPS performance, offline sync, and security.',
    href: '/services/mobile-applications/',
    accentGradient: 'from-teal-500 to-emerald-400',
    glowColor: 'rgba(20, 184, 166, 0.35)',
    cornerGradient: 'from-teal-500/25 via-emerald-600/15 to-transparent',
    iconSvg: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone Body */}
        <rect x="16" y="6" width="32" height="52" rx="7" fill="#CCFBF1" stroke="#0F172A" strokeWidth="2.6" />
        {/* Notch */}
        <rect x="26" y="10" width="12" height="3" rx="1.5" fill="#0F172A" />
        {/* App Card */}
        <rect x="21" y="18" width="22" height="14" rx="4" fill="#34D399" stroke="#0F172A" strokeWidth="2" />
        {/* Code Brackets Inside */}
        <path d="M27.5 40L23.5 43.5L27.5 47M36.5 40L40.5 43.5L36.5 47M33.5 39L30.5 48" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Floating Accent Circle */}
        <circle cx="48" cy="14" r="6" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.2" />
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
    code: '03',
    category: 'Digital Experience',
    title: 'UI/UX Design Services',
    shortDesc: 'Purposeful digital interfaces engineered through empathetic user research, interactive wireframing, and design systems.',
    href: '/services/uiux-design/',
    accentGradient: 'from-violet-600 to-purple-500',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    cornerGradient: 'from-violet-500/25 via-purple-600/15 to-transparent',
    iconSvg: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Back Artboard */}
        <rect x="8" y="8" width="48" height="48" rx="8" fill="#EDE9FE" stroke="#0F172A" strokeWidth="2.6" />
        {/* Top Ruler/Swatch Strip */}
        <path d="M8 15C8 11.134 11.134 8 15 8H49C52.866 8 56 11.134 56 15V19H8V15Z" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.4" />
        {/* Color Swatches */}
        <circle cx="20" cy="31" r="7" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.2" />
        <rect x="33" y="25" width="16" height="12" rx="3" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.2" />
        {/* Bottom Pen / Layout Strip */}
        <rect x="14" y="42" width="36" height="7" rx="3.5" fill="#F472B6" stroke="#0F172A" strokeWidth="2.2" />
      </svg>
    ),
    features: [
      'Pixel-perfect UI design systems in Figma',
      'User journey mapping & UX wireframing',
      'Interactive clickable prototype validation',
    ],
  },
  {
    id: 'custom-software',
    code: '04',
    category: 'Enterprise Systems',
    title: 'Custom Software Development',
    shortDesc: 'Bespoke core systems, enterprise application architectures, and robust business workflows tailored to your operating model.',
    href: '/services/custom-software/',
    accentGradient: 'from-blue-600 to-sky-500',
    glowColor: 'rgba(14, 165, 233, 0.35)',
    cornerGradient: 'from-sky-500/25 via-blue-600/15 to-transparent',
    iconSvg: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pins in warm amber */}
        <path d="M22 6V13M32 6V13M42 6V13M22 51V58M32 51V58M42 51V58M6 22H13M6 32H13M6 42H13M51 22H58M51 32H58M51 42H58" stroke="#F59E0B" strokeWidth="3.2" strokeLinecap="round" />
        {/* Outer Chip Body */}
        <rect x="13" y="13" width="38" height="38" rx="8" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2.6" />
        {/* Inner Silicon Core */}
        <rect x="20" y="20" width="24" height="24" rx="5" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" />
        {/* Code Brackets Inside */}
        <path d="M27.5 28L23.5 32L27.5 36M36.5 28L40.5 32L36.5 36M33.5 27L30.5 37" stroke="#0F172A" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
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
    code: '05',
    category: 'Intelligence & Advisory',
    title: 'Audit & IT Consulting Services',
    shortDesc: 'Pragmatic technical advisory helping business leaders make informed architectural, vendor, and scaling decisions.',
    href: '/services/it-consulting/',
    accentGradient: 'from-indigo-600 to-blue-500',
    glowColor: 'rgba(99, 102, 241, 0.35)',
    cornerGradient: 'from-indigo-500/25 via-blue-600/15 to-transparent',
    iconSvg: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Connecting Lines */}
        <path d="M32 22V42M16 48V38H48V48" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* Top Strategy Bar */}
        <rect x="8" y="8" width="48" height="14" rx="5" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="16" cy="15" r="2.2" fill="#F59E0B" />
        <path d="M24 15H46" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
        {/* Center Audit Node */}
        <circle cx="32" cy="36" r="7" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.5" />
        {/* Bottom Endpoint Nodes */}
        <rect x="10" y="46" width="12" height="10" rx="3" fill="#818CF8" stroke="#0F172A" strokeWidth="2.4" />
        <rect x="26" y="46" width="12" height="10" rx="3" fill="#34D399" stroke="#0F172A" strokeWidth="2.4" />
        <rect x="42" y="46" width="12" height="10" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" />
      </svg>
    ),
    features: [
      'TechGuard Architectural Audit',
      'CyberSafe & Cloud IT Consulting',
      'AssuranceEdge Governance & Strategy',
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
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Decentralized Connections */}
        <path d="M32 20V11M32 44V53M21 26L13 20M43 26L51 20M21 38L13 44M43 38L51 44" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        {/* Center Hexagon Shield */}
        <path d="M32 18L44 25V39L32 46L20 39V25L32 18Z" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
        {/* Perimeter Nodes */}
        <circle cx="32" cy="9" r="4" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.2" />
        <circle cx="32" cy="55" r="4" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.2" />
        <circle cx="11" cy="19" r="4" fill="#34D399" stroke="#0F172A" strokeWidth="2.2" />
        <circle cx="53" cy="19" r="4" fill="#34D399" stroke="#0F172A" strokeWidth="2.2" />
        <circle cx="11" cy="45" r="4" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.2" />
        <circle cx="53" cy="45" r="4" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.2" />
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
          <div className="mb-3">
            <span className="heading-focus-underline text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
              Our Services
            </span>
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
                  
                  {/* Interactive Colored Icon Vessel (matching Why Tech22Blocks palette) */}
                  <div className="w-16 h-16 p-2.5 rounded-2xl bg-[var(--accent)]/[0.08] dark:bg-slate-800/90 border border-[var(--accent)]/25 flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_24px_rgba(10,133,177,0.3)] shadow-sm relative overflow-hidden">
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
