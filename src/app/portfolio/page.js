import Image from 'next/image'
import ProjectGrid from '../components/home/ProjectGrid'
import ContactCTA from '../components/sections/ContactCTA'

export const metadata = {
  title: 'Portfolio | Interior Design Studio',
  description: 'Explore our portfolio of residential and commercial interior design projects.',
}

export default function Portfolio() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/images/portfolio/portfolio-hero.jpg"
          alt="Interior design portfolio"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white">Our Portfolio</h1>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Explore Our Projects</h2>
            <p className="text-gray-600">
              Browse through our carefully curated collection of residential and commercial design projects. 
              Each space tells a unique story and reflects our commitment to thoughtful, personalized design.
            </p>
          </div>
          
          {/* ProjectGrid component with all projects */}
          <ProjectGrid />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}