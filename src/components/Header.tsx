'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { trackButtonClick } from '../utils/analytics';

const navLinks = [
  { href: '/#gap', label: 'The Gap' },
  { href: '/#process', label: 'Method' },
  { href: '/#fifteen-day', label: '15-Day Leak Fix' },
  { href: '/#thirty-day', label: '30-Day System Reset' },
  { href: '/#outcomes', label: 'Outcomes' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200/80 bg-white/85 backdrop-blur-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center" aria-label="Prime Social home">
            <Image
              src="/PSLogo.png"
              alt="Prime Social"
              width={320}
              height={94}
              className="h-20 w-auto md:h-24"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-secondary-200 bg-white px-2 py-2 shadow-sm md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-secondary-700 transition-colors duration-200 hover:bg-accent-50 hover:text-primary-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="btn-primary ml-1 px-6 py-2.5 text-sm"
              onClick={() => trackButtonClick('Apply for a Booking Review', 'Header')}
            >
              Apply for a Booking Review
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-xl p-2 text-secondary-800 transition-colors duration-200 hover:bg-accent-50 hover:text-primary-700 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-secondary-200 pb-4 pt-3 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-secondary-700 hover:bg-accent-50 hover:text-primary-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/apply"
                className="btn-primary mt-2 text-center"
                onClick={() => {
                  setIsMenuOpen(false);
                  trackButtonClick('Apply for a Booking Review', 'Mobile Menu');
                }}
              >
                Apply for a Booking Review
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
