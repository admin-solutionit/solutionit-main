'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'We listen to the requirement',
    description:
      'We start with a direct conversation, not a form. We want to understand the role, the platform, the project stage, and what success looks like in the first 90 days. The more specific you are, the more precise our search.',
    timeline: 'Intake call',
    timelineDetail: 'Day 1',
  },
  {
    num: '02',
    title: 'Our SME evaluates the candidates',
    description:
      'We don\'t send profiles based on keyword matches. An internal Oracle subject matter expert reviews each candidate against your specific requirement: module, discipline, platform, and project stage. Only those who pass that review reach you.',
    timeline: 'SME review: our differentiator',
    timelineDetail: 'Days 2–4',
  },
  {
    num: '03',
    title: 'You receive a focused shortlist',
    description:
      'We present two or three vetted candidates, not ten profiles for you to sift through. Each comes with a clear summary of their relevant experience, the modules they\'ve worked in, and why we think they fit your requirement. You decide who you want to meet.',
    timeline: 'Shortlist delivery',
    timelineDetail: 'Days 3–5',
  },
  {
    num: '04',
    title: 'Consultant engaged, we stay accountable',
    description:
      'Once you\'ve selected your consultant, we handle the engagement logistics and remain your point of contact throughout. If something isn\'t working, you tell us and we fix it. Not after a month, but immediately.',
    timeline: 'Deployment and ongoing support',
    timelineDetail: 'Week 2+',
  },
]

export default function HowWeWork() {
  return (
    <section className="py-16 md:py-24 bg-deep-blue">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-4 max-w-3xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
            From first conversation to consultant on the ground: here is
            how we work.
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
            We don&apos;t run keyword searches and come back with a pile of CVs.
            Every engagement follows the same four-step process, designed
            to get you the right person, not just a fast one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/[0.06] rounded-2xl p-8 border border-white/[0.08]"
            >
              <span className="text-spark-yellow text-3xl font-bold">
                {step.num}
              </span>
              <h3 className="text-white text-base font-semibold mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {step.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <span className="text-white/40 text-xs font-medium">
                  {step.timeline}
                </span>
                <span className="text-spark-yellow text-xs font-semibold">
                  {step.timelineDetail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-white/50 text-sm leading-relaxed max-w-3xl italic"
        >
          For full project teams: the same four steps apply, with an
          additional scoping conversation to map workstreams, headcount, and
          phasing before the SME review begins. One point of contact throughout.
        </motion.p>
      </div>
    </section>
  )
}
