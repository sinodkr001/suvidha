import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, Mail, MessageCircle, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <motion.div 
    className={`bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 transition-all duration-300 ${isOpen ? 'shadow-lg border-orange-300' : 'hover:shadow-md hover:border-orange-200'}`}
    whileHover={{ scale: 1.01 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <button
      className="w-full text-left focus:outline-none group"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-orange-100 group-hover:bg-orange-200'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="up"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronUp className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-orange-600'}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="down"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-orange-600'}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <h3 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-orange-600' : 'text-gray-800 group-hover:text-orange-600'}`}>
            {question}
          </h3>
        </div>
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pl-14 pt-4">
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  // Ensure page scrolls to top when component mounts
  useScrollToTop();
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      question: "What is Suvidha POS?",
      answer: "Suvidha POS is a comprehensive Point of Sale solution designed for various businesses including retail stores, restaurants, bars, salons, and more. It offers features like inventory management, billing, customer management, and detailed reporting to help streamline your business operations."
    },
    {
      question: "Can I use Suvidha POS offline?",
      answer: "Yes, Suvidha POS works both online and offline. In areas with limited internet connectivity, you can continue processing transactions offline, and the data will automatically sync once the internet connection is restored."
    },
    {
      question: "What devices are compatible with Suvidha POS?",
      answer: "Suvidha POS is compatible with a wide range of devices including iPads, Android tablets, phones, traditional POS terminals, and modern POS systems. This flexibility allows you to choose the device that best suits your business needs."
    },
    {
      question: "How secure is Suvidha POS?",
      answer: "Suvidha POS implements robust security measures including data encryption, secure payment processing, user authentication, and regular security updates. We comply with industry standards to ensure your business and customer data remain protected."
    },
    {
      question: "What payment methods are supported?",
      answer: "Suvidha POS supports multiple payment methods including cash, credit/debit cards, UPI, digital wallets, and other electronic payment systems. You can also configure custom payment methods based on your business requirements."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes, we provide comprehensive training and 24/7 support. This includes initial setup assistance, staff training, technical support, and ongoing help whenever you need it. Our support team is available via phone, email, and remote assistance."
    },
    {
      question: "Can I customize Suvidha POS for my business?",
      answer: "Yes, Suvidha POS is highly customizable. You can configure various aspects including menu/inventory items, tax rates, user permissions, reports, and receipt formats to match your specific business needs."
    },
    {
      question: "What reports are available in Suvidha POS?",
      answer: "Suvidha POS offers comprehensive reporting including sales reports, inventory reports, employee performance reports, customer analytics, and financial statements. You can access these reports in real-time and export them in various formats."
    },
    {
      question: "How does the inventory management system work?",
      answer: "The inventory management system automatically tracks stock levels, alerts you when items are running low, manages multiple locations, handles product variants, and provides detailed inventory reports. It also supports barcode scanning and bulk inventory updates."
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We offer 24/7 customer support through multiple channels including phone, email, and remote assistance. Our support team can help with technical issues, provide guidance on using features, and assist with any questions you may have."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, Suvidha POS offers mobile apps for both Android and iOS devices. These apps allow you to manage your business on the go, view reports, track sales, and monitor inventory from your smartphone or tablet."
    },
    {
      question: "How do I get started with Suvidha POS?",
      answer: "Getting started is easy. Contact our sales team, and we'll help you choose the right plan for your business. We'll then guide you through the setup process, provide training, and ensure you're ready to use all the features effectively."
    }
  ];

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-[Poppins]">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
          {/* Premium Badge */}
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
            SUPPORT
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
            Frequently Asked{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Questions
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
            Find answers to common questions about Suvidha POS
          </motion.p>
        </div>
      </div>

      {/* Main Content - Light Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,146,60,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Gradient Orbs for Light Section */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Search Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <input
                  type="text"
                  placeholder="Search your question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 pr-12 text-lg rounded-2xl border-2 border-orange-200 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300 shadow-lg bg-white/80 backdrop-blur-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: MessageCircle, title: "General Questions", count: "5+ articles", color: "orange" },
              { icon: Phone, title: "Technical Support", count: "24/7 available", color: "blue" },
              { icon: Mail, title: "Sales Support", count: "Quick response", color: "purple" }
            ].map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(251,146,60,0.2)"
                }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <category.icon className="h-6 w-6 text-orange-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Support Section - Dark Theme */}
          <motion.div 
            className="mt-20 relative py-20 -mx-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
            
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Gradient Orbs for Dark Section */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Still have{' '}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 500, damping: 10 }}
                >
                  questions?
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our support team is here to help you 24/7. Reach out to us through any of these channels.
              </motion.p>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: MessageCircle, text: "Live Chat", link: "/contact", color: "purple" },
                  { icon: Mail, text: "Email Us", link: "mailto:support@suvidhapos.in", color: "pink" },
                  { icon: Phone, text: "Call Us", link: "tel:+918271718844", color: "orange" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a 
                      href={item.link} 
                      className="flex items-center justify-center px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                      <item.icon className="h-6 w-6 text-purple-400 mr-3 group-hover:text-purple-300" />
                      <span className="text-white font-semibold group-hover:text-purple-300">{item.text}</span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;