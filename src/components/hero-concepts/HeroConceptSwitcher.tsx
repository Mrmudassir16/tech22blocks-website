'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Eye, Layers, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroConcept1 from './HeroConcept1';
import HeroConcept2 from './HeroConcept2';
import HeroConcept3 from './HeroConcept3';

export type ConceptId = 'concept-a' | 'concept-b' | 'concept-c';

const CONCEPTS = [
  {
    id: 'concept-a' as ConceptId,
    code: 'A',
    title: 'Concept A: Immersive Image-Led',
    subtitle: 'Full-width cinematic corporate visual with deep blue treatment',
    badge: 'Corporate & Cinematic',
    component: HeroConcept1
  },
  {
    id: 'concept-b' as ConceptId,
    code: 'B',
    title: 'Concept B: Premium Editorial',
    subtitle: 'Whitespace-driven Swiss typography with asymmetrical monolith',
    badge: 'Editorial & High-Contrast',
    component: HeroConcept2
  },
  {
    id: 'concept-c' as ConceptId,
    code: 'C',
    title: 'Concept C: Digital Engineering',
    subtitle: 'Technical CAD blueprint with interactive multi-tier topology',
    badge: 'Architecture & System Matrix',
    component: HeroConcept3
  }
];

export default function HeroConceptSwitcher({ initialConcept = 'concept-a' }: { initialConcept?: ConceptId }) {
  const [selectedConcept, setSelectedConcept] = useState<ConceptId>(initialConcept);

  const current = CONCEPTS.find(c => c.id === selectedConcept) || CONCEPTS[0];
  const ActiveComponent = current.component;

  return (
    <div className="relative w-full">
      
      {/* High-Visibility Interactive Review Control Panel */}
      <div className="w-full bg-[#030d17] text-white border-b-2 border-[#0a85b1] shadow-2xl relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Header info */}
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
                  HERO DESIGN REVIEW &bull; 3 WORKING PREVIEWS
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Switch between the 3 distinct hero concepts live on this homepage:
              </p>
            </div>

            {/* Concept Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {CONCEPTS.map((c) => {
                const isActive = selectedConcept === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedConcept(c.id)}
                    className={`px-3.5 py-2 rounded-xl text-left transition-all border flex items-center justify-between gap-2.5 ${
                      isActive
                        ? 'bg-[#0a85b1] border-[#38bdf8] text-white shadow-lg shadow-[#0a85b1]/40 scale-[1.02]'
                        : 'bg-slate-900/90 border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/40 font-bold">
                          {c.code}
                        </span>
                        <p className="text-xs font-bold leading-tight">{c.title.split(':')[1]?.trim() || c.title}</p>
                      </div>
                      <p className="text-[10px] opacity-75 truncate max-w-[170px] mt-0.5">{c.badge}</p>
                    </div>
                    {isActive ? (
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">View</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Link to view all 3 on dedicated page */}
            <div className="flex items-center flex-shrink-0">
              <Link
                href="/hero-concepts/"
                className="inline-flex items-center text-xs font-mono font-semibold text-sky-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 px-3 py-2 rounded-lg border border-slate-700 transition-colors"
              >
                <span>Compare All 3 Stacked</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Render Active Hero Concept */}
      <ActiveComponent />

    </div>
  );
}
