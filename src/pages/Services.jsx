import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Cloud, Code, Globe, Cpu, Settings, PenTool, CheckCircle,
  Users, ShieldCheck, Zap, Linkedin, Mail, Phone, MapPin,
  BarChart3, Target
} from 'lucide-react';

const servicesList = [
  {
    num: '01',
    title: 'Cloud Solutions',
    desc: 'Scalable, secure, and cost-effective cloud infrastructure tailored to your business.',
    icon: Cloud,
    points: ['Cloud Strategy & Consulting', 'Cost Optimization', 'Cloud Migration', 'Security & Compliance', 'Infrastructure Management'],
    impactIcon: BarChart3,
    impactDesc: 'Lower infrastructure costs and improved scalability with enterprise-grade security.'
  },
  {
    num: '02',
    title: 'Software Development',
    desc: 'Custom software solutions that are robust, scalable, and aligned with your business goals.',
    icon: Code,
    points: ['Custom Software Development', 'Testing & Quality Assurance', 'Enterprise Solutions', 'Maintenance & Support', 'API Development & Integration'],
    impactIcon: Target,
    impactDesc: 'Streamlined operations and powerful software that drives growth.'
  },
  {
    num: '03',
    title: 'Web Applications',
    desc: 'Fast, secure, and responsive web applications that deliver seamless user experiences.',
    icon: Globe,
    points: ['Custom Web Development', 'Progressive Web Apps', 'Frontend Development', 'Performance Optimization', 'Backend Development'],
    impactIcon: BarChart3,
    impactDesc: 'Better user engagement and higher conversions through reliable web experiences.'
  },
  {
    num: '04',
    title: 'Business Automation',
    desc: 'Automate workflows and processes to reduce manual effort and improve operational efficiency.',
    icon: Settings,
    points: ['Process Automation', 'RPA Solutions', 'Workflow Management', 'Analytics & Reporting', 'Integration & API Automation'],
    impactIcon: Zap,
    impactDesc: 'Reduced manual work and increased productivity across your organization.'
  },
  {
    num: '05',
    title: 'UI / UX Design',
    desc: 'Beautiful, intuitive designs that create meaningful experiences and drive user engagement.',
    icon: PenTool,
    points: ['User Research', 'Design Systems', 'Wireframing', 'Usability Testing', 'Prototyping'],
    impactIcon: Users,
    impactDesc: 'Better user satisfaction and stronger brand loyalty.'
  }
];

export default function Services() {
  return (
    <>
      <SEO
        title="Professional Software Services & IT Consulting | Forten Solutions"
        description="Explore Forten Solutions expert services: Cloud Solutions, Web & Mobile App Development, UI/UX Design, and Business Automation."
        canonical="/services"
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
          <Link to="/services" className="text-[#0066FF] transition-colors">Services</Link>
          <Link to="/work" className="hover:text-[#0066FF] transition-colors">Work</Link>
          <Link to="/about" className="hover:text-[#0066FF] transition-colors">About Us</Link>
          <Link to="/products" className="hover:text-[#0066FF] transition-colors">Products</Link>
        </div>
        <Link to="/consultation" className="bg-[#0A1128] hover:bg-gray-800 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center space-x-2">
          <span>Let's Talk</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </nav>

      <main className="flex-1">
        
        {/* ── HERO ── */}
        <section className="w-full px-8 md:px-16 lg:px-24 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pl-8">
            <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">SERVICES</p>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] mb-6 tracking-tight">
              Technology Solutions<br />That Drive <span className="text-[#0066FF]">Your Business.</span>
            </h1>
            <p className="text-gray-500 text-base mb-8 max-w-lg leading-relaxed">
              We build smart, scalable, and secure digital solutions that help businesses innovate, automate, and grow.
            </p>

            {/* Blue dash */}
            <div className="w-10 h-[3px] bg-[#0066FF] mb-12"></div>

            {/* Badges */}
            <div className="flex flex-wrap gap-8 md:gap-12">
              {[
                { icon: Users, l1: 'Client', l2: 'Focused' },
                { icon: ShieldCheck, l1: 'Secure &', l2: 'Reliable' },
                { icon: Zap, l1: 'Innovation', l2: 'Driven' },
              ].map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-700 block leading-tight">{badge.l1}</span>
                      <span className="text-sm font-bold text-gray-700 block leading-tight">{badge.l2}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex justify-end">
            <img 
              src="/Services.png" 
              alt="Services Illustration" 
              className="w-[85%] mix-blend-multiply" 
             loading="lazy"/>
          </div>
        </section>

        {/* ── CORE SERVICES HEADER ── */}
        <section className="w-full px-8 md:px-16 lg:px-24 pt-16 pb-12 text-center max-w-[1400px] mx-auto">
          <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">WHAT WE OFFER</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1128] mb-6 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            End-to-end technology services designed to solve real business problems and deliver measurable results.
          </p>
        </section>

        {/* ── SERVICES LIST ── */}
        <section className="w-full px-6 md:px-10 lg:px-16 pb-[120px] mx-auto">
          <div className="flex flex-col gap-6">
            {servicesList.map((svc) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={svc.num} 
                  className="py-6 md:py-8 lg:py-10 flex flex-col xl:flex-row items-center gap-8 xl:gap-12 w-full"
                >
                  {/* Column 1: Huge Icon Square */}
                  <div className="w-[120px] h-[120px] rounded-3xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-12 h-12 text-[#0066FF]" strokeWidth={1.5} />
                  </div>

                  {/* Column 2: Title & Description */}
                  <div className="flex-1 min-w-[280px]">
                    <span className="text-[#0066FF] font-extrabold text-[22px] mb-1 block leading-none">{svc.num}</span>
                    <h3 className="text-2xl font-extrabold text-[#0A1128] mb-3 leading-tight tracking-tight">{svc.title}</h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed max-w-[320px]">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Column 3: Features Grid */}
                  <div className="flex-[1.5] w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {svc.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                           <CheckCircle className="w-3.5 h-3.5 text-[#0066FF]" strokeWidth={2.5} />
                        </div>
                        <span className="text-[13px] font-semibold text-gray-600">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 4: Business Impact */}
                  <div className="flex-1 w-full xl:pl-10 flex gap-4 items-start pt-6 xl:pt-0 mt-6 xl:mt-0">
                     <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        {svc.impactIcon && React.createElement(svc.impactIcon, { className: "w-5 h-5 text-[#0066FF]", strokeWidth: 2 })}
                     </div>
                     <div>
                       <h4 className="text-[15px] font-bold text-[#0A1128] mb-2">Business Impact</h4>
                       <p className="text-gray-500 text-[13px] leading-relaxed">
                         {svc.impactDesc}
                       </p>
                     </div>
                  </div>

                </div>
              );
            })}
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
