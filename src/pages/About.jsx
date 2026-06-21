import React from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, ShieldCheck, Calendar, 
  Target, Heart, Lightbulb, Shield,
  Award, UserPlus, Linkedin, Mail
} from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Business Consulting & Software Engineers | Forten Solutions"
        description="Learn about Forten Solutions. We are a team of expert engineers and business consultants dedicated to delivering robust digital solutions."
        canonical="/about"
      />
        <div className="min-h-screen bg-white text-[#0A1128] font-sans selection:bg-[#0066FF] selection:text-white overflow-x-hidden flex flex-col">
      <GlobalNavbar />

      {/* ═══ Navbar ═══ */}
      

      <main className="flex-1 w-full">
        
        {/* ── Hero Section ── */}
        <section className="w-full px-5 md:px-12 lg:px-24 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-5">ABOUT US</p>
              <h1 className="text-4xl md:text-4xl lg:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-[#0A1128]">
                Building Technology<br />That Drives Real<br /><span className="text-[#0066FF]">Business Impact.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-[420px] mb-10">
                We are a team of innovators, builders, and problem solvers passionate about helping businesses transform through smart, scalable, and secure digital solutions.
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-x-8 gap-y-6 items-center">
                {/* Stat 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold text-[#0A1128] block">2+</span>
                    <span className="text-xs text-gray-500 block">Happy Clients</span>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold text-[#0A1128] block">2+</span>
                    <span className="text-xs text-gray-500 block">Projects Delivered</span>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold text-[#0A1128] block">1.5</span>
                    <span className="text-xs text-gray-500 block">Years of Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <img 
                src="/build.png" 
                alt="Corporate Building" 
                className="w-full h-full object-contain object-right" 
               loading="lazy"/>
            </div>
            
        </section>

        {/* ── Mission Section ── */}
        <section className="px-5 md:px-12 lg:px-24 pb-24">
          <div className="py-10">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
              
              {/* Mission Text */}
              <div className="pt-4">
                <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-5">WHY WE EXIST</p>
                <h2 className="text-3xl md:text-[40px] font-extrabold leading-[1.1] mb-6 text-[#0A1128]">
                  Our mission is to make technology a growth multiplier for businesses.
                </h2>
                <p className="text-gray-500 text-base leading-relaxed pr-8 lg:pr-16">
                  We believe the right technology can simplify operations, unlock new opportunities, and create lasting value. That's why we build solutions that are reliable, scalable, and future-ready.
                </p>
              </div>

              {/* Purpose List */}
              <div className="flex flex-col gap-8">
                {/* Item 1 */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-extrabold text-[#0A1128] mb-1.5">Purpose-Driven</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      We build solutions that solve real problems and drive meaningful outcomes.
                    </p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-extrabold text-[#0A1128] mb-1.5">Client-Centric</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Your success is our priority. We partner closely with you at every step.
                    </p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-extrabold text-[#0A1128] mb-1.5">Innovation First</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      We embrace new ideas and technologies to deliver future-ready products.
                    </p>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-extrabold text-[#0A1128] mb-1.5">Integrity Always</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      We believe in transparency, trust, and doing what's right.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Values Grid ── */}
        <section className="px-5 md:px-12 lg:px-24 pb-24 text-center w-full">
          <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">OUR VALUES</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A1128] mb-16 tracking-tight">
            The principles that guide everything we do.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-12 w-full">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'We do the right thing, always and in every situation.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'We challenge the status quo and build with curiosity.' },
              { icon: Users, title: 'Collaboration', desc: 'We achieve more when we work together as one team.' },
              { icon: Award, title: 'Excellence', desc: 'We are committed to quality and continuous improvement.' },
              { icon: UserPlus, title: 'Customer First', desc: 'We listen, we care, and we deliver value that matters.' },
            ].map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <h4 className="text-[#0A1128] font-extrabold text-lg mb-2.5">{val.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Journey Section ── */}
        <section className="px-5 md:px-12 lg:px-24 pb-32">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-center">
            
            {/* Timeline */}
            <div>
              <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">OUR JOURNEY</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A1128] mb-12 tracking-tight">
                From ideas to impact.
              </h2>
              
              <div className="relative border-l-2 border-gray-100 ml-1.5 pb-4">
                {[
                  { year: '2025', title: 'The Beginning', desc: 'Forten Solutions was founded with a mission to help businesses leverage technology for growth.' },
                  { year: '2025', title: 'Growing Together', desc: 'Expanded our team and delivered impactful solutions to clients across multiple industries.' },
                  { year: '2026', title: 'Scaling New Heights', desc: 'Strengthened our capabilities and built products that empower businesses to scale.' },
                  { year: 'Today', title: 'Building the Future', desc: 'Continuing our journey of innovation, partnerships, and creating long-term value.', isLast: true },
                ].map((item, i) => (
                  <div key={i} className={`relative pl-8 ${item.isLast ? '' : 'mb-12'}`}>
                    {/* Blue Dot */}
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#0066FF]"></div>
                    {/* Content */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                      <span className="text-[#0066FF] font-bold text-sm w-12 flex-shrink-0">{item.year}</span>
                      <div>
                        <h4 className="text-[#0A1128] font-extrabold text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed pr-8 lg:pr-16">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image & Card */}
            <div className="relative w-full h-[400px] lg:h-[500px] mt-10 lg:mt-0">
              <img 
                src="/mount.png" 
                alt="Mountain Peak" 
                className="w-full h-full object-cover rounded-[24px]"
               loading="lazy"/>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white rounded-2xl p-6 lg:p-8 shadow-2xl max-w-[280px]">
                <div className="text-[#0066FF] text-4xl font-serif leading-none mb-3">"</div>
                <p className="text-[#0A1128] font-bold text-[13px] leading-relaxed">
                  We don't just build software. We build partnerships that drive progress.
                </p>
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
