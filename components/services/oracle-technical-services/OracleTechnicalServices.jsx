'use client'

import { motion } from 'framer-motion'
import { Cloud, GitBranch, BarChart3, Monitor } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Oracle Cloud Integration Services (OIC)',
    description:
      "We design, monitor, and manage cloud and on-premise integrations: application integration, process automation, visual application building, and integration analytics through Oracle's unified cloud service.",
    layout: 'wide',
  },
  {
    icon: GitBranch,
    title: 'Oracle SOA Suite',
    description:
      "We build, deploy, and manage integrations using Oracle's Service-Oriented Architecture suite, connecting disparate systems through adapters, B2B gateways, and pre-built integration with Oracle Data Integration Suite.",
    layout: 'tall',
  },
  {
    icon: BarChart3,
    title: 'Oracle Reporting',
    description:
      'BIP, OTBI, XML Publisher, and Oracle Reports — real-time insight and multi-format reporting across cloud and on-premise environments.',
    layout: 'normal',
  },
  {
    icon: Monitor,
    title: 'Oracle User Interfaces',
    description:
      'ADF, JET, and OAF web application development across web, mobile, and desktop clients on cloud and on-premise.',
    layout: 'normal',
  },
]

const gridStyles = {
  wide:   'col-span-2',
  tall:   'row-span-2',
  normal: '',
}

export default function OracleTechnicalServices() {
  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-24 bg-beige">
      <div className="container-site">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            Oracle technical services
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed max-w-2xl">
            Integration, reporting, and application development, on cloud and on-premise environments.
          </p>
        </motion.div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-4 lg:hidden">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 flex flex-col"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-5 bg-navy">
                  <Icon size={18} strokeWidth={1.6} className="text-white" />
                </div>
                <h3 className="font-semibold leading-snug mb-3 text-deep-blue" style={{ fontSize: '18px' }}>
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-grey-1">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Desktop: bento grid */}
        <div
          className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-white rounded-2xl p-7 flex flex-col ${gridStyles[service.layout]}`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-5 bg-navy">
                  <Icon size={18} strokeWidth={1.6} className="text-white" />
                </div>
                <h3 className="font-semibold leading-snug mb-3 text-deep-blue" style={{ fontSize: '18px' }}>
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-grey-1">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
