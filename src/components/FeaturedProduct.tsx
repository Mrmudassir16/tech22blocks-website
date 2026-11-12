import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Radio, 
  Lock,
  Clock,
  PhoneIncoming,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function FeaturedProduct() {
  const { product } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800" aria-labelledby="featured-product-heading">
      
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Subtle Cyan Organic Glow */}
      <div 
        aria-hidden="true" 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0a85b1]/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
          <span>Featured In-House Product &bull; Proprietary R&amp;D</span>
        </div>

        {/* Split Grid: Left Story & Value, Right Actual Product Interface Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Product Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0a85b1]/30 border border-[#0a85b1]/50 text-xs font-semibold uppercase tracking-wider text-sky-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.name} &bull; {product.status}</span>
              </div>

              <h2 id="featured-product-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Autonomous voice intelligence for unknown incoming calls.
              </h2>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                {product.headline}
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              {product.problem} {product.solution}
            </p>

            {/* 4 Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {product.capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start space-x-3 hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">{cap.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm transition-all group"
              >
                <span>Explore VoiSage AI Architecture</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <span className="text-xs text-slate-400 font-mono">
                Proprietary Engineering &bull; RRK Software Technologies
              </span>
            </div>

          </div>

          {/* Right Column: Actual High-Resolution Product Screenshot Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-2xl overflow-hidden group">
              
              {/* Product Visual Container */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src={getAssetUrl('/images/voisage-product-screen.jpg')}
                  alt="VoiSage AI Voice Screening Assistant Product Interface"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Status Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-medium text-emerald-400">
                    Live Call Inbound Screening
                  </span>
                </div>

                {/* Latency Metric Tag */}
                <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 text-white flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span className="text-[11px] font-mono text-sky-300 font-semibold">
                    Sub-600ms Voice Pipeline
                  </span>
                </div>
              </div>

              {/* Footnote */}
              <div className="px-3 pt-3 pb-1 flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-slate-800/80 mt-2">
                <span className="flex items-center gap-1 text-slate-400">
                  <Lock className="w-3 h-3 text-[#0a85b1]" />
                  Zero Audio Retention Without Consent
                </span>
                <span className="text-sky-400">
                  WhatsApp Executive Brief
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
