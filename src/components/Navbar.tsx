'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(path) || pathname.startsWith(path.replace(/\/$/, ''));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#030712]/60 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo with Brand Pill */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group" 
            aria-label="Tech22Blocks Home"
          >
            <div className="bg-white px-3 py-1.5 rounded-lg border border-white/20 shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
              <div className="relative h-8 w-40 sm:h-8 sm:w-44">
                <Image
                  src={getAssetUrl('/images/tech22blocks-logo.jpg')}
                  alt="Tech22Blocks — RRK Software Technologies Private Limited"
                  fill
                  sizes="(max-width: 640px) 160px, 176px"
                  priority
                  className="object-contain object-left"
                />
              </div>
            </div>
            
            {/* Live Operational Status Node (Linear Style) */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-white/[0.08] text-[10px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE // 2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/40 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full ${
                    active
                      ? 'text-white bg-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_6px_#38bdf8]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider font-mono text-white bg-gradient-to-r from-sky-500 via-[#0a85b1] to-[#0284c7] hover:from-sky-400 hover:to-sky-500 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.35)] hover:shadow-[0_0_30px_rgba(14,165,233,0.55)] transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#030712]/98 backdrop-blur-2xl px-6 pt-4 pb-8 space-y-2 shadow-2xl">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{link.label}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
              </Link>
            );
          })}
          <div className="pt-4 mt-2 border-t border-white/[0.08]">
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono text-white bg-gradient-to-r from-sky-500 to-[#0a85b1] shadow-[0_0_25px_rgba(14,165,233,0.35)] transition-all"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
