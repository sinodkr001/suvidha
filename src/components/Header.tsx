import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup function to re-enable body scrolling when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  // Function to get link styling based on active state and scroll state
  const getLinkStyle = (path: string) => {
    const active = isActive(path);
    const baseStyle = 'transition-colors font-medium';
    
    if (active) {
      // Active link styling - orange color regardless of scroll state
      return `${baseStyle} text-orange-500 font-semibold`;
    } else {
      // Inactive link styling - depends on scroll state
      return `${baseStyle} ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500`;
    }
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    // Re-enable body scrolling when menu closes
    document.body.style.overflow = 'auto';
  };

  // Function to handle menu toggle
  const toggleMobileMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    if (newMenuState) {
      // Disable body scrolling when menu opens
      document.body.style.overflow = 'hidden';
      // Scroll to top to ensure menu is visible
      window.scrollTo(0, 0);
    } else {
      // Re-enable body scrolling when menu closes
      document.body.style.overflow = 'auto';
    }
  };

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
            <Link to="/" className={getLinkStyle('/')}>
              Home
            </Link>
            <Link to="/outlet-types" className={getLinkStyle('/outlet-types')}>
              Products
            </Link>
            <Link to="/about" className={getLinkStyle('/about')}>
              About Us
            </Link>
            <Link to="/faq" className={getLinkStyle('/faq')}>
              FAQ
            </Link>
            <Link to="/contact" className={getLinkStyle('/contact')}>
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              GET STARTED
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={toggleMobileMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu - Full Screen */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-full bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 backdrop-blur-lg z-[9999] flex flex-col">
            {/* Header in Mobile Menu */}
            <div className="flex items-center justify-between p-6 border-b border-orange-100 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <img
                  src="/oldlogo (1).png"
                  alt="Suvidha POS Logo"
                  className="w-12 h-12 rounded-xl object-cover shadow-lg transform hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Suvidha</span>{' '}
                  <span className="text-gray-800">POS</span>
                </h3>
              </div>
              <button
                className="text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-orange-50"
                onClick={closeMobileMenu}
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Mobile Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-8 py-12 space-y-4">
            <Link to="/" onClick={closeMobileMenu} className={`block transition-all duration-300 font-semibold py-4 px-4 rounded-xl text-lg ${isActive('/') ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50 hover:border-l-4 hover:border-orange-300'}`}>
              Home
            </Link>
            <Link to="/outlet-types" onClick={closeMobileMenu} className={`block transition-all duration-300 font-semibold py-4 px-4 rounded-xl text-lg ${isActive('/outlet-types') ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50 hover:border-l-4 hover:border-orange-300'}`}>
              Products
            </Link>
            <Link to="/about" onClick={closeMobileMenu} className={`block transition-all duration-300 font-semibold py-4 px-4 rounded-xl text-lg ${isActive('/about') ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50 hover:border-l-4 hover:border-orange-300'}`}>
              About Us
            </Link>
            <Link to="/faq" onClick={closeMobileMenu} className={`block transition-all duration-300 font-semibold py-4 px-4 rounded-xl text-lg ${isActive('/faq') ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50 hover:border-l-4 hover:border-orange-300'}`}>
              FAQ
            </Link>
            <Link to="/contact" onClick={closeMobileMenu} className={`block transition-all duration-300 font-semibold py-4 px-4 rounded-xl text-lg ${isActive('/contact') ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-500' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50 hover:border-l-4 hover:border-orange-300'}`}>
              Contact Us
            </Link>
            <a href="/contact" onClick={closeMobileMenu} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 mt-8 text-center transform">
              GET STARTED
            </a>
            
            {/* Footer in Mobile Menu */}
            <div className="mt-auto pb-8 pt-6 border-t border-orange-100">
              <p className="text-center text-gray-500 text-sm">
                © 2025 Suvidha POS. All rights reserved.
              </p>
            </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;