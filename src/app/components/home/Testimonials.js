'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const testimonials = [
    {
      quote: "Working with this design team was an absolute pleasure. They transformed our home into a space that truly reflects our personality and lifestyle. Every detail was thoughtfully considered.",
      author: "Sarah Johnson",
      location: "New York",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "The attention to detail and level of creativity was beyond our expectations. Our office space not only looks beautiful but functions perfectly for our team's needs.",
      author: "Michael Chen",
      location: "Chicago",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "From the initial consultation to the final reveal, the process was smooth and professional. They listened to our needs and delivered a space that exceeds what we envisioned.",
      author: "Emily Rodriguez",
      location: "Los Angeles",
      image: "/images/testimonial-3.jpg"
    }
  ]
  
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it — hear from some of our satisfied clients.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 shadow-lg relative">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative h-60 w-60 rounded-full overflow-hidden shrink-0">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <blockquote className="text-lg md:text-xl italic mb-4">"{testimonials[activeTestimonial].quote}"</blockquote>
                <div className="font-serif text-xl">{testimonials[activeTestimonial].author}</div>
                <div className="text-gray-600">{testimonials[activeTestimonial].location}</div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === activeTestimonial ? 'bg-gray-800 scale-125' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}