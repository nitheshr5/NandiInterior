// src/app/components/ui/Navbar.js
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl md:text-3xl font-serif tracking-widest text-gray-800">
              NANDI INTERIORS
            </Link>
            
            <div className="flex items-center space-x-6">
              <button 
                className="text-gray-800 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col justify-between h-5">
                  <span className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Full screen menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <nav className="text-center">
            <ul className="space-y-8">
              <li>
                <Link 
                  href="/about" 
                  className="text-3xl font-serif hover:text-gray-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-3xl font-serif hover:text-gray-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="text-3xl font-serif hover:text-gray-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-3xl font-serif hover:text-gray-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-3xl font-serif hover:text-gray-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}