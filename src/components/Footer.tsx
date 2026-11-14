import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Brand-blue top accent stripe */}
      <div className="h-0.5 bg-gradient-to-r from-[#0a85b1] via-[#38bdf8] to-[#0a85b1]" />

      <StarWatermark size={500} position="top-right" variant="white" opacity={0.02} rotate={20} />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2 rounded-md inline-block">
              <div className="relative h-9 w-44">
                <Image
                  src={getAssetUrl('/images/tech22blocks-logo.jpg')}
                  alt="Tech22Blocks Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-200">{COMPANY.legalName}</p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An engineering-first technology company delivering proprietary software products and custom digital solutions for ambitious organizations.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <a
                href={COMPANY.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0a85b1] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn — Tech22Blocks"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500">Operating as Tech22Blocks &bull; Est. 2025</span>
            </div>
          </div>

          {/* Explore Pages */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/about/', label: 'About Us' },
                { href: '/portfolio/', label: 'Portfolio' },
                { href: '/blogs/', label: 'Blogs' },
                { href: '/news-events/', label: 'News & Events' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — Exactly the 6 Official Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/services/#website-development', label: 'Website Development' },
                { href: '/services/#mobile-applications', label: 'Mobile Application Development' },
                { href: '/services/#uiux-design', label: 'UI/UX Design' },
                { href: '/services/#custom-software', label: 'Custom Software Development' },
                { href: '/services/#it-consulting', label: 'IT Consulting & Advisory' },
                { href: '/services/#web3', label: 'Web3.0 (Coming Soon)' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-[#0a85b1] group-hover:text-sky-400 flex-shrink-0" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#0a85b1] group-hover:text-sky-400 flex-shrink-0" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-[#0a85b1] flex-shrink-0" />
                <span className="leading-snug text-xs">
                  <strong className="block text-slate-300 font-medium mb-0.5">Registered Office:</strong>
                  {COMPANY.registeredAddress}
                </span>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Open Contact Form</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with exact required copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 RRK Software Technologies Private Limited. All rights reserved. Operating as Tech22Blocks.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/about/" className="hover:text-white transition-colors">About</Link>
            <span className="text-slate-700">&bull;</span>
            <Link href="/portfolio/" className="hover:text-white transition-colors">Portfolio</Link>
            <span className="text-slate-700">&bull;</span>
            <Link href="/blogs/" className="hover:text-white transition-colors">Blogs</Link>
            <span className="text-slate-700">&bull;</span>
            <Link href="/contact/" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
