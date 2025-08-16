import React from 'react';
import { QrCode, ShoppingCart, ChefHat, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: QrCode,
    title: "1. Scan QR code to order",
    description: "Quick and easy access to our digital menu with instant ordering capabilities",
    image: "/scan-new.png",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingCart,
    title: "2. Order your favourite items",
    description: "Browse and select from our extensive menu with real-time availability",
    image: "/order-new.png",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: ChefHat,
    title: "3. Food will be prepared",
    description: "Our expert chefs prepare your order with care and attention to detail",
    image: "/process-new.png",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Truck,
    title: "4. Food will be delivered to you",
    description: "Fast and reliable delivery to your location with real-time tracking",
    image: "/delivery-new.png",
    color: "from-purple-500 to-pink-500"
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-white px-8 py-4 rounded-2xl text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-500/20 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(251,146,60,0.2)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
            SIMPLE & EFFICIENT PROCESS
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white">How it</span>{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Works?
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience our streamlined process designed for maximum efficiency and customer satisfaction
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step Number Badge */}
              <motion.div 
                className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {index + 1}
              </motion.div>

              {/* Card Container */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Image Container */}
                <div className="mb-6 overflow-hidden rounded-2xl relative">
                  <motion.img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <motion.div 
                    className={`absolute top-4 left-4 bg-gradient-to-r ${step.color} text-white p-3 rounded-xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for connection (except last item) */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full shadow-lg">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
          onClick={() => {
            window.location.href = '/contact';
          }}
            className="group bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl hover:shadow-orange-500/25 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(251,146,60,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Get Started Today
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;