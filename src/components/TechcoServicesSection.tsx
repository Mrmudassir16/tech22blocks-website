'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock, 
  Zap, 
  Award, 
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';

export interface TechcoServiceItem {
  id: string;
  slug: string;
  title: string;
  href: string;
  image: string;
  categories: string[];
  description: string;
  deliverablesSummary: string;
}

const TECHCO_SERVICES: TechcoServiceItem[] = [
  {
    id: '01',
    slug: 'website-development',
    title: 'Website Development',
    href: '/services/website-development/',
    image: '/images/service_image_3.webp',
    categories: ['Next.js / SSR', 'Enterprise Portals'],
    description: 'High-performance web platforms engineered with modern component architectures for speed, reliability, and enterprise search indexing.',
    deliverablesSummary: 'Sub-second page loads, headless CMS, and enterprise technical SEO.'
  },
  {
    id: '02',
    slug: 'mobile-applications',
    title: 'Mobile Applications (iOS & Android)',
    href: '/services/mobile-applications/',
    image: '/images/service_image_5.webp',
    categories: ['React Native', 'iOS & Android'],
    description: 'Fluid 60 FPS native and cross-platform mobile apps with offline synchronization, encrypted storage, and seamless app store releases.',
    deliverablesSummary: 'Cross-platform mobile apps, biometric security, and app store deployment.'
  },
  {
    id: '03',
    slug: 'uiux-design',
    title: 'UI/UX Design Services',
    href: '/services/uiux-design/',
    image: '/images/service_image_1.webp',
    categories: ['Design Systems', 'Figma Prototyping'],
    description: 'Purposeful digital interfaces engineered through deep user journey mapping, interactive prototypes, and scalable enterprise design tokens.',
    deliverablesSummary: 'Figma interactive prototypes, user journeys, and component design tokens.'
  },
  {
    id: '04',
    slug: 'custom-software',
    title: 'Custom Software Development',
    href: '/services/custom-software/',
    image: '/images/service_image_4.webp',
    categories: ['Microservices', 'Cloud APIs'],
    description: 'Bespoke core business platforms, unified database schemas, high-throughput APIs, and microservices engineered around your unique workflow.',
    deliverablesSummary: 'Custom ERP/operations portals, high-throughput APIs, and relational schemas.'
  },
  {
    id: '05',
    slug: 'it-consulting',
    title: 'Audit & IT Consulting',
    href: '/services/it-consulting/',
    image: '/images/service_image_2.webp',
    categories: ['Architecture Audit', 'DevSecOps'],
    description: 'Direct, jargon-free technical advisory evaluating codebases, identifying bottlenecks, and crafting pragmatic roadmaps aligned with business milestones.',
    deliverablesSummary: 'Architecture due diligence, technical debt audit, and fractional CTO advisory.'
  },
  {
    id: '06',
    slug: 'web3',
    title: 'Web3.0 Engineering & Maintenance',
    href: '/services/web3/',
    image: '/images/case_image_4.webp',
    categories: ['Smart Contracts', 'DeFi & Infra'],
    description: 'Decentralized protocol research, smart contract auditing, cryptographic verification, and 24/7 uptime maintenance with sub-100ms latency.',
    deliverablesSummary: 'Smart contract development, continuous telemetry, and zero-downtime upgrades.'
  },
];

const WHY_BETTER_POINTS = [
  {
    num: '01',
    title: 'Quality Comes First',
    desc: 'Zero architectural shortcuts. We build production-hardened software with strict TypeScript typing, automated regression suites, and clean documentation.',
    icon: ShieldCheck,
  },
  {
    num: '02',
    title: 'Direct Senior Engineering',
    desc: 'Work directly with hands-on senior architects and builders. No non-technical account managers or lost-in-translation handoffs.',
    icon: Users,
  },
  {
    num: '03',
    title: 'On-Time Milestone Delivery',
    desc: 'Predictable, milestone-driven sprint cycles. Weekly staging demos and transparent Kanban tracking keep every phase on schedule.',
    icon: Clock,
  },
  {
    num: '04',
    title: 'Transparent Costs & Scope',
    desc: 'No hidden billing surprises. Clear deliverables, verified project gates, and upfront scope definitions ensure budget predictability.',
    icon: Zap,
  },
  {
    num: '05',
    title: '100% Code & IP Ownership',
    desc: 'You own 100% of all code, git repositories, deployment keys, and intellectual property from Day 1. No vendor lock-in, ever.',
    icon: Award,
  },
  {
    num: '06',
    title: 'Quick Scale-up & Resilience',
    desc: 'Cloud-native microservices and modular architectures engineered to scale effortlessly as your user base and data volumes expand.',
    icon: Sparkles,
  },
];

