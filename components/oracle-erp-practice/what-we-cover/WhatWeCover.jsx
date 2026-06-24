"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Route, Code2 } from "lucide-react";

const TABS = [
  {
    icon: Layers,
    title: "Functional Modules",
    items: [
      "Financials",
      "SCM and Manufacturing",
      "HCM",
      "CX Cloud",
      "Oracle Projects / PPM",
    ],
  },
  {
    icon: Route,
    title: "Business Processes",
    items: [
      "Order to Cash (O2C)",
      "Procure to Pay (P2P)",
      "Record to Report (R2R)",
      "Hire to Retire (H2R)",
      "Plan to Produce",
    ],
  },
  {
    icon: Code2,
    title: "Technical Skills",
    items: [
      "OIC",
      "RICEWF / CEMLI",
      "SOA Suite",
      "BI Publisher / OTBI",
      "FRS / Smart View",
      "OAF / UI",
      "Data Conversion",
    ],
  },
];

export default function WhatWeCover() {
  return (
    <section className="bg-white">
      {/* Heading — sits on white above the image */}
      <div className="container-site pt-16 md:pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            What our <span className="text-navy">consultants cover</span>
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed">
            Functional modules, business processes, and technical skills, across
            EBS and Fusion/Cloud.
          </p>
        </motion.div>
      </div>

      {/* Image block — cards float inside, image visible above and below */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/oracle-erp-practice/consultants-cover.webp"
          alt="Oracle ERP consultants"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* Cards sit over the image, with image visible below */}
        <div className="relative z-10 container-site pt-10 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {TABS.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(4,30,66,0.10)] flex flex-col"
                >
                  {/* Icon badge */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-4 bg-navy">
                    <Icon size={18} strokeWidth={1.6} className="text-white" />
                  </div>

                  <h3
                    className="font-semibold text-deep-blue leading-snug mb-4"
                    style={{ fontSize: "18px" }}
                  >
                    {tab.title}
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {tab.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-beige text-deep-blue text-sm font-medium leading-none"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
