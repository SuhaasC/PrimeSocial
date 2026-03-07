import React from 'react';
import { FaBolt, FaCalendarTimes, FaComments, FaPhoneSlash, FaUserClock } from 'react-icons/fa';

const issues = [
  {
    icon: <FaBolt className="h-6 w-6" />,
    title: 'Responses are delayed',
    description: 'High-intent enquiries cool off quickly when first contact is slow.',
  },
  {
    icon: <FaComments className="h-6 w-6" />,
    title: 'Follow-up is inconsistent',
    description: 'Without clear ownership, warm leads drift between team members.',
  },
  {
    icon: <FaPhoneSlash className="h-6 w-6" />,
    title: 'Missed calls are not recovered',
    description: 'Valuable calls go unrecovered because callback workflows are informal.',
  },
  {
    icon: <FaUserClock className="h-6 w-6" />,
    title: 'Patients hesitate and disappear',
    description: 'Small handling gaps stack up and reduce conversion week after week.',
  },
  {
    icon: <FaCalendarTimes className="h-6 w-6" />,
    title: 'No-shows create diary gaps',
    description: 'Weak confirmation and reminder structure leads to avoidable lost capacity.',
  },
];

const PainPointsSection: React.FC = () => {
  return (
    <section id="gap" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow mb-3">Where Revenue Leaks</span>
          <h2 className="title-display mb-5 text-3xl font-bold md:text-5xl">The Issue Is Usually Hand-off, Not Demand</h2>
          <p className="text-lg leading-relaxed text-secondary-700 md:text-xl">
            Many UK clinics already have paid traffic and enquiry volume. Revenue becomes unpredictable because the
            booking journey breaks between first contact and confirmed appointment.
          </p>
        </div>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg font-medium text-secondary-800">
          Most clinics lose patients between enquiry and confirmed appointment.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {issues.map((issue) => (
            <article key={issue.title} className="surface p-5">
              <div className="mb-4 inline-flex rounded-lg bg-accent-100 p-3 text-accent-700">{issue.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-secondary-900">{issue.title}</h3>
              <p className="text-sm leading-relaxed text-secondary-600">{issue.description}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-secondary-700">
          Individually these look small. Together they quietly suppress booked revenue.
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
