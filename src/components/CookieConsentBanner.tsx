'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'cookie-consent';

const loadGoogleAnalytics = (gaId: string) => {
  if (typeof window === 'undefined') return;
  if ((window as { gtag?: () => void }).gtag) return;

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script1);

  const w = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  const gtag = (...args: unknown[]) => w.dataLayer?.push(args);
  w.gtag = gtag;

  gtag('js', new Date());
  gtag('config', gaId, { send_page_view: false });

  gtag('event', 'page_view', {
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
  });
};

type CookieConsentBannerProps = {
  gaId: string;
};

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ gaId }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !gaId) return;

    const stored = localStorage.getItem(CONSENT_KEY);

    if (stored === 'accepted') {
      loadGoogleAnalytics(gaId);
      setShowBanner(false);
    } else if (stored === 'declined') {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }

    const handleOpenPreferences = () => {
      setShowBanner(true);
    };

    window.addEventListener('cookie-preferences-open', handleOpenPreferences);
    return () => window.removeEventListener('cookie-preferences-open', handleOpenPreferences);
  }, [mounted, gaId]);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadGoogleAnalytics(gaId);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setShowBanner(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-secondary-200 bg-white p-4 shadow-lg md:p-6"
    >
      <div className="container-custom">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="text-sm leading-relaxed text-secondary-700 md:text-base">
            We use cookies to understand how visitors use our site and to improve your experience. By clicking Accept,
            you consent to our use of analytics. You can change your mind at any time via{' '}
            <Link href="/privacy" className="font-medium text-primary-700 underline hover:text-primary-800">
              Cookie preferences
            </Link>
            .
          </p>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:gap-3">
            <button
              type="button"
              onClick={handleDecline}
              className="rounded-xl border border-secondary-300 bg-white px-6 py-2.5 text-sm font-semibold text-secondary-700 transition-colors hover:border-secondary-400 hover:bg-secondary-50"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="rounded-xl bg-primary-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
