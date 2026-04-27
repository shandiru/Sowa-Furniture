import Hero from "../components/Home/Hero.jsx";
import TrustStatsBand from "../components/Home/TrustStatsBand.jsx";
import ServicesSection from "../components/Home/ServicesSection.jsx";
import Portfolio from "../components/Home/Portfolio.jsx";
import AboutSection from "../components/Home/About.jsx";
import Review from "../components/Home/Review.jsx";
import FAQSection from "../components/Home/Faq.jsx";
import LocationSection from "../components/Home/LocationSection.jsx";
import ContactSection from "../components/Home/ContactSection.jsx";
import CTA from "../components/Home/Cta.jsx";

function Home() {
  return (
    <>
      <Hero />
      <TrustStatsBand />
      <ServicesSection />
      <Portfolio />
      <AboutSection />
      <Review />
      <FAQSection />
      <LocationSection />
      <ContactSection />
      <CTA />
    </>
  );
}

export default Home;
