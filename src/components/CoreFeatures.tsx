import React from 'react';
import { Package, BarChart3, Users, Smartphone, Wifi, Monitor, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: "Inventory management",
    description: "Receive inventory, manage stock, and create purchase orders from a single platform."
  },
  {
    icon: BarChart3,
    title: "Reporting and analytics",
    description: "Understand your business, from what items are bestsellers to when you're busiest."
  },
  {
    icon: Users,
    title: "Staff management",
    description: "Set staff permissions to control what employees can access."
  },
  {
    icon: Smartphone,
    title: "Customer management",
    description: "Create customer profiles to track purchases and deliver personalized shopping experiences."
  },
  {
    icon: Wifi,
    title: "Online & Offline",
    description: "Suvidha POS works both online & offline, the data synced immediately after internet connection is restored."
  },
  {
    icon: Monitor,
    title: "Device Compatibility",
    description: "Suvidha POS works perfectly on all the devices, such as iPad, Android phone /tablets and modern POS Terminals."
  }
];

const CoreFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-block">
            POS FEATURES
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Every feature at your fingertips
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get everything you need to run your retail business in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group hover:border-pink-300"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-blue-600 mb-6">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 mx-auto group">
            Explore all features
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;