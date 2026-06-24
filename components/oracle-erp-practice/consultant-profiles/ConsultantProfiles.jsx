"use client";

import { motion } from "framer-motion";
import {
  Clock,
  UserCheck,
  Layers,
  Settings2,
  Code2,
  GraduationCap,
} from "lucide-react";

const criteria = [
  {
    icon: Clock,
    title: "Minimum 10 years",
    description:
      "Hands-on experience in Oracle EBS or Fusion/Cloud: functional or technical.",
  },
  {
    icon: UserCheck,
    title: "Assessed by an Oracle SME",
    description:
      "Evaluated in the specific module or technical skill before deployment, not by a generalist recruiter.",
  },
  {
    icon: Layers,
    title: "Full lifecycle experience",
    description:
      "Implementations, upgrades, rollouts, and ongoing support across every lifecycle stage.",
  },
  {
    icon: Settings2,
    title: "Functional depth",
    description:
      "Setups, configuration, data conversion, migration, integration, and reporting.",
  },
  {
    icon: Code2,
    title: "Technical depth",
    description:
      "RICEWF, CEMLI, OIC, SOA Suite, OAF, BI Publisher, OTBI, FRS, Smart View, data migration.",
  },
  {
    icon: GraduationCap,
    title: "Relevant education",
    description:
      "CPA, MBA Finance, Accounting, Engineering, Supply Chain, Logistics, Oracle Certifications.",
  },
];

export default function ConsultantProfiles() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-white tracking-tight leading-snug">
            Our standard, without exception.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white">
            Every consultant we deploy meets this profile. No exceptions for
            timeline pressure, client urgency, or headcount targets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12">
          {criteria.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mb-4">
                  <Icon size={18} strokeWidth={1.6} className="text-navy" />
                </div>
                <h3
                  className="text-white font-semibold leading-snug mb-3"
                  style={{ fontSize: "18px" }}
                >
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-white">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
