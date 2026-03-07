import type { Metadata } from 'next';
import ApplicationFormSection from '../../src/components/ApplicationFormSection';

export const dynamic = 'force-static';
const applyPreviewImage = '/linkedin-profile.png';

export const metadata: Metadata = {
  title: 'Apply for a Booking Review | Prime Social',
  description:
    'Apply for Prime Social\'s booking review for UK clinics. We assess your enquiry-to-appointment flow and recommend a 15 Day Booking Leak Fix or 30 Day Booking System Reset.',
  alternates: {
    canonical: '/apply',
  },
  openGraph: {
    type: 'website',
    url: '/apply',
    title: 'Apply for a Booking Review | Prime Social',
    description: 'Submit your clinic application in around 2 minutes.',
    images: [
      {
        url: applyPreviewImage,
        width: 800,
        height: 800,
        alt: 'Prime Social booking review application',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply for a Booking Review | Prime Social',
    description: 'Submit your clinic application in around 2 minutes.',
    images: [applyPreviewImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ApplyPage() {
  return (
    <main className="pt-6 md:pt-8">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-3">Booking Review Application</span>
          <h1 className="title-display mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Apply to Improve Your Enquiry-to-Appointment Conversion
          </h1>
          <p className="text-lg leading-relaxed text-secondary-700 md:text-xl">
            This is for UK clinics already running paid ads and looking to improve booking consistency and revenue
            predictability.
          </p>
        </div>
      </div>
      <ApplicationFormSection />
    </main>
  );
}
