'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '../utils/analytics';

const PageViewTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const search = typeof window !== 'undefined' ? window.location.search : '';
    trackPageView(`${pathname}${search}`);
  }, [pathname]);

  return null;
};

export default PageViewTracker;
