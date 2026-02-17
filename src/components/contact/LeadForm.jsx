import { useState } from 'react';
import Button from '../shared/Button';
import { CheckCircle2, Loader2 } from 'lucide-react'; // Loading icon

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    // Yahan apni Access Key dalein jo Web3Forms se milegi
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
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-white flex flex-col items-center justify-center text-center">
        <CheckCircle2 size={60} className="text-emerald-500 mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold text-slate-900">Inquiry Received!</h2>
        <p className="text-slate-600 mt-2">Check your email. We'll be in touch soon.</p>
        <Button variant="ghost" onClick={() => setSubmitted(false)} className="mt-6">
          Send another message
        </Button>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
            Ready to scale <br/> your business?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Schedule a 15-minute discovery call with our solutions architect.
          </p>
          {/* Steps list remains the same... */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            {/* Input fields mein 'name' attribute lazmi add karein taake email mein data show ho */}
            <input required name="first_name" type="text" placeholder="First Name" className="p-4 bg-white rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition" />
            <input required name="last_name" type="text" placeholder="Last Name" className="p-4 bg-white rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition" />
          </div>
          <input required name="email" type="email" placeholder="Work Email" className="w-full p-4 bg-white rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition" />
          <textarea required name="message" rows={4} placeholder="How can we help?" className="w-full p-4 bg-white rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition"></textarea>
          
          <Button type="submit" disabled={loading} className="w-full py-4 text-lg flex justify-center items-center gap-2">
            {loading ? <><Loader2 className="animate-spin" size={20} /> Sending...</> : 'Send Inquiry'}
          </Button>
        </form>
      </div>
    </section>
  );
}