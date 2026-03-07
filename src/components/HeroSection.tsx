'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { trackButtonClick } from '../utils/analytics';

const HeroSection: React.FC = () => {
  return (
    <section id="top" className="section-padding relative overflow-hidden pt-12 md:pt-16">
      <div className="grid-faint absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-accent-200/35 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary-200/45 blur-3xl" aria-hidden="true" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="title-display mb-7 text-4xl font-extrabold leading-[1.15] tracking-[0.01em] md:text-6xl">
            Turn More Enquiries Into Confirmed Patients.
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-secondary-700 md:text-xl md:leading-9">
            You already generate demand. The real leak is operational, between first enquiry and confirmed booking.
            We fix these gaps with a Review, Correct, Embed method delivered as either a 15 Day Booking Leak Fix or a
            30 Day Booking System Reset.
          </p>

          <div className="mb-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/apply"
              className="btn-primary gap-2"
              onClick={() => trackButtonClick('Apply for a Booking Review', 'Hero')}
            >
              Apply for a Booking Review
              <FaArrowRight className="h-4 w-4" />
            </Link>
            <a href="#process" className="btn-secondary">
              See the Method
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
