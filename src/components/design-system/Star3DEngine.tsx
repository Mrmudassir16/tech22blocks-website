'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';

interface Star3DEngineProps {
  size?: number;
  interactive?: boolean;
  autoRotateSpeed?: number; // seconds per full turn
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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [ambientAngle, setAmbientAngle] = useState(0);

  // Smooth ambient rotation when idle
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      setAmbientAngle((elapsed * (360 / autoRotateSpeed)) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoRotateSpeed]);

  // Gyroscopic 3D mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Max tilt: 24 degrees
    const maxTilt = 22;
    const targetRotY = (x / (rect.width / 2)) * maxTilt;
    const targetRotX = -(y / (rect.height / 2)) * maxTilt;

    setRotateY(targetRotY);
    setRotateX(targetRotX);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const currentRotation = isHovered 
    ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`
    : `perspective(1000px) rotateX(10deg) rotateY(${Math.sin(ambientAngle * Math.PI / 180) * 14}deg) rotateZ(${ambientAngle * 0.15}deg)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        perspective: '1200px',
      }}
    >
      {/* 1. Ambient Volumetric Radial Halo */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-700"
        style={{
          background: isHovered 
            ? 'radial-gradient(circle at center, rgba(10,133,177,0.35) 0%, rgba(0,82,255,0.15) 50%, transparent 72%)'
            : 'radial-gradient(circle at center, rgba(10,133,177,0.22) 0%, rgba(2,132,199,0.08) 45%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'scale(1.2)',
        }}
      />

      {/* 2. Outer Orbital Coordinate Rings (Opposite Slow Counter-Rotations) */}
      <div 
        className="absolute inset-2 border border-sky-500/20 rounded-full pointer-events-none"
        style={{
          transform: `rotate(${ambientAngle * 0.4}deg)`,
          borderStyle: 'dashed',
        }}
      />
      <div 
        className="absolute inset-10 border border-sky-400/15 rounded-full pointer-events-none"
        style={{
          transform: `rotate(-${ambientAngle * 0.6}deg)`,
        }}
      />

      {/* 3. 3D Gyroscopic Stage */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: currentRotation,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer -1: Extruded Deep Shadow Star (translateZ -30px) */}
        <div 
          className="absolute w-3/4 h-3/4 pointer-events-none opacity-20 filter blur-md"
          style={{
            transform: 'translateZ(-35px) scale(0.96)',
          }}
        >
          <Image
            src={getAssetUrl('/images/tech22blocks-star-hd.png')}
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Layer 0: Concentric Hexagram Geometry Lines */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute w-full h-full pointer-events-none opacity-30 text-sky-400"
          style={{ transform: 'translateZ(-15px)' }}
        >
          {/* Hexagonal coordinate lines */}
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
          {/* Axis crosshairs */}
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 4" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 4" />
        </svg>

        {/* Layer 1: Primary Luminous Tech22Blocks Star (translateZ 0px) */}
        <div 
          className="relative w-3/4 h-3/4 transition-transform duration-300"
          style={{
            transform: 'translateZ(0px)',
            filter: 'drop-shadow(0 15px 35px rgba(0, 82, 255, 0.4)) drop-shadow(0 0 15px rgba(56, 189, 248, 0.3))',
          }}
        >
          <Image
            src={getAssetUrl('/images/tech22blocks-star-white-hd.png')}
            alt="Tech22Blocks 3D Architectural Star"
            fill
            priority
            className="object-contain"
          />

          {/* Refractive Cyan Glass Sheen */}
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(56,189,248,0.2) 50%, transparent 100%)',
              maskImage: 'url(/images/tech22blocks-star.svg)',
              WebkitMaskImage: 'url(/images/tech22blocks-star.svg)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </div>

        {/* Layer 2: Floating 3D Telemetry Nodes (translateZ 45px) */}
        {showCoordinates && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ transform: 'translateZ(45px)' }}
          >
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

      {/* Interactive Drag / Hover Indicator */}
      {interactive && (
        <div className="absolute -bottom-6 text-[10px] font-mono text-slate-400/80 tracking-widest uppercase flex items-center gap-1 pointer-events-none">
          <span className="w-1 h-1 rounded-full bg-sky-400" />
          <span>Interactive 3D Engine &bull; Hover to Orbit</span>
        </div>
      )}
    </div>
  );
}
