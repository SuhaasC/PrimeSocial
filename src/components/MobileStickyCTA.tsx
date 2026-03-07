'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackButtonClick } from '../utils/analytics';

const MobileStickyCTA: React.FC = () => {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <div className="pointer-events-auto mx-auto max-w-md">
        <Link
          href="/apply"
          className="btn-primary w-full justify-center text-center shadow-xl shadow-primary-900/30"
          onClick={() => trackButtonClick('Apply for a Booking Review', 'Sticky Mobile CTA')}
        >
          Apply for a Booking Review
        </Link>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
