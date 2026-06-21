import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Package, Factory, FlaskConical, Truck, QrCode,
  Linkedin, Mail, Phone, MapPin, Shield, ChevronRight,
  LineChart, Clock, Database, Settings, BarChart3, ScanLine
} from 'lucide-react';






const processSteps = [
  { label: 'Raw Material\nManagement', icon: Package },
  { label: 'Production\n(Rolling Process)', icon: Factory },
  { label: 'Mechanical Properties\nTesting', icon: FlaskConical },
  { label: 'Dispatch\nManagement', icon: Truck },
  { label: 'QR Code\nTraceability', icon: QrCode },
];

const modules = [
  {
    title: 'Raw Material Management',
    icon: Package,
    points: ['Track incoming raw materials', 'Chemical composition analysis', 'Heat & lot tracking', 'Live inventory & reports'],
  },
  {
    title: 'Production Tracking',
    icon: Factory,
    points: ['Create production lots', 'Link with raw inventory stock', 'Real-time stock deduction', 'Rolling process management'],
  },
  {
    title: 'Mechanical Properties Testing',
    icon: FlaskConical,
    points: ['Multiple test entries per lot', 'Auto lot selection & precision', 'Test certificate generation', 'Quality compliance reports'],
  },
  {
    title: 'Dispatch Management',
    icon: Truck,
    points: ['Customer order processing', 'Auto invoice generation', 'Truck & invoice tracking', 'Print Inventory & Daily TCs'],
  },
  {
    title: 'QR Code Traceability',
    icon: QrCode,
    points: ['Generate QR for tested lots', 'Complete lot history in one scan', 'Raw material to dispatch info', 'Audit-ready digital records'],
  },
];

