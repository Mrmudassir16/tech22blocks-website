'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';

interface SectionTransitionShapeProps {
  position?: 'top' | 'bottom';
  variant?: 'stepped-left' | 'stepped-right' | 'dual-angled' | 'left-angle' | 'right-angle' | 'straight';
  fillColor?: string;
  className?: string;
  hasBorder?: boolean;
}

/**
 * Creates clean architectural section transitions (stepped shelf & side angled bends).
 * Positions directly at top-0 or bottom-0 inside the section so overflow-hidden never clips it.
 * Accurately renders the architectural shape bends praised by the user.
 */
export function SectionTransitionShape({
  position = 'top',
  variant = 'stepped-left',
  fillColor = 'var(--canvas)',
  className = '',
  hasBorder = false,
}: SectionTransitionShapeProps) {
  if (variant === 'straight') return null;

  const isTop = position === 'top';

  return (
    <div 
      className={`absolute inset-x-0 ${isTop ? 'top-0' : 'bottom-0'} w-full overflow-hidden leading-none pointer-events-none select-none z-20 ${
        !isTop ? 'transform scale-y-[-1]' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 1440 44" 
        preserveAspectRatio="none" 
        className="w-full h-[32px] sm:h-[44px] block"
      >
        {/* Stepped Shelf Left: Elevated tab on left, lower shelf on right (No edge-to-edge straight lines) */}
        {variant === 'stepped-left' && (
          <>
            <path 
              d="M 420 0 L 1440 0 L 1440 44 L 460 44 Z" 
              fill={fillColor} 
            />
            {hasBorder && (
              <path 
                d="M 416 0.5 L 464 43.5" 
                stroke="var(--border)" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none" 
              />
            )}
          </>
        )}

        {/* Stepped Shelf Right: Elevated tab on right, lower shelf on left (No edge-to-edge straight lines) */}
        {variant === 'stepped-right' && (
          <>
            <path 
              d="M 0 0 L 1020 0 L 980 44 L 0 44 Z" 
              fill={fillColor} 
            />
            {hasBorder && (
              <path 
                d="M 976 43.5 L 1024 0.5" 
                stroke="var(--border)" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none" 
              />
            )}
          </>
        )}

        {/* Dual Angled Bends: Chamfered angled bends on BOTH sides (Only the corner angles, no straight line across) */}
        {variant === 'dual-angled' && (
          <>
            <path 
              d="M 0 0 L 50 44 L 0 44 Z" 
              fill={fillColor} 
            />
            <path 
              d="M 1440 0 L 1440 44 L 1390 44 Z" 
              fill={fillColor} 
            />
            {hasBorder && (
              <>
                <path 
                  d="M 0 0.5 L 50 43.5" 
                  stroke="var(--border)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  fill="none" 
                />
                <path 
                  d="M 1390 43.5 L 1440 0.5" 
                  stroke="var(--border)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  fill="none" 
                />
              </>
            )}
          </>
        )}

        {/* Left Angle Bend: Chamfered angled bend on left side only */}
        {variant === 'left-angle' && (
          <>
            <path 
              d="M 0 0 L 50 44 L 0 44 Z" 
              fill={fillColor} 
            />
            {hasBorder && (
              <path 
                d="M 0 0.5 L 50 43.5" 
                stroke="var(--border)" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none" 
              />
            )}
          </>
        )}

        {/* Right Angle Bend: Chamfered angled bend on right side only */}
        {variant === 'right-angle' && (
          <>
            <path 
              d="M 1440 0 L 1440 44 L 1390 44 Z" 
              fill={fillColor} 
            />
            {hasBorder && (
              <path 
                d="M 1390 43.5 L 1440 0.5" 
                stroke="var(--border)" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none" 
              />
            )}
          </>
        )}
      </svg>
    </div>
  );
}

interface SectionBackgroundProps {
  type: 'wave' | 'prism' | 'torus' | 'helix' | 'angle-corner' | 'none';
  position?: 'bottom' | 'top-right' | 'top-left' | 'center' | 'bottom-right' | 'bottom-left';
  opacity?: string;
  className?: string;
}

/**
 * Natural background decorative motifs for sections.
 * Integrates abstract 3D assets (torus, fluid helix, wave, prism) as full atmospheric backdrops.
 */
export function SectionBackground({
  type,
  position = 'center',
  opacity = 'opacity-70 dark:opacity-35',
  className = '',
}: SectionBackgroundProps) {
  if (type === 'none') return null;

  if (type === 'wave') {
    return (
      <div 
        className={`absolute inset-x-0 bottom-0 w-full overflow-hidden pointer-events-none select-none z-0 ${opacity} ${className}`} 
        aria-hidden="true"
      >
        <Image 
          src={getAssetUrl('/images/shape_image_1-scaled.webp')} 
          alt="" 
          width={2560} 
          height={163} 
          className="w-full h-auto object-cover object-bottom" 
        />
      </div>
    );
  }

  if (type === 'prism') {
    return (
      <div 
        className={`absolute top-1/2 -right-12 sm:-right-8 -translate-y-1/2 w-64 sm:w-80 h-[480px] pointer-events-none select-none z-0 opacity-80 dark:opacity-25 hidden lg:block ${className}`}
        aria-hidden="true"
      >
        <Image
          src={getAssetUrl('/images/shape_angle_4-747x1024.webp')}
          alt=""
          width={747}
          height={1024}
          className="w-full h-full object-contain filter drop-shadow-[0_16px_36px_rgba(10,133,177,0.45)]"
        />
      </div>
    );
  }

  if (type === 'torus') {
    const isCenter = position === 'center';
    const isTopRight = position === 'top-right';

    return (
      <div 
        className={`pointer-events-none select-none z-0 ${opacity} ${
          isCenter 
            ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[580px] lg:w-[680px] h-[440px] sm:h-[580px] lg:h-[680px]' 
            : isTopRight 
            ? 'absolute -top-10 -right-12 sm:-right-6 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px]' 
            : 'absolute bottom-4 -left-12 sm:-left-6 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px]'
        } ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-sky-400/25 dark:bg-sky-500/10 rounded-full blur-3xl animate-pulse-aura" />
        <Image
          src={getAssetUrl('/images/abstract_glass_torus.png')}
          alt=""
          fill
          className="w-full h-full object-contain filter drop-shadow-[0_18px_44px_rgba(10,133,177,0.45)] dark:drop-shadow-[0_16px_40px_rgba(10,133,177,0.35)] animate-float-slow"
        />
      </div>
    );
  }

  if (type === 'helix') {
    const isCenter = position === 'center';
    const isBottomLeft = position === 'bottom-left';

    return (
      <div 
        className={`pointer-events-none select-none z-0 ${opacity} ${
          isCenter 
            ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[580px] lg:w-[680px] h-[440px] sm:h-[580px] lg:h-[680px]' 
            : isBottomLeft 
            ? 'absolute -bottom-12 -left-12 sm:-left-6 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px]' 
            : 'absolute -top-10 -right-12 sm:-right-6 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px]'
        } ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-sky-400/25 dark:bg-sky-500/10 rounded-full blur-3xl animate-pulse-aura" />
        <Image
          src={getAssetUrl('/images/abstract_fluid_helix.png')}
          alt=""
          fill
          className="w-full h-full object-contain filter drop-shadow-[0_18px_44px_rgba(10,133,177,0.45)] dark:drop-shadow-[0_16px_40px_rgba(10,133,177,0.35)] animate-float-slow-reverse"
        />
      </div>
    );
  }

  if (type === 'angle-corner') {
    const isLeft = position.includes('left');
    const isTop = position.includes('top');
    const src = isLeft ? '/images/shape_angle_1.webp' : '/images/shape_angle_2.webp';

    return (
      <div 
        className={`absolute ${isTop ? 'top-0' : 'bottom-0'} ${isLeft ? '-left-12' : '-right-12'} w-64 h-80 pointer-events-none select-none z-0 opacity-70 dark:opacity-25 hidden xl:block ${className}`}
        aria-hidden="true"
      >
        <Image
          src={getAssetUrl(src)}
          alt=""
          width={280}
          height={360}
          className="w-full h-full object-contain filter drop-shadow-[0_12px_32px_rgba(10,133,177,0.35)]"
        />
      </div>
    );
  }

  return null;
}
