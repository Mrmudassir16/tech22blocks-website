import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPANY } from '@/data/company';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a85b1',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tech22blocks.in'),
  title: {
    default: 'Tech22Blocks | Practical Software Solutions & Engineering',
    template: '%s | Tech22Blocks (RRK Software Technologies)',
  },
  description: 'Tech22Blocks (RRK Software Technologies Private Limited) is a technology company building practical software solutions, web platforms, mobile apps, and AI systems for startups and growing businesses.',
  keywords: [
    'Tech22Blocks',
    'RRK Software Technologies Private Limited',
    'Software Development Company',
    'Startup Tech Partner',
    'Website Development',
    'Mobile Application Development',
    'iOS Android Development',
    'Custom Software Development',
    'UI UX Design',
    'IT Consulting Advisory',
    'AI Call Assistant',
    'Warangal Software Company',
    'Hanamkonda Telangana Technology'
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
    title: 'Tech22Blocks — Practical Software Solutions for Startups',
    description: 'RRK Software Technologies Private Limited operating as Tech22Blocks. A technology partner that speaks plainly, builds fast, and actually shows up.',
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
      sameAs: leader.linkedin
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-sky-100 selection:text-sky-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
