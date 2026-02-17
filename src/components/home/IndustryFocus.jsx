import { Building2, Landmark, ShieldCheck, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
  { icon: <Building2 />, title: "Asset Management", desc: "Automated tracking for global real estate portfolios." },
  { icon: <Landmark />, title: "Fintech Compliance", desc: "Built-in KYC and anti-money laundering protocols." },
  { icon: <ShieldCheck />, title: "Risk Mitigation", desc: "Predictive analytics to safeguard your investments." },
  { icon: <BarChart />, title: "Market Insights", desc: "Real-time data visualization of global market trends." }
];

export default function IndustryFocus() {
  return (
    /* 1. Yahan id="services" add kiya hai navbar link ke liye */
    /* 2. scroll-mt-24 add kiya hai taake navbar heading ke upar na aaye */
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Our Core Expertise
        </h2>
        <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full" /> {/* Visual accent */}
        <p className="text-slate-500 mt-6 text-lg max-w-2xl leading-relaxed">
          We bridge the gap between traditional real estate and modern financial technology with our scalable B2B solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group cursor-default"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}