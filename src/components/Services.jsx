import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { Code2, Brain, Wrench, Globe, Cpu, BarChart3 } from 'lucide-react';
import softwareImg from '../images/software.png';
import aiImg from '../images/ai.jpg';
import apiImg from '../images/api.jpg';
import monitorImg from '../images/monitor.jpg';
import consultingImg from '../images/6.png';
import mobwebImg from '../images/mobweb.png';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'We architect and build tailored software solutions — from startup MVPs to enterprise-grade systems — precisely engineered for your business logic.',
    tags: ['Web Apps', 'APIs', 'SaaS', 'Enterprise'],
    glow: '#0000cc',
  },
  {
    icon: Brain,
    title: 'AI & Automation Systems',
    desc: 'We integrate cutting-edge AI models and build automation pipelines that eliminate manual work, reduce costs, and unlock scale for your processes.',
    tags: ['LLMs', 'Workflow Bots', 'OpenAI', 'RPA'],
    glow: '#0055ff',
  },
  {
    icon: Wrench,
    title: 'Project Maintenance & Support',
    desc: 'We maintain, monitor, optimize and evolve existing software systems — so you can focus on building your business, not firefighting bugs.',
    tags: ['Bug Fixes', 'Upgrades', 'Monitoring', 'DevOps'],
    glow: '#0000cc',
  },
  {
    icon: Globe,
    title: 'Web & Mobile Applications',
    desc: 'Blazing-fast, pixel-perfect web and mobile experiences crafted with modern frameworks that delight users and convert visitors.',
    tags: ['React', 'Next.js', 'React Native', 'Flutter'],
    glow: '#0055ff',
  },
  {
    icon: Cpu,
    title: 'API Design & Architecture',
    desc: 'We design robust, scalable API architectures and integrate third-party systems so your stack communicates seamlessly.',
    tags: ['REST', 'GraphQL', 'Microservices', 'Integrations'],
    glow: '#0000cc',
  },
  {
    icon: BarChart3,
    title: 'Tech Consulting & Strategy',
    desc: 'Not sure what to build or how? We help you make the right architectural decisions early — saving months of expensive rework later.',
    tags: ['Architecture', 'Stack Choice', 'Roadmap', 'Audit'],
    glow: '#0055ff',
  },
];

// 3D Hover tilt component for mobile card fallback
function TiltCard({ children, className, style, ...rest }) {
  const cardRef = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const y = ((e.clientX - cx) / rect.width) * 8;
    const x = -((e.clientY - cy) / rect.height) * 6;
    setRot({ x, y });
  };
  const onLeave = () => setRot({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: '800px' }}
    >
      <div
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
          ...(style || {}),
        }}
        className={className}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}

