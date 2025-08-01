import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Check } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-50 py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/oldlogo (1).png" 
                alt="Suvidha POS Logo" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold">
                <span className="text-orange-500">Suvidha</span>{' '}
                <span className="text-gray-800">POS</span>
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to Suvidha POS, your premier destination for cutting-edge POS solutions across various industries.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/SuvidhaPos?rdid=H0sq5vaLb4fsZ8bM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B8BMuYE8v%2F#" className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/SuvidhaPos" className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/suvidhapos/?igsh=MXh6N3pnbTh2cDFqag%3D%3D#" className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFyd9A39QuUigAAAZhjg-UIXAl8M3QzOW8Nenhwb12_SsA6T0gsV-pMHgTOKZJkeRbrFWmgGXMl92T464etRWCJmwcJef599mhPn3ke3Sew60-reEilGnZoPktl_-T0HXdNhto=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsuvidha-pos-71a3a52b8%2F%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <Check className="w-4 h-4 text-orange-500 mr-3" />
                Home
              </Link>
              <Link to="/about" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <Check className="w-4 h-4 text-orange-500 mr-3" />
                About Us
              </Link>
              <Link to="/faq" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <Check className="w-4 h-4 text-orange-500 mr-3" />
                FAQ
              </Link>
              <Link to="/outlet-types" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <Check className="w-4 h-4 text-orange-500 mr-3" />
                Outlet Types
              </Link>
              <Link to="/contact" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <Check className="w-4 h-4 text-orange-500 mr-3" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  1559, 15th floor, Gaur City Mall Sector 18, Greater Noida Uttar Pradesh – 201301
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <p className="text-gray-600">(+91) 82-7171-8844</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <p className="text-gray-600">sales@suvidhapos.in</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <p className="text-gray-600">24/7 Hours Service</p>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Legal</h4>
            <div className="space-y-3">
              <Link to="/terms" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <Check className="w-4 h-4 text-orange-500 mr-3" />
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <Check className="w-4 h-4 text-orange-500 mr-3" />
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-600 font-medium">
              © Copyright 2025 Suvidha POS, All right reserved.
            </p>
            <p className="text-orange-600 font-medium mt-4 md:mt-0">
              Powered by <span className="font-bold">Suvidha POS</span>
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/918271718844" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;