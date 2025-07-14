import React from 'react';
import { Clock, Zap, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "24×7 Support",
    description: "Support that never sleeps. Our dedicated team is always ready to help you succeed."
  },
  {
    icon: Zap,
    title: "Simply Awesome",
    description: "Built for speed, simplicity, and success — our POS helps your business run smarter every day with cutting-edge technology."
  },
  {
    icon: Shield,
    title: "Fast and Reliable",
    description: "Fast setup, seamless sales, and real-time insights. We make managing your business effortless with enterprise-grade reliability."
  },
  {
    icon: TrendingUp,
    title: "Value and Performance",
    description: "Smarter sales. Better support. Real results. That's why leading businesses choose us for their growth and success."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg">
            WHY CHOOSE US
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Suvidha POS is the
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Perfect Choice</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our premium POS solution designed for modern businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-orange-400/10 to-orange-600/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-orange-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
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