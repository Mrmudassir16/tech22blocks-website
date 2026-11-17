import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPANY } from '@/data/company';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#030712',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tech22blocks.in'),
  title: {
    default: 'Tech22Blocks | Engineering Software That Ships — AI Products & Custom Solutions',
    template: '%s | Tech22Blocks (RRK Software Technologies)',
  },
  description: 'Tech22Blocks (RRK Software Technologies Private Limited) builds proprietary software products including VoiSage AI and delivers custom enterprise solutions across web, mobile, cloud, and AI for organizations of all stages.',
  keywords: [
    'Tech22Blocks',
    'RRK Software Technologies Private Limited',
    'Website Development',
    'Mobile Application iOS Android',
    'UI UX Design',
    'Custom Software',
    'IT Consulting Advisory',
    'Web3.0 Distributed Systems',
    'VoiSage AI Voice Assistant',
    'Warangal Software Company',
    'Telangana Technology Enterprise',
    'DPIIT Startup India Certified'
  ],
  authors: [{ name: 'Tech22Blocks' }, { name: 'Shivasai Adepu' }, { name: 'Rajkumar Adepu' }],
  creator: 'RRK Software Technologies Private Limited',
  publisher: 'RRK Software Technologies Private Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tech22blocks.in',
    siteName: 'Tech22Blocks',
    title: 'Tech22Blocks — Engineering Software That Ships',
    description: 'RRK Software Technologies Private Limited operating as Tech22Blocks. Proprietary intelligent products and custom digital solutions. From ambitious ideas to enterprise-scale solutions.',
    images: [
      {
        url: '/images/tech22blocks-logo.jpg',
        width: 1000,
        height: 180,
        alt: 'Tech22Blocks Official Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: 'https://tech22blocks.in',
    logo: 'https://tech22blocks.in/images/tech22blocks-logo.jpg',
    foundingDate: '2025',
    founders: COMPANY.leadership.map((leader) => ({
      '@type': 'Person',
      name: leader.name,
      jobTitle: leader.role,
      ...('linkedin' in leader && leader.linkedin ? { sameAs: leader.linkedin } : {})
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5-11-840',
      addressLocality: 'Hanamkonda, Warangal',
      addressRegion: 'Telangana',
      postalCode: '506009',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone,
      contactType: 'customer service',
      email: COMPANY.email,
      availableLanguage: ['English', 'Telugu', 'Hindi']
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts: Plus Jakarta Sans & JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#030712] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
