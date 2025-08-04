// NOTE: For best results, add this to your <head> in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
// And add 'font-poppins' to your Tailwind config if desired.
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, ArrowRight, Users, Target, Award, Shield, Clock, CheckCircle } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const AboutUs = () => {
  // Ensure page scrolls to top when component mounts  
  useScrollToTop();
  
  return (
    <div className="font-[Poppins]">
    {/* Hero Banner */}
    <div className="relative h-[500px] w-full overflow-hidden">
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

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
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
          WHO WE ARE
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-orange-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Us
        </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
          Discover Suvidha POS: Expertise in Point of Sale & Business Solutions
          </motion.p>
        </div>
      </div>

      {/* Main Content - Light Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,146,60,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
    </div>

        {/* Gradient Orbs for Light Section */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Company Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-20">
            <motion.div 
              className="space-y-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-xs text-orange-600 font-bold mb-2 tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Company
              </motion.div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We create innovative experiences that transform brands and grow businesses.
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Welcome to Suvidha POS, your premier destination for cutting-edge POS solutions across various industries. With years of experience in inventory management, hospitality, retail, and wholesale sectors, we specialize in providing tailored POS solutions to businesses of all sizes.
              </motion.p>
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                At Suvidha POS, we understand the diverse needs of our clients, which is why we offer POS solutions designed specifically for retail outlets, bars, restaurants, salons, liquor stores, and more. Our POS (Point of Sale) system is a versatile billing application that seamlessly integrates with a wide range of devices, including iPads, Android phones, tablets, as well as traditional and modern POS terminals.
              </motion.p>
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                One of the key features of our POS system is its ability to function both online and offline. Even in areas with limited internet connectivity, our POS system ensures uninterrupted operations by allowing transactions to be processed offline, with data syncing automatically once an internet connection is restored.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-8 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="rounded-3xl shadow-2xl overflow-hidden bg-white/80 hover:scale-105 transition-transform duration-300 border border-orange-100"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(251,146,60,0.2)"
                }}
              >
                <img src="/process-new.png" alt="POS Illustration" className="w-full max-w-xs mx-auto object-cover" />
              </motion.div>
              <motion.div 
                className="rounded-3xl shadow-2xl overflow-hidden bg-white/80 hover:scale-105 transition-transform duration-300 border border-orange-100"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(251,146,60,0.2)"
                }}
              >
                <img src="/delivery-new.png" alt="Cloud POS" className="w-full max-w-xs mx-auto object-cover" />
              </motion.div>
            </motion.div>
          </div>
            </div>
          </div>

      {/* Vision & Values - Dark Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Gradient Orbs for Dark Section */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-xs text-purple-400 font-bold mb-2 tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Vision
              </motion.div>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our customer centric is wonderful power
              </motion.h3>
              <motion.div 
                className="rounded-3xl shadow-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 mb-4"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 40px rgba(168,85,247,0.2)"
                }}
              >
              <img src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&w=400&h=200&fit=crop" alt="Teamwork" className="w-full max-w-sm object-cover" />
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-xs text-purple-400 font-bold mb-2 tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Change is Opportunity
              </motion.div>
              <ul className="space-y-4 text-gray-300 text-lg">
                {[
                  {
                    title: "DELIVER WOW",
                    description: "We aim to deliver WOW to our customers, whether with great customer service, intuitive software or value for money."
                  },
                  {
                    title: "BE CRAZY",
                    description: "To innovate we need to be a little crazy, think out of the box and be agile. Don't be afraid to fail – fail fast and learn quickly, to find the best solutions for our customers and business."
                  },
                  {
                    title: "HAPPY PEOPLE",
                    description: "We are all one big family, to be happy, we all need to be happy. Don't take yourself too seriously, have fun at work, play hard, work hard."
                  }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 10px 30px rgba(168,85,247,0.1)"
                    }}
                  >
                    <span className="font-bold text-white">{item.title}</span><br />{item.description}
                  </motion.li>
                ))}
            </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Reasons to Partner - Light Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Gradient Orbs for Blue Section */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-blue-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center text-xs text-blue-600 font-bold mb-2 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Reasons to Partner with Suvidha POS
            </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Clock className="w-12 h-12 text-blue-600" />,
                  title: "Quick response",
                  description: "We can log in to your PC or server remotely and resolve many issues immediately without the wait for a technician to travel to your location."
                },
                {
                  icon: <Target className="w-12 h-12 text-blue-600" />,
                  title: "Business savvy",
                  description: "We design, evaluate and justify technology solutions from a thorough understanding of the business benefit for your company."
                },
                {
                  icon: <Award className="w-12 h-12 text-blue-600" />,
                  title: "100% Satisfaction Guarantee",
                  description: "We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 shadow-lg flex flex-col items-center text-center hover:border-blue-300 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59,130,246,0.2)"
                  }}
                >
                  <motion.div 
                    className="mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
            </div>
          </div>

      {/* Our Support - Dark Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Gradient Orbs for Dark Section */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-green-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Support
            </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: <Users className="w-12 h-12 text-green-400" />,
                  title: "Onboarding",
                  description: "We provide a smooth and secure onboarding process at a stipulated time."
                },
                {
                  icon: <Shield className="w-12 h-12 text-green-400" />,
                  title: "QR Code Designing",
                  description: "We design your customized QR code for stickers and standees."
                },
                {
                  icon: <Clock className="w-12 h-12 text-green-400" />,
                  title: "Remote Support",
                  description: "Get instant technical support and troubleshooting assistance remotely from our expert team."
                },
                {
                  icon: <CheckCircle className="w-12 h-12 text-green-400" />,
                  title: "Staff Training",
                  description: "Comprehensive training programs to ensure your team masters the POS system efficiently."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-lg flex flex-col items-center text-center hover:border-green-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(34,197,94,0.2)"
                  }}
                >
                  <motion.div 
                    className="mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
            </div>
          </div>

      {/* CTA Section - Orange Theme */}
      <div className="relative py-20 overflow-hidden">
        {/* Orange Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,146,60,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Gradient Orbs for Orange Section */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-amber-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              Business?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience the efficiency, reliability, and flexibility of our POS solutions at Suvidha POS. Let us streamline your business operations and enhance your customer experience today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full font-bold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-orange-200 text-orange-600 rounded-full font-bold hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
  </div>
  );
};

export default AboutUs; 