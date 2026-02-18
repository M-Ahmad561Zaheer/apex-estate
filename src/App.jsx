import { motion, useScroll } from 'framer-motion';
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

export function BackgroundAura() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top Left Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 dark:bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
      
      {/* Center Right Glow */}
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/10 dark:bg-indigo-500/10 blur-[100px] rounded-full transition-all duration-1000" />
      
      {/* Bottom Left Glow */}
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-900/20 blur-[150px] rounded-full" />
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen ...">
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <BackgroundAura />
      
      <Navbar />
      
      <div className="pt-[72px]"> 
        <MarketTicker />
      </div>
      
      <main>
        <Hero />
        <IndustryFocus />
        <ROICalculator />
        <DashboardSnippet />
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