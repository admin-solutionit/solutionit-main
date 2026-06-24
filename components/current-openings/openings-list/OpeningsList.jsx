"use client";

import { motion } from "framer-motion";
import CurrentOpeningCard from "@/components/ui/current-opening-card/CurrentOpeningCard";

export default function OpeningsList({ jobs }) {
  return (
    <section className="bg-white">
      <div className="container-site">
        <div className="pb-16">
          {jobs.map((job) => (
            <CurrentOpeningCard
              key={job._id}
              jobTitle={job.title}
              jobRef={job.refCode}
              jobDesc={job.responsibilities}
              jobManager={job.manager}
              jobSalary={job.salary}
              jobBenefits={job.benefits}
              joblocation={job.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
