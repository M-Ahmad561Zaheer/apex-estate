import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function for Tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({ variant = 'primary', className, children, ...props }) {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600",
  };

  return (
    <button 
      className={cn(
        "px-6 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50", 
        variants[variant], 
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}