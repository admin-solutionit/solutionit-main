"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const models = [
  {
    title: "Contract",
    description:
      "You need an Oracle specialist now, for a defined period. We provide vetted consultants ready to engage within your timeline: no lengthy procurement cycles, no guesswork on capability.",
    ideal: "Ideal for implementations, upgrades, rollouts, and surge support.",
  },
  {
    title: "Contract-to-hire",
    description:
      "You want to evaluate before you commit. We deploy the right consultant, you work together, and if the fit is right you bring them on permanently. We handle the transition cleanly.",
    ideal:
      "Ideal for organisations building an internal Oracle practice or replacing a departing specialist.",
  },
  {
    title: "Permanent deployment",
    description:
      "You know exactly who you need and you want them on your team for the long term. We identify, vet, and present Oracle specialists who are open to the right permanent opportunity. Candidates assessed by our own SMEs, not just screened by a recruiter.",
    ideal:
      "Ideal for organisations hiring their first Oracle lead or expanding a permanent ERP team.",
  },
  {
    title: "Full project team",
    description:
      "You need more than one person: a coordinated team. We staff entire Oracle project teams scoped to your phase, your platform, and your workstreams, with a single point of accountability throughout.",
    ideal:
      "Ideal for large-scale implementations, cloud migrations, and multi-workstream programmes.",
  },
];

export default function EngagementModels() {
  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue tracking-tight">
            Four ways to engage, one standard across all of them.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 border border-grey-2/30"
            >
              <h3 className="text-deep-blue text-lg font-semibold mb-3">
                {model.title}
              </h3>
              <p className="text-grey-1 text-sm leading-relaxed mb-4">
                {model.description}
              </p>
              <p className="text-deep-blue text-sm font-medium italic">
                {model.ideal}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-deep-blue rounded-2xl p-8 md:p-10"
        >
          <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-3xl">
            <span className="text-white font-semibold">
              Looking for dedicated remote Oracle consultants?
            </span>{" "}
            Our Remote IT Consulting model provides full-time Oracle specialists
            working from our managed workspace in Massachusetts, interviewed and
            selected by you, dedicated to your organisation full-time, at
            significantly lower cost with no recruiting or infrastructure
            overhead.
          </p>
          <Link
            href="/services/remote-model"
            className="group inline-flex items-center gap-2 text-spark-yellow text-sm font-semibold hover:text-white transition-colors duration-200"
          >
            Explore Remote Oracle Consulting
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
