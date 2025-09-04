import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, Sparkles, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Ram Kumar",
    business: "Swaad Restaurant",
    text: "Customer support is top-notch. Highly recommended! The POS system has transformed how we manage our restaurant operations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Sharma",
    business: "Fresh Mart",
    text: "Amazing POS solution! Easy to use and incredibly reliable. Our sales have increased by 30% since implementation.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rajesh Patel",
    business: "Coffee Corner",
    text: "The offline capability saved us during internet outages. Seamless synchronization when back online. Perfect for our busy cafe.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    name: "Anita Desai",
    business: "Sweet Treats Bakery",
    text: "The inventory management feature is a game-changer. We've reduced waste by 40% and our profits have soared. Excellent system!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    name: "Vikram Singh",
    business: "Tech Gadgets Store",
    text: "Multi-location support is fantastic. We can manage all our stores from one dashboard. The reporting features are incredibly detailed.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Meera Reddy",
    business: "Fashion Boutique",
    text: "The customer loyalty program integration is brilliant. Our repeat customers have increased by 50%. Highly recommend for retail businesses.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = Math.ceil(testimonials.length / 3);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, nextSlide]);

  // Pause auto-scroll when user interacts
  const handleManualNavigation = (direction: 'next' | 'prev') => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

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
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>

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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-white px-8 py-4 rounded-2xl text-sm font-semibold mb-8 backdrop-blur-sm border border-purple-500/20 shadow-[0_0_15px_rgba(147,51,234,0.1)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(147,51,234,0.2)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
            </motion.div>
            CUSTOMER TESTIMONIALS
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Customers are</span>{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600">
                Lovin' It
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600 rounded-full"
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
            Discover what our valued customers have to say about their experience with Suvidha POS
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={() => handleManualNavigation('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={() => handleManualNavigation('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-16">
            <AnimatePresence mode="wait">
              {getCurrentTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={`${currentSlide}-${idx}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 pt-16 relative flex flex-col items-center text-center min-h-[400px] sm:min-h-[450px] transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      borderColor: "rgba(147,51,234,0.3)",
                      boxShadow: "0 20px 40px rgba(147,51,234,0.1)"
                    }}
                  >
                    {/* Quote Icon */}
                    <motion.div 
                      className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full p-4 shadow-lg border-4 border-gray-900"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Quote className="w-8 h-8" />
                    </motion.div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed italic font-medium flex-1">
                      "{testimonial.text}"
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-6" />

                    {/* User */}
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mt-auto">
                      {testimonial.image ? (
                        <motion.img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500 shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      ) : (
                        <motion.div 
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <span className="text-white font-bold text-lg sm:text-2xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        </motion.div>
                      )}
                      <div className="text-left">
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm sm:text-base text-purple-300 font-medium">
                          {testimonial.business}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 gap-3">
            {[...Array(totalSlides)].map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <motion.div 
            className="flex justify-center mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <motion.div
                className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-purple-500' : 'bg-gray-600'}`}
                animate={isAutoPlaying ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: isAutoPlaying ? Infinity : 0 }}
              />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;