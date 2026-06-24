"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Code2,
  Layers,
  Server,
  Users,
  HardDrive,
  BarChart2,
  GitBranch,
  Monitor,
  Smartphone,
  Package,
} from "lucide-react";

/* ── data ─────────────────────────────────────────────────────────────────── */

const GROUPS = [
  {
    key: "erp",
    sectionBg: "bg-white",
    cardBg: "bg-beige",
    chipBg: "bg-white",
    header: {
      icon: Database,
      title: "Enterprise ERP",
      body: "Functional and technical professionals across major ERP platforms, deployed for implementations, upgrades, rollouts, and ongoing support.",
      shape: "diamond",
      pos: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
    },
    items: [
      {
        key: "oracle",
        icon: Layers,
        title: "Oracle EBS and Fusion/Cloud",
        body: "Functional and technical consultants across financials, SCM, manufacturing, HCM, and CX Cloud.",
        chips: ["Financials", "SCM", "Manufacturing", "HCM", "CX Cloud"],
        image: "/images/technology-staffing/oracle-ebs.webp",
        pos: "lg:col-start-2 lg:col-span-2 lg:row-start-1",
      },
      {
        key: "sap",
        icon: Server,
        title: "SAP ECC and S/4 HANA",
        body: null,
        chips: ["SD", "MM", "FI/CO", "PP", "PM", "ABAP/4", "Fiori", "Basis"],
        pos: "lg:col-start-2 lg:row-start-2",
      },
      {
        key: "crm",
        icon: Users,
        title: "CRM",
        body: "Salesforce functional and technical specialists.",
        chips: ["Salesforce"],
        pos: "lg:col-start-3 lg:row-start-2",
      },
    ],
  },
  {
    key: "cloud",
    sectionBg: "bg-beige",
    cardBg: "bg-white",
    chipBg: "bg-beige",
    header: {
      icon: Cloud,
      title: "Cloud, Data, and DevOps",
      body: "Architects, engineers, and developers across cloud platforms, data infrastructure, and delivery pipelines.",
      shape: "hexagon",
      pos: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
    },
    items: [
      {
        key: "bigdata",
        icon: HardDrive,
        title: "Big Data",
        body: "Architects and developers across distributed data platforms and visualization tools.",
        chips: [
          "Hadoop",
          "Apache Spark",
          "HBase",
          "Tableau",
          "MongoDB",
          "Cloudera",
        ],
        image: "/images/technology-staffing/big-data.webp",
        pos: "lg:col-start-1 lg:col-span-2 lg:row-start-1",
      },
      {
        key: "analytics",
        icon: BarChart2,
        title: "Data and Analytics",
        body: null,
        chips: [
          "Snowflake",
          "Databricks",
          "Redshift",
          "BigQuery",
          "Azure ADLS",
          "Python",
          "R",
        ],
        pos: "lg:col-start-1 lg:row-start-2",
      },
      {
        key: "devops",
        icon: Cloud,
        title: "Cloud and DevOps",
        body: "Solution architects, DevOps engineers, CI/CD pipelines, and infrastructure as code.",
        chips: ["AWS", "Azure", "GCP"],
        pos: "lg:col-start-2 lg:row-start-2",
      },
    ],
  },
  {
    key: "appdev",
    sectionBg: "bg-white",
    cardBg: "bg-beige",
    chipBg: "bg-white",
    header: {
      icon: Code2,
      title: "Application Development",
      body: "Developers and architects across web, mobile, and enterprise application frameworks.",
      shape: "circle",
      pos: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
    },
    items: [
      {
        key: "java",
        icon: GitBranch,
        title: "Java",
        body: "Architects and developers across enterprise Java ecosystems.",
        chips: [
          "J2EE",
          "Spring Boot",
          "Microservices",
          "SOAP/REST",
          "Hibernate",
        ],
        pos: "lg:col-start-2 lg:row-start-1",
      },
      {
        key: "webui",
        icon: Monitor,
        title: "Web UI",
        body: null,
        chips: [
          "JavaScript",
          "TypeScript",
          "React",
          "Angular",
          "Node JS",
          "Redux",
        ],
        pos: "lg:col-start-3 lg:row-start-1",
      },
      {
        key: "mobile",
        icon: Smartphone,
        title: "Mobile Applications",
        body: "iOS, Android, and cross-platform architects and developers.",
        chips: ["iOS", "Android", "React Native"],
        pos: "lg:col-start-2 lg:row-start-2",
      },
      {
        key: "microsoft",
        icon: Package,
        title: "Microsoft Technologies",
        body: null,
        chips: [
          "ASP.NET Core",
          "C#",
          ".NET",
          "React JS",
          "Next JS",
          "TypeScript",
        ],
        pos: "lg:col-start-3 lg:row-start-2",
      },
    ],
  },
];

/* ── header shape accent ──────────────────────────────────────────────────── */

