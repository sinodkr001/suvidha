import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/oldlogo (1).png"
              alt="Suvidha POS Logo"
              className="w-12 h-12 rounded-xl object-cover shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Suvidha</span>{' '}
              <span className={isScrolled ? 'text-gray-800' : 'text-white'}>POS</span>
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              Home
            </Link>
            <Link to="/outlet-types" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              Outlet Types
            </Link>
            <Link to="/about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              About Us
            </Link>
            <Link to="/faq" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              FAQ
            </Link>
            <Link to="/contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500 transition-colors font-medium`}>
              Contact Us
            </Link>
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
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 top-full w-full bg-white/80 backdrop-blur-lg shadow-lg z-50 px-6 py-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Home
            </Link>
            <Link to="/outlet-types" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Outlet Types
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/faq" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              FAQ
            </Link>
            <a href="#contact" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contact Us
            </a>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
              GET STARTED
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;