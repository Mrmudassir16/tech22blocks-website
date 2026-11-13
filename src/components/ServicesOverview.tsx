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
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { COMPANY } from '@/data/company';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'website-development': <Globe className="w-5 h-5 text-[#0a85b1]" />,
  'mobile-applications': <Smartphone className="w-5 h-5 text-[#0a85b1]" />,
  'uiux-design': <Layout className="w-5 h-5 text-[#0a85b1]" />,
  'custom-software': <Code2 className="w-5 h-5 text-[#0a85b1]" />,
  'it-consulting': <Compass className="w-5 h-5 text-[#0a85b1]" />,
  'web3': <Layers className="w-5 h-5 text-[#0a85b1]" />
};

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
              <span>Our Services &bull; Custom Technology Solutions</span>
            </div>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Software Engineering Capabilities Tailored for Growth
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Practical technology solutions engineered to solve real problems and create meaningful opportunities for startups, growing businesses, and enterprises.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/services/"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>Explore Detailed Specifications</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Structured 6-Service Visual Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isComingSoon = service.id === 'web3';
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0a85b1]/40 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  
                  {/* Card Header with Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:bg-[#0a85b1] group-hover:text-white transition-colors">
                      <div className="group-hover:text-white text-[#0a85b1] transition-colors">
                        {SERVICE_ICONS[service.id] || <Code2 className="w-5 h-5" />}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isComingSoon && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-semibold uppercase tracking-wider">
                          Coming Soon
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-[#0a85b1] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Key Tech Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100/80 text-slate-600 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer link to deep service details */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/#${service.id}`}
                    className="inline-flex items-center text-xs font-bold text-[#0a85b1] hover:text-[#0284c7] group/link"
                  >
                    <span>View deliverables &amp; stack</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-400">
                    {service.category}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
