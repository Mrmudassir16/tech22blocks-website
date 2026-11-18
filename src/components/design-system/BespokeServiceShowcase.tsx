'use client';

import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Layout, 
  Code2, 
  Compass, 
  Layers, 
  CheckCircle2, 
  Lock, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Activity,
  Maximize2
} from 'lucide-react';
import StarEmblem from '@/components/StarEmblem';

interface ServiceVisualProps {
  id: string;
}

export function BespokeServiceVisual({ id }: ServiceVisualProps) {
  // Service 01: Website Development (Interactive Browser Inspector)
  if (id === 'website-development') {
    return <WebsiteDevVisual />;
  }

  // Service 02: Mobile Application Development (Dual Platform Stage)
  if (id === 'mobile-applications') {
    return <MobileAppVisual />;
  }

  // Service 03: UI/UX Design (Interactive Vector Workbench)
  if (id === 'uiux-design') {
    return <UIUXDesignVisual />;
  }

  // Service 04: Custom Software Development (Microservices Pipeline)
  if (id === 'custom-software') {
    return <CustomSoftwareVisual />;
  }

  // Service 05: IT Consulting & Advisory (Strategic Architecture Radar)
  if (id === 'it-consulting') {
    return <ITConsultingVisual />;
  }

  // Service 06: Web3.0 (Cryptographic Block Lattice)
  if (id === 'web3') {
    return <Web3Visual />;
  }

  return null;
}

/* =========================================================================
   1. WEBSITE DEVELOPMENT: Responsive Browser Viewport & Code Telemetry
   ========================================================================= */
function WebsiteDevVisual() {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 overflow-hidden shadow-2xl transition-all duration-300">
      {/* Browser Chrome Header */}
      <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* URL Bar */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-xs w-full justify-center">
          <span className="text-emerald-400">https://</span>
          <span className="text-slate-200">tech22blocks.in</span>
          <span className="text-sky-400">/platform</span>
        </div>

        {/* Responsive Mode Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px] font-mono">
          <button 
            onClick={() => setDevice('desktop')}
            className={`px-2 py-0.5 rounded ${device === 'desktop' ? 'bg-[#0a85b1] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            1920
          </button>
          <button 
            onClick={() => setDevice('tablet')}
            className={`px-2 py-0.5 rounded ${device === 'tablet' ? 'bg-[#0a85b1] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            768
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={`px-2 py-0.5 rounded ${device === 'mobile' ? 'bg-[#0a85b1] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            375
          </button>
        </div>
      </div>

      {/* Browser Body with Simulated Layout */}
      <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-950 min-h-[260px] flex flex-col justify-between">
        
        {/* Mockup Wireframe Elements */}
        <div className={`mx-auto transition-all duration-300 w-full ${
          device === 'mobile' ? 'max-w-[220px]' : device === 'tablet' ? 'max-w-[340px]' : 'max-w-full'
        }`}>
          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-16 h-2 rounded bg-sky-500/40" />
              <div className="flex gap-1">
                <div className="w-4 h-2 rounded bg-slate-700" />
                <div className="w-4 h-2 rounded bg-slate-700" />
              </div>
            </div>
            <div className="w-3/4 h-3 rounded bg-slate-600/70" />
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="h-10 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-center text-[9px] font-mono text-sky-400">
                Next.js 14
              </div>
              <div className="h-10 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-center text-[9px] font-mono text-emerald-400">
                SSR / Edge
              </div>
              <div className="h-10 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-center text-[9px] font-mono text-amber-400">
                SEO 100
              </div>
            </div>
          </div>
        </div>

        {/* Live Metric Verification Ticker */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Lighthouse: 100/100</span>
          </div>
          <div className="text-slate-400">FCP: <strong className="text-white">0.4s</strong></div>
          <div className="text-slate-400">CLS: <strong className="text-white">0.00</strong></div>
          <div className="text-sky-400">Zero Cumulative Shift</div>
        </div>

      </div>
    </div>
  );
}

/* =========================================================================
   2. MOBILE APPLICATIONS: Dual-Platform (iOS + Android) Stage
   ========================================================================= */
