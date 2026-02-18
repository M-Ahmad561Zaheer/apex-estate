import { motion } from 'framer-motion';

const steps = [
  { title: "Q1 2026", desc: "Integration of AI-driven predictive pricing models for Dubai & NYC." },
  { title: "Q2 2026", desc: "Launch of Blockchain-based smart contracts for instant settlements." },
  { title: "Q3 2026", desc: "Mobile Application (iOS & Android) with real-time portfolio tracking." },
  { title: "Q4 2026", desc: "Expansion into European and South Asian secondary markets." },
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors relative">
      {/* Subtle background line for desktop */}
      <div className="hidden md:block absolute top-[60%] left-0 w-full h-px bg-slate-200 dark:bg-slate-800 -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Vision</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mt-2">
            Strategic <span className="text-blue-600">Roadmap</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all group"
            >
              {/* Quarterly Badge */}
              <div className="inline-block bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full mb-6 group-hover:bg-blue-500 transition-colors">
                {step.title}
              </div>

              {/* Step indicator dot */}
              <div className="hidden md:block absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-blue-600 rounded-full z-20 group-hover:scale-125 transition-transform" />
              
              <p className="text-slate-600 dark:text-slate-400 text-sm font-bold leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}