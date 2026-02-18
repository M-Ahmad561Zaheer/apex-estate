import React from 'react';
import DashboardView from '../dashboard-demo/DashboardView';
import { motion } from 'framer-motion';

export default function DashboardSnippet() {
  return (
    // 1. Change 'section' to 'motion.section' and add initial state
    <motion.section 
      id="dashboard" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Text */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            Institutional Grade Dashboard
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Powerful analytics meets intuitive design. Manage your entire enterprise from a single, high-performance interface.
          </motion.p>
        </div>
        
        {/* The Actual Dashboard UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
            {/* Background Aesthetic Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 dark:bg-blue-600 rounded-full blur-[120px] opacity-40 dark:opacity-20 -z-10"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-50 dark:bg-emerald-600 rounded-full blur-[120px] opacity-40 dark:opacity-20 -z-10"></div>
            
            {/* Glassmorphism Container */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-1 md:p-4 shadow-2xl">
                <DashboardView />
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}