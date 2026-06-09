import { motion } from 'framer-motion'
import { cta } from '../data/siteContent'
import { icons } from './iconMap'

const { ArrowUpRight } = icons

const CTASection = () => {
  return (
    <section className="bg-navy-950 px-5 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,108,144,0.28),rgba(231,184,92,0.12),rgba(255,255,255,0.04))] px-6 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{cta.title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-200">{cta.description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <a href="#investors" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-300 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-200">
            {cta.primary}
            <ArrowUpRight size={17} />
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/8">
            {cta.secondary}
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection
