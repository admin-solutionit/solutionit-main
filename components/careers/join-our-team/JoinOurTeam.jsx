"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Plane,
  CalendarDays,
  FileCheck2,
  Gift,
} from "lucide-react";
import { motion } from "framer-motion";

import JobAccordian from "@/components/ui/job-accordian/JobAccordian";

const JOBS_PER_PAGE = 3;

function getPaginationItems(current, total) {
  if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1);
  const items = [1];
  if (current > 3) items.push("...");
  for (
    let p = Math.max(2, current - 1);
    p <= Math.min(total - 1, current + 1);
    p++
  )
    items.push(p);
  if (current < total - 2) items.push("...");
  items.push(total);
  return items;
}

const HEX_PATH =
  "M 67,0 L 154,0 A 21,21 0 0 1 171,11 L 215,99 A 21,21 0 0 1 215,121 L 171,209 A 21,21 0 0 1 154,220 L 67,220 A 21,21 0 0 1 49,209 L 5,121 A 21,21 0 0 1 5,99 L 49,11 A 21,21 0 0 1 67,0 Z";

const PILLAR_SHAPES = ["diamond", "circle", "hexagon"];

const PILLAR_LAYERS = [
  { size: "300px", bottom: "-120px", right: "-120px", opacity: 0.08 },
  { size: "215px", bottom: "-82px", right: "-82px", opacity: 0.13 },
  { size: "135px", bottom: "-44px", right: "-44px", opacity: 0.19 },
];

const pillars = [
  {
    number: "01",
    title: "Direct relationships with end clients",
    body: "Visibility into the projects you're supporting and the decisions being made. You'll know the client, the context, and the work.",
  },
  {
    number: "02",
    title: "A working environment built for specialists",
    body: "No generalist frameworks imposed on technical work. The people you work alongside know the platforms at the same level you do.",
  },
  {
    number: "03",
    title: "Stability and long-term focus",
    body: "We're not a volume recruiter. The people who join us tend to stay. We invest in the team because our reputation with clients depends on it.",
  },
];

const BENEFITS = [
  {
    id: 1,
    icon: Shield,
    title: "Health Coverage",
    body: "Life, medical, dental, and vision insurance. Full coverage for you and your dependents.",
    bg: "bg-navy",
    iconBg: "bg-white/15",
    iconColor: "text-white",
    titleColor: "text-white",
    bodyColor: "text-white",
    wide: true,
    hasImage: false,
  },
  {
    id: 2,
    icon: Plane,
    title: "Relocation & Travel",
    body: "Relocation and travel expenses covered for your engagement and beyond.",
    bg: "bg-beige",
    iconBg: "bg-navy",
    iconColor: "text-white",
    titleColor: "text-deep-blue",
    bodyColor: "text-grey-1",
    wide: false,
    hasImage: true,
    imagePlaceholder: "bg-navy/8",
  },
  {
    id: 3,
    icon: CalendarDays,
    title: "Time Off",
    body: "Vacation days, federal holidays, sick leave, and floating days built into your package.",
    bg: "bg-beige",
    iconBg: "bg-navy",
    iconColor: "text-white",
    titleColor: "text-deep-blue",
    bodyColor: "text-grey-1",
    wide: false,
    hasImage: false,
  },
  {
    id: 4,
    icon: FileCheck2,
    title: "Work Authorization",
    body: "Full guidance and processing support for work permit and residency applications.",
    bg: "bg-white border border-grey-2/40",
    iconBg: "bg-navy",
    iconColor: "text-white",
    titleColor: "text-deep-blue",
    bodyColor: "text-grey-1",
    wide: false,
    hasImage: false,
  },
  {
    id: 5,
    icon: Gift,
    title: "Referral Bonus",
    body: "Earn a bonus for every qualified Oracle consultant you introduce to our network.",
    bg: "bg-navy",
    iconBg: "bg-white/15",
    iconColor: "text-white",
    titleColor: "text-white",
    bodyColor: "text-white",
    wide: false,
    hasImage: false,
  },
];

