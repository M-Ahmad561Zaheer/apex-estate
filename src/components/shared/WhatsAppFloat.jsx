import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  const phoneNumber = "923XXXXXXXXX"; // Change this to your real number
  const message = "Hello! I am interested in your Real Estate/Fintech solutions.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-[110]"
    >
      {/* Pulse Effect Background */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-3 transition-all duration-500 font-bold text-sm whitespace-nowrap">
          Chat with us
        </span>
        <MessageCircle size={28} className="fill-current" />
        
        {/* Small "1" Notification Badge (Optional - for attention) */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[8px] font-bold">
          1
        </span>
      </a>
    </motion.div>
  );
}