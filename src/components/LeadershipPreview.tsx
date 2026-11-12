import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function LeadershipPreview() {
  const { foundersVision, leadership } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" aria-labelledby="leadership-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50/30 p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Founder Official Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/90 aspect-[4/3] w-full bg-slate-200">
                <Image
                  src={getAssetUrl('/images/founders-father-son.jpg')}
                  alt="Rajkumar Adepu (Director & Chairman) and Shivasai Adepu (Director & CEO) - Tech22Blocks Founders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Leadership & Credibility */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
                <span>Leadership &bull; Est. 2025</span>
              </div>

              <div className="space-y-1">
                <h2 id="leadership-preview-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  {foundersVision.mainHeading}
                </h2>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  {foundersVision.supportingHeading}
                </p>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Tech22Blocks was founded by a father and son who bring two generations of thinking to one mission: building practical technology solutions that help businesses innovate and prepare for the future. Experience brings corporate discipline and long-term perspective; the next generation brings modern AI, scalable software architectures, and the speed to challenge traditional agency practices.
              </p>

              {/* Founder Profile Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-slate-900">Shivasai Adepu</p>
                    <p className="text-slate-500 text-xs">Director &amp; CEO &bull; Technology Architecture</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/shivasai-adepu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-sky-50 hover:bg-[#0a85b1] text-[#0a85b1] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Shivasai Adepu LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-slate-900">Rajkumar Adepu</p>
                    <p className="text-slate-500 text-xs">Director &amp; Chairman &bull; Governance &amp; Strategy</p>
                  </div>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-sky-50 hover:bg-[#0a85b1] text-[#0a85b1] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Rajkumar Adepu LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Navigation to Full About Page */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
                >
                  <span>Read the Full Tech22Blocks Story &amp; 22 Principles</span>
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
