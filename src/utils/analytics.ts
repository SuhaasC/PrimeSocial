import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId?: string) => {
  // You'll need to replace this with your actual Google Analytics Measurement ID
  // It looks like: G-XXXXXXXXXX
  const GA_MEASUREMENT_ID = measurementId || 'G-Y3EFWF432J';
  
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
  } else {
    console.warn('Google Analytics not initialized - Please set your Measurement ID');
  }
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: title || document.title
  });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value
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

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('click', 'external_link', linkText || url);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
};
