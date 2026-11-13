import React from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';

export default function RecognitionStrip() {
  return (
    <section 
      className="bg-slate-50 border-b border-slate-200/80 py-4 sm:py-5" 
      aria-label="Official Corporate Recognition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
          
          {/* Subtle Label */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a85b1]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
              Official Corporate Recognition
            </span>
          </div>

          {/* Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            
            {/* DPIIT / Startup India */}
            <div className="flex items-center gap-3">
              <div className="relative h-7 w-28 sm:w-32 flex-shrink-0">
                <Image
                  src={getAssetUrl('/images/startup-india.svg')}
                  alt="DPIIT #StartupIndia"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-slate-800 font-mono">
                DPIIT Recognized
              </span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-slate-300" />

            {/* MSME */}
            <div className="flex items-center gap-3">
              <div className="relative h-7 w-28 sm:w-32 flex-shrink-0">
                <Image
                  src={getAssetUrl('/images/msme.svg')}
                  alt="MSME"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-slate-800 font-mono">
                MSME Registered
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
