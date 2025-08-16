import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSales = () => {
  return (
    <section className="relative mt-20 py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50"></div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,146,60,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/2 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-700 px-8 py-4 rounded-2xl text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-200 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
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
              <Sparkles className="w-5 h-5 text-orange-500" />
            </motion.div>
            PREMIUM POS SOLUTION
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-orange-500" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-800">Ready to Transform Your</span>{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600">
                Business?
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contact our sales team today and get a{' '}
            <motion.span 
              className="text-orange-600 font-medium"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              free trial
            </motion.span>{' '}
            of our premium POS solution designed for modern enterprises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-orange-500/25 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251,146,60,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Sales Team
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.a>

            <motion.button 
            onClick={() => {
              window.location.href = '/contact';
            }}
              className="group bg-white/80 backdrop-blur-sm border border-orange-200 text-orange-600 px-12 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center gap-3 hover:bg-white hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get Free Trial
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-12 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="text-3xl font-bold text-orange-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                500+
              </motion.div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="text-3xl font-bold text-orange-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                24/7
              </motion.div>
              <div className="text-gray-600 font-medium">Support</div>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="text-3xl font-bold text-orange-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                99.9%
              </motion.div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </motion.div>
          </motion.div>
        </motion.div>
    </div>
  </section>
);
};

export default ContactSales; 