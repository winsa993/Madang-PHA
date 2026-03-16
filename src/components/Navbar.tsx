import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, AlertTriangle, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Health Services', path: '/services' },
    { name: 'Programs', path: '/programs' },
    { name: 'News', path: '/news' },
    { name: 'Directory', path: '/directory' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled ? 'bg-white/90 backdrop-blur-md py-2 border-slate-200 shadow-sm' : 'bg-white py-4 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-600 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="block text-xl font-bold text-slate-900 leading-none">MPHA</span>
              <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Madang Health Authority</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-emerald-600',
                  location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+6754222022"
              className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-rose-100 transition-colors"
            >
              <Phone size={16} />
              Emergency
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-4 text-base font-medium rounded-md',
                  location.pathname === link.path ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="tel:+6754222022"
                className="flex items-center justify-center gap-2 bg-rose-600 text-white px-4 py-3 rounded-xl text-base font-bold"
              >
                <AlertTriangle size={20} />
                Emergency Hotline
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
