import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Activity, RefreshCw, Cpu } from 'lucide-react';

function useCountUp(end, duration = 1800, trigger = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    let raf;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeVal = progress * (2 - progress);
      setVal(Math.floor(easeVal * end));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setVal(end);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration]);
  return val;
}

export default function StatsCounter() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  // Custom counts
  const uptimeVal = useCountUp(999, 1500, inView); // will divide by 10
  const queriesVal = useCountUp(428950, 2000, inView);
  const activeAgents = useCountUp(18, 1200, inView);

  // Live fluctuating workloads
  const [cpu, setCpu] = useState(48.2);
  const [ram, setRam] = useState(62.4);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCpu(Number((40 + Math.random() * 15).toFixed(1)));
      setRam(Number((60 + Math.random() * 5).toFixed(1)));
    }, 2800);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 overflow-hidden" 
      style={{ background: '#050508' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10 cyber-grid" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="neon-text text-purple-400 font-extrabold tracking-widest uppercase text-xs block mb-3">
            [ infrastructure metrics ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
            Live Telemetry Diagnostics
          </h2>
          <p className="section-subtitle max-w-xl mx-auto text-xs md:text-sm text-white/50">
            Real-time analytics showcasing system reliability, scaling loads, and automation throughput.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Network Heartbeat & Uptime */}
          <div className="bento-tile p-6 flex flex-col justify-between min-h-[200px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Shield size={12} className="text-cyan-400" />
                Cluster Reliability
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <div className="my-2">
              <span className="text-4xl font-extrabold text-white tracking-tighter block tabular-nums">
                {(uptimeVal / 10).toFixed(2)}%
              </span>
              <span className="text-[10px] text-white/50 block mt-1">Average Cluster Uptime</span>
            </div>

            {/* Heartbeat path SVG */}
            <div className="h-8 w-full mt-3 opacity-60">
              <svg width="100%" height="100%" viewBox="0 0 160 30" preserveAspectRatio="none">
                <path
                  d="M0 15 L 40 15 L 45 5 L 50 25 L 55 15 L 90 15 L 95 0 L 100 30 L 105 15 L 160 15"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="1.5"
                  className="stroke-cyan-400"
                />
              </svg>
            </div>
          </div>

          {/* Card 2: Transactions / Query throughput */}
          <div className="bento-tile p-6 flex flex-col justify-between min-h-[200px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Activity size={12} className="text-purple-400" />
                API Throughput
              </span>
            </div>

            <div className="my-2">
              <span className="text-4xl font-extrabold text-white tracking-tighter block tabular-nums">
                {queriesVal.toLocaleString()}+
              </span>
              <span className="text-[10px] text-white/50 block mt-1">Daily Automated Tasks</span>
            </div>

            <div className="text-[9px] text-white/30 font-mono mt-3">
              Telemetry rate: <span className="text-purple-400 font-bold">~490 req/min</span>
            </div>
          </div>

          {/* Card 3: Cloud Workloads */}
          <div className="bento-tile p-6 flex flex-col justify-between min-h-[200px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Cpu size={12} className="text-yellow-400" />
                Hardware Allocation
              </span>
              <RefreshCw size={10} className="text-white/40 animate-spin" style={{ animationDuration: '4s' }} />
            </div>

            <div className="space-y-3 my-2">
              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span className="text-white/60">CPU Workload</span>
                  <span className="text-yellow-400 font-bold">{cpu}%</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full rounded-full transition-all duration-500" style={{ width: `${cpu}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span className="text-white/60">Memory Cache</span>
                  <span className="text-purple-400 font-bold">{ram}%</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full transition-all duration-500" style={{ width: `${ram}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Orchestrators */}
          <div className="bento-tile p-6 flex flex-col justify-between min-h-[200px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                Active Agents
              </span>
            </div>

            <div className="my-2">
              <span className="text-4xl font-extrabold text-white tracking-tighter block tabular-nums">
                {activeAgents}
              </span>
              <span className="text-[10px] text-white/50 block mt-1">Autonomous workflows active</span>
            </div>

            <div className="text-[9px] text-white/30 flex justify-between items-center mt-3 border-t border-white/5 pt-2">
              <span>Database Nodes:</span>
              <span className="text-green-400 font-bold">4 Active</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
