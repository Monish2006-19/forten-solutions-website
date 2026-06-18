import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Arun Kumar',
    role: 'Founder, RetailFlow',
    text: 'Forten delivered our customer support automation in 3 weeks. Ticket resolution time dropped from 6 hours to 2 minutes. Genuinely transformative for our whole operation.',
    stars: 5,
    color: '#00f0ff',
    gridClass: 'lg:col-span-2'
  },
  {
    name: 'Priya Nair',
    role: 'Operations Director, LogiChain',
    text: 'The inventory SaaS they built replaced our entire Excel workflow. Clean architecture, great documentation, zero issues after handoff. Exceptional team.',
    stars: 5,
    color: '#a855f7',
    gridClass: 'lg:col-span-1'
  },
  {
    name: 'Ravi Shankar',
    role: 'CEO, FreshCart India',
    text: 'From zero to a live booking platform in 6 weeks. 3,200 bookings in the first month. Forten truly understood exactly what we needed and delivered.',
    stars: 5,
    color: '#fbbf24',
    gridClass: 'lg:col-span-3'
  },
];

function ArunAvatar() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#111" stroke="#00f0ff" strokeWidth="2" />
      <path d="M 22,95 C 22,75 32,70 50,70 C 68,70 78,75 78,95 Z" fill="#00f0ff" opacity="0.3" />
      <path d="M 42,70 L 50,80 L 58,70 Z" fill="#00c8d8" />
      <rect x="44" y="60" width="12" height="12" rx="2" fill="#fed7aa" />
      <motion.g animate={{ y: [0, -1.5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <rect x="34" y="28" width="32" height="36" rx="10" fill="#fed7aa" />
        <path d="M 32,32 C 32,20 40,15 50,15 C 60,15 68,20 68,32 C 60,28 40,28 32,32 Z" fill="#1e1b4b" />
        <rect x="36" y="38" width="11" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
        <rect x="53" y="38" width="11" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
        <line x1="47" y1="42" x2="53" y2="42" stroke="#0f172a" strokeWidth="1.5" />
        <ellipse cx="41.5" cy="42" rx="1.8" ry="1.8" fill="#000" />
        <ellipse cx="58.5" cy="42" rx="1.8" ry="1.8" fill="#000" />
        <path d="M 45,53 Q 50,55 55,53" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

function PriyaAvatar() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#111" stroke="#a855f7" strokeWidth="2" />
      <path d="M 26,50 C 26,30 34,20 50,20 C 66,20 74,30 74,50 L 76,85 L 24,85 Z" fill="#451a03" />
      <path d="M 22,95 C 22,75 32,70 50,70 C 68,70 78,75 78,95 Z" fill="#a855f7" opacity="0.3" />
      <path d="M 44,70 L 50,80 L 56,70 Z" fill="#ffffff" />
      <rect x="45" y="60" width="10" height="12" rx="2" fill="#ffedd5" />
      <motion.g animate={{ y: [0, -1.2, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
        <rect x="35" y="28" width="30" height="34" rx="12" fill="#ffedd5" />
        <path d="M 32,32 C 32,20 40,16 50,16 C 60,16 68,20 68,32 C 62,24 55,24 50,26 C 45,24 38,24 32,32 Z" fill="#451a03" />
        <ellipse cx="42" cy="42" rx="1.5" ry="1.5" fill="#000" />
        <ellipse cx="58" cy="42" rx="1.5" ry="1.5" fill="#000" />
        <path d="M 45,52 Q 50,54 55,52" stroke="#991b1b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

function RaviAvatar() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="#111" stroke="#fbbf24" strokeWidth="2" />
      <path d="M 22,95 C 22,75 32,70 50,70 C 68,70 78,75 78,95 Z" fill="#fbbf24" opacity="0.3" />
      <rect x="44" y="60" width="12" height="12" rx="2" fill="#fdba74" />
      <motion.g animate={{ y: [0, -1.8, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>
        <rect x="34" y="28" width="32" height="35" rx="10" fill="#fdba74" />
        <path d="M 34,48 C 34,60 40,65 50,65 C 60,65 66,60 66,48 C 66,54 60,59 50,59 C 40,59 34,54 34,48 Z" fill="#111827" opacity="0.85" />
        <path d="M 32,30 C 31,18 42,12 50,15 C 58,12 69,18 68,30 L 69,34 L 31,34 Z" fill="#111827" />
        <ellipse cx="41.5" cy="40" rx="1.8" ry="1.8" fill="#000" />
        <ellipse cx="58.5" cy="40" rx="1.8" ry="1.8" fill="#000" />
        <path d="M 43,49 Q 50,52 57,49 Q 50,47 43,49 Z" fill="#111827" />
        <path d="M 45,53 Q 50,54 55,53" stroke="#111827" strokeWidth="2" fill="#ffffff" strokeLinecap="round" />
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

function VoiceWave({ color }) {
  const bars = Array.from({ length: 12 });
  return (
    <div className="flex items-end gap-0.5 h-4 w-12 shrink-0">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full"
          animate={{
            height: [
              "4px", 
              `${Math.floor(Math.random() * 12) + 4}px`, 
              "4px"
            ]
          }}
          transition={{
            duration: 0.4 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.03
          }}
          style={{
            background: color,
            boxShadow: `0 0 6px ${color}35`
          }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-4 md:px-8 overflow-hidden" style={{ background: '#050508' }}>
      <div className="absolute inset-0 pointer-events-none opacity-5 cyber-grid" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="neon-text text-purple-400 font-extrabold tracking-widest uppercase text-xs block mb-3">
            [ feedback feed ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
            Corporate Client Feedback
          </h2>
          <p className="section-subtitle max-w-xl mx-auto text-xs md:text-sm text-white/50">
            Real reviews directly logged from business stakeholders whom we built custom integrations for.
          </p>
        </div>

        {/* Bento Wall of Love */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bento-tile p-6 md:p-8 flex flex-col justify-between min-h-[260px] ${t.gridClass}`}
            >
              <div className="absolute inset-0 opacity-10 cyber-grid pointer-events-none" />

              {/* Quote core */}
              <div>
                {/* Header elements: stars & voice indicator */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <span key={s} className="text-sm text-yellow-400 drop-shadow-[0_0_6px_rgba(234,179,8,0.3)]">★</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-mono text-white/40 uppercase tracking-wider">Active telemetry</span>
                    <VoiceWave color={t.color} />
                  </div>
                </div>

                {/* Quote Text (White text for high contrast on dark card) */}
                <p className="text-xs md:text-sm text-white/80 leading-relaxed italic pr-2 mb-8">
                  "{t.text}"
                </p>
              </div>

              {/* Reviewer signature block */}
              <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 border overflow-hidden flex items-center justify-center shrink-0" style={{ borderColor: `${t.color}40` }}>
                  <AnimatedAvatar index={idx} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">{t.name}</h4>
                  <p className="text-[9.5px] uppercase font-bold tracking-wider mt-0.5" style={{ color: t.color }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
