"use client"

import { ChevronDown } from "lucide-react"

export default function HeroContent() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
      <div className="max-w-2xl">
        <div className="mb-4">
          <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mb-4"></div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Ian
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mb-8">
          Computer Science student at the University of Delaware passionate about building clean, efficient, and
          user-friendly applications
        </p>

        <button
          onClick={scrollToAbout}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <span>View my work</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </div>
  )
}
