// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import ContactCTA from "@/components/global/contact-cta/ContactCTA";

// Page Components
import Hero from "@/components/remote-staffing/hero/Hero";
import WhyRemoteStaffing from "@/components/remote-staffing/why-remote-staffing/WhyRemoteStaffing";
import HowRemoteWorks from "@/components/remote-staffing/how-remote-works/HowRemoteWorks";

export const metadata = {
  title: "Remote Oracle Staffing — SolutionIT",
  description:
    "Full-time Oracle EBS and Fusion/Cloud consultants deployed into dedicated remote roles — SME-assessed, exclusively for your organization.",
};

export default function RemoteStaffingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyRemoteStaffing />
        <HowRemoteWorks />
        <ContactCTA
          heading="Ready to explore remote Oracle staffing?"
          body="Tell us the role, the module, and the timeline — we'll identify candidates from our Oracle network who fit the requirement. Remote delivery, same standard."
          primaryLabel="Find Remote Oracle Talent"
          primaryHref="/contact?service=remote-oracle#hiring-form"
          secondaryLabel="Explore On-Site Oracle Staffing"
          secondaryHref="/oracle-erp-practice"
        />
      </main>
      <Footer />
    </>
  );
}
