"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white min-h-[calc(100vh-80px)] flex items-start lg:items-center pt-32 pb-4">
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
              Oracle EBS and Fusion/Cloud Staffing
            </span>

            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight font-semibold text-deep-blue max-w-2xl">
              Oracle EBS and Fusion/Cloud staffing,{" "}
              <span className="text-navy">
                from people who know the platform.
              </span>
            </h1>

            <p className="mt-5 text-grey-1 text-base md:text-lg leading-relaxed max-w-lg">
              SolutionIT has been deploying Oracle EBS and Fusion/Cloud
              consultants, functional and technical, since 2007. Every candidate
              assessed by our own Oracle practitioners. Individual specialists
              or entire project teams, across every stage of the Oracle
              application lifecycle.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/contact?service=oracle-staffing#hiring-form"
                className="group inline-flex items-center gap-2.5 bg-navy text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-navy-hover transition-colors duration-200"
              >
                Find Oracle Talent
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
              <Link
                href="#brochure"
                className="inline-flex items-center gap-2.5 border border-navy text-navy text-sm font-semibold px-7 py-3.5 rounded-full hover:border-navy-hover hover:text-navy-hover transition-colors duration-200"
              >
                Download Our Brochure
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
            <div
              className="absolute -inset-16 blur-3xl pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255,194,32,0.30) 0%, transparent 70%)",
              }}
            />
            <Image
              src="/images/oracle-erp-practice/oracle-erp-hero.webp"
              alt="Oracle ERP staffing professionals"
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
                  linear-gradient(to top, white 0%, transparent 35%),
                  linear-gradient(to right, rgba(255,255,255,0.85) 0%, transparent 25%),
                  linear-gradient(to left, rgba(255,255,255,0.85) 0%, transparent 25%)
                `,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
