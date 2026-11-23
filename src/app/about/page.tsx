import React from 'react';
import type { Metadata } from 'next';
import AboutHeroWall from '@/components/about/AboutHeroWall';
import AboutPartnerIntro from '@/components/about/AboutPartnerIntro';
import AboutMissionPrism from '@/components/about/AboutMissionPrism';
import AboutGrowthTimeline from '@/components/about/AboutGrowthTimeline';
import AboutWhatMakesDifferent from '@/components/about/AboutWhatMakesDifferent';
import AboutTwoPillars from '@/components/about/AboutTwoPillars';
import AboutLeadershipTeam from '@/components/about/AboutLeadershipTeam';
import FoundersSection from '@/components/FoundersSection';
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

      {/* 4. Film Reel: Growth Timeline */}
      <AboutGrowthTimeline />

      {/* 5. What Makes Tech22Blocks Different */}
      <AboutWhatMakesDifferent />

      {/* 6. What We Do: Two Core Business Models */}
      <AboutTwoPillars />

      {/* 7. Leadership Team (4 Flip Cards with LinkedIn Buttons) */}
      <AboutLeadershipTeam />

      {/* 8. The Founders Story (Father & Son Generational Perspective) */}
      <FoundersSection />

      {/* 9. Life @ Tech22Blocks */}
      <AboutCultureLife />

      {/* 10. Certifications & Recognition (MSME, DPIIT) */}
      <AboutCertifications />

      {/* 11. Final Call To Action */}
      <FinalCTA />
      
    </div>
  );
}
