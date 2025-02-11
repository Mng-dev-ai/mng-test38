import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="container py-16 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        Hi, I'm <span className="text-primary">Your Name</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mt-4">
        Software Engineer
      </h2>
      <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mt-6">
        I build things for the web. I'm passionate about creating amazing user experiences and solving complex problems.
      </p>
      <div className="mt-8">
        <Button asChild>
          <a href="#contact">Get in Touch</a>
          </Button>
      </div>
    </section>
  )
}