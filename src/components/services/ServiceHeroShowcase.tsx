'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Server,
  Monitor,
  Smartphone,
  CheckCircle2,
  Database,
  Lock,
  Layers,
  Gauge,
} from 'lucide-react';

interface ServiceHeroShowcaseProps {
  slug: 'uiux-design' | 'custom-software' | 'it-consulting' | 'web3';
  spotlightImage: string;
}

export default function ServiceHeroShowcase({ slug, spotlightImage }: ServiceHeroShowcaseProps) {
  // UI/UX Interactive State (Wireframe <-> Hi-Fi Wipe + Theme Accent + Viewport)
  const [wipeCut, setWipeCut] = useState<number>(48);
  const [uiAccent, setUiAccent] = useState<'#0A85B1' | '#0D9488' | '#7C3AED'>('#0A85B1');
  const [uiView, setUiView] = useState<'desktop' | 'mobile'>('desktop');
  const wipeTouched = useRef(false);
  const frameRef = useRef<HTMLDivElement>(null);

  // Custom Software Interactive Node State
  const [csNode, setCsNode] = useState<number>(0);

  // IT Consulting Before / After Audit State
  const [auditOptimized, setAuditOptimized] = useState<boolean>(true);

  // Web3 Protocol Switcher State
  const [web3Mode, setWeb3Mode] = useState<number>(0);

  useEffect(() => {
    if (slug !== 'uiux-design') return;
    const el = frameRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    let timeoutId = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          let t0: number | null = null;
          const step = (t: number) => {
            if (wipeTouched.current) return;
            t0 = t0 ?? t;
            const p = Math.min(1, (t - t0) / 2200);
            setWipeCut(Math.round(50 + Math.sin(p * Math.PI * 2) * 28));
            if (p < 1) rafId = requestAnimationFrame(step);
          };
          timeoutId = window.setTimeout(() => {
            rafId = requestAnimationFrame(step);
          }, 500);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [slug]);

  // -------------------------------------------------------------------------
  // 1. UI/UX DESIGN: Live Token + Wireframe Wipe Canvas
  // -------------------------------------------------------------------------
  if (slug === 'uiux-design') {
    return (
      <div className="w-full max-w-[490px] mx-auto rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border)] shadow-2xl overflow-hidden">
        {/* Figma Toolbar Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[var(--surface)] border-b border-[var(--border)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-[var(--text-muted)]">
              design-tokens.fig
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Accent Swatches */}
            <div className="flex items-center gap-1 bg-[var(--surface-elevated)] px-2 py-1 rounded-full border border-[var(--border)]">
              {(['#0A85B1', '#0D9488', '#7C3AED'] as const).map((color) => (
                <button
                  key={color}
                  type="button"
                  aria-label={`Switch token color ${color}`}
                  onClick={() => setUiAccent(color)}
                  className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer ${
                    uiAccent === color ? 'scale-125 ring-2 ring-offset-1 ring-slate-400' : 'opacity-70'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Viewport Switch */}
            <div className="flex items-center gap-1 bg-[var(--surface-elevated)] p-0.5 rounded-lg border border-[var(--border)]">
              <button
                type="button"
                onClick={() => setUiView('desktop')}
                className={`p-1 rounded text-xs cursor-pointer transition-colors ${
                  uiView === 'desktop'
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                aria-label="Desktop artboard"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setUiView('mobile')}
                className={`p-1 rounded text-xs cursor-pointer transition-colors ${
                  uiView === 'mobile'
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                aria-label="Mobile artboard"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Wireframe <-> UI Artboard */}
        <div className="p-4 bg-[var(--canvas)] flex justify-center">
          <div
            ref={frameRef}
            className={`wd-frame transition-all duration-500 ${
              uiView === 'mobile' ? '!w-[230px] !aspect-[9/14] !rounded-2xl' : '!w-full !aspect-[16/10]'
            }`}
            style={{ '--cut': `${wipeCut}%` } as React.CSSProperties}
          >
            {/* Finished UI Layer */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between bg-slate-950 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold"
                    style={{ backgroundColor: uiAccent }}
                  >
                    T22
                  </span>
                  <span className="text-xs font-bold">Enterprise Workspace</span>
                </div>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold text-white"
                  style={{ backgroundColor: uiAccent }}
                >
                  WCAG AA
                </span>
              </div>

              <div
                className="p-3.5 rounded-xl border border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${uiAccent}33 0%, rgba(15,23,42,0.9) 100%)`,
                }}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-sky-300">
                  Design System v4.2
                </div>
                <div className="text-sm sm:text-base font-extrabold mt-0.5">
                  Tokenized Product Experience
                </div>
                <div className="mt-2.5 flex items-center gap-2">
                  <span
                    className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white"
                    style={{ backgroundColor: uiAccent }}
                  >
                    Primary CTA
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/10 text-slate-200">
                    44px Hit Area
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {['4x Lift', '0ms Shift', '100% Sync'].map((metric) => (
                  <div
                    key={metric}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center text-[10px] font-mono font-bold text-slate-200"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            {/* Wireframe Layer Clipped by --cut */}
            <div aria-hidden="true" className="wd-wire">
              <span className="w-nav">
                <i />
                <i />
                <i />
              </span>
              <span className="w-title" />
              <span className="w-line" />
              <span className="w-line s" />
              <span className="w-btn" />
              <span className="w-img" />
              <span className="w-cards">
                <i />
                <i />
                <i />
              </span>
            </div>

            {/* Draggable Range Handle */}
            <label className="wd-handle">
              <span className="sr-only">Drag to compare wireframe and final UI</span>
              <input
                type="range"
                min={0}
                max={100}
                value={wipeCut}
                onChange={(e) => {
                  wipeTouched.current = true;
                  setWipeCut(Number(e.target.value));
                }}
              />
              <span aria-hidden="true" className="wd-knob">
                ⇆
              </span>
            </label>

            <span aria-hidden="true" className="wd-tag l">
              Wireframe
            </span>
            <span aria-hidden="true" className="wd-tag r">
              Token UI
            </span>
          </div>
        </div>

        {/* Footer Strip */}
        <div className="px-4 py-3 bg-[var(--surface)] border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <span>Active Token: {uiAccent}</span>
          <span className="text-emerald-500 font-bold">Auto-Layout 5 · Synced</span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // 2. CUSTOM SOFTWARE: Interactive Distributed Architecture Console
  // -------------------------------------------------------------------------
  if (slug === 'custom-software') {
    const nodes = [
      {
        name: 'API Gateway',
        rps: '14,820 req/s',
        latency: '14ms p95',
        uptime: '99.99%',
        detail: 'Go + Envoy edge routing with zero-trust JWT verification and Redis rate limits.',
        icon: Server,
      },
      {
        name: 'Event Queue',
        rps: '62,400 msg/m',
        latency: '8ms ack',
        uptime: 'Zero Loss',
        detail: 'Kafka & BullMQ asynchronous workers orchestrating invoices, PDFs & ERP webhooks.',
        icon: Layers,
      },
      {
        name: 'SQL Cluster',
        rps: '4,100 txn/s',
        latency: '22ms p99',
        uptime: 'ACID Safe',
        detail: 'Primary PostgreSQL + TimescaleDB replicas with connection pooling & point-in-time PITR.',
        icon: Database,
      },
    ];
    const active = nodes[csNode];
    const Icon = active.icon;

    return (
      <div className="w-full max-w-[480px] mx-auto rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border)] p-5 sm:p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
            {/* distributed-core-topology */}distributed-core-topology
          </span>
        </div>

        {/* Clickable Cluster Layer Pills */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {nodes.map((n, idx) => (
            <button
              key={n.name}
              type="button"
              onClick={() => setCsNode(idx)}
              className={`px-2.5 py-2 rounded-xl text-[11px] font-mono font-bold transition-all cursor-pointer border ${
                csNode === idx
                  ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                  : 'bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text-primary)]'
              }`}
            >
              {n.name}
            </button>
          ))}
        </div>

        {/* Active Node Telemetry Card */}
        <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--text-primary)] font-display">
                  {active.name}
                </div>
                <div className="text-[11px] font-mono text-emerald-500 font-semibold">
                  ● Healthy · Multi-AZ Active
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] text-[11px] font-mono font-bold">
              {active.uptime}
            </span>
          </div>

          <p className="text-xs text-[var(--text-muted)] leading-relaxed">{active.detail}</p>

          <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-[var(--border)]">
            <div className="p-2.5 rounded-xl bg-[var(--canvas)] border border-[var(--border)]">
              <div className="text-[10px] font-mono text-[var(--text-muted)]">Throughput</div>
              <div className="text-sm font-extrabold font-mono text-[var(--text-primary)]">
                {active.rps}
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-[var(--canvas)] border border-[var(--border)]">
              <div className="text-[10px] font-mono text-[var(--text-muted)]">Response Time</div>
              <div className="text-sm font-extrabold font-mono text-emerald-500">
                {active.latency}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spec Strip */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border)]">
          <span>Strangler-Fig Ready</span>
          <span className="text-[var(--accent)] font-bold">Zero Downtime SLA</span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // 3. IT CONSULTING: Interactive Before/After Audit & Cloud FinOps Diagnostic
  // -------------------------------------------------------------------------
  if (slug === 'it-consulting') {
    const rows = auditOptimized
      ? [
          { label: 'Monthly Cloud Spend', value: '$10,120 / mo', delta: '-45% FinOps', ok: true },
          { label: 'Database p95 Query', value: '38 ms', delta: '-94% Latency', ok: true },
          { label: 'Critical Security CVEs', value: '0 Flagged', delta: 'OWASP Hardened', ok: true },
          { label: 'Deploy Lead Time', value: 'Daily CI/CD', delta: '4.2x Velocity', ok: true },
        ]
      : [
          { label: 'Monthly Cloud Spend', value: '$18,400 / mo', delta: 'Idle Compute', ok: false },
          { label: 'Database p95 Query', value: '640 ms', delta: 'N+1 Bottlenecks', ok: false },
          { label: 'Critical Security CVEs', value: '14 Exposed', delta: 'Unpatched Libs', ok: false },
          { label: 'Deploy Lead Time', value: 'Bi-Monthly', delta: 'Manual QA Gate', ok: false },
        ];

    return (
      <div className="w-full max-w-[480px] mx-auto rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border)] p-5 sm:p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
              14-Day Diagnostic Simulation
            </span>
          </div>

          {/* Before vs After Switcher */}
          <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[var(--canvas)] border border-[var(--border)]">
            <button
              type="button"
              onClick={() => setAuditOptimized(false)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${
                !auditOptimized
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Pre-Audit
            </button>
            <button
              type="button"
              onClick={() => setAuditOptimized(true)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${
                auditOptimized
                  ? 'bg-[var(--accent)] text-white shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Optimized
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {rows.map((r) => (
            <div
              key={r.label}
              className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between gap-3 transition-all duration-300"
            >
              <div>
                <div className="text-xs font-medium text-[var(--text-muted)]">{r.label}</div>
                <div className="text-sm sm:text-base font-extrabold font-mono text-[var(--text-primary)] mt-0.5">
                  {r.value}
                </div>
              </div>
              <span
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                  r.ok
                    ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/25'
                    : 'bg-amber-500/15 text-amber-500 border border-amber-500/25'
                }`}
              >
                {r.delta}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
          <span className="text-[var(--text-muted)]">Delivery Turnaround:</span>
          <span className="text-[var(--accent)] font-bold">10–14 Business Days</span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // 4. WEB3: Interactive Smart Contract & Node Telemetry Console
  // -------------------------------------------------------------------------
  const web3Modes = [
    {
      label: 'Foundry Audit',
      badge: 'Formally Tested',
      metrics: [
        { k: 'Invariant Fuzz Runs', v: '100,000' },
        { k: 'Reentrancy Vectors', v: '0 Found' },
        { k: 'Storage Gas Saved', v: '-34.2%' },
      ],
      note: 'Checks-Effects-Interactions, UUPS proxy safety, and automated Slither static CI gates verified.',
    },
    {
      label: 'ERC-4337 Auth',
      badge: 'Gasless UX',
      metrics: [
        { k: 'Onboarding Flow', v: 'Passkey / SSO' },
        { k: 'Paymaster Sponsor', v: 'Enabled' },
        { k: 'Signer Custody', v: 'Safe Multi-Sig' },
      ],
      note: 'Web2-grade social login & sponsored UserOps without forcing end users to manage seed phrases.',
    },
    {
      label: 'RPC Node Mesh',
      badge: '24/7 Ops SLA',
      metrics: [
        { k: 'Global RPC Latency', v: '48 ms' },
        { k: 'Failover Recovery', v: '< 200 ms' },
        { k: 'Subgraph Freshness', v: '100% Synced' },
      ],
      note: 'Multi-region EVM nodes & custom The Graph subgraphs backed by Prometheus & Grafana alerts.',
    },
  ];
  const currentWeb3 = web3Modes[web3Mode];

  return (
    <div className="w-full max-w-[480px] mx-auto rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border)] p-5 sm:p-6 shadow-2xl">
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-[var(--accent)]" />
          <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
            evm-security-telemetry
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/25">
          {currentWeb3.badge}
        </span>
      </div>

      {/* Mode Switcher */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {web3Modes.map((m, idx) => (
          <button
            key={m.label}
            type="button"
            onClick={() => setWeb3Mode(idx)}
            className={`px-2 py-2 rounded-xl text-[11px] font-mono font-bold transition-all cursor-pointer border ${
              web3Mode === idx
                ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-md'
                : 'bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text-primary)]'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-4">
        {currentWeb3.metrics.map((m) => (
          <div
            key={m.k}
            className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center"
          >
            <div className="text-[10px] font-mono text-[var(--text-muted)]">{m.k}</div>
            <div className="text-xs sm:text-sm font-extrabold font-mono text-[var(--text-primary)] mt-1">
              {m.v}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{currentWeb3.note}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
        <span className="text-[var(--text-muted)]">Admin Ownership:</span>
        <span className="text-emerald-500 font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>100% Client Safe Multi-Sig</span>
        </span>
      </div>
    </div>
  );
}
