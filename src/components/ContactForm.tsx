'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Software Development',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('submitted');
    }, 800);
  };

  return (
    <div className="bg-[#0b1120]/95 rounded-3xl border border-white/[0.12] p-7 sm:p-9 lg:p-11 shadow-2xl backdrop-blur-2xl">
      {status === 'submitted' ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-400/30 shadow-[0_0_25px_rgba(52,211,153,0.2)]">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Inquiry Received</h3>
          <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed font-normal">
            Thank you for reaching out to Tech22Blocks. Director &amp; CEO Shivasai Adepu and our technical engineering desk will review your inquiry and follow up directly within 24 business hours.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  phone: '',
                  service: 'Software Development',
                  message: ''
                });
              }}
              className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
            >
              Submit another project inquiry &rarr;
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white text-sm focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all placeholder:text-slate-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Work Email <span className="text-rose-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white text-sm focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Company / Organization
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Acme Enterprises"
                className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white text-sm focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all placeholder:text-slate-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Phone Number <span className="text-rose-400">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white text-sm focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Area of Interest / Service Required
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-[#0b1120] text-white text-sm focus:outline-none focus:border-sky-400 transition-all cursor-pointer"
            >
              <option value="Website Development">Website Development</option>
              <option value="Mobile Applications">Mobile Application (iOS &amp; Android)</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Custom Software">Custom Software</option>
              <option value="IT Consulting & Advisory">IT Consulting &amp; Advisory</option>
              <option value="Web3.0">Web3.0 (Coming Soon)</option>
              <option value="VoiSage AI Product">VoiSage AI (Proprietary Voice Product)</option>
              <option value="Other">Other Custom Engagement</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Project Brief or Technical Objectives <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project requirements, architectural challenges, or targeted timeline..."
              className="w-full px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] text-white text-sm focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all placeholder:text-slate-500 leading-relaxed"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center px-6 py-4 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-[#0a85b1] to-[#0284c7] hover:from-sky-400 hover:to-sky-500 shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:shadow-[0_0_35px_rgba(14,165,233,0.55)] transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 group"
            >
              {status === 'submitting' ? (
                <span>Transmitting Project Brief...</span>
              ) : (
                <>
                  <span>Schedule Architectural Consultation</span>
                  <Send className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span>Strict privacy. Mutual NDAs executed prior to codebase review.</span>
          </div>
        </form>
      )}
    </div>
  );
}
