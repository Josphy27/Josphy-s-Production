import { ArrowRight, MessageSquare, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section id="contact" className="border-b border-border/50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/50 bg-card p-8 sm:p-12">
          <div className="mb-8 flex flex-col gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Transform Your Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with JOSPHY PRODUCTION ENTERPRISE today for professional engineering and creative services.
            </p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">josphy27@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-accent/10 p-2">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-sm text-muted-foreground">+2348125867485</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Chat</div>
                <div className="text-sm text-muted-foreground">Live support available</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
