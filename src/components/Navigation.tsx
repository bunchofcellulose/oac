'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#registration-form', label: 'Register' },
    { href: '#problems', label: 'Problems' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-white font-bold text-sm">OAC</span>
              </div>
              <span className="font-bold text-xl text-slate-100 group-hover:text-orange-400 transition-colors duration-300">OAC</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-slate-800/50 hover:scale-105 transform"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-orange-400 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-slate-800/50 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
