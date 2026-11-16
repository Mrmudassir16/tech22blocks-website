'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';

interface Star3DEngineProps {
  size?: number;
  interactive?: boolean;
  autoRotateSpeed?: number;
  showCoordinates?: boolean;
  className?: string;
}

export default function Star3DEngine({
  size = 460,
  interactive = true,
  autoRotateSpeed = 24,
  showCoordinates = true,
  className = '',
}: Star3DEngineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Automatically pause all animations when scrolled off-screen (0% CPU / 0% GPU during scroll)
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* 1. Ambient Volumetric Radial Halo (Pre-rendered GPU composite) */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none transform-gpu"
        style={{
          background: 'radial-gradient(circle at center, rgba(10,133,177,0.32) 0%, rgba(2,132,199,0.08) 45%, transparent 70%)',
          filter: 'blur(20px)',
          transform: 'scale(1.2) translateZ(0)',
        }}
      />

      {/* 2. Outer Orbital Coordinate Rings (Pure GPU CSS animations, Zero JS calculation) */}
      <div 
        className={`absolute inset-2 border border-sky-500/20 rounded-full pointer-events-none transform-gpu ${
          isVisible ? 'animate-[spin_40s_linear_infinite]' : ''
        }`}
        style={{
          borderStyle: 'dashed',
          transform: 'translateZ(0)',
        }}
      />
      <div 
        className={`absolute inset-10 border border-sky-400/15 rounded-full pointer-events-none transform-gpu ${
          isVisible ? 'animate-[spin_28s_linear_infinite_reverse]' : ''
        }`}
        style={{
          transform: 'translateZ(0)',
        }}
      />

      {/* 3. Automatic Floating Star Stage (Hardware-accelerated CSS float, Zero hover re-render) */}
      <div
        className={`relative w-full h-full flex items-center justify-center transform-gpu ${
          isVisible ? 'animate-star-float' : ''
        }`}
        style={{
          willChange: isVisible ? 'transform' : 'auto',
        }}
      >
        {/* Layer 0: Concentric Hexagram Geometry Lines */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute w-full h-full pointer-events-none opacity-30 text-sky-400"
        >
          <polygon 
            points="50,5 90,28 90,72 50,95 10,72 10,28" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="2 3"
          />
          <polygon 
            points="50,15 80,32 80,68 50,85 20,68 20,32" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.4"
          />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 4" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 4" />
        </svg>

        {/* Layer 1: High-Definition Luminous Star */}
        <div 
          className="relative w-3/4 h-3/4 transform-gpu"
          style={{
            filter: 'drop-shadow(0 12px 28px rgba(10, 133, 177, 0.4))',
          }}
        >
          <Image
            src={getAssetUrl('/images/tech22blocks-star-white-hd.png')}
            alt="Tech22Blocks Architectural Star"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Layer 2: Telemetry Nodes */}
        {showCoordinates && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Top-Right Capability Node */}
            <div className="absolute top-8 right-6 bg-slate-900/90 border border-sky-400/40 rounded-full px-2.5 py-1 text-[10px] font-mono text-sky-300 shadow-lg backdrop-blur-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>CORE.ENG // SHIP-READY</span>
            </div>

            {/* Bottom-Left Geometry Node */}
            <div className="absolute bottom-10 left-4 bg-slate-900/90 border border-sky-400/40 rounded-full px-2.5 py-1 text-[10px] font-mono text-slate-300 shadow-lg backdrop-blur-md flex items-center gap-1.5">
              <span className="text-[#0a85b1]">HEX.06</span>
              <span className="text-slate-400">&bull; 22 BLOCKS</span>
            </div>
          </div>
        )}
      </div>

      {/* Static Subtitle Badge */}
      <div className="absolute -bottom-6 text-[10px] font-mono text-slate-400/80 tracking-widest uppercase flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0a85b1]" />
        <span>Tech22Blocks Star Engine &bull; Autonomous Architecture</span>
      </div>
    </div>
  );
}
