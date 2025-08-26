import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { trackButtonClick, trackExternalLink } from '../utils/analytics';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/PSLogo.png" 
              alt="Prime Social" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-secondary-600 hover:text-accent-500 transition-colors duration-200">
              Services
            </a>
            <a href="#results" className="text-secondary-600 hover:text-accent-500 transition-colors duration-200">
              Results
            </a>
            <a href="#about" className="text-secondary-600 hover:text-accent-500 transition-colors duration-200">
              About
            </a>
            
            <a 
              href="https://calendly.com/suhaas-primesocial/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => {
                trackButtonClick('Book Free Audit', 'Header');
                trackExternalLink('https://calendly.com/suhaas-primesocial/30min', 'Calendly - Header CTA');
              }}
            >
              Book Free Audit
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-secondary-600 hover:text-accent-500 hover:bg-secondary-50 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-secondary-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-secondary-600 hover:text-accent-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#results" 
                className="text-secondary-500 hover:text-accent-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </a>
              <a 
                href="#about" 
                className="text-secondary-600 hover:text-accent-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              
              <a 
                href="https://calendly.com/suhaas-primesocial/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center"
                onClick={() => {
                  setIsMenuOpen(false);
                  trackButtonClick('Book Free Audit', 'Mobile Menu');
                  trackExternalLink('https://calendly.com/suhaas-primesocial/30min', 'Calendly - Mobile Menu CTA');
                }}
              >
                Book Free Audit
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
