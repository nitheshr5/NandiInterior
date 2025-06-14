// src/app/page.js
import Hero from './components/home/Hero'
import IntroSection from './components/home/IntroSection'
import FeaturedProjects from './components/home/FeaturedProjects'
import ServicesOverview from './components/home/ServicesOverview'
import Testimonials from './components/home/Testimonials'
import ContactCTA from './components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedProjects />
      <ServicesOverview />
      <Testimonials />
      <ContactCTA />
    </>
  )
}