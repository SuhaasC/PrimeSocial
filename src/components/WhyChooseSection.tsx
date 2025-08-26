import React from 'react';
import { FaBuilding, FaHeart, FaCalculator, FaBolt,  } from 'react-icons/fa';
import { IoMdClose, IoMdCheckmark } from "react-icons/io";

const WhyChooseSection: React.FC = () => {
  const advantages = [
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Clinic Specialists",
      description: "We only work with medical clinics. We understand your industry, regulations, and patient journey better than general agencies."
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Hands-Off Partnership",
      description: "We handle everything from strategy to execution. You focus on patient care while we handle all your marketing needs."
    },
    {
      icon: <FaCalculator className="w-8 h-8" />,
      title: "Crystal Clear ROI",
      description: "3-5 new patients cover our monthly fee. We provide transparent reporting so you always know your return on investment."
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Integrated System",
      description: "Website + Reviews + Ads work together as one cohesive system. No more disconnected marketing efforts."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Why Choose Prime Social?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We're not just another marketing agency. We're your growth partner, 
            specializing exclusively in helping clinics like yours succeed.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex gap-6">
              <div className="text-accent-500 flex-shrink-0">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scarcity Section */}
        <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Limited Availability
            </h3>
            <p className="text-xl mb-6 opacity-90">
              We only onboard <span className="font-bold">2 new clinics per month</span> to ensure 
              we can deliver exceptional results for every partner.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold mb-2">
                Current Month Status:
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-green-400 rounded-full w-4 h-4"></div>
                <span className="font-medium">1 spot remaining</span>
              </div>
            </div>
            <a 
              href="https://calendly.com/suhaas-primesocial/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-secondary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Secure Your Spot Today
            </a>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary-800 text-center mb-8">
            Prime Social vs. Other Agencies
          </h3>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-secondary-200 justify-center">
              <div className="p-6 text-left flex items-center flex-col">
                <h4 className="font-semibold text-primary-800 mb-4">Other Agencies</h4>
                <ul className="text-sm text-secondary-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <IoMdCheckmark className="w-4 h-4 text-accent-500" />
                    <span>General marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>No clinic expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>Hidden costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>Poor communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>Unclear ROI</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 text-left flex items-center flex-col bg-secondary-50">
                <h4 className="font-semibold text-primary-800 mb-4">Prime Social</h4>
                <ul className="text-sm text-secondary-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <IoMdCheckmark className="w-4 h-4 text-accent-500" />
                    <span>Clinic specialists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmark className="w-4 h-4 text-accent-500" />
                    <span>Deep industry knowledge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmark className="w-4 h-4 text-accent-500" />
                    <span>Transparent pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmark className="w-4 h-4 text-accent-500" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdCheckmark className="w-4 h-4 text-accent-500" />
                    <span>Guaranteed ROI</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 text-left flex items-center flex-col">
                <h4 className="font-semibold text-primary-800 mb-4">DIY Marketing</h4>
                <ul className="text-sm text-secondary-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>Time-consuming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>Learning curve</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>Inconsistent results</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>Missed opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="w-4 h-4 text-red-500" />
                    <span>No expertise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
