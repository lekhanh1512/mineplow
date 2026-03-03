import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Versions from "@/components/Versions";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
    <Navbar />
    <Hero />
    <About />    
    <Features />
    <Versions />
    <Guide />
    <CTA />
    <Footer />
  </div>
);

export default Index;
