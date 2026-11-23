'use client';

import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/data/company';
import ContactForm from '@/components/ContactForm';

export default function ImmersiveContact() {
  return (
    <section 
      className="relative py-12 sm:py-16 lg:py-20 bg-[var(--canvas)] text-[var(--text-primary)] overflow-hidden border-t border-[var(--border)] transition-colors duration-200"
      aria-label="Direct Engineering Consultation"
    >
      {/* Background Volumetric Flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent)]/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple Two-Column Layout: Direct Details + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Clean Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1 font-display">
                Get in Touch
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                Reach out to our leadership directly via email, phone, or our registered office address.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              
              {/* Email */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] mr-4 flex-shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Direct Founder Email</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5 group-hover:text-[var(--accent)] transition-colors break-all">
                    {COMPANY.email}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">Checked personally by Director &amp; CEO Shivasai Adepu</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-start p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] mr-4 flex-shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Direct Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5 group-hover:text-[var(--accent)] transition-colors">
                    {COMPANY.phoneDisplay}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">Available for consultations Mon&ndash;Sat (IST)</p>
                </div>
              </a>

              {/* Registered Corporate Office */}
              <div className="flex items-start p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">Registered Corporate Office</p>
                  <p className="text-xs font-semibold text-[var(--text-primary)] mt-0.5 leading-snug">
                    {COMPANY.registeredAddress}
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Telangana, India</p>
                </div>
              </div>

            </div>

            {/* Statutory Compliance Note */}
            <div className="p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs text-[var(--text-muted)] space-y-1">
              <div className="flex items-center font-bold text-[var(--text-primary)]">
                <ShieldCheck className="w-4 h-4 text-[var(--accent)] mr-1.5" />
                <span>Statutory Compliance Notice</span>
              </div>
              <p className="text-[11px] leading-relaxed text-[var(--text-muted)]">
                RRK Software Technologies Private Limited operates strictly under applicable Indian corporate laws and maintains full statutory and GST compliance.
              </p>
            </div>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
