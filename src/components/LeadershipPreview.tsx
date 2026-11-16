import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';

export default function LeadershipPreview() {
  const { foundersVision, leadership } = COMPANY;

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80" aria-labelledby="leadership-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Leadership Card */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 lg:p-10 shadow-2xs">
          <StarWatermark size={360} position="bottom-right" variant="blue" opacity={0.03} rotate={15} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left: Actual Founders' Photograph */}
            <div className="lg:col-span-4">
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3] w-full bg-slate-200 group">
                <Image
                  src={getAssetUrl('/images/founders-father-son.jpg')}
                  alt="Rajkumar Adepu (Director & Chairman) and Shivasai Adepu (Director & CEO) — Tech22Blocks Founders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Compact Leadership Overview */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a85b1] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  Leadership
                </span>
              </div>

              <div>
                <h2 id="leadership-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Father &amp; Son. One Vision.
                </h2>
                <p className="text-sm font-semibold text-slate-600 mt-1">
                  Building Tech22Blocks Together Since 2025
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Founded by a father and son who believe technology should solve practical problems and build enduring value. Decades of operational business governance pair with modern software architectures and AI engineering.
              </p>

              {/* Founder Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-950">Shivasai Adepu</p>
                      <p className="text-xs text-[#0a85b1] font-semibold">Director &amp; CEO</p>
                    </div>
                    {leadership[0].linkedin && (
                      <a
                        href={leadership[0].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#0a85b1] transition-colors p-1"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                    Engineering architecture, AI product systems, and tech strategy.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <p className="text-sm font-bold text-slate-950">Rajkumar Adepu</p>
                  <p className="text-xs text-slate-600 font-semibold">Director &amp; Chairman</p>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                    Corporate governance, operational wisdom, and client stewardship.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about/#founders"
                  className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
                >
                  <span>Read the Full Founder Story</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
