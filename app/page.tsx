import HeroSection from '../src/components/HeroSection';
import PainPointsSection from '../src/components/PainPointsSection';
import ServicesSection from '../src/components/ServicesSection';
import ProofSection from '../src/components/ProofSection';
import FifteenDaySection from '../src/components/FifteenDaySection';
import AboutSection from '../src/components/AboutSection';
import WhyChooseSection from '../src/components/WhyChooseSection';
import FinalCTASection from '../src/components/FinalCTASection';
import MobileStickyCTA from '../src/components/MobileStickyCTA';

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-0">
      <HeroSection />
      <div className="stacked-sections">
        <PainPointsSection />
        <ServicesSection />
        <ProofSection />
        <FifteenDaySection />
        <AboutSection />
        <WhyChooseSection />
        <FinalCTASection />
      </div>
      <MobileStickyCTA />
    </main>
  );
}
