import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'Python', color: '#ffd43b' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'FastAPI', color: '#05998b' },
  { name: 'Django', color: '#0c4b33' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'Supabase', color: '#3ecf8e' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'AWS', color: '#ff9900' },
  { name: 'Vercel', color: '#ffffff' },
  { name: 'OpenAI', color: '#10a37f' },
  { name: 'LangChain', color: '#1c3c4d' },
  { name: 'TailwindCSS', color: '#38bdf8' },
  { name: 'GraphQL', color: '#e10098' },
  { name: 'React Native', color: '#61dafb' },
  { name: 'Flutter', color: '#54c5f8' },
  { name: 'Redis', color: '#dc382d' },
];

function MarqueeTrack({ reverse = false }) {
  const items = [...techStack, ...techStack];
  return (
    <div className="flex gap-4 overflow-hidden py-2">
      <div
        className={`flex gap-4 shrink-0 ${reverse ? 'animate-[marquee2_35s_linear_infinite]' : 'animate-[marquee_35s_linear_infinite]'}`}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border whitespace-nowrap transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: `${tech.color}30`,
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}88` }}
            />
            <span className="text-sm font-medium" style={{ color: `${tech.color}cc` }}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className={`flex gap-4 shrink-0 ${reverse ? 'animate-[marquee2_35s_linear_infinite]' : 'animate-[marquee_35s_linear_infinite]'}`}
      >
        {items.map((tech, i) => (
          <div
            key={'b' + i}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border whitespace-nowrap transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: `${tech.color}30`,
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}88` }}
            />
            <span className="text-sm font-medium" style={{ color: `${tech.color}cc` }}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section id="tech" className="relative z-10 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-5 border"
          style={{ borderColor: 'rgba(124,58,237,0.2)', background: 'rgba(124,58,237,0.05)', color: '#7c3aed' }}
        >
          Our Arsenal
        </div>
        <h2 className="section-title">Technologies We Master</h2>
        <p className="section-subtitle">
          A full-stack team fluent in every layer of modern software.
        </p>
      </motion.div>

      {/* Left/right gradients */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #07050d, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #07050d, transparent)' }} />
        <div className="flex flex-col gap-4">
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