function MobileAppVisual() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-[#031526] to-slate-950 border border-sky-500/20 p-6 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Native iOS &amp; Android Ecosystem
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-300">
          60 FPS Fluid
        </span>
      </div>

      {/* Dual Smartphone Mockup Frames */}
      <div className="grid grid-cols-2 gap-4 items-center">
        
        {/* iOS Mockup */}
        <div className="relative rounded-2xl bg-slate-900 border-2 border-slate-700 p-3 shadow-lg">
          {/* Dynamic Island */}
          <div className="w-12 h-2.5 rounded-full bg-black mx-auto mb-3 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-sky-400 mr-1" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-10 rounded bg-sky-400/50" />
            <div className="h-8 rounded-lg bg-sky-950/60 border border-sky-800/40 p-1 flex items-center gap-1.5">
              <StarEmblem size={12} variant="white" opacity={0.8} />
              <div className="space-y-0.5 flex-1">
                <div className="h-1 w-12 rounded bg-white/60" />
                <div className="h-1 w-8 rounded bg-sky-400/40" />
              </div>
            </div>
            <div className="h-5 rounded bg-slate-800" />
          </div>
          <div className="mt-2 text-center text-[9px] font-mono text-slate-400">
            Swift / SwiftUI
          </div>
        </div>

        {/* Android Material Mockup */}
        <div className="relative rounded-2xl bg-slate-900 border-2 border-slate-700 p-3 shadow-lg">
          {/* Camera Punchhole */}
          <div className="w-2 h-2 rounded-full bg-black mx-auto mb-3" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-12 rounded bg-emerald-400/50" />
            <div className="h-8 rounded-lg bg-emerald-950/40 border border-emerald-800/40 p-1 flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-emerald-400" />
              <div className="space-y-0.5 flex-1">
                <div className="h-1 w-14 rounded bg-white/60" />
                <div className="h-1 w-10 rounded bg-emerald-400/40" />
              </div>
            </div>
            <div className="h-5 rounded bg-slate-800" />
          </div>
          <div className="mt-2 text-center text-[9px] font-mono text-slate-400">
            Kotlin Compose
          </div>
        </div>

      </div>

      {/* Telemetry Bar */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Offline SQLite Sync</span>
        <span className="text-emerald-400">Latency: &lt;16ms</span>
      </div>
    </div>
  );
}

/* =========================================================================
   3. UI/UX DESIGN: Interactive Vector Workbench
   ========================================================================= */
