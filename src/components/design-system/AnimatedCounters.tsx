'use client';

import React, { useEffect, useRef, useState } from 'react';

// ============================================================================
// EDITABLE STATS CONFIGURATION
// (Replace these placeholder values with verified company figures when ready)
// ============================================================================
export interface StatItem {
  id: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
}

export const COMPANY_STATS: StatItem[] = [
  {
    id: 'projects',
    value: 10,
    prefix: '+',
    suffix: '',
    label: 'Projects Delivered',
    description: 'Enterprise systems & web applications',
  },
  {
    id: 'deployments',
    value: 100,
    prefix: '+',
    suffix: '',
    label: 'Production Releases',
    description: 'Zero-downtime milestone shipments',
  },
  {
    id: 'velocity',
    value: 500,
    prefix: '+',
    suffix: 'h',
    label: 'Sprint Velocity',
    description: 'Dedicated monthly engineering hours',
  },
  {
    id: 'sla',
    value: 99.8,
    decimals: 1,
    prefix: '',
    suffix: '%',
    label: 'Reliability SLA',
    description: 'Production uptime & system health',
  },
];

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function SingleCounter({
  value,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startVal = 0;
          const endVal = value;

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = startVal + (endVal - startVal) * easeOut;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endVal);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const formattedNumber = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();

  return (
    <span ref={elementRef} className="tabular-nums font-extrabold tracking-tight">
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

export default function AnimatedStatsStrip() {
  return (
    <div className="w-full mt-10 pt-8 border-t border-[var(--border)]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {COMPANY_STATS.map((stat) => (
          <div 
            key={stat.id}
            className="flex flex-col p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:border-[var(--accent)] transition-all duration-300 group"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl text-[var(--accent)] font-extrabold mb-1">
              <SingleCounter
                value={stat.value}
                decimals={stat.decimals}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <div className="text-sm font-semibold text-[var(--text-primary)]">
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">
                {stat.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
