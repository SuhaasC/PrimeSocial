import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IconBrandX } from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/PSLogo.png" 
                  alt="Prime Social" 
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-secondary-300 mb-4 max-w-md">
                We help premium businesses build sustainable, profitable growth through 
                strategic digital marketing that delivers real results.
              </p>
              <p className="text-secondary-400 text-sm mb-4">
                Prime Social is a brand of Aquilastrat
              </p>
              <p className="text-secondary-400 text-sm mb-4">
                <a href="mailto:contact@primesocial.agency" className="hover:text-accent-500 transition-colors duration-200">
                  contact@primesocial.agency
                </a>
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/primesocial" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-accent-500 transition-colors duration-200">
                  <IconBrandX className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/prime-social-agency/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-accent-500 transition-colors duration-200">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent-500">Services</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><a href="#services" className="hover:text-accent-500 transition-colors duration-200">Patient-Booking Websites</a></li>
                <li><a href="#services" className="hover:text-accent-500 transition-colors duration-200">Growth Engine</a></li>
                <li><a href="#services" className="hover:text-accent-500 transition-colors duration-200">Advertising Accelerator</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent-500">Company</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><a href="#about" className="hover:text-accent-500 transition-colors duration-200">About Us</a></li>
                <li><a href="#results" className="hover:text-accent-500 transition-colors duration-200">Results</a></li>
                <li><a href="https://calendly.com/suhaas-primesocial/30min" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent-500">Legal</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><a href="/privacy" className="hover:text-accent-500 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent-500 transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
            <p className="text-secondary-400 text-sm">
              © 2025 Prime Social by Aquilastrat. All rights reserved. | 
              <a href="/privacy" className="hover:text-accent-500 transition-colors duration-200 ml-2">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-accent-500 transition-colors duration-200 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