export default function Products() {
  return (
    <>
      <SEO
        title="Forten Manufacturing Suite | Steel & Metal Industry ERP | Forten Solutions"
        description="A unified platform for steel and metal manufacturers. Manage inventory, production, mechanical testing, and QR traceability."
        canonical="/products"
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
          <Link to="/work" className="hover:text-[#0066FF] transition-colors">Work</Link>
          <Link to="/about" className="hover:text-[#0066FF] transition-colors">About Us</Link>
          <Link to="/products" className="text-[#0066FF] transition-colors">Products</Link>
        </div>
        <Link to="/consultation" className="bg-[#0A1128] hover:bg-gray-800 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center space-x-2">
          <span>Let's Talk</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </nav>

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="bg-white w-full px-8 md:px-16 lg:px-24 pt-16 pb-12 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div className="z-10">
                <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">
                  STEEL SCAPE
                </p>

                <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-extrabold leading-[1.15] text-[#0A1128] mb-6 tracking-tight">
                  Complete Manufacturing<br />
                  Traceability <span className="text-[#0066FF]">From Raw<br />
                  Material to Dispatch<span className="text-[#0066FF]">.</span></span>
                </h1>

                <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg mb-8">
                  Forten Solutions is a unified platform for steel and metal manufacturers to manage inventory, production, testing, dispatches and QR-based traceability in one integrated system.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/consultation" className="px-6 py-3 rounded bg-[#0066FF] hover:bg-blue-700 text-white font-semibold transition-colors flex items-center gap-2 text-sm">
                    Request Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="/Forten_Solutions_Report.docx" download="Forten_Solutions_Report.docx" className="px-6 py-3 rounded border border-blue-200 text-[#0066FF] hover:bg-blue-50 font-semibold transition-colors text-sm flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 rotate-90" /> Download Report
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 text-[13px] text-gray-500 font-semibold">
                  <span className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle className="w-3.5 h-3.5 text-[#0066FF]"/></div> End-to-End Traceability</span>
                  <span className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle className="w-3.5 h-3.5 text-[#0066FF]"/></div> Real-time Inventory</span>
                  <span className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle className="w-3.5 h-3.5 text-[#0066FF]"/></div> Audit Ready Reports</span>
                </div>
              </div>

              {/* Flow Image */}
              <div className="relative w-full max-w-[1200px] mx-auto z-10 pt-8 lg:pt-0 flex justify-center items-center">
                <img 
                  src="/Flow.png" 
                  alt="Forten Solutions Data Flow" 
                  className="w-full h-auto object-contain mix-blend-multiply scale-110 lg:scale-125 lg:origin-center" 
                 loading="lazy"/>
              </div>
        </section>

        {/* ── End-to-End Manufacturing Process ── */}
        <section className="py-12 bg-white overflow-hidden">
          <div className="w-full mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-center text-2xl md:text-[28px] font-extrabold mb-24 text-[#0A1128]">
              End-to-End Manufacturing Process
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-start relative px-4">
              {/* Connecting Dashed Line (Desktop only) */}
              <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>

              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center relative z-10 w-full md:w-[150px] mb-12 md:mb-0">
                    
                    {/* Circle Container */}
                    <div className="w-[100px] h-[100px] rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center relative mb-6">
                      <Icon className="w-8 h-8 text-[#0066FF]" strokeWidth={1.5} />
                      
                      {/* Number Badge */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0066FF] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                        {index + 1}
                      </div>
                    </div>

                    {/* Dotted Arrow for Mobile (hidden on desktop) */}
                    {index < 4 && (
                      <div className="md:hidden flex flex-col items-center my-4">
                        <div className="h-8 border-l-2 border-dashed border-gray-300"></div>
                        <ChevronRight className="w-5 h-5 text-gray-400 rotate-90 -mt-2" />
                      </div>
                    )}
                    
                    {/* Arrow head for desktop line */}
                    {index < 4 && (
                      <div className="hidden md:block absolute top-[41px] -right-[50%] translate-x-1/2 z-0">
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    )}

                    <p className="text-[13px] font-bold text-[#0A1128] whitespace-pre-line leading-snug">
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Powerful Modules ── */}
        <section className="py-12 bg-white">
          <div className="w-full mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-center text-2xl md:text-[28px] font-extrabold mb-16 text-[#0A1128]">
              Powerful Modules Built For Manufacturers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {modules.map((mod, index) => {
                const Icon = mod.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F7FF] flex items-center justify-center mb-6 border border-blue-50">
                      <Icon className="w-6 h-6 text-[#0066FF]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-extrabold text-[17px] mb-6 text-[#0A1128] leading-tight pr-4">{mod.title}</h3>
                    <ul className="space-y-3.5 text-[13px] text-gray-500 mb-8 flex-1">
                      {mod.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-[#0066FF] flex-shrink-0 mt-0.5" strokeWidth={3} />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── QR Based Traceability ── */}
        <section className="relative py-12 bg-white overflow-hidden">
          <div className="w-full mx-auto px-8 md:px-12 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-12 lg:gap-16 items-center">
              
              {/* Left text */}
              <div>
                <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">
                  QR BASED TRACEABILITY
                </p>
                <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0A1128] leading-[1.1] mb-6 tracking-tight">
                  Every Lot Has<br />A Digital Identity
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
                  Generate a QR code for every tested lot. Scan it to instantly view the complete history from raw material to dispatch.
                </p>
                <ul className="space-y-4">
                  {['Complete transparency', 'Build customer trust', 'Simplify audits & inspections'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 text-[14px] font-semibold">
                      <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Middle Graphics (QR + Phone Image) */}
              <div className="flex items-center justify-center relative py-12">
                <img 
                  src="/products.png" 
                  alt="QR Traceability App" 
                  className="w-full max-w-[500px] h-auto object-contain" 
                 loading="lazy"/>
              </div>

              {/* Right Features */}
              <div className="space-y-8">
                {[
                  { title: 'Raw Material Origin', desc: 'Full chemical composition and heat details', icon: Package },
                  { title: 'Production Information', desc: 'Rolling date, size, issued quantity', icon: Factory },
                  { title: 'Mechanical Properties', desc: 'All test results and certificates', icon: FlaskConical },
                  { title: 'Dispatch Details', desc: 'Customer, invoice, truck and dispatch date', icon: Truck }
                ].map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#0066FF]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#0A1128] mb-1">{feat.title}</h4>
                        <p className="text-gray-500 text-[13px] leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ── Platform In Action ── */}
        <section className="py-12 bg-white">
          <div className="w-full mx-auto px-8 md:px-16 lg:px-24">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-[28px] font-extrabold text-[#0A1128] mb-2">Platform In Action</h2>
              <p className="text-gray-500 text-[15px]">A glimpse of Forten Solutions in your daily operations</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { title: 'Dashboard Overview', img: '/Dashboard.png' },
                { title: 'Production Management', img: '/Production.png' },
                { title: 'Mechanical Testing', img: '/mechanical.png' },
                { title: 'Dispatch Management', img: '/DispM.png' },
              ].map((screen, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <img src={screen.img} alt={screen.title} className="w-full h-auto object-contain rounded-lg border border-gray-100" />
                  </div>
                  <p className="text-center text-[17px] font-bold text-[#0A1128] mt-5 mb-4">{screen.title}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Why Manufacturers Choose ── */}
        <section className="py-12 bg-white">
          <div className="w-full mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-center text-2xl md:text-[28px] font-extrabold mb-14 text-[#0A1128]">
              Why Manufacturers Choose Forten Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '100%', sub: 'Lot Traceability', desc: 'From raw material to dispatch', color: '#0066FF', bg: 'bg-blue-50/50', border: 'border-blue-100', icon: Shield },
                { value: '90%', sub: 'Reduction in', desc: 'Manual Records', color: '#16a34a', bg: 'bg-green-50/50', border: 'border-green-100', icon: LineChart },
                { value: 'Instant', sub: 'Audit Reports', desc: 'Anytime, Anywhere', color: '#8b5cf6', bg: 'bg-purple-50/50', border: 'border-purple-100', icon: Clock },
                { value: 'Single Source', sub: 'Of Truth For All', desc: 'Manufacturing Data', color: '#f97316', bg: 'bg-orange-50/50', border: 'border-orange-100', icon: Database },
              ].map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <div key={i} className={`bg-white rounded-2xl p-6 flex items-start gap-4`}>
                    <div className={`w-12 h-12 rounded-[14px] ${kpi.bg} flex items-center justify-center flex-shrink-0 mt-1`}>
                      <Icon className="w-6 h-6" style={{ color: kpi.color }} />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-[28px] font-black leading-tight mb-1" style={{ color: kpi.color }}>{kpi.value}</h3>
                      <p className="text-[13px] font-extrabold text-[#0A1128] leading-snug mb-1">{kpi.sub}</p>
                      <p className="text-[11px] text-gray-500 font-medium">{kpi.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Built For Industry ── */}
        <section className="py-12 bg-white">
          <div className="w-full mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-center text-xl md:text-[22px] font-extrabold mb-10 text-[#0A1128]">
              Built For The Steel & Metal Industry
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { name: 'Steel Mills', icon: Factory },
                { name: 'TMT Manufacturers', icon: BarChart3 },
                { name: 'Metal Processing Plants', icon: Settings },
                { name: 'Rolling Mills', icon: ScanLine },
                { name: 'Engineering Components', icon: Settings }
              ].map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white">
                    <Icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                    <span className="text-[13px] font-extrabold text-[#0A1128]">{industry.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ═══ Footer ═══ */}
      <footer className="bg-[#0A1128] text-gray-300 pt-20 pb-8 border-t border-white/10">
        <div className="w-full px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
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
              <li className="flex items-start space-x-3"><Mail className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><a href="https://mail.google.com/mail/?view=cm&fs=1&to=forten.solutions@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">forten.solutions@gmail.com</a></li>
              <li className="flex items-start space-x-3"><Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><a href="tel:+918825953617" className="hover:text-white transition-colors">+91 88259 53617</a></li>
              <li className="flex items-start space-x-3"><Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><a href="tel:+919361259107" className="hover:text-white transition-colors">+91 93612 59107</a></li>
              <li className="flex items-start space-x-3"><Phone className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><a href="tel:+919047550820" className="hover:text-white transition-colors">+91 90475 50820</a></li>
              <li className="flex items-start space-x-3"><MapPin className="w-4 h-4 text-[#0066FF] mt-0.5 shrink-0" /><span>Vellore, Tamil Nadu, India</span></li>
            </ul>
          </div>
        </div>
        <div className="w-full px-8 md:px-16 lg:px-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
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
