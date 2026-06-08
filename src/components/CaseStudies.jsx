import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    category: 'AI Automation',
    title: 'Automated Customer Support for Retail Brand',
    problem: 'Manual ticket handling taking 6+ hours/day, 40% error rate in responses.',
    solution: 'Built an LLM-powered support bot with product knowledge base, integrated with WhatsApp & email.',
    color: '#a855f7',
  },
  {
    category: 'Custom Software',
    title: 'Inventory Management SaaS for Manufacturer',
    problem: 'Excel-based tracking causing stockouts, no real-time visibility across warehouses.',
    solution: 'Full-stack SaaS with real-time inventory, automated reorder triggers, and multi-location support.',
    color: '#7c3aed',
  },
  {
    category: 'Web & Mobile',
    title: 'Hyperlocal Service Booking Platform',
    problem: 'No digital presence, bookings entirely via word-of-mouth phone calls.',
    solution: 'Mobile-first PWA with real-time booking, service provider dashboard, and payment integration.',
    color: '#a855f7',
  },
];

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};
// Each card slides from a different direction
const cardDirections = [
  { hidden: { opacity: 0, x: -50, y: 20 }, show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } },
  { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } },
  { hidden: { opacity: 0, x: 50, y: 20 }, show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative z-10 py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
            Proof of Work
          </div>
          <h2 className="section-title">Results We've Delivered</h2>
          <p className="section-subtitle">
            Real problems, real solutions, real numbers. No fluff — just impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-7"
        >
          {cases.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={cardDirections[idx].hidden}
              whileInView={cardDirections[idx].show}
              viewport={{ once: true, margin: '-60px' }}
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-transform duration-300 relative"
              data-cursor="service"
              style={{ borderColor: `${c.color}20` }}
            >
              {/* Shimmer line on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div style={{
                  position: 'absolute', top: 0, bottom: 0, width: '40%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
                  animation: 'shimmerSweep 0.9s ease',
                }} />
              </div>

              {/* Top color bar — now animated width */}
              <div className="h-1 w-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + idx * 0.15, ease: 'easeOut' }}
                  className="h-full w-full"
                  style={{ background: `linear-gradient(to right, ${c.color}, transparent)` }}
                />
              </div>

              <div className="p-7">
                {/* Category */}
                <span className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: c.color }}>{c.category}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-4 leading-snug">{c.title}</h3>

                {/* Problem → Solution */}
                <div className="space-y-3 mb-6">
                  <div className="glass-card p-3 rounded-xl" style={{ borderColor: 'rgba(239,68,68,0.15)' }}>
                    <p className="text-xs font-semibold text-red-400 mb-1 uppercase tracking-wider">The Problem</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="glass-card p-3 rounded-xl" style={{ borderColor: `${c.color}20` }}>
                    <p className="text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: c.color }}>Our Solution</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{c.solution}</p>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 glass-card p-8 md:flex items-center justify-between gap-6"
          style={{ borderColor: 'rgba(124,58,237,0.25)' }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Ready to be our next success story?</h3>
            <p className="text-slate-400 text-sm">Let's talk about your project and how we can deliver results like these.</p>
          </div>
          <a href="#contact" data-cursor="link" className="btn-primary mt-4 md:mt-0 whitespace-nowrap">
            Start a Project <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
