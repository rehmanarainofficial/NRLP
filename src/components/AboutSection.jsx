import { about } from '../data/siteContent'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-charcoal-950 bg-[url('/image_038.png')] bg-cover bg-center bg-fixed px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,23,0.92),rgba(11,16,23,0.86)),radial-gradient(circle_at_18%_18%,rgba(84,179,210,0.22),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl">
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
