// src/app/components/home/Hero.js
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
  ]
  
  // Auto slideshow for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [heroImages.length])
  
  return (
    <section className="h-screen relative overflow-hidden">
      {heroImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative h-full w-full">
            <Image
              src={img}
              alt={`Interior design showcase ${index + 1}`}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center bg-black bg-opacity-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">Elevating Interior Design</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">Creating beautiful, functional spaces that reflect your unique style and personality.</p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-800 transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {heroImages.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}