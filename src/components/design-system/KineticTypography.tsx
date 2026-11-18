'use client';

import React from 'react';

interface StaggeredTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  delayOffset?: number; // Base delay in ms
  staggerMs?: number;   // Delay per letter in ms
  isShimmer?: boolean;  // Whether these letters have the shimmer gradient
}

/**
 * Splits text into individual animated characters with CSS-driven stagger on load and wave hover.
 * Uses inline-flow architecture (inline + inline-block words) to guarantee 100% natural wrapping
 * and flawless alignment in both centered and left-aligned parents with ZERO flexbox skew.
 */
export function StaggeredText({
  text,
  className = '',
  letterClassName = '',
  delayOffset = 0,
  staggerMs = 30,
  isShimmer = false,
}: StaggeredTextProps) {
  let charCount = 0;
  const words = text.split(' ');

  return (
    <span className={`inline kinetic-letter-group ${className}`}>
      {words.map((word, wordIdx) => {
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIdx) => {
              const currentIdx = charCount++;
              const delay = delayOffset + currentIdx * staggerMs;
              const hoverDelay = currentIdx * 25;

              return (
                <span
                  key={charIdx}
                  className={`inline-block animate-letter-appear kinetic-letter cursor-default select-none ${
                    isShimmer ? 'animate-text-shimmer drop-shadow-[0_0_20px_rgba(56,189,248,0.7)] font-bold' : ''
                  } ${letterClassName}`}
                  style={{
                    animationDelay: `${delay}ms`,
                    ['--hover-delay' as string]: `${hoverDelay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
            {/* Natural inter-word spacing that wraps cleanly without flexbox glitches */}
            {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
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

