import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONES, CONTACT_LOCATION } from '../constants';

const BOOT_LINES = [
  { delay: 0, text: '> Forten Solutions OS v2.0.0', color: '#06b6d4' },
  { delay: 400, text: '> Initializing core modules...', color: '#64748b' },
  { delay: 900, text: '> AI Engine            [OK]', color: '#22c55e' },
  { delay: 1300, text: '> Custom Software      [OK]', color: '#22c55e' },
  { delay: 1700, text: '> Automation Suite     [OK]', color: '#22c55e' },
  { delay: 2100, text: '> Project Maintenance  [OK]', color: '#22c55e' },
  { delay: 2500, text: '> All systems operational.', color: '#06b6d4' },
  { delay: 3000, text: '> Type help to get started', color: '#475569' },
];

const COMMANDS = {
  help: [
    '  Available commands:',
    '  whoami    → About Forten Solutions',
    '  services  → List all services',
    '  tech      → Our tech stack',
    '  contact   → Get in touch',
    '  quote     → Get a free estimate',
    '  clear     → Clear terminal',
  ],
  whoami: [
    '  Forten Solutions — A software powerhouse',
    '  📍 Vellore, Tamil Nadu, India',
    '  🚀 Custom software, AI automation,',
    '     project maintenance & engineering.',
    '  💡 From idea to deployment — we do it all.',
  ],
  services: [
    '  01. Custom Software Development',
    '  02. AI & Automation Systems',
    '  03. Project Maintenance & Support',
    '  04. Web & Mobile Applications',
    '  05. API Integration & Architecture',
    '  06. Tech Consulting & Strategy',
  ],
  tech: [
    '  Frontend  → React, Next.js, Tailwind',
    '  Backend   → Node.js, Python, FastAPI',
    '  AI/ML     → OpenAI, LangChain',
    '  Database  → PostgreSQL, Supabase',
    '  Cloud     → AWS, GCP, Vercel, Docker',
    '  Mobile    → React Native, Flutter',
  ],
  contact: [
    `  📧  ${CONTACT_EMAIL}`,
    `  📞  ${CONTACT_PHONES[0]}`,
    `  📞  ${CONTACT_PHONES[1]}`,
    `  📞  ${CONTACT_PHONES[2]}`,
    `  📍  ${CONTACT_LOCATION}`,
  ],
  quote: [
    '  → Scroll to "Build Your Project" section',
    `  → Or email: ${CONTACT_EMAIL}`,
  ],
};

