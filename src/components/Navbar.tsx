'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About Us' },
  { href: '/services/', label: 'Our Services' },
  { href: '/products/', label: 'Our Products' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/blogs/', label: 'Blogs' },
  { href: '/news-events/', label: 'News & Events' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(path) || pathname.startsWith(path.replace(/\/$/, ''));
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-[#060b18]/90 backdrop-blur-2xl border border-sky-400/25 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(14,165,233,0.18),inset_0_1px_0_0_rgba(255,255,255,0.15)] px-4 sm:px-6 py-2.5 sm:py-3'
            : 'bg-[#060b18]/70 backdrop-blur-xl border border-white/[0.1] shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)] px-4 sm:px-6 py-3 sm:py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">

          {/* Logo Capsule with Ambient Illumination */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group" 
            aria-label="Tech22Blocks Home"
          >
            <div className="bg-white px-3 py-1.5 rounded-xl border border-white/40 shadow-sm group-hover:shadow-[0_0_22px_rgba(56,189,248,0.45)] transition-all duration-300 group-hover:scale-[1.02]">
              <div className="relative h-7 w-36 sm:h-8 sm:w-44">
                <Image
                  src={getAssetUrl('/images/tech22blocks-logo.jpg')}
                  alt="Tech22Blocks — RRK Software Technologies Private Limited"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  priority
                  className="object-contain object-left"
                />
              </div>
            </div>
            
            {/* Live Operational Status Node (No Slashes) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-400/30 text-[10px] font-mono text-slate-300 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="tracking-wider">ENTERPRISE SYSTEM &bull; 2026</span>
            </div>
          </Link>

          {/* Desktop Navigation Pill Group */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/60 p-1 rounded-full border border-white/[0.08] backdrop-blur-md" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full ${
                    active
                      ? 'text-white bg-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_15px_rgba(56,189,248,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-200 inline-block hover:scale-105">
                    {link.label}
                  </span>
                  {active && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent rounded-full shadow-[0_0_8px_#38bdf8]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider font-mono text-white bg-gradient-to-r from-sky-400 via-[#0ea5e9] to-[#0a85b1] hover:from-sky-300 hover:to-[#0ea5e9] rounded-full shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.65)] transition-all duration-200 hover:scale-105 group"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/[0.08] border border-white/[0.12] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/[0.1] space-y-1.5 pb-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'bg-sky-500/15 text-sky-300 border border-sky-400/30 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-white/[0.08]">
              <Link
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-center px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono text-white bg-gradient-to-r from-sky-400 to-[#0a85b1] shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
