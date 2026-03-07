import type { Metadata } from 'next';
import PrivacyPolicy from '../../src/components/PrivacyPolicy';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prime Social',
  description: 'Read Prime Social privacy policy and data handling details.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    type: 'website',
    url: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
