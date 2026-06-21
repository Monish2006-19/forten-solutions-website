import React from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
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
      <GlobalNavbar />


      {/* ═══ Navbar ═══ */}
      

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="w-full px-5 md:px-12 lg:px-24 pt-16 pb-24">
          <p className="text-[#0066FF] font-bold text-sm tracking-widest uppercase mb-5">OUR WORK</p>
          <h1 className="text-4xl lg:text-5xl md:text-4xl md:text-4xl lg:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-[#0A1128]">
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

                <h2 className="text-4xl lg:text-5xl md:text-4xl md:text-4xl lg:text-5xl lg:text-6xl font-extrabold text-[#0A1128] mb-3 tracking-tight">Cafe Coffeeto</h2>
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

                <h2 className="text-4xl lg:text-5xl md:text-4xl md:text-4xl lg:text-5xl lg:text-6xl font-extrabold text-[#0A1128] mb-3 tracking-tight">Pee Tee Home Needs</h2>
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
      
    </div>
    </>
  );
}
