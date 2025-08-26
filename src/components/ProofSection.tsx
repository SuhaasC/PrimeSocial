import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const ProofSection: React.FC = () => {
  const testimonials = [{
    quote: "Very professional service and realistic in approach. I've been receiving their input for a few years now and would definitely recommend them.",
    author: "Dr Prashanth Kalale",
    clinic: "Medical Professional",
    location: "",
    results: "Long-term partnership"
  },
  {
    quote: "Had a great working experience. Very creative, responsive, and quick. Would definitely recommend to anyone who needs professional service.",
    author: "Dr Richa Mishra",
    clinic: "Medical Professional",
    location: "",
    results: "Professional excellence"
  },
    {
      quote: "Suhaas' work is flawless. I've been using his services for the past 1.5 years, he was a major factor in the founding of my company.",
      author: "Kausar Salma",
      clinic: "Business Owner",
      location: "",
      results: "1.5+ years of partnership"
    },
    {
      quote: "The best consultant I have ever met. Honest, dedicated, and always delivers.",
      author: "Ashlesh R",
      clinic: "Client",
      location: "",
      results: "Consistent delivery"
    },
    {
      quote: "Great thinker and performer with very unique design ideas and strategies. He upgraded our company with a modern touch and future-proofed our business.",
      author: "Qualitek Engineers",
      clinic: "Engineering Company",
      location: "",
      results: "Business transformation"
    },
    
  ];

  // const caseStudies = [
  //   {
  //     clinic: "Dermatology Associates",
  //     metric: "37%",
  //     improvement: "more bookings in 60 days",
  //     details: "Website redesign + local SEO optimization"
  //   },
  //   {
  //     clinic: "Aesthetic MedSpa",
  //     metric: "52%",
  //     improvement: "increase in online reviews",
  //     details: "Review generation system + reputation management"
  //   },
  //   {
  //     clinic: "Cosmetic Clinic",
  //     metric: "41%",
  //     improvement: "higher conversion rate",
  //     details: "Conversion optimization + targeted advertising"
  //   }
  // ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    if (isMobile) {
      // Mobile: move 1 testimonial at a time
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else {
      // Desktop: move 3 testimonials at a time
      setCurrentSlide((prev) => Math.min(prev + 3, totalSlides - 1));
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      // Mobile: move 1 testimonial at a time
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    } else {
      // Desktop: move 3 testimonials at a time
      setCurrentSlide((prev) => Math.max(prev - 3, 0));
    }
  };

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getVisibleTestimonials = () => {
    if (isMobile) {
      // Mobile: show 1 testimonial at a time
      return [testimonials[currentSlide]];
    } else {
      // Desktop: show 3 testimonials in a row
      const startIndex = currentSlide;
      const endIndex = Math.min(startIndex + 3, testimonials.length);
      return testimonials.slice(startIndex, endIndex);
    }
  };

  return (
    <section id="results" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Proof & Results
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients are achieving.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary-800 text-center mb-12">
            What Our Clients Say
          </h3>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white border border-secondary-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <FaChevronLeft className="w-6 h-6 text-secondary-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white border border-secondary-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <FaChevronRight className="w-6 h-6 text-secondary-600" />
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={index} className="bg-secondary-50 rounded-xl p-8 hover:shadow-lg transition-all duration-500 transform transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-accent-500" />
                    ))}
                  </div>
                  <blockquote className="text-secondary-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-secondary-100 pt-4">
                    <p className="font-semibold text-primary-800">{testimonial.author}</p>
                    <p className="text-sm text-secondary-600">{testimonial.clinic}</p>
                    {testimonial.location && <p className="text-sm text-secondary-500">{testimonial.location}</p>}
                    <p className="text-accent-500 font-semibold mt-2">{testimonial.results}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {isMobile ? (
                // Mobile: show individual testimonial indicators
                Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-primary-800' : 'bg-secondary-300'
                    }`}
                  />
                ))
              ) : (
                // Desktop: show page indicators (groups of 3)
                Array.from({ length: Math.ceil(totalSlides / 3) }, (_, pageIndex) => {
                  const startIndex = pageIndex * 3;
                  const isCurrentPage = currentSlide >= startIndex && currentSlide < startIndex + 3;
                  return (
                    <button
                      key={pageIndex}
                      onClick={() => setCurrentSlide(startIndex)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        isCurrentPage ? 'bg-primary-800' : 'bg-secondary-300'
                      }`}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary-800 text-center mb-12">
            Real Results from Real Clients
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-200 rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-primary-800 mb-2">
                  {study.metric}
                </div>
                <p className="text-lg text-secondary-700 mb-3">
                  {study.improvement}
                </p>
                <p className="text-sm text-secondary-600 mb-4">
                  {study.clinic}
                </p>
                <p className="text-primary-700 font-medium">
                  {study.details}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="text-center">
          <a 
            href="https://calendly.com/suhaas-primesocial/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join Our Success Stories
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProofSection;
