import React from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/assets';

interface StarEmblemProps {
  size?: number | string;
  variant?: 'blue' | 'white' | 'glow';
  className?: string;
  opacity?: number; // 0 to 1
  rotate?: number;  // degrees
}

export default function StarEmblem({
  size = 48,
  variant = 'blue',
  className = '',
  opacity = 1,
  rotate = 0,
}: StarEmblemProps) {
  const isWhite = variant === 'white';
  const src = isWhite
    ? getAssetUrl('/images/tech22blocks-star-white-hd.png')
    : getAssetUrl('/images/tech22blocks-star-hd.png');

  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={{
        width: dimension,
        height: dimension,
        opacity: opacity,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={typeof size === 'number' ? `${size}px` : '300px'}
        className="object-contain"
        priority={typeof size === 'number' && size > 300}
      />
    </div>
  );
}

/**
 * Reusable decorative background watermark that extends gracefully beyond borders
 */
export function StarWatermark({
  size = 450,
  position = 'top-right',
  variant = 'blue',
  opacity = 0.04,
  rotate = 15,
  className = '',
}: {
  size?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  variant?: 'blue' | 'white';
  opacity?: number;
  rotate?: number;
  className?: string;
}) {
  const positionClasses = {
    'top-right': 'absolute -top-24 -right-24 md:-top-32 md:-right-32',
    'top-left': 'absolute -top-24 -left-24 md:-top-32 md:-left-32',
    'bottom-right': 'absolute -bottom-24 -right-24 md:-bottom-32 md:-right-32',
    'bottom-left': 'absolute -bottom-24 -left-24 md:-bottom-32 md:-left-32',
    'center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }[position];

  return (
    <div className={`overflow-hidden pointer-events-none absolute inset-0 z-0 ${className}`} aria-hidden="true">
      <div className={positionClasses}>
        <StarEmblem
          size={size}
          variant={variant}
          opacity={opacity}
          rotate={rotate}
        />
      </div>
    </div>
  );
}
