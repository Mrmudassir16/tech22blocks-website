import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, ShieldCheck, Clock, Building } from 'lucide-react';
import { COMPANY } from '@/data/company';
import ContactForm from '@/components/ContactForm';
import RecognitionStrip from '@/components/RecognitionStrip';

export const metadata: Metadata = {
  title: 'Contact Us — Partner with Tech22Blocks',
  description: 'Get in touch with Tech22Blocks (RRK Software Technologies Private Limited). Discuss software development, mobile apps, or custom AI solutions with our founders.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
              <span>Direct Communication</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Let&apos;s build something meaningful.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed">
              Have a technology challenge or a software project ready to launch? Speak directly with our technical leadership. No intermediaries, no sales fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Strip */}
      <RecognitionStrip />

      {/* Main Split Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Corporate Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                  Official Contact Details
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-2">
                  RRK SOFTWARE TECHNOLOGIES PRIVATE LIMITED
                </h2>
                <p className="text-sm font-semibold text-slate-600 mt-1">
                  Operating as Tech22Blocks
                </p>
                <p className="text-base text-slate-600 mt-4 leading-relaxed">
                  We work closely with startup founders, operators, and business owners looking for a transparent technical team that builds fast and stays for the long game.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start p-4 rounded-xl border border-slate-200 hover:border-[#0a85b1] hover:bg-sky-50/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1] mr-4 flex-shrink-0 group-hover:bg-[#0a85b1] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Email</p>
                    <p className="text-base font-semibold text-slate-900 mt-0.5 group-hover:text-[#0a85b1] transition-colors break-all">
                      {COMPANY.email}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Checked personally by Director &amp; CEO Shivasai Adepu</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start p-4 rounded-xl border border-slate-200 hover:border-[#0a85b1] hover:bg-sky-50/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0a85b1] mr-4 flex-shrink-0 group-hover:bg-[#0a85b1] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Phone / WhatsApp</p>
                    <p className="text-base font-semibold text-slate-900 mt-0.5 group-hover:text-[#0a85b1] transition-colors">
                      {COMPANY.phoneDisplay}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Available for consultations Mon–Sat (IST)</p>
                  </div>
                </a>

                {/* Registered Address */}
                <div className="flex items-start p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="w-10 h-10 rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-700 mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Registered Corporate Address</p>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                      {COMPANY.registeredAddress}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Telangana, India</p>
                  </div>
                </div>

              </div>

              {/* Corporate Governance Note */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex items-center font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#0a85b1] mr-1.5" />
                  <span>Statutory Notice</span>
                </div>
                <p>
                  RRK Software Technologies Private Limited operates strictly under applicable Indian corporate laws and maintains full statutory and GST compliance.
                </p>
              </div>

            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
                  Initiate Discussion
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Tell Us About Your Project
                </h3>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
