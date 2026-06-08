import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Code2, Brain, Wrench, Globe, Cpu, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'We architect and build tailored software solutions — from startup MVPs to enterprise-grade systems — precisely engineered for your business logic.',
    tags: ['Web Apps', 'APIs', 'SaaS', 'Enterprise'],
    glow: '#7c3aed',
    cursor: 'service',
  },
  {
    icon: Brain,
    title: 'AI & Automation Systems',
    desc: 'We integrate cutting-edge AI models and build automation pipelines that eliminate manual work, reduce costs, and unlock scale for your processes.',
    tags: ['LLMs', 'Workflow Bots', 'OpenAI', 'RPA'],
    glow: '#a855f7',
    cursor: 'ai',
  },
  {
    icon: Wrench,
    title: 'Project Maintenance & Support',
    desc: 'We maintain, monitor, optimize and evolve existing software systems — so you can focus on building your business, not firefighting bugs.',
    tags: ['Bug Fixes', 'Upgrades', 'Monitoring', 'DevOps'],
    glow: '#7c3aed',
    cursor: 'service',
  },
  {
    icon: Globe,
    title: 'Web & Mobile Applications',
    desc: 'Blazing-fast, pixel-perfect web and mobile experiences crafted with modern frameworks that delight users and convert visitors.',
    tags: ['React', 'Next.js', 'React Native', 'Flutter'],
    glow: '#a855f7',
    cursor: 'service',
  },
  {
    icon: Cpu,
    title: 'API Design & Architecture',
    desc: 'We design robust, scalable API architectures and integrate third-party systems so your stack communicates seamlessly.',
    tags: ['REST', 'GraphQL', 'Microservices', 'Integrations'],
    glow: '#7c3aed',
    cursor: 'service',
  },
  {
    icon: BarChart3,
    title: 'Tech Consulting & Strategy',
    desc: 'Not sure what to build or how? We help you make the right architectural decisions early — saving months of expensive rework later.',
    tags: ['Architecture', 'Stack Choice', 'Roadmap', 'Audit'],
    glow: '#a855f7',
    cursor: 'service',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* 3-D tilt card wrapper */
function TiltCard({ children, className, style, ...rest }) {
  const cardRef = useRef(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 140, damping: 28 });
  const sRotY = useSpring(rotY, { stiffness: 140, damping: 28 });

  const onMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotY.set(((e.clientX - cx) / rect.width) * 10);
    rotX.set(-((e.clientY - cy) / rect.height) * 8);
  };
  const onLeave = () => { rotX.set(0); rotY.set(0); };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: '900px' }}
    >
      <motion.div
        style={{ rotateX: sRotX, rotateY: sRotY, transformStyle: 'preserve-3d', ...(style || {}) }}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Small drifting star field for the Services section
const STARS = [
  { x: 8,  y: 12, s: 1.5, dur: 18, delay: 0    },
  { x: 22, y: 5,  s: 1,   dur: 22, delay: 3    },
  { x: 38, y: 18, s: 2,   dur: 26, delay: 1.5  },
  { x: 52, y: 8,  s: 1.5, dur: 20, delay: 5    },
  { x: 67, y: 15, s: 1,   dur: 24, delay: 2    },
  { x: 78, y: 4,  s: 2,   dur: 19, delay: 7    },
  { x: 88, y: 22, s: 1.5, dur: 28, delay: 0.5  },
  { x: 14, y: 78, s: 1,   dur: 23, delay: 4    },
  { x: 31, y: 88, s: 2,   dur: 17, delay: 6    },
  { x: 46, y: 72, s: 1.5, dur: 25, delay: 1    },
  { x: 61, y: 82, s: 1,   dur: 21, delay: 3.5  },
  { x: 74, y: 68, s: 2,   dur: 30, delay: 0    },
  { x: 92, y: 85, s: 1.5, dur: 16, delay: 8    },
  { x: 5,  y: 50, s: 1,   dur: 27, delay: 2.5  },
  { x: 95, y: 45, s: 1.5, dur: 22, delay: 9    },
];

function ServiceStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {STARS.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.s,
            height: star.s,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.55, 0.15, 0.6, 0],
            y: [0, -18, -8, -22, 0],
            x: [0, 4, -3, 2, 0],
          }}
          transition={{
            duration: star.dur,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative z-10 py-28 px-4">
      <ServiceStars />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
            What We Do
          </div>
          <h2 className="section-title">Everything Your Business Needs</h2>
          <p className="section-subtitle" style={{ color: '#c4b5fd' }}>
            From idea to production — we cover every layer of modern software delivery.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            const isFeatured = idx === 1; // AI card is the highlight
            return (
              <TiltCard
                key={svc.title}
                className={`glass-card-hover p-7 group relative overflow-hidden h-full ${isFeatured ? 'ring-1 ring-purple-500/30' : ''}`}
                data-cursor={svc.cursor}
                style={isFeatured ? {
                  background: 'rgba(124,58,237,0.055)',
                } : {}}
              >
                {/* Animated gradient border on all cards */}
                {(
                  <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                    <div style={{
                      position: 'absolute', inset: -1, borderRadius: 'inherit',
                      background: 'conic-gradient(from var(--a, 0deg), #7c3aed, #a855f7, #c084fc, #7c3aed)',
                      opacity: 0.35,
                      animation: 'orbitRotate 4s linear infinite',
                    }} />
                    <div className="absolute inset-[1px] rounded-2xl" style={{ background: 'rgba(8,6,20,0.95)' }} />
                  </div>
                )}

                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute top-0 bottom-0 w-1/3 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                      animation: 'shimmerSweep 0.7s ease forwards',
                      animationPlayState: 'paused',
                    }}
                  />
                </div>

                {/* Card glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${svc.glow}10 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${svc.glow}18`,
                    border: `1px solid ${svc.glow}30`,
                  }}
                >
                  <Icon size={22} style={{ color: svc.glow }} />
                </div>

                <h3 className="relative z-10 text-lg font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {svc.title}
                </h3>
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed mb-5">{svc.desc}</p>

                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: `${svc.glow}12`,
                        color: svc.glow,
                        border: `1px solid ${svc.glow}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
