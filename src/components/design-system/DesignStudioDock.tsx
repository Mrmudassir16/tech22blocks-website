'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useDesignMode, DesignMode } from '@/context/DesignModeContext';
import { Sparkles, Layers, Compass, Sliders, ChevronUp, ChevronDown, Check, ArrowRight } from 'lucide-react';
import StarEmblem from '@/components/StarEmblem';

export default function DesignStudioDock() {
  const { mode, setMode, isMounted } = useDesignMode();
  const [collapsed, setCollapsed] = useState(true);

  if (!isMounted) return null;

  return (
    <aside 
      aria-label="Creative Design Direction Switcher"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
    >
      <div className="relative rounded-2xl bg-slate-950/95 border border-sky-500/30 p-2 shadow-2xl backdrop-blur-xl text-white flex items-center gap-2">
        
        {/* Toggle Minimize Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          title={collapsed ? 'Expand Studio Dock' : 'Collapse Studio Dock'}
        >
          {collapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Brand Badge */}
        <div className="flex items-center gap-1.5 px-2 border-r border-slate-800">
          <StarEmblem size={14} variant="white" opacity={0.9} />
          <span className="text-[11px] font-mono font-bold tracking-wider text-sky-400 uppercase hidden sm:inline">
            Design Studio
          </span>
        </div>

        {/* Mode Selector Buttons */}
        {!collapsed ? (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setMode('option-a')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                mode === 'option-a'
                  ? 'bg-[#0a85b1] text-white shadow-lg shadow-[#0a85b1]/40 ring-1 ring-sky-300'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>Option A</span>
              <span className="hidden md:inline font-normal text-[10px] text-sky-200">Star Identity</span>
            </button>

            <button
              onClick={() => setMode('option-b')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                mode === 'option-b'
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/40 ring-1 ring-sky-300'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>Option B</span>
              <span className="hidden md:inline font-normal text-[10px] text-sky-200">Immersive</span>
            </button>

            <button
              onClick={() => setMode('option-c')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                mode === 'option-c'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 ring-1 ring-indigo-300'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>Option C</span>
              <span className="hidden md:inline font-normal text-[10px] text-indigo-200">Corporate</span>
            </button>

            <button
              onClick={() => setMode('default')}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                mode === 'default'
                  ? 'bg-slate-700 text-white ring-1 ring-slate-400'
                  : 'bg-slate-900/50 text-slate-500 hover:text-slate-300'
              }`}
              title="Switch back to baseline live design"
            >
              <span>Baseline</span>
            </button>
          </div>
        ) : (
          <span className="text-xs font-mono text-slate-300 px-2 capitalize">
            Active: {mode.replace('-', ' ')}
          </span>
        )}

        {/* Master Comparison Studio Link */}
        <div className="pl-1 border-l border-slate-800">
          <Link
            href="/design-studio/"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-[11px] font-mono text-sky-300 transition-colors whitespace-nowrap"
            title="Open Master Design Studio & Comparison Matrix"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Compare Studio</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </aside>
  );
}
