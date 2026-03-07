import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import PageViewTracker from '../src/components/PageViewTracker';
import EngagementTracker from '../src/components/EngagementTracker';
import CookieConsentBanner from '../src/components/CookieConsentBanner';

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID || 'G-ZNG30K47F9';
const hasValidGaId = typeof gaMeasurementId === 'string' && /^G-[A-Z0-9]+$/i.test(gaMeasurementId);
// Replace with '/og-image.png' once you add a 1200x630 image to public/
const sitePreviewImage = '/linkedin-profile.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://primesocial.agency'),
  title: 'Prime Social | Booking Leak Fix & Follow-Up Optimisation for UK Clinics',
  description:
    'Fix your clinic booking leak. Prime Social helps UK clinics turn more enquiries into confirmed patients through structured booking and follow-up optimisation.',
  keywords: ['booking leak', 'clinic enquiries', 'get more enquiries', 'UK clinics', 'enquiry conversion', 'booking optimisation'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prime Social | Booking Leak Fix for UK Clinics',
    description: 'Fix your clinic booking leak. Turn more enquiries into confirmed patients with our 15 Day or 30 Day engagement.',
    type: 'website',
    siteName: 'Prime Social',
    url: '/',
    images: [
      {
        url: sitePreviewImage,
        width: 1200,
        height: 630,
        alt: 'Prime Social - Booking Leak Fix for UK Clinics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Social | Booking Leak Fix for UK Clinics',
    description: 'Fix your clinic booking leak. Turn more enquiries into confirmed patients.',
    images: [sitePreviewImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <PageViewTracker />
        <EngagementTracker />
        <div className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        {hasValidGaId && <CookieConsentBanner gaId={gaMeasurementId} />}
      </body>
    </html>
  );
}
