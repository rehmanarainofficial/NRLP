import { motion } from 'framer-motion'
import { policies } from '../data/siteContent'
import SectionHeader from './SectionHeader'

const PoliciesSection = () => {
  return (
    <section className="bg-navy-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <SectionHeader eyebrow={policies.eyebrow} title={policies.title} description={policies.description} align="left" />
        <div className="grid gap-4 sm:grid-cols-2">
          {policies.items.map((policy, index) => (
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
        </div>
      </div>
    </section>
  )
}

export default PoliciesSection
