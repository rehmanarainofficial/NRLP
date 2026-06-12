import AboutSection from './components/AboutSection'
import BackToTop from './components/BackToTop'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import GovernanceSection from './components/GovernanceSection'
import Hero from './components/Hero'
import InvestorSection from './components/InvestorSection'
import MediaSection from './components/MediaSection'
import Navbar from './components/Navbar'
import PoliciesSection from './components/PoliciesSection'
import ProductionSection from './components/ProductionSection'
import ServicesSection from './components/ServicesSection'
import SmoothScroll from './components/SmoothScroll'

const App = () => {
  return (
    <SmoothScroll>
      <div id="top" className="min-h-screen bg-navy-950 font-sans text-white">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <ServicesSection />
          <ProductionSection />
          <PoliciesSection />
          <InvestorSection />
          <GovernanceSection />
          <MediaSection />
          <CTASection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  )
}

export default App
