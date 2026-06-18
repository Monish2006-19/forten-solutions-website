import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, AlertCircle, CheckCircle, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

// Import PeeTee Home Needs images
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
    color: '#0000cc',
  },
  {
    category: 'AI Automation',
    title: 'Automated Customer Support Retail Bot',
    problem: 'Manual ticket handling taking 6+ hours/day with a 40% response error rate.',
    solution: 'Built an LLM-powered support bot with product knowledge base, integrated with WhatsApp & email.',
    impact: 'Saved 6+ hours/day, response error rate reduced to <1%.',
    tags: ['LLMs', 'OpenAI', 'WhatsApp API', 'Customer Support'],
    color: '#0055ff',
  },
  {
    category: 'Custom Software',
    title: 'Inventory Management SaaS Platform',
    problem: 'Excel-based tracking causing stockouts and zero real-time warehouse visibility.',
    solution: 'Full-stack SaaS with real-time inventory, auto reorders, and multi-location support.',
    impact: '100% real-time tracking, stockout incidents eliminated entirely.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    color: '#0000cc',
  },
];

export default function CaseStudies() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [topIndex, setTopIndex] = useState(0);

  const peeteeImages = [pt1, pt2, pt3, pt4, pt5];

  // Lock body scroll and listen for Escape key when any modal is active
  useEffect(() => {
    if (activeId !== null) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeId]);

  const handleClose = () => {
    setActiveId(null);
  };

  return (
    <section id="case-studies" className="relative z-10 py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Results We've Delivered</h2>
          <p className="section-subtitle">
            Real problems, real solutions, real numbers. Click on any card to reveal details.
          </p>
        </motion.div>

        {/* 3D Flash Card Deck Grid (Straight Cards, Perfectly Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => {
            const isThisActive = activeId === idx;

            return (
              <div
                key={idx}
                className="relative h-64 w-full flex items-center justify-center"
                onMouseEnter={() => {
                  setHoveredId(idx);
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                }}
              >
                {/* If active, show slot placeholder, else show the closed card */}
                {isThisActive ? (
                  <div className="w-full h-full rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/70 flex flex-col items-center justify-center p-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                      File Open
                    </span>
                  </div>
                ) : (
                  <motion.div
                    layoutId={`card-${idx}`}
                    onClick={() => setActiveId(idx)}
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    className="w-full h-full cursor-pointer bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl border-2 border-slate-800 shadow-md p-6 flex flex-col justify-between items-center overflow-hidden relative"
                  >
                    {/* Holographic grid overlay */}
                    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none" />

                    {/* Radial glow */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-40 animate-pulse"
                      style={{ backgroundColor: c.color }}
                    />

                    {/* Card Content (right-side up and readable) */}
                    <div className="w-full flex justify-between items-start text-slate-400 font-mono text-[10px]">
                      <span>CASE FILE</span>
                      <span>0{idx + 1}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center flex-grow text-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-slate-950/60 border"
                        style={{ borderColor: `${c.color}30` }}
                      >
                        <Sparkles size={16} style={{ color: c.color }} />
                      </div>
                      <h4 className="text-base font-black text-slate-200 tracking-widest uppercase mb-1">
                        {c.category}
                      </h4>
                      <h5 className="text-sm font-bold text-slate-400">
                        {c.title}
                      </h5>
                      <span className="text-[10px] font-mono text-blue-400 tracking-wider mt-4 uppercase font-black">
                        Click to enlarge
                      </span>
                    </div>

                    <div className="w-full flex justify-between items-end text-slate-500 font-mono text-[9px] opacity-40">
                      <span>FS DECK</span>
                      <span>CONFIDENTIAL</span>
                    </div>
                  </motion.div>
                )}

                {/* Floating hint tooltip (right-side up) */}
                <AnimatePresence>
                  {hoveredId === idx && !isThisActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-xl pointer-events-none flex items-center gap-1.5"
                    >
                      <span>Open Case File</span>
                      <ArrowRight size={11} className="animate-pulse" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Modal Backdrop and Card Detail View rendered via React Portal */}
        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {activeId !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/75 backdrop-blur-md p-4 md:p-8 cursor-pointer"
                onClick={handleClose}
              >
              {activeId === 0 ? (
                /* PeeTee Home Needs Customized Split-Backdrop Modal (Transparent Card Wrapper) */
                <motion.div
                  layoutId={`card-0`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                  style={{ background: 'transparent' }}
                  className="w-full max-w-6xl h-[92vh] md:h-[85vh] relative cursor-default overflow-y-auto md:overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center animate-none"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Left Half: White card container for texts only (Broadened to 52%) */}
                  <div className="w-full md:w-[52%] bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-8 md:p-10 flex flex-col justify-start md:overflow-y-auto h-full scrollbar-thin relative text-slate-800">
                    {/* Top glowing bar inside the card */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                      style={{ background: `linear-gradient(to right, #0000cc, #0055ff)` }}
                    />

                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-100/50 self-start mt-2">
                      {cases[0].category}
                    </span>

                    <h3 className="text-3xl font-black text-slate-900 mt-4 mb-2 leading-tight">
                      {cases[0].title}
                    </h3>
                    <p className="text-sm text-slate-500 font-semibold mb-6">
                      Web & Mobile E-Commerce Platform
                    </p>

                    <div className="space-y-4 pr-1">
                      {/* Project Overview */}
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                          Overview
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          A full-scale grocery and home needs e-commerce ecosystem. Consists of customer mobile apps and an automated web shop for optimized shopping and tracking.
                        </p>
                      </div>

                      {/* The Problem */}
                      <div className="bg-slate-50/40 border border-slate-100 border-l-2 border-l-slate-400 p-4 rounded-r-2xl rounded-l-md flex gap-3.5 items-start">
                        <div className="text-slate-600 flex-shrink-0 mt-0.5">
                          <AlertCircle size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                            The Challenge
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {cases[0].problem}
                          </p>
                        </div>
                      </div>

                      {/* Our Solution */}
                      <div className="bg-slate-50/40 border border-slate-100 border-l-2 border-l-slate-600 p-4 rounded-r-2xl rounded-l-md flex gap-3.5 items-start">
                        <div className="text-slate-600 flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                            Our Solution
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {cases[0].solution}
                          </p>
                        </div>
                      </div>

                      {/* Impact / Results */}
                      <div className="bg-slate-50/40 border border-slate-100 border-l-2 border-l-slate-800 p-4 rounded-r-2xl rounded-l-md flex gap-3.5 items-start">
                        <div className="text-slate-800 flex-shrink-0 mt-0.5">
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-0.5">
                            The Business Impact
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed font-bold">
                            {cases[0].impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6 mb-8">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                        Technology Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cases[0].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-slate-100 border border-slate-200/60 rounded-md text-xs font-semibold text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA within text card */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        Want similar results?
                      </span>
                      <a
                        href="#contact"
                        onClick={handleClose}
                        className="btn-primary"
                      >
                        Discuss Project <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Right Half: Horizontal Stacked Cards Carousel floating in blurred background (Width: 48%) */}
                  <div className="w-full md:w-[48%] flex flex-col items-center justify-center relative min-h-[420px] md:min-h-0 h-full overflow-visible py-8">
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span>E-Commerce Platform Mockups</span>
                    </div>

                    {/* Container width and height sized for horizontal screens (Enlarged) */}
                    <div className="relative w-80 h-50 md:w-[580px] md:h-[370px] flex items-center justify-center overflow-visible">
                      {peeteeImages.map((imgSrc, imgIdx) => {
                        const position = (imgIdx - topIndex + 5) % 5;

                        // Layout calculation for straight horizontal cards stacked cleanly
                        const scale = 1 - position * 0.055;
                        const translateY = position * 14;
                        const translateX = position * 12;

                        const opacity = position === 0 ? 1 : position === 1 ? 0.85 : position === 2 ? 0.65 : position === 3 ? 0.45 : 0.25;
                        const zIndex = peeteeImages.length - position;

                        const isGoingToBack = position === 4;

                        return (
                          <motion.div
                            key={imgIdx}
                            className="absolute w-80 h-50 md:w-[560px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-transparent p-0"
                            style={{
                              zIndex,
                              transformOrigin: 'bottom center',
                            }}
                            animate={
                              isGoingToBack
                                ? {
                                    x: [null, -380, translateX],
                                    y: [null, -15, translateY],
                                    scale: [null, 1.02, scale],
                                    opacity: [null, 0.9, opacity],
                                  }
                                : {
                                    x: translateX,
                                    y: translateY,
                                    scale,
                                    opacity,
                                    rotate: 0,
                                  }
                            }
                            transition={
                              isGoingToBack
                                ? {
                                    duration: 0.65,
                                    times: [0, 0.45, 1],
                                    ease: 'easeInOut',
                                  }
                                : {
                                    duration: 0.45,
                                    ease: [0.25, 1, 0.5, 1],
                                  }
                            }
                          >
                            <img
                              src={imgSrc}
                              alt={`PeeTee Home Needs Screenshot ${imgIdx + 1}`}
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Navigation Buttons for manual control */}
                    <div className="flex gap-4 mt-8 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTopIndex((prev) => (prev - 1 + 5) % 5);
                        }}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/50 transition-all shadow-xl active:scale-95"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} className="stroke-[2.5]" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTopIndex((prev) => (prev + 1) % 5);
                        }}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/50 transition-all shadow-xl active:scale-95"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} className="stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Standard Modal for other cases */
                <motion.div
                  layoutId={`card-${activeId}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                  className="bg-white border border-slate-200 shadow-2xl rounded-3xl p-8 max-w-xl w-full relative cursor-default overflow-hidden text-slate-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ background: `linear-gradient(to right, ${cases[activeId].color}, transparent)` }}
                  />

                  <div className="mt-2">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md"
                      style={{
                        background: `${cases[activeId].color}12`,
                        color: cases[activeId].color,
                        border: `1px solid ${cases[activeId].color}20`
                      }}
                    >
                      {cases[activeId].category}
                    </span>

                    <h3 className="text-2xl font-black text-slate-900 mt-4 mb-6 leading-tight">
                      {cases[activeId].title}
                    </h3>

                    <div className="space-y-4">
                      {/* Problem */}
                      <div className="bg-slate-50/40 border border-slate-100 border-l-2 border-l-slate-400 p-4 rounded-r-2xl rounded-l-md flex gap-3.5 items-start">
                        <div className="text-slate-600 flex-shrink-0 mt-0.5">
                          <AlertCircle size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                            The Challenge
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {cases[activeId].problem}
                          </p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="bg-slate-50/40 border border-slate-100 border-l-2 border-l-slate-600 p-4 rounded-r-2xl rounded-l-md flex gap-3.5 items-start">
                        <div className="text-slate-600 flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                            Our Solution
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {cases[activeId].solution}
                          </p>
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="bg-slate-50/40 border border-slate-100 border-l-2 border-l-slate-800 p-4 rounded-r-2xl rounded-l-md flex gap-3.5 items-start">
                        <div className="text-slate-800 flex-shrink-0 mt-0.5">
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-0.5">
                            The Business Impact
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed font-bold">
                            {cases[activeId].impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                        Technology Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cases[activeId].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-slate-100 border border-slate-200/60 rounded-md text-xs font-semibold text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        Want similar results?
                      </span>
                      <a
                        href="#contact"
                        onClick={handleClose}
                        className="btn-primary"
                      >
                        Discuss Project <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Floating Black Exit Button at top right of viewport backdrop */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white text-black border-2 border-black hover:bg-slate-100 transition-all z-50 shadow-xl"
                aria-label="Close modal"
              >
                <X size={22} className="text-black stroke-[3]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 glass-card p-8 md:flex items-center justify-between gap-6"
          style={{ borderColor: 'rgba(0, 0, 204, 0.15)' }}
        >
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">Ready to be our next success story?</h3>
            <p className="text-slate-600 text-sm">Let's talk about your project and how we can deliver results like these.</p>
          </div>
          <a href="#contact" data-cursor="link" className="btn-primary mt-4 md:mt-0 whitespace-nowrap">
            Start a Project <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
