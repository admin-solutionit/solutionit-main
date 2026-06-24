"use client";

import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="bg-white pt-36 pb-10 md:pb-14">
      <div className="container-site">
        {/* Top row — heading left, label + body right */}
        <div className="max-w-[870px]">
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
        </div>
      </div>
    </section>
  );
}
