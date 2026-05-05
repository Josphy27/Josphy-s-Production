'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="border-t border-border/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <Image
                src="/profile.jpg"
                alt="Founder Profile"
                width={400}
                height={500}
                className="relative rounded-xl border border-border/50 object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:order-1">
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                  About <span className="gradient-text">JOSPHY</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  JOSPHY PRODUCTION ENTERPRISE is driven by a passion for precision, innovation, and excellence. We are a full-service company specializing in mechanical engineering, design, and creative solutions that bring your vision to life.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Our Expertise</h3>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">AutoCAD Design & Technical Drawings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">Professional Welding & Fabrication (MIG, TIG)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">Creative Branding & Graphic Design</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">Professional Photography & Videography</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">Business Solutions with Microsoft Office</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                We&apos;re committed to delivering exceptional quality and transforming ideas into reality with precision and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
