import React from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, easeInOut, easeOut } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const springConfig = { stiffness: 100, damping: 15, mass: 1 };
  const scale = useSpring(1, springConfig);

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
        ease: easeOut
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
        ease: easeOut
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const gradientAnimation = {
    animate: {
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.2, 1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  return (
    <motion.section 
      className="pt-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black min-h-screen flex items-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </motion.div>

      {/* Premium Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px]"
        variants={gradientAnimation}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]"
        variants={gradientAnimation}
        animate="animate"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ scale }}
        >
          {/* Left Side - Content */}
          <div className="lg:w-1/2 text-white">
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/5 to-pink-500/5 text-white px-8 py-4 rounded-2xl text-sm font-semibold mb-8 mt-8 sm:mt-0 backdrop-blur-sm border border-orange-500/10 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(251,146,60,0.2)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-orange-400" />
              </motion.div>
              PREMIUM POS SOLUTION
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-5 h-5 text-orange-400" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Transform Your{' '}
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                  Business
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </motion.span>
              {' '}with Modern<br />
              Solutions by{' '}
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
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
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light"
              variants={itemVariants}
            >
              Experience the next generation of business management with our{' '}
              <motion.span 
                className="text-orange-400 font-medium"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                premium POS solution
              </motion.span>{' '}
              designed for modern enterprises.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 items-start"
              variants={itemVariants}
            >
              <motion.a 
                href="/contact"
                className="group bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-orange-500/25 backdrop-blur-sm"
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
              </motion.a>

              <motion.button 
                className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Watch Demo
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Play className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
          
          {/* Right Side - Image */}
          <motion.div 
            className="lg:w-1/2"
            variants={imageVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <motion.img 
                  src="/image.png" 
                  alt="Suvidha POS System in Action" 
                  className="w-full h-[600px] rounded-3xl shadow-2xl object-cover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                
                {/* Glass Morphism Effect - Removed blur, keeping gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                
                {/* Premium Badge */}
                <motion.div
                  className="absolute top-8 right-8 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm"
                  variants={floatingVariants}
                  animate="animate"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-base font-bold text-white">Premium Solution</span>
                  </div>
                </motion.div>

                {/* Stats Badge */}
                <motion.div
                  className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl shadow-lg border border-white/20"
                  variants={floatingVariants}
                  animate="animate"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center gap-8">
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        500+
                      </motion.div>
                      <div className="text-sm text-gray-300 mt-1">Happy Clients</div>
                    </motion.div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        24/7
                      </motion.div>
                      <div className="text-sm text-gray-300 mt-1">Support</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;