export default function JoinOurTeam({ jobs }) {
  const [openId, setOpenId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const pagedJobs = jobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE,
  );

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-site">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            Join Our Team
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed max-w-3xl">
            Beyond client deployments, SolutionIT hires directly for long-term
            client engagements, remote staffing roles, and internal positions
            within our own practice. These are full-time roles within the
            SolutionIT team, with a benefits package and a working environment
            built around long-term careers in technology.
          </p>
        </motion.div>

        {/* Two columns: accordion job list + image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start mb-10">
          {/* Left: accordion listing */}
          <div className="flex flex-col lg:min-h-[560px]">
            {pagedJobs.map((job, i) => (
              <JobAccordian
                key={job._id}
                job={job}
                isOpen={openId === job._id}
                onToggle={() => toggle(job._id)}
                index={i}
              />
            ))}
            <div className="mt-auto">
              <div className="border-t border-grey-2" />
              {totalPages > 1 && (
                <div className="flex items-center justify-end gap-2 mt-6">
                  {currentPage > 1 && (
                    <button
                      onClick={() => {
                        setCurrentPage((p) => p - 1);
                        setOpenId(null);
                      }}
                      aria-label="Previous page"
                      className="w-9 h-9 rounded-full border border-grey-2 text-deep-blue flex items-center justify-center hover:border-navy transition-colors duration-200"
                    >
                      <ChevronLeft size={15} />
                    </button>
                  )}
                  {getPaginationItems(currentPage, totalPages).map((item, i) =>
                    item === "..." ? (
                      <span
                        key={`dots-${i}`}
                        className="w-9 h-9 flex items-center justify-center text-grey-1 text-sm select-none"
                      >
                        ···
                      </span>
                    ) : (
                      <button
                        key={item}
                        onClick={() => {
                          setCurrentPage(item);
                          setOpenId(null);
                        }}
                        aria-label={`Go to page ${item}`}
                        aria-current={item === currentPage ? "page" : undefined}
                        className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors duration-200 flex items-center justify-center border ${
                          item === currentPage
                            ? "bg-navy border-navy text-white"
                            : "border-grey-2 text-deep-blue hover:border-navy"
                        }`}
                      >
                        {item}
                      </button>
                    ),
                  )}
                  {currentPage < totalPages && (
                    <button
                      onClick={() => {
                        setCurrentPage((p) => p + 1);
                        setOpenId(null);
                      }}
                      aria-label="Next page"
                      className="w-9 h-9 rounded-full border border-grey-2 text-deep-blue flex items-center justify-center hover:border-navy transition-colors duration-200"
                    >
                      <ChevronRight size={15} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: sticky image */}
          <div className="hidden lg:block lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "560px" }}
            >
              <Image
                src="/images/careers/job.webp"
                alt="Join the SolutionIT team"
                fill
                sizes="400px"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* What working here looks like */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <h3 className="text-[22px] font-semibold text-deep-blue tracking-tight leading-snug">
            What working here looks like
          </h3>
          <p className="mt-3 text-grey-1 text-base leading-relaxed max-w-3xl">
            SolutionIT is a specialist firm, which means the people you work
            alongside know the platforms, the clients, and the work at the same
            level you do. We invest in the people on our team because our
            reputation with clients depends on it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative rounded-2xl bg-white p-6 overflow-hidden flex flex-col border border-grey-2/40"
              style={{ minHeight: "220px" }}
            >
              <h4 className="text-[18px] font-semibold text-deep-blue leading-snug tracking-tight mb-3">
                {item.title}
              </h4>
              <p className="text-base text-grey-1 leading-relaxed">
                {item.body}
              </p>
              {PILLAR_LAYERS.map((layer, li) => (
                <svg
                  key={li}
                  aria-hidden="true"
                  viewBox="0 0 220 220"
                  style={{
                    position: "absolute",
                    width: layer.size,
                    height: layer.size,
                    bottom: layer.bottom,
                    right: layer.right,
                    zIndex: 0,
                    pointerEvents: "none",
                    opacity: layer.opacity,
                  }}
                >
                  {PILLAR_SHAPES[i] === "diamond" && (
                    <rect
                      fill="#FDC723"
                      x="32"
                      y="32"
                      width="156"
                      height="156"
                      rx="14"
                      transform="rotate(45 110 110)"
                    />
                  )}
                  {PILLAR_SHAPES[i] === "circle" && (
                    <circle fill="#FDC723" cx="110" cy="110" r="108" />
                  )}
                  {PILLAR_SHAPES[i] === "hexagon" && (
                    <path fill="#FDC723" d={HEX_PATH} />
                  )}
                </svg>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-[22px] font-semibold text-deep-blue tracking-tight leading-snug">
            Benefits
          </h3>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`rounded-2xl overflow-hidden flex flex-col ${b.bg} ${b.wide ? "md:col-span-2" : ""}`}
              >
                {b.hasImage && !b.wide && (
                  <div
                    className={`h-24 w-full flex-shrink-0 ${b.imagePlaceholder} rounded-t-2xl`}
                  />
                )}

                {b.wide ? (
                  <div className="relative flex flex-col p-6 min-h-[160px]">
                    {[
                      {
                        size: "420px",
                        top: "-160px",
                        right: "-160px",
                        opacity: 0.2,
                      },
                      {
                        size: "310px",
                        top: "-110px",
                        right: "-110px",
                        opacity: 0.4,
                      },
                      {
                        size: "200px",
                        top: "-60px",
                        right: "-60px",
                        opacity: 0.6,
                      },
                    ].map((layer, li) => (
                      <svg
                        key={li}
                        aria-hidden="true"
                        viewBox="0 0 220 220"
                        style={{
                          position: "absolute",
                          width: layer.size,
                          height: layer.size,
                          top: layer.top,
                          right: layer.right,
                          zIndex: 0,
                          pointerEvents: "none",
                          opacity: layer.opacity,
                        }}
                      >
                        <rect
                          fill="white"
                          x="32"
                          y="32"
                          width="156"
                          height="156"
                          rx="14"
                          transform="rotate(45 110 110)"
                        />
                      </svg>
                    ))}
                    <div className="relative z-10 flex flex-col">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-4 ${b.iconBg}`}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.6}
                          className={b.iconColor}
                        />
                      </div>
                      <h4
                        className={`text-[18px] font-semibold leading-snug tracking-tight mb-2 ${b.titleColor}`}
                      >
                        {b.title}
                      </h4>
                      <p className={`text-base leading-relaxed ${b.bodyColor}`}>
                        {b.body}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col p-6 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-4 ${b.iconBg}`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                        className={b.iconColor}
                      />
                    </div>
                    <h4
                      className={`text-[18px] font-semibold leading-snug tracking-tight mb-2 ${b.titleColor}`}
                    >
                      {b.title}
                    </h4>
                    <p className={`text-base leading-relaxed ${b.bodyColor}`}>
                      {b.body}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
