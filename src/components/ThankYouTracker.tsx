'use client';

import { useEffect } from 'react';
import { trackThankYouView } from '../utils/analytics';

const ThankYouTracker = () => {
  useEffect(() => {
    trackThankYouView('Apply Thank You');
  }, []);

  return null;
};

export default ThankYouTracker;
