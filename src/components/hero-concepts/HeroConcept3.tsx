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
  Sliders,
  Server,
  Database,
  Radio,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY } from '@/data/company';

type ArchitectureLayer = 'all' | 'frontend' | 'voisage' | 'backend';

export default function HeroConcept3() {
  const [activeLayer, setActiveLayer] = useState<ArchitectureLayer>('all');

  return (
    <section 
      className="relative bg-[#030e1a] text-white overflow-hidden border-b border-slate-800"
      aria-label="Hero Section - Concept C: Distinctive Digital Engineering Visual Composition"
    >
      
      {/* 1. Technical CAD Blueprint Grid Background */}
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

      {/* Blueprint Ambient Blue Glow */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[400px] bg-[#0a85b1]/15 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* 2. Top Blueprint Telemetry HUD Bar */}
      <div className="border-b border-sky-900/40 bg-[#020b14]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-300 font-bold uppercase tracking-wider">
              Concept C &bull; Digital Engineering Visual Composition
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">CLUSTER: TECH22-PROD-SYSTEMS</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              MULTI-TIER TOPOLOGY
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-sky-300 font-mono">LATENCY &lt; 20MS</span>
          </div>
        </div>
      </div>

      {/* 3. Main Hero Blueprint Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Command Authority & Copy */}
          <div className="lg:col-span-6 space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-700/50 text-sky-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY.legalName} &bull; Dual Capability</span>
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
              We design, build, and operate resilient digital systems. From our in-house voice AI platform (<strong className="text-white font-semibold">VoiSage AI</strong>) to mission-critical custom enterprise software, we engineer production code that drives real business performance.
            </p>

            {/* Standardized CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-xl shadow-lg shadow-[#0a85b1]/30 transition-all duration-200 group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services/"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-slate-700 transition-all duration-200"
              >
                <span>Explore Our Capabilities</span>
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

          {/* Right Column: Distinctive Digital Engineering Visual Composition */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-sky-800/60 bg-[#051829]/90 p-5 sm:p-6 shadow-2xl backdrop-blur-md space-y-5">
              
              {/* Header with Interactive Filter Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-sky-900/50 gap-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                    System Architecture Topology
                  </span>
                </div>
                
                {/* Layer Filters */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  {(['all', 'frontend', 'voisage', 'backend'] as ArchitectureLayer[]).map((layer) => (
                    <button
                      key={layer}
                      onClick={() => setActiveLayer(layer)}
                      className={`px-2.5 py-1 rounded-md transition-colors capitalize ${
                        activeLayer === layer
                          ? 'bg-[#0a85b1] text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {layer === 'all' ? 'Full Stack' : layer === 'voisage' ? 'VoiSage AI' : layer}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topology Layers Display */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Layer 1: Client Experience (Web & Mobile) */}
                <div className={`p-4 rounded-xl border transition-all duration-200 ${
                  activeLayer === 'all' || activeLayer === 'frontend'
                    ? 'bg-slate-900/90 border-sky-500/50 shadow-md'
                    : 'bg-slate-900/30 border-slate-800/40 opacity-40'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sky-300 font-bold">
                      <Globe className="w-4 h-4 text-sky-400" />
                      <span>01. Client Experience Layer</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                      Edge SSR &bull; Native 60 FPS
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans mb-2">
                    Next.js full-stack web platforms and cross-platform React Native / Flutter apps with offline sync.
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Next.js 14</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">React Native</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">TypeScript</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Tailwind</span>
                  </div>
                </div>

                {/* Connector Beam */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-3 bg-sky-500/40" />
                </div>

                {/* Layer 2: Intelligence & Voice Engine (VoiSage AI) */}
                <div className={`p-4 rounded-xl border transition-all duration-200 ${
                  activeLayer === 'all' || activeLayer === 'voisage'
                    ? 'bg-gradient-to-r from-sky-950/80 via-slate-900 to-sky-950/80 border-sky-400/60 shadow-lg shadow-sky-950/50'
                    : 'bg-slate-900/30 border-slate-800/40 opacity-40'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Radio className="w-4 h-4 text-sky-400 animate-pulse" />
                      <span className="text-sky-300">02. Voice Intelligence Engine</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                      &lt; 600ms Latency
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans mb-2">
                    Autonomous voice screening system (VoiSage AI) processing caller verification, intent extraction, and WhatsApp summaries.
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-sky-900/50 border border-sky-700 text-sky-200">Real-Time ASR</span>
                    <span className="px-2 py-0.5 rounded bg-sky-900/50 border border-sky-700 text-sky-200">LLM Intent</span>
                    <span className="px-2 py-0.5 rounded bg-sky-900/50 border border-sky-700 text-sky-200">Automated Dispatch</span>
                  </div>
                </div>

                {/* Connector Beam */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-3 bg-sky-500/40" />
                </div>

                {/* Layer 3: Enterprise Backend & Cloud Infrastructure */}
                <div className={`p-4 rounded-xl border transition-all duration-200 ${
                  activeLayer === 'all' || activeLayer === 'backend'
                    ? 'bg-slate-900/90 border-sky-500/50 shadow-md'
                    : 'bg-slate-900/30 border-slate-800/40 opacity-40'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sky-300 font-bold">
                      <Server className="w-4 h-4 text-sky-400" />
                      <span>03. Core Software &amp; Cloud Layer</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                      High-Throughput APIs
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans mb-2">
                    Bespoke backend architectures, microservices, secure relational databases, and CI/CD automation pipelines.
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Node.js</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Python</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">PostgreSQL</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Docker</span>
                  </div>
                </div>

              </div>

              {/* Topology Footer Stats */}
              <div className="pt-3 border-t border-sky-900/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Architecture Status:</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Verified Scalable &bull; 99.9% Uptime Target
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
