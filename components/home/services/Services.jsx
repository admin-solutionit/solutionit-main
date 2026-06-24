"use client";

import Link from "next/link";
import { ArrowRight, Database, Cog, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Oracle EBS and Fusion/Cloud Staffing",
    description:
      "Oracle consultants individually vetted by our own Oracle practitioners, deployed for on-site engagements across every module and lifecycle stage.",
    href: "/oracle-erp-practice",
    cta: "Explore Oracle ERP Staffing",
    Icon: Database,
    featured: true,
  },
  {
    title: "Remote Oracle Staffing",
    description:
      "Full-time dedicated Oracle EBS and Fusion/Cloud specialists working from our managed workspaces. 50–60% cost savings on recruiting, training, and infrastructure. Local Solution, Global Reach",
    href: "/oracle-erp-practice/remote-staffing",
    cta: "Explore Remote Oracle Staffing",
    Icon: Globe,
  },
  {
    title: "Services",
    description:
      "Oracle EBS and Fusion/Cloud functional and technical services, delivered directly by SolutionIT alongside our staffing practice.",
    href: "/services",
    cta: "Explore Services",
    Icon: Users,
  },
  {
    title: "Technology Talent Solutions",
    description:
      "Technology professionals across enterprise ERP, cloud and data, application development, and DevOps, assessed with the same rigor as our Oracle practice.",
    href: "/technology-staffing",
    cta: "Explore Technology Talent Solutions",
    Icon: Cog,
    iconSize: 24,
  },
];

export default function Services() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-site">
        {/* Header — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            What we do and <span className="text-navy">how we do it.</span>
          </h2>
        </motion.div>

        {/* 4-column card row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.Icon;
            return (
              <div
                key={i}
                className={`rounded-2xl p-6 flex flex-col ${service.featured ? "bg-navy" : "bg-beige"}`}
              >
                {/* Icon badge */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${service.featured ? "bg-white" : "bg-navy"}`}
                >
                  <Icon
                    size={service.iconSize ?? 18}
                    strokeWidth={1.6}
                    className={service.featured ? "text-navy" : "text-white"}
                  />
                </div>

                <h3
                  className={`font-semibold leading-snug mt-4 ${service.featured ? "text-white" : "text-deep-blue"}`}
                  style={{ fontSize: "18px" }}
                >
                  {service.title}
                </h3>

                <p
                  className={`leading-relaxed mt-3 flex-1 ${service.featured ? "text-white" : "text-grey-1"}`}
                  style={{ fontSize: "16px" }}
                >
                  {service.description}
                </p>

                {service.cta && (
                  <div className="mt-auto pt-4 self-start">
                    <Link
                      href={service.href}
                      className={`group font-semibold hover:underline underline-offset-2 transition-all duration-200 ${service.featured ? "text-white" : "text-navy"}`}
                      style={{ fontSize: "16px" }}
                    >
                      {service.cta}
                      <ArrowRight
                        size={13}
                        className="inline ml-1 relative top-[1px] group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
