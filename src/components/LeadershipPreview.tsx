import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function LeadershipPreview() {
  const { foundersVision } = COMPANY;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80" aria-labelledby="leadership-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: Founder Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/90 aspect-[3/2] w-full bg-slate-200">
                <Image
                  src={getAssetUrl('/images/founders-father-son.jpg')}
                  alt="Rajkumar Adepu (Director/Chairman) and Shivasai Adepu (Director/CEO) - Tech22Blocks Founders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Leadership Credibility */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
                <span>Leadership &amp; Heritage</span>
              </div>

              <h2 id="leadership-preview-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {foundersVision.mainHeading}
              </h2>

              <p className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                {foundersVision.supportingHeading}
              </p>

              <p className="text-base text-slate-650 leading-relaxed">
                Tech22Blocks was founded in 2025 by a father and son who bring two generations of thinking to one mission: building practical technology solutions that help businesses grow and prepare for the future. Experience brings strategic perspective; the next generation brings modern engineering.
              </p>

              {/* Founder Badges */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs">
                <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <p className="font-bold text-slate-900">Shivasai Adepu</p>
                  <p className="text-slate-500 text-[11px]">Director / CEO &bull; Technology &amp; Architecture</p>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <p className="font-bold text-slate-900">Rajkumar Adepu</p>
                  <p className="text-slate-500 text-[11px]">Director / Chairman &bull; Governance &amp; Strategy</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
                >
                  <span>Meet the Team / About Tech22Blocks</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
