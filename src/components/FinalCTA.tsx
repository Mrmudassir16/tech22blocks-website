import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function FinalCTA() {
  return (
    <section
      className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden border-t border-slate-800"
    >
      {/* Very subtle diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-7">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400">
              Start a Conversation
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a project in mind?<br />
            <span className="text-[#38bdf8]">{"Let's build it right."}</span>
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Whether you need a custom web platform, a mobile application, or an intelligent voice
            automation system — our founders and engineering team are ready to build with you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#0a85b1] hover:bg-[#0369a1] rounded-full shadow-sm transition-colors"
            >
              Talk to Tech22Blocks
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`mailto:${COMPANY.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-full transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              {COMPANY.email}
            </a>
          </div>

          {/* Contact row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-sky-500" />
              {COMPANY.phoneDisplay}
            </span>
            <span className="text-slate-700">·</span>
            <span>Warangal, Telangana</span>
            <span className="text-slate-700">·</span>
            <span>RRK Software Technologies Pvt. Ltd.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
