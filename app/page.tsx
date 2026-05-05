import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Gallery from '@/components/gallery'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  )
}
