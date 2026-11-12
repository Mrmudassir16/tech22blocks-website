import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Users2, 
  Target
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function WhyTech22Blocks() {
  return (
    <section className="py-18 lg:py-24 bg-white border-b border-slate-200/80" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
            <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
            <span>Why Tech22Blocks</span>
          </div>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built for impact, not volume. Engineering without the agency fluff.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            We would rather deliver 10 engagements exceptionally well than 100 adequately. Here is what defines our client partnerships.
          </p>
        </div>

        {/* 4 Differentiators in 4-Column Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Pillar 01 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950 tracking-tight">
                Product-Grade Rigor
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We apply the same engineering rigor developed for our proprietary AI tools (VoiSage AI) to every client codebase.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 pt-4 block">01 &bull; Engineering Craft</span>
          </div>

          {/* Pillar 02 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950 tracking-tight">
                Complete IP Ownership
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero vendor lock-in. Full access to Git repositories, architecture diagrams, and continuous deployment pipelines from day one.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 pt-4 block">02 &bull; Transparency</span>
          </div>

          {/* Pillar 03 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950 tracking-tight">
                Direct Founder Access
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No junior account managers or telephone games. You collaborate directly with principal architects and leadership.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 pt-4 block">03 &bull; Accountability</span>
          </div>

          {/* Pillar 04 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a85b1] shadow-2xs">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-950 tracking-tight">
                Long-Term Partnerships
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We are not transactional contractors. We structure our engagements to support organizations over multi-year roadmaps.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 pt-4 block">04 &bull; Longevity</span>
          </div>

        </div>

      </div>
    </section>
  );
}
