import React, { useState } from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  ArrowRight, Code, Smartphone, Settings, Cloud, PenTool,
  CheckCircle, Smile, Shield, Briefcase, Plus, Minus,
  Linkedin, Mail, Phone, MapPin
} from 'lucide-react';

import SEO from '../components/SEO';

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  const faqs = [
    { q: "What is your development process and how do we collaborate?", a: "We follow a robust agile development process that emphasizes transparency, iterative delivery, and constant communication. From day one, you are paired with a dedicated project manager and engineering team. We conduct weekly sprint reviews to showcase progress, gather your feedback, and ensure the product aligns perfectly with your evolving business needs." },
    { q: "Do you provide ongoing post-launch support and maintenance?", a: "Absolutely. We view the launch as just the beginning of our partnership. We provide comprehensive post-launch support, monitoring, and maintenance to ensure your software remains secure, highly performant, and up-to-date with the latest technological standards. Our SLAs guarantee rapid response times for any critical issues." },
    { q: "How long does a typical software development project take?", a: "Project timelines vary significantly based on complexity, scope, and specific integration requirements. A minimum viable product (MVP) or a standard web application typically takes between 2 to 4 months from discovery to launch. For enterprise-grade systems with complex architectures, the timeline can span 6 to 12 months. We provide detailed timeline estimates during our initial consultation." },
    { q: "What is your pricing model and how are costs structured?", a: "We believe in flexible, transparent pricing. We offer two primary models: Fixed-Price for projects with clearly defined, unchangeable scopes, ensuring budget predictability; and Time-and-Materials for agile projects where requirements might evolve, allowing you to pay only for the actual hours worked. We'll help you choose the best model for your specific scenario." },
    { q: "Do you provide comprehensive UI/UX design services?", a: "Yes, we have an in-house expert design team dedicated to crafting intuitive, engaging, and accessible user experiences from scratch. We conduct thorough user research, create detailed wireframes, and design high-fidelity interactive prototypes before any code is written, ensuring the final product deeply resonates with your target audience." }
  ];

  const services = [
    { title: "Custom Software Development", desc: "Tailored solutions built to solve your unique business challenges.", icon: <Code className="text-[#0066FF] w-6 h-6" /> },
    { title: "Web & Mobile Applications", desc: "Modern, responsive and user-friendly applications that engage and scale.", icon: <Smartphone className="text-[#0066FF] w-6 h-6" /> },
    { title: "Business Automation", desc: "Streamline workflows, reduce manual tasks and improve productivity.", icon: <Settings className="text-[#0066FF] w-6 h-6" /> },
    { title: "Cloud & SaaS Solutions", desc: "Scalable, secure and high-performance cloud solutions for growth.", icon: <Cloud className="text-[#0066FF] w-6 h-6" /> },
    { title: "UI/UX Design", desc: "Intuitive experiences designed to delight your users.", icon: <PenTool className="text-[#0066FF] w-6 h-6" /> },
  ];

  const stats = [
    { value: "2+", label: "Projects Delivered", icon: <CheckCircle className="text-[#0066FF] w-5 h-5" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Smile className="text-[#0066FF] w-5 h-5" /> },
    { value: "99%", label: "Uptime", icon: <Shield className="text-[#0066FF] w-5 h-5" /> },
    { value: "10+", label: "Industries Served", icon: <Briefcase className="text-[#0066FF] w-5 h-5" /> },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Forten Solutions",
      "url": "https://fortensolutions.com",
      "logo": "https://fortensolutions.com/logo.jpg",
      "image": "https://fortensolutions.com/logo.jpg",
      "description": "Business consulting and custom software development services helping businesses improve operations, strategy, and growth.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vellore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "telephone": "+918825953617"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <>
      <SEO
        title="Business Consulting & Custom Software | Forten Solutions"
        description="Professional consulting and software development services helping businesses innovate, automate operations, and scale. Based in Vellore, India."
        canonical="/"
        jsonLd={structuredData}
      />
      <div className="min-h-screen bg-white text-[#0A1128] font-sans selection:bg-[#0066FF] selection:text-white overflow-x-hidden">
      <GlobalNavbar />


      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="w-full px-5 md:px-12 lg:px-24 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">Software Solutions That Drive Growth</p>
          <h1 className="text-4xl md:text-4xl lg:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Software that<br />powers <span className="text-[#0066FF]">progress.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
            We build secure, scalable and intuitive software solutions that help businesses innovate, operate efficiently and grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/consultation" className="bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center space-x-2">
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/work" className="text-[#0A1128] hover:text-[#0066FF] font-semibold px-6 py-3 transition-colors flex items-center justify-center space-x-2 group">
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src="/Lap.png" alt="Laptop Dashboard" className="w-full scale-110 origin-right mix-blend-multiply"  loading="lazy"/>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="w-full">
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Technologies We Master</p>
          <div className="flex w-fit animate-marquee whitespace-nowrap opacity-60 grayscale transition-all duration-500 mix-blend-multiply">
            {/* Multiply the logos to create seamless loop for wide screens */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-32 px-16 items-center">
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="h-10" alt="AWS"  loading="lazy"/>
                  <span className="text-xl font-bold text-gray-800">AWS</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" className="h-10" alt="Google Cloud"  loading="lazy"/>
                  <span className="text-xl font-bold text-gray-800">Google Cloud</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" className="h-10" alt="Azure"  loading="lazy"/>
                  <span className="text-xl font-bold text-gray-800">Azure</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className="h-10" alt="Node.js"  loading="lazy"/>
                  <span className="text-xl font-bold text-gray-800">Node.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" className="h-10" alt="Python"  loading="lazy"/>
                  <span className="text-xl font-bold text-gray-800">Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" className="h-10" alt="Docker"  loading="lazy"/>
                  <span className="text-xl font-bold text-gray-800">Docker</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain-wordmark.svg" className="h-10" alt="Kubernetes"  loading="lazy"/>
                  <span className="text-xl font-bold text-gray-800">Kubernetes</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="h-10" alt="React"  loading="lazy"/>
                  <span className="text-xl font-bold text-gray-800">React</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="w-full px-5 md:px-12 lg:px-24 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">Our Promise</p>
          <h2 className="text-4xl md:text-4xl lg:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Your vision.<br />Our expertise.<br />Real impact.
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
            We don't just deliver software. We build long-term partnerships by understanding your goals and crafting solutions that create measurable impact.
          </p>
          <Link to="/about" className="text-[#0066FF] font-semibold flex items-center space-x-2 group w-fit">
            <span>Learn more about us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="relative h-[500px]">
          <img src="/Building.jpg" alt="Office Building" className="w-full h-full object-cover mix-blend-multiply rounded-none"  loading="lazy"/>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-24">
        <div className="w-full px-5 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">What We Do</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 w-full md:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] flex-grow min-w-[250px] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="w-full px-5 md:px-12 lg:px-24 py-12">
        <div className="rounded-2xl py-10 px-8 md:px-12 relative overflow-hidden bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('/Background.png')" }}>
          <div className="absolute inset-0 bg-[#0A1128]/85 backdrop-blur-sm"></div>

          <div className="relative z-10 w-full flex flex-wrap justify-between items-center gap-8">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">{s.icon}</div>
                <div>
                  <div className="text-white font-bold text-3xl mb-0.5 drop-shadow-md">{s.value}</div>
                  <div className="text-gray-300 text-xs tracking-wide uppercase font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full px-5 md:px-12 lg:px-24 py-16">
        <div className="text-center mb-16">
          <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">Our Approach</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-gray-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discover', desc: 'We dive deep into your business, challenges and objectives.' },
              { num: '02', title: 'Design', desc: 'We plan, prototype and design solutions that fit your goals.' },
              { num: '03', title: 'Develop', desc: 'We build with clean code, agile processes and quality at every step.' },
              { num: '04', title: 'Deliver & Support', desc: 'We launch, monitor and support to ensure your continued success.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#0066FF] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_0_8px_white] mb-6">
                  {step.num}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="w-full px-5 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="text-3xl font-extrabold">What our clients say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Forten Solutions transformed our digital presence. Their team delivered our custom ordering system flawlessly, significantly boosting our operational efficiency.",
                name: "Sudharsan",
                role: "Founder, Cafe Coffeea",
                initial: "S"
              },
              {
                text: "The e-commerce platform they built for us is fast, scalable, and beautifully designed. Our sales have doubled since the launch!",
                name: "Eraiyamuthan",
                role: "CEO, Pee Tee Home Needs",
                initial: "E"
              },
              {
                text: "Incredible attention to detail and outstanding post-launch support. They truly care about their clients' success and long-term growth.",
                name: "Nayak",
                role: "Director, TMT Manufacturing",
                initial: "N"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-[#0066FF] text-4xl font-serif leading-none mb-4">"</div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 min-h-[80px]">"{t.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 text-[#0066FF] rounded-full flex items-center justify-center font-bold">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-5 md:px-12 lg:px-24 py-16">
        <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('/Background.png')" }}>
          <div className="absolute inset-0 bg-[#0A1128]/70 backdrop-blur-sm"></div>

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between text-left gap-8">
            <div className="flex-1 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                Let's build something<br />extraordinary together.
              </h2>
              <p className="text-gray-300 text-sm max-w-sm">
                Share your idea with us and let's turn it into a powerful software solution.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-start w-full md:w-auto">
              <Link to="/consultation" className="bg-white text-[#0A1128] hover:bg-gray-100 px-6 py-3.5 rounded-md font-bold transition-colors flex items-center justify-center space-x-2 w-full md:w-auto">
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-400 mt-3 flex items-center">
                <span className="mr-1.5 opacity-80">💬</span>
                No obligation. Just a friendly conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-gray-100">
        <div className="w-full px-5 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <p className="text-[#0066FF] font-bold text-xs tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex items-center justify-center relative bg-white transition-colors"
                >
                  <span className="font-bold text-sm md:text-base max-w-[80%] text-center">{faq.q}</span>
                  <div className="absolute right-6">
                    {openFaq === i ? <Minus className="w-5 h-5 text-[#0066FF]" /> : <Plus className="w-5 h-5 text-gray-400" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50/50"
                    >
                      <div className="px-8 py-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 text-center">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      

      <GlobalFooter />
    </div>
    </>
  );
}

export default Home;
