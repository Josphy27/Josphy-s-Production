'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Spring Components',
    description: 'Precision-engineered brass and steel springs',
    image: '/gallery/spring.png',
    category: 'Engineering'
  },
  {
    id: 2,
    title: 'Knuckle Joint',
    description: 'CAD-designed mechanical coupling joint',
    image: '/gallery/knuckle-joint.png',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Team Portrait',
    description: 'Professional team member',
    image: '/gallery/team-portrait.jpg',
    category: 'Team'
  },
  {
    id: 4,
    title: 'Precision Coupling',
    description: 'Industrial-grade brass coupling',
    image: '/gallery/coupling.png',
    category: 'Products'
  },
  {
    id: 5,
    title: 'Material Handling Equipment',
    description: 'Custom-built metal hand truck',
    image: '/gallery/metal-truck.jpg',
    category: 'Fabrication'
  },
  {
    id: 6,
    title: 'Door Assembly 1',
    description: '3D designed industrial door',
    image: '/gallery/door-1.png',
    category: 'Design'
  },
  {
    id: 7,
    title: 'Expert Machining',
    description: 'Professional lathe operation',
    image: '/gallery/machine-work-1.jpg',
    category: 'Machining'
  },
  {
    id: 8,
    title: 'CNC Machine Work',
    description: 'Advanced precision machining',
    image: '/gallery/machine-work-2.jpg',
    category: 'Machining'
  },
  {
    id: 9,
    title: 'Medical Stretcher',
    description: 'Fabricated emergency equipment',
    image: '/gallery/stretcher.jpg',
    category: 'Fabrication'
  },
  {
    id: 10,
    title: 'Door Assembly 2',
    description: 'Industrial door design variant',
    image: '/gallery/door-2.png',
    category: 'Design'
  },
  {
    id: 11,
    title: 'JOSPHY Branded Part',
    description: 'Precision mechanical component',
    image: '/gallery/josphy-part.png',
    category: 'Products'
  },
  {
    id: 12,
    title: 'Safety & Engineering',
    description: 'Safety-certified professional',
    image: '/gallery/safety-engineer.png',
    category: 'Team'
  },
  {
    id: 13,
    title: 'Architectural Canopy',
    description: '3D structural design project',
    image: '/gallery/canopy.png',
    category: 'Design'
  },
  {
    id: 14,
    title: 'Leaf Coupling Assembly',
    description: 'Precision-engineered coupling',
    image: '/gallery/leaf-coupling.png',
    category: 'Products'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index: number) => {
    setSelectedImage(index)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const categories = ['All', ...new Set(galleryItems.map((item) => item.category))]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">Portfolio Gallery</h2>
          <p className="text-lg text-muted-foreground">
            Explore our collection of precision engineering, fabrication projects, and team expertise
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openModal(index)}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-4">
                <div className="mb-2 inline-block rounded bg-primary/10 px-3 py-1">
                  <span className="text-xs font-semibold text-primary">{item.category}</span>
                </div>
                <h3 className="mb-1 font-bold text-foreground line-clamp-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-h-[90vh] max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close modal"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative h-[60vh] w-full overflow-hidden rounded-lg bg-black">
              <Image
                src={galleryItems[currentIndex].image}
                alt={galleryItems[currentIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg bg-card p-4">
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-foreground">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {galleryItems[currentIndex].description}
                </p>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <button
                  onClick={prevImage}
                  className="rounded-lg border border-border/50 p-2 hover:bg-primary/10 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 text-primary" />
                </button>
                <span className="text-sm text-muted-foreground min-w-fit">
                  {currentIndex + 1} / {galleryItems.length}
                </span>
                <button
                  onClick={nextImage}
                  className="rounded-lg border border-border/50 p-2 hover:bg-primary/10 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
