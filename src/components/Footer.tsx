import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Brand-blue top accent stripe */}
      <div className="h-0.5 bg-gradient-to-r from-[#0a85b1] via-[#38bdf8] to-[#0a85b1]" />

      {/* Recognition banner */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-sm text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a85b1]" />
            <span>Government of India Recognized Technology Enterprise</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-1.5 rounded border border-slate-700/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">#StartupIndia</span>
              <span className="text-[11px] text-slate-500 border-l border-slate-700 pl-2">DPIIT Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-1.5 rounded border border-slate-700/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">MSME</span>
              <span className="text-[11px] text-slate-500 border-l border-slate-700 pl-2">Registered Entity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand Column */}
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
              An engineering-first technology company delivering proprietary software products and custom digital solutions. We build fast, speak plainly, and engineer resilient systems.
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

          {/* Company Pages */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about/', label: 'About Us' },
                { href: '/about/#founders', label: 'The Founders' },
                { href: '/portfolio/', label: 'Portfolio & Case Studies' },
                { href: '/news-events/', label: 'News & Events' },
                { href: '/blogs/', label: 'Blogs & Insights' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors link-hover-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities — Exactly the 6 Services from Requirements PDF */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/services/#website-development', label: 'Website Development' },
                { href: '/services/#mobile-applications', label: 'Mobile Application Development (iOS & Android)' },
                { href: '/services/#uiux-design', label: 'UI/UX Design' },
                { href: '/services/#custom-software', label: 'Custom Software Development' },
                { href: '/services/#it-consulting', label: 'IT Consulting & Advisory' },
                { href: '/services/#web3', label: 'Web3.0 (Coming Soon)' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors link-hover-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/products/"
                  className="text-sky-400 hover:text-sky-300 font-medium transition-colors flex items-center gap-1.5"
                >
                  <span>VoiSage AI</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-900/60 text-sky-300 border border-sky-700/50">
                    Proprietary Product
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Official Contact</h3>
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
                <span className="leading-snug">
                  <strong className="block text-slate-300 font-medium text-xs">Registered Address:</strong>
                  {COMPANY.registeredAddress}
                </span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Open Contact Form
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>CIN / Reg: Telangana, India</span>
            <span>Operating as Tech22Blocks</span>
            <a
              href={COMPANY.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <span className="text-slate-500 hidden sm:inline">Made with precision in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
