import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Tech', href: '#tech' },
  { label: 'Build', href: '#configurator' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [deepScroll, setDeepScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setDeepScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrolledStyle = {
    background: deepScroll
      ? 'rgba(255,255,255,0.92)'
      : 'rgba(255,255,255,0.82)',
    backdropFilter: 'blur(28px) saturate(180%)',
    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
    border: '1px solid rgba(0, 0, 204, 0.08)',
    borderRadius: '100px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.8) inset',
    padding: '8px 24px',
    width: 'min(820px, calc(100vw - 32px))',
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-center transition-all duration-500"
        style={{ paddingTop: scrolled ? '14px' : '20px' }}
      >
        <div
          className="transition-all duration-500"
          style={scrolled ? scrolledStyle : {
            width: 'min(1280px, calc(100vw - 48px))',
            padding: '0 0px',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" data-cursor="link" className="flex items-center gap-2 group">
              <span className="font-extrabold text-xl tracking-tight">
                <span className="text-gradient">Forten</span>{' '}
                <span className="text-gradient">Solutions</span>
              </span>
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-cursor="link"
                      className="relative text-sm font-medium transition-colors duration-200 group"
                      style={{ color: isActive ? '#0000cc' : (scrolled ? '#475569' : '#cbd5e1') }}
                    >
                      <span className={isActive ? '' : (scrolled ? 'group-hover:text-[#0000cc] transition-colors' : 'group-hover:text-white transition-colors')}>
                        {link.label}
                      </span>
                      <span
                        className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300"
                        style={{ width: isActive ? '100%' : undefined }}
                        data-hover-expand
                      />
                      {!isActive && (
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300 group-hover:w-full" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#contact" data-cursor="link" className="btn-primary text-sm px-5 py-2.5">
                Get a Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={scrolled ? "md:hidden text-slate-700 hover:text-blue-600 transition-colors" : "md:hidden text-slate-300 hover:text-white transition-colors"}
              onClick={() => setOpen(!open)}
              data-cursor="link"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu — side drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[998] bg-black/50 md:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Drawer from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[999] w-72 py-8 px-7 md:hidden flex flex-col"
              style={{
                background: 'rgba(10,5,20,0.96)',
                backdropFilter: 'blur(32px)',
                borderLeft: '1px solid rgba(0, 0, 204, 0.2)',
                boxShadow: '-16px 0 48px rgba(0,0,0,0.7)',
              }}
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-slate-400 hover:text-white mb-8"
              >
                <X size={20} />
              </button>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i }}
                    className="py-3.5 px-4 rounded-xl text-slate-300 hover:text-white font-medium transition-all duration-200 hover:bg-white/5 flex items-center justify-between"
                    style={{
                      color: activeSection === link.href.replace('#', '') ? '#60a5fa' : undefined,
                      background: activeSection === link.href.replace('#', '') ? 'rgba(0, 0, 204, 0.1)' : undefined,
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href="#contact"
                className="btn-primary mt-8 justify-center text-sm"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
