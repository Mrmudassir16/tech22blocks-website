'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';

export default function Footer() {
  return (
    <footer className="relative bg-[#030712] text-slate-300 border-t border-white/[0.08] overflow-hidden">
      {/* Top ambient luminous line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent" />

      <StarWatermark size={550} position="top-right" variant="white" opacity={0.015} rotate={20} />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white px-3 py-1.5 rounded-lg border border-white/20 shadow-sm inline-block">
              <div className="relative h-8 w-40 sm:h-8 sm:w-44">
                <Image
                  src={getAssetUrl('/images/tech22blocks-logo.jpg')}
                  alt="Tech22Blocks Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            
            <p className="text-sm font-semibold text-slate-200">{COMPANY.legalName}</p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              An engineering-first technology company delivering proprietary software products and custom digital solutions for ambitious organizations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-sky-500/20 text-slate-400 hover:text-sky-300 border border-white/[0.08] hover:border-sky-400/40 flex items-center justify-center transition-all duration-200 shadow-sm"
                aria-label="LinkedIn — Tech22Blocks"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-sky-500/20 text-slate-400 hover:text-sky-300 border border-white/[0.08] hover:border-sky-400/40 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                aria-label="X (formerly Twitter) — Tech22Blocks"
                title="Tech22Blocks on X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <span className="text-xs font-mono text-slate-500">Operating as Tech22Blocks &bull; Est. 2025</span>
            </div>
          </div>

          {/* Explore Pages */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">// Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/about/', label: 'About Us' },
                { href: '/portfolio/', label: 'Portfolio' },
                { href: '/blogs/', label: 'Blogs' },
                { href: '/news-events/', label: 'News & Events' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — Exactly the 6 Official Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">// Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/services/#website-development', label: 'Website Development' },
                { href: '/services/#mobile-applications', label: 'Mobile Application Development' },
                { href: '/services/#uiux-design', label: 'UI/UX Design' },
                { href: '/services/#custom-software', label: 'Custom Software Development' },
                { href: '/services/#it-consulting', label: 'IT Consulting & Advisory' },
                { href: '/services/#web3', label: 'Web3.0 (Coming Soon)' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">// Contact</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-sky-400 group-hover:text-sky-300 flex-shrink-0" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-sky-400 group-hover:text-sky-300 flex-shrink-0" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-sky-400 flex-shrink-0" />
                <span className="leading-snug text-xs">
                  <strong className="block text-slate-300 font-medium mb-0.5">Registered Office:</strong>
                  {COMPANY.registeredAddress}
                </span>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Open Contact Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with exact required copyright & authentic recognition logos */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col lg:flex-row items-center justify-between text-xs text-slate-400 gap-6">
          
          {/* Left: Copyright & Statutory Operating Entity */}
          <div className="text-center lg:text-left space-y-1">
            <p className="text-slate-300 font-normal">
              &copy; 2026 RRK Software Technologies Private Limited. All rights reserved. Operating as Tech22Blocks.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-500 text-[11px] font-mono">
              <Link href="/about/" className="hover:text-slate-300 transition-colors">About</Link>
              <span>&bull;</span>
              <Link href="/portfolio/" className="hover:text-slate-300 transition-colors">Portfolio</Link>
              <span>&bull;</span>
              <Link href="/blogs/" className="hover:text-slate-300 transition-colors">Blogs</Link>
              <span>&bull;</span>
              <Link href="/contact/" className="hover:text-slate-300 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Right: Authentic DPIIT #StartupIndia & MSME Recognition Marks */}
          <div className="flex items-center gap-3 bg-white p-2 sm:px-3 sm:py-2 rounded-xl shadow-md border border-white/20">
            {/* DPIIT #StartupIndia Official */}
            <div className="relative h-7 w-28 sm:w-32">
              <Image
                src={getAssetUrl('/images/dpiit-startup-india-official.png')}
                alt="DPIIT #StartupIndia - Government of India Recognized"
                fill
                sizes="130px"
                className="object-contain object-center"
              />
            </div>

            <div className="h-6 w-px bg-slate-300" />

            {/* Ministry of MSME Official */}
            <div className="relative h-7 w-24 sm:w-28">
              <Image
                src={getAssetUrl('/images/msme-gov-official.png')}
                alt="Ministry of MSME, Govt. of India Registered Enterprise"
                fill
                sizes="115px"
                className="object-contain object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