function UIUXDesignVisual() {
  return (
    <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layout className="w-4 h-4 text-[#38bdf8]" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Design Tokens &amp; Component Matrix
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#38bdf8]">Figma Auto-Layout</span>
      </div>

      {/* Interactive Vector Workspace Preview */}
      <div className="relative rounded-xl bg-slate-900/90 border border-slate-800 p-4 min-h-[170px] flex flex-col justify-between">
        
        {/* Bezier Vector Handle Simulation */}
        <div className="relative border border-dashed border-sky-500/40 rounded-lg p-3 bg-sky-950/20">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-sky-300 font-semibold">
              Frame: &lt;ButtonPrimary /&gt;
            </span>
            <span className="text-[9px] font-mono text-slate-400">w: 240px &bull; h: 48px</span>
          </div>

          {/* Component States */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="px-2 py-1.5 rounded bg-[#0a85b1] text-white text-[10px] font-bold text-center">
              Default
            </div>
            <div className="px-2 py-1.5 rounded bg-[#0284c7] text-white text-[10px] font-bold text-center ring-2 ring-sky-400">
              Hover State
            </div>
            <div className="px-2 py-1.5 rounded bg-slate-800 text-slate-500 text-[10px] font-bold text-center">
              Disabled
            </div>
          </div>
        </div>

        {/* Color Palette Swatches */}
        <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] font-mono">
          <span className="text-slate-400">Brand Palette:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-[#0a85b1] border border-white/20" title="#0a85b1" />
            <span className="w-4 h-4 rounded bg-[#38bdf8] border border-white/20" title="#38bdf8" />
            <span className="w-4 h-4 rounded bg-[#020b14] border border-white/20" title="#020b14" />
            <span className="w-4 h-4 rounded bg-white border border-white/20" title="#ffffff" />
          </div>
        </div>

      </div>
    </div>
  );
}

/* =========================================================================
   4. CUSTOM SOFTWARE: Enterprise Microservice Pipeline
   ========================================================================= */
function CustomSoftwareVisual() {
  return (
    <div className="relative rounded-2xl bg-[#020b14] border border-sky-500/20 p-6 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Microservices &amp; ACID Core
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Throughput: 12k req/s</span>
        </span>
      </div>

      {/* Microservice Architecture Topology */}
      <div className="space-y-2.5">
        
        {/* Tier 1: Gateway */}
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-sky-400">
            <Cpu className="w-4 h-4" />
            <span>API Gateway &bull; Reverse Proxy</span>
          </div>
          <span className="text-slate-400 text-[10px]">Go / Fiber</span>
        </div>

        {/* Downlink Connectors */}
        <div className="flex justify-center -my-1">
          <div className="w-0.5 h-3 bg-sky-500/40" />
        </div>

        {/* Tier 2: Core Distributed Engine */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1">
            <div className="text-slate-200 font-bold">Auth Service</div>
            <div className="text-[10px] text-slate-400">JWT &bull; RBAC</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1">
            <div className="text-slate-200 font-bold">Order Engine</div>
            <div className="text-[10px] text-emerald-400">Async Workers</div>
          </div>
        </div>

        {/* Downlink Connectors */}
        <div className="flex justify-center -my-1">
          <div className="w-0.5 h-3 bg-sky-500/40" />
        </div>

        {/* Tier 3: Storage */}
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-amber-400">
            <Database className="w-4 h-4" />
            <span>PostgreSQL &bull; Redis Cache</span>
          </div>
          <span className="text-emerald-400 text-[10px]">p99: 14ms</span>
        </div>

      </div>
    </div>
  );
}

/* =========================================================================
   5. IT CONSULTING: Strategic Architecture Radar
   ========================================================================= */
function ITConsultingVisual() {
  return (
    <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-6 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Architecture Audit &amp; Radar
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800 text-purple-300">
          Executive Advisory
        </span>
      </div>

      {/* 4-Quadrant Architecture Audit Matrix */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Scalability Index</span>
          <div className="text-lg font-bold text-emerald-400">96 / 100</div>
          <p className="text-[10px] text-slate-400">Elastic container auto-scaling</p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Security Baseline</span>
          <div className="text-lg font-bold text-sky-400">SOC2 Ready</div>
          <p className="text-[10px] text-slate-400">Zero-trust network architecture</p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Cost Optimization</span>
          <div className="text-lg font-bold text-amber-400">-42% Cloud</div>
          <p className="text-[10px] text-slate-400">Reserved instances &amp; caching</p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Code Debt Ratio</span>
          <div className="text-lg font-bold text-purple-400">&lt; 3.2%</div>
          <p className="text-[10px] text-slate-400">Continuous refactoring pipeline</p>
        </div>
      </div>

      {/* Strategic Milestone Roadmap */}
      <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Phase 1: Architecture Audit</span>
        <span>&rarr;</span>
        <span>Phase 2: Modernization</span>
        <span>&rarr;</span>
        <span className="text-white">Phase 3: Scale</span>
      </div>
    </div>
  );
}

/* =========================================================================
   6. WEB3.0: Cryptographic Block Lattice (Coming Soon)
   ========================================================================= */
function Web3Visual() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-950 border border-amber-500/30 p-6 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Decentralized Systems &amp; Verification
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold uppercase tracking-wider">
          Coming Soon
        </span>
      </div>

      {/* Cryptographic Block Lattice Mockup */}
      <div className="relative p-5 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-3">
        
        {/* Block Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-amber-400">BLOCK #2204 &bull; HASH VALIDATED</span>
          <span className="text-slate-400">Consensus: POS</span>
        </div>

        {/* Cryptographic Merkle Hash Nodes */}
        <div className="p-3 rounded-lg bg-black/60 border border-slate-800 font-mono text-[10px] text-slate-400 space-y-1">
          <div>PrevHash: <span className="text-slate-500">0x8a92f01c...</span></div>
          <div>MerkleRoot: <span className="text-amber-400">0x7e22blocks...</span></div>
          <div>Timestamp: <span className="text-slate-300">2026-Q1 &bull; RESEARCH STAGE</span></div>
        </div>

        {/* Padlock Blueprint Overlay */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] font-mono text-amber-300/80">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            <span>Distributed Ledger Explorations</span>
          </div>
          <span>In Active Research</span>
        </div>

      </div>
    </div>
  );
}
