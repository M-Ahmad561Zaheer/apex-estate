import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Sun, Moon } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion'; // Add imports
import Button from '../shared/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark Mode Logic
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Dashboard Demo', href: '#dashboard' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-3 shadow-lg shadow-slate-900/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
            APEX<span className="text-blue-600">.</span>ESTATE
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-transparent dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <div className="hidden md:block">
            <Button 
              className="py-2.5 px-6 text-sm flex items-center gap-2"
            >
              Talk to Expert <MessageSquare size={16} />
            </Button>
          </div>

          <button 
            className="md:hidden text-slate-900 dark:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-50 dark:border-slate-800 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full py-4">Talk to Expert</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}