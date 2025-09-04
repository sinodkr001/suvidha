import React, { useState, useEffect, useMemo } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { motion } from 'framer-motion';
import { Sparkles, Zap, FileText, Shield, Clock, Users, CreditCard, Server, Copyright, AlertTriangle, Scale, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('acceptance');
  
  useScrollToTop();

  const sections = useMemo(() => [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: FileText },
    { id: 'description', title: '2. Description of Service', icon: Server },
    { id: 'user-responsibilities', title: '3. User Responsibilities', icon: Users },
    { id: 'payment-terms', title: '4. Payment Terms', icon: CreditCard },
    { id: 'data-protection', title: '5. Data Protection & Privacy', icon: Shield },
    { id: 'service-availability', title: '6. Service Availability', icon: Clock },
    { id: 'intellectual-property', title: '7. Intellectual Property', icon: Copyright },
    { id: 'limitation-liability', title: '8. Limitation of Liability', icon: AlertTriangle },
    { id: 'termination', title: '9. Termination', icon: Scale },
    { id: 'governing-law', title: '10. Governing Law', icon: Scale },
    { id: 'changes-terms', title: '11. Changes to Terms', icon: FileText },
    { id: 'contact-information', title: '12. Contact Information', icon: Mail }
  ], []);

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
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-[Poppins] overflow-x-hidden">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-white px-8 py-4 rounded-2xl text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-500/20 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(251,146,60,0.2)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
            LEGAL DOCUMENTS
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-orange-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Terms &{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Conditions
          </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Please read these terms carefully before using our services
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,146,60,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Navigation Sidebar - Sticky Position */}
            <div className="lg:w-80 lg:flex-shrink-0">
              <div className="sticky top-24 h-fit">
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-100"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-orange-50 hover:text-orange-700 flex items-center gap-2 ${
                          activeSection === section.id
                            ? 'bg-orange-100 text-orange-700 border-l-4 border-orange-600'
                            : 'text-gray-600 hover:border-l-4 hover:border-orange-300'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <section.icon className="w-4 h-4" />
                        {section.title}
                      </motion.button>
                    ))}
                  </nav>
                </motion.div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* Last Updated Card */}
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="w-4 h-4" />
                      Last updated: January 2025
                    </motion.div>
                  </div>
                </motion.div>

                {/* Section Cards */}
                {[
                  {
                    id: 'acceptance',
                    title: '1. Acceptance of Terms',
                    content: 'By accessing and using Suvidha POS services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
                    icon: FileText
                  },
                  {
                    id: 'description',
                    title: '2. Description of Service',
                    content: 'Suvidha POS provides Point of Sale (POS) solutions including but not limited to:',
                    list: [
                      'POS software and applications',
                      'Inventory management systems',
                      'Payment processing solutions',
                      'Customer relationship management tools',
                      'Technical support and maintenance services',
                      'Training and onboarding services'
                    ],
                    icon: Server
                  },
                  {
                    id: 'user-responsibilities',
                    title: '3. User Responsibilities',
                    content: 'As a user of Suvidha POS services, you agree to:',
                    list: [
                      'Provide accurate and complete information during registration',
                      'Maintain the security of your account credentials',
                      'Use the service in compliance with applicable laws and regulations',
                      'Not attempt to reverse engineer or modify our software',
                      'Report any security vulnerabilities or issues immediately',
                      'Pay all applicable fees and charges in a timely manner'
                    ],
                    icon: Users
                  },
                  {
                    id: 'payment-terms',
                    title: '4. Payment Terms',
                    content: 'All fees are payable in advance. Payment methods include:',
                    list: [
                      'Credit/Debit cards',
                      'Bank transfers',
                      'Digital payment platforms',
                      'Other payment methods as specified in your service agreement'
                    ],
                    additionalContent: 'Late payments may result in service suspension or termination. All fees are non-refundable unless otherwise specified in your service agreement.',
                    icon: CreditCard
                  },
                  {
                    id: 'data-protection',
                    title: '5. Data Protection & Privacy',
                    content: 'We are committed to protecting your data and privacy. Our data collection and processing practices are governed by our Privacy Policy, which is incorporated into these terms by reference.',
                    additionalContent: 'You are responsible for ensuring compliance with applicable data protection laws in your jurisdiction, including but not limited to GDPR, CCPA, and local privacy regulations.',
                    icon: Shield
                  },
                  {
                    id: 'service-availability',
                    title: '6. Service Availability',
                    content: 'While we strive to maintain high service availability, we do not guarantee uninterrupted access to our services. We may perform maintenance, updates, or modifications that could temporarily affect service availability.',
                    additionalContent: 'We will provide reasonable notice for scheduled maintenance and work to minimize service disruptions.',
                    icon: Clock
                  },
                  {
                    id: 'intellectual-property',
                    title: '7. Intellectual Property',
                    content: 'All content, features, and functionality of Suvidha POS services, including but not limited to text, graphics, logos, software, and design, are owned by Suvidha POS and are protected by copyright, trademark, and other intellectual property laws.',
                    additionalContent: 'You may not copy, modify, distribute, sell, or lease any part of our services without our prior written consent.',
                    icon: Copyright
                  },
                  {
                    id: 'limitation-liability',
                    title: '8. Limitation of Liability',
                    content: 'To the maximum extent permitted by law, Suvidha POS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.',
                    additionalContent: 'Our total liability to you for any claims arising from the use of our services shall not exceed the amount paid by you for the services in the twelve months preceding the claim.',
                    icon: AlertTriangle
                  },
                  {
                    id: 'termination',
                    title: '9. Termination',
                    content: 'Either party may terminate this agreement with written notice. Upon termination:',
                    list: [
                      'Your access to the services will be suspended',
                      'You will remain responsible for any outstanding payments',
                      'We will retain your data for a reasonable period as required by law',
                      'You may request data export within 30 days of termination'
                    ],
                    icon: Scale
                  },
                  {
                    id: 'governing-law',
                    title: '10. Governing Law',
                    content: 'These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or the use of our services shall be subject to the exclusive jurisdiction of the courts in Greater Noida, Uttar Pradesh, India.',
                    icon: Scale
                  },
                  {
                    id: 'changes-terms',
                    title: '11. Changes to Terms',
                    content: 'We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service. Continued use of our services after such changes constitutes acceptance of the new terms.',
                    icon: FileText
                  },
                  {
                    id: 'contact-information',
                    title: '12. Contact Information',
                    content: 'If you have any questions about these Terms and Conditions, please contact us:',
                    contactInfo: {
                      address: '1559, 15th floor, Gaur City Mall Sector 18, Greater Noida Uttar Pradesh – 201301',
                      phone: '(+91) 82-7171-8844',
                      email: 'sales@suvidhapos.in'
                    },
                    icon: Mail
                  }
                ].map((section, index) => (
                  <motion.div 
                    key={section.id}
                    id={section.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:border-orange-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <section.icon className="w-6 h-6 text-orange-600" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {section.content}
                    </p>
                    
                    {section.list && (
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                        {section.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="leading-relaxed">{item}</li>
                        ))}
                  </ul>
                    )}
                    
                    {section.additionalContent && (
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {section.additionalContent}
                      </p>
                    )}
                    
                    {section.contactInfo && (
                      <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-2xl border border-orange-100">
                    <p className="text-gray-700 mb-2">
                          <strong>Address:</strong> {section.contactInfo.address}
                    </p>
                    <p className="text-gray-700 mb-2">
                          <strong>Phone:</strong> {section.contactInfo.phone}
                    </p>
                    <p className="text-gray-700 mb-2">
                          <strong>Email:</strong> {section.contactInfo.email}
                    </p>
                  </div>
                    )}
                  </motion.div>
                ))}

                {/* Final Card */}
                <motion.div 
                  className="bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl p-8 shadow-xl border border-orange-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-700 text-center text-lg leading-relaxed">
                    By using Suvidha POS services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 