import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Layout, 
  Code2, 
  Compass, 
  Layers, 
  ChevronRight
} from 'lucide-react';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

const HOMEPAGE_SERVICES = [
  {
    num: '01',
    id: 'website-development',
    title: 'Website Development',
    tagline: 'Modern, scalable web experiences.',
    description: 'High-performance web platforms and full-stack applications engineered for speed, clean indexing, and seamless customer interactions.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: Globe,
    badge: 'Digital Experience',
  },
  {
    num: '02',
    id: 'mobile-applications',
    title: 'Mobile Application Development',
    tagline: 'Applications for iOS and Android.',
    description: 'Native and cross-platform mobile apps engineered for fluid 60 FPS performance, offline data synchronization, and security.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    icon: Smartphone,
    badge: 'Digital Experience',
  },
  {
    num: '03',
    id: 'uiux-design',
    title: 'UI/UX Design',
    tagline: 'Intuitive and thoughtful digital experiences.',
    description: 'Purposeful digital workflows, interactive wireframes, and scalable component design systems that minimize user friction.',
    technologies: ['Figma', 'Design Systems', 'User Research', 'Tokens'],
    icon: Layout,
    badge: 'Digital Experience',
  },
  {
    num: '04',
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Software tailored to business needs.',
    description: 'Bespoke core systems, enterprise operations portals, and high-throughput APIs crafted specifically around your unique operating model.',
    technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL'],
    icon: Code2,
    badge: 'Enterprise Systems',
  },
  {
    num: '05',
    id: 'it-consulting',
    title: 'IT Consulting & Advisory',
    tagline: 'Technology guidance and architecture.',
    description: 'Pragmatic technical advisory helping business leaders evaluate technology trade-offs, audit architecture, and plan roadmaps.',
    technologies: ['Stack Selection', 'Architecture Audits', 'Due Diligence'],
    icon: Compass,
    badge: 'Intelligence & Advisory',
  },
  {
    num: '06',
    id: 'web3',
    title: 'Web3.0',
    tagline: 'Decentralized architecture and verification.',
    description: 'Pragmatic research and architectural exploration of distributed ledger technology, smart contracts, and cryptographic data verification.',
    technologies: ['Distributed Ledgers', 'Cryptographic Proofs', 'Smart Contracts'],
    icon: Layers,
    badge: 'Coming Soon',
    comingSoon: true,
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50/80 border-b border-slate-200/80 overflow-hidden" aria-labelledby="services-heading">
      <StarWatermark size={640} position="top-left" variant="blue" opacity={0.025} rotate={-15} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
              <StarEmblem size={13} variant="blue" />
              <span>Our Services &bull; Custom Solutions</span>
            </div>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Software Engineered for Performance and Scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Practical technology solutions engineered to solve real business bottlenecks and create measurable operational advantage.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/services/"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Balanced 2x3 Grid (6 Official Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {HOMEPAGE_SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="relative overflow-hidden bg-white rounded-2xl border border-slate-200/90 p-7 lg:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#0a85b1]/40 transition-all duration-200 group"
              >
                <StarWatermark size={180} position="bottom-right" variant="blue" opacity={0.02} rotate={10} className="transition-opacity duration-300 group-hover:opacity-40" />
                <div className="relative z-10 space-y-4">
                  
                  {/* Card Header with Distinctive Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1] group-hover:bg-[#0a85b1] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5 transition-colors" />
                    </div>
                    <div className="flex items-center gap-2">
                      {service.comingSoon ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-semibold uppercase">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60 font-semibold">
                          {service.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {service.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0a85b1]">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Technology Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <Link
                    href={`/services/#${service.id}`}
                    className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] group/link"
                  >
                    <span>View Technical Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Single Centered Action CTA */}
        <div className="text-center pt-2">
          <Link
            href="/services/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-xl shadow-sm transition-colors group"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