export default function TerminalSection() {
  const [bootDone, setBootDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const rotXSpring = useSpring(rotX, { stiffness: 150, damping: 25, mass: 0.5 });
  const rotYSpring = useSpring(rotY, { stiffness: 150, damping: 25, mass: 0.5 });

  // Boot sequence
  useEffect(() => {
    const timers = BOOT_LINES.map(line =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        if (line === BOOT_LINES[BOOT_LINES.length - 1]) {
          setTimeout(() => setBootDone(true), 400);
        }
      }, line.delay)
    );
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleLines, history]);

  const handlePanelMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distX = (e.clientX - rect.left - centerX) / centerX;
    const distY = (e.clientY - rect.top - centerY) / centerY;
    rotY.set(distX * 12);
    rotX.set(-distY * 12);
  };

  const handlePanelLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      if (cmd === 'clear') {
        setHistory([]);
        setVisibleLines([]);
        setCmdHistory([]);
        setInput('');
        return;
      }
      const lines = COMMANDS[cmd] || [`  ${cmd}: command not found`];
      const isError = !COMMANDS[cmd];
      setCmdHistory([...cmdHistory, cmd]);
      setHistIdx(-1);
      setHistory([...history, { input: cmd, lines, isError }]);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(next === -1 ? '' : cmdHistory[cmdHistory.length - 1 - next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? '' : cmdHistory[cmdHistory.length - 1 - next]);
    }
  };

  return (
    <section id="terminal" className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-950">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Terminal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Try commands like: help, whoami, services, tech, contact, quote</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          onMouseMove={handlePanelMove}
          onMouseLeave={handlePanelLeave}
          style={{ perspective: '1200px' }}
        >
          <motion.div
            style={{ rotateX: rotXSpring, rotateY: rotYSpring }}
            className="relative cursor-text"
            onClick={() => inputRef.current?.focus()}
            data-cursor="code"
          >
            {/* Ambient halo */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
              background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%)',
              filter: 'blur(32px)',
              transform: 'scale(1.15)',
            }} />

            {/* Glass panel */}
            <div className="relative rounded-2xl overflow-hidden" style={{
              background: 'rgba(8,8,8,0.72)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 1px 0 rgba(255,255,255,0.12) inset',
            }}>

              {/* Title bar */}
              <div className="flex items-center gap-2.5 px-4 py-3.5" style={{
                background: 'rgba(255,255,255,0.028)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[11px] font-medium" style={{ color: '#475569' }}>
                    <Terminal size={9} className="inline mr-1.5" />
                    forten@solutions — bash
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-[10px]" style={{ color: '#22c55e' }}>live</span>
                </div>
              </div>

              {/* Terminal body */}
              <div
                className="px-5 py-4 font-mono text-[13px] leading-[1.8] overflow-y-auto"
                style={{ minHeight: '320px', maxHeight: '420px', color: '#94a3b8' }}
              >
                {visibleLines.map((line, i) => (
                  <div key={i} style={{ color: line.color }}>{line.text}</div>
                ))}
                {history.map((entry, i) => (
                  <div key={'h' + i} className="mt-1">
                    <div className="flex gap-2">
                      <span style={{ color: '#06b6d4' }}>›</span>
                      <span style={{ color: '#e2e8f0' }}>{entry.input}</span>
                    </div>
                    {entry.lines?.map((l, j) => (
                      <div key={j} style={{ color: entry.isError ? '#f87171' : '#64748b', paddingLeft: '1.1rem' }}>{l}</div>
                    ))}
                  </div>
                ))}
                {bootDone && (
                  <div className="flex items-center gap-2 mt-1">
                    <span style={{ color: '#06b6d4' }}>›</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKey}
                      placeholder="type a command…"
                      className="flex-1 bg-transparent outline-none text-[13px]"
                      style={{ color: '#e2e8f0', caretColor: '#06b6d4' }}
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <span className="terminal-cursor w-[7px] h-[14px] inline-block rounded-[2px]"
                      style={{ background: '#06b6d4' }} />
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-5 py-2" style={{
                background: 'rgba(6,182,212,0.04)',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}>
                <span className="text-[10px] font-mono" style={{ color: '#06b6d4' }}>forten@solutions:~$</span>
                <div className="flex items-center gap-3">
                  <span className="text-[10px]" style={{ color: '#334155' }}>↑↓ history</span>
                  <span className="text-[10px]" style={{ color: '#334155' }}>UTF-8</span>
                  <span className="text-[10px]" style={{ color: '#334155' }}>bash</span>
                  <span className="text-[10px]" style={{ color: '#22c55e' }}>● ready</span>
                </div>
              </div>
            </div>

            {/* Floating chip — build passing */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 px-3 py-2 rounded-xl"
              style={{
                background: 'rgba(8,8,8,0.88)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.14)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div className="text-[11px] font-semibold" style={{ color: '#22c55e' }}>✓ Build Passing</div>
              <div className="text-[10px]" style={{ color: '#475569' }}>production ready</div>
            </motion.div>

            {/* Floating chip — projects */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-5 px-3 py-2 rounded-xl"
              style={{
                background: 'rgba(8,8,8,0.88)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.14)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div className="text-[11px] font-semibold" style={{ color: '#06b6d4' }}>⚡ 50+ Projects</div>
              <div className="text-[10px]" style={{ color: '#475569' }}>shipped to production</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
