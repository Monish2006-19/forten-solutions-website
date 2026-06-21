import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Briefcase, Users, Code, CheckCircle,
  ClipboardList, Zap, Clock, Store, CreditCard, BarChart3, Rocket,
  Linkedin, Mail, Phone, MapPin
} from 'lucide-react';

export default function Work() {
  return (
    <>
      <SEO
        title="Our Work & Case Studies | Forten Solutions"
        description="See how Forten Solutions has transformed businesses through custom software development, from startups to enterprise manufacturing ERPs."
        canonical="/work"
      />
        <div className="min-h-screen bg-white text-[#0A1128] font-sans selection:bg-[#0066FF] selection:text-white overflow-x-hidden flex flex-col">

      {/* ═══ Navbar ═══ */}
      <nav className="flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 w-full">
        <div className="flex items-center space-x-2">
          <img src="/FL.jpeg" alt="FL Logo" className="h-14 mix-blend-multiply" />
          <span className="font-bold text-xl">Forten Solutions</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <Link to="/" className="hover:text-[#0066FF] transition-colors">Home</Link>
          <Link to="/services" className="hover:text-[#0066FF] transition-colors">Services</Link>
          <Link to="/work" className="text-[#0066FF] transition-colors">Work</Link>
          <Link to="/about" className="hover:text-[#0066FF] transition-colors">About Us</Link>
          <Link to="/products" className="hover:text-[#0066FF] transition-colors">Products</Link>
        </div>
        <Link to="/consultation" className="bg-[#0A1128] hover:bg-gray-800 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center space-x-2">
          <span>Let's Talk</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </nav>

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="w-full px-8 md:px-16 lg:px-24 pt-16 pb-24">
          <p className="text-[#0066FF] font-bold text-sm tracking-widest uppercase mb-5">OUR WORK</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-[#0A1128]">
            Products We've Built<br />For <span className="text-[#0066FF]">Real Businesses.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-10">
            We partner with businesses to build digital products that solve real problems and create real impact.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 md:gap-14">
            {[
              { icon: Briefcase, value: '2', l1: 'Projects', l2: 'Delivered' },
              { icon: Users, value: '100%', l1: 'Client', l2: 'Satisfaction' },
              { icon: Code, value: 'Custom', l1: 'Built', l2: 'Solutions' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <span className="text-2xl font-extrabold text-[#0A1128] block leading-tight">{stat.value}</span>
                    <span className="text-sm text-gray-500 block leading-tight">{stat.l1}<br />{stat.l2}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Case Study 1: Cafe Coffeeto ── */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-10">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">

              {/* Left — Image */}
              <div className="bg-white relative flex items-center justify-center p-10 lg:p-16 h-full min-h-[400px]">
                <img
                  src="/cafecoffeeto.png"
                  alt="Cafe Coffeeto"
                  className="w-full max-w-[90%] h-auto object-contain mix-blend-multiply"
                 loading="lazy"/>
              </div>

              {/* Right — Content */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#0066FF] font-bold text-xl">01</span>
                  <div className="w-10 h-0.5 bg-[#0066FF]"></div>
                </div>

                <h2 className="text-5xl md:text-6xl font-extrabold text-[#0A1128] mb-3 tracking-tight">Cafe Coffeeto</h2>
                <p className="text-[#0066FF] font-bold text-xl mb-6">
                  Digital Menu &<br />Order Management System
                </p>

                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  A QR-based digital ordering system for a cafe that enables customers to place orders from their phones and helps the kitchen manage orders in real-time.
                </p>

                {/* Key Features */}
                <h4 className="font-bold text-lg text-[#0A1128] mb-5">Key Features</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                  {[
                    'QR Menu Ordering', 'Database Storage',
                    'Real-Time Kitchen Dashboard', 'Admin Analytics',
                    'Order Status Tracking', 'Mobile Optimized',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#0066FF] flex-shrink-0" />
                      <span className="text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <h4 className="font-bold text-lg text-[#0A1128] mb-5">Impact</h4>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: ClipboardList, value: '100%', label: 'Paperless Ordering' },
                    { icon: Zap, value: 'Real-Time', label: 'Kitchen Updates' },
                    { icon: Clock, value: 'Instant', label: 'Order Processing' },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="text-center">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-6 h-6 text-[#0066FF]" />
                        </div>
                        <p className="text-base font-extrabold text-[#0A1128]">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Case Study 2: Pee Tee Home Needs ── */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-10">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">

              {/* Left — Content */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[#0066FF] font-bold text-xl">02</span>
                  <div className="w-10 h-0.5 bg-[#0066FF]"></div>
                </div>

                <h2 className="text-5xl md:text-6xl font-extrabold text-[#0A1128] mb-3 tracking-tight">Pee Tee Home Needs</h2>
                <p className="text-[#0066FF] font-bold text-xl mb-6">
                  <em>E-Commerce Platform &<br />Admin Suite</em>
                </p>

                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  A complete e-commerce solution for an eco-friendly brand. The platform includes product management, inventory tracking, secure payments, and an advanced admin dashboard.
                </p>

                {/* Key Features */}
                <h4 className="font-bold text-lg text-[#0A1128] mb-5">Key Features</h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                  {[
                    'Secure Payment Integration', 'Coupon System',
                    'Product Management', 'Admin Dashboard',
                    'Inventory Tracking', 'Analytics & Reporting',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#0066FF] flex-shrink-0" />
                      <span className="text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <h4 className="font-bold text-lg text-[#0A1128] mb-5">Impact</h4>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: Store, value: 'Complete', label: 'Store Management' },
                    { icon: CreditCard, value: 'Online', label: 'Payment Processing' },
                    { icon: BarChart3, value: 'End-To-End', label: 'Commerce Solution' },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="text-center">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-6 h-6 text-[#0066FF]" />
                        </div>
                        <p className="text-base font-extrabold text-[#0A1128]">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right — Image */}
              <div className="bg-white relative flex items-center justify-center p-10 lg:p-16 h-full min-h-[400px]">
                <img
                  src="/peeteehomeneeds.png"
                  alt="Pee Tee Home Needs"
                  className="w-full max-w-[90%] h-auto object-contain mix-blend-multiply"
                 loading="lazy"/>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ═══ Footer ═══ */}
      <footer className="bg-[#0A1128] text-gray-300 pt-20 pb-8 border-t border-white/10">
        <div className="w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
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
              <li className="flex items-start space-x-3"><Mail className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><a href="https://mail.google.com/mail/?view=cm&fs=1&to=forten.solutions@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">forten.solutions@gmail.com</a></li>
              <li className="flex items-start space-x-3"><Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><a href="tel:+918825953617" className="hover:text-white transition-colors">+91 88259 53617</a></li>
              <li className="flex items-start space-x-3"><Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><a href="tel:+919361259107" className="hover:text-white transition-colors">+91 93612 59107</a></li>
              <li className="flex items-start space-x-3"><Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><a href="tel:+919047550820" className="hover:text-white transition-colors">+91 90475 50820</a></li>
              <li className="flex items-start space-x-3"><MapPin className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><span>Vellore, Tamil Nadu, India</span></li>
            </ul>
          </div>
        </div>
        <div className="w-full px-6 md:px-12 lg:px-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Forten Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
