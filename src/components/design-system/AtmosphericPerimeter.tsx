'use client';

import React from 'react';

/**
 * High-tech cybernetic corner brackets (⌜ ⌝ ⌞ ⌟) for cards, dialogs, and section stages.
 */
export function CornerBrackets({
  className = '',
  size = 'w-3.5 h-3.5',
  color = 'border-sky-400/60',
  activeColor = 'group-hover:border-sky-300',
}: {
  className?: string;
  size?: string;
  color?: string;
  activeColor?: string;
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-10 ${className}`} aria-hidden="true">
      {/* Top Left */}
      <span className={`absolute top-0 left-0 ${size} border-t-2 border-l-2 ${color} ${activeColor} transition-colors duration-300`} />
      {/* Top Right */}
      <span className={`absolute top-0 right-0 ${size} border-t-2 border-r-2 ${color} ${activeColor} transition-colors duration-300`} />
      {/* Bottom Left */}
      <span className={`absolute bottom-0 left-0 ${size} border-b-2 border-l-2 ${color} ${activeColor} transition-colors duration-300`} />
      {/* Bottom Right */}
      <span className={`absolute bottom-0 right-0 ${size} border-b-2 border-r-2 ${color} ${activeColor} transition-colors duration-300`} />
    </div>
  );
}

/**
 * Animated moving border beam that continuously circulates around the perimeter of a card.
 * Driven 100% by GPU keyframe rotation (zero JS overhead).
 */
export function BorderBeam({
  className = '',
  duration = 7,
  colorFrom = '#38bdf8',
  colorTo = '#0ea5e9',
}: {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}) {
  return (
    <div 
      className={`absolute -inset-[1px] rounded-[inherit] pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-[-120%] animate-spin-beam pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 310deg, ${colorFrom} 340deg, ${colorTo} 360deg)`,
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  );
}

/**
 * Full-width horizontal section divider with a continuous moving laser beam
 * and cybernetic crosshair reticles (+) at the margins.
 */
export function SectionDividerBeam({
  className = '',
  speed = 'animate-laser-horizontal-sweep',
}: {
  className?: string;
  speed?: string;
}) {
  return (
    <div className={`relative w-full h-[1px] bg-white/[0.08] overflow-hidden ${className}`} aria-hidden="true">
      {/* Static hairline track */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      
      {/* Moving Laser Beam */}
      <div 
        className={`absolute top-0 bottom-0 w-64 sm:w-96 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent ${speed} pointer-events-none shadow-[0_0_12px_#38bdf8]`} 
      />

      {/* Cybernetic Crosshair Indicators at Edges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center justify-between">
        <span className="text-[10px] font-mono text-sky-400/40 select-none -translate-y-1/2 block">+</span>
        <span className="text-[10px] font-mono text-sky-400/40 select-none -translate-y-1/2 block">+</span>
      </div>
    </div>
  );
}

/**
 * Vertical ambient guide rails running down the screen sides with moving light packets.
 */
export function AmbientSideRails() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden xl:block select-none" aria-hidden="true">
      {/* Left Vertical Rail */}
      <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/[0.03] overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-b from-transparent via-sky-400/70 to-transparent animate-laser-vertical-sweep shadow-[0_0_8px_#38bdf8]" />
      </div>

      {/* Right Vertical Rail */}
      <div className="absolute right-4 top-0 bottom-0 w-[1px] bg-white/[0.03] overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-b from-transparent via-sky-400/70 to-transparent animate-laser-vertical-sweep-delay shadow-[0_0_8px_#38bdf8]" />
      </div>

      {/* Viewport Frame Corner Accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-sky-400/30" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-sky-400/30" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-sky-400/30" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-sky-400/30" />
    </div>
  );
}
