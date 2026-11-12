import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  PhoneIncoming, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Radio, 
  MessageSquare, 
  Lock,
  Cpu,
  Clock,
  ExternalLink
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function FeaturedProduct() {
  const { product } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden" aria-labelledby="featured-product-heading">
      
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
          <span>Proprietary Products &bull; In-House R&amp;D</span>
        </div>

        {/* Split Grid: Left Story & Value, Right Product Interface Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Product Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0a85b1]/30 border border-[#0a85b1]/50 text-xs font-semibold uppercase tracking-wider text-sky-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.name} &bull; {product.status}</span>
              </div>

              <h2 id="featured-product-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Autonomous voice intelligence for unknown incoming calls.
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                {product.headline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              {product.problem} {product.solution}
            </p>

            {/* 4 Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {product.capabilities.map((cap, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start space-x-3 hover:border-slate-700 transition-colors"
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

          {/* Right: High-Fidelity Product UI Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-6 shadow-2xl space-y-5 relative">
              
              {/* Product Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">VoiSage Live Assistant</p>
                    <p className="text-[10px] text-slate-400 font-mono">Real-Time Inbound Voice Pipeline</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                  ACTIVE AGENT
                </span>
              </div>

              {/* Live Triage Card */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/90 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Incoming Call &bull; Unknown Number
                  </span>
                  <div className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>00:18</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400">
                    <PhoneIncoming className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white tracking-wide font-mono">+91 98490 •••••</p>
                    <p className="text-xs text-emerald-400 font-medium">Intent: Commercial API Integration Inquiry</p>
                  </div>
                </div>

                {/* Voice Spectrogram Stream */}
                <div className="pt-2 flex items-center gap-1.5 h-7 bg-slate-900/80 rounded px-3 border border-slate-800">
                  <span className="text-[9px] font-mono text-slate-500 mr-1">NEURAL SPEECH</span>
                  {[35, 80, 50, 95, 60, 100, 45, 85, 40, 75, 90, 30, 60, 85, 50, 95, 40, 70, 85, 60].map((val, i) => (
                    <span 
                      key={i} 
                      className="w-1 bg-gradient-to-t from-[#0a85b1] to-sky-400 rounded-full"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                  <span className="text-[9px] font-mono text-sky-400 ml-auto">&lt;580ms latency</span>
                </div>
              </div>

              {/* Instant Executive Brief Dispatch */}
              <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Structured Executive Brief
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">Auto-Dispatched</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-900/50 p-2.5 rounded border border-slate-800/80">
                  &ldquo;Caller inquired regarding enterprise API integration timeline for logistics tracking. Verified valid corporate interest. Direct callback scheduled for 3:00 PM.&rdquo;
                </p>
              </div>

              {/* Technical Trust Footnote */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 font-mono">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#0a85b1]" />
                  Zero Audio Retained Without Consent
                </span>
                <span className="text-sky-400">
                  Indian English &bull; Regional Dialects
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
