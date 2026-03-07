import React from 'react';
import Link from 'next/link';

const FinalCTASection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="surface-soft p-8 text-center md:p-12">
          <span className="eyebrow mb-3">Next Step</span>
          <h2 className="title-display mb-4 text-3xl font-bold md:text-5xl">Ready to Stabilise Booking Conversion?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-secondary-700">
            Start with a short application. If a clear opportunity exists, we scope the right 15 Day Booking Leak Fix or
            30 Day Booking System Reset immediately.
          </p>
          <Link href="/apply" className="btn-primary">
            Start Application
          </Link>
          <p className="mt-4 text-sm text-secondary-600">Application takes around 2 minutes.</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
