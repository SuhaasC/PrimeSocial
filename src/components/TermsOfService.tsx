import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">1. Agreement to Terms</h2>
              <p className="text-secondary-700 mb-4">
                These Terms of Service ("Terms") govern your use of Prime Social's services. Prime Social is a brand of 
                Aquilastrat. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-secondary-700">
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">2. Company Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-secondary-700 mb-2"><strong>Company:</strong> Aquilastrat</p>
                <p className="text-secondary-700 mb-2"><strong>Brand:</strong> Prime Social</p>
                <p className="text-secondary-700 mb-2"><strong>Address:</strong> Sai Chethana, 20th Main BTM 4th Stage, Bangalore IN - 560076</p>
                <p className="text-secondary-700 mb-2"><strong>Email:</strong> contact@primesocial.agnecy</p>
                <p className="text-secondary-700"><strong>Phone:</strong> +919945540655</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">3. Services Description</h2>
              <p className="text-secondary-700 mb-4">
                Prime Social provides marketing and consulting services to health and wellness clinics in the UK & EU, including:
              </p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li>Conversion-focused website design and development</li>
                <li>Reputation and review generation</li>
                <li>Social media management</li>
                <li>Paid advertising campaigns</li>
                <li>Digital strategy consulting</li>
                <li>Marketing automation (SMS & Email)</li>
                <li>Local SEO and Google Business Profile optimization</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">4. Service Delivery</h2>
              <p className="text-secondary-700 mb-4">
                Service delivery timelines vary based on project size and complexity. Specific delivery schedules will be 
                outlined in individual service agreements and discussed with clients during project planning.
              </p>
              <p className="text-secondary-700">
                We commit to delivering high-quality results while maintaining realistic timelines based on project scope.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">5. Payment Terms</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">Project-Based Services:</h3>
                <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                  <li><strong>50% payment</strong> due before project commencement</li>
                  <li><strong>Remaining payments</strong> based on milestones discussed and agreed upon with clients</li>
                  <li>All payments must be made in advance of milestone delivery</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-primary-600 mb-3">Retainer Services:</h3>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2">
                  <li><strong>Monthly payments</strong> due in advance</li>
                  <li>Services commence upon receipt of payment</li>
                  <li>Retainer terms and conditions outlined in individual agreements</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">6. Client Responsibilities</h2>
              <p className="text-secondary-700 mb-4">Clients are responsible for:</p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li>Providing timely feedback and approvals</li>
                <li>Supplying necessary content and materials</li>
                <li>Maintaining access to required platforms and accounts</li>
                <li>Making payments according to agreed schedules</li>
                <li>Providing accurate business information and requirements</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">7. Intellectual Property</h2>
              <p className="text-secondary-700 mb-4">
                Upon full payment, clients receive ownership of custom deliverables created specifically for their project. 
                Prime Social retains rights to:
              </p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li>Proprietary methodologies and processes</li>
                <li>Template designs and frameworks</li>
                <li>General marketing strategies and concepts</li>
                <li>Portfolio rights to showcase work (with client permission)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">8. Confidentiality</h2>
              <p className="text-secondary-700 mb-4">
                Prime Social maintains strict confidentiality regarding client information, business strategies, and proprietary 
                data. We do not disclose client information to third parties without explicit consent, except as required by law.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">9. Limitation of Liability</h2>
              <p className="text-secondary-700 mb-4">
                Prime Social's liability is limited to the amount paid for services. We are not liable for:
              </p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Third-party actions or platform changes</li>
                <li>Client business decisions or market conditions</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">10. Service Guarantees</h2>
              <p className="text-secondary-700 mb-4">
                While we strive for exceptional results, specific outcomes depend on various factors including market conditions, 
                client industry, and implementation. We provide:
              </p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li>Quality assurance and revisions within scope</li>
                <li>Ongoing support and optimization recommendations</li>
                <li>Transparent reporting and communication</li>
                <li>Performance-based adjustments and improvements</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">11. Termination</h2>
              <p className="text-secondary-700 mb-4">
                Either party may terminate services with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li>Client receives completed work up to termination date</li>
                <li>Outstanding payments remain due for work completed</li>
                <li>Confidentiality obligations continue</li>
                <li>Intellectual property rights transfer according to payment status</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">12. Dispute Resolution</h2>
              <p className="text-secondary-700 mb-4">
                We prefer to resolve disputes through direct communication and negotiation. If resolution cannot be reached, 
                disputes will be resolved through mediation or arbitration as outlined in individual service agreements.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">13. Governing Law</h2>
              <p className="text-secondary-700 mb-4">
                These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts 
                in Bangalore, India.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">14. Changes to Terms</h2>
              <p className="text-secondary-700 mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
                Continued use of services constitutes acceptance of modified Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">15. Contact Information</h2>
              <p className="text-secondary-700 mb-4">For questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-secondary-700 mb-2"><strong>Email:</strong> <a href="mailto:contact@primesocial.agnecy" className="text-accent-500 hover:text-accent-600">contact@primesocial.agnecy</a></p>
                <p className="text-secondary-700 mb-2"><strong>Phone:</strong> +919945540655</p>
                <p className="text-secondary-700"><strong>Address:</strong> Sai Chethana, 20th Main BTM 4th Stage, Bangalore IN - 560076</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
