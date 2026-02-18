import { 
  Building2, Landmark, ShieldCheck, BarChart, 
  Cpu, Coins, Eye, LineChart 
} from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  { icon: <Building2 />, title: "Asset Management", desc: "Automated tracking for global real estate portfolios." },
  { icon: <Landmark />, title: "Fintech Compliance", desc: "Built-in KYC and anti-money laundering protocols." },
  { icon: <ShieldCheck />, title: "Risk Mitigation", desc: "Predictive analytics to safeguard your investments." },
  { icon: <BarChart />, title: "Market Insights", desc: "Real-time data visualization of global market trends." },
  { icon: <Cpu />, title: "AI Valuations", desc: "Machine learning models for precise property price forecasting." },
  { icon: <Coins />, title: "Fractional Invest", desc: "Blockchain-based tokenization for micro-equity ownership." },
  { icon: <Eye />, title: "Digital Twins", desc: "3D virtual replicas of assets for remote site management." },
  { icon: <LineChart />, title: "Yield Optimization", desc: "Algorithmic strategies to maximize rental & resale ROI." }
];

export default function IndustryFocus() {
  return (
    // 1. Change 'section' to 'motion.section' and add initial states
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24 transition-colors duration-500"
    >
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Next-Gen Expertise
        </h2>
        <div className="w-24 h-2 bg-blue-600 mt-4 rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 mt-8 text-xl max-w-3xl leading-relaxed font-medium">
          We provide the infrastructure for the future of real estate, combining AI, Blockchain, and Data Analytics into a single ecosystem.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {solutions.map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // 2. This delay creates a 'wave' effect as you scroll
            transition={{ delay: i * 0.1, duration: 0.5 }} 
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group cursor-default"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-sm">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}