import React from 'react';
import { Clock, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "24×7 Support",
    description: "Support that never sleeps. Our dedicated team is always ready to help you succeed.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Zap,
    title: "Simply Awesome",
    description: "Built for speed, simplicity, and success — our POS helps your business run smarter every day with cutting-edge technology.",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Fast and Reliable",
    description: "Fast setup, seamless sales, and real-time insights. We make managing your business effortless with enterprise-grade reliability.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Value and Performance",
    description: "Smarter sales. Better support. Real results. That's why leading businesses choose us for their growth and success.",
    gradient: "from-purple-500 to-pink-500"
  }
];

const WhyChooseUs = () => {
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
              WHY CHOOSE US
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Why Suvidha POS is the{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Perfect Choice
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full transform origin-left"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Experience the difference with our premium POS solution designed for modern businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(251,146,60,0.15)]"
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-pink-500 group-hover:to-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-pink-500/10 to-purple-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-3xl p-10 backdrop-blur-sm border border-orange-500/10 shadow-[0_0_30px_rgba(251,146,60,0.1)] hover:shadow-[0_20px_50px_rgba(251,146,60,0.2)] transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-3xl p-10 backdrop-blur-sm border border-orange-500/10 shadow-[0_0_30px_rgba(251,146,60,0.1)] hover:shadow-[0_20px_50px_rgba(251,146,60,0.2)] transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 mb-2">24/7</div>
            <div className="text-gray-400">Premium Support</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-3xl p-10 backdrop-blur-sm border border-orange-500/10 shadow-[0_0_30px_rgba(251,146,60,0.1)] hover:shadow-[0_20px_50px_rgba(251,146,60,0.2)] transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 mb-2">99.9%</div>
            <div className="text-gray-400">System Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;