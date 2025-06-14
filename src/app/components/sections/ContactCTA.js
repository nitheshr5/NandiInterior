'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ContactCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Interior design background"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8">
            Let's create a space that reflects your personality, meets your needs, and inspires you every day.
            Contact us to schedule a consultation and start your design journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/portfolio"
              className="inline-block px-8 py-4 bg-white text-gray-800 hover:bg-gray-100 transition-colors text-lg"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}