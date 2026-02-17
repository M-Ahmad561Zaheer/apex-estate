import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import IndustryFocus from './components/home/IndustryFocus';
import DashboardSnippet from './components/home/DashboardSnippet'; 
import LeadForm from './components/contact/LeadForm';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/shared/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      
      <main>
        <Hero />
        <IndustryFocus />
        <DashboardSnippet />
        <LeadForm />
      </main>

      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppFloat /> 
    </div>
  );
}

export default App;