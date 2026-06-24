"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "For Employers",
    subheading: "Need Oracle EBS or Fusion/Cloud talent?",
    description:
      "We deploy vetted Oracle specialists for contract and contract-to-hire engagements on-site or remote, one hire or an entire team.",
    linkText: "Find Oracle Talent",
    href: "/contact#hiring-form",
    image: "/images/home/employers.webp",
    alt: "Employer reviewing Oracle ERP candidates",
    imageRadius: "6px",
    shapeTop: "100px",
    shapeRight: "-160px",
    shapeSize: "280px",
    blobTop: "-40px",
    blobRight: "-220px",
    textPaddingClass: "lg:pr-[240px]",
    imageWrapperSize: "400px",
    imageOffsetX: "-0px",
  },
  {
    title: "For Consultants",
    subheading: "Looking for your next Oracle engagement?",
    description:
      "SolutionIT works with Oracle EBS and Fusion/Cloud specialists across every module and lifecycle stage. If you want to work with clients who value your specialism, not just your keywords, let's talk.",
    linkText: "See Current Openings",
    href: "/careers#current-openings",
    image: "/images/home/consultants.webp",
    alt: "Oracle ERP consultant at work",
    imageRadius: "50%",
    shapeTop: "-50px",
    shapeRight: "-50px",
    shapeSize: "300px",
    blobTop: "-200px",
    blobRight: "-200px",
    imageOffsetY: "80px",
    imageWrapperSize: "400px",
    textPaddingClass: "lg:pr-[230px]",
  },
];

export default function DualPersona() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-site">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl relative flex flex-col p-8 overflow-hidden border border-grey-2/40"
            >
              {/* Soft warm blob — Consultant card only */}
              {i === 1 && (
                <div
                  className="absolute pointer-events-none hidden lg:block"
                  style={{
                    width: "390px",
                    height: "390px",
                    top: card.blobTop,
                    right: card.blobRight,
                    borderRadius: "50%",
                    background: "rgba(255, 194, 32, 0.25)",
                    filter: "blur(24px)",
                    transform: "rotate(45deg)",
                  }}
                />
              )}

              {/* Shape container — diamond (Employer: rotate 45°, origin top-right) | circle (Consultant: no rotation) */}
              <div
                className="absolute overflow-hidden hidden lg:block"
                style={{
                  width: card.shapeSize ?? "320px",
                  height: card.shapeSize ?? "320px",
                  top: card.shapeTop,
                  right: card.shapeRight,
                  borderRadius: card.imageRadius,
                  ...(i === 0 && {
                    transform: "rotate(45deg)",
                    transformOrigin: "top right",
                  }),
                  boxShadow:
                    "0 0 0 5px #FFC220, 0 0 0 11px rgba(255, 194, 32, 0.5)",
                }}
              >
                {/* Image wrapper — counter-rotated only for diamond (Employer) */}
                <div
                  style={{
                    position: "absolute",
                    width: card.imageWrapperSize ?? "460px",
                    height: card.imageWrapperSize ?? "460px",
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${card.imageOffsetX || "0px"}), calc(-50% + ${card.imageOffsetY || "0px"})) rotate(${i === 0 ? "-45deg" : "0deg"})`,
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="340px"
                    className="object-cover grayscale"
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* Mobile image — full-width banner, hidden on desktop where the shape takes over */}
              <div className="relative -mx-8 -mt-8 h-48 overflow-hidden rounded-t-2xl mb-6 lg:hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="90vw"
                  className="object-cover object-top grayscale"
                />
              </div>

              {/* Text — left side only */}
              <div
                className={`flex flex-col flex-1 ${card.textPaddingClass ?? ""}`}
              >
                <span className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-spark-yellow-light text-deep-blue">
                  {card.title}
                </span>
                {card.subheading && (
                  <h2
                    className="text-deep-blue font-semibold leading-snug mb-3"
                    style={{ fontSize: "18px" }}
                  >
                    {card.subheading}
                  </h2>
                )}
                <p className="text-grey-1 text-base leading-relaxed">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="group inline-flex items-center gap-1.5 text-navy text-base font-semibold hover:underline underline-offset-2 transition-all duration-200 mt-auto pt-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 rounded-sm"
                >
                  {card.linkText}
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
