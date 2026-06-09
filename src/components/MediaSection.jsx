import { media } from '../data/siteContent'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

const MediaSection = () => {
  return (
    <section className="bg-charcoal-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={media.eyebrow} title={media.title} description={media.description} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {media.cards.map((card) => (
            <AnimatedCard key={card.title} icon="Newspaper" {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaSection
