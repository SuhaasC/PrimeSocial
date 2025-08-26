import React from 'react';
import { FaCheck } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Elegant Wave Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 Q300 100 600 200 T1200 200 V800 H0 Z" fill="url(#wave1)"/>
            <path d="M0 400 Q300 300 600 400 T1200 400 V800 H0 Z" fill="url(#wave2)"/>
            <path d="M0 600 Q300 500 600 600 T1200 600 V800 H0 Z" fill="url(#wave3)"/>
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#c1d6ff" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#fef08a" stopOpacity="0.05"/>
              </linearGradient>
              <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2c2e3a" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-accent-300 to-accent-400 transform rotate-45 opacity-20"></div>
        <div className="absolute top-48 left-20 w-16 h-16 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-15"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-secondary-300 to-secondary-400 transform rotate-12 opacity-15"></div>
        
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 58, 138, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 leading-tight mb-6">
            Steady Flow of{' '}
            <span className="text-accent-500">High-Value Patients.</span>{' '}
           <br /> Done-for-You.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-secondary-600 mb-10 leading-relaxed">
            We help clinics book <span className="font-semibold text-secondary-800">15-30 new patient appointments</span> every month
            without you lifting a finger on marketing.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="https://calendly.com/suhaas-primesocial/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Book Your Free Digital Audit
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-base text-secondary-500 mb-2">
              No commitment • 30-minute call • Actionable insight
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-accent-500">
            <p className="text-secondary-500 mb-4">Trusted by premium clinics across US & Canada</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary-600">
              <div className="flex items-center gap-2">
                <FaCheck className="w-5 h-5 text-accent-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-5 h-5 text-accent-500" />
                <span>Results Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="w-5 h-5 text-accent-500" />
                <span>Hands-Off Partnership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
