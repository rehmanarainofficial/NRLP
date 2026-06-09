import { about } from '../data/siteContent'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

const AboutSection = () => {
  return (
    <section id="about" className="bg-charcoal-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={about.eyebrow} title={about.title} description={about.body} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.cards.map((card) => (
            <AnimatedCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
