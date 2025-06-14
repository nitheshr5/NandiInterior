// src/app/components/ui/Footer.js
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  
  const handleSubscribe = (e) => {
    e.preventDefault()
    // Implement newsletter subscription functionality
    console.log('Subscribed with email:', email)
    setEmail('')
    // You would typically send this to your API or email service
  }
  
  return (
    <footer className="py-7 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-serif mb-4">NANDI INTERIORS</h3>
            <p className="mb-4">Creating exceptional interior spaces that inspire and delight.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nandi_interior_design?igsh=MWZpdjZpMnRsOXNjMw==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
              <a href="https://www.youtube.com/@NandiinteriorDesign" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">YouTube</a>
              <a href="https://houzz.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <p>Nallur Bajagoli</p>
            <p>Karkala, India</p>
            <p className="mt-4">nandiinteriordesign@gmail.com</p>
            <p>+91 9591834159</p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe for design inspiration, project updates, and more.</p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-gray-800 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-white text-gray-800 px-4 py-2 whitespace-nowrap hover:bg-gray-200 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} Nandi Interiors. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}