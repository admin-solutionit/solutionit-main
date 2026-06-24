"use client";

import Link from "next/link";
import { ChevronDown, Shield, MapPin, Banknote, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function JobAccordian({ job, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border-t border-grey-2"
    >
      {/* Clickable header */}
      <button
        onClick={onToggle}
        className="w-full py-7 text-left"
        aria-expanded={isOpen}
      >
        {/* Top row: platform badge + experience */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold leading-none bg-spark-yellow-light text-deep-blue">
            {job.platform || "Technology"}
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-grey-2 text-grey-1 text-xs font-medium leading-none">
            Experience: {job.experience || "Not specified"}
          </span>
        </div>

        {/* Title + chevron */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[22px] font-semibold text-deep-blue leading-snug tracking-tight">
            {job.title}
          </h3>
          <ChevronDown
            size={20}
            strokeWidth={1.8}
            className={`flex-shrink-0 mt-1.5 text-grey-1 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        {/* Collapsed meta */}
        {!isOpen && (
          <p className="mt-2 text-sm text-grey-1 flex items-center gap-2 flex-wrap">
            {job.location}

            {job.modules?.length > 0 && (
              <>
                <span className="w-1 h-1 rounded-full bg-grey-2 flex-shrink-0 inline-block" />
                {job.modules.join(", ")}
              </>
            )}
          </p>
        )}
      </button>

      {/* Expanded panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-6">
              {/* Metadata chips */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-grey-2 text-xs font-medium text-deep-blue">
                  <MapPin size={12} strokeWidth={2} className="text-grey-1" />
                  {job.location}
                </span>
                {job.salary && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-grey-2 text-xs font-medium text-deep-blue">
                    <Banknote
                      size={12}
                      strokeWidth={2}
                      className="text-grey-1"
                    />
                    {job.salary}
                  </span>
                )}
                {job.benefits && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-grey-2 text-xs font-medium text-deep-blue">
                    <Shield size={12} strokeWidth={2} className="text-grey-1" />
                    {job.benefits}
                  </span>
                )}
                {job.refCode && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-grey-2/30 text-xs font-medium text-grey-1">
                    <Hash size={11} strokeWidth={2} />
                    Ref {job.refCode}
                  </span>
                )}
              </div>

              {/* Description */}
              {job.description && (
                <p className="text-grey-1 text-base leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              )}

              {/* Key Responsibilities */}
              {job.responsibilities && (
                <div>
                  <h4 className="text-[15px] font-semibold text-deep-blue mb-3 tracking-tight">
                    Key Responsibilities
                  </h4>

                  <div className="text-sm text-grey-1 leading-relaxed whitespace-pre-line">
                    {job.responsibilities}
                  </div>
                </div>
              )}

              {/* Skills */}
              {job.skills?.length > 0 && (
                <div>
                  <h4 className="text-[15px] font-semibold text-deep-blue mb-3 tracking-tight">
                    Skills &amp; Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full border border-grey-2 text-xs font-medium text-deep-blue"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Apply CTA */}
              <div className="flex items-center gap-4 pt-1">
                <Link
                  href={
                    job.refCode
                      ? `/careers?ref=${job.refCode}&job=${encodeURIComponent(job.title)}&manager=${encodeURIComponent(job.manager)}#talent-form`
                      : "#talent-form"
                  }
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-hover transition-colors duration-200"
                >
                  Apply Now
                </Link>
                {job.refCode && (
                  <p className="text-sm text-grey-1">
                    Include Reference Code{" "}
                    <span className="font-semibold text-deep-blue">
                      {job.refCode}
                    </span>{" "}
                    in your application.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
