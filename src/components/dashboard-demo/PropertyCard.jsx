import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Motion import karein

export default function PropertyCard({ name, price, location, trend }) {
  return (
    <motion.div 
      // 2. Animation properties
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      
      className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/10 hover:border-blue-100 dark:hover:border-blue-500/30 transition-all group cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h5 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {name}
          </h5>
          <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs">
            <MapPin size={12} />
            {location}
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Valuation</p>
          <p className="text-lg font-black text-slate-900 dark:text-white">{price}</p>
        </div>
        <div className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-md border border-emerald-100/50 dark:border-emerald-800/50">
          {trend}
        </div>
      </div>
    </motion.div>
  );
}