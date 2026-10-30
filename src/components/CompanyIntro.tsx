import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function CompanyIntro() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
              <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
              <span>Who We Are</span>
            </div>

            <h2 id="intro-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              A technology partner built on honesty, speed, and real engineering.
            </h2>

            <p className="text-base sm:text-lg text-slate-650 leading-relaxed">
              Operating under <strong className="text-slate-900 font-semibold">{COMPANY.legalName}</strong>, Tech22Blocks was founded in 2025 on a straightforward conviction: startups and emerging businesses deserve serious technology — not watered-down enterprise leftovers, vanishing contractors, or agencies charging for slide decks instead of shipping code.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We bring together two generations of leadership to deliver practical digital systems, from full-stack web and mobile platforms to autonomous AI voice solutions. A team that speaks plainly, builds fast, and actually shows up.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Highlights & Credentials */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1] flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Government of India Recognized</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Officially certified under DPIIT <strong className="text-slate-800">#StartupIndia</strong> and <strong className="text-slate-800">MSME</strong> schemes with full corporate compliance.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Founder-Led Engineering</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Direct collaboration with CEO Shivasai Adepu and Chairman Rajkumar Adepu without intermediary agency layers.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1] flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Impact Over Volume</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  We commit our full attention to delivering exceptional results, clean architectures, and long-term partnerships.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
