'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, ShieldCheck } from 'lucide-react';

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
    <div className="bg-[var(--surface)] rounded-2xl sm:rounded-3xl border border-[var(--border)] p-6 sm:p-8 lg:p-10 shadow-lg text-[var(--text-primary)] transition-colors duration-200">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display">
          Tell Us About Your Project
        </h3>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          Fill in the details below to receive a direct response from our engineering leadership.
        </p>
      </div>

      {status === 'submitted' ? (
        <div className="py-10 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 shadow-md">
            <CheckCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight font-display">Inquiry Received</h3>
          <p className="text-[var(--text-muted)] max-w-md mx-auto text-xs sm:text-sm leading-relaxed font-normal">
            Thank you for reaching out to Tech22Blocks. Director &amp; CEO Shivasai Adepu and our technical engineering desk will review your inquiry and follow up directly within 24 business hours.
          </p>
          <div className="pt-3">
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
              className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] hover:underline transition-colors cursor-pointer"
            >
              Submit another project inquiry &rarr;
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-1.5 font-semibold">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-[var(--text-muted)]/60"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-1.5 font-semibold">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-[var(--text-muted)]/60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-1.5 font-semibold">
                Company / Organization
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Acme Enterprises"
                className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-[var(--text-muted)]/60"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-1.5 font-semibold">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-[var(--text-muted)]/60"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-1.5 font-semibold">
              Area of Interest / Service Required
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-all cursor-pointer"
            >
              <option value="Website Development">Website Development</option>
              <option value="Mobile Applications">Mobile Application (iOS &amp; Android)</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Custom Software">Custom Software</option>
              <option value="IT Consulting & Advisory">IT Consulting &amp; Advisory</option>
              <option value="Web3.0">Web3.0 Engineering</option>
              <option value="VoiSage AI Product">VoiSage AI (Proprietary Voice Product)</option>
              <option value="Other">Other Custom Engagement</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-1.5 font-semibold">
              Project Brief or Technical Objectives <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project requirements, architectural challenges, or targeted timeline..."
              className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-[var(--text-muted)]/60 leading-relaxed"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-md transition-all duration-200 cursor-pointer disabled:opacity-70 group"
            >
              {status === 'submitting' ? (
                <span>Transmitting Project Brief...</span>
              ) : (
                <>
                  <span>Schedule Architectural Consultation</span>
                  <Send className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[var(--text-muted)] pt-1 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
            <span>Strict privacy. Mutual NDAs executed prior to codebase review.</span>
          </div>
        </form>
      )}
    </div>
  );
}
