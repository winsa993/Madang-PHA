import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">MPHA</span>
            </div>
            <p className="text-sm leading-relaxed">
              The official digital platform for the Madang Provincial Health Authority. 
              Dedicated to providing quality healthcare services to the residents of Madang Province.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Health Services</Link></li>
              <li><Link to="/programs" className="hover:text-emerald-500 transition-colors">Public Health Programs</Link></li>
              <li><Link to="/news" className="hover:text-emerald-500 transition-colors">News & Announcements</Link></li>
              <li><Link to="/directory" className="hover:text-emerald-500 transition-colors">Facility Directory</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/downloads" className="hover:text-emerald-500 transition-colors">Health Reports</Link></li>
              <li><Link to="/downloads" className="hover:text-emerald-500 transition-colors">Policies & Plans</Link></li>
              <li><Link to="/careers" className="hover:text-emerald-500 transition-colors">Careers & Vacancies</Link></li>
              <li><Link to="/education" className="hover:text-emerald-500 transition-colors">Health Education</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-emerald-500 shrink-0" size={18} />
                <span>Modilon Road, Madang Town, Madang Province, PNG</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-emerald-500 shrink-0" size={18} />
                <span>+675 422 2022</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-emerald-500 shrink-0" size={18} />
                <span>info@madanghealth.gov.pg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Madang Provincial Health Authority. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
