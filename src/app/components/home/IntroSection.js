'use client'

import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[600px]">
            <Image
              src="/images/about-intro.jpg"
              alt="Interior design showcase"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Thoughtful Design For Modern Living</h2>
            <p className="text-gray-600 mb-6">
              We believe that well-designed spaces can transform how we live, work, and feel. Our approach combines 
              aesthetic beauty with functional design to create interiors that reflect your unique personality and meet your everyday needs.
            </p>
            <p className="text-gray-600 mb-6">
              With attention to detail and a commitment to quality, we handle every aspect of the interior design process, 
              from concept development to final installation. Our team works closely with you to ensure your vision comes to life.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-serif mb-2">15+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">200+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">5</h3>
                <p className="text-gray-600">Design Awards</p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}