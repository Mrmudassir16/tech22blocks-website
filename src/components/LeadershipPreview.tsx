import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function LeadershipPreview() {
  const { foundersVision, leadership } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/60" aria-labelledby="leadership-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container with subtle blue tint */}
        <div className="rounded-3xl bg-gradient-to-br from-sky-50/60 to-white border border-sky-100/60 p-8 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Founder Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 aspect-[3/2] w-full bg-slate-200">
                <Image
                  src={getAssetUrl('/images/founders-father-son.jpg')}
                  alt="Rajkumar Adepu (Director/Chairman) and Shivasai Adepu (Director/CEO) — Founders of Tech22Blocks"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Leadership Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="label-eyebrow">Leadership & Heritage</div>

              <h2 id="leadership-preview-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {foundersVision.mainHeading}
              </h2>

              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {foundersVision.supportingHeading}
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                {foundersVision.narrative[0]} {foundersVision.narrative[1]}
              </p>

              {/* Founder Name Cards */}
              <div className="flex flex-wrap gap-3 pt-1">
                {leadership.map((person) => (
                  <div
                    key={person.name}
                    className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-900">{person.name}</p>
                      <p className="text-[11px] text-slate-500">{person.role}</p>
                    </div>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#0a85b1] text-slate-500 hover:text-white flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0a85b1] hover:text-[#0369a1] group transition-colors"
              >
                About Tech22Blocks
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
