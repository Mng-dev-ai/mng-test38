import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express.js",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "SQL",
  "NoSQL",
  "Git",
  "Docker",
  "AWS",
  "CI/CD",
];

export function SkillsSection() {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </section>
  )
}