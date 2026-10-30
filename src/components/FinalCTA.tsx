import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function FinalCTA() {
  return (
    <section className="bg-slate-900 text-white py-20 lg:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
            <span>Start a Conversation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a technology challenge? Let&apos;s talk.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a full-stack web application, a mobile app for iOS and Android, or custom operational software — our founders and technical team are ready to build with you.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm transition-all"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href={`mailto:${COMPANY.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-lg transition-all border border-slate-700"
            >
              <Mail className="w-4 h-4 mr-2 text-sky-400" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex items-center justify-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1 text-[#38bdf8]" />
              {COMPANY.phoneDisplay}
            </span>
            <span>&bull;</span>
            <span>Registered in Telangana, India</span>
          </div>

        </div>
      </div>
    </section>
  );
}

