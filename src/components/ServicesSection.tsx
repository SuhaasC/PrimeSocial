import React from 'react';
import { FaCheckCircle, FaMinusCircle } from 'react-icons/fa';

const doItems = [
  'Map your enquiry-to-appointment workflow end to end',
  'Pinpoint the highest-impact conversion breakdown',
  'Install a practical follow-up and call-recovery structure',
  'Embed booking standards your team can repeat daily',
];

const dontItems = [
  'Sell generic marketing retainers',
  'Push vanity metrics disconnected from booked revenue',
  'Ask you to increase ad spend before fixing operations',
  'Leave fixes as a strategy doc no one implements',
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="eyebrow mb-3">Where We Fit</span>
          <h2 className="title-display mb-4 text-3xl font-bold md:text-5xl">Operational Booking Optimisation</h2>
          <p className="text-lg leading-relaxed text-secondary-700">
            We are not replacing your marketing team. We are strengthening the exact system that turns existing enquiries
            into confirmed appointments.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface p-7 md:p-8">
            <h3 className="mb-5 text-2xl font-bold text-secondary-900">What We Do</h3>
            <ul className="space-y-4">
              {doItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary-700" />
                  <span className="text-secondary-700">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-soft p-7 md:p-8">
            <h3 className="mb-5 text-2xl font-bold text-secondary-900">What We Don&apos;t Sell</h3>
            <ul className="space-y-4">
              {dontItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <FaMinusCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent-600" />
                  <span className="text-secondary-700">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
