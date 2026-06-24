"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  {
    city: "Boston, Massachusetts",
    lines: [
      "Solution IT, Inc.",
      "187 Ballardvale Street, Suite A215",
      "Wilmington, MA 01887",
    ],
    image: "/images/contact/boston-skyline.webp",
    alt: "Boston office",
    imageRadius: "6px",
    shapeTop: "40px",
    shapeRight: "-90px",
    shapeSize: "220px",
    textPaddingRight: "180px",
    imageWrapperSize: "320px",
    imageOffsetX: "-40px",
    imageOffsetY: "60px",
    isFirst: true,
  },
  {
    city: "Vizag, India",
    lines: [
      "SolutionIT Pvt. Ltd.",
      "7-1-75, Encore Centre",
      "Chinna Waltair, Vizag",
      "Andhra Pradesh – 530017",
    ],
    image: "/images/contact/vizag-skyline.webp",
    alt: "Vizag office",
    imageRadius: "50%",
    shapeTop: "-40px",
    shapeRight: "-40px",
    shapeSize: "220px",
    blobTop: "-160px",
    blobRight: "-160px",
    textPaddingRight: "180px",
    imageWrapperSize: "320px",
    imageOffsetY: "60px",
    isFirst: false,
  },
];

export default function Locations() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            Where We Are
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-grey-2/40 min-h-[300px] md:min-h-[440px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.123456789!2d-71.1731!3d42.5584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39f3b3b3b3b3b%3A0x0!2s187+Ballardvale+St%2C+Wilmington%2C+MA+01887!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SolutionIT Boston office location"
            />
          </motion.div>

          {/* Right — stacked location cards */}
          <div className="grid grid-rows-2 gap-4">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl relative flex flex-col p-8 overflow-hidden border border-grey-2/40 h-full"
              >
                {/* Blob — second card only */}
                {!loc.isFirst && (
                  <div
                    className="absolute pointer-events-none hidden lg:block"
                    style={{
                      width: "320px",
                      height: "320px",
                      top: loc.blobTop,
                      right: loc.blobRight,
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
                    width: loc.shapeSize,
                    height: loc.shapeSize,
                    top: loc.shapeTop,
                    right: loc.shapeRight,
                    borderRadius: loc.imageRadius,
                    ...(loc.isFirst && {
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
                      width: loc.imageWrapperSize,
                      height: loc.imageWrapperSize,
                      top: "50%",
                      left: "50%",
                      transform: `translate(calc(-50% + ${loc.imageOffsetX || "0px"}), calc(-50% + ${loc.imageOffsetY || "0px"})) rotate(${loc.isFirst ? "-45deg" : "0deg"})`,
                    }}
                  >
                    <Image
                      src={loc.image}
                      alt={loc.alt}
                      fill
                      sizes="280px"
                      className="object-cover grayscale"
                    />
                  </div>
                </div>

                {/* Mobile image */}
                <div className="relative -mx-8 -mt-8 h-48 overflow-hidden rounded-t-2xl mb-6 lg:hidden">
                  <Image
                    src={loc.image}
                    alt={loc.alt}
                    fill
                    sizes="90vw"
                    className="object-cover object-center grayscale"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 lg:pr-[180px]">
                  <span className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-spark-yellow-light text-deep-blue">
                    {loc.city}
                  </span>
                  <div className="flex flex-col gap-1">
                    {loc.lines.map((line, li) => (
                      <p
                        key={li}
                        className="text-grey-1 text-base leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
