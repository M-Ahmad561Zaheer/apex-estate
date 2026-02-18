import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { 
    q: "How does the ApexEstate analytics engine work?", 
    a: "Our platform leverages AI-driven spatial analysis and big data to evaluate real estate markets, providing you with high-precision ROI projections and localized market trends." 
  },
  { 
    q: "Is the market data updated in real-time?", 
    a: "Yes. Our proprietary data pipeline fetches updates every 15 minutes from global exchanges and real estate registries to ensure your dashboard reflects the latest valuation shifts." 
  },
  { 
    q: "What security measures protect my investments?", 
    a: "We employ institutional-grade AES-256 encryption and distributed ledger technology (Blockchain) to ensure that all asset data and transactional records remain immutable and secure." 
  },
  { 
    q: "Does the platform support international currencies?", 
    a: "Absolutely. ApexEstate features a native multi-currency engine, allowing you to toggle between USD, PKR, and AED instantly with live indicative exchange rates." 
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 mb-4">
            <HelpCircle size={28} />
          </div>
         <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
  Frequently Asked <span className="text-blue-600">Questions</span>
</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/30"
            >
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-slate-100 pr-4">{faq.q}</span>
                <ChevronDown className={`shrink-0 transition-transform duration-300 text-blue-600 ${active === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}