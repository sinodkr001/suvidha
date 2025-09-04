import React from 'react';
import { Store, Building2, Calendar, ArrowRight } from 'lucide-react';

const storeTypes = [
  {
    icon: Store,
    title: "Single Store",
    description: "Sell better in store and online with powerful tools at accessible prices.",
    image: "/single.png",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Building2,
    title: "Multi-Store",
    description: "Streamline selling across multiple locations with one back office for every sale.",
    image: "/multi.png",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Use wireless POS software to sell at pop-ups, markets, and more.",
    image: "/event.png",
    gradient: "from-green-500 to-emerald-500"
  }
];

const StoreTypes = () => {
  return (
    <section className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-white px-8 py-4 rounded-2xl text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-500/10 shadow-[0_0_15px_rgba(251,146,60,0.1)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-bold">
              RETAIL STORE SOLUTIONS
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            The POS System That Fits{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Your Business
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full transform origin-left"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Whether you run a single store or multiple locations, our POS system adapts to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storeTypes.map((type, index) => (
            <div key={index} className="group relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(251,146,60,0.15)]">
              {/* Card Header with Icon */}
              <div className="relative p-8 flex items-center gap-4 border-b border-white/10">
                <div className={`bg-gradient-to-br ${type.gradient} p-4 rounded-2xl flex items-center justify-center shadow-lg`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-pink-500 group-hover:to-orange-600 transition-colors duration-300">
                  {type.title}
                </h3>
              </div>

              {/* Card Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img 
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {type.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-medium text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-pink-500/5 to-purple-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button
          onClick={() => {
            window.location.assign('/contact');
          }}
           className="bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 text-white px-12 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(251,146,60,0.3)] hover:scale-105 font-semibold flex items-center gap-3 mx-auto group">
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreTypes;