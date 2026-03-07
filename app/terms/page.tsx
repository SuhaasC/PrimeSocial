import type { Metadata } from 'next';
import TermsOfService from '../../src/components/TermsOfService';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Terms of Service | Prime Social',
  description: 'Read Prime Social terms of service.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    type: 'website',
    url: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsOfService />;
}
