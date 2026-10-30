import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  PhoneIncoming, 
  ShieldCheck, 
  Activity, 
  MessageSquareQuote, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Server, 
  Lock 
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function ProductShowcase() {
  const { product } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="product-heading">
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
          <span>Proprietary Voice Intelligence</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 id="product-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {product.headline}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
            {product.subheadline}
          </p>
        </div>

        {/* Split Grid: Left Story & Problem/Solution, Right Realistic Interface Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Product Story & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-[#0a85b1]/30 border border-[#0a85b1]/50 text-xs font-semibold uppercase tracking-wider text-sky-300">
                {product.name} &bull; {product.tagline}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Protecting executive focus without missing critical client opportunities.
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                {product.problem}
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                {product.solution}
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="space-y-3 pt-2">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">Interested in early access or enterprise deployment?</p>
                  <p className="text-xs text-slate-400 mt-0.5">Connect directly with our engineering team.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] transition-all shadow whitespace-nowrap"
                >
                  <span>Inquire About VoiSage</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Product / Interface Visual */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl p-4 sm:p-6 space-y-4">
              
              {/* Terminal / App Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">VoiSage Engine v1.0</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Real-Time Voice Active</span>
                </div>
              </div>

              {/* Call Event Card */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400">
                      <PhoneIncoming className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Incoming Unknown Call</p>
                      <p className="text-sm font-mono text-slate-200">+91 98490 ••••• [Hyderabad, IN]</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    00:24 elapsed
                  </span>
                </div>
              </div>

              {/* Interactive Dialogue & Transcript Feed */}
              <div className="space-y-2.5 font-mono text-xs">
                
                {/* Assistant Speech */}
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/90 space-y-1">
                  <div className="flex items-center justify-between text-sky-400 text-[11px]">
                    <span className="font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      VoiSage Voice Assistant
                    </span>
                    <span className="text-slate-500">11:04:12 AM</span>
                  </div>
                  <p className="text-slate-300 font-sans text-xs">
                    &quot;Hello, you have reached Tech22Blocks executive line. The team is currently in an engineering sprint. May I ask the purpose of your call?&quot;
                  </p>
                </div>

                {/* Caller Voice & Real-time Transcribe */}
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="font-semibold flex items-center gap-1">
                      <MessageSquareQuote className="w-3.5 h-3.5" />
                      Caller Audio Stream
                    </span>
                    <span className="text-slate-500">11:04:18 AM</span>
                  </div>
                  <p className="text-slate-200 font-sans text-xs">
                    &quot;Hi, I am calling from Hyderabad Logistics. We need to confirm the API integration schedule for our automated shipment tracking module.&quot;
                  </p>
                </div>

                {/* Machine Classification */}
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-900/50 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                      Intent Classification: Legitimate Client Inquiry
                    </span>
                    <span className="text-[10px] text-emerald-300 bg-emerald-900/40 px-2 py-0.5 rounded">
                      Confidence 98.4%
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans">
                    Action: Priority notification dispatched to WhatsApp/Slack. Audio transcription indexed. Call eligible for direct bridge.
                  </p>
                </div>

              </div>

              {/* Status footer */}
              <div className="text-[11px] text-slate-500 text-center pt-2 border-t border-slate-900">
                In-house voice architecture engineered by Tech22Blocks software team.
              </div>

            </div>
          </div>

        </div>

        {/* Detailed Technical Architecture (Relocated to dedicated Products Page) */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
              Deep Technical Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Under the Hood of VoiSage AI
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Engineered with low-latency streaming protocols, neural acoustic models, and secure data sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Audio Streaming Pipeline</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {product.technicalArchitecture.audioStreaming}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Streaming Speech-to-Text</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {product.technicalArchitecture.speechToText}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                <Server className="w-4 h-4" />
                <span>Conversational LLM Logic</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {product.technicalArchitecture.languageModel}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>Neural Text-to-Speech</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {product.technicalArchitecture.textToSpeech}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Data Sovereignty &amp; Security</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {product.technicalArchitecture.infrastructure}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Sub-600ms Latency Budget</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                End-to-end voice turnaround engineered for near-instant responsiveness, feeling like a natural human conversation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
