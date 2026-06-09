import { motion } from 'framer-motion'
import { icons } from './iconMap'

const AnimatedCard = ({ icon = 'Building2', title, description, children, className = '' }) => {
  const Icon = icons[icon] || icons.Building2

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-petroleum-400/15 text-gold-200 ring-1 ring-petroleum-200/20">
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p> : null}
      {children}
    </motion.article>
  )
}

export default AnimatedCard
