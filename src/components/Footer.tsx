import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const location = useLocation();

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  // Function to get footer link styling based on active state
  const getFooterLinkStyle = (path: string) => {
    const active = isActive(path);
    const baseStyle = 'transition-colors duration-300';
    
    if (active) {
      // Active link styling - white text and bold
      return `${baseStyle} text-white font-semibold`;
    } else {
      // Inactive link styling - gray with white hover
      return `${baseStyle} text-gray-400 hover:text-white`;
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-slate-900 to-black py-20 overflow-hidden">
      {/* Animated Background Elements */}
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <motion.img 
                src="/oldlogo (1).png" 
                alt="Suvidha POS Logo" 
                className="w-14 h-14 object-contain rounded-xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <h3 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Suvidha</span>{' '}
                <span className="text-white">POS</span>
              </h3>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Welcome to Suvidha POS, your premier destination for cutting-edge POS solutions across various industries.
            </p>
            
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/SuvidhaPos?rdid=H0sq5vaLb4fsZ8bM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B8BMuYE8v%2F#" 
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://x.com/SuvidhaPos" 
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/suvidhapos/?igsh=MXh6N3pnbTh2cDFqag%3D%3D#" 
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFyd9A39QuUigAAAZhjg-UIXAl8M3QzOW8Nenhwb12_SsA6T0gsV-pMHgTOKZJkeRbrFWmgGXMl92T464etRWCJmwcJef599mhPn3ke3Sew60-reEilGnZoPktl_-T0HXdNhto=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsuvidha-pos-71a3a52b8%2F%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" 
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-1 bg-white rounded-full"></div>
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link to="/" className={`${getFooterLinkStyle('/')} flex items-center group`}>
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                Home
              </Link>
              <Link to="/about" className={`${getFooterLinkStyle('/about')} flex items-center group`}>
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                About Us
              </Link>
              <Link to="/faq" className={`${getFooterLinkStyle('/faq')} flex items-center group`}>
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                FAQ
              </Link>
              <Link to="/outlet-types" className={`${getFooterLinkStyle('/outlet-types')} flex items-center group`}>
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                Outlet Types
              </Link>
              <Link to="/contact" className={`${getFooterLinkStyle('/contact')} flex items-center group`}>
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-1 bg-white rounded-full"></div>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  1559, 15th floor, Gaur City Mall Sector 18, Greater Noida Uttar Pradesh – 201301
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <p className="text-gray-300">(+91) 82-7171-8844</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <p className="text-gray-300">sales@suvidhapos.in</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <p className="text-gray-300">24/7 Hours Service</p>
              </div>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-1 bg-white rounded-full"></div>
              Legal
            </h4>
            <div className="space-y-3">
              <Link to="/terms" className={`${getFooterLinkStyle('/terms')} flex items-center group`}>
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                Terms & Conditions
              </Link>
              <Link to="/privacy" className={`${getFooterLinkStyle('/privacy')} flex items-center group`}>
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-white/10 mt-16 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-medium">
              © Copyright 2025 Suvidha POS, All right reserved.
            </p>
            <p className="text-gray-400 font-medium mt-4 md:mt-0">
              Powered by <span className="font-bold text-white">Suvidha POS</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.a 
        href="https://wa.me/918271718844" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-5 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[#25D366]/50 z-50"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="relative">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
            </svg>
            {/* <span className="text-sm font-semibold">WhatsApp</span> */}
          </div>
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.a>
    </footer>
  );
};

export default Footer;