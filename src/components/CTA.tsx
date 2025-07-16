import React from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Dashboard App: Reports at your Fingertips, Anywhere
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Access your business reports, employee activities and profit summary on the go in real-time 
              with the help of Mobile Dashboard App, that works with PCs, Macs, iOS & Android tablets.
            </p>
          </div>
          
          <div className="lg:w-1/3">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mobile Dashboard"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default CTA;