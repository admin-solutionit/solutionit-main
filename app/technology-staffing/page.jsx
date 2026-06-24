// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// Page Components
import Hero from "@/components/technology-staffing/hero/Hero";
import TechnologyDisciplines from "@/components/technology-staffing/technology-disciplines/TechnologyDisciplines";
import TechnologyEngagement from "@/components/technology-staffing/technology-engagements/TechnologyEngagement";
import TechnologyCTA from "@/components/technology-staffing/technology-cta/TechnologyCTA";

export const metadata = {
  title: "Technology Talent Solutions — SolutionIT",
  description:
    "SolutionIT deploys contract and contract-to-hire technology professionals across enterprise ERP, cloud and data, application development, and DevOps.",
};

export default function TechnologyStaffingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechnologyDisciplines />
        <TechnologyEngagement />
        <TechnologyCTA />
      </main>
      <Footer />
    </>
  );
}
