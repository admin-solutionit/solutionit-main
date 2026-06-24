"use client";

import { motion } from "framer-motion";

const HEX_PATH =
  "M 67,0 L 154,0 A 21,21 0 0 1 171,11 L 215,99 A 21,21 0 0 1 215,121 L 171,209 A 21,21 0 0 1 154,220 L 67,220 A 21,21 0 0 1 49,209 L 5,121 A 21,21 0 0 1 5,99 L 49,11 A 21,21 0 0 1 67,0 Z";

const CARD_SHAPES = ["diamond", "circle", "hexagon"];

const CARD_LAYERS = [
  { size: "300px", bottom: "-120px", right: "-120px", opacity: 0.08 },
  { size: "215px", bottom: "-82px", right: "-82px", opacity: 0.13 },
  { size: "135px", bottom: "-44px", right: "-44px", opacity: 0.19 },
];

const steps = [
  {
    num: "01",
    title: "Oracle practitioners assess every candidate",
    description:
      "Every consultant we deploy is evaluated by an internal Oracle SME in the specific module or technical skill, not a recruiter working from a checklist. The person assessing your candidate has done the work themselves.",
  },
  {
    num: "02",
    title: "A network built over nearly 20 years",
    description:
      "100+ Oracle EBS and Fusion/Cloud consultants in our network and ready to deploy. 50+ more in pipeline, screened and available. We are not sourcing from scratch when you call, we already know who fits.",
  },
  {
    num: "03",
    title: "One firm. Two delivery models.",
    description:
      "On-site deployments from our US practice. Dedicated remote specialists from our managed workspaces in Boston, Massachusetts and Vizag, India. Same consultant standard. Different cost structure.",
  },
];

export default function HowWeVet() {
  return (
    <section className="pt-10 md:pt-14 pb-20 md:pb-28 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-tight">
            What makes the <span className="text-navy">difference</span>
          </h2>
          <p className="mt-4 text-grey-1 text-base leading-relaxed">
            Most technology recruiters treat Oracle as a keyword. We treat it as
            a discipline, because that is how we were built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl relative flex flex-col p-8 overflow-hidden border border-grey-2/40"
            >
              {CARD_LAYERS.map((layer, li) => (
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
                  {CARD_SHAPES[i] === "diamond" && (
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
                  {CARD_SHAPES[i] === "circle" && (
                    <circle fill="#FDC723" cx="110" cy="110" r="108" />
                  )}
                  {CARD_SHAPES[i] === "hexagon" && (
                    <path fill="#FDC723" d={HEX_PATH} />
                  )}
                </svg>
              ))}

              <span className="relative z-10 text-navy text-sm font-semibold tracking-widest uppercase">
                {step.num}
              </span>
              <h3
                className="relative z-10 text-deep-blue font-semibold mt-3 mb-2 leading-snug"
                style={{ fontSize: "18px" }}
              >
                {step.title}
              </h3>
              <p
                className="relative z-10 text-grey-1 leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
