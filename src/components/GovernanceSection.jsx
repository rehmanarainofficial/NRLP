import { governance } from '../data/siteContent'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

const GovernanceSection = () => {
  return (
    <section className="bg-navy-950 px-5 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={governance.eyebrow} title={governance.title} description={governance.description} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {governance.items.map((title) => (
            <AnimatedCard key={title} icon="ShieldCheck" title={title} description="Structured oversight and disclosure practices aligned with corporate expectations." />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GovernanceSection
