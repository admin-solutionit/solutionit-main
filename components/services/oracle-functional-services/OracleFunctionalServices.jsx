'use client'

import { motion } from 'framer-motion'
import { CalendarDays, BookOpen, BarChart3, Building2 } from 'lucide-react'

const services = [
  {
    icon: CalendarDays,
    title: 'Period end close',
    description:
      'We help clients realign month-end, quarter-end, and year-end close processes, reducing cycle time and effort across the period close sequence.',
  },
  {
    icon: BarChart3,
    title: 'Chart of accounts design',
    description:
      'We support COA structure design and redesign, helping clients improve financial statement transparency without requiring reimplementation.',
  },
  {
    icon: Building2,
    title: 'Mergers, acquisitions, and consolidations',
    description:
      'We support clients through the financial systems complexity of mergers, acquisitions, and consolidations, recommending the right approach to minimise disruption and cost.',
  },
  {
    icon: BookOpen,
    title: 'Subledger accounting and reporting',
    description:
      'We help clients automate accounting through subledgers and eliminate top-sided entries and reclasses recorded directly in the General Ledger.',
  },
]

export default function OracleFunctionalServices() {
  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-white">
      <div className="container-site">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            Oracle functional services
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed max-w-2xl">
            Oracle EBS and Fusion/Cloud functional services across the full application lifecycle, from initial configuration through to ongoing optimisation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-beige rounded-2xl p-7 flex flex-col"
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
