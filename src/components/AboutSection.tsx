import React from 'react';
import { FaCheckCircle, FaHeart, FaShieldAlt } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              About Prime Social
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We're a boutique digital marketing agency with one mission: 
              helping premium businesses build sustainable, profitable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Story */}
            <div>
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Meet Suhaas, Founder
              </h3>
              <div className="prose prose-lg text-secondary-600 space-y-4">
                <p>
                  "I'm Suhaas, founder of Prime Social. After working with dozens of 
                  businesses and seeing the same marketing struggles 
                  time and again, I knew there had to be a better way."
                </p>
                <p>
                  "Most agencies treat businesses like any other company. But each industry 
                  is different. It requires understanding of regulations, customer psychology, 
                  and the unique journey from discovery to conversion."
                </p>
                <p>
                  "That's why we built Prime Social, to be the agency that truly 
                  understands your business and delivers results that matter."
                </p>
              </div>

              {/* Personal Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-accent-100 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600">50+</div>
                  <div className="text-sm text-secondary-600">Clients Helped</div>
                </div>
                <div className="text-center p-4 bg-accent-100 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600">4+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-56 h-56 bg-white rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden shadow-lg">
                    <img 
                      src="/headshot.png" 
                      alt="Suhaas - Founder of Prime Social" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const icon = document.createElement('div');
                          icon.innerHTML = '<svg class="w-24 h-24 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>';
                          parent.appendChild(icon);
                        }
                      }}
                    />
                  </div>
                  <div className="mt-6">
                    <h4 className="text-2xl font-bold text-secondary-700 mb-2">Suhaas C</h4>
                    <p className="text-lg text-secondary-600 font-medium mb-2">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-primary-800 text-center mb-12">
              Our Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaCheckCircle className="w-8 h-8 text-accent-500" />
                </div>
                <h4 className="text-xl font-semibold text-primary-800 mb-3">Results-Driven</h4>
                <p className="text-secondary-600">
                  We measure success by your business growth, not just vanity metrics. 
                  Every strategy is designed to drive real results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaHeart className="w-8 h-8 text-accent-500" />
                </div>
                <h4 className="text-xl font-semibold text-primary-800 mb-3">Partnership-First</h4>
                <p className="text-secondary-600">
                  We're not just your agency, we're your growth partner. Your success 
                  is our success, and we're invested in your long-term growth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaShieldAlt className="w-8 h-8 text-accent-500" />
                </div>
                <h4 className="text-xl font-semibold text-primary-800 mb-3">Trust & Transparency</h4>
                <p className="text-secondary-600">
                  We believe in complete transparency. You'll always know what we're doing, 
                  why we're doing it, and how it's performing.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          {/* <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-100 to-primary-400 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-lg text-secondary-600 mb-6">
                Let's discuss how Prime Social can help your business achieve 
                the growth you've been looking for.
              </p>
              <a 
                href="https://calendly.com/suhaas-primesocial/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schedule Your Free Consultation
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
