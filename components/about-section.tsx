import { Code, Database, Globe, Smartphone } from "lucide-react"

export default function AboutSection() {
  const skills = [
    {
      icon: Code,
      name: "Frontend Development",
      description: "React, TypeScript, HTML5, CSS3, and responsive web design principles",
    },
    {
      icon: Database,
      name: "Programming Languages",
      description: "TypeScript, Python, C, C++, and learning new technologies through coursework",
    },
    {
      icon: Globe,
      name: "Game Development",
      description: "Unity game engine for creating interactive games and experiences",
    },
    {
      icon: Smartphone,
      name: "AI-Powered Development",
      description: "Cursor, GitHub Copilot, and v0 for enhanced coding productivity and assistance",
    },
  ]

  const techStack = [
    "TypeScript",
    "Python",
    "C",
    "C++",
    "React",
    "Node.js",
    "Unity",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "VS Code",
    "Cursor",
    "GitHub Copilot",
    "v0",
  ]

  return (
    <section id="about" className="min-h-screen bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-purple-400 text-sm font-medium mb-4 tracking-wider uppercase">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Overview.</h2>
          <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
            I'm Ian Guy, a Computer Science student at the University of Delaware passionate about technology and
            programming. I enjoy building clean, efficient, and user-friendly applications. Through my coursework and
            personal projects, I'm constantly learning new technologies and developing my skills in software development
            and game development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            As a Computer Science student at the University of Delaware, I'm passionate about technology and
            programming. I focus on building clean, efficient, and user-friendly applications through both academic
            projects and personal development, including game development with Unity.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Through my coursework in data structures, algorithms, and software engineering, I've gained hands-on
            experience with TypeScript, Python, C, and C++. I leverage AI tools like Cursor, GitHub Copilot, and v0 to
            enhance my development workflow and productivity.
          </p>
        </div>
      </div>
    </section>
  )
}
