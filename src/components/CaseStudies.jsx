import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, AlertCircle, CheckCircle, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

import pt1 from '../images/Peeteehoneneeds/1.jpeg';
import pt2 from '../images/Peeteehoneneeds/2.jpeg';
import pt3 from '../images/Peeteehoneneeds/3.jpeg';
import pt4 from '../images/Peeteehoneneeds/4.jpeg';
import pt5 from '../images/Peeteehoneneeds/5.jpeg';

const cases = [
  {
    category: 'Mobile & Web E-commerce',
    title: 'PeeTee Home Needs',
    problem: 'Local shoppers lacked an easy way to order groceries and home essentials online, leading to store congestion and lost phone orders.',
    solution: 'Engineered a unified e-commerce platform with a high-performance web dashboard and dedicated customer mobile applications.',
    impact: 'Successfully launched, driving over 500+ daily orders and reducing checkout delays by 60%.',
    tags: ['E-commerce', 'React Native', 'Node.js', 'PostgreSQL'],
    color: '#00f0ff',
  },
  {
    category: 'AI Automation',
    title: 'Retail Support Agent Bot',
    problem: 'Manual support ticket handling taking 6+ hours/day with a 40% response error rate.',
    solution: 'Built a cognitive LLM-powered support bot with product knowledge base, integrated with WhatsApp & email.',
    impact: 'Saved 6+ hours/day, response error rate reduced to <1%.',
    tags: ['LLMs', 'OpenAI API', 'WhatsApp API', 'Automation'],
    color: '#a855f7',
  },
  {
    category: 'Custom Software',
    title: 'Warehouse SaaS Platform',
    problem: 'Excel-based tracking causing stockouts and zero real-time warehouse visibility.',
    solution: 'Full-stack SaaS with real-time inventory, auto reorders, and multi-location support.',
    impact: '100% real-time tracking, stockout incidents eliminated entirely.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    color: '#fbbf24',
  },
];

