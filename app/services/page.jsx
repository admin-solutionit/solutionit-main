// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import ContactCTA from "@/components/global/contact-cta/ContactCTA";

// Page Components
import Hero from "@/components/services/hero/Hero";
import OracleFunctionalServices from "@/components/services/oracle-functional-services/OracleFunctionalServices";
import OracleTechnicalServices from "@/components/services/oracle-technical-services/OracleTechnicalServices";

export const metadata = {
  title: "Services — SolutionIT",
  description:
    "Oracle EBS and Fusion/Cloud functional and technical services — delivered by the same specialists SolutionIT deploys at client site.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OracleTechnicalServices />
        <OracleFunctionalServices />
        <ContactCTA
          heading="Ready to discuss an Oracle engagement?"
          body="Whether you need functional configuration support or technical development, we're happy to start with a conversation about what you're trying to solve."
          primaryLabel="Start the Conversation"
          primaryHref="/contact?service=services#hiring-form"
          secondaryLabel="Explore Oracle ERP Staffing"
          secondaryHref="/oracle-erp-practice"
        />
      </main>
      <Footer />
    </>
  );
}
