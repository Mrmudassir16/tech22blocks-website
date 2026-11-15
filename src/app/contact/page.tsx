import React from 'react';
import type { Metadata } from 'next';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us — Partner with Tech22Blocks',
  description: 'Get in touch with Tech22Blocks (RRK Software Technologies Private Limited). Discuss software development, mobile apps, or custom AI solutions with our founders.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
