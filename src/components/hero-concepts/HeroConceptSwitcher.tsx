'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Eye, Layers, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroConcept1 from './HeroConcept1';
import HeroConcept2 from './HeroConcept2';
import HeroConcept3 from './HeroConcept3';

export type ConceptId = 'concept-1' | 'concept-2' | 'concept-3';

const CONCEPTS = [
  {
    id: 'concept-1' as ConceptId,
    num: '01',
    title: 'Concept 01: Immersive Full-Bleed',
    subtitle: 'Full-width cinematic blue canvas with glowing telemetry',
    tag: 'Image-Led & Cinematic'
  },
  {
    id: 'concept-2' as ConceptId,
    num: '02',
    title: 'Concept 02: Editorial Asymmetrical',
    subtitle: 'Whitespace-driven 7/5 grid with deep blue monolith',
    tag: 'Editorial Magazine'
  },
  {
    id: 'concept-3' as ConceptId,
    num: '03',
    title: 'Concept 03: Architectural Blueprint',
    subtitle: 'CAD coordinates grid with interactive 3-node matrix',
    tag: 'Developer Blueprint'
  }
];

export default function HeroConceptSwitcher({ initialConcept = 'concept-1' }: { initialConcept?: ConceptId }) {
  const [selectedConcept, setSelectedConcept] = useState<ConceptId>(initialConcept);

  return (
    <div className="relative w-full">
      
      {/* High-Visibility Interactive Review Control Panel */}
      <div className="w-full bg-[#030d17] text-white border-b-2 border-[#0a85b1] shadow-2xl relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Header info */}
            <div className="space-y-1">
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
                Click a concept button below to switch the hero design live on this homepage:
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
                          {c.num}
                        </span>
                        <p className="text-xs font-bold leading-tight">{c.title.split(':')[1]?.trim() || c.title}</p>
                      </div>
                      <p className="text-[10px] opacity-75 truncate max-w-[170px] mt-0.5">{c.tag}</p>
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
            <div className="flex items-center">
              <Link
                href="/hero-concepts/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-mono font-semibold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-xl border border-slate-600 transition-colors shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>View All 3 Stacked</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Render Active Working Concept */}
      <div className="relative transition-opacity duration-200">
        {selectedConcept === 'concept-1' && <HeroConcept1 />}
        {selectedConcept === 'concept-2' && <HeroConcept2 />}
        {selectedConcept === 'concept-3' && <HeroConcept3 />}
      </div>

    </div>
  );
}
