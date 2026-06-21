import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
  ];

  return (
    <nav className="relative z-[100] flex items-center justify-between px-5 md:px-12 lg:px-24 py-5 w-full bg-white border-b border-gray-100">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 z-50">
        <img src="/FL.jpeg" alt="FL Logo" className="h-10 md:h-12 mix-blend-multiply" />
        <span className="font-bold text-lg md:text-xl text-[#0A1128]">Forten Solutions</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`transition-colors ${
              location.pathname === link.path ? 'text-[#0066FF]' : 'text-gray-500 hover:text-[#0066FF]'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop CTA */}
      <Link
        to="/consultation"
        className="hidden lg:flex bg-[#0A1128] hover:bg-gray-800 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors items-center space-x-2"
      >
        <span>Let's Talk</span>
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-[#0A1128] focus:outline-none z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[100%] left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col p-6 space-y-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold ${
                  location.pathname === link.path ? 'text-[#0066FF]' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setIsOpen(false)}
              className="bg-[#0A1128] text-white px-5 py-3 rounded-md text-center font-semibold mt-4 flex items-center justify-center space-x-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
