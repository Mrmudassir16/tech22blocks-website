import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, Layout, Layers, Compass, Cpu } from 'lucide-react';
import { COMPANY } from '@/data/company';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'website-development': <Globe className="w-5 h-5 text-[#0a85b1]" />,
  'mobile-applications': <Smartphone className="w-5 h-5 text-[#0a85b1]" />,
  'uiux-design': <Layout className="w-5 h-5 text-[#0a85b1]" />,
  'custom-software': <Layers className="w-5 h-5 text-[#0a85b1]" />,
  'it-consulting': <Compass className="w-5 h-5 text-[#0a85b1]" />,
  'web3': <Cpu className="w-5 h-5 text-[#0a85b1]" />,
};

export default function ServicesOverview() {
  const { services } = COMPANY;

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/60" aria-labelledby="services-overview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="label-eyebrow mb-3">Our Capabilities</div>
            <h2 id="services-overview-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Software Services Tailored for Growth
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We design, architect, and deploy reliable digital products with modern codebases and clear deliverables.
            </p>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0a85b1] hover:text-[#0369a1] group transition-colors"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-[#0a85b1]/25 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon row + number */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {SERVICE_ICONS[service.id] || <Layers className="w-5 h-5 text-[#0a85b1]" />}
                  </div>
                  <span className="text-2xl font-black text-slate-100 group-hover:text-sky-100 transition-colors leading-none select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title + badge */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="mt-1 inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                      {service.badge}
                    </span>
                  )}
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Tech tags */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/80"
                  >
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="text-[11px] font-mono text-slate-400">
                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 md:hidden">
          <Link
            href="/services"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0369a1] rounded-full shadow-sm transition-colors"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
