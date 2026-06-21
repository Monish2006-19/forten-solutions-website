import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function GlobalFooter() {
  return (
    <footer className="bg-[#0A1128] text-gray-300 pt-20 pb-8 border-t border-white/10 mt-auto">
      <div className="w-full px-5 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-6 bg-white/90 p-2 rounded w-fit">
            <img src="/logo.jpg" alt="Forten Solutions" className="h-10 mix-blend-multiply" />
          </div>
          <p className="text-sm text-gray-400 mb-8">Committed to your success.</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/forten-solutions-1a9674418/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] transition-colors"><Linkedin className="w-4 h-4 text-white" /></a>
            <a href="https://x.com/FortenSolutions" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] transition-colors"><svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=forten.solutions@gmail.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] transition-colors"><Mail className="w-4 h-4 text-white" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-[#0066FF] transition-colors">Software Development</Link></li>
            <li><Link to="/services" className="hover:text-[#0066FF] transition-colors">Web Applications</Link></li>
            <li><Link to="/services" className="hover:text-[#0066FF] transition-colors">Mobile Applications</Link></li>
            <li><Link to="/services" className="hover:text-[#0066FF] transition-colors">Business Automation</Link></li>
            <li><Link to="/services" className="hover:text-[#0066FF] transition-colors">Cloud Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[#0066FF] transition-colors">About Us</Link></li>
            <li><Link to="/work" className="hover:text-[#0066FF] transition-colors">Our Work</Link></li>
            <li><Link to="/products" className="hover:text-[#0066FF] transition-colors">Products</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=forten.solutions@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">forten.solutions@gmail.com</a>
            </li>
            <li className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" />
              <a href="tel:+918825953617" className="hover:text-white transition-colors">+91 88259 53617</a>
            </li>
            <li className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" />
              <a href="tel:+919361259107" className="hover:text-white transition-colors">+91 93612 59107</a>
            </li>
            <li className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" />
              <a href="tel:+919047550820" className="hover:text-white transition-colors">+91 90475 50820</a>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" />
              <span>Vellore, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full px-5 md:px-12 lg:px-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 Forten Solutions. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
