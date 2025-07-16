import React from 'react';
import { Store, Building2, Calendar } from 'lucide-react';

const storeTypes = [
  {
    icon: Store,
    title: "Single store",
    description: "Sell better in store and online with powerful tools at accessible prices.",
    image: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: Building2,
    title: "Multi-store",
    description: "Streamline selling across multiple locations with one back office for every sale.",
    image: "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Use wireless POS software to sell at pop-ups, markets, and more.",
    image: "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const StoreTypes = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg">
            RETAIL STORE SOLUTIONS
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The POS system that fits your
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you run a single store or multiple locations, our POS system adapts to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {storeTypes.map((type, index) => (
            <div key={index} className="group relative">
              <div className="relative h-[400px] overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <img 
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <type.icon className="w-8 h-8 text-orange-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {type.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                  
                  <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreTypes;