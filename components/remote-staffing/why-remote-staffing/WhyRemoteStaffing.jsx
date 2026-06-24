"use client";

import { motion } from "framer-motion";
import { UserCheck, Layers, TrendingDown } from "lucide-react";

const pillars = [
  {
    icon: UserCheck,
    title: "The talent is real",
    description:
      "Same 10-year minimum, same SME assessment, same module and lifecycle coverage as our on-site practice.",
  },
  {
    icon: Layers,
    title: "The structure is clear",
    description:
      "Full-time dedicated engagement, managed workspace, direct reporting to your team.",
  },
  {
    icon: TrendingDown,
    title: "The cost case is significant",
    description:
      "50–60% savings on recruiting, training, and infrastructure overhead.",
  },
];

/* One shape per card: asterisk, hexagon, rotated square */
const SHAPES = [
  null, // asterisk rendered as SVG below
  {
    width: "175px",
    height: "175px",
    bottom: "-45px",
    right: "-35px",
    extra: {
      clipPath:
        "path('M 53,0 L 122,0 A 17,17 0 0 1 136,9 L 171,79 A 17,17 0 0 1 171,96 L 136,166 A 17,17 0 0 1 122,175 L 53,175 A 17,17 0 0 1 39,166 L 4,96 A 17,17 0 0 1 4,79 L 39,9 A 17,17 0 0 1 53,0 Z')",
    },
  },
  {
    width: "160px",
    height: "160px",
    bottom: "-60px",
    right: "-60px",
    extra: {
      borderRadius: "24px",
      transform: "rotate(45deg)",
    },
  },
];

export default function WhyRemoteStaffing() {
  return (
    <section className="pt-10 md:pt-14 pb-16 md:pb-24 bg-white">
      <div className="container-site">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-4"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            Why remote <span className="text-navy">Oracle staffing works</span>
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="w-full mb-12 flex flex-col gap-4"
        >
          <p className="text-base leading-relaxed text-grey-1">
            The challenge with remote Oracle talent isn&apos;t finding people.
            It&apos;s finding the right people and managing them effectively
            once they&apos;re in place. Generalist offshore models fail on both
            counts: the talent isn&apos;t Oracle-specific, and the oversight
            isn&apos;t structured.
          </p>
          <p className="text-base leading-relaxed text-grey-1">
            SolutionIT&apos;s remote model is built differently. Every
            consultant is an Oracle EBS or Fusion/Cloud specialist, assessed by
            our own Oracle practitioners before deployment. They work full-time,
            exclusively for your organization, from a managed workspace with
            direct accountability to you. Not a shared resource. A dedicated
            Oracle specialist who happens not to be in your building.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const shape = SHAPES[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl p-6 flex flex-col bg-white relative overflow-hidden border border-grey-2/40"
              >
                {/* Shape accent */}
                {i === 0 ? (
                  /* Asterisk: 3 rounded rectangles at 0°, 60°, 120° — opacity on SVG prevents overlap bleed */
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 160 160"
                    className="absolute pointer-events-none"
                    style={{
                      width: "160px",
                      height: "160px",
                      bottom: "-40px",
                      right: "-40px",
                      zIndex: 0,
                      opacity: 0.4,
                    }}
                  >
                    <g fill="#FFD963">
                      <rect x="66" y="10" width="28" height="140" rx="4" />
                      <rect
                        x="66"
                        y="10"
                        width="28"
                        height="140"
                        rx="4"
                        transform="rotate(60 80 80)"
                      />
                      <rect
                        x="66"
                        y="10"
                        width="28"
                        height="140"
                        rx="4"
                        transform="rotate(120 80 80)"
                      />
                    </g>
                  </svg>
                ) : (
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      zIndex: 0,
                      width: SHAPES[i].width,
                      height: SHAPES[i].height,
                      bottom: SHAPES[i].bottom,
                      right: SHAPES[i].right,
                      background: "rgba(255, 217, 99, 0.4)",
                      ...SHAPES[i].extra,
                    }}
                  />
                )}

                <div className="relative z-10 w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <Icon size={18} strokeWidth={1.6} className="text-white" />
                </div>

                <h3
                  className="relative z-10 font-semibold leading-snug mt-4 text-deep-blue"
                  style={{ fontSize: "18px" }}
                >
                  {pillar.title}
                </h3>

                <p
                  className="relative z-10 leading-relaxed mt-3 flex-1 text-grey-1"
                  style={{ fontSize: "16px" }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
