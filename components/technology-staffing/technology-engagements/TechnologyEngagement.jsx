"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const models = [
  {
    title: "Contract",
    description:
      "A vetted technology professional for a defined period, ready to engage without lengthy procurement cycles.",
    idealFor: "Project surges, defined-term initiatives, and specialist gaps",
    image: "/images/technology-staffing/contract.webp",
    alt: "Contract engagement",
    imageRadius: "8px",
    shapeTop: "40px",
    shapeRight: "-160px",
    shapeSize: "280px",
    blobTop: "-40px",
    blobRight: "-220px",
    textPaddingClass: "lg:pr-[240px]",
    imageWrapperSize: "400px",
    imageOffsetX: "-60px",
    imageOffsetY: "160px",
  },
  {
    title: "Contract-to-hire",
    description:
      "Evaluate the professional before committing. If the fit is right, bring them on permanently. We handle the transition.",
    idealFor:
      "Building internal capability or replacing a departing specialist",
    image: "/images/technology-staffing/contract-to-hire.webp",
    alt: "Contract-to-hire engagement",
    imageRadius: "50%",
    shapeTop: "-60px",
    shapeRight: "-60px",
    shapeSize: "300px",
    blobTop: "-200px",
    blobRight: "-200px",
    imageOffsetY: "40px",
    imageWrapperSize: "300px",
    textPaddingClass: "lg:pr-[230px]",
  },
];

export default function TechnologyEngagement() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight">
            Two ways to engage
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed">
            Built around your hiring timeline and commitment level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl relative flex flex-col p-8 overflow-hidden border border-grey-2/40"
            >
              {/* Soft warm blob — second card only */}
              {i === 1 && (
                <div
                  className="absolute pointer-events-none hidden lg:block"
                  style={{
                    width: "390px",
                    height: "390px",
                    top: model.blobTop,
                    right: model.blobRight,
                    borderRadius: "50%",
                    background: "rgba(255, 194, 32, 0.25)",
                    filter: "blur(24px)",
                    transform: "rotate(45deg)",
                  }}
                />
              )}

              {/* Shape container */}
              <div
                className="absolute overflow-hidden hidden lg:block"
                style={{
                  width: model.shapeSize,
                  height: model.shapeSize,
                  top: model.shapeTop,
                  right: model.shapeRight,
                  borderRadius: model.imageRadius,
                  ...(i === 0 && {
                    transform: "rotate(45deg)",
                    transformOrigin: "top right",
                  }),
                  boxShadow:
                    "0 0 0 5px #FFC220, 0 0 0 11px rgba(255, 194, 32, 0.5)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: model.imageWrapperSize,
                    height: model.imageWrapperSize,
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${model.imageOffsetX || "0px"}), calc(-50% + ${model.imageOffsetY || "0px"})) rotate(${i === 0 ? "-45deg" : "0deg"})`,
                  }}
                >
                  <Image
                    src={model.image}
                    alt={model.alt}
                    fill
                    sizes="340px"
                    className="object-cover object-top grayscale"
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* Mobile image */}
              <div className="relative -mx-8 -mt-8 h-48 overflow-hidden rounded-t-2xl mb-6 lg:hidden">
                <Image
                  src={model.image}
                  alt={model.alt}
                  fill
                  sizes="90vw"
                  className="object-cover object-top grayscale"
                />
              </div>

              {/* Text */}
              <div
                className={`flex flex-col flex-1 ${model.textPaddingClass ?? "lg:pr-[230px]"}`}
              >
                <h3 className="text-deep-blue font-semibold text-lg leading-snug mb-3">
                  {model.title}
                </h3>
                <p className="text-grey-1 text-base leading-relaxed mb-4">
                  {model.description}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1 text-deep-blue">
                  Ideal For
                </p>
                <p className="text-grey-1 text-base leading-relaxed">
                  {model.idealFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
