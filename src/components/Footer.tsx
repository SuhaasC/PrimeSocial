import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IconBrandX } from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 border-t border-secondary-200 bg-secondary-900 text-secondary-200">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image src="/PSLogo.png" alt="Prime Social" width={280} height={90} className="mb-4 h-20 w-auto" />
            <p className="max-w-xl leading-relaxed text-secondary-300">
              Prime Social helps UK clinics improve enquiry-to-appointment conversion through structured booking and
              follow-up optimisation.
            </p>
            <p className="mt-4 text-sm text-secondary-400">contact@primesocial.agency</p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://x.com/primesocial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prime Social on X"
                className="text-secondary-300 transition-colors hover:text-accent-300"
              >
                <IconBrandX className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/prime-social-agency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prime Social on LinkedIn"
                className="text-secondary-300 transition-colors hover:text-accent-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent-300">Navigate</h4>
            <ul className="space-y-2 text-sm text-secondary-300">
              <li>
                <Link href="/#gap" className="transition-colors hover:text-accent-200">
                  The Gap
                </Link>
              </li>
              <li>
                <Link href="/#process" className="transition-colors hover:text-accent-200">
                  Method
                </Link>
              </li>
              <li>
                <Link href="/#fifteen-day" className="transition-colors hover:text-accent-200">
                  15-Day Service
                </Link>
              </li>
              <li>
                <Link href="/#thirty-day" className="transition-colors hover:text-accent-200">
                  30-Day Service
                </Link>
              </li>
              <li>
                <Link href="/apply" className="transition-colors hover:text-accent-200">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent-300">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-300">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-accent-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-accent-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary-700 pt-6 text-sm text-secondary-400">
          © 2026 Prime Social. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
