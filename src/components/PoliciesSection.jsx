import { motion } from 'framer-motion'
import { policies } from '../data/siteContent'
import SectionHeader from './SectionHeader'
import { icons } from './iconMap'

const { CheckCircle2, ShieldCheck, TriangleAlert } = icons

const PoliciesSection = () => {
  return (
    <section className="relative overflow-hidden bg-navy-950 px-5 py-24 sm:px-6 lg:py-32">
      <img
        src="/image_038.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-38"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,17,31,0.96),rgba(6,17,31,0.84)_48%,rgba(6,17,31,0.74)),linear-gradient(180deg,rgba(6,17,31,0.72),rgba(6,17,31,0.96))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <SectionHeader eyebrow={policies.eyebrow} title={policies.title} description={policies.description} align="left" />
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-9 flex max-w-xl items-center gap-4 border-l-2 border-gold-300/80 bg-white/[0.045] px-5 py-4 backdrop-blur-md"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-gold-300 text-navy-950">
              <ShieldCheck size={26} strokeWidth={2} />
            </div>
            <p className="text-sm leading-7 text-slate-200">
              Certified systems, verified communication, and transparent public guidance for applicants and investors.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {policies.certifications.map((policy, index) => (
            <motion.div
              key={policy}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              transition={{ delay: index * 0.08, duration: 0.58, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-300 via-petroleum-200 to-transparent opacity-80" />
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold text-gold-200">0{index + 1}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-petroleum-400/16 text-gold-200 ring-1 ring-white/12 transition duration-300 group-hover:bg-gold-300 group-hover:text-navy-950">
                  <CheckCircle2 size={20} />
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-white">{policy}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Management standard maintained through documented controls and corporate oversight.</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32, duration: 0.55 }}
            className="relative overflow-hidden rounded-lg border border-gold-300/35 bg-[linear-gradient(135deg,rgba(214,168,77,0.18),rgba(84,179,210,0.08),rgba(255,255,255,0.04))] p-6 shadow-2xl shadow-black/25 backdrop-blur-md sm:col-span-2"
          >
            <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full border border-gold-300/20" />
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-gold-300 text-navy-950">
                <TriangleAlert size={24} strokeWidth={2} />
              </span>
              <h3 className="text-xl font-semibold text-white">{policies.warningTitle}</h3>
            </div>
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
