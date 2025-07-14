import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Suvidha</span>{' '}
              <span className={isScrolled ? 'text-gray-800' : 'text-white'}>POS</span>
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              Home
            </a>
            <a href="#outlet-types" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              Outlet Types
            </a>
            <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              About Us
            </a>
            <a href="#faq" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              FAQ
            </a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Home
            </a>
            <a href="#outlet-types" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Outlet Types
            </a>
            <a href="#about" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              About Us
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              FAQ
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contact Us
            </a>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;