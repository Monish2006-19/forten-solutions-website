import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Headphones, Heart, Lock, Smartphone, Star } from 'lucide-react';
import mob1 from '../images/mob1.png';
import web1 from '../images/web1.png';
import mob2 from '../images/mob2.png';
import web2 from '../images/web2.png';

const features = [
  {
    icon: Users,
    title: 'Team of 5 App Experts',
    description: 'You will be assigned our top developers to build your software',
    side: 'left',
  },
  {
    icon: Headphones,
    title: '1-ON-1, In Person',
    description: 'In-person meetings with project managers, guiding every step together',
    side: 'left',
  },
  {
    icon: Heart,
    title: 'Best Code Practices',
    description: 'Keeping your code healthy and ready for growth & scale',
    side: 'left',
  },
  {
    icon: Lock,
    title: 'Privacy & Cybersecurity',
    description: 'Your ideas are kept confidential, and your code will include best security practices.',
    side: 'right',
  },
  {
    icon: Smartphone,
    title: 'Cross Platform Development',
    description: 'iOS and Android development for the price of 1. We also build off existing apps.',
    side: 'right',
  },
  {
    icon: Star,
    title: 'Support & Maintenance',
    description: 'Get the best support while building your mobile app, and the best on-going maintenance afterwards.',
    side: 'right',
  },
];

const mockupImages = [mob1, web1, mob2, web2];

