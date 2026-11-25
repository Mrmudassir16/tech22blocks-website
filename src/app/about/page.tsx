import React from 'react';
import type { Metadata } from 'next';
import AboutHeroWall from '@/components/about/AboutHeroWall';
import AboutPartnerIntro from '@/components/about/AboutPartnerIntro';
import AboutMissionPrism from '@/components/about/AboutMissionPrism';
import AboutWhatMakesDifferent from '@/components/about/AboutWhatMakesDifferent';
import AboutTwoPillars from '@/components/about/AboutTwoPillars';
import AboutLeadershipTeam from '@/components/about/AboutLeadershipTeam';
import AboutCultureLife from '@/components/about/AboutCultureLife';
import AboutCertifications from '@/components/about/AboutCertifications';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'About Us — Heritage, Mission & Leadership | Tech22Blocks',
  description: 'Operating under RRK Software Technologies Private Limited, Tech22Blocks combines generational business perspective with modern software craftsmanship.',
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      
      {/* 1. Hero Wall with 3D Perspective Animation */}
      <AboutHeroWall />

      {/* 2. Your Trusted Technology Partner & Metrics */}
      <AboutPartnerIntro />

      {/* 3. 3D Turning Prism: Mission, Vision & Values */}
      <AboutMissionPrism />

      {/* 4. What Makes Tech22Blocks Different */}
      <AboutWhatMakesDifferent />

      {/* 5. What We Do: Two Core Business Models */}
      <AboutTwoPillars />

      {/* 6. Leadership Section (Father & Son Vision + Leadership Team Cards) */}
      <AboutLeadershipTeam />

      {/* 7. Life @ Tech22Blocks */}
      <AboutCultureLife />

      {/* 8. Certifications & Recognition (MSME, DPIIT) */}
      <AboutCertifications />

      {/* 9. Final Call To Action */}
      <FinalCTA />
      
    </div>
  );
}
