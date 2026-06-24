"use client";

import { motion } from "framer-motion";

const ebsFunctionalTags = ["O2C", "P2P", "R2R", "H2R", "Plan to Produce"];
const ebsTechnicalTags = [
  "RICEWF",
  "OAF",
  "BI Publisher",
  "SOA Suite",
  "Data Conversion",
];
const fusionFunctionalTags = [
  "Fusion Financials",
  "Cloud HCM",
  "CX Cloud",
  "Cloud SCM",
  "Cloud PPM",
];
const fusionTechnicalTags = ["OIC", "OTBI", "FRS", "Smart View", "CEMLI"];
const educationTags = [
  "CPA",
  "MBA Finance",
  "Accounting",
  "Engineering",
  "Supply Chain",
  "Logistics",
  "Oracle Certifications",
];

function Tag({ children }) {
  return (
    <span className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white text-deep-blue border border-grey-2/40">
      {children}
    </span>
  );
}

function DarkTag({ children }) {
  return (
    <span className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/10">
      {children}
    </span>
  );
}

export default function WhoWePlace() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-site">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 max-w-3xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue tracking-tight">
            Oracle specialists: functional and technical, across EBS and Fusion
            Cloud.
          </h2>
          <p className="mt-4 text-grey-1 text-sm md:text-base leading-relaxed">
            Every consultant we deploy carries a minimum of 10 years&apos;
            hands-on Oracle experience and has been evaluated by our internal
            subject matter experts. Here is what that looks like across the two
            platforms and both disciplines.
          </p>
        </motion.div>

        {/* Non-negotiable standard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-deep-blue rounded-2xl p-8 md:p-10 mb-10"
        >
          <h3 className="text-white text-lg font-semibold mb-3">
            Non-negotiable standard
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            10+ years of hands-on Oracle experience &middot; Evaluated by an
            internal Oracle SME &middot; Relevant education and certification in
            the functional or technical domain
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Oracle EBS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-beige rounded-2xl p-8 md:p-10"
          >
            <div className="mb-6">
              <h3 className="text-deep-blue text-xl font-bold">Oracle EBS</h3>
              <p className="text-navy text-3xl font-bold mt-1">300+ deployed</p>
            </div>
            <p className="text-grey-1 text-sm leading-relaxed mb-8">
              Our deepest bench. Over three decades of Oracle EBS deployments
              across implementations, upgrades, and ongoing support. Functional
              and technical consultants who have lived inside EBS environments
              and know the platform at its most complex.
            </p>

            {/* Functional */}
            <div className="mb-6">
              <h4 className="text-deep-blue text-base font-semibold mb-1">
                Functional
              </h4>
              <p className="text-grey-1 text-xs uppercase tracking-wider font-medium mb-3">
                Configuration and process expertise
              </p>
              <p className="text-grey-1 text-sm leading-relaxed mb-4">
                Financials, SCM, HCM, CX, and PPM: consultants who configure,
                implement, and support core EBS modules across the full business
                process lifecycle.
              </p>
              <div className="flex flex-wrap gap-2">
                {ebsFunctionalTags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </div>
            </div>

            {/* Technical */}
            <div>
              <h4 className="text-deep-blue text-base font-semibold mb-1">
                Technical
              </h4>
              <p className="text-grey-1 text-xs uppercase tracking-wider font-medium mb-3">
                Development and integration
              </p>
              <p className="text-grey-1 text-sm leading-relaxed mb-4">
                Developers and architects experienced in the full EBS technical
                stack: extensions, integrations, reporting, and data migration
                at enterprise scale.
              </p>
              <div className="flex flex-wrap gap-2">
                {ebsTechnicalTags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Oracle Fusion Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-beige rounded-2xl p-8 md:p-10"
          >
            <div className="mb-6">
              <h3 className="text-deep-blue text-xl font-bold">
                Oracle Fusion Cloud
              </h3>
              <p className="text-navy text-3xl font-bold mt-1">100+ deployed</p>
            </div>
            <p className="text-grey-1 text-sm leading-relaxed mb-8">
              As Oracle has moved to the cloud, so have we. Our Fusion Cloud
              consultants bring hands-on experience across SaaS implementations,
              EBS-to-Cloud migrations, and cloud-native deployments. The talent
              organisations need as they make the transition.
            </p>

            {/* Functional */}
            <div className="mb-6">
              <h4 className="text-deep-blue text-base font-semibold mb-1">
                Functional
              </h4>
              <p className="text-grey-1 text-xs uppercase tracking-wider font-medium mb-3">
                Cloud configuration and rollout
              </p>
              <p className="text-grey-1 text-sm leading-relaxed mb-4">
                Fusion Financials, SCM, HCM, CX Cloud, and PPM consultants who
                have led cloud implementations and understand the differences
                from EBS configuration.
              </p>
              <div className="flex flex-wrap gap-2">
                {fusionFunctionalTags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </div>
            </div>

            {/* Technical */}
            <div>
              <h4 className="text-deep-blue text-base font-semibold mb-1">
                Technical
              </h4>
              <p className="text-grey-1 text-xs uppercase tracking-wider font-medium mb-3">
                Integration and cloud delivery
              </p>
              <p className="text-grey-1 text-sm leading-relaxed mb-4">
                Technical consultants experienced in cloud-specific tooling:
                OIC, OTBI, FRS, and Smart View, as well as the CEMLI framework
                for cloud extensions.
              </p>
              <div className="flex flex-wrap gap-2">
                {fusionTechnicalTags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            {
              value: "400+",
              label: "Oracle consultants deployed across EBS and Fusion Cloud",
            },
            {
              value: "100+",
              label: "Certified Oracle ERP employees on our team",
            },
            {
              value: "10 yrs",
              label:
                "Minimum hands-on Oracle experience: every consultant, every deployment",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-beige rounded-xl p-6 text-center"
            >
              <p className="text-navy text-2xl md:text-3xl font-bold">
                {stat.value}
              </p>
              <p className="text-grey-1 text-xs mt-2 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="bg-beige rounded-xl p-6"
          >
            <p className="text-grey-1 text-xs uppercase tracking-wider font-medium mb-3">
              Relevant education includes
            </p>
            <div className="flex flex-wrap gap-1.5">
              {educationTags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
