'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY } from '@/data/company';
import ContactForm from '@/components/ContactForm';
import StarEmblem, { StarWatermark } from '@/components/StarEmblem';
import Star3DEngine from '@/components/design-system/Star3DEngine';

export default function StarNexusContact() {
  const [selectedTag, setSelectedTag] = useState<string>('All Capabilities');

  const capabilities = [
    'All Capabilities',
    'Enterprise Web Platform',
    'Mobile Application (iOS/Android)',
    'Proprietary AI (VoiSage)',
    'Custom Core Architecture',
    'IT Architecture Audit',
  ];

  return (
    <div className="relative py-16 lg:py-24 bg-gradient-to-b from-[#020b14] via-[#031526] to-[#020b14] text-white overflow-hidden">
      
      {/* Background Volumetric Glow & Geometric Watermark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0a85b1]/15 rounded-full blur-[140px]" />
        <StarWatermark size={680} position="top-right" variant="white" opacity={0.03} rotate={15} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Star Nexus Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-lg">
            <span>Interactive Star Nexus &bull; Direct Founder Access</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Initiate Architecture Discussion
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Speak directly with technical leadership. No intermediaries, no sales fluff. Every consultation is led personally by our directors.
          </p>

          {/* Interactive Project Focus Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {capabilities.map((cap) => (
              <button
                key={cap}
                type="button"
                onClick={() => setSelectedTag(cap)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedTag === cap
                    ? 'bg-[#0a85b1] text-white shadow-md shadow-[#0a85b1]/30 border border-sky-400'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cap}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Interactive Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Star Nexus Telemetry & Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive 3D Mini Star Nexus Card */}
            <div className="relative rounded-2xl bg-slate-900/80 border border-sky-500/20 p-6 overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>SLA: Under 2 Hours</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Warangal, Telangana</span>
              </div>

              <div className="flex items-center justify-center py-4">
                <Star3DEngine size={220} interactive={true} autoRotateSpeed={20} showCoordinates={false} />
              </div>

              <div className="pt-2 text-center border-t border-slate-800/80">
                <p className="text-sm font-bold text-white">Direct Engineering Governance</p>
                <p className="text-xs text-slate-400 mt-1">
                  Operating under <strong className="text-slate-200">{COMPANY.legalName}</strong>
                </p>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 mr-4 flex-shrink-0 group-hover:bg-[#0a85b1] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Direct Founder Inbox</p>
                  <p className="text-sm font-semibold text-white mt-0.5 group-hover:text-sky-300 transition-colors">
                    {COMPANY.email}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Reviewed personally by Shivasai Adepu (CEO)</p>
                </div>
              </a>

              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-start p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 mr-4 flex-shrink-0 group-hover:bg-[#0a85b1] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Direct Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-white mt-0.5 group-hover:text-sky-300 transition-colors">
                    {COMPANY.phoneDisplay}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Available Mon&ndash;Sat for technical consultations</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: High-Precision Contact Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl relative">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                Selected Capability: {selectedTag}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-950 mt-1">
                Tell Us About Your Project
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the details below to receive a direct architectural response from our engineering leadership.
              </p>
            </div>
            
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
