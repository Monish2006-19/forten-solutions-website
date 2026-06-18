import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, HardDrive, BarChart3, Database } from 'lucide-react';

/* ── Live Agent Logs simulator ── */
function AgentLogs() {
  const [logs, setLogs] = useState([
    { id: 1, time: '16:51:04', task: 'SYS', msg: 'System initialized successfully' },
    { id: 2, time: '16:51:10', task: 'AGENT', msg: 'Analyzing SEO architecture for client site' },
    { id: 3, time: '16:51:18', task: 'DB', msg: 'Query optimized, indexed 48 tables (+18%)' }
  ]);
  const logContainerRef = useRef(null);

  const mockLogs = [
    { task: 'AGENT', msg: 'Running predictive user retention analysis...' },
    { task: 'SYS', msg: 'Scaling container group fort-serv-prod-02...' },
    { task: 'DB', msg: 'Vacuum process completed on primary DB node' },
    { task: 'SEO', msg: 'Meta tags generated for new product catalogue' },
    { task: 'AGENT', msg: 'Deploying hotfix revision v3.4.1 to staging...' },
    { task: 'CRON', msg: 'Automated database backup completed (4.8 GB)' },
    { task: 'SYS', msg: 'Clearing redis cache for page-slug /services' },
    { task: 'AGENT', msg: 'LLM context loaded, system prompt calibrated' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMock = mockLogs[Math.floor(Math.random() * mockLogs.length)];
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      
      setLogs((prev) => [
        ...prev.slice(-30), // keep last 30
        { id: Date.now(), time: timeStr, task: randomMock.task, msg: randomMock.msg }
      ]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const getBadgeColor = (task) => {
    switch (task) {
      case 'SYS': return 'rgba(59,130,246,0.15)';
      case 'AGENT': return 'rgba(124,58,237,0.15)';
      case 'DB': return 'rgba(16,185,129,0.15)';
      case 'SEO': return 'rgba(245,158,11,0.15)';
      default: return 'rgba(255,255,255,0.08)';
    }
  };

  const getTextColor = (task) => {
    switch (task) {
      case 'SYS': return '#60a5fa';
      case 'AGENT': return '#a78bfa';
      case 'DB': return '#34d399';
      case 'SEO': return '#fbbf24';
      default: return '#e2e8f0';
    }
  };

  return (
    <div className="h-full flex flex-col font-mono text-[10px] text-white/60">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
        <div className="flex items-center gap-1.5 text-cyan-400 font-semibold uppercase tracking-wider">
          <Terminal size={12} />
          <span>Active Agent Workflow</span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
      </div>

      <div 
        ref={logContainerRef}
        className="flex-1 overflow-y-auto space-y-2.5 pr-2 scrollbar-thin select-none"
        style={{ maxHeight: '180px' }}
      >
        {logs.map((log) => (
          <div key={log.id} className="leading-normal flex gap-1.5 items-start">
            <span className="text-white/30 shrink-0">{log.time}</span>
            <span 
              className="px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wide shrink-0"
              style={{ background: getBadgeColor(log.task), color: getTextColor(log.task) }}
            >
              {log.task}
            </span>
            <span className="text-white/80">{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Tech Orbit Simulator ── */
function TechOrbit() {
  const technologies = [
    { label: 'Next.js', x: 75, y: -75, delay: 0 },
    { label: 'OpenAI', x: -85, y: 80, delay: 2 },
    { label: 'Python', x: -95, y: -45, delay: 4 },
    { label: 'Supabase', x: 80, y: 70, delay: 1 },
    { label: 'Node.js', x: 0, y: -110, delay: 3 },
    { label: 'Docker', x: 0, y: 115, delay: 5 }
  ];

  return (
    <div className="relative w-full h-[220px] flex items-center justify-center overflow-hidden select-none">
      {/* Background stars / dust */}
      <div className="absolute inset-0 pointer-events-none opacity-20 cyber-grid" />

      {/* Orbit Rings */}
      <div className="absolute w-[200px] h-[200px] border border-white/5 rounded-full" />
      <div className="absolute w-[140px] h-[140px] border border-white/5 rounded-full" />

      {/* Center node */}
      <div className="z-10 w-16 h-16 rounded-full bg-black border border-cyan-400/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col items-center justify-center">
        <span className="text-[7px] text-cyan-400/70 tracking-widest uppercase">Forten</span>
        <span className="text-[10px] font-black text-white tracking-tighter">CORE</span>
      </div>

      {/* Orbiting nodes */}
      {technologies.map((tech, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 18 + idx * 4,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <motion.div
            className="px-2 py-1 bg-black/80 border border-white/10 rounded-lg text-[9px] text-white/80 hover:border-cyan-400 hover:text-white transition-colors pointer-events-auto cursor-pointer"
            style={{
              transform: `translate(${tech.x}px, ${tech.y}px)`
            }}
            whileHover={{ scale: 1.15 }}
          >
            {tech.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroTerminal() {
  const line1 = ['Committed', 'To'];
  const line2 = ['Your', 'Success.'];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 flex items-center overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Deep Space Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 10%, rgba(37,99,235,0.08) 0%, transparent 60%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 10% 80%, rgba(124,58,237,0.06) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Bento grid arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* MAIN BRANDING TILE (col-span-2, row-span-2) */}
          <div className="lg:col-span-2 bento-tile p-8 md:p-12 flex flex-col justify-between min-h-[380px] lg:min-h-[460px]">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10 cyber-grid pointer-events-none" />

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[9px] font-bold uppercase tracking-widest text-cyan-400 mb-6">
                <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                Next-Gen Automations & Platforms
              </div>

              {/* Tagline / Title */}
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-white max-w-xl mb-6">
                {line1.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                    className="inline-block mr-3"
                  >
                    {w}
                  </motion.span>
                ))}
                <br />
                {line2.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    className="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xs md:text-sm text-white/50 leading-relaxed max-w-lg mb-8"
              >
                We construct digital systems, intelligent agents, and scaling architectures for corporations that require state-of-the-art stability, efficiency, and engineering precision.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#configurator" className="btn-primary flex items-center gap-1.5 py-3 px-6 text-xs font-semibold">
                Launch Configurator <ArrowRight size={14} />
              </a>
              <a href="#services" className="btn-outline py-3 px-6 text-xs font-semibold">
                Explore Core Services
              </a>
            </motion.div>
          </div>

          {/* ACTIVE TERMINAL TILE (col-span-1) */}
          <div className="bento-tile p-6 flex flex-col justify-between h-[220px] lg:h-[224px]">
            <AgentLogs />
          </div>

          {/* TECH ORBIT TILE (col-span-1) */}
          <div className="bento-tile p-6 flex flex-col justify-between h-[220px] lg:h-[224px]">
            <TechOrbit />
          </div>

          {/* KPI PERFORMANCE METRICS TILE (col-span-1) */}
          <div className="bento-tile p-6 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <BarChart3 size={12} className="text-cyan-400" />
                Enterprise Metrics
              </span>
              <span className="text-[9px] text-green-400 font-semibold bg-green-500/10 px-1.5 py-0.5 rounded">
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-2">
              <div>
                <span className="text-[9px] text-white/30 uppercase block">Success Rate</span>
                <span className="text-xl font-extrabold text-white tracking-tight">100%</span>
              </div>
              <div>
                <span className="text-[9px] text-white/30 uppercase block">Deployments</span>
                <span className="text-xl font-extrabold text-white tracking-tight">248+</span>
              </div>
            </div>

            {/* Simulated sparkline SVG chart */}
            <div className="h-6 w-full opacity-60">
              <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d="M0 15 Q 15 5, 30 13 T 60 7 T 90 15 L 100 2"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="2"
                  className="stroke-cyan-400"
                />
                <path
                  d="M0 15 Q 15 5, 30 13 T 60 7 T 90 15 L 100 2 L 100 20 L 0 20 Z"
                  fill="url(#sparklineGlow)"
                  opacity="0.1"
                />
                <defs>
                  <linearGradient id="sparklineGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* ACTIVE DATABASE NODES (col-span-1) */}
          <div className="bento-tile p-6 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Database size={12} className="text-purple-400" />
                Redundancy / Sync
              </span>
              <span className="text-[9px] text-purple-400 font-semibold">
                Multi-region
              </span>
            </div>

            <div className="my-2 space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-white/60">Node AP-South</span>
                <span className="text-green-400 font-bold">Synchronized</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-white/60">Node EU-Central</span>
                <span className="text-green-400 font-bold">Synchronized</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-white/60">Node US-East</span>
                <span className="text-yellow-400 font-bold">Syncing (98%)</span>
              </div>
            </div>

            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <motion.div 
                className="bg-purple-500 h-full rounded-full" 
                animate={{ width: ['80%', '100%'] }} 
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>

          {/* CLOUD HARDWARE STATUS (col-span-1) */}
          <div className="bento-tile p-6 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <HardDrive size={12} className="text-blue-400" />
                Vitals Diagnostics
              </span>
            </div>

            <div className="my-2 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[9px] text-white/30 uppercase block">Bandwidth</span>
                <span className="text-xs font-bold text-white">4.8 GB/s</span>
              </div>
              <div>
                <span className="text-[9px] text-white/30 uppercase block">Memory Cache</span>
                <span className="text-xs font-bold text-white">99.8% hit</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[9px] text-white/40">
              <Cpu size={10} className="text-blue-400" />
              <span>Thread pool capacity operating at peak efficiency</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
