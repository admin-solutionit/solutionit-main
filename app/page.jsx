// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import ContactCTA from "@/components/global/contact-cta/ContactCTA";

// Page Components
import Hero from "@/components/home/hero/Hero";
import SocialProof from "@/components/home/social-proof/SocialProof";
import DualPersona from "@/components/home/dual-persona/DualPersona";
import Services from "@/components/home/services/Services";
import HowWeVet from "@/components/home/how-we-vet/HowWeVet";
import About from "@/components/home/about/About";

export const metadata = {
  title: "SolutionIT — Oracle ERP Human Capital Partner",
  description:
    "SolutionIT is a specialized Oracle ERP consultancy deploying EBS and Fusion Cloud consultants across enterprise engagements in North America.",
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DualPersona />
        <SocialProof />
        <Services />
        <HowWeVet />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
