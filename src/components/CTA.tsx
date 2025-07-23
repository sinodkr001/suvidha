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
              src="/mobile_app (1).jpg"
              alt="Mobile Dashboard"
              className="w-full h-80 max-w-sm mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;