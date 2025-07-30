import React, { useState, useEffect } from 'react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'description', title: '2. Description of Service' },
    { id: 'user-responsibilities', title: '3. User Responsibilities' },
    { id: 'payment-terms', title: '4. Payment Terms' },
    { id: 'data-protection', title: '5. Data Protection & Privacy' },
    { id: 'service-availability', title: '6. Service Availability' },
    { id: 'intellectual-property', title: '7. Intellectual Property' },
    { id: 'limitation-liability', title: '8. Limitation of Liability' },
    { id: 'termination', title: '9. Termination' },
    { id: 'governing-law', title: '10. Governing Law' },
    { id: 'changes-terms', title: '11. Changes to Terms' },
    { id: 'contact-information', title: '12. Contact Information' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-[Poppins]">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Legal documents" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <span className="text-white bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            LEGAL
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:w-80 lg:flex-shrink-0">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                          activeSection === section.id
                            ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                            : 'text-gray-600 hover:border-l-4 hover:border-blue-300'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* Last Updated Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="text-center">
                    <p className="text-gray-700">
                      <strong>Last updated:</strong> January 2025
                    </p>
                  </div>
                </div>

                {/* Section Cards */}
                <div id="acceptance" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing and using Suvidha POS services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div id="description" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
                  <p className="text-gray-700 mb-4">
                    Suvidha POS provides Point of Sale (POS) solutions including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>POS software and applications</li>
                    <li>Inventory management systems</li>
                    <li>Payment processing solutions</li>
                    <li>Customer relationship management tools</li>
                    <li>Technical support and maintenance services</li>
                    <li>Training and onboarding services</li>
                  </ul>
                </div>

                <div id="user-responsibilities" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
                  <p className="text-gray-700 mb-4">As a user of Suvidha POS services, you agree to:</p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the service in compliance with applicable laws and regulations</li>
                    <li>Not attempt to reverse engineer or modify our software</li>
                    <li>Report any security vulnerabilities or issues immediately</li>
                    <li>Pay all applicable fees and charges in a timely manner</li>
                  </ul>
                </div>

                <div id="payment-terms" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Payment Terms</h2>
                  <p className="text-gray-700 mb-4">
                    All fees are payable in advance. Payment methods include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Credit/Debit cards</li>
                    <li>Bank transfers</li>
                    <li>Digital payment platforms</li>
                    <li>Other payment methods as specified in your service agreement</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Late payments may result in service suspension or termination. All fees are non-refundable unless otherwise specified in your service agreement.
                  </p>
                </div>

                <div id="data-protection" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Protection & Privacy</h2>
                  <p className="text-gray-700 mb-4">
                    We are committed to protecting your data and privacy. Our data collection and processing practices are governed by our Privacy Policy, which is incorporated into these terms by reference.
                  </p>
                  <p className="text-gray-700 mb-4">
                    You are responsible for ensuring compliance with applicable data protection laws in your jurisdiction, including but not limited to GDPR, CCPA, and local privacy regulations.
                  </p>
                </div>

                <div id="service-availability" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Service Availability</h2>
                  <p className="text-gray-700 mb-4">
                    While we strive to maintain high service availability, we do not guarantee uninterrupted access to our services. We may perform maintenance, updates, or modifications that could temporarily affect service availability.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We will provide reasonable notice for scheduled maintenance and work to minimize service disruptions.
                  </p>
                </div>

                <div id="intellectual-property" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Intellectual Property</h2>
                  <p className="text-gray-700 mb-4">
                    All content, features, and functionality of Suvidha POS services, including but not limited to text, graphics, logos, software, and design, are owned by Suvidha POS and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-gray-700 mb-4">
                    You may not copy, modify, distribute, sell, or lease any part of our services without our prior written consent.
                  </p>
                </div>

                <div id="limitation-liability" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    To the maximum extent permitted by law, Suvidha POS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our total liability to you for any claims arising from the use of our services shall not exceed the amount paid by you for the services in the twelve months preceding the claim.
                  </p>
                </div>

                <div id="termination" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
                  <p className="text-gray-700 mb-4">
                    Either party may terminate this agreement with written notice. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Your access to the services will be suspended</li>
                    <li>You will remain responsible for any outstanding payments</li>
                    <li>We will retain your data for a reasonable period as required by law</li>
                    <li>You may request data export within 30 days of termination</li>
                  </ul>
                </div>

                <div id="governing-law" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
                  <p className="text-gray-700 mb-4">
                    These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or the use of our services shall be subject to the exclusive jurisdiction of the courts in Greater Noida, Uttar Pradesh, India.
                  </p>
                </div>

                <div id="changes-terms" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service. Continued use of our services after such changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div id="contact-information" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
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
                  </div>
                </div>

                {/* Final Card */}
                <div className="bg-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                  <p className="text-gray-700 text-center">
                    By using Suvidha POS services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 