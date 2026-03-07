type GtagFn = (command: string, eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

const sendGtagEvent = (eventName: string, params: Record<string, unknown>) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
};

export const trackPageView = (path: string, title?: string) => {
  sendGtagEvent('page_view', {
    page_path: path,
    page_title: title || (typeof document !== 'undefined' ? document.title : undefined),
  });
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  sendGtagEvent(action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`);
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

export const trackLeadGenerated = (label = 'Booking Review Application') => {
  sendGtagEvent('generate_lead', {
    currency: 'GBP',
    value: 1,
    event_category: 'conversion',
    event_label: label,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
};

export const trackSectionView = (sectionId: string) => {
  trackEvent('section_view', 'engagement', sectionId);
};

export const trackFormStart = (formName: string) => {
  trackEvent('form_start', 'form', formName);
};

export const trackFormStepView = (formName: string, step: number) => {
  trackEvent('form_step_view', 'form', `${formName} - Step ${step}`, step);
};

export const trackFormSubmitAttempt = (formName: string) => {
  trackEvent('form_submit_attempt', 'form', formName);
};

export const trackFormSubmitSuccess = (formName: string) => {
  trackEvent('form_submit_success', 'form', formName);
};

export const trackThankYouView = (pageName: string) => {
  trackEvent('thank_you_view', 'conversion', pageName);
};
