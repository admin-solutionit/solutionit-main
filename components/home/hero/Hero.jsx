"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { WorldMapDots } from "@/components/ui/world-map/WorldMapDots";

const cyclingTerms = ["Oracle EBS talent,", "Fusion/Cloud talent,"];

function CyclingTerm() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % cyclingTerms.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={cyclingTerms[index]}
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          exit: { duration: 0.3, ease: [0.4, 0, 1, 1] },
        }}
        className="inline-block"
      >
        {cyclingTerms[index]}
      </motion.span>
    </AnimatePresence>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Oracle deployments delivered" },
  { value: 100, suffix: "+", label: "Enterprise clients served" },
  { value: 18, suffix: "", label: "Years in Oracle ERP staffing" },
  { value: 100, suffix: "+", label: "Full-time employees, available now" },
];

function StatItem({ item, delay }) {
  const { count, ref } = useCountUp(item.value, 1600);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center px-8 py-6 border-r border-grey-2/60 even:border-r-0 md:even:border-r md:last:border-r-0"
    >
      <span className="text-[2.25rem] md:text-[2.75rem] font-bold leading-none tracking-tight text-deep-blue font-serif">
        {count}
        {item.suffix}
      </span>
      <p className="mt-2 text-grey-1 text-sm leading-snug">{item.label}</p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient area — colours emanate from bottom corners */}
      <div
        className="relative overflow-hidden flex items-center justify-center min-h-[calc(100vh-160px)]"
        style={{
          background: `
            radial-gradient(ellipse 65% 90% at 0% 100%, #FCEAB3 0%, transparent 65%),
            radial-gradient(ellipse 65% 90% at 100% 100%, #FFEAAA 0%, transparent 65%),
            #ffffff
          `,
        }}
      >
        <WorldMapDots
          opacity={0.05}
          color="#041E42"
          dotSize={2}
          dotSpacing={7}
          className="w-[80%] h-auto left-1/2 -translate-x-1/2 bottom-0"
        />
        <div className="relative z-10 w-full container-site pt-32 pb-16 md:pt-40 md:pb-20 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.1] tracking-tight font-semibold max-w-5xl"
          >
            <span className="block text-deep-blue">Specialist-vetted</span>
            <span className="block text-navy">
              <CyclingTerm />
            </span>
            <span className="block text-deep-blue">
              ready when you need it.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-grey-1 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Nearly 30 years deploying Oracle EBS and Fusion/Cloud consultants,
            every candidate evaluated by an Oracle practitioner before they
            reach you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact#hiring-form"
              className="group inline-flex items-center gap-2.5 bg-navy text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-navy-hover transition-colors duration-300"
            >
              Find Oracle Talent
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/contact#next-engagement"
              className="inline-flex items-center border border-navy text-navy text-base font-semibold px-8 py-4 rounded-full hover:border-navy-hover hover:text-navy-hover transition-colors duration-300"
            >
              Find Your Next Engagement
            </Link>
          </motion.div>
        </div>
      </div>

      {/* White stat strip — no divider */}
      <div className="bg-white py-10 md:py-12">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((item, i) => (
              <StatItem key={i} item={item} delay={0.65 + i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
