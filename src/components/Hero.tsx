import React from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="pt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Content */}
          <div className="lg:w-1/2 text-white">
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-500/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              POINT OF SALE (POS)
              <Zap className="w-4 h-4 text-orange-400" />
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Build Your{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                  Retail
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>
              {' '}/ Restaurant<br />
              businesses with{' '}
              <span className="relative inline-block">
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Suvidha POS
                </motion.span>
                <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Managing your whole business operation, Analyzing your performance and 
              Responding to your customer needs will be{' '}
              <span className="text-orange-400 font-semibold">easier than ever</span>.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-start"
              variants={itemVariants}
            >
              <motion.button 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-orange-500/25"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              
              <motion.button 
                className="group border border-white/20 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="w-5 h-5" />
                </motion.div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            {/* <motion.div 
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-800"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-orange-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-orange-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-orange-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                >
                  99.9%
                </motion.div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
            </motion.div> */}
          </div>
          
          {/* Right Side - Image */}
          <div className="lg:w-1/2">
            <motion.div 
              className="relative"
              variants={imageVariants}
            >
              {/* Main Image */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img 
                    src="/image.png" 
                    alt="Suvidha POS System in Action" 
                    className="w-full h-[500px] rounded-3xl shadow-2xl"
                  />
                  
                  {/* Glass Morphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent backdrop-blur-[1px] rounded-3xl"></div>
                  
                  {/* Premium Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">Premium Solution</span>
                    </div>
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-xs text-gray-300">Happy Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-xs text-gray-300">Support</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-orange-400/30 to-pink-500/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400/25 to-purple-500/25 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;