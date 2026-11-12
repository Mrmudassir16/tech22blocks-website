import React from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';
import { ShieldCheck, Award } from 'lucide-react';

export default function RecognitionStrip() {
  return (
    <section className="bg-slate-50/80 border-b border-slate-200/80 py-6" aria-label="Official Corporate Recognition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Trust Statement */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] flex-shrink-0 shadow-2xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 tracking-tight">
                Government of India Recognized Enterprise
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                Operating under RRK Software Technologies Private Limited &bull; Full Statutory &amp; GST Compliance
              </p>
            </div>
          </div>

          {/* Official Seals */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Startup India Badge */}
            <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs flex items-center space-x-2.5 transition-transform hover:-translate-y-0.5">
              <div className="relative h-7 w-32">
                <Image
                  src={getAssetUrl('/images/startup-india.svg')}
                  alt="DPIIT #StartupIndia Recognized Entity"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* MSME Badge */}
            <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs flex items-center space-x-2.5 transition-transform hover:-translate-y-0.5">
              <div className="relative h-7 w-32">
                <Image
                  src={getAssetUrl('/images/msme.svg')}
                  alt="MSME — Ministry of Micro, Small & Medium Enterprises"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
