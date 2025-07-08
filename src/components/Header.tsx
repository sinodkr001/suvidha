import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      isScrolled ? 'bg-white shadow-lg' : 'bg-red-50'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h3 className="text-2xl font-bold">
              <span className="text-orange-500">Suvidha</span>{' '}
              <span className="text-gray-800">POS</span>
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Home
            </a>
            <a href="#outlet-types" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Outlet Types
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              About Us
            </a>
            <a href="#faq" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              FAQ
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-semibold">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 space-y-4 animate-in slide-in-from-top">
            <a href="#home" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">
              Home
            </a>
            <a href="#outlet-types" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">
              Outlet Types
            </a>
            <a href="#about" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">
              About Us
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">
              FAQ
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">
              Contact Us
            </a>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full w-full font-semibold">
              GET STARTED
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;