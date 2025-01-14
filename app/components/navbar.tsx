'use client';

import React, { useState } from 'react';
import { Linkedin, Github, Menu, X, Home } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'About Me', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'Hire Me', href: '/hire' },
    { label: 'Home', Icon: Home, href: '/' },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/lukefournier711/', label: 'LinkedIn', isExternal: true },
    { Icon: Github, href: 'https://github.com/', label: 'GitHub', isExternal: true },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 p-4 z-50">
      <nav className="backdrop-blur-sm bg-zinc-800/40 rounded-xl text-gray-300 mx-auto max-w-[calc(100vw-2rem)] md:max-w-[720px] lg:max-w-[920px] xl:max-w-[1200px] transition-all duration-300 ease-in-out">
        <div className="px-4">
          <div className="flex items-center justify-between h-14">
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map(({ Icon, href, label, isExternal }) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-white transition-colors duration-200"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {item.Icon ? <item.Icon className="w-5 h-5" /> : item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-48' : 'max-h-0'
            }`}
          >
            <div className="py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-white text-sm font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.Icon ? <item.Icon className="w-5 h-5" /> : item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;