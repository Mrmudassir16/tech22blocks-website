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
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-100">
      {status === 'submitted' ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Inquiry Received</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
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
              className="text-xs font-semibold text-[#0a85b1] hover:underline"
            >
              Submit another project inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:border-transparent transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:border-transparent transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Company / Organization
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Acme Enterprises"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:border-transparent transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:border-transparent transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Area of Interest / Service Required
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:border-transparent transition-all"
            >
              <option value="Software Development">Software Development (Custom Core Systems)</option>
              <option value="Web Development">Web Platforms &amp; Client Portals</option>
              <option value="Mobile Applications">Mobile App Development (iOS &amp; Android)</option>
              <option value="UI/UX Design">UI/UX Design &amp; Product Systems</option>
              <option value="AI & Machine Learning">AI &amp; Machine Learning Engineering</option>
              <option value="Generative AI & Automation">Generative AI &amp; Intelligent Automation</option>
              <option value="Cloud Services & DevOps">Cloud Services &amp; DevOps Engineering</option>
              <option value="Cybersecurity">Cybersecurity &amp; System Hardening</option>
              <option value="IT Consulting & Advisory">IT Consulting &amp; Technical Advisory</option>
              <option value="VoiSage AI Product">VoiSage AI (Proprietary Voice System)</option>
              <option value="Other">Other Custom Engagement</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Project Brief or Technical Objectives <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project requirements, architectural challenges, or targeted timeline..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] transition-all duration-150 disabled:opacity-70 shadow-sm"
            >
              {status === 'submitting' ? (
                <span>Transmitting Project Brief...</span>
              ) : (
                <>
                  <span>Schedule Architectural Consultation</span>
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0a85b1]" />
            <span>Strict privacy. Mutual NDAs executed prior to codebase review.</span>
          </div>
        </form>
      )}
    </div>
  );
}
