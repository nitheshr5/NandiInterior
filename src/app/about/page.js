import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '../components/sections/ContactCTA'

export const metadata = {
  title: 'About | Interior Design Studio',
  description: 'Learn about our interior design studio, our team, and our approach to creating beautiful spaces.',
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/images/about/about-hero.jpg"
          alt="Interior design studio"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white">About Us</h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, our interior design studio has grown from a small team with big ideas into a 
                recognized design authority. With a focus on creating spaces that are both beautiful and functional, 
                we've built a reputation for thoughtful design that transforms how people live and work.
              </p>
              <p className="text-gray-600 mb-6">
                Our approach combines timeless design principles with fresh perspectives, resulting in interiors 
                that feel both classic and contemporary. We believe that a well-designed space should reflect the 
                personality of its inhabitants while enhancing their daily experience.
              </p>
              <p className="text-gray-600">
                Over the years, we've had the privilege of working with clients across the country, from 
                Manhattan penthouses to coastal retreats, bringing our signature approach to each unique project.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/about/founder.jpg"
                alt="Studio founder"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-80 w-full mb-6">
                <Image
                  src="/images/about/team-1.jpg"
                  alt="Team member name"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Alexandra Smith</h3>
              <p className="text-gray-600 mb-3">Principal Designer</p>
              <p className="text-gray-600">
                With over 15 years of experience, Alexandra brings a wealth of knowledge and creativity to every project.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-80 w-full mb-6">
                <Image
                  src="/images/about/team-2.jpg"
                  alt="Team member name"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Michael Johnson</h3>
              <p className="text-gray-600 mb-3">Senior Designer</p>
              <p className="text-gray-600">
                Michael specializes in architectural details and creating sophisticated, livable spaces.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-80 w-full mb-6">
                <Image
                  src="/images/about/team-3.jpg"
                  alt="Team member name"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Sophia Chen</h3>
              <p className="text-gray-600 mb-3">Design Associate</p>
              <p className="text-gray-600">
                Sophia brings fresh perspectives and innovative solutions to our team's creative process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Our Philosophy</h2>
            <p className="text-xl text-gray-600 mb-6">
              "We believe that great design has the power to transform not just spaces, but lives. 
              Every project begins with understanding how our clients live, work, and interact with their 
              environment, allowing us to create spaces that are not just beautiful, but meaningful."
            </p>
            <p className="text-gray-600">
              Our design approach is guided by principles of quality, authenticity, and attention to detail. 
              We balance aesthetics with functionality, creating spaces that are both visually stunning and 
              perfectly suited to the needs of those who inhabit them.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Recognition & Awards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Award 1 */}
            <div className="bg-white p-8 shadow text-center">
              <h3 className="text-xl font-serif mb-2">Design Excellence Award</h3>
              <p className="text-gray-600 mb-3">American Society of Interior Designers</p>
              <p className="text-gray-600">2023</p>
            </div>
            
            {/* Award 2 */}
            <div className="bg-white p-8 shadow text-center">
              <h3 className="text-xl font-serif mb-2">Best of Houzz</h3>
              <p className="text-gray-600 mb-3">Design Category</p>
              <p className="text-gray-600">2022</p>
            </div>
            
            {/* Award 3 */}
            <div className="bg-white p-8 shadow text-center">
              <h3 className="text-xl font-serif mb-2">Interior Design Magazine</h3>
              <p className="text-gray-600 mb-3">Rising Star Recognition</p>
              <p className="text-gray-600">2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  )
}