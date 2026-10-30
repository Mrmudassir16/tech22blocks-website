import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Layout, 
  Layers, 
  Compass, 
  Cpu, 
  CheckCircle, 
  Terminal,
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import { COMPANY, ServiceItem } from '@/data/company';

export default function ServiceEditorial() {
  const { services } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-3">
            <span className="w-6 h-0.5 bg-[#0a85b1]"></span>
            <span>Capabilities &amp; Engineering</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Practical Software Engineering for Growing Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            We build the 22 fundamental building blocks of modern technology: clarity, speed, logic, testing, and durable systems that scale with your enterprise.
          </p>
        </div>

        {/* Alternating Editorial Sections */}
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
                
                {/* Text Matter (Left or Right) */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:col-start-7' : ''}`}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs font-bold text-[#0a85b1] bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                        Block 0{index + 1}
                      </span>
                      {service.badge && (
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Core Deliverables</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#0a85b1] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-semibold text-slate-500 mr-1">Stack:</span>
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono font-medium bg-slate-100 text-slate-700 rounded border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-semibold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
                    >
                      <span>Inquire about {service.title}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Technical Visual Representation (Right or Left) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  <ServiceVisualRepresentation serviceId={service.id} title={service.title} />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ServiceVisualRepresentation({ serviceId, title }: { serviceId: string; title: string }) {
  switch (serviceId) {
    case 'website-development':
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-slate-300"></span>
              <span className="w-3 h-3 rounded-full bg-slate-300"></span>
              <span className="w-3 h-3 rounded-full bg-slate-300"></span>
            </div>
            <span className="text-xs font-mono text-slate-500">https://yourplatform.com</span>
            <Globe className="w-4 h-4 text-slate-400" />
          </div>
          <div className="space-y-3 font-mono text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center text-slate-700 mb-2">
                <span className="font-semibold text-slate-900">Performance Metrics</span>
                <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">100 / 100</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-600">
                <div className="p-2 bg-slate-50 rounded">LCP: 0.6s</div>
                <div className="p-2 bg-slate-50 rounded">FID: 12ms</div>
                <div className="p-2 bg-slate-50 rounded">CLS: 0.00</div>
              </div>
            </div>
            <div className="bg-slate-900 text-sky-400 p-3.5 rounded-lg text-[11px] space-y-1 overflow-x-auto">
              <div>$ npx next build</div>
              <div className="text-slate-400">○ / - Static Route (Prerendered)</div>
              <div className="text-emerald-400">✓ Generating static pages (100% complete)</div>
              <div className="text-slate-400">✓ Finalizing page optimization</div>
            </div>
          </div>
        </div>
      );

    case 'mobile-applications':
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-800">iOS &amp; Android Unified Core</span>
            </div>
            <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">60 FPS Native</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-900">Apple iOS Ecosystem</div>
              <p className="text-[11px] text-slate-600">SwiftUI / React Native native bridges, secure Keychain authentication, Apple Pay.</p>
              <div className="text-[10px] font-mono text-slate-500">Target: iOS 16.0+</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-900">Google Android Core</div>
              <p className="text-[11px] text-slate-600">Jetpack Compose interoperability, Material Design 3, background job managers.</p>
              <div className="text-[10px] font-mono text-slate-500">Target: API Level 34</div>
            </div>
          </div>
          <div className="mt-3 p-2.5 bg-slate-100 rounded-lg text-center text-xs font-medium text-slate-600">
            Offline caching • Biometric Auth • Push Notification Queues
          </div>
        </div>
      );

    case 'uiux-design':
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <Layout className="w-4 h-4 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-800">Atomic Design System</span>
            </div>
            <span className="text-xs font-mono text-slate-500">Tokens &amp; Components</span>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-2">Typography &amp; Spacing Hierarchy</div>
              <div className="space-y-1.5">
                <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                <div className="h-2.5 bg-slate-300 rounded w-full"></div>
                <div className="h-2.5 bg-slate-200 rounded w-5/6"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                <div className="w-full h-6 rounded bg-[#0a85b1] mb-1"></div>
                <span className="text-[10px] font-mono text-slate-600">Brand Primary</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                <div className="w-full h-6 rounded bg-slate-900 mb-1"></div>
                <span className="text-[10px] font-mono text-slate-600">Slate Charcoal</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                <div className="w-full h-6 rounded bg-slate-100 border border-slate-300 mb-1"></div>
                <span className="text-[10px] font-mono text-slate-600">Neutral Light</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'custom-software':
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-800">Bespoke Architecture</span>
            </div>
            <span className="text-xs font-mono text-slate-500">REST &amp; SQL Engine</span>
          </div>
          <div className="space-y-2.5 font-mono text-xs">
            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800 space-y-1.5">
              <div className="text-sky-400 font-semibold">// Microservice Endpoints</div>
              <div className="text-slate-300">POST /api/v1/orders/dispatch</div>
              <div className="text-slate-400 pl-4">→ Payload validated against JSON Schema</div>
              <div className="text-slate-400 pl-4">→ ACID Transaction committed to Postgres</div>
              <div className="text-emerald-400 pl-4">→ Latency: 14ms (p99)</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-white p-2.5 rounded border border-slate-200 text-slate-700">
                <strong>Internal Portals:</strong> ERP, Inventory, CRM
              </div>
              <div className="bg-white p-2.5 rounded border border-slate-200 text-slate-700">
                <strong>Data Security:</strong> Role-Based Access (RBAC)
              </div>
            </div>
          </div>
        </div>
      );

    case 'it-consulting':
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-800">Architectural Advisory</span>
            </div>
            <span className="text-xs font-mono text-slate-500">CTO Roadmapping</span>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Infrastructure Cost Audit</span>
                <span className="text-emerald-700 font-mono font-bold">-38% Cloud Spend</span>
              </div>
              <p className="text-slate-600 text-[11px]">
                Eliminating redundant servers, right-sizing databases, and implementing automated caching layers.
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Stack Due Diligence</span>
                <span className="text-sky-700 font-mono font-bold">Risk Assessment</span>
              </div>
              <p className="text-slate-600 text-[11px]">
                Comprehensive analysis before major technology migrations and tech partner onboarding.
              </p>
            </div>
          </div>
        </div>
      );

    case 'web3':
      return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-[#0a85b1]" />
              <span className="text-xs font-bold text-slate-800">Decentralized Systems R&amp;D</span>
            </div>
            <span className="text-xs font-mono text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Coming Soon</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 text-xs space-y-3">
            <div className="font-semibold text-slate-900">
              Pragmatic Web3 Exploration
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Evaluating verifiable computation, smart contract verification, cryptographic provenance, and decentralized identity for practical business utility.
            </p>
            <div className="p-3 bg-slate-100 rounded font-mono text-[11px] text-slate-600 space-y-1">
              <div>// Active Lab Research</div>
              <div>EVM State Machine Verification</div>
              <div>Decentralized Storage Protocols</div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
