import { motion } from 'framer-motion';
import { ArrowRight, Facebook, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Background Grid Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        
        {/* --- FLOATING ELEMENTS (Desktop Only) --- */}
        <div className="hidden lg:block">
          {/* Card 1: Yield Progress */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600">
                <TrendingUp size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Market Yield</p>
                <p className="text-xl font-black dark:text-white">+12.4%</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Security Badge */}
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -right-10 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Assets Secured</p>
                <p className="text-xl font-black dark:text-white">$1.2B+</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- MAIN HERO CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wide uppercase border border-blue-100 dark:border-blue-800">
            <Zap size={14} className="fill-current" />
            Real Estate Technology 2.0
          </div>
          
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Scale Your Portfolio with <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Intelligent Data.</span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ApexEstate provides institutional-grade analytics and automated management tools for modern real estate firms.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href="#dashboard"
              className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 dark:shadow-none hover:bg-blue-700 hover:scale-105 transition-all"
            >
              Explore Platform 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://facebook.com/yourpage" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300 transition-colors"
            >
              <Facebook size={20} className="text-blue-600 dark:text-blue-500" /> Visit Facebook
            </a>
          </div>

          {/* Social Proof Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Trusted by global pioneers</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 dark:opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="text-2xl font-black italic tracking-tighter">FORBES</span>
                <span className="text-2xl font-black tracking-tighter">REALTOR</span>
                <span className="text-2xl font-black tracking-tighter">TECHCRUNCH</span>
                <span className="text-2xl font-black tracking-tighter">BLOOMBERG</span>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}