'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { ServiceDetailData } from '@/data/serviceDetails';
import {
  SERVICE_INTERACTIVE_META,
  ServiceInteractiveMeta,
} from '@/data/serviceInteractiveConfig';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { SectionTransitionShape } from '@/components/design-system/SectionDecorations';
import ServiceHeroShowcase from '@/components/services/ServiceHeroShowcase';
import ServiceBlueprintDiagram from '@/components/services/ServiceBlueprintDiagram';
import {
  DisciplineCoinEmblem,
  TECH_SKILL_LOGO,
} from '@/components/services/ServiceDisciplineVisuals';
import FinalCTA from '@/components/FinalCTA';

interface ServiceDetailTemplateProps {
  data: ServiceDetailData;
}

function splitHeading(heading: string): { first: string; second: string } {
  const words = heading.trim().split(/\s+/);
  if (words.length <= 2) {
    return { first: words[0] || '', second: words.slice(1).join(' ') };
  }
  const splitIdx = Math.ceil(words.length / 2);
  return {
    first: words.slice(0, splitIdx).join(' '),
    second: words.slice(splitIdx).join(' '),
  };
}

export default function ServiceDetailTemplate({ data }: ServiceDetailTemplateProps) {
  const slug = data.slug as 'uiux-design' | 'custom-software' | 'it-consulting' | 'web3';
  const meta: ServiceInteractiveMeta =
    SERVICE_INTERACTIVE_META[slug] || SERVICE_INTERACTIVE_META['custom-software'];

  // Interactive States matching Mobile, Web & Home pages
  const [activePlatformTab, setActivePlatformTab] = useState<number>(0);
  const [activeFlowIndex, setActiveFlowIndex] = useState<number>(
    Math.min(2, Math.max(0, data.capabilities.length - 1))
  );
  const [activeStackCard, setActiveStackCard] = useState<number>(0);
  const [activeTechCat, setActiveTechCat] = useState<number>(0);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Refs for Cover Flow & Scroll Observers
  const stackCardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const processStepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const flowContainerRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragMoved = useRef<boolean>(false);

  const otherServices = COMPANY.services.filter((s) => s.id !== data.slug);

  // Reset tab indices cleanly when switching slug routes
  useEffect(() => {
    setActivePlatformTab(0);
    setActiveFlowIndex(Math.min(2, Math.max(0, data.capabilities.length - 1)));
    setActiveStackCard(0);
    setActiveTechCat(0);
    setActiveProcessStep(0);
    setOpenFaqIndex(0);
  }, [data.slug, data.capabilities.length]);

  // 1. Scroll Observer for Process Dark Sticky Story (.ms-jr)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-svc-step'));
            if (!isNaN(idx)) {
              setActiveProcessStep(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
      }
    );

    processStepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data.slug, data.process.length]);

  // 2. Scroll Observer for Solutions Left Nav + Stacking Cards (.hp-scwrap)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-svc-stack'));
            if (!isNaN(idx)) {
              setActiveStackCard(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    stackCardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data.slug, data.solutions.length]);

  const handleNavClick = (idx: number) => {
    setActiveStackCard(idx);
    const target = stackCardRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProcessStepClick = (idx: number) => {
    setActiveProcessStep(idx);
    const target = processStepRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Cover Flow Drag & Keyboard Controls
  const goFlow = useCallback(
    (idx: number) => {
      setActiveFlowIndex(Math.max(0, Math.min(data.capabilities.length - 1, idx)));
    },
    [data.capabilities.length]
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragMoved.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 55) {
      dragMoved.current = true;
      goFlow(activeFlowIndex + (dx < 0 ? 1 : -1));
      dragStartX.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    dragStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goFlow(activeFlowIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goFlow(activeFlowIndex + 1);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Pre-split headings into Two-Tone Black & Blue Shimmer matching Home page
  const platHead = splitHeading(data.platformsHeading);
  const capHead = splitHeading(data.capabilitiesHeading);
  const solHead = splitHeading(data.solutionsHeading);
  const featHead = splitHeading(data.featuresHeading);
  const techHead = splitHeading(data.technologiesHeading);
  const procHead = splitHeading(data.processHeading);
  const waysHead = splitHeading(data.waysToWorkHeading);

  const totalSteps = Math.max(1, data.process.length);
  const currentPct = Math.round(((activeProcessStep + 1) / totalSteps) * 100);

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (MOBILE KICKER + INTERACTIVE DOMAIN STUDIO CONSOLE)       */}
      {/* Note: No overflow-hidden on root wrapper so sticky child sections work!    */}
      {/* ========================================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden border-b border-[var(--border)] bg-[var(--surface)] transition-colors duration-200">
        <StarWatermark size={660} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.07] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-mono text-[var(--text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[var(--border)]" />
              </li>
              <li>
                <Link href="/services/" className="hover:text-[var(--accent)] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[var(--border)]" />
              </li>
              <li className="text-[var(--accent)] font-semibold truncate max-w-[210px] sm:max-w-none">
                {data.hero.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Typography Column */}
            <div className="lg:col-span-7 space-y-5">
              {/* Pulsing Green Indicator Kicker (from Mobile page) */}
              <div>
                <span className="ms-lh-kicker">
                  <i aria-hidden="true" />
                  {meta.heroKickerTag}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
                <StaggeredText text={meta.heroTitlePrimary} />{' '}
                <StaggeredText text={meta.heroTitleAccent} isShimmer />
              </h1>

              <p className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">
                {data.hero.subtitle}
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl">
                {data.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="btn-offset px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all flex items-center gap-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#capabilities"
                  className="px-5 py-3.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all"
                >
                  Explore Capabilities
                </a>
              </div>

              {/* 4-Metric Trust Strip */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 items-stretch border-t border-[var(--border)]">
                {data.hero.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between p-3 sm:p-3.5 rounded-xl bg-[var(--surface-elevated)]/70 border border-[var(--border)]"
                  >
                    <div className="text-sm sm:text-base xl:text-lg font-extrabold font-mono text-[var(--text-primary)] leading-snug">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium leading-snug mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Studio Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <ServiceHeroShowcase slug={slug} spotlightImage={meta.spotlightImage} />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE PLATFORMS & DISCIPLINES EXPLORER                           */}
      {/* (Behavior from Mobile Page "One Team for Every Platform": Coin + Terminal) */}
      {/* ========================================================================= */}
      <section
        id="disciplines"
        className="relative py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)] overflow-hidden"
      >
        <SectionTransitionShape position="top" variant="stepped-left" fillColor="var(--surface)" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Architectural Breadth
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text={platHead.first} />{' '}
              {platHead.second && <StaggeredText text={platHead.second} isShimmer />}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.platformsSubtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Pill Tabs Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-8">
              {data.platforms.map((plat, idx) => {
                const isActive = activePlatformTab === idx;
                return (
                  <button
                    key={plat.title}
                    type="button"
                    onClick={() => setActivePlatformTab(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[var(--accent)] text-white shadow-md'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
                    }`}
                  >
                    {plat.title}
                  </button>
                );
              })}
            </div>

            {/* Active Pane: Glowing Medallion + Live Code/Spec Terminal */}
            {data.platforms[activePlatformTab] && (
              <div className="p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300">
                {/* Left Medallion Column (.ms-coin-box + Centered Badge Below) */}
                <div className="md:col-span-4 flex flex-col items-center gap-3.5">
                  <div className="ms-coin-box">
                    <DisciplineCoinEmblem slug={slug} tabIndex={activePlatformTab} />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-center leading-snug max-w-[200px]">
                    {data.platforms[activePlatformTab].badge}
                  </span>
                </div>

                {/* Right Description, Chips & Code Terminal */}
                <div className="md:col-span-8 space-y-4">
                  <div>
                    <span className="text-xs font-mono text-[var(--accent)] font-semibold block mb-1">
                      {data.platforms[activePlatformTab].subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display">
                      {data.platforms[activePlatformTab].title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {data.platforms[activePlatformTab].description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {data.platforms[activePlatformTab].features.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border)]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="ms-term-box">
                      <pre className="text-xs leading-relaxed overflow-x-auto">
                        <code>
                          {meta.platformCodes[activePlatformTab] || meta.platformCodes[0]}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. END-TO-END CAPABILITIES (3D COVER FLOW CAROUSEL FROM MOBILE & WEB)     */}
      {/* ========================================================================= */}
      <section
        id="capabilities"
        className="relative py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                End-to-End Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text={capHead.first} />{' '}
              {capHead.second && <StaggeredText text={capHead.second} isShimmer />}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.capabilitiesSubtitle} Drag, swipe, or click any card to inspect phase
              deliverables.
            </p>
          </div>

          {/* 3D Perspective Cover Flow (.ms-flow) */}
          <div
            ref={flowContainerRef}
            className="ms-flow focus:outline-none"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <ul className="ms-flow-track">
              {data.capabilities.map((cap, idx) => {
                const off = idx - activeFlowIndex;
                const abs = Math.abs(off);
                const isFar = abs > 3;
                const imgSrc =
                  meta.capabilityImages[idx % meta.capabilityImages.length] ||
                  meta.spotlightImage;

                return (
                  <li
                    key={cap.title}
                    onClick={() => {
                      if (!dragMoved.current && idx !== activeFlowIndex) {
                        goFlow(idx);
                      }
                    }}
                    className={`ms-flow-card ${isFar ? 'far' : ''}`}
                    aria-hidden={off !== 0}
                    style={
                      {
                        '--off': off,
                        '--abs': abs,
                        transform: `translateX(calc(${off} * 58%)) translateZ(calc(${abs} * -170px)) rotateY(calc(${off} * -38deg))`,
                        opacity: isFar ? 0 : Math.max(0, 1 - abs * 0.22),
                        zIndex: Math.max(1, 20 - abs),
                        filter: `brightness(${Math.max(0.45, 1 - abs * 0.14)})`,
                      } as React.CSSProperties
                    }
                  >
                    <Image
                      src={getAssetUrl(imgSrc)}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 640px) 250px, 420px"
                      className="object-cover"
                      priority={idx === 2}
                    />
                    <b>
                      <span className="block text-[11px] font-mono uppercase tracking-widest text-sky-300 mb-0.5">
                        Phase {String(idx + 1).padStart(2, '0')}
                      </span>
                      {cap.title}
                    </b>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Synchronized Prev/Next Footer & Deliverable Pills */}
          <div className="max-w-2xl mx-auto mt-8 flex flex-col items-center">
            <div className="flex items-center justify-between w-full gap-4">
              <button
                type="button"
                onClick={() => goFlow(activeFlowIndex - 1)}
                disabled={activeFlowIndex === 0}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-[var(--canvas)] hover:bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm flex-shrink-0 cursor-pointer"
                aria-label="Previous capability"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center px-2 sm:px-4 flex-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display">
                  {data.capabilities[activeFlowIndex]?.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                  {data.capabilities[activeFlowIndex]?.description}
                </p>

                {/* Deliverable Chips */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {data.capabilities[activeFlowIndex]?.deliverables.map((deliv, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-[var(--canvas)] border border-[var(--border)] text-[var(--accent)]"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => goFlow(activeFlowIndex + 1)}
                disabled={activeFlowIndex === data.capabilities.length - 1}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-[var(--canvas)] hover:bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm flex-shrink-0 cursor-pointer"
                aria-label="Next capability"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {data.capabilities.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goFlow(dotIdx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    dotIdx === activeFlowIndex
                      ? 'w-6 bg-[var(--accent)]'
                      : 'w-2 bg-[var(--border)] hover:bg-[var(--text-muted)]'
                  }`}
                  aria-label={`Jump to capability ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE ARCHITECTURAL BLUEPRINT (3D TILT + HOTSPOTS FROM WEB PAGE) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Interactive Blueprint
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text={meta.hotspotHeadingPrimary} />{' '}
              <StaggeredText text={meta.hotspotHeadingAccent} isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {meta.hotspotSubtitle}
            </p>
          </div>

          <ServiceBlueprintDiagram slug={slug} hotspots={meta.hotspots} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SOLUTIONS ACROSS VERTICALS (STICKY LEFT NAV + STACKING CARDS)          */}
      {/* (Behavior from Mobile "Solutions" & Web "Built for Industry")             */}
      {/* Note: NO overflow-hidden on this section so sticky nav & cards work!      */}
      {/* ========================================================================= */}
      <section
        id="solutions"
        className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Industry Applications
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text={solHead.first} />{' '}
              {solHead.second && <StaggeredText text={solHead.second} isShimmer />}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.solutionsSubtitle}
            </p>
          </div>

          <div className="hp-scwrap">
            {/* Sticky Left Navigation */}
            <nav className="hp-sc-nav" aria-label="Industry Solutions Navigation">
              <ol>
                {data.solutions.map((sol, idx) => {
                  const isCurrent = activeStackCard === idx;
                  const ac = meta.solutionColors[idx % meta.solutionColors.length];
                  return (
                    <li key={sol.title}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(idx)}
                        aria-current={isCurrent ? 'true' : undefined}
                        style={{ '--ac': ac } as React.CSSProperties}
                      >
                        <i aria-hidden="true" />
                        <span>{sol.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* Right Stacking Cards List */}
            <ol className="hp-stack-cards">
              {data.solutions.map((sol, idx) => {
                const ac = meta.solutionColors[idx % meta.solutionColors.length];
                const imgSrc =
                  meta.solutionImages[idx % meta.solutionImages.length] ||
                  meta.spotlightImage;

                return (
                  <li
                    key={sol.title}
                    id={`sol-card-${idx}`}
                    ref={(el) => {
                      stackCardRefs.current[idx] = el;
                    }}
                    data-svc-stack={idx}
                    className="hp-sc"
                    style={{ '--k': idx, '--ac': ac } as React.CSSProperties}
                  >
                    <article className="hp-sc-card">
                      {/* Left Copy */}
                      <div className="hp-sc-copy">
                        <div className="flex items-center gap-2">
                          <span className="hp-sc-num">
                            {String(idx + 1).padStart(2, '0')} <i>/ 0{data.solutions.length}</i>
                          </span>
                          <span className="hp-sc-name">· {sol.industry}</span>
                        </div>

                        <h3>{sol.title}</h3>
                        <p>{sol.description}</p>

                        <ul className="hp-sol-points">
                          {sol.features.map((pt, pIdx) => (
                            <li key={pIdx}>{pt}</li>
                          ))}
                        </ul>

                        <Link href="/contact/" className="hp-sc-btn">
                          <span>Discuss {sol.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right Preview Frame */}
                      <div className="hp-sc-device">
                        <div className="hp-sc-bar">
                          <i />
                          <i />
                          <i />
                          <span>{sol.industry}</span>
                        </div>

                        <div className="hp-sc-screen">
                          <div className="hp-sc-hello flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex-shrink-0 relative">
                              <Image
                                src={getAssetUrl(imgSrc)}
                                alt={sol.title}
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <b>{sol.title}</b>
                              <span className="text-[11px] text-white/80 block">
                                Production Architecture
                              </span>
                            </div>
                          </div>

                          <ul className="hp-sc-tiles">
                            {sol.features.map((feat, fIdx) => (
                              <li key={fIdx}>
                                <span className="hp-sc-ic">
                                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                                </span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ARCHITECTURAL BASELINE & PRINCIPLES (HOME CORNER GLOW + NUMBERED ROI)  */}
      {/* (Explicitly NO "Our Works" section on non-Web/Mobile services!)           */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Engineering Baseline
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text={featHead.first} />{' '}
              {featHead.second && <StaggeredText text={featHead.second} isShimmer />}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {data.features.map((feat, idx) => (
              <div
                key={feat.title}
                className="group relative p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Home Page Quadrant Ambient Glow */}
                <div
                  aria-hidden="true"
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-bl-full bg-gradient-to-bl from-[var(--accent)]/20 via-sky-500/10 to-transparent transition-transform duration-500 group-hover:scale-125 pointer-events-none"
                />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                    {feat.category}
                  </span>
                  <span className="text-sm font-mono font-extrabold text-[var(--accent)]/70 group-hover:text-[var(--accent)] transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] font-display tracking-tight mb-2 relative z-10 group-hover:text-[var(--accent)] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed relative z-10">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE TECHNOLOGIES & TOOLING TABS (WEB & HOME PATTERN)           */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Technology Standards
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text={techHead.first} />{' '}
              {techHead.second && <StaggeredText text={techHead.second} isShimmer />}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.technologiesSubtitle}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
            role="tablist"
            aria-label="Service Tooling Categories"
          >
            {data.technologies.map((techCat, idx) => {
              const isSelected = activeTechCat === idx;
              return (
                <button
                  key={techCat.category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTechCat(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--text-primary)] text-[var(--canvas)] shadow-md'
                      : 'bg-[var(--canvas)] text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/50'
                  }`}
                >
                  {techCat.category}
                </button>
              );
            })}
          </div>

          {/* Active Category Icon Cards (Matching Website Development Pattern) */}
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            {data.technologies[activeTechCat]?.skills.map((skill) => (
              <li
                key={skill}
                className="flex flex-col items-center gap-2 group"
                title={skill}
              >
                <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-[var(--border)] shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-200 flex items-center justify-center p-3">
                  <Image
                    src={getAssetUrl(
                      TECH_SKILL_LOGO[skill] || '/images/tech22blocks-star.svg'
                    )}
                    alt={skill}
                    width={56}
                    height={56}
                    className="object-contain w-12 h-12 sm:w-14 sm:h-14"
                  />
                </span>
                <small className="text-xs font-mono text-[var(--text-muted)] font-medium text-center max-w-[120px] leading-snug">
                  {skill}
                </small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. STICKY SCROLL-STORY METHODOLOGY (.ms-jr FROM MOBILE & HOME PAGES)      */}
      {/* ========================================================================= */}
      <section
        id="process"
        className="py-16 sm:py-24 ms-jr-sec text-white border-b border-slate-800 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-sky-400 font-mono">
                Sprint Execution
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
              {procHead.first}{' '}
              {procHead.second && <span className="text-sky-400">{procHead.second}</span>}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed bg-white/5 border border-white/10 rounded-2xl p-4">
              {data.processSubtitle}
            </p>
          </div>

          <div className="ms-jr">
            {/* Left Sticky Visual Stage */}
            <div className="ms-jr-stage" aria-hidden="true">
              <div className="ms-jr-screen">
                {data.process.map((step, sIdx) => {
                  const isOn = activeProcessStep === sIdx;
                  const imgSrc =
                    meta.processImages[sIdx % meta.processImages.length] ||
                    '/images/svss/proc-planning.webp';

                  return (
                    <Image
                      key={step.step}
                      src={getAssetUrl(imgSrc)}
                      alt={step.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 550px"
                      priority={sIdx === 0}
                      data-active={isOn ? 'true' : 'false'}
                      className={`object-cover transition-all duration-700 ${
                        isOn ? 'on opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  );
                })}

                <span
                  className={`ms-jr-live ${
                    activeProcessStep === totalSteps - 1 ? 'on' : ''
                  }`}
                >
                  Production Handover Verified
                </span>
              </div>

              <div className="ms-jr-meter">
                <span className="ms-jr-stagename">
                  {data.process[activeProcessStep]?.title}
                </span>
                <span className="ms-jr-pct">
                  <b>{currentPct}</b>%
                </span>
                <span className="ms-jr-bar">
                  <i style={{ width: `${currentPct}%` }} />
                </span>
              </div>
            </div>

            {/* Right Scroll Steps Column */}
            <ol className="ms-jr-steps">
              {data.process.map((step, idx) => {
                const isOn = activeProcessStep === idx;
                return (
                  <li
                    key={step.step}
                    ref={(el) => {
                      processStepRefs.current[idx] = el;
                    }}
                    data-svc-step={idx}
                    onClick={() => handleProcessStepClick(idx)}
                    className={isOn ? 'on' : ''}
                  >
                    <span className="ms-jr-num font-mono">{step.step}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-sky-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Outcome: {step.keyOutcome}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WAYS TO WORK WITH US (HOME CORNER GLOW ENGAGEMENT CARDS)               */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Flexible Engagement
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text={waysHead.first} />{' '}
              {waysHead.second && <StaggeredText text={waysHead.second} isShimmer />}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {data.waysToWorkSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {data.waysToWork.map((model, idx) => (
              <div
                key={model.title}
                className="group relative p-6 sm:p-8 rounded-3xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute -top-8 -right-8 w-36 h-36 rounded-bl-full bg-gradient-to-bl from-[var(--accent)]/20 via-sky-500/10 to-transparent transition-transform duration-500 group-hover:scale-125 pointer-events-none"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                      {model.subtitle}
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--text-muted)]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[var(--text-primary)] font-display tracking-tight mb-2">
                    {model.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-mono font-bold mb-4">
                    {model.timeline}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {model.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] space-y-2 relative z-10">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    Included Deliverables:
                  </div>
                  {model.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Link
                      href="/contact/"
                      className="w-full py-3 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--accent)] text-[var(--text-primary)] hover:text-white border border-[var(--border)] hover:border-[var(--accent)] text-xs font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <span>Choose {model.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. WHY CHOOSE US (MOBILE SPLIT WITH GENERATED 3D VISUAL + TOP-BORDERED CARDS) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Bespoke 3D Isometric Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[390px] aspect-square rounded-3xl overflow-hidden border border-[var(--border)] shadow-xl bg-white">
                <Image
                  src={getAssetUrl(meta.whyChooseImage)}
                  alt={`${data.hero.title} 3D Architecture Visual`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 390px"
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <span className="text-xs font-mono font-bold text-[var(--accent)] tracking-wider uppercase">
                  DPIIT Recognised · MSME Registered
                </span>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  100% Intellectual Property ownership transferred from Day 1.
                </p>
              </div>
            </div>

            {/* Right 4 Cards with Top Accent Bar (.sv-why-card-item) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="mb-2.5">
                  <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                    Why Tech22Blocks
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
                  <StaggeredText text={meta.whyChoosePrimary} />{' '}
                  <StaggeredText text={meta.whyChooseAccent} isShimmer />
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Direct founder involvement, zero non-technical agency layers, and production-hardened
                  delivery on every sprint.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {data.whyChooseUs.map((item, idx) => (
                  <div
                    key={item.title}
                    className="sv-why-card-item p-6 bg-[var(--surface)] border border-[var(--border)] space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center font-bold font-mono text-sm">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                        {item.bullet}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[var(--text-primary)] font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. TECHNICAL FAQS ACCORDION                                              */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text={data.hero.title} />{' '}
              <StaggeredText text="FAQs" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Straightforward answers about timelines, architecture ownership, costs, and support.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[var(--canvas)] border border-[var(--border)] overflow-hidden transition-all duration-200"
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
                    <div
                      className={`w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[var(--accent)] border-[var(--accent)]' : ''
                      }`}
                    >
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
      {/* 12. EXPLORE OTHER DISCIPLINES (NO BLOGS / NO OTHER WORKS)                 */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="mb-2">
                <span className="heading-focus-underline text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                  More Capabilities
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-display">
                <StaggeredText text="Explore Other" />{' '}
                <StaggeredText text="Engineering Disciplines" isShimmer />
              </h3>
            </div>
            <Link
              href="/services/"
              className="text-xs sm:text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}/`}
                className="group relative p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-bl-full bg-gradient-to-bl from-[var(--accent)]/15 to-transparent group-hover:scale-125 transition-transform duration-300 pointer-events-none"
                />
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <span className="text-xs font-mono text-[var(--accent)]">{item.category}</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors font-display relative z-10">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2 mt-1.5 leading-relaxed relative z-10">
                  {item.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FINAL DIRECT CONSULTATION CTA (NO LEFT TRIANGLE)                      */}
      {/* ========================================================================= */}
      <FinalCTA />
    </div>
  );
}
