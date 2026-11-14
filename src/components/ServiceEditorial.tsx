import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Code2, 
  Globe, 
  Smartphone, 
  Layout, 
  Compass, 
  Layers, 
  CheckCircle2, 
  Lock
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export default function ServiceEditorial() {
  const { services } = COMPANY;

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden" aria-labelledby="services-detail-heading">
      <StarWatermark size={680} position="top-right" variant="blue" opacity={0.02} rotate={-12} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
            <StarEmblem size={13} variant="blue" />
            <span>Comprehensive Service Architecture</span>
          </div>
          <h2 id="services-detail-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            End-to-End Technology Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From modern website platforms and native mobile applications to tailored custom software, intuitive UI/UX design, strategic IT advisory, and emerging Web3 technologies &mdash; we engineer practical solutions that solve real business bottlenecks.
          </p>
        </div>

        {/* Alternating Service Showcase */}
        <div className="space-y-24 lg:space-y-32">
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

                {/* Purposeful Visual Composition */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <ServiceCreativeIllustration serviceId={service.id} />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Purposeful, service-specific visual compositions for the 6 official services
function ServiceCreativeIllustration({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    
    // 01. Website Development: Browser Frame UI & Architecture Performance
    case 'website-development':
    case 'web-development':
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-xl overflow-hidden">
          {/* Browser Chrome Header */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-xs truncate">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>https://platform.tech22blocks.in</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              SSR &bull; Edge
            </span>
          </div>

          {/* Browser Content Canvas */}
          <div className="p-6 space-y-4">
            {/* Performance Indicators */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/70 text-center space-y-1">
                <span className="text-xl font-mono font-extrabold text-emerald-400">99</span>
                <p className="text-[10px] font-mono uppercase text-slate-400">Performance</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/70 text-center space-y-1">
                <span className="text-xl font-mono font-extrabold text-sky-400">100</span>
                <p className="text-[10px] font-mono uppercase text-slate-400">Accessibility</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/70 text-center space-y-1">
                <span className="text-xl font-mono font-extrabold text-emerald-400">100</span>
                <p className="text-[10px] font-mono uppercase text-slate-400">SEO / Semantics</p>
              </div>
            </div>

            {/* Architecture Topology */}
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>HYBRID RENDERING ARCHITECTURE</span>
                <span className="text-sky-300">NEXT.js + REACT</span>
              </div>
              <div className="space-y-1.5 text-slate-300 font-mono text-[11px]">
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                  <span>Critical Path Hydration</span>
                  <span className="text-emerald-400 font-semibold">Instant FCP</span>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                  <span>Incremental Static Regeneration</span>
                  <span className="text-sky-400 font-semibold">Static Cache</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 text-center font-mono">
              Engineered for responsive fluidity across mobile, tablet, and desktop viewports.
            </div>
          </div>
        </div>
      );

    // 02. Mobile Application Development: Authentic Device Showcase
    case 'mobile-applications':
      return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden group">
          <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
            <Image
              src={getAssetUrl('/images/mobile-apps-showcase.jpg')}
              alt="Native mobile application development for iOS and Android"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            
            {/* Floating Platform Badges */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  Apple iOS Native
                </span>
                <span className="text-xs font-mono font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  Google Android
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-800">
                Offline-First Sync
              </span>
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <p className="font-bold text-slate-900">Hardware Integration</p>
                <p className="text-[11px] text-slate-600">Biometrics, Secure Enclave, APNs &amp; FCM Push notifications.</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <p className="font-bold text-slate-900">Performance Budget</p>
                <p className="text-[11px] text-slate-600">60 FPS native rendering with encrypted local SQLite persistence.</p>
              </div>
            </div>
          </div>
        </div>
      );

    // 03. UI/UX Design: Figma-Inspired Design System Studio
    case 'uiux-design':
      return (
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-2">
              <Layout className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Design System Architecture</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200">
              Tokens &bull; Components
            </span>
          </div>

          {/* Tokens Grid */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="text-xs font-bold text-slate-900 block">Foundational Design Tokens</span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-0.5">
                <span className="block font-bold text-[#0a85b1]">Typography</span>
                <span className="text-[10px] text-slate-500 font-mono">Major Third (1.25)</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-0.5">
                <span className="block font-bold text-slate-900">Color Palette</span>
                <span className="text-[10px] text-slate-500 font-mono">WCAG AAA Contrast</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-0.5">
                <span className="block font-bold text-slate-900">8pt Spatial Grid</span>
                <span className="text-[10px] text-slate-500 font-mono">Harmonic Scale</span>
              </div>
            </div>
          </div>

          {/* Interactive Component States Preview */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-900 block">Component States &amp; User Journeys</span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#0a85b1] text-white font-semibold">
                Default
              </div>
              <div className="p-2.5 rounded-lg bg-[#0284c7] text-white font-semibold shadow-xs">
                Hover
              </div>
              <div className="p-2.5 rounded-lg bg-slate-100 text-slate-400 border border-slate-200">
                Disabled
              </div>
            </div>
          </div>

          <div className="p-3 bg-sky-50 rounded-lg border border-sky-100 text-xs text-sky-900 text-center font-medium">
            Clickable prototypes, interactive user workflows, and developer-ready Figma tokens.
          </div>
        </div>
      );

    // 04. Custom Software Development: Authentic Enterprise Platform Visual
    case 'custom-software':
    case 'software-development':
      return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden group">
          <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
            <Image
              src={getAssetUrl('/images/enterprise-platform-mockup.jpg')}
              alt="Custom software and enterprise core systems architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-mono font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                Bespoke Core Platform
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-800">
                Transactional Integrity
              </span>
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono text-[#0a85b1] font-bold uppercase">Layer 01 &bull; API &amp; Auth</span>
                <p className="font-semibold text-slate-900">Tenant Isolation &amp; RBAC</p>
                <p className="text-[11px] text-slate-600">Granular role-based permissions and high-throughput REST/GraphQL endpoints.</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono text-[#0a85b1] font-bold uppercase">Layer 02 &bull; Compute</span>
                <p className="font-semibold text-slate-900">Decoupled Microservices</p>
                <p className="text-[11px] text-slate-600">Event-driven message queues, worker threads, and PostgreSQL ACID persistence.</p>
              </div>
            </div>
          </div>
        </div>
      );

    // 05. IT Consulting & Advisory: Strategic Architecture Evaluation Matrix
    case 'it-consulting':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-2">
              <Compass className="w-5 h-5 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Architecture Due Diligence</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
              Audit &amp; Strategy
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-900">Code Health</span>
                <span className="text-emerald-600 font-mono font-bold">Grade A</span>
              </div>
              <p className="text-[11px] text-slate-500">Comprehensive static code analysis, vulnerability sweeps, and memory leak profiling.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-900">Technical Debt</span>
                <span className="text-[#0a85b1] font-mono font-bold">Remediated</span>
              </div>
              <p className="text-[11px] text-slate-500">Identification of legacy bottlenecks, dependency risks, and refactoring priorities.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2 text-xs">
            <div className="flex items-center justify-between text-[11px] font-mono text-sky-400">
              <span>ENGAGEMENT ROADMAP</span>
              <span className="text-emerald-400 font-semibold">FOUNDER DIRECT</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-1">
              <div className="p-1.5 rounded bg-slate-800 border border-slate-700">1. Audit</div>
              <div className="p-1.5 rounded bg-slate-800 border border-slate-700">2. Architecture</div>
              <div className="p-1.5 rounded bg-slate-800 border border-slate-700">3. Roadmap</div>
            </div>
          </div>
        </div>
      );

    // 06. Web3.0: Cryptographic Verification R&D
    case 'web3':
      return (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
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

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1.5 text-xs">
            <span className="text-amber-400 font-mono text-[11px] uppercase tracking-wider block font-bold">
              Research &amp; Feasibility Notice
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Web3.0 capabilities remain under internal exploratory research and will be scheduled for client deployment as standards, regulatory guidelines, and industry adoption mature.
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
}
