import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="font-[Poppins]">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Privacy protection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <span className="text-white bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            PRIVACY
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-2xl mb-8">
              <p className="text-gray-700 text-center">
                <strong>Last updated:</strong> January 2025
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Suvidha POS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Point of Sale (POS) services, including our software, applications, and related services.
              </p>
              <p className="text-gray-700 mb-4">
                By using our services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Business information (company name, business type, industry)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Account credentials and login information</li>
                <li>Communication preferences and marketing preferences</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">2.2 Business Data</h3>
              <p className="text-gray-700 mb-4">When you use our POS services, we may collect:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Sales and transaction data</li>
                <li>Inventory information</li>
                <li>Customer data (names, contact information, purchase history)</li>
                <li>Employee information and access logs</li>
                <li>Product and service information</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">2.3 Technical Information</h3>
              <p className="text-gray-700 mb-4">We automatically collect:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Log files and error reports</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Service Provision:</strong> To provide and maintain our POS services</li>
                <li><strong>Account Management:</strong> To create and manage your account</li>
                <li><strong>Customer Support:</strong> To respond to your inquiries and provide technical support</li>
                <li><strong>Payment Processing:</strong> To process payments and billing</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our services</li>
                <li><strong>Security:</strong> To protect against fraud and ensure system security</li>
                <li><strong>Communication:</strong> To send important updates and marketing communications</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">4.1 Service Providers</h3>
              <p className="text-gray-700 mb-4">We may share information with trusted third-party service providers who assist us in:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Payment processing and billing</li>
                <li>Cloud hosting and data storage</li>
                <li>Customer support and communication</li>
                <li>Analytics and performance monitoring</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">4.2 Legal Requirements</h3>
              <p className="text-gray-700 mb-4">We may disclose your information if required by law or in response to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Legal process or court orders</li>
                <li>Government requests or investigations</li>
                <li>Protection of our rights and property</li>
                <li>Emergency situations involving public safety</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">4.3 Business Transfers</h3>
              <p className="text-gray-700 mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to the same privacy protections.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures to protect your information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Encryption:</strong> Data is encrypted in transit and at rest</li>
                <li><strong>Access Controls:</strong> Strict access controls and authentication</li>
                <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                <li><strong>Employee Training:</strong> Regular security awareness training</li>
                <li><strong>Incident Response:</strong> Procedures for handling security incidents</li>
              </ul>
              <p className="text-gray-700 mb-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Data Retention</h2>
              <p className="text-gray-700 mb-4">We retain your information for as long as necessary to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services</li>
              </ul>
              <p className="text-gray-700 mb-4">
                When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website usage and performance</li>
                <li>Provide personalized content and advertisements</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices in our applications</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> 1559, 15th floor, Gaur City Mall Sector 18, Greater Noida Uttar Pradesh – 201301
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> (+91) 82-7171-8844
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> sales@suvidhapos.in
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Data Protection Officer:</strong> privacy@suvidhapos.in
                </p>
              </div>
            </section>

            <div className="bg-blue-50 p-6 rounded-2xl mt-12">
              <p className="text-gray-700 text-center">
                By using Suvidha POS services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 