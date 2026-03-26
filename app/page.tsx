import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhySection from "../components/WhySection";
import WhoSection from "../components/WhoSection";
import BenefitsSection from "../components/BenefitsSection";
import DoctorsSection from "../components/DoctorsSection";
import EquipmentSection from "../components/EquipmentSection";
import FAQSection from "../components/FAQSection";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <HeroSection />
      <WhySection />
      <WhoSection />
      <BenefitsSection />
      <DoctorsSection />
      <EquipmentSection />
      <FAQSection />
      {/* <FooterCTA /> */}
      <Footer />
    </main>
  );
}
