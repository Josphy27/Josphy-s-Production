import Image from 'next/image'
import { Zap, Hammer, Palette, Sparkles, Camera, Clapperboard, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    id: 1,
    title: 'AutoCAD Design',
    description: 'Professional 2D and 3D CAD designs for mechanical engineering projects. Precision drafting and technical drawings.',
    icon: Zap,
    image: '/services/autocad.jpg',
    tags: ['2D/3D Design', 'Technical Drawings', 'Precision'],
  },
  {
    id: 2,
    title: 'Welding & Fabrication',
    description: 'Expert MIG and TIG welding services with fabrication expertise. Quality metal work for industrial projects.',
    icon: Hammer,
    image: '/services/welding.jpg',
    tags: ['MIG Welding', 'TIG Welding', 'Fabrication'],
  },
  {
    id: 3,
    title: 'Graphic Design',
    description: 'Creative graphic design solutions for branding, marketing, and visual communication projects.',
    icon: Palette,
    image: '/services/graphic-design.jpg',
    tags: ['Visual Design', 'Layouts', 'Branding Assets'],
  },
  {
    id: 4,
    title: 'Branding & Identity',
    description: 'Complete branding strategies and identity design including logos, color schemes, and brand guidelines.',
    icon: Sparkles,
    image: '/services/branding.jpg',
    tags: ['Logo Design', 'Brand Strategy', 'Guidelines'],
  },
  {
    id: 5,
    title: 'Professional Photography',
    description: 'High-quality photography services for products, industrial projects, and corporate needs.',
    icon: Camera,
    image: '/services/photography.jpg',
    tags: ['Product Photos', 'Industrial', 'Corporate'],
  },
  {
    id: 6,
    title: 'Videography & Production',
    description: 'Professional video production and editing for promotional, corporate, and marketing content.',
    icon: Clapperboard,
    image: '/services/videography.jpg',
    tags: ['Video Editing', 'Production', 'Content Creation'],
  },
  {
    id: 7,
    title: 'Microsoft Office Services',
    description: 'Professional assistance with Excel, PowerPoint, Word, and other Microsoft Office applications.',
    icon: FileText,
    image: '/services/microsoft-office.jpg',
    tags: ['Excel', 'PowerPoint', 'Data Analysis'],
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Comprehensive solutions combining mechanical engineering expertise with creative professional services.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="relative mb-4 overflow-hidden rounded-lg border border-border/50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="aspect-video w-full overflow-hidden rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mb-2 font-bold text-foreground">{service.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/30 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
