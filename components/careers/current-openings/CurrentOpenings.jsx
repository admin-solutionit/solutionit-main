"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";

export default function CurrentOpenings() {
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) setShowLoader(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="current-openings"
      className="pt-10 md:pt-14 pb-4 md:pb-6 bg-white scroll-mt-20 md:scroll-mt-24"
    >
      <div className="container-site">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            Current Openings
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed max-w-2xl">
            Live roles across Oracle ERP and enterprise technology, updated
            regularly. Each opening has been assessed by our team before it
            reaches you.
          </p>
        </motion.div>

        {/* CEIPAL / Dice widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="overflow-hidden border border-grey-2"
        >
          <Script
            src="https://jobsapi.ceipal.com/APISource/widget.js"
            data-ceipal-api-key="ZGszYjdNZTF4a0dNcGVCQitqcEtsUT09"
            data-ceipal-career-portal-id="Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09"
            data-ceipal-jobs-per-page="10"
            strategy="afterInteractive"
            onLoad={() => setLoaded(true)}
          />
          {!loaded && showLoader && (
            <div className="flex items-center justify-center py-16">
              {/* <p className="text-sm text-grey-1 animate-pulse">Loading...</p> */}
              <div className="animate-pulse">
                <div className="h-12 bg-grey-2/30" />
                <div className="h-20 bg-grey-2/20 mt-2" />
                <div className="h-20 bg-grey-2/20 mt-2" />
                <div className="h-20 bg-grey-2/20 mt-2" />
              </div>
            </div>
          )}
          <div
            id="example-widget-container"
            className={loaded ? "" : "hidden"}
          />
        </motion.div>

        {/* Fallback CTA */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-deep-blue text-base leading-relaxed"
        >
          Don&apos;t see the right role? Tell us about yourself and we&apos;ll
          reach out when something fits.{" "}
          <Link
            href="#talent-form"
            className="text-navy font-semibold hover:underline underline-offset-2 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
