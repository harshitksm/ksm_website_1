import React from 'react';
import { Mail, Phone, MapPin, LinkedinIcon, TwitterIcon, FacebookIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold ml-2">KSM CAPITAL</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Trusted wealth management partner for over a century, providing sophisticated solutions 
              for families, institutions, and entrepreneurs worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trust & Estate Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Family Office Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fiduciary Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Private Markets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News & Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ESG</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-400">223 Bayview<br />Thornhill, Ontario</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-400">+1 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-400">info@ksmcapital.ca</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 KSM CAPITAL. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Disclosures</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;