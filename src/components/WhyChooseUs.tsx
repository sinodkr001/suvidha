import React from 'react';
import { Clock, Zap, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "24×7 Support",
    description: "Support that never sleeps."
  },
  {
    icon: Zap,
    title: "Simply Awesome",
    description: "Built for speed, simplicity, and success — our POS helps your business run smarter every day."
  },
  {
    icon: Shield,
    title: "Fast and Reliable",
    description: "Fast setup, seamless sales, and real-time insights. We make managing your business effortless."
  },
  {
    icon: TrendingUp,
    title: "Value and Performance",
    description: "Smarter sales. Better support. Real results. That's why businesses choose us."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Suvidha POS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;