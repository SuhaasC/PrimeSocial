import React from 'react';
import { FaCheck } from 'react-icons/fa';

const deepDiveFocus = [
  'End-to-end patient handling across larger teams',
  'Confirmation and reminder sequencing across locations',
  'Reactivation process for unbooked and lapsed enquiries',
  'Alignment between paid ads, front desk, and booking operations',
];

const AboutSection: React.FC = () => {
  return (
    <section id="thirty-day" className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="eyebrow mb-3">30 Day Booking System Reset</span>
          <h2 className="title-display mb-4 text-3xl font-bold md:text-5xl">When 30 Days Is the Better Fit</h2>
          <p className="text-lg leading-relaxed text-secondary-700">
            Choose the 30 Day Booking System Reset when conversion issues are spread across teams, locations, and handoffs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="surface p-7 md:p-8">
            <h3 className="mb-5 text-2xl font-bold text-secondary-900">What the 30 Day Booking System Reset covers</h3>
            <ul className="space-y-4">
              {deepDiveFocus.map((item) => (
                <li key={item} className="flex gap-3">
                  <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-primary-700" />
                  <span className="text-secondary-700">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="space-y-4">
            <div className="surface-soft p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-500">Who this is for</p>
              <h4 className="mb-2 text-xl font-bold text-secondary-900">Best for broader system instability</h4>
              <p className="text-secondary-700">
                Multiple steps in the enquiry-to-booking journey are inconsistent and need coordinated correction.
              </p>
            </div>

            <div className="surface p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-500">What you leave with</p>
              <h4 className="mb-2 text-xl font-bold text-secondary-900">A stable cross-team booking rhythm</h4>
              <p className="text-secondary-700">
                Your clinics operate with aligned standards across response, follow-up, confirmation, and reactivation.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
