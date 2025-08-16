import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
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
              Outlet Types
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 top-full w-full bg-white/95 backdrop-blur-md shadow-xl z-50 px-6 py-6 space-y-4 border-t border-gray-200">
            <Link to="/" onClick={closeMobileMenu} className={`block transition-colors font-medium py-3 px-2 rounded-lg ${isActive('/') ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'}`}>
              Home
            </Link>
            <Link to="/outlet-types" onClick={closeMobileMenu} className={`block transition-colors font-medium py-3 px-2 rounded-lg ${isActive('/outlet-types') ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'}`}>
              Outlet Types
            </Link>
            <Link to="/about" onClick={closeMobileMenu} className={`block transition-colors font-medium py-3 px-2 rounded-lg ${isActive('/about') ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'}`}>
              About Us
            </Link>
            <Link to="/faq" onClick={closeMobileMenu} className={`block transition-colors font-medium py-3 px-2 rounded-lg ${isActive('/faq') ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'}`}>
              FAQ
            </Link>
            <Link to="/contact" onClick={closeMobileMenu} className={`block transition-colors font-medium py-3 px-2 rounded-lg ${isActive('/contact') ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'}`}>
              Contact Us
            </Link>
            <a href="/contact" onClick={closeMobileMenu} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 mt-4">
              GET STARTED
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;