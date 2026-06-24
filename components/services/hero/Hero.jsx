"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white min-h-[calc(100vh-80px)] flex items-start lg:items-center pt-32 md:pt-28 pb-0">
      <div className="container-site w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr] gap-12 lg:gap-16 items-end">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col self-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 text-navy">
              Services
            </span>

            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight font-semibold text-deep-blue max-w-2xl">
              Oracle ERP services:{" "}
              <span className="text-navy">functional and technical.</span>
            </h1>

            <p className="mt-5 text-grey-1 text-base md:text-lg leading-relaxed max-w-lg">
              Beyond talent deployment, SolutionIT provides Oracle EBS and
              Fusion/Cloud services across functional configuration and
              technical development. Focused engagements, delivered to the same
              standard as our staffing practice.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/contact?service=services"
                className="group inline-flex items-center gap-2.5 bg-navy text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-navy-hover transition-colors duration-200"
              >
                Start the Conversation
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
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
            {/* Soft yellow glow */}
            <div
              className="absolute -inset-16 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255,194,32,0.30) 0%, transparent 70%)",
              }}
            />
            <Image
              src="/images/services/hero.webp"
              alt="Oracle ERP services team"
              width={900}
              height={700}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
