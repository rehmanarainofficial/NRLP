import { motion } from 'framer-motion'

const SectionHeader = ({ eyebrow, title, description, align = 'center' }) => {
  const centered = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mx-auto max-w-3xl ${centered ? 'text-center' : 'text-left'}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-300">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeader
