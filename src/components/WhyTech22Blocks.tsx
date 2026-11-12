import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Users2, 
  Layers, 
  CheckCircle2, 
  Target, 
  GitBranch, 
  Lightbulb 
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function WhyTech22Blocks() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
            <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
            <span>Why Tech22Blocks</span>
          </div>
          <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built for impact, not volume. Engineering without the agency fluff.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We would rather deliver 10 engagements exceptionally well than 100 adequately. Here is the operational philosophy that defines our client and product partnerships.
          </p>
        </div>

        {/* Editorial Asymmetric Layout (Thoughtworks / EPAM Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-14">
          
          {/* Main Manifesto Column (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
            
            <div className="space-y-6 relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#38bdf8] bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/80 inline-block">
                The Engineering Standard
              </span>

              <blockquote className="text-xl sm:text-2xl font-medium text-slate-100 leading-snug tracking-tight">
                &ldquo;Great software isn&apos;t built by vanishing contractors or agencies selling slide decks. It is forged by engineers who speak plainly, understand business logic, and actually show up.&rdquo;
              </blockquote>

              <p className="text-sm text-slate-400 leading-relaxed">
                From our Warangal/Hanamkonda headquarters, Tech22Blocks unites two generations of leadership: strategic governance paired with modern AI and cloud engineering.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800 relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">Shivasai &amp; Rajkumar Adepu</p>
                <p className="text-xs text-slate-400 font-mono">Founders &bull; Tech22Blocks</p>
              </div>
              <Link
                href="/about"
                className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 group"
              >
                <span>Our Heritage</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 4 Differentiators in 2x2 Clean Minimal Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Pillar 01 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Product-Grade Rigor
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Because we build our own software (VoiSage AI), we hold client codebases to the identical standard: clean architectures, complete test coverage, and scalable schemas.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 pt-4 block">01 &bull; Craftsmanship</span>
            </div>

            {/* Pillar 02 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Transparent Repositories
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Zero vendor lock-in. Full access to Git repositories, architecture diagrams, and continuous deployment pipelines from day one. You own 100% of your IP.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 pt-4 block">02 &bull; Transparency</span>
            </div>

            {/* Pillar 03 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                  <Users2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Direct Founder Access
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No layers of junior account handlers or telephone games. You collaborate directly with decision-makers who understand the code and respect your timelines.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 pt-4 block">03 &bull; Accountability</span>
            </div>

            {/* Pillar 04 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Long-Term Partnerships
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are not transactional gig-chasers. We structure our engagements to support organizations over multi-year technology roadmaps as their platforms grow.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-400 pt-4 block">04 &bull; Longevity</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
