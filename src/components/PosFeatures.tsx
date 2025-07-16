import React from 'react';
import { Smartphone, Settings, Users, ArrowRight } from 'lucide-react';

const PosFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            {/* Gradient Shadow Behind Image */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl -z-10" />
            <img 
              src="/newaboutii.jpeg" 
              alt="POS System" 
              className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
            />
            {/* Premium Badge */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2">
              <span className="text-xs font-bold text-white">Premium POS</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Accent Line */}
            <div className="mb-3">
              <div className="w-14 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full shadow-lg"></div>
            </div>
            <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold mb-6 inline-block">
              POS SOFTWARE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight drop-shadow-[0_2px_12px_rgba(251,146,60,0.10)]">
              Powerfully flexible POS Software
            </h2>
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-orange-600 mb-3">
                    Powerfully flexible POS Software
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Turn your mobile device into a point of sale and access the Suvidha POS app onto any smartphone or tablet.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-orange-600 mb-3">
                    Customizable terminal
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Personalize the home screen to keep popular products and important discounts at your fingertips.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-orange-600 mb-3">
                    Simple Setup
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Spend more time with guests & less in training.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 group shadow-lg border-2 border-orange-400/30 focus:ring-2 focus:ring-orange-500/30 focus:outline-none">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosFeatures;