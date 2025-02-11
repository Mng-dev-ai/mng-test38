import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1.",
    imageUrl: "https://picsum.photos/seed/project1/400/200",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2.",
    imageUrl: "https://picsum.photos/seed/project2/400/200",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of project 3.",
    imageUrl: "https://picsum.photos/seed/project3/400/200",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={project.imageUrl} alt={project.title} className="rounded-md" />
              <div className="mt-4">
                <Button asChild variant="link" className="px-0">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}