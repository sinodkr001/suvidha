import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, Mail, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className={`bg-white rounded-2xl p-6 transition-all duration-300 ${isOpen ? 'shadow-lg' : 'hover:shadow-md'}`}>
    <button
      className="w-full text-left focus:outline-none group"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-600' : 'bg-blue-100 group-hover:bg-blue-200'}`}>
            {isOpen ? (
              <ChevronUp className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-blue-600'}`} />
            ) : (
              <ChevronDown className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-blue-600'}`} />
            )}
          </div>
          <h3 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
            {question}
          </h3>
        </div>
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'mt-4 max-h-96' : 'max-h-0'}`}>
      <div className="pl-12">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  </div>
);

const FAQ = () => {
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
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Customer Support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
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
      <div className="bg-gradient-to-b from-white to-blue-50/30 py-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Search Section */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 pr-12 text-lg rounded-2xl border-2 border-blue-100 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-6 w-6" />
              </div>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: MessageCircle, title: "General Questions", count: "5+ articles" },
              { icon: Phone, title: "Technical Support", count: "24/7 available" },
              { icon: Mail, title: "Sales Support", count: "Quick response" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Still have questions?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Our support team is here to help you 24/7. Reach out to us through any of these channels.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <a href="/contact" className="flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm transition-all duration-300 group">
                    <MessageCircle className="h-6 w-6 text-white mr-3" />
                    <span className="text-white font-semibold">Live Chat</span>
                  </a>
                  <a href="mailto:support@suvidhapos.in" className="flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm transition-all duration-300 group">
                    <Mail className="h-6 w-6 text-white mr-3" />
                    <span className="text-white font-semibold">Email Us</span>
                  </a>
                  <a href="tel:+918271718844" className="flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm transition-all duration-300 group">
                    <Phone className="h-6 w-6 text-white mr-3" />
                    <span className="text-white font-semibold">Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;