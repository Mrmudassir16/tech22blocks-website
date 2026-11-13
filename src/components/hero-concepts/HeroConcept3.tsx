'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Smartphone, 
  Cloud, 
  Layers, 
  Activity,
  Zap,
  Sliders
} from 'lucide-react';
import { COMPANY } from '@/data/company';

type BlueprintTab = 'all' | 'voisage' | 'enterprise';

export default function HeroConcept3() {
  const [activeTab, setActiveTab] = useState<BlueprintTab>('all');

  return (
    <section className="relative bg-[#061423] text-white overflow-hidden border-b border-slate-800">
      
      {/* 1. Technical CAD / Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(#38bdf8 1px, transparent 1px),
            linear-gradient(to right, #0a85b1 1px, transparent 1px),
            linear-gradient(to bottom, #0a85b1 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px, 64px 64px, 64px 64px'
        }}
      />

      {/* Blueprint Ambient Blue Lighting */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[400px] bg-[#0a85b1]/15 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* 2. Top Blueprint Telemetry HUD Bar */}
      <div className="border-b border-sky-900/40 bg-[#040e1a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-300 font-bold uppercase tracking-wider">
              Concept 03 &bull; Architectural Blueprint Matrix
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">SYSTEM: TECH22-PROD-CLUSTER</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              EDGE ROUTING ACTIVE
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-sky-300 font-mono">LATENCY &lt; 25MS</span>
          </div>
        </div>
      </div>

      {/* 3. Main Hero Blueprint Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Command Authority & Editorial Positioning */}
          <div className="lg:col-span-6 space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-700/50 text-sky-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY.legalName} &bull; Dual Business Model</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Engineering software <br />
                <span className="relative inline-block text-sky-400">
                  that ships.
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-[#0a85b1] rounded-full"></span>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 font-medium tracking-tight">
                From ambitious ideas to enterprise-scale solutions.
              </p>
            </div>

            <p className="text-base text-slate-300 leading-relaxed font-light">
              Tech22Blocks operates across two synchronized vectors: our own in-house voice AI engineering (<strong className="text-white font-semibold">VoiSage AI</strong>) and high-throughput custom software systems built for organizations requiring rigorous craftsmanship and zero fluff.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-lg shadow-[#0a85b1]/30 transition-all duration-200 group"
              >
                <span>Deploy With Tech22Blocks</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 rounded-lg border border-slate-700 transition-all duration-200"
              >
                <span>View Architecture</span>
              </Link>
            </div>

            {/* Verification Tag Strip */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>DPIIT #StartupIndia</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>MSME Registered</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 col-span-2 sm:col-span-1">
                <Activity className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% IP Transferred</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Blueprint Matrix Console */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-sky-800/60 bg-[#07192b]/95 p-5 shadow-2xl backdrop-blur-md space-y-4">
              
              {/* Matrix Interactive Controls */}
              <div className="flex items-center justify-between pb-3 border-b border-sky-900/50">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                    System Architecture Matrix
                  </span>
                </div>
                
                {/* Mode Selector */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-2 py-0.5 rounded transition-colors ${activeTab === 'all' ? 'bg-[#0a85b1] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveTab('voisage')}
                    className={`px-2 py-0.5 rounded transition-colors ${activeTab === 'voisage' ? 'bg-[#0a85b1] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    VoiSage AI
                  </button>
                  <button
                    onClick={() => setActiveTab('enterprise')}
                    className={`px-2 py-0.5 rounded transition-colors ${activeTab === 'enterprise' ? 'bg-[#0a85b1] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Enterprise
                  </button>
                </div>
              </div>

              {/* Blueprint Dynamic Nodes */}
              <div className="space-y-3">
                
                {/* Node 1: Client Delivery Tier */}
                <div className={`p-3.5 rounded-xl border transition-all ${activeTab === 'enterprise' || activeTab === 'all' ? 'border-sky-500/50 bg-sky-950/40' : 'border-slate-800/60 bg-slate-900/30 opacity-60'}`}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono text-sky-400 font-bold">01 // CLIENT APPLICATIONS</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">ACTIVE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-sky-400" />
                      <span className="text-slate-200 truncate">Enterprise Web (Next.js)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center gap-2">
                      <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                      <span className="text-slate-200 truncate">iOS &bull; Android &bull; Flutter</span>
                    </div>
                  </div>
                </div>

                {/* Node 2: Dual Division Engine (VoiSage AI vs Custom Core) */}
                <div className={`p-3.5 rounded-xl border transition-all ${activeTab === 'voisage' || activeTab === 'all' ? 'border-[#0a85b1] bg-[#0a85b1]/15 shadow-lg shadow-[#0a85b1]/10' : 'border-slate-800/60 bg-slate-900/30 opacity-60'}`}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono text-sky-300 font-bold">02 // DUAL INTELLIGENCE CORE</span>
                    <span className="text-[10px] font-mono text-sky-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">&lt; 600MS VOICE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <p className="font-semibold text-white flex items-center gap-1.5 mb-0.5">
                        <Sparkles className="w-3 h-3 text-sky-400" />
                        VoiSage AI Pipeline
                      </p>
                      <p className="text-[11px] text-slate-400">Autonomous call triage, ASR, LLM synthesis, WhatsApp summaries.</p>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <p className="font-semibold text-white flex items-center gap-1.5 mb-0.5">
                        <Cpu className="w-3 h-3 text-sky-400" />
                        Custom Microservices
                      </p>
                      <p className="text-[11px] text-slate-400">Secure gRPC / REST APIs, event brokers, and workflow engines.</p>
                    </div>
                  </div>
                </div>

                {/* Node 3: Cloud & Persistence Infrastructure */}
                <div className="p-3.5 rounded-xl border border-sky-900/40 bg-slate-900/60 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-slate-400 font-bold">03 // PERSISTENCE &amp; DEPLOYMENT</span>
                    <span className="text-[10px] font-mono text-slate-400">22/22 TESTS PASSED</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                    <span className="px-2 py-1 rounded bg-slate-800/80 border border-slate-700 flex items-center gap-1">
                      <Cloud className="w-3 h-3 text-sky-400" />
                      Multi-Cloud Edge
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-800/80 border border-slate-700 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-sky-400" />
                      ACID PostgreSQL + Vector DB
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-800/80 border border-slate-700 text-emerald-400">
                      Zero-Lock-in Git
                    </span>
                  </div>
                </div>

              </div>

              {/* Terminal Footnote */}
              <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                <span>$ tech22 status --architecture</span>
                <span className="text-emerald-400">ALL 3 NODES HEALTHY (100% OPERATIONAL)</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
