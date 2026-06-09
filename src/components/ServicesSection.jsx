import { products } from '../data/siteContent'
import SectionHeader from './SectionHeader'
import { icons } from './iconMap'
import { motion } from 'framer-motion'

const { ArrowUpRight } = icons

const ServicesSection = () => {
  return (
    <section className="bg-navy-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={products.eyebrow} title={products.title} description={products.description} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.cards.map((card) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 backdrop-blur"
            >
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${card.imageTone}`}>
                {card.image ? (
                  <img
                    src={card.image}
                    alt={`${card.title} refinery product`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-petroleum-400/15 text-gold-200 ring-1 ring-petroleum-200/20">
                  {(() => {
                    const Icon = icons[card.icon] || icons.Fuel
                    return <Icon size={24} strokeWidth={1.8} />
                  })()}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-200 transition hover:text-white">
                  Learn More
                  <ArrowUpRight size={16} />
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
