import React from 'react';
import { QrCode, ShoppingCart, ChefHat, Truck } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    title: "1. Scan QR code to order",
    description: "Quick and easy access to our digital menu",
    image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: ShoppingCart,
    title: "2. Order your favourite items",
    description: "Browse and select from our extensive menu",
    image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: ChefHat,
    title: "3. Food will be prepared",
    description: "Our chefs prepare your order with care",
    image: "https://images.pexels.com/photos/2814602/pexels-photo-2814602.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: Truck,
    title: "4. Food will be delivered to you",
    description: "Fast and reliable delivery to your location",
    image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="mb-8 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;