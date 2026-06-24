"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Oracle EBS and Fusion/Cloud consultants deployed",
  },
  {
    value: 100,
    suffix: "+",
    label: "Enterprise clients served",
  },
  {
    value: 100,
    suffix: "+",
    label: "Full-time employees, available now",
  },
  {
    value: 50,
    suffix: "+",
    label: "Active consultants in pipeline, screened and ready",
  },
];

function StatItem({ item, delay }) {
  const { count, ref } = useCountUp(item.value, 1600);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-start text-left first:pl-0 px-8 py-6 border-r border-grey-2/60 even:border-r-0 md:even:border-r last:border-r-0"
    >
      <span className="text-[2.25rem] md:text-[2.75rem] font-bold leading-none tracking-tight text-deep-blue font-serif">
        {count}
        {item.suffix}
      </span>
      <p className="mt-2 text-grey-1 text-sm leading-snug">{item.label}</p>
    </motion.div>
  );
}

export default function ERPStats() {
  return (
    <section className="bg-white pb-10 md:pb-12 pt-4">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((item, i) => (
            <StatItem key={i} item={item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
