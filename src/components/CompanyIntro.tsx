import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Box, Wrench } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function CompanyIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/60" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="label-eyebrow">Who We Are</div>

            <h2 id="intro-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              A technology company built on honesty,{' '}
              <span className="text-[#0a85b1]">speed, and real engineering.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Operating under <strong className="text-slate-900 font-semibold">{COMPANY.legalName}</strong>,
              Tech22Blocks was founded in 2025 on a straightforward conviction: startups and emerging businesses
              deserve serious technology — not watered-down enterprise leftovers, vanishing contractors,
              or agencies charging for slide decks instead of shipping code.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We bring together two generations of leadership — combining strategic experience with modern
              engineering — to deliver practical digital systems, from full-stack web and mobile platforms
              to autonomous AI voice solutions.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0a85b1] hover:text-[#0369a1] group transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Credentials */}
          <div className="lg:col-span-5 space-y-3">
            {[
              {
                icon: <Award className="w-5 h-5 text-[#0a85b1]" />,
                title: 'Government of India Recognized',
                desc: 'Officially certified under DPIIT #StartupIndia and MSME schemes with full corporate statutory compliance.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-[#0a85b1]" />,
                title: 'Founder-Led Engineering',
                desc: 'Direct collaboration with CEO Shivasai Adepu and Chairman Rajkumar Adepu — no intermediary agency layers.',
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-[#0a85b1]" />,
                title: 'Impact Over Volume',
                desc: 'Full attention on every project. Clean architectures, honest timelines, long-term partnerships.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Divisions Strip */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="mb-6">
            <div className="label-eyebrow">Our Two Business Divisions</div>
            <p className="mt-2 text-sm text-slate-600">
              Tech22Blocks operates across two complementary pillars — proprietary products and custom enterprise solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Division 1 */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-6 space-y-3 hover:border-sky-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0a85b1] flex items-center justify-center flex-shrink-0">
                  <Box className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0a85b1]">Division 01</span>
                  <h3 className="text-base font-extrabold text-slate-900">Proprietary Products</h3>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                We build our own AI-powered technology products. Starting with{' '}
                <strong className="text-[#0a85b1]">VoiSage AI</strong> — an autonomous voice assistant for
                managing unknown incoming calls with real-time classification and executive briefings.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a85b1] hover:text-[#0369a1] group transition-colors"
              >
                Explore VoiSage AI
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Division 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Division 02</span>
                  <h3 className="text-base font-extrabold text-slate-900">Enterprise Solutions</h3>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                We design, build, and deploy custom software for businesses — high-performance web platforms,
                native mobile apps, UI/UX design systems, and intelligent workflow automation.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 group transition-colors"
              >
                Explore Our Services
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
