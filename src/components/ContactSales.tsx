import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSales = () => (
  <section className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 text-center">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
        Contact our sales team today
      </h3>
      <p className="text-orange-100 text-xl mb-8">
        Get a free trial
      </p>
      <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto group">
        Contact Us
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </section>
);

export default ContactSales; 