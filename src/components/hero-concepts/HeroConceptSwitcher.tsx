'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Eye, Layers, Compass, ArrowRight } from 'lucide-react';
import HeroConcept1 from './HeroConcept1';
import HeroConcept2 from './HeroConcept2';
import HeroConcept3 from './HeroConcept3';

export type ConceptId = 'concept-1' | 'concept-2' | 'concept-3';

const CONCEPTS = [
  {
    id: 'concept-1' as ConceptId,
    name: 'Concept 01: Immersive Full-Bleed Cinematic',
    description: 'Full-width deep blue visual backdrop, glowing telemetry, cinematic typography, and docked metrics ribbon.',
    badge: 'Image-Led & Immersive'
  },
  {
    id: 'concept-2' as ConceptId,
    name: 'Concept 02: Editorial Asymmetrical Canvas',
    description: 'Whitespace-driven editorial layout, giant grotesque typography, and an asymmetrical deep blue engineering monolith.',
    badge: 'Editorial & Asymmetric'
  },
  {
    id: 'concept-3' as ConceptId,
    name: 'Concept 03: Architectural Blueprint Matrix',
    description: 'CAD technical blueprint theme, engineering authority, and an interactive 3-node system architecture matrix.',
    badge: 'Technical & Blueprint'
  }
];

export default function HeroConceptSwitcher({ initialConcept = 'concept-1' }: { initialConcept?: ConceptId }) {
  const [selectedConcept, setSelectedConcept] = useState<ConceptId>(initialConcept);

  return (
    <div className="relative">
      
      {/* Interactive Concept Control Switcher Bar */}
      <aside aria-label="Hero Design Review Controls" className="sticky top-16 z-40 bg-slate-950/95 text-white border-b border-sky-500/40 backdrop-blur-xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            
            {/* Title & Explainer */}
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
              </span>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <span>Hero Design Review</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    Live Working Previews
                  </span>
                </p>
                <p className="text-[11px] text-slate-400">
                  Select a concept below to preview it live in place with the rest of the homepage.
                </p>
              </div>
            </div>

            {/* Concept Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {CONCEPTS.map((c) => {
                const isActive = selectedConcept === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedConcept(c.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0a85b1] text-white font-bold shadow-md shadow-[#0a85b1]/40'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{c.name.split(':')[0]}</span>
                    <span className="hidden sm:inline text-[10px] opacity-80">({c.badge.split('&')[0].trim()})</span>
                  </button>
                );
              })}
            </div>

            {/* Direct Link to Dedicated Page */}
            <div className="flex items-center gap-2">
              <Link
                href="/hero-concepts"
                className="inline-flex items-center text-xs font-mono text-sky-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 mr-1 text-[#38bdf8]" />
                <span>View All 3 Stacked</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>

          </div>
        </div>
      </aside>

      {/* Render Active Working Concept */}
      <div className="relative transition-opacity duration-300">
        {selectedConcept === 'concept-1' && <HeroConcept1 />}
        {selectedConcept === 'concept-2' && <HeroConcept2 />}
        {selectedConcept === 'concept-3' && <HeroConcept3 />}
      </div>

    </div>
  );
}
