import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COMPANY } from '@/data/company';
import { DETAILED_SERVICES } from '@/data/serviceDetails';
import ServiceDetailTemplate from '@/components/services/ServiceDetailTemplate';
import MobileAppServicePage from '@/components/services/MobileAppServicePage';
import WebAppServicePage from '@/components/services/WebAppServicePage';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return COMPANY.services.map((svc) => ({
    slug: svc.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = COMPANY.services.find((s) => s.id === params.slug);
  const detailed = DETAILED_SERVICES[params.slug];

  if (!service && !detailed) {
    return {
      title: 'Service Not Found — Tech22Blocks',
    };
  }

  const title = detailed ? detailed.hero.title : service?.title;
  const description = detailed ? detailed.hero.description : service?.shortDesc;

  return {
    title: `${title} — Tech22Blocks`,
    description,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  if (params.slug === 'mobile-applications') {
    return <MobileAppServicePage />;
  }

  if (params.slug === 'website-development') {
    return <WebAppServicePage />;
  }

  const detailedData = DETAILED_SERVICES[params.slug];

  if (!detailedData) {
    notFound();
  }

  return <ServiceDetailTemplate data={detailedData} />;
}
