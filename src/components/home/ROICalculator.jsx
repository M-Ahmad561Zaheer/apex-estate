import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Info, Globe } from 'lucide-react';
import Button from '../shared/Button';

export default function ROICalculator() {
  const [investment, setInvestment] = useState(50000);
  const [propertyType, setPropertyType] = useState('commercial');
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', rate: 1 },
    PKR: { symbol: 'Rs', rate: 280 },
    AED: { symbol: 'DH', rate: 3.67 }
  };

  const selected = currencies[currency];
  const rate = propertyType === 'commercial' ? 0.12 : 0.08;
  const displayInvestment = investment * selected.rate;
  const annualReturn = (investment * rate) * selected.rate;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Inputs */}
          <div className="p-10 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <Calculator size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">ROI Estimator</h3>
              </div>
              
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
                {Object.keys(currencies).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${
                      currency === curr 
                      ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  Investment: <span className="text-blue-600 dark:text-blue-400">
                    {selected.symbol}{Math.round(displayInvestment).toLocaleString()}
                  </span>
                </label>
                <input 
                  type="range" min="10000" max="1000000" step="10000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Property Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setPropertyType('commercial')}
                    className={`py-3 rounded-xl font-bold transition-all border ${
                      propertyType === 'commercial' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    Commercial
                  </button>
                  <button 
                    onClick={() => setPropertyType('residential')}
                    className={`py-3 rounded-xl font-bold transition-all border ${
                      propertyType === 'residential' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    Residential
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Results */}
          <div className="p-10 md:w-1/2 bg-blue-50/50 dark:bg-blue-900/10 flex flex-col justify-center items-center text-center">
            <div className="mb-2 flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Globe size={14} />
                <p className="font-medium uppercase text-[10px] tracking-widest">Yearly Profit ({currency})</p>
            </div>
            
            <AnimatePresence mode='wait'>
              <motion.h4 
                key={annualReturn + currency}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-400 mb-6"
              >
                {selected.symbol}{Math.round(annualReturn).toLocaleString()}
              </motion.h4>
            </AnimatePresence>
            
            <div className="flex items-start gap-2 text-[10px] text-slate-400 dark:text-slate-500 max-w-[250px]">
              <Info size={14} className="shrink-0" />
              <p>Indicative ROI: {rate * 100}% p.a. based on current market trends.</p>
            </div>

            <Button className="mt-8 w-full py-4 shadow-xl">Get Full Report</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}