const HEX_PATH =
  "M 67,0 L 154,0 A 21,21 0 0 1 171,11 L 215,99 A 21,21 0 0 1 215,121 L 171,209 A 21,21 0 0 1 154,220 L 67,220 A 21,21 0 0 1 49,209 L 5,121 A 21,21 0 0 1 5,99 L 49,11 A 21,21 0 0 1 67,0 Z";

const LAYERS = [
  { size: "420px", bottom: "-160px", right: "-160px", opacity: 0.2 },
  { size: "310px", bottom: "-110px", right: "-110px", opacity: 0.4 },
  { size: "200px", bottom: "-60px", right: "-60px", opacity: 0.6 },
];

function HeaderShape({ shape }) {
  return (
    <>
      {LAYERS.map((layer, i) => (
        <svg
          key={i}
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
          {shape === "diamond" && (
            <rect
              fill="white"
              x="32"
              y="32"
              width="156"
              height="156"
              rx="14"
              transform="rotate(45 110 110)"
            />
          )}
          {shape === "hexagon" && <path fill="white" d={HEX_PATH} />}
          {shape === "circle" && (
            <circle fill="white" cx="110" cy="110" r="108" />
          )}
        </svg>
      ))}
    </>
  );
}

/* ── component ────────────────────────────────────────────────────────────── */

export default function TechnologyDisciplines() {
  return (
    <section>
      {/* Section heading */}
      <div className="bg-white">
        <div className="container-site pt-10 md:pt-14 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
              Disciplines
            </h2>
            <p className="mt-3 text-grey-1 text-base leading-relaxed">
              We deploy technology professionals across three practice areas.
              Tell us the role, the stack, and the timeline: we&apos;ll take it
              from there.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Three bento groups — alternating backgrounds */}
      {GROUPS.map((group, gi) => {
        const HeaderIcon = group.header.icon;
        const isLast = gi === GROUPS.length - 1;
        return (
          <div
            key={group.key}
            className={`${group.sectionBg} ${isLast ? "pb-8" : "pb-14"} pt-8`}
          >
            <div className="container-site">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Header card — navy with shape accent */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: gi * 0.04 }}
                  className={`bg-navy rounded-2xl overflow-hidden flex flex-col relative ${group.header.pos}`}
                >
                  <HeaderShape shape={group.header.shape} />
                  <div className="relative z-10 p-5 flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mb-4">
                      <HeaderIcon
                        size={18}
                        strokeWidth={1.6}
                        className="text-white"
                      />
                    </div>
                    <h3
                      className="font-semibold text-white leading-snug mb-2"
                      style={{ fontSize: "18px" }}
                    >
                      {group.header.title}
                    </h3>
                    <p className="text-white text-base leading-relaxed">
                      {group.header.body}
                    </p>
                  </div>
                </motion.div>

                {/* Item cards */}
                {group.items.map((item, ii) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.5,
                        delay: gi * 0.04 + (ii + 1) * 0.06,
                      }}
                      className={`${group.cardBg} rounded-2xl flex flex-col ${item.pos}`}
                    >
                      {item.image ? (
                        /* Wide card: content left, image right */
                        <div className="flex gap-5 h-full p-5">
                          <div className="flex flex-col flex-1 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 mb-4">
                              <Icon
                                size={18}
                                strokeWidth={1.6}
                                className="text-white"
                              />
                            </div>
                            <h3
                              className="font-semibold text-deep-blue leading-snug mb-2"
                              style={{ fontSize: "18px" }}
                            >
                              {item.title}
                            </h3>
                            {item.body && (
                              <p className="text-grey-1 text-base leading-relaxed mb-3">
                                {item.body}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2 mt-auto pt-3">
                              {item.chips.map((chip) => (
                                <span
                                  key={chip}
                                  className={`inline-flex items-center px-3 py-1.5 rounded-full ${group.chipBg} border border-grey-2/40 text-grey-1 text-xs font-medium leading-none`}
                                >
                                  {chip}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="relative hidden lg:block w-[35%] rounded-xl overflow-hidden flex-shrink-0 self-stretch">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="16vw"
                            />
                          </div>
                        </div>
                      ) : (
                        /* Standard card */
                        <div className="p-5 flex flex-col h-full">
                          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 mb-4">
                            <Icon
                              size={18}
                              strokeWidth={1.6}
                              className="text-white"
                            />
                          </div>
                          <h3
                            className="font-semibold text-deep-blue leading-snug mb-2"
                            style={{ fontSize: "18px" }}
                          >
                            {item.title}
                          </h3>
                          {item.body && (
                            <p className="text-grey-1 text-base leading-relaxed mb-3">
                              {item.body}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-2 mt-auto pt-3">
                            {item.chips.map((chip) => (
                              <span
                                key={chip}
                                className={`inline-flex items-center px-3 py-1.5 rounded-full ${group.chipBg} border border-grey-2/40 text-grey-1 text-xs font-medium leading-none`}
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