export default function CaseStudies() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [topIndex, setTopIndex] = useState(0);

  const peeteeImages = [pt1, pt2, pt3, pt4, pt5];

  useEffect(() => {
    if (activeId !== null) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveId(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
    document.body.style.overflow = 'unset';
  }, [activeId]);

  return (
    <section id="case-studies" className="relative py-28 px-4 md:px-8 overflow-hidden" style={{ background: '#050508' }}>
      <div className="absolute inset-0 pointer-events-none opacity-5 cyber-grid" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="neon-text text-cyan-400 font-extrabold tracking-widest uppercase text-xs block mb-3">
            [ corporate case studies ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
            Proven Business Outcomes
          </h2>
          <p className="section-subtitle max-w-xl mx-auto text-xs md:text-sm text-white/50">
            Real problems, custom engineered software architectures, and measured performance metrics.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => {
            const isThisActive = activeId === idx;

            return (
              <div
                key={idx}
                className="relative h-72 w-full flex items-center justify-center"
                onMouseEnter={() => setHoveredId(idx)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {isThisActive ? (
                  <div className="w-full h-full rounded-3xl border border-dashed border-cyan-400/20 bg-white/[0.02] flex flex-col items-center justify-center p-4">
                    <span className="text-[10px] font-mono text-cyan-400/50 uppercase tracking-widest">
                      File Active
                    </span>
                  </div>
                ) : (
                  <motion.div
                    layoutId={`card-${idx}`}
                    onClick={() => setActiveId(idx)}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    className="w-full h-full cursor-pointer bento-tile p-6 flex flex-col justify-between items-stretch overflow-hidden relative"
                  >
                    <div className="absolute inset-0 opacity-10 cyber-grid pointer-events-none" />
                    
                    {/* Radial Glow */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full blur-[80px] pointer-events-none opacity-20"
                      style={{ backgroundColor: c.color }}
                    />

                    {/* Metadata Header */}
                    <div className="flex justify-between items-center text-[9px] font-mono text-white/40">
                      <span>CASE FILE // CONFIDENTIAL</span>
                      <span>[ 0{idx + 1} ]</span>
                    </div>

                    {/* Content Core */}
                    <div className="flex flex-col items-center text-center my-auto">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-white/[0.02] border"
                        style={{ borderColor: `${c.color}30` }}
                      >
                        <Sparkles size={16} style={{ color: c.color }} />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400/80 mb-1">
                        {c.category}
                      </span>
                      <h3 className="text-base font-extrabold text-white leading-tight">
                        {c.title}
                      </h3>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center text-[10px] text-white/30 pt-4 border-t border-white/5">
                      <span>FS_DEPLOYMENT</span>
                      <span className="flex items-center gap-1 text-cyan-400 font-bold">
                        Analyze File <Eye size={12} />
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Hover Tooltip */}
                <AnimatePresence>
                  {hoveredId === idx && !isThisActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 bg-cyan-400 text-black text-[9px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full shadow-lg pointer-events-none flex items-center gap-1"
                    >
                      <span>Examine Case</span>
                      <ArrowRight size={10} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Portaled Detail Viewer Modal */}
        {typeof document !== 'undefined' && activeId !== null && createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 cursor-pointer"
              onClick={() => setActiveId(null)}
            >
              {activeId === 0 ? (
                /* PeeTee Home Needs Specific Layout */
                <motion.div
                  layoutId={`card-0`}
                  className="w-full max-w-6xl h-[92vh] md:h-[85vh] relative cursor-default overflow-y-auto md:overflow-hidden flex flex-col md:flex-row gap-6 md:gap-10 items-stretch justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Left Column: Case details */}
                  <div 
                    className="w-full md:w-[50%] bento-tile p-6 md:p-10 flex flex-col justify-between overflow-y-auto h-full scrollbar-thin"
                    style={{ background: 'rgba(10, 10, 15, 0.95)', borderColor: 'rgba(0, 240, 255, 0.15)' }}
                  >
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 self-start">
                        {cases[0].category}
                      </span>
                      <h3 className="text-2xl font-black text-white mt-4 mb-2">{cases[0].title}</h3>
                      <p className="text-xs text-white/50 mb-6 font-mono">[ E-Commerce Deploy Schema ]</p>

                      <div className="space-y-4">
                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block mb-1">Challenge</span>
                          <p className="text-xs text-white/80 leading-relaxed">{cases[0].problem}</p>
                        </div>

                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block mb-1">Solution Blueprint</span>
                          <p className="text-xs text-white/80 leading-relaxed">{cases[0].solution}</p>
                        </div>

                        <div className="bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-2xl">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">Business Impact</span>
                          <p className="text-xs text-white leading-relaxed font-bold">{cases[0].impact}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-white/5 pt-6 flex flex-col gap-4">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block mb-2">Technologies Used</span>
                        <div className="flex flex-wrap gap-1.5">
                          {cases[0].tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/80 font-mono">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[11px] text-white/40">Deploy identical stack?</span>
                        <a href="#contact" onClick={() => setActiveId(null)} className="btn-primary py-2 px-5 text-xs">
                          Brief Engineers →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Screenshot Carousel */}
                  <div className="w-full md:w-[50%] bento-tile p-6 flex flex-col items-center justify-between h-full relative overflow-hidden bg-black/40">
                    <div className="absolute inset-0 opacity-10 cyber-grid pointer-events-none" />

                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[9px] font-mono text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>Sitemap Mockup Display</span>
                    </div>

                    <div className="relative w-full flex-1 flex items-center justify-center overflow-visible">
                      {peeteeImages.map((imgSrc, imgIdx) => {
                        const position = (imgIdx - topIndex + 5) % 5;
                        const scale = 1 - position * 0.08;
                        const translateX = position * 18;
                        const translateY = position * 12;
                        const opacity = position === 0 ? 1 : position === 1 ? 0.7 : position === 2 ? 0.4 : 0.15;
                        const zIdx = 10 - position;

                        return (
                          <motion.div
                            key={imgIdx}
                            className="absolute w-[240px] md:w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            style={{ zIndex: zIdx }}
                            animate={{
                              x: translateX,
                              y: translateY,
                              scale,
                              opacity,
                            }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                          >
                            <img
                              src={imgSrc}
                              alt={`PeeTee screen ${imgIdx + 1}`}
                              className="w-full h-auto object-contain rounded-2xl max-h-[480px]"
                            />
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="flex gap-4 mt-6 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTopIndex((p) => (p - 1 + 5) % 5);
                        }}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTopIndex((p) => (p + 1) % 5);
                        }}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Standard Modal for other cases */
                <motion.div
                  layoutId={`card-${activeId}`}
                  className="bento-tile p-6 md:p-10 max-w-xl w-full relative cursor-default"
                  style={{ background: 'rgba(10, 10, 15, 0.95)', borderColor: 'rgba(0, 240, 255, 0.15)' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ background: `linear-gradient(to right, ${cases[activeId].color}, transparent)` }}
                  />

                  <div className="mt-2">
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded bg-white/5 border border-white/10"
                      style={{ color: cases[activeId].color }}
                    >
                      {cases[activeId].category}
                    </span>

                    <h3 className="text-xl font-black text-white mt-4 mb-6">{cases[activeId].title}</h3>

                    <div className="space-y-4">
                      <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block mb-1">Challenge</span>
                        <p className="text-xs text-white/80 leading-relaxed">{cases[activeId].problem}</p>
                      </div>

                      <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block mb-1">Solution</span>
                        <p className="text-xs text-white/80 leading-relaxed">{cases[activeId].solution}</p>
                      </div>

                      <div className="bg-cyan-500/5 border border-cyan-500/20 p-4 rounded-xl">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">Business Impact</span>
                        <p className="text-xs text-white leading-relaxed font-bold">{cases[activeId].impact}</p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-white/5 pt-6">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block mb-2">Stack Config</span>
                      <div className="flex flex-wrap gap-1.5">
                        {cases[activeId].tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/80 font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-white/40">Want similar results?</span>
                      <a href="#contact" onClick={() => setActiveId(null)} className="btn-primary py-2 px-5 text-xs">
                        Discuss Project →
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Close Button */}
              <button
                onClick={() => setActiveId(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/5 text-white/60 hover:text-white border border-white/10 backdrop-blur-md"
              >
                <X size={16} />
              </button>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bento-tile p-8 md:flex items-center justify-between gap-6"
          style={{ borderColor: 'rgba(0, 240, 255, 0.15)' }}
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Ready to be our next success story?</h3>
            <p className="text-white/50 text-xs">Let's talk about your project and how we can deliver results like these.</p>
          </div>
          <a href="#contact" className="btn-primary mt-4 md:mt-0 whitespace-nowrap py-3 text-xs">
            Start a Project <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
