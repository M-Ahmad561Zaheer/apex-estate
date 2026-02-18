import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion'; // Motion add karein

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({ variant = 'primary', className, children, ...props }) {
  const variants = {
    // Dark mode colors add kiye hain
    primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-500/20",
    outline: "border border-slate-200 dark:border-slate-800 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-900 dark:text-slate-100",
    ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400",
  };

  return (
    <motion.button 
      // Click aur Hover animations
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-6 py-3 rounded-xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2", 
        variants[variant], 
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}