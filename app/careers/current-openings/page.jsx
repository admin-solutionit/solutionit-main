import { Suspense } from "react";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

import Hero from "@/components/current-openings/hero/Hero";
import OpeningsList from "@/components/current-openings/openings-list/OpeningsList";

// Sanity Queries
import { client } from "@/sanity/lib/client";
import { JOBS_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Current Openings — SolutionIT",
  description:
    "Browse Oracle ERP and enterprise technology roles at SolutionIT. Genuine matches — the right platform, the right lifecycle stage, the right client.",
};

export default async function CurrentOpenings() {
  const jobs = await client.fetch(JOBS_QUERY);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OpeningsList jobs={jobs} />
      </main>
      <Footer />
    </>
  );
}
