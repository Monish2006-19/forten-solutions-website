import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Arun Kumar',
    role: 'Founder, RetailFlow',
    text: 'Forten delivered our customer support automation in 3 weeks. Ticket resolution time dropped from 6 hours to 2 minutes. Genuinely transformative for our whole operation.',
    stars: 5,
    color: '#0000cc',
  },
  {
    name: 'Priya Nair',
    role: 'Operations Director, LogiChain SaaS',
    text: 'The inventory SaaS they built replaced our entire Excel workflow. Clean architecture, great documentation, zero issues after handoff. Exceptional team.',
    stars: 5,
    color: '#0066ff',
  },
  {
    name: 'Ravi Shankar',
    role: 'CEO, FreshCart India',
    text: 'From zero to a live booking platform in 6 weeks. 3,200 bookings in the first month. Forten truly understood exactly what we needed and delivered.',
    stars: 5,
    color: '#0000cc',
  },
];

function ArunAvatar() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
      
      {/* Body / Shirt */}
      <path d="M 22,95 C 22,75 32,70 50,70 C 68,70 78,75 78,95 Z" fill="#2563eb" />
      {/* Shirt collar */}
      <path d="M 42,70 L 50,80 L 58,70 Z" fill="#1d4ed8" />
      
      {/* Neck */}
      <rect x="44" y="60" width="12" height="12" rx="2" fill="#fed7aa" />
      
      {/* Head with breathing bob */}
      <motion.g
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Face */}
        <rect x="34" y="28" width="32" height="36" rx="10" fill="#fed7aa" />
        
        {/* Hair */}
        <path d="M 32,32 C 32,20 40,15 50,15 C 60,15 68,20 68,32 C 60,28 40,28 32,32 Z" fill="#1e1b4b" />
        
        {/* Glasses */}
        <rect x="36" y="38" width="11" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="53" y="38" width="11" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="47" y1="42" x2="53" y2="42" stroke="#0f172a" strokeWidth="1.5" />
        
        {/* Blinking Eyes */}
        <motion.ellipse
          cx="41.5"
          cy="42"
          rx="1.8"
          ry="1.8"
          fill="#000"
          animate={{ scaleY: [1, 1, 0, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.95, 0.97, 0.99, 1] }}
        />
        <motion.ellipse
          cx="58.5"
          cy="42"
          rx="1.8"
          ry="1.8"
          fill="#000"
          animate={{ scaleY: [1, 1, 0, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.95, 0.97, 0.99, 1] }}
        />
        
        {/* Speaking Mouth */}
        <motion.path
          d="M 45,53 Q 50,55 55,53"
          stroke="#0f172a"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M 45,53 Q 50,53 55,53",
              "M 45,53 Q 50,58 55,53",
              "M 45,53 Q 50,51 55,53",
              "M 45,53 Q 50,60 55,53",
              "M 45,53 Q 50,53 55,53"
            ]
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      </motion.g>
    </svg>
  );
}

function PriyaAvatar() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" fill="#1e293b" stroke="#db2777" strokeWidth="2" />
      
      {/* Long Hair Back */}
      <path d="M 26,50 C 26,30 34,20 50,20 C 66,20 74,30 74,50 L 76,85 L 24,85 Z" fill="#451a03" />
      
      {/* Body / Blazer */}
      <path d="M 22,95 C 22,75 32,70 50,70 C 68,70 78,75 78,95 Z" fill="#db2777" />
      {/* V-neck shirt */}
      <path d="M 44,70 L 50,80 L 56,70 Z" fill="#ffffff" />
      
      {/* Neck */}
      <rect x="45" y="60" width="10" height="12" rx="2" fill="#ffedd5" />
      
      {/* Head with breathing bob */}
      <motion.g
        animate={{ y: [0, -1.2, 0], rotate: [0, 0.4, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 65%" }}
      >
        {/* Face */}
        <rect x="35" y="28" width="30" height="34" rx="12" fill="#ffedd5" />
        
        {/* Front Hair Bangs */}
        <path d="M 32,32 C 32,20 40,16 50,16 C 60,16 68,20 68,32 C 62,24 55,24 50,26 C 45,24 38,24 32,32 Z" fill="#451a03" />
        
        {/* Blinking Eyes */}
        <motion.ellipse
          cx="42"
          cy="42"
          rx="1.5"
          ry="1.5"
          fill="#000"
          animate={{ scaleY: [1, 1, 0, 1, 1] }}
          transition={{ duration: 3.8, repeat: Infinity, times: [0, 0.94, 0.96, 0.98, 1] }}
        />
        <motion.ellipse
          cx="58"
          cy="42"
          rx="1.5"
          ry="1.5"
          fill="#000"
          animate={{ scaleY: [1, 1, 0, 1, 1] }}
          transition={{ duration: 3.8, repeat: Infinity, times: [0, 0.94, 0.96, 0.98, 1] }}
        />
        
        {/* Speaking Mouth */}
        <motion.path
          d="M 45,52 Q 50,54 55,52"
          stroke="#991b1b"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: [
              "M 46,52 Q 50,52 54,52",
              "M 46,52 Q 50,56 54,52",
              "M 46,52 Q 50,53 54,52",
              "M 46,52 Q 50,58 54,52",
              "M 46,52 Q 50,52 54,52"
            ]
          }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
      </motion.g>
    </svg>
  );
}

