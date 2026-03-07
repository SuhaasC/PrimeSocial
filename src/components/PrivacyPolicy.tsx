import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 text-center">
            Privacy Policy
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
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">1. Introduction</h2>
              <p className="text-secondary-700 mb-4">
                Prime Social (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a brand of Aquilastrat, committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                our services or visit our website.
              </p>
              <p className="text-secondary-700">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">2. Company Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-secondary-700 mb-2"><strong>Company:</strong> Aquilastrat</p>
                <p className="text-secondary-700 mb-2"><strong>Brand:</strong> Prime Social</p>
                <p className="text-secondary-700 mb-2"><strong>Address:</strong> Sai Chethana, 20th Main BTM 4th Stage, Bangalore IN - 560076</p>
                <p className="text-secondary-700 mb-2"><strong>Email:</strong> contact@primesocial.agency</p>
                <p className="text-secondary-700"><strong>Phone:</strong> +919945540655</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">3. Information We Collect</h2>
              <p className="text-secondary-700 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Business information (company name, industry, website details)</li>
                <li>Marketing preferences and communication history</li>
                <li>Service-related information and project requirements</li>
                <li>Payment and billing information</li>
              </ul>
              <p className="text-secondary-700">
                <strong>Note:</strong> We do not use cookies or tracking technologies on our website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">4. How We Collect Information</h2>
              <p className="text-secondary-700 mb-4">We collect information through:</p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li><strong>Calendly:</strong> When you schedule consultations or meetings</li>
                <li><strong>Direct communication:</strong> Email, phone calls, and messaging</li>
                <li><strong>Service agreements:</strong> When you engage our services</li>
                <li><strong>Website forms:</strong> Contact forms and service inquiries</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">5. How We Use Your Information</h2>
              <p className="text-secondary-700 mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li><strong>Service Delivery:</strong> Providing marketing and consulting services</li>
                <li><strong>Communication:</strong> Responding to inquiries and providing updates</li>
                <li><strong>Project Management:</strong> Coordinating services and deliverables</li>
                <li><strong>Marketing:</strong> Sending relevant information about our services</li>
                <li><strong>Legal Compliance:</strong> Meeting regulatory and contractual obligations</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">6. Information Sharing and Disclosure</h2>
              <p className="text-secondary-700 mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>For service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">7. Data Security</h2>
              <p className="text-secondary-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">8. Data Retention</h2>
              <p className="text-secondary-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">9. Your Rights (GDPR Compliance)</h2>
              <p className="text-secondary-700 mb-4">Under GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 text-secondary-700 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="text-secondary-700">
                To exercise these rights, please contact us at <a href="mailto:contact@primesocial.agency" className="text-accent-500 hover:text-accent-600">contact@primesocial.agency</a>
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">10. International Data Transfers</h2>
              <p className="text-secondary-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that 
                such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-secondary-700 mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                information from children under 18.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-secondary-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">13. Contact Us</h2>
              <p className="text-secondary-700 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-secondary-700 mb-2"><strong>Email:</strong> <a href="mailto:contact@primesocial.agency" className="text-accent-500 hover:text-accent-600">contact@primesocial.agency</a></p>
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

export default PrivacyPolicy;
