import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Services from "@/components/Services";
import POSSection from "@/components/POSSection";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyDevCore from "@/components/WhyDevCore";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import BrandMarquee from "@/components/BrandMarquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Services />
        <POSSection />
        <Solutions />
        <Industries />
        <Projects />
        <Process />
        <WhyDevCore />
        <Technology />
        <Testimonials />
        <CTA />
      </main>
      <BrandMarquee />
      <Footer />
    </>
  );
}