// Low-opacity floating canvas particle system
function CanvasParticles({ scrollProgress }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = (canvas.width = canvas.offsetWidth);
      height = (canvas.height = canvas.offsetHeight);
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.08 + 0.03,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Apply scroll-parallax vertical drift
        const offset = scrollProgress * 150 * p.r * 0.15;
        let drawY = p.y - offset;
        if (drawY < 0) drawY = (drawY % height) + height;
        if (drawY > height) drawY = drawY % height;

        ctx.beginPath();
        ctx.arc(p.x, drawY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 204, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollProgress]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

// Vector illustration overlays matching service indexes
function ActiveIllustration({ index, isLight }) {
  const strokeColor = isLight ? 'stroke-slate-800' : 'stroke-white';
  const fillColor = isLight ? 'fill-slate-800/5' : 'fill-white/10';
  const pulseColor = isLight ? 'fill-blue-600' : 'fill-blue-200';

  if (index === 0) {
    // Custom Software Development: Imported software.png mockup image
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={softwareImg}
          alt="Custom Software Development"
          className="w-full h-auto max-w-[320px] rounded-xl shadow-lg object-contain bg-white border border-slate-100 transition-all duration-300 hover:scale-105"
        />
      </div>
    );
  }

  if (index === 1) {
    // AI & Automation: Imported ai.jpg mockup image
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={aiImg}
          alt="AI & Automation Systems"
          className="w-full h-auto max-w-[320px] rounded-xl shadow-lg object-contain bg-white border border-slate-100 transition-all duration-300 hover:scale-105"
        />
      </div>
    );
  }

  if (index === 2) {
    // Project Maintenance & Support: Imported monitor.jpg mockup image
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={monitorImg}
          alt="Project Maintenance & Support"
          className="w-full h-auto max-w-[320px] rounded-xl shadow-lg object-contain bg-white border border-slate-100 transition-all duration-300 hover:scale-105"
        />
      </div>
    );
  }

  if (index === 3) {
    // Web & Mobile: Imported mobweb.png mockup image
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={mobwebImg}
          alt="Web & Mobile Applications"
          className="w-full h-auto max-w-[320px] rounded-xl shadow-lg object-contain bg-white border border-slate-100 transition-all duration-300 hover:scale-105"
        />
      </div>
    );
  }

  if (index === 4) {
    // API Design & Architecture: Imported api.jpg mockup image
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={apiImg}
          alt="API Design & Architecture"
          className="w-full h-auto max-w-[320px] rounded-xl shadow-lg object-contain bg-white border border-slate-100 transition-all duration-300 hover:scale-105"
        />
      </div>
    );
  }

  if (index === 5) {
    // Consulting & Strategy: Imported 6.png mockup image
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={consultingImg}
          alt="Tech Consulting & Strategy"
          className="w-full h-auto max-w-[320px] rounded-xl shadow-lg object-contain bg-white border border-slate-100 transition-all duration-300 hover:scale-105"
        />
      </div>
    );
  }

  return null;
}

