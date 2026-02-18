import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import Button from '../shared/Button';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    
    // Yahan apni Web3Forms Access Key dalein
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-32 bg-white dark:bg-slate-950 flex items-center justify-center transition-colors duration-500">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-slate-50 dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl"
        >
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-emerald-500" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Inquiry Received!</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xs mx-auto">
            Our solutions architect will review your request and get back to you within 24 hours.
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-8">
            Send another message
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >
        <div>
          <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs">Get in Touch</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-[1.1]">
            Ready to scale <br/> your <span className="text-blue-600">business?</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md leading-relaxed">
            Schedule a 15-minute discovery call to explore how our infrastructure can accelerate your growth.
          </p>
          
          <div className="space-y-6">
            {[
              "Tailored strategy session",
              "Live technical demonstration",
              "Pricing & Custom Integration"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <span className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center font-bold border border-blue-100 dark:border-blue-800 shrink-0">
                  {i + 1}
                </span>
                <p className="font-bold text-sm uppercase tracking-wide">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Form Background Card */}
          <form onSubmit={handleSubmit} className="relative z-10 space-y-4 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
            
            {/* Anti-Spam Honeypot (Hidden) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">First Name</label>
                <input required name="first_name" type="text" placeholder="John" className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Last Name</label>
                <input required name="last_name" type="text" placeholder="Doe" className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1">Work Email</label>
              <input required name="email" type="email" placeholder="john@company.com" className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1">Message</label>
              <textarea required name="message" rows={4} placeholder="Tell us about your project..." className="w-full p-4 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"></textarea>
            </div>
            
            <Button type="submit" disabled={loading} className="w-full py-4 text-lg flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20">
              {loading ? (
                <><Loader2 className="animate-spin" size={20} /> Processing...</>
              ) : (
                <><Send size={18} /> Send Inquiry</>
              )}
            </Button>
            
            <p className="text-[10px] text-center text-slate-400 mt-4">
              By clicking send, you agree to our <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>
          
          {/* Background decoration for form */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[3rem] blur-2xl opacity-10 -z-10 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}