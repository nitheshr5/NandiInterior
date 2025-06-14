import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '../components/sections/ContactCTA'

export const metadata = {
  title: 'Services | Interior Design Studio',
  description: 'Explore our comprehensive interior design services for residential and commercial spaces.',
}

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/images/services/services-hero.jpg"
          alt="Interior design services"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white">Our Services</h1>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Comprehensive Design Services</h2>
            <p className="text-gray-600">
              We offer a full range of interior design services tailored to your unique needs. 
              Whether you're renovating a single room or designing an entire home or commercial space, 
              our team brings creativity, expertise, and attention to detail to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif mb-6">Residential Design</h2>
              <p className="text-gray-600 mb-6">
                Our residential design services transform houses into homes that reflect your personality and lifestyle. 
                From city apartments to country houses, we create beautiful, functional spaces where you can live comfortably and entertain with ease.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Full home interior design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Kitchen and bathroom remodels</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom furniture and cabinetry</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Material and finish selection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Art and accessories curation</span>
                </li>
              </ul>
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
              >
                Inquire About Residential Design
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-96 lg:h-[500px]">
              <Image
                src="/images/services/residential.jpg"
                alt="Residential interior design"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/services/commercial.jpg"
                alt="Commercial interior design"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Commercial Design</h2>
              <p className="text-gray-600 mb-6">
                Our commercial design services create workspaces that inspire productivity, reflect your brand identity, 
                and make a lasting impression on clients and employees alike. We understand that commercial spaces must be 
                both functional and beautiful.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Office and workspace design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Retail and hospitality environments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Space planning and layout optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Branding integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Furniture specification and procurement</span>
                </li>
              </ul>
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
              >
                Inquire About Commercial Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design Consultation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif mb-6">Design Consultation</h2>
              <p className="text-gray-600 mb-6">
                Not ready for a full design project? Our consultation services provide expert advice and guidance 
                to help you make informed decisions about your space. Whether you need color suggestions, furniture 
                recommendations, or a fresh perspective on your existing layout, our consultations offer valuable 
                insights tailored to your specific needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Color and material consultations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Furniture layout recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Style assessment and recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Shopping assistance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Art and accessory placement</span>
                </li>
              </ul>
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
              >
                Book a Consultation
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-96 lg:h-[500px]">
              <Image
                src="/images/services/consultation.jpg"
                alt="Design consultation"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Furnishings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/services/custom-furnishings.jpg"
                alt="Custom furniture and furnishings"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Custom Furnishings</h2>
              <p className="text-gray-600 mb-6">
                When standard options don't meet your specific needs or aesthetic vision, our custom furnishings 
                services provide unique, tailored solutions. We collaborate with skilled artisans and craftspeople 
                to create beautiful, one-of-a-kind pieces that perfectly complement your space.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom furniture design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Built-in cabinetry and storage solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom window treatments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Upholstery and reupholstery services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Specialty lighting fixtures</span>
                </li>
              </ul>
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
              >
                Inquire About Custom Furnishings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Design Process</h2>
            <p className="text-gray-600 mb-10">
              We follow a comprehensive, collaborative approach to ensure your vision becomes reality. 
              Our proven process guides you from initial concept through final installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 shadow-lg">
              <div className="text-4xl font-serif text-gray-800 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-4">Consultation</h3>
              <p className="text-gray-600">
                We begin with an in-depth conversation to understand your needs, preferences, 
                lifestyle, and budget. This initial meeting helps us establish the foundation for your project.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 shadow-lg">
              <div className="text-4xl font-serif text-gray-800 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-4">Concept Development</h3>
              <p className="text-gray-600">
                Our design team creates concept boards, space plans, and material selections that align 
                with your vision. We present these concepts for your feedback and refinement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 shadow-lg">
              <div className="text-4xl font-serif text-gray-800 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-4">Design Development</h3>
              <p className="text-gray-600">
                Once the concept is approved, we develop detailed designs including construction documents, 
                specifications, and finalize all selections to prepare for implementation.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 shadow-lg">
              <div className="text-4xl font-serif text-gray-800 mb-4">04</div>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-gray-600">
                We manage the execution of your project, coordinating with contractors, vendors, and artisans 
                to ensure every detail is implemented according to plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Investment</h2>
            <p className="text-gray-600">
              We offer flexible pricing options to accommodate various project scopes and budgets. 
              Our transparent approach ensures you understand the investment required for your design project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Option 1 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Hourly Consultation</h3>
              <p className="text-gray-600 mb-6">
                For targeted advice or smaller projects, our hourly consultation service provides 
                expert guidance without a full design commitment.
              </p>
              <div className="text-xl font-serif font-semibold mb-8">Starting at $150/hour</div>
              <Link 
                href="/contact"
                className="inline-block w-full text-center px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
              >
                Book Now
              </Link>
            </div>

            {/* Option 2 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-gray-800 transform md:-translate-y-4">
              <div className="bg-gray-800 text-white text-xs uppercase tracking-wider py-1 px-3 inline-block mb-4">Most Popular</div>
              <h3 className="text-xl font-semibold mb-4">Full-Service Design</h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive design service includes concept development, detailed design, 
                procurement, and installation management.
              </p>
              <div className="text-xl font-serif font-semibold mb-8">Custom Quote</div>
              <Link 
                href="/contact"
                className="inline-block w-full text-center px-6 py-3 bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                Request Quote
              </Link>
            </div>

            {/* Option 3 */}
            <div className="bg-white p-8 shadow-lg border-t-4 border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Design Plan</h3>
              <p className="text-gray-600 mb-6">
                We create a detailed design plan that you can implement at your own pace, 
                providing a roadmap for your project.
              </p>
              <div className="text-xl font-serif font-semibold mb-8">Starting at $2,500</div>
              <Link 
                href="/contact"
                className="inline-block w-full text-center px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">How long does a typical design project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary depending on scope and complexity. A single room redesign might take 6-8 weeks, 
                  while a full home renovation could take 6-12 months. During our initial consultation, we'll provide 
                  a more accurate timeline based on your specific project.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Do you work with clients remotely?</h3>
                <p className="text-gray-600">
                  Yes, we offer remote design services for clients outside our local area. Through video consultations, 
                  digital design presentations, and detailed documentation, we can successfully manage your project 
                  regardless of location.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">How involved will I be in the design process?</h3>
                <p className="text-gray-600">
                  Our process is highly collaborative. We value your input and will involve you at key decision points 
                  throughout the project. You'll have opportunities to review and approve concepts, materials, and 
                  furnishings before any final decisions are made.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Can you work with my existing furniture and décor?</h3>
                <p className="text-gray-600">
                  Absolutely. We often incorporate cherished existing pieces into new designs. During our initial 
                  consultation, we'll discuss which items you'd like to keep and how to integrate them 
                  seamlessly with new elements.
                </p>
              </div>
              
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Do you have a specific design style?</h3>
                <p className="text-gray-600">
                  While we have our aesthetic preferences, our primary goal is to create spaces that reflect your 
                  personal style and meet your functional needs. We're versatile in our approach and can work with 
                  various design styles, from traditional to contemporary and everything in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        title="Ready to Transform Your Space?"
        description="Contact us today to discuss your project and discover how our design services can elevate your environment."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </main>
  )
}