export default function MobileShowcase() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showDesktop, setShowDesktop] = useState(false);
  const [deviceNode, setDeviceNode] = useState(null);
  const [lines, setLines] = useState([]);

  const sectionRef = useRef(null);
  const featureRefs = useRef([]);

  const setFeatureRef = (el, idx) => {
    if (el) featureRefs.current[idx] = el;
  };

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mockupImages.length);
    }, 2000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const deviceInterval = setInterval(() => {
      setShowDesktop((prev) => !prev);
    }, 2000);
    return () => clearInterval(deviceInterval);
  }, []);

  // Recalculate orthogonal connecting line paths on mount, resize, scroll, or layout updates
  useEffect(() => {
    const calculatePaths = () => {
      if (!sectionRef.current || !deviceNode) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const deviceRect = deviceNode.getBoundingClientRect();
      const newLines = [];

      // Calculate Left features to device bezel
      for (let i = 0; i < 3; i++) {
        const el = featureRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        const startX = rect.right - sectionRect.left;
        const startY = rect.top + rect.height / 2 - sectionRect.top;
        const endX = deviceRect.left - sectionRect.left;
        const endY = deviceRect.top + deviceRect.height * (0.2 + i * 0.3) - sectionRect.top;

        // Route: Horizontal to midpoint, Vertical down/up, Horizontal to bezel
        const midX = startX + (endX - startX) * 0.45;
        const d = `M ${startX.toFixed(1)},${startY.toFixed(1)} H ${midX.toFixed(1)} V ${endY.toFixed(1)} H ${endX.toFixed(1)}`;
        
        newLines.push({ id: `left-${i}`, d, startX, startY, endX, endY });
      }

      // Calculate Right features to device bezel
      for (let i = 0; i < 3; i++) {
        const el = featureRefs.current[i + 3];
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        const startX = rect.left - sectionRect.left;
        const startY = rect.top + rect.height / 2 - sectionRect.top;
        const endX = deviceRect.right - sectionRect.left;
        const endY = deviceRect.top + deviceRect.height * (0.2 + i * 0.3) - sectionRect.top;

        // Route: Horizontal to midpoint, Vertical down/up, Horizontal to bezel
        const midX = startX + (endX - startX) * 0.45;
        const d = `M ${startX.toFixed(1)},${startY.toFixed(1)} H ${midX.toFixed(1)} V ${endY.toFixed(1)} H ${endX.toFixed(1)}`;
        
        newLines.push({ id: `right-${i}`, d, startX, startY, endX, endY });
      }

      setLines(newLines);
    };

    calculatePaths();

    window.addEventListener('resize', calculatePaths);
    window.addEventListener('scroll', calculatePaths);

    // Run layout recalculation timer to settle frames
    const timer = setTimeout(calculatePaths, 300);

    return () => {
      window.removeEventListener('resize', calculatePaths);
      window.removeEventListener('scroll', calculatePaths);
      clearTimeout(timer);
    };
  }, [deviceNode, showDesktop]);

  const leftFeatures = features.filter((f) => f.side === 'left');
  const rightFeatures = features.filter((f) => f.side === 'right');

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #1e40af 100%)',
        minHeight: '680px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* SVG Connecting Lines Layer (Desktop Only) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0">
        {lines.map((line) => (
          <motion.path
            key={line.id}
            d={line.d}
            stroke="#000000"
            strokeWidth="1.5"
            fill="none"
            animate={{ d: line.d }}
            transition={{ type: 'spring', stiffness: 70, damping: 14 }}
          />
        ))}
        {lines.map((line) => (
          <g key={`dots-${line.id}`}>
            <circle cx={line.startX} cy={line.startY} r="3" fill="#000000" />
            <circle cx={line.endX} cy={line.endY} r="3.5" fill="#000000" />
          </g>
        ))}
      </svg>

      <div className="py-20 px-4 w-full relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Showcase Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center h-full">
            {/* Left Features */}
            <motion.div className="space-y-16">
              {leftFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    ref={(el) => setFeatureRef(el, idx)}
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex gap-4 relative z-10"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="flex items-center justify-center h-12 w-12 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #0000cc, #0055ff)',
                        }}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Center Screen Mockup - Animates between mobile and desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                className="relative w-full"
                layout
                style={{
                  height: '520px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  maxWidth: '1200px',
                  padding: '0 20px',
                }}
              >
                <AnimatePresence mode="wait">
                  {showDesktop ? (
                    /* Desktop Monitor */
                    <motion.div
                      key="desktop"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="relative mx-auto"
                      style={{ width: '100%', maxWidth: '600px' }}
                    >
                      {/* Monitor frame */}
                      <div
                        ref={setDeviceNode}
                        className="relative rounded-lg overflow-hidden shadow-2xl mx-auto"
                        style={{
                          background: '#000',
                          padding: '16px',
                          aspectRatio: '16 / 10',
                        }}
                      >
                        {/* Screen content */}
                        <div className="relative bg-white w-full h-full overflow-hidden rounded-sm">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentImage}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="absolute inset-0"
                            >
                              <img
                                src={mockupImages[currentImage]}
                                alt={`App mockup ${currentImage + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Monitor stand - pedestal */}
                      <div className="flex justify-center" style={{ marginTop: '-2px' }}>
                        <div
                          className="w-20 h-12 bg-black rounded-b-md"
                          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                        />
                      </div>

                      {/* Monitor base */}
                      <div className="flex justify-center">
                        <div
                          className="w-48 h-3 bg-gradient-to-b from-gray-700 to-black rounded-sm"
                          style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.4)' }}
                        />
                      </div>

                      {/* Carousel indicators */}
                      <div className="flex justify-center gap-2 mt-8">
                        {mockupImages.map((_, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className="h-2 rounded-full transition-all"
                            animate={{
                              width: currentImage === idx ? 24 : 8,
                              background: currentImage === idx ? '#0000cc' : 'rgba(255,255,255,0.3)',
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    /* Mobile Phone */
                    <motion.div
                      key="mobile"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="relative mx-auto"
                      style={{ width: '280px' }}
                    >
                      {/* Outer phone bezel - thick black frame */}
                      <div
                        ref={setDeviceNode}
                        className="relative rounded-full"
                        style={{
                          background: '#000',
                          padding: '16px',
                          borderRadius: '60px',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                        }}
                      >
                        {/* Phone body */}
                        <div
                          className="relative rounded-full overflow-hidden"
                          style={{
                            background: '#1a1a1a',
                            borderRadius: '50px',
                            aspectRatio: '9 / 19',
                            overflow: 'hidden',
                          }}
                        >
                          {/* Status bar */}
                          <div
                            className="absolute top-0 left-0 right-0 h-8 bg-white text-black text-xs flex justify-between items-center px-4 z-30"
                            style={{ fontSize: '11px', fontWeight: '600' }}
                          >
                            <span>9:41</span>
                            <div className="flex gap-1">
                              <span>📶</span>
                              <span>📡</span>
                              <span>🔋</span>
                            </div>
                          </div>

                          {/* Notch */}
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-b-2xl z-20" />

                          {/* Screen content */}
                          <div className="relative bg-slate-900 w-full h-full pt-10 overflow-hidden">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={currentImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                              >
                                <img
                                  src={mockupImages[currentImage]}
                                  alt={`App mockup ${currentImage + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </motion.div>
                            </AnimatePresence>
                          </div>

                          {/* Home indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-black rounded-full z-20" />
                        </div>
                      </div>

                      {/* Carousel indicators */}
                      <div className="flex justify-center gap-2 mt-8">
                        {mockupImages.map((_, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className="h-2 rounded-full transition-all"
                            animate={{
                              width: currentImage === idx ? 24 : 8,
                              background: currentImage === idx ? '#0000cc' : 'rgba(255,255,255,0.3)',
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Right Features */}
            <motion.div className="space-y-16 hidden lg:block">
              {rightFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    ref={(el) => setFeatureRef(el, idx + 3)}
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex gap-4 flex-row-reverse relative z-10"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="flex items-center justify-center h-12 w-12 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #0055ff, #00ccff)',
                        }}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="text-right">
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
