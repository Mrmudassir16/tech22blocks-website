'use client';

import React from 'react';

interface StaggeredTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  delayOffset?: number; // Base delay in ms
  staggerMs?: number;   // Delay per letter in ms
}

/**
 * Splits text into individual animated characters with CSS-driven stagger on load and wave hover.
 */
export function StaggeredText({
  text,
  className = '',
  letterClassName = '',
  delayOffset = 0,
  staggerMs = 35,
}: StaggeredTextProps) {
  let charCount = 0;
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-[0.28em] kinetic-letter-group ${className}`}>
      {words.map((word, wordIdx) => {
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIdx) => {
              const currentIdx = charCount++;
              const delay = delayOffset + currentIdx * staggerMs;
              const hoverDelay = currentIdx * 20;

              return (
                <span
                  key={charIdx}
                  className={`inline-block animate-letter-appear kinetic-letter transition-transform ${letterClassName}`}
                  style={{
                    animationDelay: `${delay}ms`,
                    // Custom CSS property for hover wave bounce
                    ['--hover-delay' as string]: `${hoverDelay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

interface KineticShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

export function KineticShimmerText({ children, className = '' }: KineticShimmerTextProps) {
  return (
    <span className={`relative inline-block animate-text-shimmer drop-shadow-[0_0_28px_rgba(56,189,248,0.55)] ${className}`}>
      {children}
    </span>
  );
}
