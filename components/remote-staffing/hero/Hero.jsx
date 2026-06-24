"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white min-h-[calc(100vh-80px)] flex items-start lg:items-center pt-32 pb-0">
      <div className="container-site w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 text-navy">
              Remote Oracle Staffing
            </span>

            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight font-semibold text-deep-blue max-w-2xl">
              Oracle EBS and Fusion/Cloud specialists:{" "}
              <span className="text-navy">
                dedicated, remote, and ready to deploy.
              </span>
            </h1>

            <p className="mt-5 text-grey-1 text-base md:text-lg leading-relaxed max-w-lg">
              SolutionIT deploys full-time Oracle EBS and Fusion/Cloud
              consultants into dedicated remote roles, working exclusively for
              your organization across the full application lifecycle. The same
              SME-assessed consultant profile as our on-site practice.
              Significantly lower cost.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/contact?service=remote-oracle#hiring-form"
                className="group inline-flex items-center gap-2.5 bg-navy text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-navy-hover transition-colors duration-200"
              >
                Find Remote Oracle Talent
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
              <Link
                href="/oracle-erp-practice"
                className="inline-flex items-center gap-2.5 border border-navy text-navy text-sm font-semibold px-7 py-3.5 rounded-full hover:border-navy-hover hover:text-navy-hover transition-colors duration-200"
              >
                Explore On-Site Oracle Staffing
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex items-center justify-center relative"
          >
            {/* Yellow glow behind image */}
            <div
              className="absolute -inset-16 blur-3xl pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255,194,32,0.30) 0%, transparent 70%)",
              }}
            />
            <Image
              src="/images/remote-staffing/remote-hero.webp"
              alt="Oracle ERP consultant at work"
              width={900}
              height={700}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative z-10 w-full h-auto"
              priority
            />
            {/* Fade bottom + left/right bottom edges to white */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: `
                  linear-gradient(to top, white 0%, transparent 20%),
                  linear-gradient(to right, rgba(255,255,255,0.6) 0%, transparent 15%),
                  linear-gradient(to left, rgba(255,255,255,0.6) 0%, transparent 15%)
                `,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
