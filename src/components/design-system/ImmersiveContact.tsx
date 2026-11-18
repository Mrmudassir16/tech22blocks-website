'use client';

import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/data/company';
import ContactForm from '@/components/ContactForm';

export default function ImmersiveContact() {
  return (
    <section 
      className="relative py-12 sm:py-16 lg:py-20 bg-[#060b18] text-white overflow-hidden border-t border-white/[0.08]"
      aria-label="Direct Engineering Consultation"
    >
      {/* Background Volumetric Flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/[0.08] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple Two-Column Layout: Direct Details + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Clean Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Get in Touch
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Reach out to our leadership directly via email, phone, or our registered office address.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              
              {/* Email */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start p-4 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-400/50 hover:bg-[#0b1120] transition-all group backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/[0.1] border border-sky-400/20 flex items-center justify-center text-sky-400 mr-4 flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
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
                className="flex items-start p-4 rounded-2xl bg-[#0b1120]/80 border border-white/[0.08] hover:border-sky-400/50 hover:bg-[#0b1120] transition-all group backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/[0.1] border border-sky-400/20 flex items-center justify-center text-sky-400 mr-4 flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
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
              <div className="flex items-start p-4 rounded-2xl bg-[#0b1120]/60 border border-white/[0.06] backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Registered Corporate Office</p>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5 leading-snug">
                    {COMPANY.registeredAddress}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Telangana, India</p>
                </div>
              </div>

            </div>

            {/* Statutory Compliance Note */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-400 space-y-1">
              <div className="flex items-center font-bold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-sky-400 mr-1.5" />
                <span>Statutory Compliance Notice</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                RRK Software Technologies Private Limited operates strictly under applicable Indian corporate laws and maintains full statutory and GST compliance.
              </p>
            </div>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7 bg-[#0b1120]/90 text-white rounded-3xl p-6 sm:p-10 border border-white/[0.1] hover:border-sky-400/40 shadow-2xl backdrop-blur-xl transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-white">
                Tell Us About Your Project
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the details below to receive a direct response from our engineering leadership.
              </p>
            </div>
            
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
