"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "You define the role",
    description:
      "Tell us the module, the lifecycle stage, and the timeline. We identify candidates from our Oracle network who meet the requirement, functionally and technically.",
  },
  {
    title: "You select the consultant",
    description:
      "Every candidate is presented with full profile detail: experience, modules, certifications, and lifecycle history. You interview, evaluate, and choose. We don't deploy anyone without your approval.",
  },
  {
    title: "We handle the setup",
    description:
      "Once selected, the consultant is onboarded into our managed workspace. Equipment, connectivity, and infrastructure handled by SolutionIT. No setup burden on your team.",
  },
  {
    title: "You direct the work",
    description:
      "The consultant reports directly to your team and works exclusively on your engagement. Day-to-day direction, priorities, and delivery accountability sit with you, not with us.",
  },
  {
    title: "We stay accountable",
    description:
      "SolutionIT remains the single point of contact throughout. If something isn't working, we fix it. If the requirement changes, we adapt.",
  },
];

function StepCard({ step, index, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 flex flex-col lg:h-[280px]"
    >
      <span className="text-navy text-sm font-semibold tracking-widest uppercase mb-4">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3
        className="font-semibold text-deep-blue leading-snug mb-3"
        style={{ fontSize: "18px" }}
      >
        {step.title}
      </h3>
      <p className="text-grey-1 text-base leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function HowRemoteWorks() {
  return (
    <section className="py-10 md:py-14 bg-beige">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            How it works
          </h2>
          <p className="mt-2 text-grey-1 text-base italic">
            You select, you direct, we support.
          </p>
        </motion.div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-4 lg:hidden">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} delay={i * 0.08} />
          ))}
        </div>

        {/*
          Desktop: 6-column offset grid.
          Row 1: cols 1–2 | 3–4 | 5–6
          Row 2: cols 2–3 | 4–5  →  each card centres on the gap between two row-1 cards
        */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
          }}
        >
          <div style={{ gridColumn: "1 / 3" }}>
            <StepCard step={steps[0]} index={0} delay={0} />
          </div>
          <div style={{ gridColumn: "3 / 5" }}>
            <StepCard step={steps[1]} index={1} delay={0.1} />
          </div>
          <div style={{ gridColumn: "5 / 7" }}>
            <StepCard step={steps[2]} index={2} delay={0.2} />
          </div>

          <div style={{ gridColumn: "2 / 4" }}>
            <StepCard step={steps[3]} index={3} delay={0.3} />
          </div>
          <div style={{ gridColumn: "4 / 6" }}>
            <StepCard step={steps[4]} index={4} delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
}
