import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'Python', color: '#ffd43b' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'FastAPI', color: '#05998b' },
  { name: 'Django', color: '#4ade80' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'Supabase', color: '#3ecf8e' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'AWS', color: '#ff9900' },
  { name: 'Vercel', color: '#e2e8f0' },
  { name: 'LangGraph', color: '#10a37f' },
  { name: 'LangChain', color: '#60a5fa' },
  { name: 'TailwindCSS', color: '#38bdf8' },
  { name: 'GraphQL', color: '#e535ab' },
  { name: 'React Native', color: '#61dafb' },
  { name: 'Flutter', color: '#54c5f8' },
  { name: 'Redis', color: '#dc382d' },
  { name: 'N8N', color: '#ea580c' },
  { name: 'OpenAI', color: '#10a37f' },
];

function MarqueeTrack({ reverse = false }) {
  const items = [...techStack, ...techStack];
  return (
    <div className="flex gap-3 overflow-hidden py-2">
      <div
        className={`flex gap-3 shrink-0 ${
          reverse ? 'animate-[marquee2_40s_linear_infinite]' : 'animate-[marquee_40s_linear_infinite]'
        }`}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 hover:scale-105 cursor-default"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${
                tech.color === '#ffffff' || tech.color === '#e2e8f0' ? 'rgba(255,255,255,0.08)' : `${tech.color}25`
              }`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: tech.color,
                boxShadow: `0 0 6px ${tech.color}60`,
              }}
            />
            <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className={`flex gap-3 shrink-0 ${
          reverse ? 'animate-[marquee2_40s_linear_infinite]' : 'animate-[marquee_40s_linear_infinite]'
        }`}
      >
        {items.map((tech, i) => (
          <div
            key={'b' + i}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 hover:scale-105 cursor-default"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${
                tech.color === '#ffffff' || tech.color === '#e2e8f0' ? 'rgba(255,255,255,0.08)' : `${tech.color}25`
              }`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: tech.color,
                boxShadow: `0 0 6px ${tech.color}60`,
              }}
            />
            <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
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
    <section
      id="tech"
      className="relative z-10 py-24 px-4 md:px-8 overflow-hidden"
      style={{ background: '#050508' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-5 cyber-grid" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bento-tile p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 cyber-grid pointer-events-none" />

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 relative z-10"
          >
            <span className="neon-text text-cyan-400 font-extrabold tracking-widest uppercase text-xs block mb-3">
              [ integrations stack ]
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              Configured Ecosystem
            </h2>
            <p className="text-xs md:text-sm text-white/50 leading-relaxed max-w-xl mx-auto">
              Our products are engineered using standard, enterprise-ready platforms that guarantee performance.
            </p>
          </motion.div>

          {/* Marquee tracks */}
          <div className="relative z-10">
            {/* Left fade */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #0a0a0f, transparent)' }}
            />
            {/* Right fade */}
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #0a0a0f, transparent)' }}
            />

            <div className="flex flex-col gap-4">
              <MarqueeTrack />
              <MarqueeTrack reverse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
