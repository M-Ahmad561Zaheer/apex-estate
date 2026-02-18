import { motion } from 'framer-motion';

export default function MarketTicker() {
  const data = ["DUBAI +12.4%", "NEW YORK -2.1%", "LONDON +5.8%", "PKR/USD 280.5", "BTC/USD $64,200"];
  
  return (
    <div className="bg-blue-600 dark:bg-blue-700 text-white py-2 overflow-hidden flex border-b border-blue-500/30 sticky top-[72px] z-[90]">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} // Percentage use karne se jump nahi aayega
        transition={{ 
          repeat: Infinity, 
          duration: 20, // Thora slow rakha hai taake parha ja sakay
          ease: "linear" 
        }}
        className="flex gap-10 whitespace-nowrap font-bold text-[10px] tracking-widest uppercase items-center"
      >
        {/* Data ko double render karna zaroori hai seamless loop ke liye */}
        {[...data, ...data, ...data].map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="opacity-40">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}