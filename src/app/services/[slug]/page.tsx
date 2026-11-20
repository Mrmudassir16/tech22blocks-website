import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sparkles,
  ChevronRight,
  Code2,
  Workflow
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { BespokeServiceVisual } from '@/components/design-system/BespokeServiceShowcase';
import FinalCTA from '@/components/FinalCTA';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return COMPANY.services.map((svc) => ({
    slug: svc.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = COMPANY.services.find((s) => s.id === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found — Tech22Blocks',
    };
  }

  return {
    title: `${service.title} — Tech22Blocks`,
    description: service.shortDesc,
  };
}

const ENGINEERING_STAGES = [
  {
    step: '01',
    title: 'Architectural Discovery',
    desc: 'We analyze your domain requirements, audit constraints, and produce a definitive technical roadmap with milestone delivery specifications.',
  },
  {
    step: '02',
    title: 'System Design & Wireframing',
    desc: 'Engineered data schemas, API contracts, interactive component prototypes, and high-fidelity design systems for team sign-off.',
  },
  {
    step: '03',
    title: 'Sprint Execution & Build',
    desc: 'Production-grade engineering in shared Git repositories with weekly demo deployments, clean typing, and automated CI/CD checks.',
  },
  {
    step: '04',
    title: 'Security Audits & Launch',
    desc: 'Rigorous end-to-end testing, Core Web Vitals optimization, statutory compliance documentation, and zero-downtime deployment.',
  },
];

export default function ServiceDetailPage({ params }: PageProps) {
  const service = COMPANY.services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  // Find other services for related services section
  const otherServices = COMPANY.services.filter((s) => s.id !== service.id);

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      
      {/* 1. Service Hero Banner */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
        <StarWatermark size={620} position="top-right" variant="blue" opacity={0.03} rotate={12} />
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-mono text-[var(--text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-[var(--text-muted)]" /></li>
              <li>
                <Link href="/services/" className="hover:text-[var(--accent)] transition-colors">
                  Services
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-[var(--text-muted)]" /></li>
              <li className="text-[var(--accent)] font-semibold truncate max-w-[200px] sm:max-w-none">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[var(--accent)] bg-[var(--surface-elevated)] px-3 py-1 rounded-full border border-[var(--border)]">
                  {service.category}
                </span>
                {service.badge && (
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-500 border border-amber-400/30">
                    {service.badge}
                  </span>
                )}
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Engineering Capability
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-[var(--text-primary)]">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed font-normal">
                {service.shortDesc}
              </p>

              <p className="text-base text-[var(--text-muted)] leading-relaxed font-normal">
                {service.fullDesc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all btn-offset"
                >
                  <span>Schedule Architecture Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#deliverables"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all"
                >
                  <span>View Deliverables</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Interactive Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] p-4 sm:p-6 shadow-xl overflow-hidden group">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border)]">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    // live-architecture-spec
                  </span>
                </div>

                <div className="min-h-[280px] flex items-center justify-center">
                  <BespokeServiceVisual id={service.id} />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Key Deliverables & Artifacts Section */}
      <section id="deliverables" className="py-16 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Capabilities Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Key Deliverables &amp; Artifacts
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Concrete architectural assets, production code, and deliverables handed over during engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((deliverable, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 group-hover:border-[var(--accent)] transition-all flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                    Deliverable 0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {deliverable}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                    Strict adherence to clean documentation, modular typing, and seamless integration with your existing stack.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Business Outcome Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[var(--surface)] to-[var(--surface-elevated)] border border-[var(--border)] shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                // Expected Business Impact &amp; ROI
              </span>
              <p className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug">
                {service.outcome}
              </p>
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all flex-shrink-0"
            >
              <span>Discuss Your Goals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Technologies Deployed */}
      <section className="py-14 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
                Technology Standards
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                Technologies Deployed in {service.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-2.5">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engineering Workflow Stages */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Structured Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Our 4-Stage Engineering Workflow
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              How we turn technical specifications into scalable production releases without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINEERING_STAGES.map((stage) => (
              <div 
                key={stage.step}
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-3xl font-extrabold font-mono text-[var(--accent)] mb-3">
                  {stage.step}
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Explore Other Services */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
                Explore More Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                Other Engineering Services
              </h3>
            </div>
            <Link
              href="/services/"
              className="text-xs sm:text-sm font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}/`}
                className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[var(--accent)]">
                    {item.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2 mt-1.5">
                  {item.shortDesc}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Direct Project Consultation CTA */}
      <FinalCTA />

    </div>
  );
}
