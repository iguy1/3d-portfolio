"use client"

import { Mail, MapPin, Github, Linkedin, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense, useState } from "react"
import ContactAnimation from "./contact-animation"

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ian.guy015@gmail.com")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = "ian.guy015@gmail.com"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  return (
    <section id="contact" className="min-h-screen bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-purple-400 text-sm font-medium mb-4 tracking-wider uppercase">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact.</h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            I'm always open to discussing new opportunities, collaborating on projects, or just chatting about
            technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-8">
            {/* Email */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email me directly</p>
                    <p className="text-white text-lg font-medium">ian.guy015@gmail.com</p>
                  </div>
                </div>
                <Button
                  onClick={copyEmail}
                  variant="outline"
                  size="sm"
                  className="bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedEmail ? "Copied!" : "Copy"}
                </Button>
              </div>
              <a
                href="mailto:ian.guy015@gmail.com?subject=Hello from your portfolio!"
                className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors"
              >
                → Send me an email
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Based in</p>
                  <p className="text-white text-lg font-medium">Newark, DE</p>
                  <p className="text-gray-400 text-sm">University of Delaware</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/iguy1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ian-guy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600/20 hover:bg-blue-600/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-white font-medium mb-4">Let's Connect!</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Computer Science student at University of Delaware</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Open to internship and project opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Always excited to discuss technology and programming</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Quick to respond and eager to collaborate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3D Animation */}
          <div className="h-96 lg:h-[600px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Suspense fallback={null}>
                <ContactAnimation />
                <OrbitControls enableZoom={false} enablePan={false} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
