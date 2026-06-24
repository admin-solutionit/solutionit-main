"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section className="bg-navy overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="py-16 md:py-24 pr-0 md:pr-16 flex flex-col justify-center"
          >
            <h2 className="text-[28px] md:text-[32px] font-semibold text-white tracking-tight leading-tight mb-6">
              About Solution IT
            </h2>

            <p className="text-white text-base leading-relaxed mb-4">
              SolutionIT was founded in 2007 with a single focus: deploying
              Oracle ERP professionals with the experience and platform
              knowledge to deliver. Nearly 20 years later, that focus hasn't
              changed.
            </p>
            <p className="text-white text-base leading-relaxed">
              We operate from two offices: Boston, Massachusetts and Vizag,
              India, serving clients across the United States with on-site and
              remote Oracle EBS and Fusion/Cloud talent solutions.
            </p>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative min-h-[320px] md:min-h-0"
          >
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ top: "60px" }}
            >
              <Image
                src="/images/home/about-team.webp"
                alt="SolutionIT team collaborating"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
