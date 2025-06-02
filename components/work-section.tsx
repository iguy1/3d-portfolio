import { Github, ExternalLink } from "lucide-react"

export default function WorkSection() {
  const projects = [
    {
      title: "Flappy Bird Clone",
      image: "/projects/flappy-bird-clone.png",
      description:
        "This was my first ever created game. I used Unity Game Engine to build it. I have always been very passionate about video games since I was a kid. So this was meant to be cool to me to create a game myself.",
      technologies: ["Unity", "C#", "Game Development"],
      github: "#",
      live: "https://iguy1.itch.io/flappy-clone",
    },
    {
      title: "Loan Amortization Calculator",
      image: "/projects/loan-amortization-calculator.jpg",
      description:
        "This was a school final project for my TypeScript class, written using a React-like framework. It calculates loan payments and amortization schedules with an intuitive user interface.",
      technologies: ["TypeScript", "React", "Financial Calculations"],
      github: "#",
      live: "https://ud-f24-cisc181.github.io/final-project-phase-2-iguy1/",
    },
    {
      title: "Professional Society of Computing",
      // No image in folder, will use placeholder
      image: "/projects/cslub.jpg",
      description:
        "I created this React application for a school club I recently joined. It provides an easy-to-navigate webpage for current members and people interested in joining.",
      technologies: ["React", "TypeScript", "Web Development"],
      github: "#",
      live: "https://iguy1.github.io/compsciclub/",
    },
    {
      title: "Mental Health App",
      image: "/projects/mental-health-app.png",
      description:
        "A hackathon project focused on mental health and wellness, providing tools and resources for users to manage their mental well-being. Built with modern web technologies.",
      technologies: ["React", "TypeScript", "Health Tech"],
      github: "#",
      live: "https://sprightly-starburst-efc9fc.netlify.app/",
    },
    {
      title: "GameHub",
      image: "/projects/gamehub.jpg",
      description:
        "A comprehensive gaming platform that showcases various games and gaming resources. Built with React and modern web technologies for an engaging user experience.",
      technologies: ["React", "TypeScript", "Gaming"],
      github: "#",
      live: "https://iguy1.github.io/gamehub/",
    },
  ]

  return (
    <section id="work" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-purple-400 text-sm font-medium mb-4 tracking-wider uppercase">My work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Projects.</h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            Here are some of the projects I've worked on. Following projects showcase my learning journey and practical
            application of Computer Science concepts. Each project represents different aspects of my studies and
            personal exploration in programming and game development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
