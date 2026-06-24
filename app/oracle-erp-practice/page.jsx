// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import ContactCTA from "@/components/global/contact-cta/ContactCTA";

// Page Components
import Hero from "@/components/oracle-erp-practice/hero/Hero";
import ERPStats from "@/components/oracle-erp-practice/erp-stats/ERPStats";
import ConsultantProfiles from "@/components/oracle-erp-practice/consultant-profiles/ConsultantProfiles";
import WhatWeCover from "@/components/oracle-erp-practice/what-we-cover/WhatWeCover";

export const metadata = {
  title: "Oracle EBS and Fusion/Cloud Staffing — SolutionIT",
  description:
    "Oracle ERP talent deployed by people who know Oracle. Contract, contract-to-hire, or full project team — vetted Oracle EBS and Fusion Cloud consultants.",
};

export default function OracleERPConsultingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ERPStats />
        <ConsultantProfiles />
        <WhatWeCover />
        <ContactCTA
          heading="Ready to find your next Oracle specialist?"
          body="Tell us the role, the module, and the timeline, we'll come back with candidates who actually fit. One conversation is usually enough to get started."
          primaryHref="/contact?service=oracle-staffing#hiring-form"
        />
      </main>
      <Footer />
    </>
  );
}
