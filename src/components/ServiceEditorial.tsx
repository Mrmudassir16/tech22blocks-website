import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Code2, 
  Globe, 
  Smartphone, 
  Layout, 
  Cpu, 
  Sparkles, 
  Cloud, 
  ShieldCheck, 
  Compass, 
  Layers, 
  CheckCircle2, 
  Network,
  Lock,
  GitBranch,
  Workflow
} from 'lucide-react';
import { COMPANY, ServiceItem } from '@/data/company';

export default function ServiceEditorial() {
  const { services } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="services-detail-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
            <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
            <span>Comprehensive Service Architecture</span>
          </div>
          <h2 id="services-detail-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            End-to-End Technology Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From website development and native mobile applications to bespoke custom software, UI/UX design, strategic IT consulting, and emerging Web3 technologies &mdash; we engineer practical solutions that solve real business bottlenecks.
          </p>
        </div>

        {/* Alternating Service Showcase */}
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                
                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:col-start-7' : ''}`}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs font-bold text-[#0a85b1] bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                        Capability {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                        {service.category}
                      </span>
                      {service.badge && (
                        <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-slate-600 leading-relaxed">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Concrete Value Delivered */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Business Problem Addressed &amp; Value:
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {service.outcome}
                    </p>
                  </div>

                  {/* Core Deliverables List */}
                  <div className="space-y-2.5 pt-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Key Deliverables &amp; Artifacts
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0a85b1] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stacks */}
                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Relevant Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3">
                    <Link
                      href="/contact/"
                      className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
                    >
                      <span>Discuss Your {service.title} Project</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Creative Visual Composition (Replaces terminal outputs and fake metrics) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <ServiceCreativeIllustration serviceId={service.id} title={service.title} />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Bespoke, service-specific creative visual compositions
function ServiceCreativeIllustration({ serviceId, title }: { serviceId: string; title: string }) {
  switch (serviceId) {
    case 'custom-software':
    case 'software-development':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Code2 className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Bespoke Core Architecture</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
              Modular Subsystems
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-[#0a85b1] uppercase">Layer 01 &bull; Ingestion</span>
              <p className="font-semibold text-slate-900">API Gateway &amp; Auth</p>
              <p className="text-[11px] text-slate-500">Structured token authentication, tenant isolation, and rate-limiting.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-[#0a85b1] uppercase">Layer 02 &bull; Compute</span>
              <p className="font-semibold text-slate-900">Distributed Business Logic</p>
              <p className="text-[11px] text-slate-500">Decoupled microservices, event-driven message queues, worker threads.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-sky-400">
              <span>DATABASE ARCHITECTURE</span>
              <span className="text-emerald-400 font-bold">RELATIONAL INTEGRITY</span>
            </div>
            <p className="text-xs text-slate-300">
              Robust relational schemas with transactional consistency, continuous audit logging, and automated snapshot backups.
            </p>
          </div>
        </div>
      );

    case 'website-development':
    case 'web-development':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Modern Web Experience</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Edge-Optimized
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">Hybrid Rendering Topology</span>
              <span className="text-[11px] font-mono text-slate-500">SSR + Static ISR</span>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span>Critical Path Hydration</span>
                <span className="font-mono text-slate-800 font-semibold">Optimized Core Web Vitals</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span>Edge CDN Distribution</span>
                <span className="font-mono text-slate-800 font-semibold">Fast Global Delivery</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span>Enterprise Semantic Hierarchy</span>
                <span className="font-mono text-slate-800 font-semibold">Complete Schema.org Coverage</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-sky-50 rounded-lg border border-sky-100 text-xs text-sky-900 text-center font-medium">
            Architected for discovery, accessibility (WCAG 2.1 AA), and fluid user transitions.
          </div>
        </div>
      );

    case 'mobile-applications':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Unified Mobile Engine</span>
            </div>
            <span className="text-[10px] font-mono text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              iOS &bull; Android
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Apple Platform</span>
              <p className="font-bold text-slate-900">iOS Native Bridge</p>
              <p className="text-[11px] text-slate-600 leading-snug">Apple Keychain security, Haptic feedback, APNs push channels.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Google Platform</span>
              <p className="font-bold text-slate-900">Android Runtime</p>
              <p className="text-[11px] text-slate-600 leading-snug">Material Design 3, background sync jobs, biometric authentication.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-sky-400">
              <span>LOCAL-FIRST PERSISTENCE</span>
              <span className="text-emerald-400">OFFLINE READY</span>
            </div>
            <p className="text-xs text-slate-300">
              Encrypted local SQLite database automatically reconciles with backend servers whenever device connectivity is restored.
            </p>
          </div>
        </div>
      );

    case 'uiux-design':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Layout className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Design System Architecture</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
              Tokens &bull; Components
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-slate-900 block">System Foundations</span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100">
                <span className="block font-bold text-[#0a85b1]">Typography</span>
                <span className="text-[10px] text-slate-500">Fluid Scales</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="block font-bold text-slate-800">Color Matrix</span>
                <span className="text-[10px] text-slate-500">WCAG 2.1 AA</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="block font-bold text-slate-800">Spacing 8pt</span>
                <span className="text-[10px] text-slate-500">Harmonic Grid</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700">
            <span className="font-semibold text-slate-900 block">Empathetic UX Research:</span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Every workflow undergoes wireframing, clickable prototype verification, and user friction testing to eliminate unnecessary steps.
            </p>
          </div>
        </div>
      );

    case 'ai-machine-learning':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Predictive Machine Intelligence</span>
            </div>
            <span className="text-[10px] font-mono text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              MLOps Pipeline
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Data Transformation Pipeline</span>
              <span className="font-mono text-slate-500 text-[10px]">Continuous Training</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="p-2 bg-slate-50 rounded flex justify-between items-center">
                <span>1. Feature Extraction &amp; Cleaning</span>
                <span className="text-[10px] font-mono text-[#0a85b1]">Automated</span>
              </div>
              <div className="p-2 bg-slate-50 rounded flex justify-between items-center">
                <span>2. Model Training &amp; Validation</span>
                <span className="text-[10px] font-mono text-[#0a85b1]">Cross-Validated</span>
              </div>
              <div className="p-2 bg-slate-50 rounded flex justify-between items-center">
                <span>3. Real-Time Inference Gateway</span>
                <span className="text-[10px] font-mono text-[#0a85b1]">Low Latency</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-sky-50 rounded-lg border border-sky-100 text-xs text-sky-900 text-center font-medium">
            Trained on your proprietary domain data with strict intellectual property isolation.
          </div>
        </div>
      );

    case 'generative-ai':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Agentic Automation &amp; RAG</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              VoiSage Heritage
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-sky-400">
              <span>MULTI-AGENT ORCHESTRATION</span>
              <span>RAG ACCURATE</span>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2.5 rounded bg-slate-800/80 flex items-center justify-between">
                <span>Vector Semantic Search</span>
                <span className="text-sky-300 font-mono text-[11px]">Domain Context</span>
              </div>
              <div className="p-2.5 rounded bg-slate-800/80 flex items-center justify-between">
                <span>Conversational Reasoning Engine</span>
                <span className="text-sky-300 font-mono text-[11px]">Zero Hallucination Gate</span>
              </div>
              <div className="p-2.5 rounded bg-slate-800/80 flex items-center justify-between">
                <span>Action &amp; Webhook Dispatch</span>
                <span className="text-emerald-400 font-mono text-[11px]">Automated</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 text-center">
            Incorporates our proven sub-600ms latency pipelines engineered for VoiSage AI.
          </div>
        </div>
      );

    case 'cloud-devops':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Cloud Infrastructure &amp; DevOps</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
              IaC Terraform
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#0a85b1] uppercase">Orchestration</span>
              <p className="font-bold text-slate-900">Kubernetes &bull; Docker</p>
              <p className="text-[11px] text-slate-500">Automated pod scaling, self-healing containers, rolling deployments.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#0a85b1] uppercase">Delivery</span>
              <p className="font-bold text-slate-900">Automated CI/CD</p>
              <p className="text-[11px] text-slate-500">Linting, unit testing, image builds, and zero-downtime production promotions.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-sky-400">
              <span>HIGH AVAILABILITY TOPOLOGY</span>
              <span className="text-emerald-400">99.99% SLA TARGET</span>
            </div>
            <p className="text-xs text-slate-300">
              Multi-region failover, load balancing, real-time APM telemetry, and structured log aggregation.
            </p>
          </div>
        </div>
      );

    case 'cybersecurity':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Perimeter &amp; Code Hardening</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Zero-Trust Core
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5 text-xs">
            <span className="font-bold text-slate-900 block">Security Verification Dimensions</span>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span>OWASP Top 10 Vulnerability Sweep</span>
                <span className="text-emerald-600 font-semibold font-mono text-[11px]">Hardened</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span>Role-Based Access Control (RBAC)</span>
                <span className="text-emerald-600 font-semibold font-mono text-[11px]">Enforced</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span>AES-256 Rest &amp; TLS 1.3 Transit Encryption</span>
                <span className="text-emerald-600 font-semibold font-mono text-[11px]">Active</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-sky-50 rounded-lg border border-sky-100 text-xs text-sky-900 text-center font-medium">
            Prepares your software to clear rigorous enterprise vendor security diligence.
          </div>
        </div>
      );

    case 'it-consulting':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Compass className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Strategic Technical Advisory</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
              Fractional CTO
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#0a85b1] uppercase">Assessment</span>
              <p className="font-bold text-slate-900">Codebase &amp; Debt Audit</p>
              <p className="text-[11px] text-slate-500">Identification of architectural vulnerabilities, memory leaks, and scaling risks.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#0a85b1] uppercase">Planning</span>
              <p className="font-bold text-slate-900">Roadmap Alignment</p>
              <p className="text-[11px] text-slate-500">Milestone scoping, vendor trade-off analysis, and cloud cost rationalization.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1 text-xs">
            <span className="text-sky-400 font-mono text-[11px] uppercase tracking-wider block font-bold">
              Executive Engineering Stewardship
            </span>
            <p className="text-slate-300">
              Direct advisory from CEO Shivasai Adepu on selecting technologies that sustain long-term business viability.
            </p>
          </div>
        </div>
      );

    case 'web3':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Layers className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Distributed Ledger Architecture</span>
            </div>
            <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300 font-bold uppercase tracking-wider">
              Coming Soon &bull; R&amp;D
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
            <span className="font-bold text-slate-900 block">Cryptographic Verification Exploration</span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Active internal research exploring distributed ledger architectures, smart contract designs, and tamper-evident cryptographic data verification.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1 text-xs">
            <span className="text-amber-400 font-mono text-[11px] uppercase tracking-wider block font-bold">
              Research &amp; Feasibility Notice
            </span>
            <p className="text-slate-300">
              Web3.0 capabilities remain under internal exploratory research and will be scheduled for client deployment as standards and industry adoption mature.
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
}
