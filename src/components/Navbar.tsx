'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sun, 
  Moon, 
  ChevronDown, 
  Globe, 
  Smartphone, 
  Layout, 
  Code2, 
  Compass, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { useTheme } from '@/context/ThemeContext';
import { COMPANY } from '@/data/company';

// Helper to get matching Lucide icon for each service
const getServiceIcon = (id: string) => {
  switch (id) {
    case 'website-development':
      return <Globe className="w-4 h-4 text-sky-500" />;
    case 'mobile-applications':
      return <Smartphone className="w-4 h-4 text-blue-500" />;
    case 'uiux-design':
      return <Layout className="w-4 h-4 text-indigo-500" />;
    case 'custom-software':
      return <Code2 className="w-4 h-4 text-emerald-500" />;
    case 'it-consulting':
      return <Compass className="w-4 h-4 text-amber-500" />;
    case 'web3':
      return <Layers className="w-4 h-4 text-purple-500" />;
    default:
      return <Code2 className="w-4 h-4 text-sky-500" />;
  }
};

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About Us' },
  { 
    href: '/services/', 
    label: 'Our Services',
    isDropdown: true,
  },
  { href: '/products/', label: 'Our Products' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/blogs/', label: 'Blogs' },
  { href: '/news-events/', label: 'News & Events' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(path) || pathname.startsWith(path.replace(/\/$/, ''));
  };

  return (
    <header 
      className="header-glass z-50 h-[72px]" 
      data-scrolled={scrolled ? 'true' : 'false'}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

        {/* 1. Left: Official Brand Logo with Dual-Theme Integration */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group flex-shrink-0" 
          aria-label="Tech22Blocks Home"
        >
          <div className="bg-white px-3 py-1.5 rounded-xl border border-white/40 shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
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
        </Link>

        {/* 2. Center: Desktop Navigation Links */}
        <nav 
          className="hidden lg:flex items-center gap-6 xl:gap-8" 
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            if (link.isDropdown) {
              return (
                <div 
                  key={link.href} 
                  ref={dropdownRef}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer py-2">
                    <Link
                      href={link.href}
                      className={`relative text-[14.5px] xl:text-[15.5px] font-bold tracking-normal transition-colors duration-180 ${
                        active 
                          ? 'text-[var(--accent)] font-extrabold' 
                          : 'text-slate-900 dark:text-slate-100 hover:text-[var(--accent)] dark:hover:text-[var(--accent-light)]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span 
                        className={`absolute -bottom-0.5 left-0 h-[2.5px] bg-[var(--accent)] rounded-full transition-all duration-200 ${
                          active 
                            ? 'w-full shadow-[0_0_8px_var(--accent)]' 
                            : 'w-0 group-hover:w-full opacity-80'
                        }`} 
                      />
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle Services Dropdown"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="text-slate-900 dark:text-slate-100 hover:text-[var(--accent)] dark:hover:text-[var(--accent-light)] transition-transform duration-200 group-hover:rotate-180"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Dropdown Menu (Exact SVSS Style — Only Service Names + 3D Flipping Logo Effect) */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[320px] transition-all duration-200 ${
                      servicesDropdownOpen 
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="p-2 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl backdrop-blur-xl">
                      <div className="space-y-0.5">
                        {COMPANY.services.map((svc) => (
                          <Link
                            key={svc.id}
                            href={`/services/${svc.id}/`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="svss-dropdown-item group/item"
                          >
                            <span className="svss-dropdown-icon">
                              {getServiceIcon(svc.id)}
                            </span>
                            <span className="svss-dropdown-label truncate font-medium text-[14px]">
                              {svc.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1.5 text-[14.5px] xl:text-[15.5px] font-bold tracking-normal transition-colors duration-180 group ${
                  active 
                    ? 'text-[var(--accent)] font-extrabold' 
                    : 'text-slate-900 dark:text-slate-100 hover:text-[var(--accent)] dark:hover:text-[var(--accent-light)]'
                }`}
              >
                <span>{link.label}</span>
                <span 
                  className={`absolute -bottom-0.5 left-0 h-[2.5px] bg-[var(--accent)] rounded-full transition-all duration-200 ${
                    active 
                      ? 'w-full shadow-[0_0_8px_var(--accent)]' 
                      : 'w-0 group-hover:w-full opacity-80'
                  }`} 
                />
              </Link>
            );
          })}
        </nav>

        {/* 3. Right: Theme Toggle & Primary CTA Button */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          
          {/* Sun/Moon Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-180 cursor-pointer shadow-sm"
          >
            {mounted && theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700 transition-transform duration-200 rotate-0" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 rotate-0" />
            )}
          </button>

          {/* Primary CTA with Hard Offset Hover Effect */}
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-[0_4px_14px_rgba(10,133,177,0.35)] btn-offset transition-all"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4. Mobile: Theme Toggle & Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            {mounted && theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-primary)] bg-[var(--surface-elevated)] border border-[var(--border)] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* 5. Mobile Slide-In / Dropdown Drawer (100% Solid Opaque Background) */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 w-full p-6 flex flex-col justify-between overflow-y-auto z-[9999] shadow-2xl border-t border-[var(--border)]"
          style={{ 
            backgroundColor: 'var(--canvas)', 
            height: 'calc(100dvh - 72px)',
          }}
        >
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] px-1 block mb-3 font-semibold">
              Navigation Menu
            </span>
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              if (link.isDropdown) {
                return (
                  <div key={link.href} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      className={`flex items-center justify-between w-full px-4 min-h-[50px] rounded-xl text-[16px] font-semibold transition-all ${
                        active
                          ? 'bg-[var(--accent)] text-white shadow-md'
                          : 'text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileServicesExpanded && (
                      <div className="p-1 space-y-0.5 bg-[var(--surface-elevated)] rounded-xl border border-[var(--border)] mt-1">
                        {COMPANY.services.map((svc) => (
                          <Link
                            key={svc.id}
                            href={`/services/${svc.id}/`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="svss-dropdown-item !py-2"
                          >
                            <span className="svss-dropdown-icon !w-7 !h-7">
                              {getServiceIcon(svc.id)}
                            </span>
                            <span className="svss-dropdown-label truncate font-medium text-[13.5px]">{svc.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 min-h-[50px] rounded-xl text-[16px] font-semibold transition-all ${
                    active
                      ? 'bg-[var(--accent)] text-white shadow-md'
                      : 'text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] hover:border-[var(--accent)]/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {active ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[var(--border)] space-y-3 mt-6">
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[50px] rounded-xl text-[14px] font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg transition-all"
            >
              <span>Schedule a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="text-center font-mono text-[11px] text-[var(--text-muted)]">
              RRK Software Technologies &bull; Warangal, India
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
