'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Website Development',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate clean form handling, preparing payload for mailer or API
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
          <h3 className="text-2xl font-bold text-slate-900">Message Received</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you for reaching out to Tech22Blocks. Shivasai and our technical team will review your requirements and respond directly within 24 business hours.
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
                  service: 'Website Development',
                  message: ''
                });
              }}
              className="text-xs font-semibold text-[#0a85b1] hover:underline"
            >
              Send another inquiry
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
                placeholder="e.g. Acme Corp"
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
              What can we help you with?
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:border-transparent transition-all"
            >
              <option value="Website Development">Website Development</option>
              <option value="Mobile Applications">Mobile Application (iOS &amp; Android)</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Custom Software">Custom Software Engineering</option>
              <option value="IT Consulting & Advisory">IT Consulting &amp; Advisory</option>
              <option value="AI Call Assistant">Inquiry on AI Call Assistant Product</option>
              <option value="Other">Other Strategic Requirement</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Project Overview / Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about what you want to build, current challenges, or timelines..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Direct contact footnote */}
          <div className="text-xs text-slate-500 pt-1">
            Prefer direct contact? Email us anytime at{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-[#0a85b1] font-semibold hover:underline">
              {COMPANY.email}
            </a>{' '}
            or call{' '}
            <a href={`tel:${COMPANY.phone}`} className="text-[#0a85b1] font-semibold hover:underline">
              {COMPANY.phoneDisplay}
            </a>.
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-[#0a85b1] hover:bg-[#0284c7] rounded-lg shadow-sm hover:shadow transition-all duration-150 disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-[#0a85b1] focus:ring-offset-2"
            >
              {status === 'submitting' ? (
                <span>Submitting inquiry...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
