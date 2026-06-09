import { production } from '../data/siteContent'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

const ProductionSection = () => {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-petroleum-300/60 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={production.eyebrow} title={production.title} description={production.description} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {production.areas.map((area) => (
            <AnimatedCard key={area.title} {...area} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductionSection
