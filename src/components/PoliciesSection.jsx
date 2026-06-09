import { motion } from 'framer-motion'
import { policies } from '../data/siteContent'
import SectionHeader from './SectionHeader'

const PoliciesSection = () => {
  return (
    <section className="bg-navy-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <SectionHeader eyebrow={policies.eyebrow} title={policies.title} description={policies.description} align="left" />
        <div className="grid gap-4 sm:grid-cols-2">
          {policies.certifications.map((policy, index) => (
            <motion.div
              key={policy}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="rounded-lg border border-white/10 bg-white/[0.05] p-5"
            >
              <span className="text-sm font-semibold text-gold-200">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{policy}</h3>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32, duration: 0.55 }}
            className="sm:col-span-2 rounded-lg border border-gold-300/25 bg-gold-300/[0.06] p-6"
          >
            <h3 className="text-xl font-semibold text-white">{policies.warningTitle}</h3>
            <ul className="mt-5 space-y-3">
              {policies.warningPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PoliciesSection
