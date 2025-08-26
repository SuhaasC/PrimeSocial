import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import ServicesSection from './components/ServicesSection';
import ProofSection from './components/ProofSection';
import WhyChooseSection from './components/WhyChooseSection';
import AboutSection from './components/AboutSection';
import FinalCTASection from './components/FinalCTASection';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Header from './components/Header';
import Footer from './components/Footer';
import { initGA, trackPageView } from './utils/analytics';

// Component to track page views
function PageTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // Initialize GA when app starts
    initGA();
  }, []);
  
  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <PageTracker />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <PainPointsSection />
              <ServicesSection />
              <ProofSection />
              <WhyChooseSection />
              <AboutSection />
              <FinalCTASection />
            </main>
          } />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
