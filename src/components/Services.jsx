import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Brain, Wrench, Globe, Cpu, BarChart3, ChevronRight, Activity, GitBranch } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Systems',
    desc: 'Architecting high-concurrency platforms, microservices, and specialized business logic with complete test coverage and modern CI/CD pipelines.',
    tags: ['Next.js', 'Go/Rust', 'Kubernetes', 'SaaS Architecture'],
    spec: 'Load balance up to 10k req/sec out-of-the-box',
    color: '#00f0ff'
  },
  {
    icon: Brain,
    title: 'AI & Workflow Automation',
    desc: 'Integrating cognitive LLM architectures, vector indexing, multi-agent frameworks, and RPA loops to wipe out repetitive human labor.',
    tags: ['LangChain', 'OpenAI', 'RAG Databases', 'Autogen Agents'],
    spec: 'Average processing latency: <320ms',
    color: '#a855f7'
  },
  {
    icon: Wrench,
    title: 'Operations Maintenance',
    desc: '24/7 telemetry monitoring, database vacuuming, hot patch scheduling, security audits, and continuous performance optimization updates.',
    tags: ['Sentry', 'Datadog', 'Auto-Scaling', 'Patch Rollouts'],
    spec: 'Guaranteed 99.95% platform uptime SLAs',
    color: '#fbbf24'
  },
  {
    icon: Globe,
    title: 'Next-Gen Platforms',
    desc: 'Pixel-perfect, hyper-optimized web interfaces and native application suites built with React Native and Flutter for multi-platform dominance.',
    tags: ['Next.js', 'Flutter', 'TailwindCSS', 'WebSockets'],
    spec: 'Lighthouse Performance Score: 100/100',
    color: '#3b82f6'
  },
  {
    icon: Cpu,
    title: 'API Integrations',
    desc: 'Designing standardized GraphQL/REST schemas, rate-limiting handlers, secure oauth portals, and data synchronization hooks.',
    tags: ['GraphQL', 'RESTful schemas', 'gRPC', 'Webhooks'],
    spec: 'Strict schema validation, 0% drop-off rate',
    color: '#10b981'
  },
  {
    icon: BarChart3,
    title: 'Strategy & Architecture',
    desc: 'Deep technical audits, database schema reviews, cloud cost analysis, and strategic roadmap framing for high-growth tech ventures.',
    tags: ['Infrastructure Audit', 'DB Optimization', 'Tech Feasibility'],
    spec: 'Reduces cloud hosting overhead by 30-50%',
    color: '#ec4899'
  }
];

export default function Services() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section id="services" className="relative py-28 px-4 md:px-8 overflow-hidden" style={{ background: '#050508' }}>
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none opacity-20 cyber-grid" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="neon-text text-cyan-400 font-extrabold tracking-widest uppercase text-xs block mb-3">
            [ core blueprint ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
            Architecting Automated Operations
          </h2>
          <p className="section-subtitle max-w-xl mx-auto text-xs md:text-sm text-white/50">
            A comprehensive, node-based representation of the digital engines we deploy for enterprise scale.
          </p>
        </div>

        {/* Bento Node Blueprint layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Node Selection Board (col-span-7) */}
          <div className="lg:col-span-7 space-y-4 relative">
            {/* SVG Connecting lines showing flow chart logic */}
            <div className="absolute left-[30px] top-6 bottom-6 w-0.5 bg-white/5 hidden md:block -z-10">
              <motion.div 
                className="bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent w-full"
                style={{ height: '70%' }}
                animate={{ y: ['0%', '50%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isActive = activeNode === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveNode(idx)}
                  className={`bento-tile p-5 cursor-pointer flex gap-5 items-start transition-all duration-300 ${
                    isActive 
                      ? 'border-cyan-400/40 bg-white/[0.03] shadow-[0_0_30px_rgba(0,240,255,0.06)]' 
                      : 'border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                  }`}
                >
                  {/* Node icon & connection indicator */}
                  <div className="relative shrink-0">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isActive ? `${svc.color}15` : 'rgba(255,255,255,0.02)',
                        border: isActive ? `1px solid ${svc.color}40` : '1px solid rgba(255,255,255,0.08)',
                        boxShadow: isActive ? `0 0 15px ${svc.color}20` : 'none'
                      }}
                    >
                      <Icon size={20} style={{ color: isActive ? svc.color : 'rgba(255,255,255,0.4)' }} />
                    </div>
                    {isActive && (
                      <span 
                        className="absolute -right-1.5 -bottom-1.5 w-4.5 h-4.5 rounded-full bg-cyan-400 border-2 border-black flex items-center justify-center text-[7px] text-black font-extrabold"
                      >
                        ✓
                      </span>
                    )}
                  </div>

                  {/* Node content summary */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {svc.title}
                      </h3>
                      <span className="text-[9px] font-mono text-white/30">MODULE // 0{idx+1}</span>
                    </div>
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <ChevronRight 
                    size={16} 
                    className={`shrink-0 transition-transform duration-300 self-center ${
                      isActive ? 'text-cyan-400 translate-x-1' : 'text-white/20'
                    }`} 
                  />
                </div>
              );
            })}
          </div>

          {/* RIGHT: Active Node Inspector Panel (col-span-5) */}
          <div className="lg:col-span-5 bento-tile p-6 lg:p-8 min-h-[380px] lg:sticky lg:top-28">
            <div className="absolute inset-0 opacity-10 cyber-grid pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  {/* Inspector header */}
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${services[activeNode].color}12`,
                        border: `1px solid ${services[activeNode].color}30`
                      }}
                    >
                      {(() => {
                        const NodeIcon = services[activeNode].icon;
                        return <NodeIcon size={18} style={{ color: services[activeNode].color }} />;
                      })()}
                    </div>
                    <div>
                      <span className="text-[8px] font-mono uppercase tracking-widest text-cyan-400 block">System Diagnostic</span>
                      <h4 className="text-base font-black text-white">{services[activeNode].title}</h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-white/70 leading-relaxed mb-6">
                    {services[activeNode].desc}
                  </p>

                  {/* Node specifications code mockup */}
                  <div className="bg-black/50 border border-white/5 rounded-xl p-4 font-mono text-[9px] mb-6 space-y-2 select-none">
                    <div className="flex items-center gap-1.5 text-purple-400 border-b border-white/5 pb-2 mb-2">
                      <GitBranch size={10} />
                      <span>node_deployment_schema.config</span>
                    </div>
                    <div className="text-white/40">{"{"}</div>
                    <div className="pl-4 text-white/70">
                      STATUS: <span className="text-green-400">"OPERATIONAL"</span>,
                    </div>
                    <div className="pl-4 text-white/70">
                      OUTPUT_METRIC: <span className="text-yellow-400">"{services[activeNode].spec}"</span>,
                    </div>
                    <div className="pl-4 text-white/70">
                      LOAD_ALLOCATION: <span className="text-cyan-400">"AUTOMATIC"</span>
                    </div>
                    <div className="text-white/40">{"}"}</div>
                  </div>

                  {/* Core tags */}
                  <div className="space-y-2.5">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/30 block">Configured Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {services[activeNode].tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 text-[10px] text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Foot action inside inspector */}
                <div className="pt-8 border-t border-white/5 mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                    <Activity size={12} className="text-green-400 animate-pulse" />
                    <span>Real-time Sync Active</span>
                  </div>
                  <a href="#contact" className="btn-primary py-2.5 px-6 text-[10px] font-bold">
                    Deploy Solution
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
