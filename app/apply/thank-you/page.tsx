import type { Metadata } from 'next';
import Link from 'next/link';
import ThankYouTracker from '../../../src/components/ThankYouTracker';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Application Received | Prime Social',
  description: 'Thank you for applying. We will review your submission and get back to you shortly.',
  alternates: {
    canonical: '/apply/thank-you',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ApplyThankYouPage() {
  return (
    <main className="section-padding">
      <ThankYouTracker />
      <section className="container-custom">
        <div className="surface-soft mx-auto max-w-3xl p-8 text-center md:p-12">
          <span className="eyebrow mb-3">Application Received</span>
          <h1 className="title-display mb-4 text-3xl font-bold md:text-5xl">Thanks. We&apos;ve got your application.</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-secondary-700">
            Our team will review your enquiry-to-booking context and reach out shortly with next steps if there is a clear fit.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Back to Homepage
            </Link>
            <Link href="/apply" className="btn-secondary">
              Submit Another Application
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
