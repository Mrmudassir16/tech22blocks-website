'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      className={`sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-slate-200/60 transition-all duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Tech22Blocks Home">
            <div className="relative h-9 w-44 sm:h-10 sm:w-52">
              <Image
                src={getAssetUrl('/images/tech22blocks-logo.jpg')}
                alt="Tech22Blocks — RRK Software Technologies Private Limited"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded ${
                    active
                      ? 'text-[#0a85b1]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0a85b1] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/contact/"
              className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0369a1] rounded-full transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-sky-50 text-[#0a85b1] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-200">
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#0a85b1] hover:bg-[#0369a1] transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
