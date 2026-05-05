import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">Engineering & Creative Excellence</span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                <span className="gradient-text">JOSPHY PRODUCTION</span>
                <br />
                ENTERPRISE
              </h1>
              
              <p className="max-w-2xl text-lg text-muted-foreground">
                Comprehensive mechanical engineering and creative solutions. From precision AutoCAD designs to welding fabrication, graphic design, branding, and professional media production.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative hidden h-96 lg:block">
            <div className="absolute inset-0 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground">
                  JP
                </div>
                <p className="text-sm text-muted-foreground">Professional Engineering Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
