'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      title: "Residential Design",
      description: "Complete interior design for homes, apartments, and vacation properties tailored to your lifestyle and preferences.",
      image: "/images/service-residential.jpg",
      link: "/services/residential"
    },
    {
      title: "Commercial Design",
      description: "Functional and aesthetic spaces for offices, retail, restaurants, and other commercial environments.",
      image: "/images/service-commercial.jpg",
      link: "/services/commercial"
    },
    {
      title: "Consultation",
      description: "Expert advice on color schemes, furniture selection, space planning, and more to enhance your space.",
      image: "/images/service-consultation.jpg",
      link: "/services/consultation"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We offer comprehensive interior design services to transform your space into a reflection of your personality and lifestyle.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link} className="text-gray-800 font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-block px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}