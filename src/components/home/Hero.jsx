import { motion } from 'framer-motion';
import { ArrowRight, Facebook } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Background Decorative Element - Changed to motion.div */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wide uppercase inline-block border border-blue-100 dark:border-blue-800">
            Real Estate Technology 2.0
          </span>
          
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Scale Your Portfolio with <br />
            <span className="text-blue-600 dark:text-blue-500">Intelligent Data.</span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ApexEstate provides institutional-grade analytics and automated management tools for modern real estate firms.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href="#dashboard"
              className="flex items-center gap-2 bg-blue-600 dark:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 dark:shadow-none hover:bg-blue-700 dark:hover:bg-blue-500 hover:scale-105 transition-all"
            >
              Explore Platform <ArrowRight size={20} />
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

          {/* Trust Badge with subtle fade-in delay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Trusted by industry leaders</p>
            <div className="flex gap-8 opacity-30 dark:opacity-20 grayscale hover:grayscale-0 dark:text-white transition-all cursor-default">
                <span className="text-xl font-bold">FORBES</span>
                <span className="text-xl font-bold">REALTOR</span>
                <span className="text-xl font-bold">TECHCRUNCH</span>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

