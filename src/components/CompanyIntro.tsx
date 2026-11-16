'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { StarWatermark } from '@/components/StarEmblem';

export default function CompanyIntro() {
  return (
    <section 
      id="about-mission"
      className="relative py-24 lg:py-32 bg-[#020b14] text-white overflow-hidden" 
      aria-labelledby="about-heading"
    >
      {/* Background Star Texture & Ambient Blue Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0a85b1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0a85b1]/15 rounded-full blur-3xl pointer-events-none" />
      <StarWatermark size={680} position="top-right" variant="blue" opacity={0.03} rotate={15} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Focus Underline, and Mission Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                About Us
              </span>
              <Image 
                src="/images/shape_title_under_line.svg" 
                alt="" 
                width={40} 
                height={8} 
                className="inline-block brightness-150"
              />
            </div>

            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Tech22Blocks <span className="text-[#38bdf8]">Mission &amp; Goal</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              At Tech22Blocks, our mission is to empower businesses and visionary founders through innovative software solutions that streamline operations, foster growth, and drive success. With a commitment to engineering excellence and customer satisfaction, we deliver production software that ships reliably.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              Operating under RRK Software Technologies Private Limited, our technical leadership combines battle-tested architectural principles with modern cloud technologies to engineer scalable digital systems, real-time mobile platforms, and proprietary intelligence products.
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <span>Proprietary Tech IP</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <span>Zero Architectural Shortcuts</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <span>Direct Git Repo Access</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <span>Statutory Compliance Handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: Photo + Overlapping Funfact Card (Techco Exact Composition) */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end">
            
            {/* Engineer Working Photo */}
            <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="/images/about_image_6.webp" 
                alt="Tech22Blocks Engineering Team at work" 
                width={396} 
                height={480} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b14]/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping White Funfact Card */}
            <div 
              className="relative lg:-mt-24 w-full max-w-[460px] bg-white text-[#0f172a] p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-100 z-20"
              style={{
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
              }}
            >
              {/* Top Row: Happy Customers Avatars + Learn More Button */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center -space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white">
                      TK
                    </div>
                    <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white">
                      MK
                    </div>
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white">
                      SA
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#0a85b1] text-white flex items-center justify-center font-bold text-xs ring-2 ring-white">
                      +
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Trusted by Founders &amp; Enterprises
                  </span>
                </div>

                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0a85b1] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0369a1] transition-colors shadow-md"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Bottom Row: Pulsing Icon + Counter Values */}
              <div className="pt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1]">
                    <Globe2 className="w-5 h-5" />
                    <span className="absolute inset-0 rounded-full border border-[#0a85b1] animate-ping opacity-30 pointer-events-none" />
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-[#0f172a] leading-none">
                      100%
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Code Handover
                    </span>
                  </div>
                </div>

                <div className="h-8 w-px bg-slate-200" />

                <div>
                  <span className="block text-2xl font-extrabold text-[#0f172a] leading-none">
                    Sub-Sec
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Edge Performance
                  </span>
                </div>

                <div className="h-8 w-px bg-slate-200" />

                <div>
                  <span className="block text-2xl font-extrabold text-[#0f172a] leading-none">
                    Zero
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Lock-In
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
