import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">
              APEX<span className="text-blue-600">.</span>ESTATE
            </span>
          </div>
          <p className="mt-4 text-slate-500 max-w-xs leading-relaxed">
            The next generation of B2B real estate and financial infrastructure. Built for scale and speed.
          </p>
          <div className="flex gap-4 mt-6">
            <Twitter size={20} className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
            <Linkedin size={20} className="text-slate-400 hover:text-blue-700 cursor-pointer transition-colors" />
            <Github size={20} className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links Section 1 */}
        <div>
          <h4 className="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Platform</h4>
          <ul className="space-y-4 text-slate-600 text-sm font-medium">
            <li><a href="#services" className="hover:text-blue-600 transition-colors">Solutions</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
            <li><a href="#dashboard" className="hover:text-blue-600 transition-colors">Developer API</a></li>
          </ul>
        </div>

        {/* Links Section 2 */}
        <div>
          <h4 className="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4 text-slate-600 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-slate-400">
        <p>© {currentYear} ApexEstate Solutions Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="flex items-center gap-1 hover:text-slate-600 cursor-pointer">
            <Mail size={14} /> support@apex.estate
          </span>
        </div>
      </div>
    </footer>
  );
}