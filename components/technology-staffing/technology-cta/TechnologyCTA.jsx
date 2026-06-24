'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// ─── EDITABLE CONTENT ──────────────────────────────────────────────
const HEADING   = 'Tell us the role. We\'ll find the right person for it.'
const SUBTEXT   = 'Whether you need a specialist for a defined project or a long-term contract engagement, we assess for fit, not just availability. One conversation is usually enough to get started.'
const CTA_PRIMARY   = { label: 'Find Talent', href: '/contact?service=technology#hiring-form' }
const CTA_SECONDARY = { label: 'Explore our Oracle ERP Practice', href: '/oracle-erp-practice' }
// ───────────────────────────────────────────────────────────────────

export default function TechnologyCTA() {
  return (
    <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,192,0,0.35) 100%)' }}>
      <div className="container-site">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight">
            {HEADING}
          </h2>
          <p className="mt-3 text-grey-1 text-base">
            {SUBTEXT}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
            <Link
              href={CTA_PRIMARY.href}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-hover transition-colors duration-200"
            >
              {CTA_PRIMARY.label}
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
            <Link
              href={CTA_SECONDARY.href}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-navy text-navy text-sm font-semibold hover:border-navy-hover hover:text-navy-hover transition-colors duration-200"
            >
              {CTA_SECONDARY.label}
            </Link>
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}
