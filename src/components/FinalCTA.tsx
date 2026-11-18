import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY } from '@/data/company';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import { getAssetUrl } from '@/utils/assets';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { CornerBrackets, BorderBeam } from '@/components/design-system/AtmosphericPerimeter';

export default function FinalCTA() {
  return (
    <section 
      className="bg-[#04091a] text-white py-18 sm:py-22 lg:py-24 relative overflow-hidden border-b border-white/[0.08]" 
      aria-labelledby="cta-heading"
    >
      {/* Background Volumetric Glow & Signature Star Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-sky-500/[0.15] rounded-full blur-[150px] pointer-events-none transform-gpu animate-pulse-aura" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/3 w-[500px] h-[350px] bg-[#0052FF]/[0.15] rounded-full blur-[130px] pointer-events-none transform-gpu" 
      />

      {/* Hairline subtle top ambient glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* Side Decorative Tech Shapes */}
      <div className="absolute top-1/4 -left-12 w-64 h-80 opacity-20 pointer-events-none animate-float-slow hidden lg:block" aria-hidden="true">
        <Image 
          src={getAssetUrl('/images/shape_angle_1.webp')} 
          alt="" 
          width={260} 
          height={340} 
          className="w-full h-auto object-contain brightness-200"
        />
      </div>
      <div className="absolute bottom-1/4 -right-12 w-64 h-80 opacity-20 pointer-events-none animate-float-slow-reverse hidden lg:block" aria-hidden="true">
        <Image 
          src={getAssetUrl('/images/shape_angle_2.webp')} 
          alt="" 
          width={260} 
          height={340} 
          className="w-full h-auto object-contain brightness-200"
        />
      </div>
      
      <StarWatermark size={720} position="center" variant="white" opacity={0.02} rotate={-10} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest font-mono text-[#38bdf8]">
              Initiate an Engineering Dialogue
            </span>
            <Image 
              src={getAssetUrl('/images/shape_title_under_line.svg')} 
              alt="" 
              width={40} 
              height={8} 
              className="inline-block brightness-200"
            />
          </div>

          {/* S-Tier Perfectly Centered Kinetic Headline */}
          <div className="group/heading inline-block text-center relative w-full">
            <h2 id="cta-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-tight cursor-default text-center">
              <span className="block mb-2 sm:mb-3">
                <StaggeredText text="Have a project or product idea?" />
              </span>
              <span className="block">
                <StaggeredText text="Let's engineer something" />{' '}
                <StaggeredText text="extraordinary together." isShimmer />
              </span>
            </h2>
            {/* Luminous laser beam underline that shoots out across the heading on hover */}
            <span className="block h-[2px] w-0 group-hover/heading:w-3/4 max-w-[320px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent transition-all duration-500 ease-out mx-auto mt-4 shadow-[0_0_14px_#38bdf8]" />
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you require a mission-critical web platform, an intelligent mobile app, custom enterprise software, or an early consultation on voice AI automation — our leadership and engineering team are ready to collaborate.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider font-mono text-white bg-gradient-to-r from-sky-500 via-[#0a85b1] to-[#0284c7] hover:from-sky-400 hover:to-sky-500 rounded-xl shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:shadow-[0_0_35px_rgba(14,165,233,0.55)] transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>Schedule a Project Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <a
              href={`mailto:${COMPANY.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-xs font-semibold uppercase tracking-wider font-mono text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-sky-400/40 rounded-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <Mail className="w-4 h-4 mr-2 text-sky-400" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          {/* Quick Contact & Telemetry Info with Cyber Corner Reticles */}
          <div className="pt-10 mt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 font-mono">
            <div className="group relative flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-400/40 transition-colors overflow-hidden">
              <CornerBrackets size="w-2.5 h-2.5" color="border-sky-400/30" activeColor="group-hover:border-sky-400" />
              <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>{COMPANY.phoneDisplay}</span>
            </div>
            <div className="group relative flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-400/40 transition-colors overflow-hidden">
              <CornerBrackets size="w-2.5 h-2.5" color="border-sky-400/30" activeColor="group-hover:border-sky-400" />
              <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Warangal, Telangana, India</span>
            </div>
            <div className="group relative flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-400/40 transition-colors overflow-hidden">
              <CornerBrackets size="w-2.5 h-2.5" color="border-sky-400/30" activeColor="group-hover:border-sky-400" />
              <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Direct Founder Engagement</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
