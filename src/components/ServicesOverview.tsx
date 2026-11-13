import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowUpRight,
  Globe, 
  Smartphone, 
  Layout, 
  Code2, 
  Compass, 
  Layers, 
  ChevronRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'website-development': <Globe className="w-4 h-4 text-[#0a85b1]" />,
  'mobile-applications': <Smartphone className="w-4 h-4 text-[#0a85b1]" />,
  'uiux-design': <Layout className="w-4 h-4 text-[#0a85b1]" />,
  'custom-software': <Code2 className="w-4 h-4 text-[#0a85b1]" />,
  'it-consulting': <Compass className="w-4 h-4 text-[#0a85b1]" />,
  'web3': <Layers className="w-4 h-4 text-[#0a85b1]" />
};

const FLAGSHIP_SERVICES = [
  {
    id: 'website-development',
    serviceIndex: '01',
    image: '/images/enterprise-platform-mockup.jpg',
    imageAlt: 'Modern responsive web platforms and full-stack enterprise web applications',
    badge: 'Digital Experience',
    title: 'Website Development',
    description: 'High-performance, search-optimized web platforms built with modern component architectures for speed, reliability, and customer conversions.',
    deliverables: ['Full-Stack Web Applications', 'Sub-Second LCP Performance', 'Enterprise Technical SEO'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    href: '/services/#website-development',
  },
  {
    id: 'mobile-applications',
    serviceIndex: '02',
    image: '/images/mobile-apps-showcase.jpg',
    imageAlt: 'Cross-platform iOS and Android mobile applications engineered with native fidelity',
    badge: 'Digital Experience',
    title: 'Mobile Application (iOS & Android)',
    description: 'Native and cross-platform iOS & Android mobile applications engineered for fluid 60 FPS performance, offline data sync, and security.',
    deliverables: ['Cross-Platform Apps', 'Fluid 60 FPS Native UI', 'Offline Data Synchronization'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    href: '/services/#mobile-applications',
  },
  {
    id: 'custom-software',
    serviceIndex: '03',
    image: '/images/ai-cloud-automation.jpg',
    imageAlt: 'Bespoke custom software architecture, distributed backends, and cloud automation',
    badge: 'Enterprise Systems',
    title: 'Custom Software',
    description: 'Bespoke core systems, enterprise application architectures, and robust business workflows tailored specifically to your operating model.',
    deliverables: ['Tailored Enterprise Platforms', 'High-Throughput APIs', 'Legacy Modernization'],
    technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL'],
    href: '/services/#custom-software',
  },
];

export default function ServicesOverview() {
  const { services } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-slate-50/80 border-b border-slate-200/80" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
              <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
              <span>Engineering Capabilities &bull; Core Services</span>
            </div>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Software Built to Scale, Ship, and Perform.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Practical technology solutions engineered to solve real problems and create measurable advantage for startups, growing businesses, and enterprises.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/services/"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>Explore All 6 Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 1. Flagship Visual Showcase Cards (3 Top Visual Disciplines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FLAGSHIP_SERVICES.map((flagship) => (
            <div
              key={flagship.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#0a85b1]/40 transition-all duration-300 group"
            >
              <div>
                {/* Visual Asset Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={getAssetUrl(flagship.image)}
                    alt={flagship.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-sky-300 border border-white/10">
                      {flagship.badge}
                    </span>
                  </div>

                  {/* Service Index */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black/50 backdrop-blur-md text-white/80 border border-white/10">
                      {flagship.serviceIndex}
                    </span>
                  </div>

                  {/* Tech stack badge over bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/90 font-mono">
                    <span className="truncate">{flagship.technologies.join(' • ')}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {flagship.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {flagship.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Deliverables
                    </span>
                    {flagship.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0a85b1] flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 sm:px-7 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={flagship.href}
                  className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] group/link"
                >
                  <span>View Full Architecture &amp; Deliverables</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0a85b1] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* 2. Structured Directory Strip for All 6 Official Services */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-950">
                Complete Service Directory
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                All 6 core service disciplines from our technical charter, available for project-based and dedicated engineering engagements.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-[#0a85b1] px-2.5 py-1 rounded-full bg-sky-50 border border-sky-100 self-start sm:self-auto">
              6 Official Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const isComingSoon = service.id === 'web3';
              return (
                <Link
                  key={service.id}
                  href={`/services/#${service.id}`}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#0a85b1]/40 hover:shadow-xs transition-all duration-200 group/item"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#0a85b1] group-hover/item:text-white transition-colors">
                      <div className="group-hover/item:text-white text-[#0a85b1] transition-colors">
                        {SERVICE_ICONS[service.id] || <Code2 className="w-4 h-4" />}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 group-hover/item:text-[#0a85b1] truncate transition-colors">
                          {service.title}
                        </span>
                        {isComingSoon && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-200 font-semibold uppercase">
                            Soon
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 block truncate">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover/item:text-[#0a85b1] group-hover/item:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. Dedicated Redirection Banner to /services/ */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#051829] border border-slate-800 p-8 sm:p-10 text-white relative overflow-hidden shadow-md">
          {/* Subtle brand glow in corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0a85b1]/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest">
                Comprehensive Technical Specifications
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Explore Detailed Deliverables &amp; Technology Stacks
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Review complete technical descriptions, technology stacks, execution outcomes, and engagement models across all 6 services on our dedicated services page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0">
              <Link
                href="/services/"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0369a1] rounded-xl shadow-md transition-colors group"
              >
                <span>Explore All 6 Services</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700 transition-colors"
              >
                <span>Discuss a Requirement</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
