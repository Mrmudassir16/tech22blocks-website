'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Box, Wrench, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';

export default function CompanyIntro() {
  return (
    <section 
      className="relative py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden" 
      aria-labelledby="who-we-are-heading"
    >
      <StarWatermark size={580} position="top-right" variant="blue" opacity={0.02} rotate={15} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Techco-Inspired Split Layout: Visual Column & Structured Content Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Layered Corporate Engineering Visual with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={getAssetUrl('/images/enterprise-platform-mockup.jpg')}
                  alt="Tech22Blocks engineering and software platform design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Inset Corporate Identity Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-white">
                <p className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                  Corporate Architecture
                </p>
                <p className="text-xs font-semibold text-white mt-0.5 leading-snug">
                  {COMPANY.legalName}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Warangal, Telangana &bull; Est. 2025
                </p>
              </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute -bottom-6 -left-6 w-52 h-52 bg-[#0a85b1]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: High-Impact Typography & Two Business Areas */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Section Tag without Star Bullet */}
            <div className="inline-block">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a85b1] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Who We Are
              </span>
            </div>

            <div className="space-y-3">
              <h2 id="who-we-are-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Software engineered with purpose, persistence, and practical craft.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Operating under <strong className="text-slate-900 font-semibold">{COMPANY.legalName}</strong>, Tech22Blocks unites strategic governance with modern software craftsmanship. We build for ourselves and for ambitious organizations worldwide.
              </p>
            </div>

            {/* Two Business Areas: Clean Techco-Style Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Pillar 01: Proprietary Products */}
              <div className="p-5 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/50 via-white to-white flex flex-col justify-between shadow-2xs group hover:border-[#0a85b1]/60 transition-all">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0a85b1] flex items-center justify-center">
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">
                      Proprietary Software Products
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      We invent and operate our own software tools, including <strong className="text-slate-900 font-semibold">VoiSage AI</strong> (autonomous voice assistant for call screening and executive focus).
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-sky-100">
                  <Link
                    href="/products/"
                    className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] transition-colors group/link"
                  >
                    <span>Discover VoiSage AI</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Pillar 02: Custom Technology Solutions */}
              <div className="p-5 rounded-2xl border border-slate-200/90 bg-white flex flex-col justify-between shadow-2xs group hover:border-[#0a85b1]/60 transition-all">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">
                      Custom Technology Solutions
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      We design and engineer bespoke software systems, high-performance web platforms, cross-platform mobile apps, intuitive UI/UX, and strategic IT consulting.
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100">
                  <Link
                    href="/services/"
                    className="inline-flex items-center text-xs font-bold text-slate-800 hover:text-[#0a85b1] transition-colors group/link"
                  >
                    <span>Explore Our 6 Services</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Sub-Footer Story Link */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/80">
              <span>Dual Operating Model &bull; Products &amp; Solutions</span>
              <Link
                href="/about/"
                className="font-bold text-[#0a85b1] hover:underline flex items-center gap-1"
              >
                <span>Learn more about our heritage &amp; founders</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
