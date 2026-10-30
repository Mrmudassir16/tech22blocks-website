import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner: Corporate Recognition */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-sm text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0a85b1]"></span>
            <span>Government of India Recognized Enterprise</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2 bg-slate-900/90 px-3.5 py-1.5 rounded border border-slate-700/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">#StartupIndia</span>
              <span className="text-[11px] text-slate-400 border-l border-slate-700 pl-2">DPIIT Recognized</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/90 px-3.5 py-1.5 rounded border border-slate-700/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">MSME</span>
              <span className="text-[11px] text-slate-400 border-l border-slate-700 pl-2">Registered Entity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1 & 2: Brand & Corporate Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2 rounded-md inline-block w-auto">
              <div className="relative h-9 w-44">
                <Image
                  src="/images/tech22blocks-logo.jpg"
                  alt="Tech22Blocks"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-200">
              {COMPANY.legalName}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A technology company focused on practical software solutions for startups and small businesses. We build fast, speak plainly, and engineer reliable digital products.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={COMPANY.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0a85b1] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500">Operating as Tech22Blocks</span>
            </div>
          </div>

          {/* Column 3: Corporate Pages */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white text-slate-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white text-slate-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#founders" className="hover:text-white text-slate-400 transition-colors">
                  The Founders
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white text-slate-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-white text-slate-400 transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white text-slate-400 transition-colors">
                  Blogs & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services & Products */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Capabilities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#website-development" className="hover:text-white text-slate-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-applications" className="hover:text-white text-slate-400 transition-colors">
                  Mobile Apps (iOS & Android)
                </Link>
              </li>
              <li>
                <Link href="/services#uiux-design" className="hover:text-white text-slate-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#custom-software" className="hover:text-white text-slate-400 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services#it-consulting" className="hover:text-white text-slate-400 transition-colors">
                  IT Consulting & Advisory
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sky-400 hover:text-sky-300 font-medium transition-colors flex items-center gap-1">
                  <span>AI Call Assistant</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-900/60 text-sky-300 border border-sky-700/50">Product</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Official Contact Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Official Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start text-slate-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mr-2.5 mt-0.5 text-[#0a85b1] group-hover:text-sky-400 flex-shrink-0" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center text-slate-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mr-2.5 text-[#0a85b1] group-hover:text-sky-400 flex-shrink-0" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start text-slate-400">
                <MapPin className="w-4 h-4 mr-2.5 mt-0.5 text-[#0a85b1] flex-shrink-0" />
                <span className="leading-snug">
                  <strong className="block text-slate-300 font-medium">Registered Address:</strong>
                  {COMPANY.registeredAddress}
                </span>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-semibold text-[#38bdf8] hover:underline"
                >
                  <span>Open Contact Form</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
}