function RaviAvatar() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" fill="#1e293b" stroke="#0d766e" strokeWidth="2" />
      
      {/* Body / T-Shirt */}
      <path d="M 22,95 C 22,75 32,70 50,70 C 68,70 78,75 78,95 Z" fill="#0d766e" />
      
      {/* Neck */}
      <rect x="44" y="60" width="12" height="12" rx="2" fill="#fdba74" />
      
      {/* Head with breathing bob */}
      <motion.g
        animate={{ y: [0, -1.8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Face */}
        <rect x="34" y="28" width="32" height="35" rx="10" fill="#fdba74" />
        
        {/* Beard / Stubble */}
        <path d="M 34,48 C 34,60 40,65 50,65 C 60,65 66,60 66,48 C 66,54 60,59 50,59 C 40,59 34,54 34,48 Z" fill="#111827" opacity="0.85" />
        
        {/* Hair */}
        <path d="M 32,30 C 31,18 42,12 50,15 C 58,12 69,18 68,30 L 69,34 L 31,34 Z" fill="#111827" />
        
        {/* Blinking Eyes */}
        <motion.ellipse
          cx="41.5"
          cy="40"
          rx="1.8"
          ry="1.8"
          fill="#000"
          animate={{ scaleY: [1, 1, 0, 1, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.94, 0.96, 0.98, 1] }}
        />
        <motion.ellipse
          cx="58.5"
          cy="40"
          rx="1.8"
          ry="1.8"
          fill="#000"
          animate={{ scaleY: [1, 1, 0, 1, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.94, 0.96, 0.98, 1] }}
        />
        
        {/* Mustache */}
        <path d="M 43,49 Q 50,52 57,49 Q 50,47 43,49 Z" fill="#111827" />
        
        {/* Speaking Mouth */}
        <motion.path
          d="M 45,53 Q 50,54 55,53"
          stroke="#111827"
          strokeWidth="2"
          fill="#ffffff"
          strokeLinecap="round"
          animate={{
            d: [
              "M 46,53 Q 50,53 54,53",
              "M 46,53 Q 50,57 54,53",
              "M 46,53 Q 50,54 54,53",
              "M 46,53 Q 50,59 54,53",
              "M 46,53 Q 50,53 54,53"
            ]
          }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />
      </motion.g>
    </svg>
  );
}

function AnimatedAvatar({ index }) {
  if (index === 0) return <ArunAvatar />;
  if (index === 1) return <PriyaAvatar />;
  if (index === 2) return <RaviAvatar />;
  return null;
}

function VoiceWave() {
  const bars = Array.from({ length: 15 });
  return (
    <div className="flex items-end justify-center gap-1 h-8 mt-4 w-full">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-blue-400"
          animate={{
            height: [
              "8px", 
              `${Math.floor(Math.random() * 20) + 8}px`, 
              "8px"
            ]
          }}
          transition={{
            duration: 0.4 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.03
          }}
          style={{
            background: 'linear-gradient(to top, #3b82f6, #60a5fa)',
            boxShadow: '0 0 8px rgba(96, 165, 250, 0.4)'
          }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Auto-play cycling every 6 seconds, resetting if index changes manually
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section id="testimonials" ref={ref} className="relative z-10 py-28 px-4 bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            What Our Clients Say
          </h2>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-xl mx-auto opacity-90 mt-3">
            Real feedback from people we've built for. Meet our active reviewers below.
          </p>
        </motion.div>

        {/* Carousel Showcase */}
        <div 
          className="glass-card max-w-4xl mx-auto p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16 min-h-[440px]" 
          style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

          {/* Left Column: Animated Human Avatar & Speaking Status */}
          <div className="w-full md:w-[40%] flex flex-col items-center justify-center relative z-10 shrink-0">
            {/* Glowing radial halo behind avatar */}
            <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse bg-blue-500" />
            
            {/* Avatar display container */}
            <div className="relative p-2 rounded-full border-2 border-slate-100 bg-slate-900 shadow-2xl overflow-hidden flex items-center justify-center w-44 h-44">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <AnimatedAvatar index={index} />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Status bar & Speaking Soundwave */}
            <div className="mt-4 flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-mono font-bold tracking-widest uppercase animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Active Reviewer
              </span>
              <VoiceWave />
            </div>
          </div>

          {/* Right Column: Review Details & Controls */}
          <div className="w-full md:w-[60%] flex flex-col justify-between min-h-[300px] relative z-10 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col gap-6"
              >
                {/* 5 Stars Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span key={starIdx} className="text-xl text-yellow-400 drop-shadow-[0_0_6px_rgba(234,179,8,0.35)]">★</span>
                  ))}
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <span className="absolute -top-6 -left-4 text-7xl font-serif text-slate-200 pointer-events-none select-none">“</span>
                  <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed italic relative z-10">
                    "{t.text}"
                  </p>
                </div>

                {/* User Info Details */}
                <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold bg-blue-50 text-blue-600 border border-blue-100">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-tight">{t.name}</h4>
                    <p className="text-xs text-blue-600 font-semibold tracking-wide uppercase mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-8 md:mt-12">
              <button
                onClick={() => {
                  setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                }}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all shadow-md active:scale-95 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} className="stroke-[2.5] text-slate-800" />
              </button>
              <button
                onClick={() => {
                  setIndex((prev) => (prev + 1) % testimonials.length);
                }}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all shadow-md active:scale-95 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} className="stroke-[2.5] text-slate-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
