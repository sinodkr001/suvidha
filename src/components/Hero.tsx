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
    <section id="home" className="pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-20 blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Content */}
          <div className="lg:w-1/2 text-white">
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4" />
              POINT OF SALE (POS)
              <Zap className="w-4 h-4" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
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
                  className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full"
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
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Managing your whole business operation, Analyzing your performance and 
              Responding to your customer needs will be{' '}
              <span className="text-orange-400 font-semibold">easier than ever</span>.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-start"
              variants={itemVariants}
            >
              <motion.button 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-orange-500/25"
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
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.button 
                className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="w-6 h-6" />
                </motion.div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-gray-700"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-orange-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  500+
                </motion.div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-orange-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-orange-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                >
                  99.9%
                </motion.div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </motion.div>
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
                <img 
                  src="/image.png" 
                  alt="Suvidha POS System in Action" 
                  className="w-full rounded-3xl shadow-2xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">Live System</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-30 blur-xl"
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
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-25 blur-xl"
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

              {/* Floating Icons */}
              <motion.div
                className="absolute top-1/4 -right-12 bg-white/10 backdrop-blur-sm p-3 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-6 h-6 text-orange-400" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 -left-12 bg-white/10 backdrop-blur-sm p-3 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 text-blue-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
};

export default Hero;