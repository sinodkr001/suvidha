import React from 'react';
import { Smartphone, Settings, Users, ArrowRight } from 'lucide-react';

const PosFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="POS System" 
              className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold mb-6 inline-block">
              POS SOFTWARE
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
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
            
            <button className="mt-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 group">
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