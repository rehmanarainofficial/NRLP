import { products } from '../data/siteContent'
import SectionHeader from './SectionHeader'
import { icons } from './iconMap'
import { motion } from 'framer-motion'

const { ArrowUpRight } = icons

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-navy-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(84,179,210,0.14),transparent_28%),radial-gradient(circle_at_84%_30%,rgba(214,168,77,0.12),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHeader eyebrow={products.eyebrow} title={products.title} description="" align="left" />
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:ml-auto">{products.description}</p>
        </div>
        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {products.cards.map((card) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="group relative min-h-[25rem] overflow-hidden rounded-lg border border-white/10 bg-charcoal-950 shadow-2xl shadow-black/25"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.imageTone}`}>
                {card.image ? (
                  <img
                    src={card.image}
                    alt={`${card.title} refinery product`}
                    className="h-full w-full object-cover opacity-82 transition duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : null}
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,24,0.08)_0%,rgba(4,12,24,0.44)_42%,rgba(4,12,24,0.95)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(4,12,24,0.02)_0%,rgba(4,12,24,0.26)_38%,rgba(4,12,24,0.92)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-navy-950/65 text-gold-200 ring-1 ring-white/15 backdrop-blur-md transition duration-500 group-hover:bg-gold-300 group-hover:text-navy-950">
                  {(() => {
                    const Icon = icons[card.icon] || icons.Fuel
                    return <Icon size={26} strokeWidth={1.8} />
                  })()}
                </div>
                <h3 className="text-3xl font-semibold uppercase tracking-wide text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)] sm:text-4xl">
                  {card.title}
                </h3>
                <span className="mt-5 block h-0.5 w-full max-w-md bg-gold-300 transition-all duration-500 group-hover:max-w-full group-hover:bg-petroleum-200" />
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 opacity-100 transition duration-500 sm:text-base lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  {card.description}
                </p>
                <a href="#" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-200 opacity-100 transition duration-500 hover:text-white lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  Read More
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-300 text-navy-950 transition duration-300 group-hover:translate-x-1">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
