import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, RefreshCw, Check } from 'lucide-react';

const steps = [
  {
    id: 'type',
    q: 'What are you building?',
    opts: [
      { label: 'Web Application' },
      { label: 'Mobile App' },
      { label: 'AI / Automation' },
      { label: 'API / Backend' },
      { label: 'E-Commerce Store' },
      { label: 'SaaS Platform' },
    ],
  },
  {
    id: 'size',
    q: 'What is the scope of the project?',
    opts: [
      { label: 'Quick MVP (1–4 weeks)' },
      { label: 'Small Project (1–2 months)' },
      { label: 'Medium Product (2–5 months)' },
      { label: 'Large Platform (5+ months)' },
    ],
  },
  {
    id: 'budget',
    q: 'What is your budget range?',
    opts: [
      { label: 'Under ₹50K' },
      { label: '₹50K – ₹2L' },
      { label: '₹2L – ₹5L' },
      { label: '₹5L+' },
    ],
  },
  {
    id: 'needs',
    q: 'Any specific requirements?',
    opts: [
      { label: 'AI / Machine Learning' },
      { label: 'Payment Integration' },
      { label: 'Real-time Features' },
      { label: 'Admin Dashboard' },
      { label: 'Third-party Integrations' },
      { label: 'Ongoing Maintenance' },
    ],
    multi: true,
  },
];

const techRecommendations = {
  'Web Application': ['React + Next.js', 'Tailwind CSS', 'Supabase / PostgreSQL', 'Vercel'],
  'Mobile App': ['React Native', 'Expo', 'Node.js Backend', 'Firebase'],
  'AI / Automation': ['Python + FastAPI', 'LangChain + OpenAI', 'Celery', 'PostgreSQL'],
  'API / Backend': ['Node.js + Express', 'PostgreSQL', 'Docker', 'AWS / GCP'],
  'E-Commerce Store': ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel'],
  'SaaS Platform': ['Next.js + TypeScript', 'Supabase', 'Stripe', 'AWS'],
};

const timeMap = {
  'Quick MVP (1–4 weeks)': '2–4 weeks',
  'Small Project (1–2 months)': '4–8 weeks',
  'Medium Product (2–5 months)': '2–5 months',
  'Large Platform (5+ months)': '5–12 months',
};

export default function ProjectConfigurator() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [multiSel, setMultiSel] = useState([]);
  const [done, setDone] = useState(false);
  const [dir, setDir] = useState(1);

  const current = steps[step];
  const isLast = step === steps.length - 1;
  const canNext = current.multi
    ? multiSel.length > 0
    : !!selections[current.id];

  const select = (label) => {
    if (current.multi) {
      setMultiSel((prev) =>
        prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
      );
    } else {
      setSelections((prev) => ({ ...prev, [current.id]: label }));
    }
  };

  const next = () => {
    if (current.multi) {
      setSelections((prev) => ({ ...prev, [current.id]: multiSel }));
    }
    if (isLast) return setDone(true);
    setDir(1);
    setStep((s) => s + 1);
    setMultiSel([]);
  };

  const back = () => {
    if (step === 0) return;
    setDir(-1);
    setStep((s) => s - 1);
  };

  const reset = () => {
    setStep(0);
    setSelections({});
    setMultiSel([]);
    setDone(false);
    setDir(1);
  };

  const variants = {
    enter: { x: dir > 0 ? 50 : -50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: dir > 0 ? -50 : 50, opacity: 0 },
  };

  const projectType = selections.type || '';
  const stack = techRecommendations[projectType] || ['React', 'Node.js', 'PostgreSQL', 'Docker'];
  const timeline = timeMap[selections.size] || '4–8 weeks';

  return (
    <section id="configurator" className="relative z-10 py-28 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <h2 className="section-title">Build Your Project</h2>
          <p className="section-subtitle">
            Answer 4 quick questions and get an instant tech recommendation + timeline estimate.
          </p>
        </motion.div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

          {!done ? (
            <>
              {/* Progress bar */}
              <div className="flex gap-2 mb-10">
                {steps.map((_, i) => (
                  <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-slate-100">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(to right, #2563eb, #06b6d4)' }}
                      animate={{ width: i <= step ? '100%' : '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-3">
                    Step {step + 1} of {steps.length}
                  </p>
                  <h3 className="text-2xl font-black text-slate-800 mb-8">{current.q}</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {current.opts.map((opt) => {
                      const isSelected = current.multi
                        ? multiSel.includes(opt.label)
                        : selections[current.id] === opt.label;
                      return (
                        <button
                          key={opt.label}
                          onClick={() => select(opt.label)}
                          data-cursor="link"
                          className="group relative flex items-center justify-center p-4 rounded-xl border text-sm font-semibold transition-all duration-200"
                          style={{
                            background: isSelected ? 'rgba(0, 0, 204, 0.05)' : '#ffffff',
                            borderColor: isSelected ? '#0000cc' : '#e2e8f0',
                            color: isSelected ? '#0000cc' : '#475569',
                            boxShadow: isSelected ? '0 4px 14px rgba(0, 0, 204, 0.1)' : 'none',
                          }}
                        >
                          <span className="text-center leading-tight">{opt.label}</span>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center"
                              style={{ background: '#0000cc' }}
                            >
                              <Check size={10} color="#fff" strokeWidth={3} />
                            </motion.div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav buttons */}
              <div className="flex items-center justify-between mt-10">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  data-cursor="link"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  onClick={next}
                  disabled={!canNext}
                  className="btn-primary text-sm px-6 py-2.5 disabled:opacity-40 disabled:pointer-events-none"
                  data-cursor="link"
                >
                  {isLast ? 'Get Recommendation' : 'Next'} <ArrowRight size={16} />
                </button>
              </div>
            </>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 size={28} className="text-green-500" />
                <h3 className="text-2xl font-black text-slate-800">Your Recommendation is Ready</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card p-5">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Recommended Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(0, 0, 204, 0.04)', color: '#0000cc', border: '1px solid rgba(0, 0, 204, 0.15)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-5">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Estimated Timeline</p>
                  <p className="text-3xl font-black text-gradient">{timeline}</p>
                </div>

                <div className="glass-card p-5 md:col-span-2">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Your Requirements</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(selections).flatMap(([, v]) =>
                      Array.isArray(v) ? v : [v]
                    ).map((s, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium text-slate-600"
                        style={{ background: 'rgba(0, 0, 204, 0.04)', border: '1px solid rgba(0, 0, 204, 0.15)' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#contact" data-cursor="link" className="btn-primary text-sm">
                  Let's Talk About This Project <ArrowRight size={15} />
                </a>
                <button onClick={reset} data-cursor="link"
                  className="btn-outline text-sm flex items-center gap-2">
                  <RefreshCw size={15} /> Start Over
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
