import React from 'react';
import { Package, BarChart3, Users, Smartphone, Wifi, Monitor, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: "Inventory management",
    description: "Receive inventory, manage stock, and create purchase orders from a single platform.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: BarChart3,
    title: "Reporting and analytics",
    description: "Understand your business, from what items are bestsellers to when you're busiest.",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Staff management",
    description: "Set staff permissions to control what employees can access.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Customer management",
    description: "Create customer profiles to track purchases and deliver personalized shopping experiences.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Wifi,
    title: "Online & Offline",
    description: "Suvidha POS works both online & offline, the data synced immediately after internet connection is restored.",
    gradient: "from-rose-500 to-red-500"
  },
  {
    icon: Monitor,
    title: "Device Compatibility",
    description: "Suvidha POS works perfectly on all the devices, such as iPad, Android phone /tablets and modern POS Terminals.",
    gradient: "from-cyan-500 to-blue-500"
  }
];

const CoreFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 px-8 py-4 rounded-2xl text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-500/10 shadow-[0_0_15px_rgba(251,146,60,0.1)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-bold">
              CORE FEATURES
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Every Feature at Your{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Fingertips
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full transform origin-left"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Get everything you need to run your retail business in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(251,146,60,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-pink-500 group-hover:to-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {feature.description}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-pink-500/5 to-purple-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 text-white px-12 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(251,146,60,0.3)] hover:scale-105 font-semibold flex items-center gap-3 mx-auto group">
            Explore All Features
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;