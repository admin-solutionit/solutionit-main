"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="bg-white pt-36 pb-10 md:pb-14">
      <div className="container-site">
        {/* Top row — heading left, label + body right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight font-semibold text-deep-blue">
              Find engagements where your expertise is{" "}
              <span className="text-navy">the reason you&apos;re there.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col justify-end"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 text-navy">
              Careers
            </span>
            <p className="text-grey-1 text-base md:text-lg leading-relaxed">
              SolutionIT&apos;s recruiters know Oracle ERP and enterprise
              technology from the inside. The roles we put you forward for are
              genuine matches — the right platform, the right lifecycle stage,
              the right client.
            </p>
          </motion.div>
        </div>

        {/* Full-width image with rounded corners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: "clamp(260px, 42vw, 520px)" }}
        >
          <Image
            src="/images/careers/career-hero.webp"
            alt="Careers at SolutionIT"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
