import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Patient-Booking Website",
      tagline: "A site built for speed, trust, and conversion, not just pretty design.",
      description: "Your website is often the first impression potential patients have of your clinic. We build sites that don't just look good but also convert visitors into booked appointments.",
      features: [
        "Mobile-first, fast-loading design",
        "GDPR-compliant forms and security",
        "Local SEO optimization ready",
        "Premium, trustworthy aesthetic",
        "Conversion-focused user experience"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Growth Engine",
      tagline: "Your clinic becomes the trusted choice in your area.",
      description: "Build an unbeatable reputation through strategic content marketing, review management, and local SEO that positions you as the authority in your market.",
      features: [
        "Google Business Profile optimization",
        "Automated review generation system",
        "SEO-optimized blog content",
        "Social media management",
        "Local search domination strategy"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Advertising Accelerator",
      tagline: "Fill your schedule with high-ticket patients through precision ads.",
      description: "Our data-driven advertising approach targets the right patients at the right time, ensuring maximum ROI and consistent patient flow.",
      features: [
        "30-day pilot campaign testing",
        "Google & Facebook ad management",
        "Transparent performance reporting",
        "ROI-focused optimization",
        "High-value patient targeting"
      ],
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            The Prime Social Growth System
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Three integrated services that work together to create a steady stream of high-value patients.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`md:flex items-center gap-12 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-lg text-accent-500 font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 mt-8 md:mt-0">
                  <div className="rounded-xl overflow-hidden h-52 md:h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              How It All Works Together
            </h3>
            <p className="text-lg text-secondary-600 mb-6">
              Your website attracts visitors, your reputation builds trust, and your ads accelerate growth. 
              It's a complete system designed for clinic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://calendly.com/suhaas-primesocial/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center"
              >
                See How It Works for Your Clinic
              </a>
              <a 
                href="mailto:contact@primesocial.agency" 
                className="btn-secondary w-full sm:w-auto text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
