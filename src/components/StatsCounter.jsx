import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', end: 5, suffix: '+', color: '#0000cc' },
  { label: 'Happy Clients', end: 5, suffix: '+', color: '#0000cc' },
  { label: 'Avg Uptime', end: 99.9, suffix: '%', decimals: 1, color: '#0000cc' },
  { label: 'Tech Stack Expertise', end: 20, suffix: '+', color: '#0000cc' },
];

function useCountUp(end, duration = 2200, decimals = 0, trigger = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    // Elastic overshoot: count to end*1.07, then settle back to end
    const OVERSHOOT = 1.07;
    const overshootVal = end * OVERSHOOT;
    const phase1 = duration * 0.78;
    const phase2 = duration * 0.22;
    let startTime = null;
    let raf;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      let current;
      if (elapsed < phase1) {
        current = (elapsed / phase1) * overshootVal;
      } else if (elapsed < duration) {
        const t2 = (elapsed - phase1) / phase2;
        current = overshootVal + (end - overshootVal) * t2;
      } else {
        current = end;
      }
      setVal(+current.toFixed(decimals));
      if (elapsed < duration) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration, decimals]);
  return val;
}

function Stat({ label, end, suffix, color, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const val = useCountUp(end, 2000, decimals, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative text-center"
    >
      <div className="glass-card p-8">
        <div className="text-5xl md:text-6xl font-black mb-4 tabular-nums" style={{ color }}>
          {val}{suffix}
        </div>
        <div className="font-semibold uppercase tracking-wider text-sm text-slate-500">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative z-10 py-24 px-4 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#0f172a' }}>
            OUR IMPACT IN NUMBERS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
