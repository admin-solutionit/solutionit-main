import { Suspense } from "react";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// Page Components
import Hero from "@/components/careers/hero/Hero";
import CurrentOpenings from "@/components/careers/current-openings/CurrentOpenings";
// import JoinOurTeam from "@/components/careers/join-our-team/JoinOurTeam";
import TalentForm from "@/components/careers/talent-form/TalentForm";

// Sanity Queries
// import { client } from "@/sanity/lib/client";
// import { JOBS_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Careers — SolutionIT",
  description:
    "Browse Oracle ERP and enterprise technology roles at SolutionIT. Genuine matches — the right platform, the right lifecycle stage, the right client.",
};

export default async function CareersPage() {
  // const jobs = await client.fetch(JOBS_QUERY);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CurrentOpenings />
        {/* <JoinOurTeam jobs={jobs} /> */}
        <Suspense>
          <TalentForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
