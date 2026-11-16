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
  const stageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Pause everything when hero is off-screen to preserve 100% CPU/GPU performance
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

  // Gyroscopic 3D mouse tracking directly on DOM ref (Zero React re-renders)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current || !stageRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Max tilt: 20 degrees
    const maxTilt = 20;
    const targetRotY = (x / (rect.width / 2)) * maxTilt;
    const targetRotX = -(y / (rect.height / 2)) * maxTilt;

    stageRef.current.style.transform = `perspective(1000px) rotateX(${targetRotX.toFixed(2)}deg) rotateY(${targetRotY.toFixed(2)}deg) rotateZ(0deg)`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (stageRef.current) {
      stageRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (stageRef.current) {
      stageRef.current.style.transform = '';
      stageRef.current.style.animationPlayState = 'running';
    }
  };

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
        willChange: isVisible ? 'transform' : 'auto',
      }}
    >
      {/* 1. Ambient Volumetric Radial Halo */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-700"
        style={{
          background: isHovered 
            ? 'radial-gradient(circle at center, rgba(10,133,177,0.35) 0%, rgba(2,132,199,0.12) 50%, transparent 72%)'
            : 'radial-gradient(circle at center, rgba(10,133,177,0.22) 0%, rgba(2,132,199,0.06) 45%, transparent 70%)',
          filter: 'blur(24px)',
          transform: 'translateZ(0) scale(1.15)',
        }}
      />

      {/* 2. Outer Orbital Coordinate Rings (Pure GPU CSS animations, Zero JS CPU usage) */}
      <div 
        className={`absolute inset-2 border border-sky-500/20 rounded-full pointer-events-none ${
          isVisible ? 'animate-[spin_36s_linear_infinite]' : ''
        }`}
        style={{
          borderStyle: 'dashed',
          transform: 'translateZ(0)',
        }}
      />
      <div 
        className={`absolute inset-10 border border-sky-400/15 rounded-full pointer-events-none ${
          isVisible ? 'animate-[spin_24s_linear_infinite_reverse]' : ''
        }`}
        style={{
          transform: 'translateZ(0)',
        }}
      />

      {/* 3. 3D Gyroscopic Stage with CSS Keyframe Ambient Orbit */}
      <div
        ref={stageRef}
        className={`relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out ${
          !isHovered && isVisible ? 'animate-ambient-orbit' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? undefined : 'perspective(1000px) rotateX(10deg) rotateY(-8deg)',
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

        {/* Layer 1: Primary Luminous Tech22Blocks Star (translateZ 0px) */}
        <div 
          className="relative w-3/4 h-3/4"
          style={{
            transform: 'translateZ(0px)',
            filter: 'drop-shadow(0 15px 35px rgba(10, 133, 177, 0.45)) drop-shadow(0 0 15px rgba(56, 189, 248, 0.35))',
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
