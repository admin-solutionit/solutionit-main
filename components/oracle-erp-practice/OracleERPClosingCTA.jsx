'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function OracleERPClosingCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-deep-blue tracking-tight">
            Tell us about your Oracle requirement.
          </h2>
          <p className="mt-3 text-grey-1 text-sm md:text-base">
            One conversation is all it takes. We&apos;ll take care of the rest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?service=oracle-staffing#hiring-form"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-navy-hover transition-colors duration-200"
            >
              Start the conversation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="#brochure"
              className="inline-flex items-center gap-2 border border-navy text-navy text-sm font-semibold px-6 py-3 rounded-full hover:bg-navy/10 transition-colors duration-200"
            >
              Download Brochure
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <p className="text-grey-1 text-sm">
            Interested in dedicated remote Oracle consultants?{' '}
            <Link
              href="/services/remote-model"
              className="text-navy font-medium hover:text-navy-hover transition-colors"
            >
              Explore Remote Oracle Consulting &rarr;
            </Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-grey-2/50 pt-8 text-center"
        >
          <p className="text-grey-1 text-sm leading-relaxed max-w-2xl mx-auto">
            Are you an Oracle ERP consultant? We&apos;d like to hear from you.
            We don&apos;t submit profiles without a conversation first,
            and we match on fit, not just availability.{' '}
            <Link
              href="/contact#next-engagement"
              className="text-navy font-medium hover:text-navy-hover transition-colors"
            >
              Explore open roles &rarr;
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
