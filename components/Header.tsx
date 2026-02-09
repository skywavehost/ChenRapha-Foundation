
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://skywavehost.com/wp-content/uploads/2026/02/ChenRapha.png" 
              alt="ChenRapha Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-800 block leading-tight">ChenRapha</span>
              <span className="text-xs text-nature-green font-medium">Foundation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-vivid-red ${
                  location.pathname === item.path ? 'text-vivid-red' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-vivid-red text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              <Heart size={16} />
              <span>Donate</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md ${
                  location.pathname === item.path 
                    ? 'bg-red-50 text-vivid-red' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="w-full bg-vivid-red text-white px-6 py-3 rounded-xl font-bold flex justify-center items-center space-x-2 shadow-md"
              >
                <Heart size={20} />
                <span>Support Our Mission</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
