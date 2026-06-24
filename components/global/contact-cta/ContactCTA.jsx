'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContactCTA({
  heading = 'Ready to find your next Oracle specialist, or your next Oracle engagement?',
  body = 'SolutionIT works with both sides of the Oracle ERP market: employers and consultants. Tell us where you fit.',
  primaryLabel = 'Find Oracle Talent',
  primaryHref = '/contact?service=oracle-staffing#hiring-form',
  secondaryLabel = 'Find Your Next Engagement',
  secondaryHref = '/contact#next-engagement',
}) {
  return (
    <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,192,0,0.35) 100%)' }}>
      <div className="container-site">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-grey-1 text-base">
            {body}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-hover transition-colors duration-200"
            >
              {primaryLabel}
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-navy text-navy text-sm font-semibold hover:border-navy-hover hover:text-navy-hover transition-colors duration-200"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
