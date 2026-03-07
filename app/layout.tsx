import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import PageViewTracker from '../src/components/PageViewTracker';
import EngagementTracker from '../src/components/EngagementTracker';

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID;
const hasValidGaId = typeof gaMeasurementId === 'string' && /^G-[A-Z0-9]+$/i.test(gaMeasurementId);
const sitePreviewImage = '/linkedin-profile.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://primesocial.agency'),
  title: 'Prime Social | Booking & Follow-Up Optimisation for UK Clinics',
  description:
    'Prime Social helps UK clinics turn more enquiries into confirmed patients through structured booking and follow-up optimisation.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Booking & Follow-Up Optimisation for UK Clinics',
    description: 'Turn more enquiries into confirmed patients in 15-30 days.',
    type: 'website',
    siteName: 'Prime Social',
    url: '/',
    images: [
      {
        url: sitePreviewImage,
        width: 800,
        height: 800,
        alt: 'Prime Social',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Booking & Follow-Up Optimisation for UK Clinics',
    description: 'Turn more enquiries into confirmed patients in 15-30 days.',
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
        {hasValidGaId && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
        )}
        {hasValidGaId && (
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', { send_page_view: false });`}
          </Script>
        )}
        <PageViewTracker />
        <EngagementTracker />
        <div className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
