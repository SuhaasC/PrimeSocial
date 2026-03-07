'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';
import {
  trackButtonClick,
  trackFormStart,
  trackFormStepView,
  trackFormSubmit,
  trackFormSubmitAttempt,
  trackFormSubmitSuccess,
  trackLeadGenerated,
} from '../utils/analytics';

type FormData = {
  name: string;
  clinicName: string;
  email: string;
  phone: string;
  monthlyAdSpend: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type StepNumber = 1 | 2 | 3;

const MONTHLY_AD_SPEND_OPTIONS = ['Under £2,000', '£2,000 - £4,999', '£5,000 - £9,999', '£10,000+'];

const INITIAL_FORM: FormData = {
  name: '',
  clinicName: '',
  email: '',
  phone: '',
  monthlyAdSpend: '',
  message: '',
  website: '',
};

const FORM_NAME = 'Booking Review Application';
const TOTAL_STEPS = 3;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stepDetails = [
  { step: 1 as StepNumber, label: 'Clinic', title: 'Clinic Details' },
  { step: 2 as StepNumber, label: 'Contact', title: 'Contact & Budget' },
  { step: 3 as StepNumber, label: 'Context', title: 'Booking Context' },
];

const stepFields: Record<StepNumber, Array<keyof FormData>> = {
  1: ['name', 'clinicName'],
  2: ['email', 'phone', 'monthlyAdSpend'],
  3: ['message'],
};

const validateField = (field: keyof FormData, data: FormData): string | undefined => {
  if (field === 'name' && !data.name.trim()) return 'Name is required.';
  if (field === 'clinicName' && !data.clinicName.trim()) return 'Clinic name is required.';

  if (field === 'email') {
    if (!data.email.trim()) return 'Email is required.';
    if (!emailRegex.test(data.email)) return 'Enter a valid email address.';
  }

  if (field === 'phone' && !data.phone.trim()) return 'Phone is required.';
  if (field === 'monthlyAdSpend' && !data.monthlyAdSpend) return 'Please select your monthly ad spend.';

  if (field === 'message') {
    if (!data.message.trim()) return 'Message is required.';
    if (data.message.trim().length < 20) return 'Message should be at least 20 characters.';
  }

  return undefined;
};

const validateByFields = (fields: Array<keyof FormData>, data: FormData): FormErrors => {
  const errors: FormErrors = {};

  fields.forEach((field) => {
    const error = validateField(field, data);
    if (error) errors[field] = error;
  });

  return errors;
};

const validateAll = (data: FormData): FormErrors =>
  validateByFields(['name', 'clinicName', 'email', 'phone', 'monthlyAdSpend', 'message'], data);

const getFirstInvalidStep = (errors: FormErrors): StepNumber => {
  if (stepFields[1].some((field) => errors[field])) return 1;
  if (stepFields[2].some((field) => errors[field])) return 2;
  return 3;
};

const ApplicationFormSection: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [startedTracking, setStartedTracking] = useState(false);

  useEffect(() => {
    trackFormStepView(FORM_NAME, currentStep);
  }, [currentStep]);

  const onChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const onStart = () => {
    if (startedTracking) return;
    setStartedTracking(true);
    trackFormStart(FORM_NAME);
  };

  const onNextStep = () => {
    const currentStepErrors = validateByFields(stepFields[currentStep], formData);
    setErrors((prev) => ({ ...prev, ...currentStepErrors }));
    if (Object.keys(currentStepErrors).length > 0) return;

    const nextStep = Math.min(currentStep + 1, TOTAL_STEPS) as StepNumber;
    setCurrentStep(nextStep);
    trackButtonClick('Continue', `Application Form - Step ${currentStep}`);
  };

  const onPreviousStep = () => {
    const previousStep = Math.max(currentStep - 1, 1) as StepNumber;
    setCurrentStep(previousStep);
    trackButtonClick('Back', `Application Form - Step ${currentStep}`);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    trackFormSubmitAttempt(FORM_NAME);

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setCurrentStep(getFirstInvalidStep(validationErrors));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'We could not submit your application right now.');
      }

      trackFormSubmit(FORM_NAME);
      trackFormSubmitSuccess(FORM_NAME);
      trackLeadGenerated(FORM_NAME);
      setFormData(INITIAL_FORM);
      router.push('/apply/thank-you');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = (currentStep / TOTAL_STEPS) * 100;

  return (
    <section id="application-form" className="section-padding pt-10">
      <div className="container-custom">
        <div className="surface grid gap-8 p-6 md:p-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
          <div>
            <span className="eyebrow mb-3">Application</span>
            <h2 className="title-display mb-4 text-3xl font-bold md:text-5xl">Apply for a Booking Review</h2>
            <p className="mb-6 text-lg leading-relaxed text-secondary-700">
              We use this short application to confirm fit and prioritise clinics where booking conversion can be improved
              quickly.
            </p>

            <div className="space-y-3">
              <p className="chip w-full">
                <FaCheckCircle className="h-4 w-4 text-accent-600" />
                We onboard a limited number of clinics each month.
              </p>
              <p className="chip w-full">
                <FaCheckCircle className="h-4 w-4 text-accent-600" />
                If the opportunity is clear, we schedule a focused review call.
              </p>
              <p className="chip w-full">
                <FaCheckCircle className="h-4 w-4 text-accent-600" />
                We recommend a 15 Day Booking Leak Fix or 30 Day Booking System Reset.
              </p>
              <p className="chip w-full">
                <FaCheckCircle className="h-4 w-4 text-accent-600" />
                If there is no fit, we close it out clearly and quickly.
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            onFocusCapture={onStart}
            className="rounded-2xl border border-secondary-200 bg-secondary-50/85 p-5 md:p-6"
          >
            <h3 className="mb-2 text-2xl font-bold text-secondary-900">Application Form</h3>
            <p className="mb-4 text-sm text-secondary-600">Takes around 2 minutes. Every application is reviewed manually.</p>

            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '-10000px',
                top: 'auto',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
              }}
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => onChange('website', e.target.value)}
              />
            </div>

            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em] text-secondary-500">
                <span>
                  Step {currentStep} of {TOTAL_STEPS}
                </span>
                <span>{stepDetails[currentStep - 1].title}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary-200">
                <div
                  className="h-full rounded-full bg-primary-700 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs font-semibold">
                {stepDetails.map((step) => {
                  const isCompleted = step.step < currentStep;
                  const isActive = step.step === currentStep;
                  return (
                    <span
                      key={step.step}
                      className={`rounded-md px-2 py-1 text-center ${
                        isCompleted || isActive ? 'bg-primary-100 text-primary-800' : 'bg-secondary-100 text-secondary-500'
                      }`}
                    >
                      {step.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {currentStep === 1 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-secondary-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    className="w-full rounded-xl border border-secondary-300 bg-white px-4 py-3 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="clinicName" className="mb-1.5 block text-sm font-medium text-secondary-700">
                    Clinic Name
                  </label>
                  <input
                    id="clinicName"
                    type="text"
                    value={formData.clinicName}
                    onChange={(e) => onChange('clinicName', e.target.value)}
                    className="w-full rounded-xl border border-secondary-300 bg-white px-4 py-3 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                  {errors.clinicName && <p className="mt-1 text-sm text-red-600">{errors.clinicName}</p>}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-secondary-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => onChange('email', e.target.value)}
                    className="w-full rounded-xl border border-secondary-300 bg-white px-4 py-3 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-secondary-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => onChange('phone', e.target.value)}
                    className="w-full rounded-xl border border-secondary-300 bg-white px-4 py-3 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="monthlyAdSpend" className="mb-1.5 block text-sm font-medium text-secondary-700">
                    Monthly Ad Spend
                  </label>
                  <select
                    id="monthlyAdSpend"
                    value={formData.monthlyAdSpend}
                    onChange={(e) => onChange('monthlyAdSpend', e.target.value)}
                    className="w-full rounded-xl border border-secondary-300 bg-white px-4 py-3 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="">Select one</option>
                    {MONTHLY_AD_SPEND_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.monthlyAdSpend && <p className="mt-1 text-sm text-red-600">{errors.monthlyAdSpend}</p>}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-secondary-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => onChange('message', e.target.value)}
                  placeholder="Tell us where your booking process currently feels inconsistent."
                  className="w-full rounded-xl border border-secondary-300 bg-white px-4 py-3 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3">
                {currentStep > 1 && (
                  <button type="button" className="btn-secondary px-6 py-3" onClick={onPreviousStep}>
                    Back
                  </button>
                )}

                {currentStep < TOTAL_STEPS ? (
                  <button type="button" className="btn-primary" onClick={onNextStep}>
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                    onClick={() => trackButtonClick('Apply for a Booking Review', 'Application Form')}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                )}
              </div>
              <p className="text-xs text-secondary-600">Limited monthly intake to keep implementation quality high.</p>
            </div>

            {submitError && <p className="mt-4 text-sm text-red-700">{submitError}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
