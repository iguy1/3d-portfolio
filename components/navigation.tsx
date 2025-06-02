"use client"

import { Play, Github, Linkedin } from "lucide-react"

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-gray-900/80 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <Play className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-white font-semibold">Ian Guy</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("work")} className="text-gray-300 hover:text-white transition-colors">
            Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
          <a
            href="https://github.com/iguy1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ian-guy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  )
}
