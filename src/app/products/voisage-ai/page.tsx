import React from 'react';
import type { Metadata } from 'next';
import VoiSageProductPage from '@/components/products/VoiSageProductPage';

export const metadata: Metadata = {
  title: 'VoiSage AI — Autonomous Voice Intelligence for Unknown Calls | Tech22Blocks',
  description:
    'VoiSage AI answers unknown incoming calls in real time, screens out spam, extracts caller intent, and dispatches instant WhatsApp executive briefs. Official site: https://voisage.in/.',
};

export default function VoiSageRoutePage() {
  return <VoiSageProductPage />;
}
