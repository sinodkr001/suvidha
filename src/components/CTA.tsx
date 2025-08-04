import React from 'react';
import { ArrowRight, Smartphone, Sparkles, Zap, BarChart3, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50">
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
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Premium Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-700 px-6 py-3 rounded-2xl text-sm font-semibold mb-6 backdrop-blur-sm border border-orange-200 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
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
                <Sparkles className="w-4 h-4 text-orange-500" />
              </motion.div>
              MOBILE DASHBOARD APP
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-orange-500" />
              </motion.div>
            </motion.div>

            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-800">Dashboard App:</span>{' '}
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600">
                  Reports at your Fingertips
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.span>
              <br />
              <span className="text-gray-800">Anywhere, Anytime</span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Access your business reports, employee activities and profit summary on the go in real-time 
              with the help of Mobile Dashboard App, that works with PCs, Macs, iOS & Android tablets.
            </motion.p>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-xl">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Real-time Reports</h4>
                  <p className="text-gray-600 text-sm">Live business insights</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-orange-100"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Profit Tracking</h4>
                  <p className="text-gray-600 text-sm">Monitor your earnings</p>
          </div>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.button 
              className="group bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-orange-500/25 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251,146,60,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Download App Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.img 
              src="/mobile_app (1).jpg"
              alt="Mobile Dashboard"
                className="w-full h-96 max-w-sm mx-auto rounded-3xl shadow-2xl object-cover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm">Available Now</span>
                </div>
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-orange-100"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">4.8★</div>
                  <div className="text-sm text-gray-600">App Store Rating</div>
          </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;