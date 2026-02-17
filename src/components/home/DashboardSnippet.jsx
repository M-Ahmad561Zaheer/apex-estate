import React from 'react';
import DashboardView from '../dashboard-demo/DashboardView';
import { motion } from 'framer-motion';

export default function DashboardSnippet() {
  return (
    <section id="dashboard" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Text */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Institutional Grade Dashboard
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
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
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40 -z-10"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] opacity-40 -z-10"></div>
            
            {/* Importing the complex view we built earlier */}
            <DashboardView />
        </motion.div>
      </div>
    </section>
  );
}