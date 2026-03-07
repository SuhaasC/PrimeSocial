import React from 'react';
import { FaCheck } from 'react-icons/fa';

const sprintFocus = [
  'End-to-end diagnostic to isolate the highest-impact booking breakdown',
  'Direct fix of one core bottleneck in response, follow-up, or confirmations',
  'Practical call-recovery and follow-up standards for daily team use',
  'Short handover so execution stays consistent after implementation',
];

const FifteenDaySection: React.FC = () => {
  return (
    <section id="fifteen-day" className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-secondary-700">
          Two fixed engagements depending on how complex the booking issue is.
        </p>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="eyebrow mb-3">15 Day Booking Leak Fix</span>
          <h2 className="title-display mb-4 text-3xl font-bold md:text-5xl">15 Day Booking Leak Fix</h2>
          <p className="text-lg leading-relaxed text-secondary-700">
            Choose the 15 Day Booking Leak Fix when one clear bottleneck is blocking confirmed appointments.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="surface p-7 md:p-8">
            <h3 className="mb-5 text-2xl font-bold text-secondary-900">What the 15 Day Booking Leak Fix covers</h3>
            <ul className="space-y-4">
              {sprintFocus.map((item) => (
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
              <h4 className="mb-2 text-xl font-bold text-secondary-900">Best for one clear operational leak</h4>
              <p className="text-secondary-700">
                You can point to a specific issue and need a fast fix that your team can run confidently.
              </p>
            </div>

            <div className="surface p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-500">What you leave with</p>
              <h4 className="mb-2 text-xl font-bold text-secondary-900">A tested booking standard your team can repeat</h4>
              <p className="text-secondary-700">
                The bottleneck is corrected and embedded into day-to-day handling, not left as strategy notes.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FifteenDaySection;
