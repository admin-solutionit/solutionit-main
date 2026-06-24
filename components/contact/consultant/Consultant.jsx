"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HEX_PATH =
  "M 67,0 L 154,0 A 21,21 0 0 1 171,11 L 215,99 A 21,21 0 0 1 215,121 L 171,209 A 21,21 0 0 1 154,220 L 67,220 A 21,21 0 0 1 49,209 L 5,121 A 21,21 0 0 1 5,99 L 49,11 A 21,21 0 0 1 67,0 Z";

const CARD_SHAPES = ["diamond", "circle"];

const CARD_LAYERS = [
  { size: "300px", bottom: "-120px", right: "-120px", opacity: 0.08 },
  { size: "215px", bottom: "-82px", right: "-82px", opacity: 0.13 },
  { size: "135px", bottom: "-44px", right: "-44px", opacity: 0.19 },
];

const cards = [
  {
    title: "Current openings",
    body: "Browse live roles across Oracle ERP and enterprise technology.",
    cta: { label: "Browse Openings", href: "/careers#current-openings" },
  },
  {
    title: "Apply directly",
    body: "Don't see the right role? Tell us about yourself and we'll keep you in mind.",
    cta: { label: "Send Your Details", href: "/careers#talent-form" },
  },
];

export default function Consultant() {
  return (
    <section
      id="next-engagement"
      className="py-10 md:py-14 bg-white scroll-mt-20 md:scroll-mt-24"
    >
      <div className="container-site">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            Looking for Your <span className="text-navy">Next Engagement?</span>
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed max-w-3xl">
            Browse current openings or send us your details, we'll reach out
            when the right role comes up.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden border border-grey-2/40"
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
                </svg>
              ))}

              <div className="relative z-10">
                <h3
                  className="font-semibold text-deep-blue leading-snug mb-2"
                  style={{ fontSize: "18px" }}
                >
                  {card.title}
                </h3>
                <p className="text-grey-1 text-base leading-relaxed">
                  {card.body}
                </p>
              </div>
              <div className="mt-auto relative z-10">
                <Link
                  href={card.cta.href}
                  className="group font-semibold text-navy hover:underline underline-offset-2 transition-all duration-200"
                  style={{ fontSize: "16px" }}
                >
                  {card.cta.label}
                  <ArrowRight
                    size={13}
                    className="inline ml-1 relative top-[1px] group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="pt-6 border-t border-grey-2/40"
        >
          <p className="text-sm font-semibold text-deep-blue mb-2">
            Prefer to talk? We're happy to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a
              href="tel:+17815031603"
              className="inline-flex items-center gap-2 text-navy text-sm hover:underline transition-colors duration-200"
            >
              <Phone size={14} />
              +1 781-503-1603
            </a>
            <a
              href="mailto:info@solutionit.com"
              className="inline-flex items-center gap-2 text-navy text-sm hover:underline transition-colors duration-200"
            >
              <Mail size={14} />
              info@solutionit.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
