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
  { name: 'LangGraph', color: '#10a37f' },
  { name: 'LangChain', color: '#1c3c4d' },
  { name: 'TailwindCSS', color: '#38bdf8' },
  { name: 'GraphQL', color: '#000000ff' },
  { name: 'React Native', color: '#000000ff' },
  { name: 'Flutter', color: '#54c5f8' },
  { name: 'Redis', color: '#dc382d' },
  { name: 'N8N', color: '#2ddc2dff' },
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
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border whitespace-nowrap transition-all duration-300 hover:scale-105 shadow-sm"
            style={{
              background: '#ffffff',
              borderColor: tech.color === '#ffffff' ? '#e2e8f0' : `${tech.color}40`,
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: tech.color,
                boxShadow: tech.color === '#ffffff' ? 'none' : `0 0 8px ${tech.color}66`,
                border: tech.color === '#ffffff' ? '1px solid #cbd5e1' : 'none',
              }}
            />
            <span className="text-sm font-semibold text-slate-800">
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
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border whitespace-nowrap transition-all duration-300 hover:scale-105 shadow-sm"
            style={{
              background: '#ffffff',
              borderColor: tech.color === '#ffffff' ? '#e2e8f0' : `${tech.color}40`,
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: tech.color,
                boxShadow: tech.color === '#ffffff' ? 'none' : `0 0 8px ${tech.color}66`,
                border: tech.color === '#ffffff' ? '1px solid #cbd5e1' : 'none',
              }}
            />
            <span className="text-sm font-semibold text-slate-800">
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
    <section id="tech" className="relative z-10 py-24 overflow-hidden bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-4">
          Technologies We Master
        </h2>
        <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-xl mx-auto opacity-90">
          A full-stack team fluent in every layer of modern software.
        </p>
      </motion.div>

      {/* Left/right gradients matching the dark slate background */}
      <div className="relative py-6">
        {/* Thin white background with top/bottom vertical gradients to blend perfectly with the blue bg */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 15%, rgba(255, 255, 255, 0.95) 85%, rgba(255, 255, 255, 0) 100%)'
          }}
        />

        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #020617, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #020617, transparent)' }} />
        
        <div className="relative z-10 flex flex-col gap-4">
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
