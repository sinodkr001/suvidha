import React from 'react';
import { QrCode, ShoppingCart, ChefHat, Truck } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    title: "1. Scan QR code to order",
    description: "Quick and easy access to our digital menu",
    image: "/scan-new.png"
  },
  {
    icon: ShoppingCart,
    title: "2. Order your favourite items",
    description: "Browse and select from our extensive menu",
    image: "/order-new.png"
  },
  {
    icon: ChefHat,
    title: "3. Food will be prepared",
    description: "Our chefs prepare your order with care",
    image: "/process-new.png"
  },
  {
    icon: Truck,
    title: "4. Food will be delivered to you",
    description: "Fast and reliable delivery to your location",
    image: "/delivery-new.png"
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
              <div className="mb-8 overflow-hidden rounded-2xl transition-all duration-300">
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
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