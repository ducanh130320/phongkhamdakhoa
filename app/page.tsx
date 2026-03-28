import HeroSection from "../components/HeroSection";
import WhySection from "../components/WhySection";
import WhoSection from "../components/WhoSection";
import BenefitsSection from "../components/BenefitsSection";
import DoctorsSection from "../components/DoctorsSection";
import EquipmentSection from "../components/EquipmentSection";
import FAQSection from "../components/FAQSection";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ khám nam khoa, bao quy đầu, yếu sinh lý, sùi mào gà, trĩ | TRUE HOPE",
  description:
    "TRUE HOPE cung cấp dịch vụ khám nam khoa uy tín: kiểm tra bao quy đầu, điều trị yếu sinh lý, sùi mào gà, trĩ và các vấn đề sức khỏe nam giới khác.",
  openGraph: {
    title: "Dịch vụ khám nam khoa tại TRUE HOPE",
    description:
      "TRUE HOPE cung cấp dịch vụ khám nam khoa uy tín: kiểm tra bao quy đầu, điều trị yếu sinh lý, sùi mào gà, trĩ và các vấn đề sức khỏe nam giới khác.",
    url: "/",
    images: [
      { url: 'https://truehope.vn/icon-logo.png', width: 1200, height: 630, alt: 'TRUE HOPE' },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true }, // bật index nếu muốn SEO
  keywords: [
    "bao quy đầu",
    "kiểm tra nam khoa",
    "yếu sinh lý",
    "sùi mào gà",
    "trĩ",
    "khám nam khoa",
    "điều trị yếu sinh lý",
    "chữa sùi mào gà",
    "điều trị trĩ",
    "sức khỏe nam giới"
  ],
};
export default function Home() {

  const fetchReviews = async () => {
    const response = await fetch("https://serpapi.com/search.json?engine=google_maps_reviews&place_id=XXX&api_key=YOUR_KEY")
    const data = await response.json()
    console.log(data.reviews)
  }

  const a = fetchReviews()

  console.log('a', a)
  return (
    <main className="flex min-h-screen flex-col bg-white">
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
