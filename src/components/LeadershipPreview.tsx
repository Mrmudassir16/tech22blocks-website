import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function LeadershipPreview() {
  const { foundersVision, leadership } = COMPANY;

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80" aria-labelledby="leadership-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Leadership Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 lg:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
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
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                <span className="w-4 h-0.5 bg-[#0a85b1]"></span>
                <span>Leadership &bull; Est. 2025</span>
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
                Founded by a father and son uniting two generations of thinking: decades of business experience and corporate governance paired with modern AI capabilities and agile software engineering.
              </p>

              {/* Founder Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-xl">
                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <p className="font-bold text-sm text-slate-900">Shivasai Adepu</p>
                    <p className="text-slate-500 text-xs font-mono">Director &amp; CEO</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/shivasaiadepu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-md bg-sky-50 hover:bg-[#0a85b1] text-[#0a85b1] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Shivasai Adepu LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <p className="font-bold text-sm text-slate-900">Rajkumar Adepu</p>
                    <p className="text-slate-500 text-xs font-mono">Director &amp; Chairman</p>
                  </div>
                </div>
              </div>

              {/* Navigation to Full About Page */}
              <div className="pt-2">
                <Link
                  href="/about/"
                  className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
                >
                  <span>Read our full story, mission, and 22 principles on About Us</span>
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
