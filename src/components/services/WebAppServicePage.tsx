'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  ChevronDown, 
  Zap, 
  Globe, 
  Layers, 
  Code2, 
  Workflow, 
  Clock, 
  Award, 
  Users, 
  Sparkles, 
  Database, 
  Server, 
  Monitor, 
  Tablet, 
  Smartphone,
  ExternalLink,
  Lock,
  BarChart3
} from 'lucide-react';
import { DETAILED_SERVICES } from '@/data/serviceDetails';
import { StarWatermark } from '@/components/StarEmblem';
import FinalCTA from '@/components/FinalCTA';

export default function WebAppServicePage() {
  const data = DETAILED_SERVICES['website-development'];
  const [browserPreviewSize, setBrowserPreviewSize] = useState<'desktop' | 'tablet' | 'phone'>('desktop');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const bentoServices = [
    {
      num: '01',
      title: 'Custom Web Development',
      desc: 'Our custom web application development services utilize agile methodology to transform concepts into fully tailored web solutions that boost user engagement and operational speed.',
      isBig: true,
      badge: 'Full-Stack TypeScript',
      highlights: ['Next.js 14 App Router', 'React Server Components', 'Strict TypeScript typing', 'Sub-second LCP'],
    },
    {
      num: '02',
      title: 'High-Volume E-Commerce Development',
      desc: 'Enhance your online business with our expertise in headless e-commerce web application development. We create robust sales platforms and optimize user experiences to drive revenue growth.',
      isBig: true,
      badge: 'Headless Commerce',
      highlights: ['Headless Shopify / Medusa', 'Instant 2-tap checkout funnels', 'Multi-currency localization', 'Live inventory webhooks'],
    },
    {
      num: '03',
      title: 'SaaS Web App Development',
      desc: 'Scalable multi-tenant SaaS platforms with secure data isolation, role-based access, and automated Stripe billing.',
      isBig: false,
      badge: 'B2B SaaS',
      highlights: ['Tenant data isolation', 'Usage metering & tiers'],
    },
    {
      num: '04',
      title: 'Enterprise Customer Portals',
      desc: 'Secure, authenticated B2B customer self-service hubs for real-time order tracking, invoice downloads, and support ticketing.',
      isBig: false,
      badge: 'Client Hubs',
      highlights: ['Self-service accounts', 'Dynamic invoice PDFs'],
    },
    {
      num: '05',
      title: 'Progressive Web Apps (PWA)',
      desc: 'Installable web experiences with offline caching, push notifications, and fast navigation without app store barriers.',
      isBig: false,
      badge: 'Installable PWA',
      highlights: ['Service worker caching', 'Add to Home Screen'],
    },
    {
      num: '06',
      title: 'Custom Headless CMS Development',
      desc: 'Decoupled content architectures giving marketing teams complete visual editing autonomy with live draft previews.',
      isBig: false,
      badge: 'Sanity / Strapi',
      highlights: ['Zero-code page builder', 'Automated asset CDN'],
    },
    {
      num: '07',
      title: 'Enterprise Core Web Modernization',
      desc: 'Refactoring slow, monolithic legacy codebases into modular micro-frontends with zero system downtime or data loss.',
      isBig: false,
      badge: 'Modernization',
      highlights: ['Strangler Fig pattern', 'Automated dual-write'],
    },
    {
      num: '08',
      title: 'Web App Support and Maintenance',
      desc: '24/7 uptime monitoring, monthly security vulnerability patches, database index tuning, and performance guardrails.',
      isBig: false,
      badge: '24/7 SLA',
      highlights: ['Sub-100ms response SLA', 'Continuous CI/CD audits'],
    },
  ];

  const industryVerticals = [
    { title: 'Health Care', desc: 'Accessible, HIPAA-compliant patient portals, doctor booking calendars, and lab report downloads.' },
    { title: 'Retail & Consumer', desc: 'Omnichannel inventory catalogs, localized multi-currency pricing, and customer loyalty rewards.' },
    { title: 'E-Commerce', desc: 'Sub-second catalog browsing, instant sliding carts, and automated shipping/tax calculation.' },
    { title: 'Real Estate', desc: 'Interactive property listings, high-resolution virtual tours, and direct CRM lead ingestion.' },
    { title: 'Logistics & Supply Chain', desc: 'Fleet dispatch consoles, real-time shipment milestones, and automated digital bills of lading.' },
    { title: 'Education & EdTech', desc: 'Gated student workspaces, video streaming with progress tracking, and dynamic PDF certificates.' },
    { title: 'FinTech & Payments', desc: 'Secure B2B payment gateways, virtual account ledgers, and automated compliance audit logging.' },
    { title: 'Manufacturing & ERP', desc: 'Automated inventory tracking, supplier procurement portals, and machine maintenance logs.' },
    { title: 'On-Demand Platforms', desc: 'Real-time booking dispatch, dynamic surge pricing, and live service status notifications.' },
  ];

  const reasonsToInvest = [
    { title: 'Streamline the Business Process', desc: 'Centralize operations into one unified web platform, eliminating manual email handoffs and spreadsheet chaos.' },
    { title: 'Gain Competitive Edge', desc: 'Sub-second load times and intuitive workflows convert visitors into long-term clients before competitors even load.' },
    { title: 'Enhanced Efficiency', desc: 'Automate repetitive workflows, invoice distribution, and customer onboarding to scale revenue without adding headcount.' },
    { title: 'Customizable and Scalable', desc: 'Engineered specifically around your proprietary business logic, scaling effortlessly as transaction volumes multiply.' },
    { title: 'Continuous Business Operation', desc: 'Cloud-native infrastructure deployed globally ensures 24/7/365 availability with automated multi-region failover.' },
    { title: 'Automates Repetitive Tasks', desc: 'Background job queues handle heavy data processing, PDF generation, and third-party API syncs in the background.' },
  ];

  const destinationBenefits = [
    { title: 'Cost-Effective Milestone Process', desc: 'Billed transparently by verified milestones. You test and verify working software every sprint before release sign-off.' },
    { title: 'All Under One Roof', desc: 'From UX design and technical architecture to full-stack code, SEO schemas, and 24/7 cloud DevOps maintenance.' },
    { title: 'Senior Creative Engineering Team', desc: 'Work directly with hands-on senior full-stack engineers who understand database indexing and edge caching.' },
    { title: '24/7 Help Desk & Telemetry', desc: 'Continuous uptime monitoring with proactive alerting ensures issues are resolved before users notice.' },
    { title: 'Modern Technology Integration', desc: 'Engineered with Next.js 14, TypeScript, and modern headless CMS platforms — zero outdated plugins.' },
    { title: 'Post-Deployment SLA & Warranty', desc: 'Includes complimentary 30–60 days warranty plus dedicated ongoing maintenance retainers for long-term growth.' },
  ];

  const webProcessStages = [
    { num: '01', title: 'Ideation & Scope', desc: 'We dissect your business goals, user personas, and technical constraints to construct a verified architecture specification.' },
    { num: '02', title: 'Competitive Analysis', desc: 'Auditing market leaders to identify user experience gaps and Core Web Vitals advantages.' },
    { num: '03', title: 'Intuitive UI/UX Design', desc: 'Figma component systems, responsive wireframes, and interactive prototypes tested across desktop and mobile screens.' },
    { num: '04', title: 'Development Phase', desc: 'Two-week agile sprints in shared Git repositories with clean TypeScript typing and weekly staging previews.' },
    { num: '05', title: 'Robust Testing', desc: 'Cross-browser QA, automated regression suites, screen-reader accessibility, and security penetration checks.' },
    { num: '06', title: 'Production Deployment', desc: 'Zero-downtime DNS cutover, automated 301 redirect mapping, and Google Search Console indexing setup.' },
    { num: '07', title: 'Support and Maintenance', desc: '24/7 uptime telemetry, monthly security dependency updates, and continuous performance tuning.' },
  ];

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (SVSS wd-hero-sec)                                        */}
      {/* ========================================================================= */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={680} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-mono text-[var(--text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-[var(--border)]" /></li>
              <li>
                <Link href="/services/" className="hover:text-[var(--accent)] transition-colors">
                  Services
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-[var(--border)]" /></li>
              <li className="text-[var(--accent)] font-semibold">
                Website Development
              </li>
            </ol>
          </nav>

          {/* Hero Top Content (wd-hero-top) */}
          <div className="text-center max-w-4xl mx-auto space-y-5 mb-12 sm:mb-16">
            
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>Website Designing &amp; Full-Stack Web Apps</span>
            </div>

            {/* H1 with SVSS signature highlight span */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              Trusted Web Application{' '}
              <span className="text-[var(--accent)] block sm:inline">
                Development Company
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl mx-auto">
              With a team of dedicated full-stack engineers, Tech22Blocks provides personalized web application development services tailored to your unique requirements, from high-converting corporate portals to full enterprise SaaS platforms.
            </p>

            {/* Action Buttons (wd-hero-btns) */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all flex items-center gap-2"
              >
                <span>Get Your Custom WebApp</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#our-works"
                className="text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5 px-4 py-3"
              >
                <span>See our work</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Feature Points Row (wd-points) */}
            <ul className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-[var(--text-muted)]">
              {['Mobile-first design', 'SEO-ready code', 'Easy Headless CMS', 'Support after launch'].map((pt, idx) => (
                <li 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] font-medium flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* ========================================================================= */}
          {/* INTERACTIVE BROWSER WINDOW MOCKUP (SVSS wd-browser)                       */}
          {/* ========================================================================= */}
          <div className="max-w-4xl mx-auto">
            <div className="wd-browser-window">
              
              {/* Browser Header Bar with 3 Dots & Device Switcher */}
              <div className="wd-browser-bar">
                
                {/* 3 Dots */}
                <div className="wd-browser-dots">
                  <span className="bg-rose-500/80" />
                  <span className="bg-amber-500/80" />
                  <span className="bg-emerald-500/80" />
                </div>

                {/* URL Bar Badge */}
                <div className="px-4 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-500" />
                  <span className="text-[var(--text-primary)] font-semibold">nexusflow.tech22blocks.com</span>
                </div>

                {/* Interactive Device Size Switcher */}
                <div className="flex items-center gap-1 bg-[var(--surface)] p-1 rounded-lg border border-[var(--border)]">
                  <button
                    type="button"
                    onClick={() => setBrowserPreviewSize('desktop')}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1 ${
                      browserPreviewSize === 'desktop' 
                        ? 'bg-[var(--accent)] text-white shadow-sm' 
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Monitor className="w-3 h-3" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBrowserPreviewSize('tablet')}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1 ${
                      browserPreviewSize === 'tablet' 
                        ? 'bg-[var(--accent)] text-white shadow-sm' 
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Tablet className="w-3 h-3" />
                    <span className="hidden sm:inline">Tablet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBrowserPreviewSize('phone')}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1 ${
                      browserPreviewSize === 'phone' 
                        ? 'bg-[var(--accent)] text-white shadow-sm' 
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Smartphone className="w-3 h-3" />
                    <span className="hidden sm:inline">Phone</span>
                  </button>
                </div>

              </div>

              {/* Browser Viewport Content with Animated Width Transition */}
              <div className="bg-slate-950 p-4 sm:p-6 lg:p-8 flex justify-center transition-all duration-500">
                <div 
                  className={`transition-all duration-500 w-full ${
                    browserPreviewSize === 'desktop' 
                      ? 'max-w-full' 
                      : browserPreviewSize === 'tablet' 
                      ? 'max-w-[75%]' 
                      : 'max-w-[340px]'
                  }`}
                >
                  {/* High-Polish Simulated Web Portal Screen */}
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-6 text-white space-y-5">
                    
                    {/* Top Row: Portal Identity & User Profile */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center font-bold text-xs">
                          NF
                        </div>
                        <div>
                          <div className="text-xs font-bold">NexusFlow Portal</div>
                          <div className="text-[10px] text-slate-400 font-mono">Enterprise B2B Hub</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                        <span className="text-[10px] font-mono text-emerald-400 font-semibold">Sub-0.6s LCP</span>
                      </div>
                    </div>

                    {/* KPI Cards Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                        <div className="text-[10px] text-slate-400">Total B2B Volume</div>
                        <div className="text-sm sm:text-base font-extrabold text-white mt-0.5">$1.84M</div>
                        <div className="text-[9px] text-emerald-400 font-mono">+18% this month</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                        <div className="text-[10px] text-slate-400">Avg Page Load</div>
                        <div className="text-sm sm:text-base font-extrabold text-white mt-0.5">540ms</div>
                        <div className="text-[9px] text-sky-400 font-mono">Edge CDN Cache</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 col-span-2 sm:col-span-1">
                        <div className="text-[10px] text-slate-400">Active Workspaces</div>
                        <div className="text-sm sm:text-base font-extrabold text-white mt-0.5">142 Accounts</div>
                        <div className="text-[9px] text-purple-400 font-mono">Zero Downtime</div>
                      </div>
                    </div>

                    {/* Simulated Table Data */}
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 pb-1 border-b border-slate-800">
                        <span>Recent Client Invoices</span>
                        <span className="font-mono text-[10px] text-slate-400">Status</span>
                      </div>
                      {[
                        { client: 'Apex Distribution Corp', id: 'INV-4091', amount: '$42,500', status: 'PAID' },
                        { client: 'Vanguard Medical Devices', id: 'INV-4092', amount: '$18,200', status: 'PROCESSING' },
                        { client: 'Pacific Logistics Group', id: 'INV-4093', amount: '$89,000', status: 'PAID' },
                      ].map((inv, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px] text-slate-300">
                          <div>
                            <span className="font-medium text-white">{inv.client}</span>{' '}
                            <span className="font-mono text-slate-500 text-[10px]">({inv.id})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-slate-200">{inv.amount}</span>
                            <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold ${
                              inv.status === 'PAID' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                            }`}>
                              {inv.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES WE OFFER (SVSS BENTO GRID: wd-svc-sec & wd-bento)              */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Web Application Development Services We Offer
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              We adopt a tailored approach to developing web applications that seamlessly align with your business goals. From initial concept to final deployment, we guarantee that your digital solution is as distinctive as your vision.
            </p>
          </div>

          {/* Authentic SVSS Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bentoServices.map((tile, idx) => (
              <div
                key={idx}
                className={`wd-tile-hover p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm flex flex-col justify-between ${
                  tile.isBig ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-mono font-extrabold text-[var(--accent)]">
                      {tile.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                      {tile.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] font-display tracking-tight mb-2">
                    {tile.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {tile.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] space-y-1">
                  {tile.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-[var(--text-primary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WEB APPS BUILT FOR YOUR INDUSTRY (SVSS bg-soft)                        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Web Apps Built for Your Industry
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Explore specialized domain applications we engineer across commercial verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryVerticals.map((ind, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold mb-3">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "OUR WORKS" (SVSS ws-sec with BROWSER WINDOW FRAMES)                   */}
      {/* ========================================================================= */}
      <section id="our-works" className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Our Works
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Websites and web platforms we have designed and built, live in production today. Scroll to explore each one.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            
            {/* WORK 1: NexusFlow Enterprise Portal */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Browser Frame Column (ws-frame) */}
              <div className="lg:col-span-6">
                <div className="wd-browser-window">
                  <div className="wd-browser-bar">
                    <div className="wd-browser-dots">
                      <span className="bg-rose-500/80" />
                      <span className="bg-amber-500/80" />
                      <span className="bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">nexusflow.portal</span>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">● LIVE</span>
                  </div>
                  
                  {/* Viewport content */}
                  <div className="bg-slate-950 p-6 text-white space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <div className="text-xs text-slate-400">Client Hub</div>
                        <div className="text-base font-bold">NexusFlow Industrial Portal</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400">
                        Sub-0.6s LCP
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">Real-Time Catalog</div>
                        <div className="font-bold text-white text-sm">12,400+ SKUs</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">Auto Invoicing</div>
                        <div className="font-bold text-white text-sm">Stripe Webhooks</div>
                      </div>
                    </div>

                    <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-300">
                        <span>Multi-Role Permissions Matrix</span>
                        <span className="text-emerald-400">RBAC Verified</span>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Wholesale buyer tiers, automated margin calculation, and one-click repeat ordering.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Details Copy (ws-copy) */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-extrabold text-[var(--accent)] block">
                  01 // B2B Enterprise Portal &amp; SaaS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
                  NexusFlow Enterprise Portal
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  A high-throughput B2B customer self-service portal engineered for an industrial distributor. Replaced manual email ticketing with real-time order tracking, automated invoicing, bulk catalog search, and multi-tier user role permissions.
                </p>

                {/* What we built definition list (dl.ws-built) */}
                <div className="pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    What We Built:
                  </div>
                  <dl className="space-y-2 border-t border-[var(--border)] pt-2 text-xs sm:text-sm">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Catalog</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">Real-time stock, tiered wholesale pricing &amp; backorders</dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Invoicing</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">Instant PDF billing generation &amp; Stripe payment gateway</dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Security</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">Multi-tenant isolation &amp; role-based RBAC permissions</dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Speed</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">Sub-second LCP (0.6s) across global cloud edge CDN</dd>
                    </div>
                  </dl>
                </div>

                <div className="pt-3 flex flex-wrap gap-2">
                  {['Next.js 14 App Router', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe', 'Edge CDN'].map((t, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* WORK 2: ApexAnalytics SaaS Platform */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Browser Frame Column (ws-frame) */}
              <div className="lg:col-span-6 lg:order-2">
                <div className="wd-browser-window">
                  <div className="wd-browser-bar">
                    <div className="wd-browser-dots">
                      <span className="bg-rose-500/80" />
                      <span className="bg-amber-500/80" />
                      <span className="bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">app.apexanalytics.io</span>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">● LIVE</span>
                  </div>
                  
                  {/* Viewport content */}
                  <div className="bg-slate-950 p-6 text-white space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <div className="text-xs text-slate-400">BI Telemetry Engine</div>
                        <div className="text-base font-bold">ApexAnalytics Real-Time Dashboard</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-400">
                        100k+ Points/Sec
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">Processing Speed</div>
                        <div className="font-bold text-white text-sm">60 FPS Vector Render</div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">Uptime SLA</div>
                        <div className="font-bold text-white text-sm">99.99% Enterprise</div>
                      </div>
                    </div>

                    <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-300">
                        <span>Automated Scheduled Reporting</span>
                        <span className="text-emerald-400">SOC2 Ready</span>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Automated weekly PDF compliance packages, custom filter bookmarks, and team sharing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Details Copy (ws-copy) */}
              <div className="lg:col-span-6 space-y-4 lg:order-1">
                <span className="text-xs font-mono font-extrabold text-[var(--accent)] block">
                  02 // Business Intelligence &amp; Data Platform
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
                  ApexAnalytics SaaS Platform
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  A real-time financial telemetry dashboard processing millions of daily transactions. Features custom vector chart rendering, automated PDF reporting, multi-currency conversion, and team workspace collaboration.
                </p>

                {/* What we built definition list (dl.ws-built) */}
                <div className="pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    What We Built:
                  </div>
                  <dl className="space-y-2 border-t border-[var(--border)] pt-2 text-xs sm:text-sm">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Engine</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">100k+ data points rendered with hardware-accelerated 60 FPS charts</dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Telemetry</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">Instant client-side multi-parameter filtering &amp; CSV export</dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Caching</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">Global Edge KV caching achieving sub-50ms query responses</dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Audit</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">SOC2 compliant append-only immutable action log</dd>
                    </div>
                  </dl>
                </div>

                <div className="pt-3 flex flex-wrap gap-2">
                  {['Next.js SSR', 'React', 'TypeScript', 'Edge Functions', 'Tailwind CSS', 'Chart.js'].map((t, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. REASONS TO INVEST IN WEB APPLICATION DEVELOPMENT                       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Reasons to Invest in Web Application Development
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Why leading organizations build custom web platforms instead of settling for off-the-shelf templates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasonsToInvest.map((reason, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all"
              >
                <div className="text-xs font-mono font-bold text-[var(--accent)] mb-2">
                  // Advantage 0{idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY TECH22BLOCKS IS YOUR ULTIMATE DESTINATION                          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Tech22Blocks is Your Destination for Web Development
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              We combine enterprise engineering rigor with transparent sprint velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationBenefits.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR WEB APP DEVELOPMENT PROCESS (SVSS wd-log-sec)                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Our Web App Development Process
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              A disciplined 7-stage engineering methodology turning technical requirements into scalable production releases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {webProcessStages.map((stage) => (
              <div 
                key={stage.num}
                className="p-5 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-extrabold text-[var(--accent)] mb-2">
                    {stage.num}
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-display mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WEB APP DEVELOPMENT FAQS (SVSS Accordion)                              */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Web Application Development FAQs
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Straightforward answers to common questions about Next.js architectures, SEO equity preservation, CMS editing, and IP ownership.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-display">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[var(--accent)] border-[var(--accent)]' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)]/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. LET'S BUILD YOUR CUSTOM WEB APPLICATION CTA                            */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
            // Start Your Web Project
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Let’s Build Your Custom Web Application!
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transform your business workflows with a resilient, sub-second web platform. Tell us your requirements and receive a free technical feasibility blueprint and milestone quote.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-slate-950 bg-white hover:bg-sky-400 hover:text-slate-950 shadow-xl transition-all"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
