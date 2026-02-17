import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react'; // Sign in icon ki jagah chat icon
import Button from '../shared/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Dashboard Demo', href: '#dashboard' },
    { name: 'Contact', href: '#contact' }, // About ki jagah direct Contact link
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
            APEX<span className="text-blue-600">.</span>ESTATE
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons - NO SIGN IN/UP */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://facebook.com/yourpage" 
            target="_blank" 
            className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
          >
            Follow Us
          </a>
          <Button 
            onClick={() => window.location.href = '#contact'}
            className="py-2.5 px-6 text-sm flex items-center gap-2 bg-slate-900 hover:bg-blue-600"
          >
            Talk to Expert <MessageSquare size={16} />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-slate-900 border-b border-slate-50 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 text-lg">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
}