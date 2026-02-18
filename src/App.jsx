import Navbar from './components/layout/Navbar';
import MarketTicker from './components/home/MarketTicker';
import Hero from './components/home/Hero';
import IndustryFocus from './components/home/IndustryFocus';
import ROICalculator from './components/home/ROICalculator';
import DashboardSnippet from './components/home/DashboardSnippet';
import Roadmap from './components/home/Roadmap'; // Add this
import FAQ from './components/home/FAQ'; 
import LeadForm from './components/contact/LeadForm';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/shared/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      
      <div className="pt-[72px]"> 
        <MarketTicker />
      </div>
      
      <main>
        <Hero />
        <IndustryFocus />
        <ROICalculator />
        <DashboardSnippet />
        
        {/* Roadmap: Dashboard ke baad taake growth potential nazar aaye */}
        <Roadmap /> 
        
        <FAQ /> 
        <LeadForm />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;