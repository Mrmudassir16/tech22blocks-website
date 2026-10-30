import React from 'react';
import Image from 'next/image';

export default function RecognitionStrip() {
  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-10" aria-label="Official Recognition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0a85b1]">
              Recognized Entity
            </span>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Officially Certified &amp; Registered in India
            </h3>
            <p className="text-sm text-slate-600 mt-0.5">
              Operating under RRK Software Technologies Private Limited with full statutory compliance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {/* Startup India */}
            <div className="bg-white px-5 py-3 rounded-lg border border-slate-200 shadow-sm flex items-center space-x-3 transition-transform hover:-translate-y-0.5">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/startup-india.svg"
                  alt="Startup India - DPIIT Recognized Entity"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* MSME */}
            <div className="bg-white px-5 py-3 rounded-lg border border-slate-200 shadow-sm flex items-center space-x-3 transition-transform hover:-translate-y-0.5">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/msme.svg"
                  alt="MSME - Ministry of Micro, Small and Medium Enterprises"
                  fill
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

