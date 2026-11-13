import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneIncoming, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function FeaturedProduct() {
  const { product } = COMPANY;

  return (
    <section
      className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800"
      aria-labelledby="featured-product-heading"
    >
      {/* Very subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #38bdf8 0, #38bdf8 1px, transparent 0, transparent 50%)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400">
            In-House Technology Innovation
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-7">

            {/* Product badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a85b1]/20 border border-[#0a85b1]/40">
              <span className="text-xs font-bold text-sky-300">{product.name}</span>
              <span className="text-sky-600">&bull;</span>
              <span className="text-[11px] text-sky-400 font-medium">Under Active Development</span>
            </div>

            <h2
              id="featured-product-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Autonomous voice intelligence<br className="hidden sm:block" /> for incoming calls.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {product.problem}
            </p>

            {/* Capabilities 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 flex items-start gap-3 hover:border-slate-600 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wide">{cap.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/products/"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0369a1] rounded-lg shadow-sm transition-colors group"
              >
                <span>Explore VoiSage AI</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-xs text-slate-400 font-mono">
                Engineered by Tech22Blocks &bull; Live Voice System
              </span>
            </div>
          </div>

          {/* Right: Product Interface Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden">

              {/* Mockup header */}
              <div className="border-b border-slate-800 px-5 py-3 flex items-center justify-between bg-slate-900">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-slate-200">VoiSage Live System</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-semibold">
                  ACTIVE
                </span>
              </div>

              <div className="p-5 space-y-3">
                {/* Incoming call card */}
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>INCOMING CALL</span>
                    <span>00:23</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center">
                      <PhoneIncoming className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">+91 98490 &bull;&bull;&bull;&bull;&bull;</p>
                      <p className="text-[11px] text-emerald-400 font-mono">Classification: Legitimate Inquiry</p>
                    </div>
                  </div>
                </div>

                {/* AI summary */}
                <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-4 space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    Automated Executive Brief
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    &ldquo;Caller inquired about API integration milestone for the shipment tracking module. Action summary dispatched to WhatsApp.&rdquo;
                  </p>
                </div>

                {/* Metrics strip */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {['Streaming Voice Engine', 'LLM Classification', 'WhatsApp Dispatch'].map((m) => (
                    <span
                      key={m}
                      className="text-[10px] font-mono px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
