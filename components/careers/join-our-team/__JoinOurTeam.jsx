"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Shield,
  Plane,
  CalendarDays,
  FileCheck2,
  Gift,
  MapPin,
  Banknote,
  Hash,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const JOBS = [
  {
    id: 1,
    title: "Systems Analyst",
    refCode: "1413",
    manager: "HR Manager",
    experience: "10+ years",
    type: "Full-time",
    location: "Remote / Client-site (U.S.)",
    platform: "Oracle Cloud PPM / EBS",
    salary: "$146,806 / yr",
    benefits: "Medical · Dental · Vision · PTO · 401(k)",
    modules: ["Oracle Cloud PPM", "Oracle EBS", "Finance"],
    description:
      "Join our Oracle practice and help design, implement, and optimize Oracle Cloud and E-Business Suite solutions for enterprise clients.",
    responsibilities: [
      "Gather business requirements and perform fit-gap analysis",
      "Design and configure Oracle Cloud PPM and EBS solutions",
      "Lead client workshops, CRP sessions, SIT, and UAT testing",
      "Develop reports and support data conversions",
      "Create interfaces, customizations, and system extensions",
      "Collaborate with finance teams across AP, AR, and General Ledger functions",
    ],
    skills: [
      "Oracle Cloud PPM",
      "Oracle E-Business Suite",
      "Oracle Payables, Receivables & General Ledger",
      "OTBI, FBDI",
      "SQL",
    ],
  },
  {
    id: 2,
    title: "Software Application Developer",
    refCode: "2633",
    manager: "Atish Rastogi, Vice President",
    experience: "10+ years",
    type: "Full-time",
    location: "U.S. (Relocation may be required)",
    platform: "Oracle Integration Cloud",
    salary: "$178,131 / yr",
    benefits: "Competitive Company Benefits Package",
    modules: ["OIC", "Oracle ERP Cloud", "PL/SQL"],
    description:
      "Join our Oracle integration team and help build, modernize, and optimize enterprise integrations across Oracle Cloud and third-party applications.",
    responsibilities: [
      "Design and implement integrations between Oracle ERP Cloud and enterprise systems",
      "Develop solutions using Oracle Integration Cloud (OIC)",
      "Support cloud migration initiatives and integration strategies",
      "Migrate legacy integrations, custom extensions, and reports",
      "Ensure seamless data flow, process automation, and system reliability",
      "Collaborate with stakeholders across ERP, SCM, HCM, and external platforms",
    ],
    skills: [
      "Oracle Integration Cloud (OIC)",
      "Oracle ERP Fusion Cloud",
      "FBDI & HDL Data Migration",
      "BI Publisher (BIP)",
      "OTBI Reporting",
      "PL/SQL",
      "Oracle Forms, Reports & OAF",
    ],
  },
  {
    id: 3,
    title: "Web UI Developer",
    refCode: "8831",
    manager: "Atish Rastogi, Vice President",
    experience: "8+ years",
    type: "Full-time",
    location: "U.S. (Relocation may be required)",
    platform: "React / Next.js",
    salary: "$178,131 / yr",
    benefits: "Competitive Company Benefits Package",
    modules: ["React", "Next.js", "TypeScript", "REST APIs"],
    description:
      "Join our digital engineering team and build modern, scalable, and accessible web applications that deliver exceptional user experiences across devices.",
    responsibilities: [
      "Design and develop responsive, user-centric web applications",
      "Build reusable front-end components and design systems",
      "Integrate APIs and ensure seamless backend connectivity",
      "Optimize application performance, accessibility, and usability",
      "Lead front-end development initiatives and maintain code quality",
      "Support testing, deployment, and CI/CD processes",
    ],
    skills: [
      "HTML5, CSS3, SASS, SCSS",
      "Tailwind CSS, Bootstrap, Material UI",
      "JavaScript, TypeScript",
      "React, React Hooks, Redux, Next.js",
      "Vue.js, Angular",
      "REST APIs",
      "Jest, React Testing Library, Cypress",
      "Web Accessibility Standards",
    ],
  },
  {
    id: 4,
    title: "Oracle SCM Functional Consultant",
    refCode: null,
    manager: "HR Manager",
    experience: "10+ years",
    type: "Contract",
    location: "Hybrid — Boston, MA",
    platform: "Oracle EBS",
    salary: null,
    benefits: null,
    modules: ["SCM", "Inventory", "Order Management", "Purchasing"],
    description:
      "Support Oracle SCM implementations across Inventory, Order Management, and Purchasing for enterprise clients.",
    responsibilities: [],
    skills: [],
  },
];

function AccordionRow({ job, isOpen, onToggle, index }) {
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
            {job.platform}
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-grey-2 text-grey-1 text-xs font-medium leading-none">
            Experience: {job.experience}
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
            <span className="w-1 h-1 rounded-full bg-grey-2 flex-shrink-0 inline-block" />
            {job.modules.join(", ")}
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
              <p className="text-grey-1 text-base leading-relaxed">
                {job.description}
              </p>

              {/* Key Responsibilities */}
              {job.responsibilities.length > 0 && (
                <div>
                  <h4 className="text-[15px] font-semibold text-deep-blue mb-3 tracking-tight">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-grey-1 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[7px] flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {job.skills.length > 0 && (
                <div>
                  <h4 className="text-[15px] font-semibold text-deep-blue mb-3 tracking-tight">
                    Skills &amp; Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s, i) => (
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

export default function JoinOurTeam() {
  const [openId, setOpenId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(JOBS.length / JOBS_PER_PAGE);
  const pagedJobs = JOBS.slice(
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
              <AccordionRow
                key={job.id}
                job={job}
                isOpen={openId === job.id}
                onToggle={() => toggle(job.id)}
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
