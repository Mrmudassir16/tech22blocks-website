import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Cpu,
  ExternalLink,
  Globe,
  Layers,
  Shield,
  Sparkles,
} from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import { StarWatermark } from '@/components/StarEmblem';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { getAssetUrl } from '@/utils/assets';

export const metadata: Metadata = {
  title: 'Our Products — Internal R&D Initiatives & VoiSage AI | Tech22Blocks',
  description:
    'Explore proprietary products built by Tech22Blocks Labs, including VoiSage AI (https://voisage.in/), engineered to screen unknown calls and protect executive focus.',
};

const PHILOSOPHY_PILLARS = [
  {
    num: '01',
    category: 'Live Validation',
    icon: Cpu,
    title: 'First-Party Dogfooding',
    description:
      'We use VoiSage AI in our own executive daily routines, refining latency, voice fidelity, and intent accuracy against genuine caller scenarios.',
  },
  {
    num: '02',
    category: 'Data Sovereignty',
    icon: Shield,
    title: 'Privacy & Data Control',
    description:
      'Our voice and data pipelines are engineered with encrypted streaming and strict transcript isolation so sensitive conversations stay confidential.',
  },
  {
    num: '03',
    category: 'Shared Rigor',
    icon: Layers,
    title: 'Production-Ready Architecture',
    description:
      'Every resilient component built inside our product labs — from real-time streaming to webhook orchestration — strengthens our client systems too.',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* ========================================================================= */}
      {/* 1. INTERNAL R&D INITIATIVES HERO (PRESERVED CONTENT + TWO-TONE STYLING)   */}
      {/* ========================================================================= */}
      <section className="relative bg-[var(--surface)] text-[var(--text-primary)] pt-28 sm:pt-32 pb-14 sm:pb-18 lg:py-24 border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div>
              <span className="heading-focus-underline text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                Internal R&amp;D Initiatives
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              <StaggeredText text="We don't just build for clients." />{' '}
              <StaggeredText text="We build for ourselves too." isShimmer />
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed">
              When we encounter deep daily operational frustrations, we build technology to solve them. Here is a look at what our engineering team is actively building.
            </p>

            {/* Quick Navigation & Breadcrumb */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#featured-products"
                  className="btn-offset px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-md shadow-[var(--accent)]/20 transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://voisage.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)] transition-all inline-flex items-center gap-2"
                >
                  <Globe className="w-4 h-4 text-[var(--accent)]" />
                  <span>voisage.in</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 text-[var(--border)]" />
                <span className="text-[var(--text-primary)] font-bold">Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED PRODUCTS (2 BIG INTERACTIVE CARDS MATCHING SERVICES PAGE)     */}
      {/* ========================================================================= */}
      <section
        id="featured-products"
        className="relative py-12 sm:py-16 lg:py-20 bg-[var(--canvas)]"
        aria-labelledby="featured-products-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Sub-Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-[var(--accent)]">
                Proprietary Platforms
              </span>
            </div>
            <h2
              id="featured-products-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display mb-4"
            >
              <StaggeredText text="Software Products From" />{' '}
              <StaggeredText text="Tech22Blocks Labs" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] font-normal leading-relaxed">
              Click into VoiSage AI to explore its live call screening simulator, voice pipeline, and technical architecture — or visit{' '}
              <a
                href="https://voisage.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-semibold hover:underline"
              >
                voisage.in
              </a>{' '}
              directly.
            </p>
          </div>

          {/* 2-Column Big Product Cards Grid (Matching Techco Services Big Card Behavior) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* BIG PRODUCT CARD 01: VOISAGE AI */}
            <div className="service_block group relative rounded-[28px] overflow-hidden bg-slate-950 border border-[var(--border)] shadow-xl hover:shadow-2xl hover:border-[var(--accent)]/60 transition-all duration-500">
              {/* Full-Card Stretched Navigation Link to /products/voisage-ai/ */}
              <Link
                href="/products/voisage-ai/"
                aria-label="Open VoiSage AI dedicated product page"
                className="absolute inset-0 z-10"
              />

              {/* Visual Image Container with Scale Effect */}
              <div className="service_image relative h-[390px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[0.98] rounded-[24px]">
                <Image
                  src={getAssetUrl('/images/products/voisage-ai-card.jpg')}
                  alt="VoiSage AI — Autonomous Voice Intelligence for Unknown Incoming Calls"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 z-0 pointer-events-none" />
              </div>

              {/* Top Badges Row */}
              <div className="absolute top-5 left-5 right-5 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-white/10 text-white border border-white/20">
                    Product 01
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Flagship AI
                  </span>
                </div>

                {/* Clickable Official Site Pill */}
                <a
                  href="https://voisage.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md bg-sky-500/25 hover:bg-sky-500 text-sky-200 hover:text-slate-950 border border-sky-400/40 transition-all"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>voisage.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Bottom Content Area */}
              <div className="service_content absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 z-20 flex flex-col justify-end pointer-events-none">
                <div className="group/title inline-block mb-3">
                  <h3 className="service_title text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight transition-colors duration-300 group-hover:text-sky-300">
                    VoiSage AI
                  </h3>
                  <span className="block h-[2px] w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-500 rounded-full" />
                </div>

                <p className="service_description text-xs sm:text-sm text-slate-200/90 leading-relaxed line-clamp-2 mb-6">
                  Autonomous voice intelligence that screens unknown incoming calls in real time, filters spam, and dispatches instant executive summaries to WhatsApp.
                </p>

                <div className="links_wrapper flex items-center justify-between gap-4 pt-2">
                  <div className="category_btns_group flex flex-wrap items-center gap-2">
                    {['Voice AI', 'Call Screening', 'WhatsApp Briefs'].map((tag) => (
                      <span
                        key={tag}
                        className="backdrop-blur-md bg-white/10 group-hover:bg-white/15 border border-white/20 text-white text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-lg transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Circular Action Button */}
                  <span
                    aria-hidden="true"
                    className="icon_block w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-slate-950 group-hover:bg-[var(--accent)] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xl flex-shrink-0 group-hover:rotate-45 group-hover:scale-105"
                  >
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

            {/* BIG PRODUCT CARD 02: DUMMY UPCOMING R&D INITIATIVE */}
            <div className="service_block group relative rounded-[28px] overflow-hidden bg-slate-950 border border-[var(--border)] shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Visual Image Container */}
              <div className="service_image relative h-[390px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[0.98] rounded-[24px]">
                <Image
                  src={getAssetUrl('/images/products/rd-incubation-card.jpg')}
                  alt="Upcoming Tech22Blocks Labs R&D Product Initiative"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 z-0 pointer-events-none" />
              </div>

              {/* Top Badges Row */}
              <div className="absolute top-5 left-5 right-5 z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-white/10 text-white border border-white/20">
                    Product 02
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    <Sparkles className="w-3 h-3" />
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="service_content absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 z-10 flex flex-col justify-end">
                <div className="mb-3">
                  <h3 className="service_title text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                    Next R&amp;D Platform
                  </h3>
                  <span className="block h-[2px] w-0 bg-amber-400 group-hover:w-28 transition-all duration-500 rounded-full" />
                </div>

                <p className="service_description text-xs sm:text-sm text-slate-200/90 leading-relaxed line-clamp-2 mb-6">
                  An upcoming proprietary software product currently in internal incubation and architectural prototyping at Tech22Blocks Labs. Full preview coming soon.
                </p>

                <div className="links_wrapper flex items-center justify-between gap-4 pt-2">
                  <div className="category_btns_group flex flex-wrap items-center gap-2">
                    {['In Incubation', 'Internal R&D', 'Future Release'].map((tag) => (
                      <span
                        key={tag}
                        className="backdrop-blur-md bg-white/10 border border-white/20 text-slate-200 text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contact / Preview Badge Circle */}
                  <Link
                    href="/contact/"
                    aria-label="Inquire about upcoming Tech22Blocks R&D initiatives"
                    className="icon_block w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-amber-400 text-white hover:text-slate-950 border border-white/25 flex items-center justify-center transition-all duration-300 shadow-xl flex-shrink-0"
                    title="Inquire About Early R&D Access"
                  >
                    <Sparkles className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ENGINEERING PHILOSOPHY BEHIND INTERNAL PRODUCTS                        */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[var(--surface)] text-[var(--text-primary)] border-t border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={550} position="bottom-right" variant="blue" opacity={0.02} rotate={-10} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <div className="mb-3">
              <span className="heading-focus-underline text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                Product Philosophy
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mt-2 font-display">
              <StaggeredText text="Why We Build" />{' '}
              <StaggeredText text="In-House Products" isShimmer />
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
              Developing our own proprietary systems ensures our team stays sharp, understands the full product lifecycle, and confronts real engineering complexities before offering solutions to clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PHILOSOPHY_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -top-8 -right-8 w-28 h-28 rounded-bl-full bg-gradient-to-bl from-[var(--accent)]/20 via-sky-500/10 to-transparent transition-transform duration-500 group-hover:scale-125 pointer-events-none"
                  />

                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-[var(--accent)]/80 bg-[var(--accent)]/10 px-2.5 py-1 rounded-full border border-[var(--accent)]/20">
                      {pillar.num} • {pillar.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display mb-2 relative z-10 group-hover:text-[var(--accent)] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal relative z-10">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <FinalCTA />
    </div>
  );
}
