import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const outcomes = [
  'New enquiries are handled quickly and consistently',
  'Follow-up no longer depends on who is on reception that day',
  'Missed calls are recovered through process, not chance',
  'Booking confirmations feel structured rather than informal',
  'No-show pressure reduces as reminders become systematic',
];

const WhyChooseSection: React.FC = () => {
  return (
    <section id="outcomes" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="eyebrow mb-3">Outcomes</span>
          <h2 className="title-display mb-4 text-3xl font-bold md:text-5xl">
            What Good Looks Like in Practice
          </h2>
          <p className="text-lg leading-relaxed text-secondary-700">
            Marketing doesn&apos;t need to get louder. Operations need to get tighter.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="surface p-7 md:p-8">
            <p className="mb-5 text-lg leading-relaxed text-secondary-700">
              When booking handling is clear and repeatable, fewer patients fall through the cracks. The result is not
              dramatic hype. It is steadier performance.
            </p>
            <ul className="space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent-600" />
                  <span className="text-secondary-700">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="surface-soft p-7 md:p-8">
            <h3 className="mb-4 text-2xl font-bold text-secondary-900">What clinic owners usually notice</h3>
            <div className="space-y-3 text-secondary-700">
              <p className="rounded-xl border border-secondary-200 bg-white px-4 py-3">A diary that feels steadier week to week.</p>
              <p className="rounded-xl border border-secondary-200 bg-white px-4 py-3">
                Fewer what happened to that patient moments.
              </p>
              <p className="rounded-xl border border-secondary-200 bg-white px-4 py-3">More confidence in booked-revenue visibility.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
