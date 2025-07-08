import React from 'react';
import { Store, Building2, Calendar } from 'lucide-react';

const storeTypes = [
  {
    icon: Store,
    title: "Single store",
    description: "Sell better in store and online with powerful tools at accessible prices.",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Building2,
    title: "Multi-store",
    description: "Streamline selling across multiple locations with one back office for every sale.",
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Use wireless POS software to sell at pop-ups, markets, and more.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const StoreTypes = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-block">
            RETAIL STORE
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The POS system that fits your store
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {storeTypes.map((type, index) => (
            <div key={index} className="text-center group">
              <div className="mb-8 overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={type.image}
                  alt={type.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                {type.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreTypes;