import React from 'react';
import type { Metadata } from 'next';
import ProductShowcase from '@/components/ProductShowcase';
import FinalCTA from '@/components/FinalCTA';
import RecognitionStrip from '@/components/RecognitionStrip';
import { Shield, Sparkles, Cpu, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Products — AI Call Assistant for Unknown Calls',
  description: 'Tech22Blocks builds proprietary software tools. Discover our in-house AI Call Assistant engineered to screen unknown calls and protect executive focus.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Product Hero Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
              <span>Internal R&amp;D Initiatives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              We don&apos;t just build for clients. We build for ourselves too.
            </h1>
            <p className="mt-6 text-xl text-slate-300 font-light leading-relaxed">
              When we encounter deep daily operational frustrations, we build technology to solve them. Here is a look at what our engineering team is actively building.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <ProductShowcase />

      {/* Engineering Philosophy Behind Internal Products */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a85b1]">
              Product Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
              Why We Build In-House Products
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Developing our own proprietary systems ensures our team stays sharp, understands the full product lifecycle, and confronts real engineering complexities before offering solutions to clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">First-Party Dogfooding</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We use the AI Call Assistant in our own executive daily routines, refining latency, voice fidelity, and accuracy based on genuine caller scenarios.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Privacy &amp; Data Control</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our audio architectures are designed with secure transcription pipelines, ensuring sensitive business conversations remain strictly confidential.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0a85b1]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Production-Ready Architecture</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every component developed for our products — from speech-to-text to webhook triggers — enhances the codebase foundation we bring to client projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition strip */}
      <RecognitionStrip />

      {/* Contact CTA */}
      <FinalCTA />
    </>
  );
}

