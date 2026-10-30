import React from 'react';
import Image from 'next/image';
import { Linkedin, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function FoundersSection() {
  const { foundersVision, leadership } = COMPANY;

  return (
    <section id="founders" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
            <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
            <span>Leadership &amp; Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {foundersVision.mainHeading}
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-slate-700 font-medium">
            {foundersVision.supportingHeading}
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/founders-father-son.jpg"
                  alt="Rajkumar Adepu (Director/Chairman) and Shivasai Adepu (Director/CEO) - Tech22Blocks Founders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Photo Caption Strip */}
              <div className="bg-slate-900 text-white p-6 sm:p-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
                  <div className="pt-2 sm:pt-0 sm:pr-4">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Director &amp; CEO</p>
                    <h3 className="text-lg font-bold text-white mt-0.5">Shivasai Adepu</h3>
                    <p className="text-xs text-slate-300 mt-1">Product Architecture &amp; Technology</p>
                    <a
                      href="https://www.linkedin.com/in/shivasai-adepu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center text-xs font-semibold text-[#38bdf8] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 mr-1" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>

                  <div className="pt-4 sm:pt-0 sm:pl-4">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Director &amp; Chairman</p>
                    <h3 className="text-lg font-bold text-white mt-0.5">Rajkumar Adepu</h3>
                    <p className="text-xs text-slate-300 mt-1">Corporate Governance &amp; Strategy</p>
                    <span className="mt-3 inline-flex items-center text-xs text-slate-400">
                      RRK Software Technologies Pvt. Ltd.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-650 leading-relaxed text-base sm:text-lg space-y-5">
              {foundersVision.narrative.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-xl font-medium text-slate-900 leading-snug" : "text-slate-600"}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Strategic Pillars */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                  <span>Two Generations of Thinking</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Combining disciplined long-term operational experience with modern engineering methods.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0a85b1]" />
                  <span>Enduring Trust</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
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