export default function TechcoServicesSection() {
  return (
    <div className="relative overflow-hidden bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. TECHCO-STYLE HERO BANNER WITH 3D ANIMATED ILLUSTRATION                 */}
      {/* ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 lg:py-24 bg-[var(--surface)] border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              {/* Clean Badge without "Our Main Services" */}
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>Enterprise Capabilities</span>
              </div>

              {/* Main Headings */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
                Our Services
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[var(--accent)] font-display">
                Tailored IT Solutions for Your Success
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl">
                We understand that every business is unique, with its own operational constraints, scale targets, and technical debt. We engineer dependable digital platforms, native apps, and custom enterprise software designed to eliminate bottlenecks and deliver lasting commercial impact.
              </p>

              {/* Actions & Breadcrumb */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all flex items-center gap-2"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#featured-services"
                  className="px-5 py-3.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all"
                >
                  Explore Capabilities
                </a>
              </div>

              {/* Breadcrumb Navigation */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 text-[var(--border)]" />
                <span className="text-[var(--text-primary)] font-bold">Services</span>
              </div>
            </div>

            {/* Right Side: Techco 3D Animated Image */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">
                {/* Ambient Glow */}
                <div className="absolute inset-4 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none transform-gpu animate-pulse" />
                
                {/* 3D Animated Floating Image */}
                <div className="relative w-full h-full transform-gpu transition-transform duration-700 hover:scale-105 animate-[float_6s_ease-in-out_infinite]">
                  <Image 
                    src={getAssetUrl('/images/service_image_8.webp')}
                    alt="Tailored IT Solutions 3D Illustration"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                    priority
                  />
                </div>

                {/* Floating Metric Badges */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-2 p-3 sm:p-3.5 rounded-2xl bg-[var(--surface-elevated)]/90 backdrop-blur-md border border-[var(--border)] shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">100% Code Ownership</div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">Direct Git &amp; Cloud Keys</div>
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 sm:top-4 sm:right-2 p-3 sm:p-3.5 rounded-2xl bg-[var(--surface-elevated)]/90 backdrop-blur-md border border-[var(--border)] shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">Sub-Second Velocity</div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">Weekly Staging Releases</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED SERVICES (6 BIG TECHCO CARDS IN 2-COL GRID)                   */}
      {/* ========================================================================= */}
      <section id="featured-services" className="relative py-14 sm:py-20 lg:py-24 bg-[var(--canvas)]" aria-labelledby="featured-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Sub-Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
                Featured Services
              </span>
              <Image 
                src={getAssetUrl('/images/shape_title_under_line.svg')} 
                alt="" 
                width={42} 
                height={8} 
                className="inline-block brightness-150"
              />
            </div>
            <h2 id="featured-services-heading" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display mb-4">
              Empowering Your Business Through Scalable Technology
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal leading-relaxed">
              Explore our core capabilities. Click any service card to open its dedicated deep-dive page with architecture scope, stack details, and deliverables.
            </p>
          </div>

          {/* 2-Column Responsive Service Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {TECHCO_SERVICES.map((service) => (
              <div 
                key={service.slug}
                className="service_block group relative rounded-[28px] overflow-hidden bg-slate-950 border border-[var(--border)] shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Visual Image Container with Techco scale effects */}
                <div className="service_image relative h-[380px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[0.98] rounded-[24px]">
                  <Image 
                    src={getAssetUrl(service.image)} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    priority={service.id === '01' || service.id === '02'}
                  />
                  {/* High contrast gradient overlay for razor-sharp readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 z-0 pointer-events-none" />
                </div>

                {/* Top Badge: Capability Number */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-white/10 text-white border border-white/20">
                    Service {service.id}
                  </span>
                </div>

                {/* Bottom Content Area (service_content) */}
                <div className="service_content absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 z-10 flex flex-col justify-end">
                  
                  {/* Title with animated underline effect */}
                  <Link href={service.href} className="group/title inline-block mb-3">
                    <h3 className="service_title text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight transition-colors duration-300 group-hover/title:text-sky-300">
                      {service.title}
                    </h3>
                    <span className="block h-[2px] w-0 bg-[var(--accent)] group-hover/title:w-full transition-all duration-500 rounded-full" />
                  </Link>

                  {/* Concise description */}
                  <p className="service_description text-xs sm:text-sm text-slate-200/90 leading-relaxed line-clamp-2 mb-6">
                    {service.description}
                  </p>

                  {/* Links Wrapper: Category Pills + Round 60px Action Button */}
                  <div className="links_wrapper flex items-center justify-between gap-4 pt-2">
                    
                    {/* Category Buttons Group (Frosted glass pills) */}
                    <div className="category_btns_group flex flex-wrap items-center gap-2">
                      {service.categories.map((cat, i) => (
                        <Link 
                          key={i} 
                          href={service.href}
                          className="backdrop-blur-md bg-white/10 hover:bg-[var(--accent)] border border-white/20 hover:border-[var(--accent)] text-white text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-lg transition-all duration-200"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>

                    {/* Circular Action Button (icon_block) */}
                    <Link
                      href={service.href}
                      aria-label={`Open ${service.title} page`}
                      className="icon_block w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-slate-950 group-hover:bg-[var(--accent)] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xl flex-shrink-0 group-hover:rotate-45 group-hover:scale-105"
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform" />
                    </Link>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "WHY OUR SERVICES ARE BETTER THAN OTHERS?" WITH 3D VISUAL              */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--surface)] border-y border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={600} position="top-right" variant="blue" opacity={0.02} rotate={-20} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left 3D Visual Column matching Techco Section 11 */}
            <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[400px] lg:max-w-[460px] aspect-square flex items-center justify-center">
                {/* Back Glow */}
                <div className="absolute inset-4 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* 3D Tech Geometry Illustration */}
                <div className="relative w-full h-full transform-gpu transition-transform duration-700 hover:scale-105 animate-[float_7s_ease-in-out_infinite]">
                  <Image 
                    src={getAssetUrl('/images/about_image_5.webp')}
                    alt="Why Our Services Are Better 3D Visual"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  />
                </div>

                {/* Micro Tech Floating Card */}
                <div className="absolute bottom-6 right-2 sm:right-6 p-3 rounded-2xl bg-[var(--surface-elevated)]/95 backdrop-blur-md border border-[var(--border)] shadow-xl flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono font-bold text-[var(--text-primary)]">Zero Tech Debt Protocol</span>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
                  Why Us • Better Value
                </span>
                <Image 
                  src={getAssetUrl('/images/shape_title_under_line.svg')} 
                  alt="" 
                  width={42} 
                  height={8} 
                  className="inline-block brightness-150"
                />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display mb-3">
                Why Our Services are Better Than Others?
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal leading-relaxed mb-8">
                We combine enterprise engineering rigor with transparent sprint velocity. Here is how our model outperforms conventional outsourcing agencies.
              </p>

              {/* 6 Value Points in 2-Col Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {WHY_BETTER_POINTS.map((point) => {
                  const IconComp = point.icon;

                  return (
                    <div 
                      key={point.num}
                      className="group p-4 sm:p-5 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20 group-hover:scale-110 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono font-extrabold text-[var(--border)] group-hover:text-[var(--accent)]/50 transition-colors">
                          {point.num}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-display tracking-tight mb-1 group-hover:text-[var(--accent)] transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom Trust Banner */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display">
                Need a tailored architectural assessment or feasibility check?
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                Direct consultation with our engineering directors. Zero obligations, 100% technical transparency.
              </p>
            </div>
            <Link
              href="/contact/"
              className="px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>Schedule Engineering Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
