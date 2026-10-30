import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Layout, 
  Layers, 
  Compass, 
  Cpu 
} from 'lucide-react';
import { COMPANY } from '@/data/company';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'website-development': <Globe className="w-5 h-5 text-[#0a85b1]" />,
  'mobile-applications': <Smartphone className="w-5 h-5 text-[#0a85b1]" />,
  'uiux-design': <Layout className="w-5 h-5 text-[#0a85b1]" />,
  'custom-software': <Layers className="w-5 h-5 text-[#0a85b1]" />,
  'it-consulting': <Compass className="w-5 h-5 text-[#0a85b1]" />,
  'web3': <Cpu className="w-5 h-5 text-[#0a85b1]" />
};

export default function ServicesOverview() {
  const { services } = COMPANY;

  return (
    <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80" aria-labelledby="services-overview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0a85b1] mb-2.5">
              <span className="w-5 h-0.5 bg-[#0a85b1]"></span>
              <span>Our Capabilities</span>
            </div>
            <h2 id="services-overview-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Software Services Tailored for Growth
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We design, architect, and deploy reliable digital products with modern codebases and clear deliverables.
            </p>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-bold text-[#0a85b1] hover:text-[#0284c7] group transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 6 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {SERVICE_ICONS[service.id] || <Layers className="w-5 h-5 text-[#0a85b1]" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 group-hover:text-[#0a85b1] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0a85b1] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  {service.badge && (
                    <span className="mt-1 inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      {service.badge}
                    </span>
                  )}
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="text-[10px] text-slate-400 font-mono">
                    +{service.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-friendly Explore All CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/services"
            className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
