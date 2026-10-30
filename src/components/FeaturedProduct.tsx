import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneIncoming, ShieldCheck, Activity, CheckCircle2, Mic } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function FeaturedProduct() {
  const { product } = COMPANY;

  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="featured-product-heading">
      {/* Subtle architectural background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
          <span>Featured In-House Product</span>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Concise Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-[#0a85b1]/30 border border-[#0a85b1]/50 text-xs font-semibold uppercase tracking-wider text-sky-300 mb-3">
                {product.name}
              </div>
              <h2 id="featured-product-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Autonomous voice intelligence for unknown incoming calls.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                {product.problem}
              </p>
            </div>

            {/* 4 Key Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {product.capabilities.map((cap, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">{cap.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm transition-all"
              >
                <span>Explore VoiSage AI</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <span className="text-xs text-slate-400">
                Built by Tech22Blocks &bull; Proprietary R&amp;D
              </span>
            </div>
          </div>

          {/* Right: Sleek Product Card Preview (No oversized terminal logs) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-mono font-semibold text-slate-200">VoiSage Live Assistant</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                  Active
                </span>
              </div>

              {/* Call Card */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">UNKNOWN CALLER</span>
                  <span className="text-slate-500 font-mono">00:18</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400">
                    <PhoneIncoming className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">+91 98490 •••••</p>
                    <p className="text-xs text-emerald-400">Classification: Legitimate Client Inquiry</p>
                  </div>
                </div>
              </div>

              {/* Summary note */}
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  Automated Executive Brief
                </div>
                <p className="text-slate-400">
                  &quot;Caller inquired about API integration milestone for shipment tracking. Action summary dispatched to WhatsApp.&quot;
                </p>
              </div>

              <div className="text-[11px] text-center text-slate-500 pt-1">
                Sub-600ms latency voice pipeline engineered in-house.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
