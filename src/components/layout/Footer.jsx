import { Github, Twitter, Linkedin, Mail, MessageSquarePlus } from 'lucide-react';
import { motion } from 'framer-motion'; // Motion import karein

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10 transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
      >
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
              APEX<span className="text-blue-600">.</span>ESTATE
            </span>
          </div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
            The next generation of B2B real estate and financial infrastructure. Built for scale and speed.
          </p>

          {/* New Interactive Buttons: Talk to Expert & Social Follow */}
          <div className="flex flex-wrap gap-4 mt-8">

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-4 py-2.5 rounded-full border border-slate-100 dark:border-slate-800">
              
              <Twitter size={16} className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin size={16} className="text-slate-400 hover:text-blue-700 cursor-pointer transition-colors" />
              <Github size={16} className="text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Links Section 1 */}
        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-slate-200 uppercase text-xs tracking-widest">Platform</h4>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm font-medium">
            <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Solutions</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a></li>
            <li><a href="#dashboard" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Developer API</a></li>
          </ul>
        </div>

        {/* Links Section 2 */}
        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-slate-200 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-50 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-slate-400">
        <p>© {currentYear} AZ-Developer's. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="flex items-center gap-1 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer transition-colors">
            <Mail size={14} /> ahmedzaheer2004.24@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}