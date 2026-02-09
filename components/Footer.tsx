
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram } from 'lucide-react';
import { CONTACT_INFO, MISSION } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://skywavehost.com/wp-content/uploads/2026/02/ChenRapha.png" 
                alt="Logo" 
                className="h-10 w-auto brightness-200"
              />
              <span className="text-xl font-bold text-white">ChenRapha</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 italic">
              "Grace from the one who heals."
            </p>
            <p className="text-sm leading-relaxed">
              {MISSION}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 border-l-4 border-gold pl-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Our Foundation</Link></li>
              <li><Link to="/programs" className="hover:text-gold transition-colors">Our Programs & Impact</Link></li>
              <li><Link to="/donate" className="hover:text-gold transition-colors">Make a Donation</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Apply for Support</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Nigeria Office */}
          <div>
            <h4 className="text-white font-bold mb-6 border-l-4 border-nature-green pl-4 uppercase tracking-wider text-sm">Nigeria Office</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-nature-green flex-shrink-0" size={18} />
                <span>Lagos, Nigeria (Volunteer Medical Hub)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-nature-green flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-nature-green flex-shrink-0" size={18} />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* US Office */}
          <div>
            <h4 className="text-white font-bold mb-6 border-l-4 border-vivid-red pl-4 uppercase tracking-wider text-sm">US HQ (Funding)</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-vivid-red flex-shrink-0" size={18} />
                <span>Maryland, United States (HQ)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-vivid-red flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.usPhone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="text-vivid-red flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ChenRapha Foundation. All Rights Reserved. US 501(c)(3) Nonprofit Status.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
