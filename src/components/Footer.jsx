import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONES, CONTACT_LOCATION } from '../constants';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#case-studies' },
  { label: 'Technologies', href: '#tech' },
  { label: 'Build a Project', href: '#configurator' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Custom Software',
  'AI Automation',
  'Web Applications',
  'Mobile Apps',
  'API Development',
  'Tech Consulting',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t bg-white" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="font-extrabold text-lg">
                <span className="text-slate-800">Forten</span>{' '}
                <span className="text-gradient">Solutions</span>
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We build custom software, AI automations, and digital products that help businesses grow, scale, and lead.
            </p>

            {/* Contact mini */}
            <div className="space-y-3">
              {[
                { Icon: Mail, text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { Icon: Phone, text: CONTACT_PHONES[0], href: `tel:${CONTACT_PHONES[0].replace(/\s/g, '')}` },
                { Icon: MapPin, text: CONTACT_LOCATION, href: '#' },
              ].map(({ Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  data-cursor="link"
                  className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Icon size={13} className="text-blue-600 shrink-0" />
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-cursor="link"
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 group"
                  >
                    <span
                      className="w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-3"
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    data-cursor="link"
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-3" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-5 bg-white"
        style={{ borderColor: 'rgba(0,0,0,0.04)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {year} Forten Solutions. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
