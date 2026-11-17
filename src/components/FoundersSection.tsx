import React from 'react';
import Image from 'next/image';
import { Linkedin, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export default function FoundersSection() {
  const { foundersVision, leadership } = COMPANY;

  return (
    <section id="founders" className="relative py-28 lg:py-36 bg-[#030712] text-white border-t border-white/[0.08] overflow-hidden">
      <StarWatermark size={600} position="bottom-left" variant="white" opacity={0.015} rotate={20} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3">
            <StarEmblem size={13} variant="white" />
            <span>// Leadership &amp; Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight">
            {foundersVision.mainHeading}
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-slate-300 font-medium">
            {foundersVision.supportingHeading}
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/[0.1] bg-[#0b1120]">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={getAssetUrl('/images/founders-father-son.jpg')}
                  alt="Rajkumar Adepu (Director/Chairman) and Shivasai Adepu (Director/CEO) - Tech22Blocks Founders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Photo Caption Strip */}
              <div className="bg-[#0b1120]/95 text-white p-6 sm:p-7 border-t border-white/[0.08]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                  <div className="pt-2 sm:pt-0 sm:pr-4">
                    <p className="text-xs uppercase tracking-wider font-mono text-sky-400 font-semibold">Director &amp; CEO</p>
                    <h3 className="text-lg font-bold text-white mt-1">Shivasai Adepu</h3>
                    <p className="text-xs text-slate-300 mt-1">Product Architecture &amp; Technology</p>
                    <a
                      href="https://www.linkedin.com/in/shivasaiadepu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center text-xs font-mono font-semibold text-[#38bdf8] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 mr-1" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>

                  <div className="pt-4 sm:pt-0 sm:pl-4">
                    <p className="text-xs uppercase tracking-wider font-mono text-sky-400 font-semibold">Director &amp; Chairman</p>
                    <h3 className="text-lg font-bold text-white mt-1">Rajkumar Adepu</h3>
                    <p className="text-xs text-slate-300 mt-1">Corporate Governance &amp; Strategy</p>
                    <span className="mt-3 inline-flex items-center text-xs font-mono text-slate-400">
                      RRK Software Technologies Pvt. Ltd.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-slate-300 leading-relaxed text-base sm:text-lg space-y-5">
              {foundersVision.narrative.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-xl font-medium text-white leading-snug" : "text-slate-400"}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Strategic Pillars */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] backdrop-blur-xl">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                  <span>Two Generations of Thinking</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Combining disciplined long-term operational experience with modern engineering methods.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] backdrop-blur-xl">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                  <span>Enduring Trust</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  More than a contract — a relationship built on integrity, persistence, and delivering real software.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
