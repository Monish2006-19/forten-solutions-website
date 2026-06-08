import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: 'Arun Kumar',
    text: 'Forten delivered our customer support automation in 3 weeks. Ticket resolution time dropped from 6 hours to 2 minutes. Genuinely transformative for our whole operation.',
    stars: 5,
    color: '#7c3aed',
  },
  {
    name: 'Priya Nair',
    text: 'The inventory SaaS they built replaced our entire Excel workflow. Clean architecture, great documentation, zero issues after handoff. Exceptional team.',
    stars: 5,
    color: '#a855f7',
  },
  {
    name: 'Ravi Shankar',
    text: 'From zero to a live booking platform in 6 weeks. 3,200 bookings in the first month. Forten truly understood exactly what we needed and delivered.',
    stars: 5,
    color: '#7c3aed',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="relative z-10 py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
            Client Voices
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real feedback from people we've built for.</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="glass-card p-7 flex flex-col gap-5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              style={{ borderColor: `${t.color}25` }}
            >
              {/* Top color bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(to right, ${t.color}, transparent)` }}
              />

              {/* Stars */}
              <div className="flex gap-1 mt-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} style={{ color: t.color, fontSize: '15px' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}35` }}
                >
                  {t.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
