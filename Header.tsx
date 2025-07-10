import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                KSM CAPITAL
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className={`flex items-center space-x-1 py-2 transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#about" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}>
              About
            </a>
            <a href="#team" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}>
              Team
            </a>
            <a href="#insights" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}>
              Insights
            </a>
            <a href="#contact" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}>
              Contact
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Client Portal
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600">Team</a>
              <a href="#insights" className="text-gray-700 hover:text-blue-600">Insights</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors w-full">
                Client Portal
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;