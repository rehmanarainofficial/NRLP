import { investors } from '../data/siteContent'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

const InvestorSection = () => {
  return (
    <section id="investors" className="bg-charcoal-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={investors.eyebrow} title={investors.title} description={investors.description} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {investors.highlights.map((title) => (
            <AnimatedCard key={title} icon="TrendingUp" title={title} description="Accessible corporate disclosure and shareholder information for informed decision making." />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InvestorSection
