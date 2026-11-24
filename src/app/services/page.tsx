import React from 'react';
import type { Metadata } from 'next';
import TechcoServicesSection from '@/components/TechcoServicesSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Our Services — Tech22Blocks',
  description: 'Explore the 6 core software services offered by Tech22Blocks: Website Development, Mobile Application Development (iOS & Android), UI/UX Design, Custom Software Development, IT Consulting & Advisory, and Web3.0.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Techco-styled Services Experience: Banner, 6 Big Cards Grid & Value Pillars */}
      <TechcoServicesSection />

      {/* Technical FAQ */}
      <FAQSection />

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
