import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY } from '@/data/company';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';

export default function FinalCTA() {
  return (
    <section className="bg-slate-950 text-white py-24 lg:py-32 relative overflow-hidden" aria-labelledby="cta-heading">
      
      {/* Editorial Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Blue Ambient Glow & Signature Star Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0a85b1]/15 rounded-full blur-[100px] pointer-events-none" 
      />
      <StarWatermark size={680} position="center" variant="white" opacity={0.035} rotate={-10} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <div className="inline-block">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-slate-900 px-3.5 py-1.5 rounded-full border border-sky-500/30">
              Initiate an Engineering Dialogue
            </span>
          </div>

          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a project or product idea?<br />
            Let&apos;s engineer something extraordinary together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you require a mission-critical web platform, an intelligent mobile app, custom enterprise software, or an early consultation on voice AI automation — our leadership and engineering team are ready to collaborate.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-lg shadow-[#0a85b1]/20 transition-all duration-150 group"
            >
              <span>Schedule a Project Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={`mailto:${COMPANY.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all border border-slate-800"
            >
              <Mail className="w-4 h-4 mr-2 text-sky-400" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          {/* Quick Contact & Legal Info */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center justify-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>{COMPANY.phoneDisplay}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Warangal, Telangana, India</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Direct Founder Engagement</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
