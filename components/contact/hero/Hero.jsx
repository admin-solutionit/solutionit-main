"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white min-h-[80vh] flex items-start lg:items-center pt-20 md:pt-24 pb-0">
      <div className="container-site w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 text-navy">
              Contact
            </span>

            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight font-semibold text-deep-blue max-w-2xl">
              Let's start the
              <br />
              <span className="text-navy">right conversation.</span>
            </h1>

            <p className="mt-5 text-grey-1 text-base md:text-lg leading-relaxed max-w-lg">
              Whether you're looking to hire Oracle ERP or technology
              professionals, or you're a consultant looking for your next
              engagement, tell us what you need and we'll take it from there.
            </p>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex items-center justify-center relative"
          >
            <div
              className="absolute -inset-16 blur-3xl pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255,194,32,0.30) 0%, transparent 70%)",
              }}
            />
            <Image
              src="/images/contact/contact-us-hero.webp"
              alt="Contact SolutionIT"
              width={900}
              height={700}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative z-10 w-full h-auto"
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: `
                  linear-gradient(to top, white 0%, transparent 25%),
                  linear-gradient(to right, white 0%, transparent 12%),
                  linear-gradient(to left, white 0%, transparent 12%)
                `,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
