'use client';

import React, { useRef, useState } from 'react';
import { HotspotNode } from '@/data/serviceInteractiveConfig';

interface ServiceBlueprintDiagramProps {
  slug: 'uiux-design' | 'custom-software' | 'it-consulting' | 'web3';
  hotspots: HotspotNode[];
}

export default function ServiceBlueprintDiagram({
  slug,
  hotspots,
}: ServiceBlueprintDiagramProps) {
  const [activeHotspot, setActiveHotspot] = useState<number>(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stageRef.current || !svgRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = stageRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    svgRef.current.style.transform = `rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`;
    svgRef.current.querySelectorAll<SVGGElement>('.art-layer').forEach((layer) => {
      const depth = Number(layer.dataset.depth) || 0;
      layer.style.transform = `translate(${dx * depth * 520}px, ${dy * depth * 520}px)`;
    });
  };

  const handlePointerLeave = () => {
    if (!svgRef.current) return;
    svgRef.current.style.transform = '';
    svgRef.current.querySelectorAll<SVGGElement>('.art-layer').forEach((layer) => {
      layer.style.transform = '';
    });
  };

  const badgeConfig = {
    'uiux-design': {
      score: '99',
      topLabel: 'WCAG AA',
      bottomLabel: 'Design QA',
      mainHeader: 'Design Tokens & Layout System',
      subHeader: 'Atomic Components',
      rightTopTitle: 'Mobile Kit',
      pillColors: ['#0A85B1', '#38BDF8', '#0D9488'],
    },
    'custom-software': {
      score: '99.9',
      topLabel: 'Uptime SLA',
      bottomLabel: 'Cluster OK',
      mainHeader: 'Distributed Microservices Mesh',
      subHeader: 'Go + PostgreSQL',
      rightTopTitle: 'Event Bus',
      pillColors: ['#2563EB', '#0A85B1', '#10B981'],
    },
    'it-consulting': {
      score: '98',
      topLabel: 'Audit Score',
      bottomLabel: '-45% Cloud',
      mainHeader: 'FinOps & Codebase Diagnostics',
      subHeader: '14-Day Blueprint',
      rightTopTitle: 'Sec Gate',
      pillColors: ['#0284C7', '#10B981', '#F59E0B'],
    },
    web3: {
      score: '100',
      topLabel: 'Fuzz Pass',
      bottomLabel: 'Zero CVEs',
      mainHeader: 'Foundry Verified Smart Protocol',
      subHeader: 'ERC-4337 + Safe',
      rightTopTitle: 'RPC Mesh',
      pillColors: ['#0A85B1', '#7C3AED', '#38BDF8'],
    },
  }[slug];

  return (
    <div className="sv-hs">
      {/* Left Interactive 3D-Tilt SVG Schematic Stage */}
      <div
        ref={stageRef}
        className="sv-hs-stage"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <svg
          ref={svgRef}
          aria-label={badgeConfig.mainHeader}
          role="img"
          viewBox="0 0 520 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`bpBg_${slug}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#e8f4ff" />
              <stop offset="1" stopColor="#d7ecff" />
            </linearGradient>
            <linearGradient id={`bpHero_${slug}`} x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#0A85B1" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Back Halo Circle */}
          <g className="art-layer" data-depth="0.01">
            <circle cx="260" cy="210" fill={`url(#bpBg_${slug})`} r="195" />
          </g>

          {/* Primary Canvas Card */}
          <g className="art-layer" data-depth="0.03">
            <rect fill="#fff" height="250" rx="16" stroke="#d6e6f5" width="350" x="56" y="70" />
            <rect fill="#eef3f8" height="30" rx="16" width="350" x="56" y="70" />
            <rect fill="#eef3f8" height="14" width="350" x="56" y="86" />
            <circle cx="76" cy="85" fill="#f87171" r="5" />
            <circle cx="92" cy="85" fill="#fbbf24" r="5" />
            <circle cx="108" cy="85" fill="#34d399" r="5" />
            <rect fill="#fff" height="12" rx="6" width="180" x="128" y="79" />

            {/* Top Hero / Header Block inside Schematic */}
            <rect fill={`url(#bpHero_${slug})`} height="86" rx="10" width="314" x="74" y="114" />
            <text x="92" y="142" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="sans-serif">
              {badgeConfig.mainHeader}
            </text>
            <text x="92" y="162" fill="#e0f2fe" fontSize="10" fontFamily="monospace">
              {badgeConfig.subHeader}
            </text>
            <rect className="art-pulse" fill="#fbbf24" height="16" rx="8" width="68" x="92" y="172" />
            <circle cx="342" cy="157" fill="#fff" opacity=".2" r="24" />

            {/* 3 Architectural Module Cards */}
            <g fill="#eef3f8">
              <rect height="88" rx="10" width="96" x="74" y="212" />
              <rect height="88" rx="10" width="96" x="183" y="212" />
              <rect height="88" rx="10" width="96" x="292" y="212" />
            </g>
            <g fill="#cfe2f3">
              <rect height="40" rx="6" width="72" x="86" y="224" />
              <rect height="40" rx="6" width="72" x="195" y="224" />
              <rect height="40" rx="6" width="72" x="304" y="224" />
            </g>
            <g fill="#9fb2c4">
              <rect height="7" rx="3" width="60" x="86" y="274" />
              <rect height="7" rx="3" width="60" x="195" y="274" />
              <rect height="7" rx="3" width="60" x="304" y="274" />
            </g>
          </g>

          {/* Floating Companion Module Card (Right Side) */}
          <g className="art-layer art-float" data-depth="0.08">
            <rect fill="#0f172a" height="180" rx="18" width="98" x="382" y="170" />
            <rect fill="#fff" height="156" rx="12" width="82" x="390" y="182" />
            <rect fill={`url(#bpHero_${slug})`} height="40" rx="6" width="66" x="398" y="192" />
            <text x="431" y="216" fill="#fff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="monospace">
              {badgeConfig.rightTopTitle}
            </text>
            <g fill="#cfe2f3">
              <rect height="26" rx="5" width="66" x="398" y="240" />
              <rect height="26" rx="5" width="66" x="398" y="272" />
            </g>
            <g fill="#9fb2c4">
              <rect height="6" rx="3" width="44" x="398" y="306" />
              <rect height="6" rx="3" width="32" x="398" y="318" />
            </g>
          </g>

          {/* Animated Score Gauge Pill (Bottom Left) */}
          <g className="art-layer art-float delay" data-depth="0.09">
            <rect fill="#fff" height="58" rx="14" stroke="#cfe0f0" width="136" x="28" y="298" />
            <circle cx="60" cy="327" fill="none" r="18" stroke="#e5e7eb" strokeWidth="5" />
            <circle
              className="art-draw"
              cx="60"
              cy="327"
              fill="none"
              r="18"
              stroke="#16a34a"
              strokeDasharray="108 113"
              strokeWidth="5"
              transform="rotate(-90 60 327)"
            />
            <text
              fill="#16a34a"
              fontFamily="Arial"
              fontSize="10"
              fontWeight="700"
              textAnchor="middle"
              x="60"
              y="331"
            >
              {badgeConfig.score}
            </text>
            <text fill="#5c6b7a" fontFamily="Arial" fontSize="10" x="86" y="323">
              {badgeConfig.topLabel}
            </text>
            <text fill="#0f172a" fontFamily="Arial" fontSize="11" fontWeight="700" x="86" y="338">
              {badgeConfig.bottomLabel}
            </text>
          </g>

          {/* Floating Palette / Token Pill (Top Right) */}
          <g className="art-layer art-float" data-depth="0.07">
            <rect fill="#fff" height="40" rx="20" stroke="#cfe0f0" width="92" x="410" y="60" />
            <circle cx="430" cy="80" fill={badgeConfig.pillColors[0]} r="8" />
            <circle cx="452" cy="80" fill={badgeConfig.pillColors[1]} r="8" />
            <circle cx="474" cy="80" fill={badgeConfig.pillColors[2]} r="8" />
          </g>
        </svg>

        {/* 5 Pulsing Interactive Numbered Hotspots */}
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            type="button"
            aria-label={spot.title}
            aria-pressed={activeHotspot === spot.id}
            className="sv-hs-dot"
            style={{ left: spot.left, top: spot.top }}
            onClick={() => setActiveHotspot(spot.id)}
            onMouseEnter={() => setActiveHotspot(spot.id)}
          >
            {spot.id + 1}
          </button>
        ))}
      </div>

      {/* Right Interactive Hotspot Accordion List */}
      <ol className="sv-hs-list">
        {hotspots.map((spot) => {
          const isActive = activeHotspot === spot.id;
          return (
            <li key={spot.id} className={isActive ? 'is-active' : ''}>
              <button type="button" onClick={() => setActiveHotspot(spot.id)}>
                <span>{spot.id + 1}</span>
                {spot.title}
              </button>
              <p>{spot.desc}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