export default function Services() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Monitor screen layout size
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Monitor scroll progress in the 700vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map progress to active index
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isMobile || shouldReduceMotion) return;
    const progress = Math.min(Math.max(latest, 0), 1);
    
    let newIndex = -1;
    if (progress < 0.08) {
      newIndex = -1; // Section Title View
    } else if (progress >= 0.08 && progress < 0.22) {
      newIndex = 0; // Service 1
    } else if (progress >= 0.22 && progress < 0.36) {
      newIndex = 1; // Service 2
    } else if (progress >= 0.36 && progress < 0.50) {
      newIndex = 2; // Service 3
    } else if (progress >= 0.50 && progress < 0.64) {
      newIndex = 3; // Service 4
    } else if (progress >= 0.64 && progress < 0.78) {
      newIndex = 4; // Service 5
    } else if (progress >= 0.78 && progress < 0.92) {
      newIndex = 5; // Service 6
    } else {
      newIndex = 6; // Section Exit / Dissolve
    }

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  // Transform layers
  const containerOpacity = useTransform(scrollYProgress, [0, 0.04, 0.93, 0.98], [0, 1, 1, 0]);
  const graphicsParallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Pointer movement tracking
  const handleMouseMove = (e) => {
    if (isMobile || shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // Subtle drift
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Check if active service is odd or even to align copy and layers
  // Odd services (idx 0, 2, 4) -> Left Spill, copy on Left (white text), Illustration on Right (dark stroke)
  // Even services (idx 1, 3, 5) -> Right Spill, copy on Right (white text), Illustration on Left (dark stroke)
  const isOddService = activeIndex === 0 || activeIndex === 2 || activeIndex === 4;
  const isEvenService = activeIndex === 1 || activeIndex === 3 || activeIndex === 5;

  // Render static stacked cards layout for mobile or reduced-motion
  if (isMobile || shouldReduceMotion) {
    return (
      <section id="services" className="relative z-10 py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">

            <h2 className="section-title text-4xl font-black mb-4">Everything Your Business Needs</h2>
            <p className="section-subtitle text-slate-600 max-w-xl mx-auto">
              From idea to production — we cover every layer of modern software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <TiltCard
                  key={svc.title}
                  className="glass-card p-8 group relative overflow-hidden flex flex-col h-full border border-slate-100 shadow-sm"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${svc.glow}08 0%, transparent 70%)`,
                    }}
                  />

                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${svc.glow}12`,
                        border: `1px solid ${svc.glow}20`,
                      }}
                    >
                      <Icon size={22} style={{ color: svc.glow }} />
                    </div>
                    <span className="text-sm font-black text-slate-300">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#0000cc] transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{svc.desc}</p>

                  {/* Inline visual placeholder diagram for mobile */}
                  <div className="w-full h-36 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden mb-6">
                    <ActiveIllustration index={idx} isLight={true} />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          background: `${svc.glow}08`,
                          color: svc.glow,
                          border: `1px solid ${svc.glow}15`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0000cc] hover:translate-x-1 transition-transform"
                    >
                      Get Started →
                    </a>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Scroll Storytelling Layout
  return (
    <section id="services" ref={containerRef} className="relative z-20 h-[700vh] w-full bg-white">
      {/* Sticky Frame */}
      <motion.div
        style={{ opacity: containerOpacity }}
        className="sticky top-0 left-0 right-0 h-screen w-full flex items-center bg-white overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Canvas background particles */}
        <CanvasParticles scrollProgress={scrollYProgress.get()} />

        {/* Straight-line Left Blue Background Block (covers 66.7% width) */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-950 via-[#0000cc] to-[#0055ff] shadow-xl z-0"
          initial={{ width: '0%' }}
          animate={{ width: isOddService ? '66.7%' : '0%' }}
          transition={{ type: 'spring', stiffness: 70, damping: 16 }}
        />

        {/* Straight-line Right Blue Background Block (covers 66.7% width, expands to 100% on exit) */}
        <motion.div
          className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-blue-950 via-[#0000cc] to-[#0055ff] shadow-xl z-0"
          initial={{ width: '0%' }}
          animate={{
            width: isEvenService ? '66.7%' : activeIndex === 6 ? '100%' : '0%',
          }}
          transition={{ type: 'spring', stiffness: 70, damping: 16 }}
        />

        {/* Foreground Content Layout */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-12 md:px-20">
          <AnimatePresence mode="wait">
            {/* 1. Title View: shown centered on white background */}
            {activeIndex === -1 && (
              <motion.div
                key="main-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center text-center max-w-2xl mx-auto"
              >

                <h2 className="section-title text-5xl font-black mb-6">
                  Everything Your Business Needs
                </h2>
                <p className="section-subtitle text-slate-600 text-lg leading-relaxed">
                  From idea to production — we cover every layer of modern software delivery.
                </p>
              </motion.div>
            )}

            {/* 2. Odd Services: Left Spill (Text Left/White text, Diagram Right/Dark stroke) */}
            {isOddService && (
              <motion.div
                key={`service-odd-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-12 items-center gap-8 min-h-[460px]"
              >
                {/* Copy block (Left side, inside the 66.7% blue paint) */}
                <div className="col-span-7 flex flex-col items-start text-white pr-6">
                  <span className="text-6xl font-black tracking-tight text-white/20 mb-3 select-none">
                    0{activeIndex + 1}
                  </span>
                  <h3 className="text-4xl font-extrabold mb-5 leading-tight text-white">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-blue-100 text-base leading-relaxed mb-6 max-w-md">
                    {services[activeIndex].desc}
                  </p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {services[activeIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/20 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore button */}
                  <a
                    href="#contact"
                    className="relative inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-full overflow-hidden bg-white text-[#0000cc] hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Explore Service →
                  </a>
                </div>

                {/* White Gap Column */}
                <div className="col-span-1" />

                {/* Illustration block (Right side, inside the 33.3% white bg) */}
                <div className="col-span-4 flex justify-center items-center">
                  <motion.div
                    style={{ y: graphicsParallaxY }}
                    animate={{
                      x: mousePos.x * 0.3,
                      y: mousePos.y * 0.3,
                    }}
                    className="w-full flex justify-center"
                  >
                    <ActiveIllustration index={activeIndex} isLight={true} />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* 3. Even Services: Right Spill (Text Right/White text, Diagram Left/Dark stroke) */}
            {isEvenService && (
              <motion.div
                key={`service-even-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-12 items-center gap-8 min-h-[460px]"
              >
                {/* Illustration block (Left side, inside the 33.3% white bg) */}
                <div className="col-span-4 flex justify-center items-center">
                  <motion.div
                    style={{ y: graphicsParallaxY }}
                    animate={{
                      x: mousePos.x * 0.3,
                      y: mousePos.y * 0.3,
                    }}
                    className="w-full flex justify-center"
                  >
                    <ActiveIllustration index={activeIndex} isLight={true} />
                  </motion.div>
                </div>

                {/* White Gap Column */}
                <div className="col-span-1" />

                {/* Copy block (Right side, inside the 66.7% blue paint) */}
                <div className="col-span-7 flex flex-col items-start text-white pl-6">
                  <span className="text-6xl font-black tracking-tight text-white/20 mb-3 select-none">
                    0{activeIndex + 1}
                  </span>
                  <h3 className="text-4xl font-extrabold mb-5 leading-tight text-white">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-blue-100 text-base leading-relaxed mb-6 max-w-md">
                    {services[activeIndex].desc}
                  </p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {services[activeIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/20 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore button */}
                  <a
                    href="#contact"
                    className="relative inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-full overflow-hidden bg-white text-[#0000cc] hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Explore Service →
                  </a>
                </div>
              </motion.div>
            )}

            {/* 4. Exit View: shown centered on white background */}
            {activeIndex === 6 && (
              <motion.div
                key="exit-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center max-w-2xl mx-auto text-white"
              >
                <h2 className="text-5xl font-black mb-6 text-white">
                  Ready to Start?
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Our team is ready to build, automate, and elevate your products. Let's create something remarkable together.
                </p>
                <a
                  href="#contact"
                  className="relative inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-full overflow-hidden bg-white text-[#0000cc] hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Contact Us Now
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Vertical Sticky Progress Indicators */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
          {services.map((_, idx) => {
            const isActive = activeIndex === idx;
            const isCompleted = activeIndex > idx;
            
            // Adjust indicator color based on which side is active/spilled
            // If activeIndex is odd (Left spill), right side (33.3%) is white, so indicators are over white bg.
            // If activeIndex is even (Right spill), right side (66.7%) is blue, so indicators are over blue bg.
            const isIndicatorOverBlue = isEvenService;

            return (
              <div
                key={idx}
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => {
                  if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    const scrollTop = window.scrollY + rect.top + (idx * 0.14 + 0.1) * rect.height;
                    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                  }
                }}
              >
                <span
                  className={`text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? (isIndicatorOverBlue ? 'text-white scale-125' : 'text-[#0000cc] scale-125')
                      : isCompleted
                      ? (isIndicatorOverBlue ? 'text-blue-200' : 'text-blue-500')
                      : (isIndicatorOverBlue ? 'text-white/40' : 'text-slate-300')
                  }`}
                  style={{
                    textShadow: isActive ? '0 0 10px rgba(0, 0, 204, 0.35)' : 'none',
                  }}
                >
                  0{idx + 1}
                </span>
                <div
                  className={`w-1.5 h-7 rounded-full transition-all duration-300 ${
                    isActive
                      ? (isIndicatorOverBlue ? 'bg-white' : 'bg-[#0000cc]') + ' h-11 shadow-[0_0_10px_rgba(0,0,204,0.5)]'
                      : isCompleted
                      ? (isIndicatorOverBlue ? 'bg-blue-300' : 'bg-blue-500')
                      : (isIndicatorOverBlue ? 'bg-white/20' : 'bg-slate-200 group-hover:bg-slate-300')
                  }`}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
