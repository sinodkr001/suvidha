import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="w-full py-6 text-left focus:outline-none"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-blue-600" />
          ) : (
            <ChevronDown className="h-6 w-6 text-gray-400" />
          )}
        </span>
      </div>
    </button>
    {isOpen && (
      <div className="pb-6">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  return (
    <div className="font-[Poppins]">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Customer Support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <span className="text-white bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            SUPPORT
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
            Find answers to common questions about Suvidha POS
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Search Bar - Future Enhancement */}
          <div className="mb-12">
            <div className="bg-blue-50 p-8 rounded-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Have a different question?
              </h2>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Contact our support team.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact Support
                </a>
                <a 
                  href="tel:+918271718844" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="divide-y divide-gray-200 rounded-3xl bg-white shadow-lg border border-gray-100">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Additional Support Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-6">
                Need technical assistance? Our support team is available 24/7 to help you.
              </p>
              <p className="text-gray-800 font-semibold">
                Email: support@suvidhapos.in<br />
                Phone: (+91) 82-7171-8844
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sales Inquiries</h3>
              <p className="text-gray-600 mb-6">
                Interested in Suvidha POS? Contact our sales team for a demo.
              </p>
              <p className="text-gray-800 font-semibold">
                Email: sales@suvidhapos.in<br />
                Phone: (+91) 82-7171-8844
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 