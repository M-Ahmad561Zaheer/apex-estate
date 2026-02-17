import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = "923XXXXXXXXX"; // Apna number yahan likhein
  const message = "Hello! I am interested in your Real Estate/Fintech solutions.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-medium whitespace-nowrap">
        Chat with us
      </span>
      <MessageCircle size={28} className="fill-current" />
    </a>
  );
}