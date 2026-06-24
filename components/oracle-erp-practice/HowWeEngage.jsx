'use client'

import { motion } from 'framer-motion'

const models = [
  {
    title: 'Contract',
    description: 'Vetted Oracle specialist for a defined period, ready to engage without lengthy procurement cycles.',
    idealFor: 'Implementations, upgrades, rollouts, and surge support',
  },
  {
    title: 'Contract-to-hire',
    description: 'Evaluate the consultant before committing. If the fit is right, bring them on permanently. We handle the transition.',
    idealFor: 'Building an internal Oracle practice or replacing a departing specialist',
  },
]

export default function HowWeEngage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue tracking-tight">
            How we engage
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed">
            Two models, built around your hiring timeline and commitment level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.09)', transition: { duration: 0.2, ease: 'easeOut' } }}
              className="rounded-2xl overflow-hidden border border-grey-2"
            >
              <div className="px-6 py-4 bg-navy/[0.08]">
                <h3 className="text-deep-blue text-base font-semibold">{model.title}</h3>
              </div>

              <div className="px-6 py-6">
                <p className="text-grey-1 text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
                <div className="border-t border-grey-2 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-navy">
                    Ideal For
                  </p>
                  <p className="text-grey-1 text-sm leading-relaxed">{model.idealFor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
