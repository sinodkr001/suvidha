import React, { useState, useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Clock, Eye, Database, Lock, Users, Cookie, Globe, Baby, FileText, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  
  useScrollToTop();

  const sections = [
    { id: 'introduction', title: '1. Introduction', icon: Shield },
    { id: 'information-collection', title: '2. Information We Collect', icon: Database },
    { id: 'how-we-use', title: '3. How We Use Your Information', icon: Eye },
    { id: 'information-sharing', title: '4. Information Sharing and Disclosure', icon: Users },
    { id: 'data-security', title: '5. Data Security', icon: Lock },
    { id: 'data-retention', title: '6. Data Retention', icon: Clock },
    { id: 'your-rights', title: '7. Your Rights and Choices', icon: Shield },
    { id: 'cookies', title: '8. Cookies and Tracking Technologies', icon: Cookie },
    { id: 'international-transfers', title: '9. International Data Transfers', icon: Globe },
    { id: 'children-privacy', title: '10. Children\'s Privacy', icon: Baby },
    { id: 'policy-changes', title: '11. Changes to This Policy', icon: FileText },
    { id: 'contact-us', title: '12. Contact Us', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

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

    // Add throttling for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 120; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
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
            PRIVACY & SECURITY
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
            Privacy{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Policy
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
            How we collect, use, and protect your personal information
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
                    <Shield className="w-5 h-5 text-orange-600" />
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
                    id: 'introduction',
                    title: '1. Introduction',
                    content: 'Suvidha POS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Point of Sale (POS) services, including our software, applications, and related services.',
                    additionalContent: 'By using our services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.',
                    icon: Shield
                  },
                  {
                    id: 'information-collection',
                    title: '2. Information We Collect',
                    content: 'We collect various types of information to provide and improve our services:',
                    list: [
                      'Personal information (name, contact details, business information)',
                      'Business data (sales, inventory, customer information)',
                      'Technical information (device info, usage data, cookies)',
                      'Payment information and account credentials'
                    ],
                    icon: Database
                  },
                  {
                    id: 'how-we-use',
                    title: '3. How We Use Your Information',
                    content: 'We use the collected information for the following purposes:',
                    list: [
                      'Service Provision: To provide and maintain our POS services',
                      'Account Management: To create and manage your account',
                      'Customer Support: To respond to your inquiries and provide technical support',
                      'Payment Processing: To process payments and billing',
                      'Service Improvement: To analyze usage patterns and improve our services',
                      'Security: To protect against fraud and ensure system security',
                      'Communication: To send important updates and marketing communications',
                      'Legal Compliance: To comply with applicable laws and regulations'
                    ],
                    icon: Eye
                  },
                  {
                    id: 'information-sharing',
                    title: '4. Information Sharing and Disclosure',
                    content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:',
                    list: [
                      'Service Providers: Trusted third-party service providers',
                      'Legal Requirements: When required by law or court orders',
                      'Business Transfers: In case of merger, acquisition, or sale of assets',
                      'Security: To protect our rights and prevent fraud'
                    ],
                    icon: Users
                  },
                  {
                    id: 'data-security',
                    title: '5. Data Security',
                    content: 'We implement appropriate technical and organizational measures to protect your information:',
                    list: [
                      'Encryption: Data is encrypted in transit and at rest',
                      'Access Controls: Strict access controls and authentication',
                      'Regular Audits: Security assessments and vulnerability testing',
                      'Employee Training: Regular security awareness training',
                      'Incident Response: Procedures for handling security incidents'
                    ],
                    additionalContent: 'However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.',
                    icon: Lock
                  },
                  {
                    id: 'data-retention',
                    title: '6. Data Retention',
                    content: 'We retain your information for as long as necessary to:',
                    list: [
                      'Provide our services to you',
                      'Comply with legal obligations',
                      'Resolve disputes and enforce agreements',
                      'Improve our services'
                    ],
                    additionalContent: 'When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.',
                    icon: Clock
                  },
                  {
                    id: 'your-rights',
                    title: '7. Your Rights and Choices',
                    content: 'Depending on your location, you may have the following rights:',
                    list: [
                      'Access: Request access to your personal information',
                      'Correction: Request correction of inaccurate information',
                      'Deletion: Request deletion of your personal information',
                      'Portability: Request a copy of your data in a portable format',
                      'Restriction: Request restriction of processing',
                      'Objection: Object to certain types of processing',
                      'Withdrawal: Withdraw consent where processing is based on consent'
                    ],
                    additionalContent: 'To exercise these rights, please contact us using the information provided below.',
                    icon: Shield
                  },
                  {
                    id: 'cookies',
                    title: '8. Cookies and Tracking Technologies',
                    content: 'We use cookies and similar technologies to:',
                    list: [
                      'Remember your preferences and settings',
                      'Analyze website usage and performance',
                      'Provide personalized content and advertisements',
                      'Ensure security and prevent fraud'
                    ],
                    additionalContent: 'You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our services.',
                    icon: Cookie
                  },
                  {
                    id: 'international-transfers',
                    title: '9. International Data Transfers',
                    content: 'Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.',
                    icon: Globe
                  },
                  {
                    id: 'children-privacy',
                    title: '10. Children\'s Privacy',
                    content: 'Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.',
                    icon: Baby
                  },
                  {
                    id: 'policy-changes',
                    title: '11. Changes to This Policy',
                    content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by:',
                    list: [
                      'Posting the updated policy on our website',
                      'Sending email notifications to registered users',
                      'Displaying prominent notices in our applications'
                    ],
                    additionalContent: 'Your continued use of our services after such changes constitutes acceptance of the updated policy.',
                    icon: FileText
                  },
                  {
                    id: 'contact-us',
                    title: '12. Contact Us',
                    content: 'If you have any questions about this Privacy Policy or our data practices, please contact us:',
                    contactInfo: {
                      address: '1559, 15th floor, Gaur City Mall Sector 18, Greater Noida Uttar Pradesh – 201301',
                      phone: '(+91) 82-7171-8844',
                      email: 'sales@suvidhapos.in',
                      dpo: 'privacy@suvidhapos.in'
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
                    <p className="text-gray-700 mb-2">
                          <strong>Data Protection Officer:</strong> {section.contactInfo.dpo}
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
                    By using Suvidha POS services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
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

export default PrivacyPolicy; 