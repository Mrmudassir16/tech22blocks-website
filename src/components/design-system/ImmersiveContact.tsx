'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Clock, CheckCircle2, ArrowRight, Terminal, Cpu, Sparkles } from 'lucide-react';
import { COMPANY } from '@/data/company';
import ContactForm from '@/components/ContactForm';

export default function ImmersiveContact() {
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
    <section 
      className="relative py-16 lg:py-24 bg-[#020617] text-white overflow-hidden border-t border-slate-800"
      aria-label="Direct Engineering Consultation"
    >
      {/* Immersive Cybernetic Grid & Volumetric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#0052FF]/15 via-[#0a85b1]/20 to-[#00F0FF]/10 rounded-full blur-[140px]" />
        
        {/* Fine Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00F0FF 1px, transparent 1px),
              linear-gradient(to bottom, #00F0FF 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header: Immersive Command Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono uppercase tracking-wider mb-4 shadow-lg shadow-[#00F0FF]/10">
            <Terminal className="w-3.5 h-3.5" />
            <span>Direct Technical Access &bull; SLA Under 2 Hours</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Initiate Architecture Discussion
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Speak directly with technical leadership. No intermediaries, no sales fluff. Every consultation is led personally by our directors.
          </p>

          {/* Interactive Capability Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {capabilities.map((cap) => (
              <button
                key={cap}
                type="button"
                onClick={() => setSelectedTag(cap)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedTag === cap
                    ? 'bg-[#0a85b1] text-white shadow-md shadow-[#0a85b1]/40 border border-sky-400'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cap}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Immersive Command Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Corporate & Telemetry Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Command Telemetry Console */}
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 space-y-4 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>DISPATCH // DIRECT FOUNDER INBOX</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">UTC+05:30 (IST)</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00F0FF]">
                  Corporate Authority
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {COMPANY.legalName}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Operating as Tech22Blocks &bull; Est. 2025. Uniting strategic business governance with modern production software engineering.
                </p>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-[11px] font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 block text-[9px] uppercase">Engineering SLA</span>
                  <span className="text-emerald-400 font-bold">&lt; 2 Hours</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 block text-[9px] uppercase">Compliance</span>
                  <span className="text-sky-300 font-bold">DPIIT &bull; MSME</span>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-3">
              
              {/* Email */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#0a85b1] hover:bg-slate-800/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 mr-4 flex-shrink-0 group-hover:bg-[#0a85b1] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Direct Founder Email</p>
                  <p className="text-sm font-semibold text-white mt-0.5 group-hover:text-sky-300 transition-colors break-all">
                    {COMPANY.email}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Checked personally by Director &amp; CEO Shivasai Adepu</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-start p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#0a85b1] hover:bg-slate-800/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 mr-4 flex-shrink-0 group-hover:bg-[#0a85b1] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Direct Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-white mt-0.5 group-hover:text-sky-300 transition-colors">
                    {COMPANY.phoneDisplay}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Available for consultations Mon&ndash;Sat (IST)</p>
                </div>
              </a>

              {/* Registered Corporate Office */}
              <div className="flex items-start p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Registered Corporate Office</p>
                  <p className="text-xs font-semibold text-slate-300 mt-0.5 leading-snug">
                    {COMPANY.registeredAddress}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Telangana, India</p>
                </div>
              </div>

            </div>

            {/* Statutory Compliance Note */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center font-bold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#0a85b1] mr-1.5" />
                <span>Statutory Compliance Notice</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                RRK Software Technologies Private Limited operates strictly under applicable Indian corporate laws and maintains full statutory and GST compliance.
              </p>
            </div>

          </div>

          {/* Right Column: Immersive Contact Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl relative">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                Target Architecture: {selectedTag}
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
    </section>
  );
}
