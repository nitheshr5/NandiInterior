'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectGrid({ featuredOnly = false }) {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const projects = [
    {
      id: 'upper-east-side-apartment',
      title: 'Upper East Side Apartment',
      category: 'residential',
      location: 'New York, NY',
      image: '/images/projects/project-1.jpg',
      featured: true
    },
    {
      id: 'chelsea-loft',
      title: 'Chelsea Loft',
      category: 'residential',
      location: 'New York, NY',
      image: '/images/projects/project-2.jpg',
      featured: true
    },
    {
      id: 'brooklyn-brownstone',
      title: 'Brooklyn Brownstone',
      category: 'residential',
      location: 'Brooklyn, NY',
      image: '/images/projects/project-3.jpg',
      featured: true
    },
    {
      id: 'soho-office',
      title: 'SoHo Creative Office',
      category: 'commercial',
      location: 'New York, NY',
      image: '/images/projects/project-4.jpg',
      featured: false
    },
    {
      id: 'tribeca-restaurant',
      title: 'Tribeca Restaurant',
      category: 'commercial',
      location: 'New York, NY',
      image: '/images/projects/project-5.jpg',
      featured: false
    },
    {
      id: 'hamptons-retreat',
      title: 'Hamptons Retreat',
      category: 'residential',
      location: 'East Hampton, NY',
      image: '/images/projects/project-6.jpg',
      featured: true
    },
  ]
  
  // Filter projects based on active category and featured flag
  const filteredProjects = projects.filter(project => {
    if (featuredOnly && !project.featured) return false
    if (activeCategory === 'all') return true
    return project.category === activeCategory
  })
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' }
  ]
  
  return (
    <div className="py-8">
      {!featuredOnly && (
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm md:text-base transition-colors ${
                  activeCategory === category.id 
                    ? 'text-gray-800 border-b-2 border-gray-800' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <Link 
            key={project.id}
            href={`/projects/${project.id}`}
            className="group block overflow-hidden"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-serif">{project.title}</h3>
              <p className="text-gray-600">{project.location}</p>
            </div>
          </Link>
        ))}
      </div>
      
      {featuredOnly && (
        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="inline-block px-6 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
          >
            View All Projects
          </Link>
        </div>
      )}
    </div>
  )
}