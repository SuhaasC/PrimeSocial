import React from 'react';
import { FaLayerGroup, FaSearch, FaWrench } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch className="h-6 w-6" />,
    title: 'Review',
    description:
      'We audit response times, follow-up rhythm, call handling, confirmations, and no-show behaviour to locate the highest-impact breakdown.',
  },
  {
    icon: <FaWrench className="h-6 w-6" />,
    title: 'Correct',
    description:
      'We fix the bottleneck directly, whether it sits in response speed, follow-up structure, missed-call recovery, or booking confirmation.',
  },
  {
    icon: <FaLayerGroup className="h-6 w-6" />,
    title: 'Embed',
    description:
      'We convert the fix into a practical operating standard so your team can execute it consistently without relying on individual memory.',
  },
];

const ProofSection: React.FC = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow mb-3">Method</span>
          <h2 className="title-display mb-4 text-3xl font-bold md:text-5xl">Review. Correct. Embed.</h2>
          <p className="text-lg leading-relaxed text-secondary-700">
            This is the process behind both services. The timeline changes by scope, but the method stays the same.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="surface p-7 md:p-8">
              <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 text-primary-700">{step.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-secondary-900">{step.title}</h3>
              <p className="leading-relaxed text-secondary-700">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
