import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AboutSection() {
  return (
    <section id="about" className="container py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
        <Avatar className="h-48 w-48">
          <AvatarImage src="https://picsum.photos/seed/avatar/200/200" alt="Your Name" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-base md:text-lg text-muted-foreground">
            I'm a software engineer with a passion for building high-quality, scalable, and user-friendly applications. I have experience with a wide range of technologies and I'm always eager to learn new things. My goal is to create software that makes a positive impact on people's lives. I enjoy collaborating with others and contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  )
}