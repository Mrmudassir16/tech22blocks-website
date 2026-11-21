'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function Footer() {
  return (
    <footer className="relative bg-[#0A85B1] text-sky-100 overflow-hidden transition-colors duration-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white px-3.5 py-2 rounded-xl shadow-md inline-block">
              <div className="relative h-8 w-40 sm:h-8 sm:w-44">
                <Image
                  src={getAssetUrl('/images/tech22blocks-logo.jpg')}
                  alt="Tech22Blocks Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            
            <p className="text-sm font-bold text-white">{COMPANY.legalName}</p>
            <p className="text-sm text-sky-100/90 leading-relaxed max-w-sm font-normal">
              An engineering-first technology company delivering proprietary software products and custom digital solutions for ambitious organizations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all duration-200 shadow-sm"
                aria-label="LinkedIn — Tech22Blocks"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                aria-label="X (formerly Twitter) — Tech22Blocks"
                title="Tech22Blocks on X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <span className="text-xs font-mono text-sky-200/90">Operating as Tech22Blocks &bull; Est. 2025</span>
            </div>
          </div>

          {/* Explore Pages */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/about/', label: 'About Us' },
                { href: '/portfolio/', label: 'Portfolio' },
                { href: '/blogs/', label: 'Blogs' },
                { href: '/news-events/', label: 'News & Events' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sky-100/90 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — Exactly the 6 Official Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/services/website-development/', label: 'Website Development' },
                { href: '/services/mobile-applications/', label: 'Mobile Application Development' },
                { href: '/services/uiux-design/', label: 'UI/UX Design' },
                { href: '/services/custom-software/', label: 'Custom Software Development' },
                { href: '/services/it-consulting/', label: 'IT Consulting & Advisory' },
                { href: '/services/web3/', label: 'Web3.0 (Coming Soon)' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sky-100/90 hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2.5 text-sky-100/90 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2.5 text-sky-100/90 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-white flex-shrink-0" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sky-100/90">
                <MapPin className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                <span className="leading-snug text-xs">
                  <strong className="block text-white font-medium mb-0.5">Registered Office:</strong>
                  {COMPANY.registeredAddress}
                </span>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-sky-200 transition-colors"
                >
                  <span>Open Contact Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with copyright & authentic recognition logos */}
        <div className="mt-14 pt-8 border-t border-white/20 flex flex-col lg:flex-row items-center justify-between text-xs text-sky-100/90 gap-6">
          
          {/* Left: Copyright & Statutory Operating Entity */}
          <div className="text-center lg:text-left">
            <p className="text-white font-medium">
              &copy; 2026 RRK Software Technologies Private Limited. All rights reserved. Operating as Tech22Blocks.
            </p>
          </div>

          {/* Right: Authentic DPIIT #StartupIndia & MSME Recognition Marks (Directly on Footer Background, No White Box) */}
          <div className="flex items-center gap-6 sm:gap-8">
            {/* DPIIT #StartupIndia Official */}
            <div className="relative h-10 w-32 sm:h-11 sm:w-36 transition-opacity hover:opacity-90">
              <Image
                src={getAssetUrl('/images/dpiit-white-transparent.png')}
                alt="DPIIT #StartupIndia - Government of India Recognized"
                fill
                sizes="150px"
                className="object-contain object-center"
              />
            </div>

            <div className="h-8 w-px bg-white/25" />

            {/* Ministry of MSME Official */}
            <div className="relative h-10 w-28 sm:h-11 sm:w-32 transition-opacity hover:opacity-90">
              <Image
                src={getAssetUrl('/images/msme-white-transparent.png')}
                alt="Ministry of MSME, Govt. of India Registered Enterprise"
                fill
                sizes="130px"
                className="object-contain object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
