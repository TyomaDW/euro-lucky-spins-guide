
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-casinoDark-secondary border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-casinoYellow">euluckigiro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link font-medium">COMPARE</Link>
            <Link to="/about" className="nav-link font-medium">ABOUT US</Link>
            <Link to="/faq" className="nav-link font-medium">FAQ</Link>
            <Link to="/contact" className="nav-link font-medium">CONTACT</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-casinoDark-secondary animate-fade-in">
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-4">
              <Link to="/" className="nav-link font-medium block py-2" onClick={() => setIsMenuOpen(false)}>COMPARE</Link>
              <Link to="/about" className="nav-link font-medium block py-2" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
              <Link to="/faq" className="nav-link font-medium block py-2" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" className="nav-link font-medium block py-2" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
